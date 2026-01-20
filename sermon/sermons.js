google.charts.load('current');
google.charts.setOnLoadCallback(loadSermons);

function loadSermons() {
  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1JCKy1GR3rwCGodjwi2_9hovN5tpgjbiix6fITZX8OMM/gviz/tq?tqx=out:json'
  );

  query.send(res => {
    if (res.isError()) {
      console.error(res.getMessage());
      return;
    }

    const table = res.getDataTable();
    const data = [];

    for (let i = 0; i < table.getNumberOfRows(); i++) {
      data.push({
        timestamp: table.getValue(i, 0),
        title: table.getValue(i, 1),
        preacher: table.getValue(i, 2),
        date: table.getValue(i, 3),
        youtube: table.getValue(i, 4),
        docs: table.getValue(i, 5)
      });
    }

    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    render(data);
  });
}

function render(data) {
  let featured = '';
  let list = '';

  data.forEach((r, i) => {
    const html = `
      <div>
        <img src="https://img.youtube.com/vi/${r.youtube}/hqdefault.jpg">
        <h3>${r.title}</h3>
        <p>${r.preacher}</p>
      </div>
    `;

    if (i === 0) featured = html;
    else list += html;
  });

  document.getElementById('featured').innerHTML = featured;
  document.getElementById('list').innerHTML = list;
}
