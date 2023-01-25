 
 const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
     this.tags.forEach(tag =>{
      console.log(this.title, tag);
    });
  }
 };

 video.showTags();

/////////////////////////////////////////
 function playVideo(a ,b) {
  console.log(this);
 };

 playVideo.call({name: 'Marcos'}, 1, 2);//Pode só passar os parametros
 playVideo.apply({name: 'Marcos'}, [1, 2]);//Aqui também, mas como um Array
playVideo.bind({name: 'Marcos'})();


///////////////////////////////////////////

