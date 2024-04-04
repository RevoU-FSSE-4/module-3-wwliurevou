async function fetchData():Promise<any> {
	try {
		//const request = new Request("https://module3-api-is2m.onrender.com/random-todos");
		const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
		const sampleData : string = await response.json();
		return sampleData
		}

    catch{}
  }

  const allData = fetchData();
allData.then(sampleData => {
  sampleData.forEach((element: any) => {
    console.log(element)
  });
})
