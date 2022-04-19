const picArr =
[{
  name:"Scatter plot",
  catagory:"Python",
  keyword:"scatter",
  image:"charts/1.png"
},
{
  name:"Bubble plot with Encircling",
  catagory:"Python",
  keyword:"bubble",
  image:"charts/2.png"
},
{
  name:"Scatter plot with linear regression line of best fit",
  catagory:"Python",
  keyword:"scatter",
  image:"charts/3.png"
},
{
  name:"Scatter plot with linear regression line of best fit",
  catagory:"Python",
  keyword:"Tiger",
  image:"charts/3-2.png"
},
{
  name:"Jittering with stripplot",
  catagory:"Python",
  keyword:"jittered",
  image:"charts/4.png"
},
{
  name:"Counts Plot",
  catagory:"Python",
  keyword:"counts",
  image:"charts/5.png"
},
{
  name:"Marginal Histogram",
  catagory:"Python",
  keyword:"marginal",
  image:"charts/6.png"
},
{
  name:"Marginal Boxplot",
  catagory:"Python",
  keyword:"marginal",
  image:"charts/7.png"
},
{
  name:"Correllogram",
  catagory:"Python",
  keyword:"correllogram",
  image:"charts/8.png"
},
{
  name:"Pairwise Plot",
  catagory:"Python",
  keyword:"pairwise",
  image:"charts/9.png"
},
{
  name:"Diverging Bars",
  catagory:"Python",
  keyword:"diverging",
  image:"charts/10.png"
},
{
  name:"Diverging Texts",
  catagory:"Python",
  keyword:"diverging",
  image:"charts/11.png"
},
{
  name:"Diverging Dot Plot",
  catagory:"Python",
  keyword:"diverging",
  image:"charts/12.png"
},
{
  name:"Diverging Lollipop Chart with Markers",
  catagory:"Python",
  keyword:"scatter",
  image:"charts/13.png"
},
{
  name:"Area Chart",
  catagory:"Python",
  keyword:"area",
  image:"charts/14.png"
},
{
  name:"Ordered Bar Chart",
  catagory:"Python",
  keyword:"bar",
  image:"charts/15.png"
},
{
  name:"Lollipop Chart",
  catagory:"Python",
  keyword:"lollopop",
  image:"charts/16.png"
},
{
  name:"Dot Plot",
  catagory:"Python",
  keyword:"dot",
  image:"charts/17.png"
},
{
  name:"Slope Chart",
  catagory:"Python",
  keyword:"slope",
  image:"charts/18.png"
},
{
  name:"Dumbbell Plot",
  catagory:"Python",
  keyword:"dumbbell",
  image:"charts/19.png"
},
{
  name:"Histogram for Continuous Variable",
  catagory:"Python",
  keyword:"histogram",
  image:"charts/20.png"
},
{
  name:"Histogram for Categorical Variable",
  catagory:"Python",
  keyword:"histogram",
  image:"charts/21.png"
},
{
  name:"Density Plot",
  catagory:"Python",
  keyword:"density",
  image:"charts/22.png"
},
{
  name:"Joy Plot",
  catagory:"Python",
  keyword:"joy",
  image:"charts/23.png"
},
{
  name:"Slope Chart",
  catagory:"Python",
  keyword:"slope",
  image:"charts/24.png"
},
{
  name:"Distributed Dot Plot",
  catagory:"Python",
  keyword:"dot",
  image:"charts/25.png"
},
{
  name:"Box Plot",
  catagory:"Python",
  keyword:"box",
  image:"charts/26.png"
},
{
  name:"Dot + Box Plot",
  catagory:"Python",
  keyword:"dot",
  image:"charts/27.png"
},
{
  name:"Violin Plot",
  catagory:"Python",
  keyword:"violin",
  image:"charts/28.png"
},
{
  name:"Population Pyramid",
  catagory:"Python",
  keyword:"slope",
  image:"charts/29.png"
},
{
  name:"Categorical Plots",
  catagory:"Python",
  keyword:"categorical",
  image:"charts/30.png"
},
{
  name:"Categorical Plots-2",
  catagory:"Python",
  keyword:"categorical",
  image:"charts/30-2.png"
}
];

function findPicByTag(tag){

  document.getElementById('picArea').innerHTML = "";

  let picArea=document.getElementById("picArea");
  for(i = 0; i < picArr.length; i++){

    if(picArr[i].catagory == tag)
      {
        let newPic=document.createElement("img");
        newPic.src = picArr[i].image;

        newPic.width="300";
        newPic.height="180";
        picArea.appendChild(newPic);
        newPic.onclick=function()
        {
           window.open(this.src);
        }
          }
        }
}

function findPic(){

  var tagInput=document.getElementById('picTagText').value;

	   document.getElementById('picArea').innerHTML = "";

	    let picArea=document.getElementById("picArea");
	     for(var i=0;i<picArr.length;i++)
          {

            if(picArr[i].keyword.toLowerCase() == tagInput.toLowerCase()){
    	         let newPic=document.createElement("img");
	              newPic.src = picArr[i].image;

 	  	           newPic.width="300";
  	  	           newPic.height="180";
  	  	             picArea.appendChild(newPic);
                     newPic.onclick=function()
                     {
                        window.open(this.src);
                     }
                   }
                 }

}
