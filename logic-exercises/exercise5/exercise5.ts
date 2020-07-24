function DateSeconds(seconds: number): string{
  
  return
}

function formatar_segundos(h,min,s) {
  return (h*3600)+(min*60)+(s);
 }
 
 var data = formatar_segundos(23,14,32);
 var data2 = formatar_segundos(22,55,27);
 
 var diferenca = data_format(data-data2);
 function data_format(s) {
  this.h = Math.floor(s/3600);
  this.min = Math.floor((s - (this.h*3600))/60);
  this.s = s - (Math.floor(s/60)*60);
  return this.h + "h "+ this.min + "min "+this.s + "s";
 }