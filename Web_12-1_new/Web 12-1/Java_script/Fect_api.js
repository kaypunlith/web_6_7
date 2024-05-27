const URL = "https://fakestoreapi.com/products";
async function  FectApi(){
    const respon= await fetch(URL);
     const result= await respon.json();
      console.log(result);
      var data=""
     result.forEach(el => {
        data += `
       <div class="col-xl-3 col-lg-3 g-4">
                           <div class="box">
                            <img src=${el.image}>
                              <div class="title">
                                <h5>${el.title}</h5>
                              </div>
                              <div class="des">

                              </div>
                           </div>
                    </div>
        `;
     });
     document.getElementById("item").innerHTML = data;
}
FectApi();