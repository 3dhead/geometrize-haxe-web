(function(X){function ea(a,b){function c(){}c.prototype=a;var d=new c,f;for(f in b)d[f]=b[f];b.toString!==Object.prototype.toString&&(d.toString=b.toString);return d}function ha(a,b){if(null==b)return null;null==b.__id__&&(b.__id__=ia++);var c;null==a.hx__closures__?a.hx__closures__={}:c=a.hx__closures__[b.__id__];null==c&&(c=function(){return c.method.apply(c.scope,arguments)},c.scope=a,c.method=b,a.hx__closures__[b.__id__]=c);return c}var B=function(){return q.__string_rec(this,"")},Q=function(){};
Q.__name__=!0;Q.remove=function(a,b){var c=a.indexOf(b);if(-1==c)return!1;a.splice(c,1);return!0};Q.iter=function(a){return{cur:0,arr:a,hasNext:function(){return this.cur<this.arr.length},next:function(){return this.arr[this.cur++]}}};var e=function(){this.maxImageSize=1024;window.onload=ha(this,this.onWindowLoaded)};e.__name__=!0;e.main=function(){new e};e.downScaleCanvas=function(a,b){if(0>=b||1<=b)throw new g("Scale must be a positive number < 1");for(var c=b*b,d=a.width,f=a.height,k=d*b|0,u=f*
b|0,D,e=0,A=0,w,l,m,x,r,n=0,h=0,q=0,v=0,y,z=a.getContext("2d").getImageData(0,0,d,f).data,p=new ja(3*k*u),t;e<f;){l=e*b|0;D=l|0;m=3*D*k|0;if(y=D!=(l+b|0))q=D+1-l,v=l+b-D-1;for(D=0;D<d;){w=D*b|0;x=w|0;l=m+3*x|0;if(r=x!=Math.floor(w+b))n=x+1-w,h=w+b-x-1|0;w=z[A];x=z[A+1];t=z[A+2];r||y?r&&!y?(r=n*b,p[l]+=w*r,p[l+1]+=x*r,p[l+2]+=t*r,r=h*b,p[l+3]+=w*r,p[l+4]+=x*r,p[l+5]+=t*r):y&&!r?(r=q*b,p[l]+=w*r,p[l+1]+=x*r,p[l+2]+=t*r,r=v*b,p[l+3*k]+=w*r,p[l+3*k+1]+=x*r,p[l+3*k+2]+=t*r):(r=n*q,p[l]+=w*r,p[l+1]+=x*
r,p[l+2]+=t*r,r=h*q,p[l+3]+=w*r,p[l+4]+=x*r,p[l+5]+=t*r,r=n*v,p[l+3*k]+=w*r,p[l+3*k+1]+=x*r,p[l+3*k+2]+=t*r,r=h*v,p[l+3*k+3]+=w*r,p[l+3*k+4]+=x*r,p[l+3*k+5]+=t*r):(p[l]+=w*c,p[l+1]+=x*c,p[l+2]+=t*c);A+=4;++D}++e}c=window.document.createElement("canvas");c.width=k;c.height=u;d=c.getContext("2d");f=d.getImageData(0,0,k,u);e=f.data;for(l=A=m=0;m<k*u;)e[l]=Math.ceil(p[A]),e[l+1]=Math.ceil(p[A+1]),e[l+2]=Math.ceil(p[A+2]),e[l+3]=255,A+=3,l+=4,++m;d.putImageData(f,0,0);return c};e.prototype={onWindowLoaded:function(){this.maxShapeAdditionRate=
15;this.set_running(!1);this.shapeTypes=C.create([m.TRIANGLE]);e.trianglesCheckbox.checked=!0;this.shapeOpacity=128;this.candidateShapesPerStep=50;this.shapeMutationsPerStep=100;this.shapeResults=[];this.targetImage=this.createDefaultBitmap();this.onTargetImageChanged();var a=this;noUiSlider.create(e.shapeOpacitySlider,{start:[this.shapeOpacity],connect:"lower",range:{min:[1,1],max:[255]},pips:{mode:"range",density:10}});this.createTooltips(e.shapeOpacitySlider);e.shapeOpacitySlider.noUiSlider.on("change",
function(b,c,k){a.shapeOpacity=b[c]|0});e.shapeOpacitySlider.noUiSlider.on("update",function(b,c,k){a.updateTooltips(e.shapeOpacitySlider,c,b[c]|0)});noUiSlider.create(e.randomShapesPerStepSlider,{start:[this.candidateShapesPerStep],connect:"lower",range:{min:[10,1],max:[300]},pips:{mode:"range",density:10}});this.createTooltips(e.randomShapesPerStepSlider);e.randomShapesPerStepSlider.noUiSlider.on("change",function(b,c,k){a.candidateShapesPerStep=b[c]|0});e.randomShapesPerStepSlider.noUiSlider.on("update",
function(b,c,k){a.updateTooltips(e.randomShapesPerStepSlider,c,b[c]|0)});noUiSlider.create(e.shapeMutationsPerStepSlider,{start:[this.shapeMutationsPerStep],connect:"lower",range:{min:[10,1],max:[300]},pips:{mode:"range",density:10}});this.createTooltips(e.shapeMutationsPerStepSlider);e.shapeMutationsPerStepSlider.noUiSlider.on("change",function(b,c,k){a.shapeMutationsPerStep=b[c]|0});e.shapeMutationsPerStepSlider.noUiSlider.on("update",function(b,c,k){a.updateTooltips(e.shapeMutationsPerStepSlider,
c,b[c]|0)});var b=this;e.runPauseButton.addEventListener("click",function(){b.set_running(!b.running)},!1);e.openImageFileInput.addEventListener("change",function(a){if(null!=e.openImageFileInput.files&&0!=e.openImageFileInput.files.length){a=e.openImageFileInput.files[0];var c=new FileReader;c.onload=function(a){var d=new Image;d.onload=function(a){for(a=b.imageToCanvas(d);a.width>b.maxImageSize||a.height>b.maxImageSize;)a=e.downScaleCanvas(a,.5);b.targetImage=b.canvasToBitmap(a);b.onTargetImageChanged()};
d.src=c.result};c.readAsDataURL(a);e.openImageFileInput.files[0]=null}},!1);e.stepButton.addEventListener("click",function(){b.stepRunner()},!1);e.resetButton.addEventListener("click",function(){b.targetImage=b.targetImage;b.onTargetImageChanged()},!1);e.saveImageButton.addEventListener("click",function(a){a=window.document.createElement("canvas");var c=b.runner.getImageData();b.drawBitmapToCanvas(c,a);null!=a.msToBlob?(a=a.msToBlob(),window.navigator.msSaveBlob(a,"geometrized_image.png")):(a=a.toDataURL("image/png"),
e.saveImageButton.download="geometrized_image.png",e.saveImageButton.href=a)},!1);e.saveSvgButton.addEventListener("click",function(a){a=h["export"](b.shapeResults,b.runner.model.width,b.runner.model.height);a=new Blob([a],{type:"image/svg+xml;charset=utf-8"});var c=window.navigator;null!=c.msSaveBlob?c.msSaveBlob(a,"geometrized_svg.svg"):(a=URL.createObjectURL(a),e.saveSvgButton.download="geometrized_svg.svg",e.saveSvgButton.href=a)},!1);var c=function(a,c){c?C.add(b.shapeTypes,a):Q.remove(b.shapeTypes,
a)};e.rectanglesCheckbox.addEventListener("click",function(){c(m.RECTANGLE,e.rectanglesCheckbox.checked)},!1);e.rotatedRectanglesCheckbox.addEventListener("click",function(){c(m.ROTATED_RECTANGLE,e.rotatedRectanglesCheckbox.checked)},!1);e.trianglesCheckbox.addEventListener("click",function(){c(m.TRIANGLE,e.trianglesCheckbox.checked)},!1);e.ellipsesCheckbox.addEventListener("click",function(){c(m.ELLIPSE,e.ellipsesCheckbox.checked)},!1);e.rotatedEllipsesCheckbox.addEventListener("click",function(){c(m.ROTATED_ELLIPSE,
e.rotatedEllipsesCheckbox.checked)},!1);e.circlesCheckbox.addEventListener("click",function(){c(m.CIRCLE,e.circlesCheckbox.checked)},!1);e.linesCheckbox.addEventListener("click",function(){c(m.LINE,e.linesCheckbox.checked)},!1);this.animate();this.set_running(!0)},animate:function(){var a=this;this.running&&this.stepRunner();window.setTimeout(function(){a.animate()},1/this.maxShapeAdditionRate*1E3|0)},stepRunner:function(){this.appendShapeResults(this.runner.step(new Y(0==this.shapeTypes.length?[m.TRIANGLE]:
C.toArray(this.shapeTypes),this.shapeOpacity,this.candidateShapesPerStep,this.shapeMutationsPerStep)));this.drawBitmapToCanvas(this.runner.getImageData(),e.currentImageCanvas)},createTooltips:function(a){for(var b=a.getElementsByClassName("noUi-handle"),c=0,d=b.length;c<d;){var f=c++,k=window.document.createElement("div");k.className+="tooltip";b[f].appendChild(k);this.updateTooltips(a,f,0)}},updateTooltips:function(a,b,c){a.getElementsByClassName("noUi-handle")[b].innerHTML="<span class='tooltip'>"+
(null==c?"null":""+c)+"</span>"},appendEventText:function(a){},clearEventText:function(){},appendSvgText:function(a){},clearSvgText:function(){},appendShapeResults:function(a){this.shapeResults=this.shapeResults.concat(a);for(var b=0;b<a.length;){var c=a[b];++b;var d=c.shape;this.appendEventText("Added shape "+this.shapeResults.length+": "+n.string(d.getType())+" with data "+n.string(d.getRawShapeData()));this.appendSvgText(h.exportShape(c))}this.setSvgElement(h["export"](this.shapeResults,this.runner.model.width,
this.runner.model.height))},drawBitmapToCanvas:function(a,b){b.width=a.width;b.height=a.height;for(var c=b.getContext("2d",null),d=c.createImageData(b.width,b.height),f=new R(new S(4*a.data.length)),k=0;k<a.data.length;){var u=4*k;f.b[u]=a.data[k]>>>24&255;f.b[u+1]=a.data[k]>>>16&255;f.b[u+2]=a.data[k]>>>8&255;f.b[u+3]=a.data[k]&255;++k}k=0;for(u=f.length;k<u;){var g=k++;d.data[g]=f.b[g]}c.putImageData(d,0,0);return b},canvasToBitmap:function(a){for(var b=a.getContext("2d",null).getImageData(0,0,
a.width,a.height),c=new R(new S(b.data.length)),d=0,f=c.length;d<f;){var k=d++;c.b[k]=b.data[k]&255}b=a.width;d=a.height;a=new J;if(null==c)throw new g("FAIL: bytes != null");f=c.length;k=b*d*4;if(f!=k)throw new g("FAIL: values are not equal (expected: "+k+", actual: "+f+")");a.width=b;a.height=d;a.data=Array(c.length/4|0);for(d=b=0;b<c.length;){var f=c.b[b],k=c.b[b+1],u=c.b[b+2],e=c.b[b+3];a.data[d]=((0>f?0:255<f?255:f)<<24)+((0>k?0:255<k?255:k)<<16)+((0>u?0:255<u?255:u)<<8)+(0>e?0:255<e?255:e);
b+=4;++d}return a},imageToCanvas:function(a){var b=window.document.createElement("canvas");b.width=a.width;b.height=a.height;b.getContext("2d",null).drawImage(a,0,0);return b},setSvgElement:function(a){e.currentSvgContainer.innerHTML=a},createDefaultBitmap:function(){return this.canvasToBitmap(this.imageToCanvas(e.seagullImageElement))},onTargetImageChanged:function(){null==this.runner?this.appendEventText("Initializing image runner and setting default bitmap..."):this.appendEventText("Resetting current image and removing shapes...");
var a=ba.getAverageImageColor(this.targetImage);this.runner=new Z(this.targetImage,a);this.drawBitmapToCanvas(this.runner.getImageData(),e.currentImageCanvas);this.clearEventText();this.clearSvgText();this.shapeResults=[];var b=new K(this.targetImage.width,this.targetImage.height);b.x1=0;b.y1=0;b.x2=this.targetImage.width-1;b.y2=this.targetImage.height-1;this.appendShapeResults([{score:0,color:a,shape:b}])},set_running:function(a){e.runPauseButton.innerHTML=a?"<h2>Pause</h2>":"<h2>Run</h2>";return this.running=
a},__class__:e};Math.__name__=!0;var n=function(){};n.__name__=!0;n.string=function(a){return q.__string_rec(a,"")};n.random=function(a){return 0>=a?0:Math.floor(Math.random()*a)};var ca=function(){};ca.__name__=!0;ca.replace=function(a,b,c){return a.split(b).join(c)};var I={__name__:!0,toFloat:function(a){return 0>a?4294967296+a:a+0}},C={__name__:!0,create:function(a){return null==a?[]:C.toSet(a)},add:function(a,b){if(null==b)throw new g("FAIL: element != null");if(C.contains(a,b))return!1;a.push(b);
return!0},contains:function(a,b){for(var c=0;c<a.length;){var d=a[c];++c;if(d==b)return!0}return!1},toArray:function(a){return a.slice()},toSet:function(a){for(var b=[],c=0;c<a.length;){var d=a[c];++c;C.add(b,d)}return b}},v=function(){};v.__name__=!0;v.computeColor=function(a,b,c,d){if(null==a)throw new g("FAIL: target != null");if(null==b)throw new g("FAIL: current != null");if(null==c)throw new g("FAIL: lines != null");if(!(0<=d))throw new g("FAIL: alpha >= 0");for(var f=0,k=0,u=0,e=0,m=65535/
d|0,A=0;A<c.length;){var w=c[A];++A;for(var l=w.y,n=w.x1,w=w.x2+1;n<w;){var h=n++,r=a.data[a.width*l+h],h=b.data[b.width*l+h],f=f+(((r>>>24&255)-(h>>>24&255))*m+257*(h>>>24&255)),k=k+(((r>>>16&255)-(h>>>16&255))*m+257*(h>>>16&255)),u=u+(((r>>>8&255)-(h>>>8&255))*m+257*(h>>>8&255));++e}}if(0==e)return 0;a=(f/e|0)>>8;a=0>a?0:255<a?255:a;k=(k/e|0)>>8;k=0>k?0:255<k?255:k;u=(u/e|0)>>8;u=0>u?0:255<u?255:u;return((0>a?0:255<a?255:a)<<24)+((0>k?0:255<k?255:k)<<16)+((0>u?0:255<u?255:u)<<8)+(0>d?0:255<d?255:
d)};v.differenceFull=function(a,b){if(null==a)throw new g("FAIL: first != null");if(null==b)throw new g("FAIL: second != null");var c=a.width,d=b.width;if(c!=d)throw new g("FAIL: values are not equal (expected: "+d+", actual: "+c+")");c=a.height;d=b.height;if(c!=d)throw new g("FAIL: values are not equal (expected: "+d+", actual: "+c+")");for(var c=0,d=a.width,f=a.height,k=0;k<f;)for(var u=k++,e=0,m=d;e<m;)var h=e++,w=a.data[a.width*u+h],l=b.data[b.width*u+h],h=(w>>>24&255)-(l>>>24&255),n=(w>>>16&
255)-(l>>>16&255),q=(w>>>8&255)-(l>>>8&255),w=(w&255)-(l&255),c=c+(h*h+n*n+q*q+w*w);return Math.sqrt(c/(d*f*4))/255};v.differencePartial=function(a,b,c,d,f){if(null==a)throw new g("FAIL: target != null");if(null==b)throw new g("FAIL: before != null");if(null==c)throw new g("FAIL: after != null");if(null==f)throw new g("FAIL: lines != null");var k=a.width*a.height*4;d=Math.pow(255*d,2)*k;for(var u=0;u<f.length;){var e=f[u];++u;for(var h=e.y,m=e.x1,e=e.x2+1;m<e;){var n=m++,l=a.data[a.width*h+n],q=b.data[b.width*
h+n],x=c.data[c.width*h+n],n=(l>>>24&255)-(q>>>24&255),r=(l>>>16&255)-(q>>>16&255),t=(l>>>8&255)-(q>>>8&255),q=(l&255)-(q&255),v=(l>>>24&255)-(x>>>24&255),y=(l>>>16&255)-(x>>>16&255),z=(l>>>8&255)-(x>>>8&255),l=(l&255)-(x&255);d-=n*n+r*r+t*t+q*q;d+=v*v+y*y+z*z+l*l}}return Math.sqrt(d/k)/255};v.bestRandomState=function(a,b,c,d,f,k,u){for(var e=0,g=null,h=0;h<c;){var m=h++,l=new T(U.randomShapeOf(a,f.width,f.height),b,d,f,k),n=l.energy(u);if(0==m||n<e)e=n,g=l}return g};v.bestHillClimbState=function(a,
b,c,d,f,k,e,g){a=v.bestRandomState(a,b,c,f,k,e,g);return a=v.hillClimb(a,d,g)};v.hillClimb=function(a,b,c){if(null==a)throw new g("FAIL: state != null");if(!(0<=b))throw new g("FAIL: maxAge >= 0");a=a.clone();for(var d=a.clone(),f=a.energy(c),k=0;k<b;){var e=a.mutate(),h=a.energy(c);h>=f?a=e:(f=h,d=a.clone(),k=-1);++k}return d};v.energy=function(a,b,c,d,f,k){if(null==a)throw new g("FAIL: shape != null");if(null==c)throw new g("FAIL: target != null");if(null==d)throw new g("FAIL: current != null");
if(null==f)throw new g("FAIL: buffer != null");a=a.rasterize();b=v.computeColor(c,d,a,b);t.copyLines(f,d,a);t.drawLines(f,b,a);return v.differencePartial(c,d,f,k,a)};var aa=function(a,b){if(null==a)throw new g("FAIL: target != null");this.width=a.width;this.height=a.height;this.target=a;var c=a.width,d=a.height,f=new J;f.width=c;f.height=d;f.data=Array(c*d);for(c=0;c<f.data.length;)f.data[c]=b,++c;this.current=f;c=a.width;d=a.height;f=new J;f.width=c;f.height=d;f.data=Array(c*d);for(c=0;c<f.data.length;)f.data[c]=
b,++c;this.buffer=f;this.score=v.differenceFull(a,this.current)};aa.__name__=!0;aa.prototype={step:function(a,b,c,d){a=v.bestHillClimbState(a,b,c,d,this.target,this.current,this.buffer,this.score);return[this.addShape(a.shape,a.alpha)]},addShape:function(a,b){if(null==a)throw new g("FAIL: shape != null");var c=this.current,d=new J;d.width=c.width;d.height=c.height;d.data=Array(c.data.length);for(var f=0,k=c.data.length;f<k;){var e=f++;d.data[e]=c.data[e]}c=a.rasterize();f=v.computeColor(this.target,
this.current,c,b);t.drawLines(this.current,f,c);this.score=v.differencePartial(this.target,d,this.current,this.score,c);return{score:this.score,color:f,shape:a}},__class__:aa};var T=function(a,b,c,d,f){if(null==a)throw new g("FAIL: shape != null");this.shape=a;this.alpha=b;this.score=-1;this.target=c;this.current=d;this.buffer=f};T.__name__=!0;T.prototype={energy:function(a){0>this.score&&(this.score=v.energy(this.shape,this.alpha,this.target,this.current,this.buffer,a));return this.score},mutate:function(){var a=
this.clone();this.shape.mutate();return a},clone:function(){return new T(this.shape.clone(),this.alpha,this.target,this.current,this.buffer)},__class__:T};var ba=function(){};ba.__name__=!0;ba.getAverageImageColor=function(a){if(null==a)throw new g("FAIL: image != null");for(var b=0,c=0,d=0,f=0,k=a.width;f<k;)for(var e=f++,h=0,m=a.height;h<m;)var n=h++,n=a.data[a.width*n+e],b=b+(n>>>24&255),c=c+(n>>>16&255),d=d+(n>>>8&255);a=a.width*a.height;b=b/a|0;c=c/a|0;d=d/a|0;return((0>b?0:255<b?255:b)<<24)+
((0>c?0:255<c?255:c)<<16)+((0>d?0:255<d?255:d)<<8)+255};var J=function(){};J.__name__=!0;J.prototype={__class__:J};var h=function(){};h.__name__=!0;h["export"]=function(a,b,c){var d=h.getPrelude(),d=d+h.getSvgNodeOpen(b,c),d=d+h.exportShapes(a);return d+=h.getSvgNodeClose()};h.exportShapes=function(a){for(var b="",c=0,d=a.length;c<d;){var f=c++,b=b+h.exportShape(a[f]);f!=a.length-1&&(b+="\n")}return b};h.exportShape=function(a){return ca.replace(a.shape.getSvgShapeData(),h.SVG_STYLE_HOOK,h.stylesForShape(a))};
h.stylesForShape=function(a){return 6==a.shape.getType()[1]?h.strokeForColor(a.color)+' stroke-width="1" fill="none" '+h.strokeOpacityForAlpha(a.color&255):h.fillForColor(a.color)+" "+h.fillOpacityForAlpha(a.color&255)};h.rgbForColor=function(a){return"rgb("+(a>>>24&255)+","+(a>>>16&255)+","+(a>>>8&255)+")"};h.strokeForColor=function(a){return'stroke="'+h.rgbForColor(a)+'"'};h.fillForColor=function(a){return'fill="'+h.rgbForColor(a)+'"'};h.fillOpacityForAlpha=function(a){return'fill-opacity="'+a/
255+'"'};h.strokeOpacityForAlpha=function(a){return'stroke-opacity="'+a/255+'"'};h.getPrelude=function(){return'<?xml version="1.0" standalone="no"?>\n'};h.getSvgNodeOpen=function(a,b){return'<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="'+a+'" height="'+b+'">\n'};h.getSvgNodeClose=function(){return"</svg>"};var t=function(){};t.__name__=!0;t.drawLines=function(a,b,c){if(null==a)throw new g("FAIL: image != null");if(null==c)throw new g("FAIL: lines != null");var d=
b>>>24&255,d=(d|d<<8)*(b&255)/255|0,f=b>>>16&255,f=(f|f<<8)*(b&255)/255|0,k=b>>>8&255,k=(k|k<<8)*(b&255)/255|0;b&=255;b|=b<<8;for(var e=0;e<c.length;){var h=c[e];++e;for(var n=h.y,m=257*(65535-1*b)|0,q=h.x1,h=h.x2+1;q<h;){var l=q++,t=a.data[a.width*n+l],x=t>>>16&255,r=t>>>8&255,v=t&255,t=(I.toFloat((t>>>24&255)*m+65535*d)/I.toFloat(65535)|0)>>8,x=(I.toFloat(x*m+65535*f)/I.toFloat(65535)|0)>>8,r=(I.toFloat(r*m+65535*k)/I.toFloat(65535)|0)>>8,v=(I.toFloat(v*m+65535*b)/I.toFloat(65535)|0)>>8;a.data[a.width*
n+l]=((0>t?0:255<t?255:t)<<24)+((0>x?0:255<x?255:x)<<16)+((0>r?0:255<r?255:r)<<8)+(0>v?0:255<v?255:v)}}};t.copyLines=function(a,b,c){if(null==a)throw new g("FAIL: destination != null");if(null==b)throw new g("FAIL: source != null");if(null==c)throw new g("FAIL: lines != null");for(var d=0;d<c.length;){var f=c[d];++d;for(var k=f.y,e=f.x1,f=f.x2+1;e<f;){var h=e++;a.data[a.width*k+h]=b.data[b.width*k+h]}}};t.bresenham=function(a,b,c,d){var f=c-a,k=(0<f?1:0)-(0>f?1:0),f=(0>f?-f:f)<<1,e=d-b,g=(0<e?1:0)-
(0>e?1:0),e=(0>e?-e:e)<<1,h=[];h.push({x:a,y:b});if(f>=e)for(d=e-(f>>1);a!=c;)0<=d&&(0!=d||0<k)&&(d-=f,b+=g),d+=e,a+=k,h.push({x:a,y:b});else for(c=f-(e>>1);b!=d;)0<=c&&(0!=c||0<g)&&(c-=e,a+=k),c+=f,b+=g,h.push({x:a,y:b});return h};t.scanlinesForPolygon=function(a){var b,c,d=[],f=[],k=0;for(c=a.length;k<c;){var e=k++;b=a[e];e=e==a.length-1?a[0]:a[e+1];b=t.bresenham(b.x,b.y,e.x,e.y);f=f.concat(b)}a=new V;for(k=0;k<f.length;)c=f[k],++k,b=a.h[c.y],null!=b?C.add(b,c.x):(b=C.create(),C.add(b,c.x),a.h[c.y]=
b);for(f=a.keys();f.hasNext();){k=f.next();b=C.toArray(a.h[k]);if(null==b||0==b.length)c=b=0;else{e=b[0];c=b[0];for(var g=0;g<b.length;){var h=b[g];++g;e>h&&(e=h);c<h&&(c=h)}b=e}d.push(new y(k,b,c))}return d};var y=function(a,b,c){this.y=a;this.x1=b;this.x2=c};y.__name__=!0;y.trim=function(a,b,c){if(null==a)throw new g("FAIL: scanlines != null");return a.filter(function(a){return y.trimHelper(a,b,c)})};y.trimHelper=function(a,b,c){if(0>a.y||a.y>=c||a.x1>=b||0>a.x2)return!1;c=a.x1;var d=b-1;if(!(0<=
d))throw new g("FAIL: min <= max");a.x1=0>c?0:c>d?d:c;c=a.x2;--b;if(!(0<=b))throw new g("FAIL: min <= max");a.x2=0>c?0:c>b?b:c;return a.x1>a.x2?!1:!0};y.prototype={__class__:y};var Z=function(a,b){this.model=new aa(a,b)};Z.__name__=!0;Z.prototype={step:function(a){return this.model.step(a.shapeTypes,a.alpha,a.candidateShapesPerStep,a.shapeMutationsPerStep)},getImageData:function(){if(null==this.model)throw new g("FAIL: model != null");return this.model.current},__class__:Z};var Y=function(a,b,c,d){null==
d&&(d=50);null==c&&(c=100);null==b&&(b=128);null==a&&(a=[m.RECTANGLE]);this.shapeTypes=a;this.alpha=b;this.candidateShapesPerStep=c;this.shapeMutationsPerStep=d};Y.__name__=!0;Y.prototype={__class__:Y};var E=function(){};E.__name__=!0;E.prototype={__class__:E};var F=function(a,b){this.x=n.random(a);this.y=n.random(b);this.rx=n.random(32)+1;this.ry=n.random(32)+1;this.xBound=a;this.yBound=b};F.__name__=!0;F.__interfaces__=[E];F.prototype={rasterize:function(){for(var a=[],b=this.rx/this.ry,c=this.xBound,
d=this.yBound,f=0,k=this.ry;f<k;){var e=f++,g=this.y-e,h=this.y+e;if(!(0>g||g>=d)||!(0>h||h>=d)){var m=Math.sqrt(this.ry*this.ry-e*e)*b|0,n=this.x-m,m=this.x+m;0>n&&(n=0);m>=c&&(m=c-1);0<=g&&g<d&&a.push(new y(g,n,m));0<=h&&h<d&&0<e&&a.push(new y(h,n,m))}}return a},mutate:function(){switch(n.random(3)){case 0:var a=this.x+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x=0>a?0:a>b?b:a;a=this.y+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=
b))throw new g("FAIL: min <= max");this.y=0>a?0:a>b?b:a;break;case 1:a=this.rx+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(1<=b))throw new g("FAIL: min <= max");this.rx=1>a?1:a>b?b:a;break;case 2:a=this.ry+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(1<=b))throw new g("FAIL: min <= max");this.ry=1>a?1:a>b?b:a}},clone:function(){var a=new F(this.xBound,this.yBound);a.x=this.x;a.y=this.y;a.rx=this.rx;a.ry=this.ry;return a},getType:function(){return m.ELLIPSE},getRawShapeData:function(){return[this.x,
this.y,this.rx,this.ry]},getSvgShapeData:function(){return'<ellipse cx="'+this.x+'" cy="'+this.y+'" rx="'+this.rx+'" ry="'+this.ry+'" '+h.SVG_STYLE_HOOK+" />"},__class__:F};var L=function(a,b){F.call(this,a,b);this.ry=this.rx=n.random(32)+1};L.__name__=!0;L.__super__=F;L.prototype=ea(F.prototype,{mutate:function(){switch(n.random(2)){case 0:var a=this.x+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x=0>a?0:a>b?b:a;a=this.y+(-16+Math.floor(33*Math.random()));
b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y=0>a?0:a>b?b:a;break;case 1:a=this.rx+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(1<=b))throw new g("FAIL: min <= max");this.ry=this.rx=a=1>a?1:a>b?b:a}},clone:function(){var a=new L(this.xBound,this.yBound);a.x=this.x;a.y=this.y;a.rx=this.rx;a.ry=this.ry;return a},getType:function(){return m.CIRCLE},getRawShapeData:function(){return[this.x,this.y,this.rx]},getSvgShapeData:function(){return'<circle cx="'+this.x+'" cy="'+
this.y+'" r="'+this.rx+'" '+h.SVG_STYLE_HOOK+" />"},__class__:L});var M=function(a,b){this.x1=n.random(a);this.y1=n.random(b);var c=this.x1+n.random(32)+1;if(!(0<=a))throw new g("FAIL: min <= max");this.x2=0>c?0:c>a?a:c;c=this.y1+n.random(32)+1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=0>c?0:c>b?b:c;this.xBound=a;this.yBound=b};M.__name__=!0;M.__interfaces__=[E];M.prototype={rasterize:function(){for(var a=[],b=t.bresenham(this.x1,this.y1,this.x2,this.y2),c=0;c<b.length;){var d=b[c];++c;a.push(new y(d.y,
d.x,d.x))}return y.trim(a,this.xBound,this.yBound)},mutate:function(){switch(n.random(4)){case 0:var a=this.x1+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x1=0>a?0:a>b?b:a;a=this.y1+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y1=0>a?0:a>b?b:a;break;case 1:a=this.x2+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x2=0>a?0:a>b?b:a;a=this.y2+
(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=0>a?0:a>b?b:a}},clone:function(){var a=new M(this.xBound,this.yBound);a.x1=this.x1;a.y1=this.y1;a.x2=this.x2;a.y2=this.y2;return a},getType:function(){return m.LINE},getRawShapeData:function(){return[this.x1,this.y1,this.x2,this.y2]},getSvgShapeData:function(){return'<line x1="'+this.x1+'" y1="'+this.y1+'" x2="'+this.x2+'" y2="'+this.y2+'" '+h.SVG_STYLE_HOOK+" />"},__class__:M};var K=function(a,b){this.x1=
n.random(a);this.y1=n.random(b);var c=this.x1+n.random(32)+1,d=a-1;if(!(0<=d))throw new g("FAIL: min <= max");this.x2=0>c?0:c>d?d:c;c=this.y1+n.random(32)+1;d=b-1;if(!(0<=d))throw new g("FAIL: min <= max");this.y2=0>c?0:c>d?d:c;this.xBound=a;this.yBound=b};K.__name__=!0;K.__interfaces__=[E];K.prototype={rasterize:function(){for(var a=[],b=this.y1,c=this.y2;b<c;){var d=b++;if(this.x1!=this.x2){var f=this.x1,e=this.x2,g=this.x1,h=this.x2;a.push(new y(d,f<e?f:e,g>h?g:h))}}return a},mutate:function(){switch(n.random(2)){case 0:var a=
this.x1+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x1=0>a?0:a>b?b:a;a=this.y1+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y1=0>a?0:a>b?b:a;break;case 1:a=this.x2+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x2=0>a?0:a>b?b:a;a=this.y2+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=
0>a?0:a>b?b:a}},clone:function(){var a=new K(this.xBound,this.yBound);a.x1=this.x1;a.y1=this.y1;a.x2=this.x2;a.y2=this.y2;return a},getType:function(){return m.RECTANGLE},getRawShapeData:function(){var a=this.x1,b=this.x2,c=this.y1,d=this.y2,f=this.x1,e=this.x2,g=this.y1,h=this.y2;return[a<b?a:b,c<d?c:d,f>e?f:e,g>h?g:h]},getSvgShapeData:function(){var a=this.x1,b=this.x2,c=this.y1,d=this.y2,f=this.x1,e=this.x2,g=this.x1,m=this.x2,n=this.y1,q=this.y2,t=this.y1,l=this.y2;return'<rect x="'+(a<b?a:b)+
'" y="'+(c<d?c:d)+'" width="'+((f>e?f:e)-(g<m?g:m))+'" height="'+((n>q?n:q)-(t<l?t:l))+'" '+h.SVG_STYLE_HOOK+" />"},__class__:K};var N=function(a,b){this.x=n.random(a);this.y=n.random(b);this.rx=n.random(32)+1;this.ry=n.random(32)+1;this.angle=n.random(360);this.xBound=a;this.yBound=b};N.__name__=!0;N.__interfaces__=[E];N.prototype={rasterize:function(){for(var a=[],b=Math.PI/180*this.angle,c=Math.cos(b),b=Math.sin(b),d=0;20>d;){var f=18*d++*(Math.PI/180),e=this.rx*Math.cos(f),f=this.ry*Math.sin(f);
a.push({x:e*c-f*b+this.x|0,y:e*b+f*c+this.y|0})}return y.trim(t.scanlinesForPolygon(a),this.xBound,this.yBound)},mutate:function(){switch(n.random(4)){case 0:var a=this.x+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x=0>a?0:a>b?b:a;a=this.y+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y=0>a?0:a>b?b:a;break;case 1:a=this.rx+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(1<=b))throw new g("FAIL: min <= max");
this.rx=1>a?1:a>b?b:a;break;case 2:a=this.ry+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(1<=b))throw new g("FAIL: min <= max");this.ry=1>a?1:a>b?b:a;break;case 3:a=this.angle+(-4+Math.floor(9*Math.random())),this.angle=0>a?0:360<a?360:a}},clone:function(){var a=new N(this.xBound,this.yBound);a.x=this.x;a.y=this.y;a.rx=this.rx;a.ry=this.ry;a.angle=this.angle;return a},getType:function(){return m.ROTATED_ELLIPSE},getRawShapeData:function(){return[this.x,this.y,this.rx,this.ry,this.angle]},
getSvgShapeData:function(){var a='<g transform="translate('+this.x+" "+this.y+") rotate("+this.angle+") scale("+this.rx+" "+this.ry+')">',a=a+('<ellipse cx="0" cy="0" rx="1" ry="1" '+h.SVG_STYLE_HOOK+" />");return a+"</g>"},__class__:N};var O=function(a,b){this.x1=n.random(a);this.y1=n.random(b);var c=this.x1+n.random(32)+1;if(!(0<=a))throw new g("FAIL: min <= max");this.x2=0>c?0:c>a?a:c;c=this.y1+n.random(32)+1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=0>c?0:c>b?b:c;this.angle=Math.floor(361*
Math.random());this.xBound=a;this.yBound=b};O.__name__=!0;O.__interfaces__=[E];O.prototype={rasterize:function(){return y.trim(t.scanlinesForPolygon(this.getCornerPoints()),this.xBound,this.yBound)},getCornerPoints:function(){var a=this.x1,b=this.x2,c=a<b?a:b,a=this.x1,b=this.x2,d=a>b?a:b,a=this.y1,b=this.y2,f=a<b?a:b,a=this.y1,b=this.y2,e=a>b?a:b,a=(c+d)/2|0,b=(f+e)/2|0,c=c-a,d=d-a,f=f-b,e=e-b,g=this.angle*Math.PI/180,h=Math.cos(g),g=Math.sin(g);return[{x:c*h-f*g+a|0,y:c*g+f*h+b|0},{x:d*h-f*g+a|
0,y:d*g+f*h+b|0},{x:d*h-e*g+a|0,y:d*g+e*h+b|0},{x:c*h-e*g+a|0,y:c*g+e*h+b|0}]},mutate:function(){switch(n.random(3)){case 0:var a=this.x1+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x1=0>a?0:a>b?b:a;a=this.y1+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y1=0>a?0:a>b?b:a;break;case 1:a=this.x2+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x2=
0>a?0:a>b?b:a;a=this.y2+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=0>a?0:a>b?b:a;break;case 2:a=this.angle+(-4+Math.floor(9*Math.random())),this.angle=0>a?0:360<a?360:a}},clone:function(){var a=new O(this.xBound,this.yBound);a.x1=this.x1;a.y1=this.y1;a.x2=this.x2;a.y2=this.y2;a.angle=this.angle;return a},getType:function(){return m.ROTATED_RECTANGLE},getRawShapeData:function(){var a=this.x1,b=this.x2,c=this.y1,d=this.y2,f=this.x1,e=this.x2,
g=this.y1,h=this.y2;return[a<b?a:b,c<d?c:d,f>e?f:e,g>h?g:h,this.angle]},getSvgShapeData:function(){for(var a=this.getCornerPoints(),b='<polygon points="',c=0,d=a.length;c<d;){var f=c++,b=b+(a[f].x+" "+a[f].y);f!=a.length-1&&(b+=" ")}return b+='" '+h.SVG_STYLE_HOOK+"/>"},__class__:O};var U=function(){};U.__name__=!0;U.create=function(a,b,c){switch(a[1]){case 0:return new K(b,c);case 1:return new O(b,c);case 2:return new P(b,c);case 3:return new F(b,c);case 4:return new N(b,c);case 5:return new L(b,
c);case 6:return new M(b,c)}};U.randomShapeOf=function(a,b,c){if(!(null!=a&&0<a.length))throw new g("FAIL: a != null && a.length > 0");var d=a.length-1;if(!(0<=d))throw new g("FAIL: lower <= upper");return U.create(a[Math.floor((d+1)*Math.random())],b,c)};var m={__ename__:!0,__constructs__:"RECTANGLE ROTATED_RECTANGLE TRIANGLE ELLIPSE ROTATED_ELLIPSE CIRCLE LINE".split(" "),RECTANGLE:["RECTANGLE",0]};m.RECTANGLE.toString=B;m.RECTANGLE.__enum__=m;m.ROTATED_RECTANGLE=["ROTATED_RECTANGLE",1];m.ROTATED_RECTANGLE.toString=
B;m.ROTATED_RECTANGLE.__enum__=m;m.TRIANGLE=["TRIANGLE",2];m.TRIANGLE.toString=B;m.TRIANGLE.__enum__=m;m.ELLIPSE=["ELLIPSE",3];m.ELLIPSE.toString=B;m.ELLIPSE.__enum__=m;m.ROTATED_ELLIPSE=["ROTATED_ELLIPSE",4];m.ROTATED_ELLIPSE.toString=B;m.ROTATED_ELLIPSE.__enum__=m;m.CIRCLE=["CIRCLE",5];m.CIRCLE.toString=B;m.CIRCLE.__enum__=m;m.LINE=["LINE",6];m.LINE.toString=B;m.LINE.__enum__=m;var P=function(a,b){this.x1=n.random(a);this.y1=n.random(b);this.x2=this.x1+(-16+Math.floor(33*Math.random()));this.y2=
this.y1+(-16+Math.floor(33*Math.random()));this.x3=this.x1+(-16+Math.floor(33*Math.random()));this.y3=this.y1+(-16+Math.floor(33*Math.random()));this.xBound=a;this.yBound=b};P.__name__=!0;P.__interfaces__=[E];P.prototype={rasterize:function(){return y.trim(t.scanlinesForPolygon([{x:this.x1,y:this.y1},{x:this.x2,y:this.y2},{x:this.x3,y:this.y3}]),this.xBound,this.yBound)},mutate:function(){switch(n.random(3)){case 0:var a=this.x1+(-16+Math.floor(33*Math.random())),b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");
this.x1=0>a?0:a>b?b:a;a=this.y1+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y1=0>a?0:a>b?b:a;break;case 1:a=this.x2+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.x2=0>a?0:a>b?b:a;a=this.y2+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y2=0>a?0:a>b?b:a;break;case 2:a=this.x3+(-16+Math.floor(33*Math.random()));b=this.xBound-1;if(!(0<=b))throw new g("FAIL: min <= max");
this.x3=0>a?0:a>b?b:a;a=this.y3+(-16+Math.floor(33*Math.random()));b=this.yBound-1;if(!(0<=b))throw new g("FAIL: min <= max");this.y3=0>a?0:a>b?b:a}},clone:function(){var a=new P(this.xBound,this.yBound);a.x1=this.x1;a.y1=this.y1;a.x2=this.x2;a.y2=this.y2;a.x3=this.x3;a.y3=this.y3;return a},getType:function(){return m.TRIANGLE},getRawShapeData:function(){return[this.x1,this.y1,this.x2,this.y2,this.x3,this.y3]},getSvgShapeData:function(){return'<polygon points="'+this.x1+","+this.y1+" "+this.x2+","+
this.y2+" "+this.x3+","+this.y3+'" '+h.SVG_STYLE_HOOK+"/>"},__class__:P};B=function(){};B.__name__=!0;var V=function(){this.h={}};V.__name__=!0;V.__interfaces__=[B];V.prototype={keys:function(){var a=[],b;for(b in this.h)this.h.hasOwnProperty(b)&&a.push(b|0);return Q.iter(a)},__class__:V};var R=function(a){this.length=a.byteLength;this.b=new da(a);this.b.bufferValue=a;a.hxBytes=this;a.bytes=this.b};R.__name__=!0;R.prototype={__class__:R};var W=function(){};W.__name__=!0;W.i32ToFloat=function(a){var b=
a>>>23&255,c=a&8388607;return 0==c&&0==b?0:(1-(a>>>31<<1))*(1+Math.pow(2,-23)*c)*Math.pow(2,b-127)};W.floatToI32=function(a){if(0==a)return 0;var b=0>a?-a:a,c=Math.floor(Math.log(b)/.6931471805599453);-127>c?c=-127:128<c&&(c=128);b=Math.round(8388608*(b/Math.pow(2,c)-1));8388608==b&&128>c&&(b=0,++c);return(0>a?-2147483648:0)|c+127<<23|b};var g=function(a){Error.call(this);this.val=a;this.message=String(a);Error.captureStackTrace&&Error.captureStackTrace(this,g)};g.__name__=!0;g.wrap=function(a){return a instanceof
Error?a:new g(a)};g.__super__=Error;g.prototype=ea(Error.prototype,{__class__:g});var q=function(){};q.__name__=!0;q.getClass=function(a){if(a instanceof Array&&null==a.__enum__)return Array;var b=a.__class__;if(null!=b)return b;a=q.__nativeClassName(a);return null!=a?q.__resolveNativeClass(a):null};q.__string_rec=function(a,b){if(null==a)return"null";if(5<=b.length)return"<...>";var c=typeof a;"function"==c&&(a.__name__||a.__ename__)&&(c="object");switch(c){case "function":return"<function>";case "object":if(a instanceof
Array){if(a.__enum__){if(2==a.length)return a[0];c=a[0]+"(";b+="\t";for(var d=2,f=a.length;d<f;)var e=d++,c=2!=e?c+(","+q.__string_rec(a[e],b)):c+q.__string_rec(a[e],b);return c+")"}c=a.length;d="[";b+="\t";for(f=0;f<c;)e=f++,d+=(0<e?",":"")+q.__string_rec(a[e],b);return d+"]"}try{d=a.toString}catch(u){return"???"}if(null!=d&&d!=Object.toString&&"function"==typeof d&&(c=a.toString(),"[object Object]"!=c))return c;c=null;d="{\n";b+="\t";f=null!=a.hasOwnProperty;for(c in a)f&&!a.hasOwnProperty(c)||
"prototype"==c||"__class__"==c||"__super__"==c||"__interfaces__"==c||"__properties__"==c||(2!=d.length&&(d+=", \n"),d+=b+c+" : "+q.__string_rec(a[c],b));b=b.substring(1);return d+("\n"+b+"}");case "string":return a;default:return String(a)}};q.__interfLoop=function(a,b){if(null==a)return!1;if(a==b)return!0;var c=a.__interfaces__;if(null!=c)for(var d=0,e=c.length;d<e;){var g=d++,g=c[g];if(g==b||q.__interfLoop(g,b))return!0}return q.__interfLoop(a.__super__,b)};q.__instanceof=function(a,b){if(null==
b)return!1;switch(b){case Array:return a instanceof Array?null==a.__enum__:!1;case fa:return"boolean"==typeof a;case ka:return!0;case ga:return"number"==typeof a;case la:return"number"==typeof a?(a|0)===a:!1;case String:return"string"==typeof a;default:if(null!=a)if("function"==typeof b){if(a instanceof b||q.__interfLoop(q.getClass(a),b))return!0}else{if("object"==typeof b&&q.__isNativeObj(b)&&a instanceof b)return!0}else return!1;return b==ma&&null!=a.__name__||b==na&&null!=a.__ename__?!0:a.__enum__==
b}};q.__nativeClassName=function(a){a=q.__toStr.call(a).slice(8,-1);return"Object"==a||"Function"==a||"Math"==a||"JSON"==a?null:a};q.__isNativeObj=function(a){return null!=q.__nativeClassName(a)};q.__resolveNativeClass=function(a){return X[a]};var z=function(a){if(a instanceof Array&&null==a.__enum__)this.a=a,this.byteLength=a.length;else{this.a=[];for(var b=0;b<a;){var c=b++;this.a[c]=0}this.byteLength=a}};z.__name__=!0;z.sliceImpl=function(a,b){var c=new da(this,a,null==b?null:b-a),d=new S(c.byteLength);
(new da(d)).set(c);return d};z.prototype={slice:function(a,b){return new z(this.a.slice(a,b))},__class__:z};var G=function(){};G.__name__=!0;G._new=function(a,b,c){var d;if("number"==typeof a){d=[];for(b=0;b<a;){var e=b++;d[e]=0}d.byteLength=d.length<<2;d.byteOffset=0;a=[];b=0;for(e=d.length<<2;b<e;)b++,a.push(0);d.buffer=new z(a)}else if(q.__instanceof(a,z)){null==b&&(b=0);null==c&&(c=a.byteLength-b>>2);d=[];for(e=0;e<c;){e++;var h=a.a[b++]|a.a[b++]<<8|a.a[b++]<<16|a.a[b++]<<24;d.push(W.i32ToFloat(h))}d.byteLength=
d.length<<2;d.byteOffset=b;d.buffer=a}else if(a instanceof Array&&null==a.__enum__){d=a.slice();a=[];for(b=0;b<d.length;)e=d[b],++b,e=W.floatToI32(e),a.push(e&255),a.push(e>>8&255),a.push(e>>16&255),a.push(e>>>24);d.byteLength=d.length<<2;d.byteOffset=0;d.buffer=new z(a)}else throw new g("TODO "+n.string(a));d.subarray=G._subarray;d.set=G._set;return d};G._set=function(a,b){if(q.__instanceof(a.buffer,z)){if(a.byteLength+b>this.byteLength)throw new g("set() outside of range");for(var c=0,d=a.byteLength;c<
d;){var e=c++;this[e+b]=a[e]}}else if(a instanceof Array&&null==a.__enum__){if(a.length+b>this.byteLength)throw new g("set() outside of range");c=0;for(d=a.length;c<d;)e=c++,this[e+b]=a[e]}else throw new g("TODO");};G._subarray=function(a,b){var c=G._new(this.slice(a,b));c.byteOffset=4*a;return c};var H=function(){};H.__name__=!0;H._new=function(a,b,c){if("number"==typeof a){c=[];for(b=0;b<a;){var d=b++;c[d]=0}c.byteLength=c.length;c.byteOffset=0;c.buffer=new z(c)}else if(q.__instanceof(a,z))null==
b&&(b=0),null==c&&(c=a.byteLength-b),c=0==b?a.a:a.a.slice(b,b+c),c.byteLength=c.length,c.byteOffset=b,c.buffer=a;else if(a instanceof Array&&null==a.__enum__)c=a.slice(),c.byteLength=c.length,c.byteOffset=0,c.buffer=new z(c);else throw new g("TODO "+n.string(a));c.subarray=H._subarray;c.set=H._set;return c};H._set=function(a,b){if(q.__instanceof(a.buffer,z)){if(a.byteLength+b>this.byteLength)throw new g("set() outside of range");for(var c=0,d=a.byteLength;c<d;){var e=c++;this[e+b]=a[e]}}else if(a instanceof
Array&&null==a.__enum__){if(a.length+b>this.byteLength)throw new g("set() outside of range");c=0;for(d=a.length;c<d;)e=c++,this[e+b]=a[e]}else throw new g("TODO");};H._subarray=function(a,b){var c=H._new(this.slice(a,b));c.byteOffset=a;return c};var ia=0;String.prototype.__class__=String;String.__name__=!0;Array.__name__=!0;var la={__name__:["Int"]},ka={__name__:["Dynamic"]},ga=Number;ga.__name__=["Float"];var fa=Boolean;fa.__ename__=["Bool"];var ma={__name__:["Class"]},na={},S=X.ArrayBuffer||z;null==
S.prototype.slice&&(S.prototype.slice=z.sliceImpl);var ja=X.Float32Array||G._new,da=X.Uint8Array||H._new;e.runPauseButton=window.document.getElementById("runpausebutton");e.stepButton=window.document.getElementById("stepbutton");e.openImageFileInput=window.document.getElementById("openimageinput");e.resetButton=window.document.getElementById("resetbutton");e.saveImageButton=window.document.getElementById("saveimagebutton");e.saveSvgButton=window.document.getElementById("savesvgbutton");e.rectanglesCheckbox=
window.document.getElementById("rectangles");e.rotatedRectanglesCheckbox=window.document.getElementById("rotatedrectangles");e.trianglesCheckbox=window.document.getElementById("triangles");e.ellipsesCheckbox=window.document.getElementById("ellipses");e.rotatedEllipsesCheckbox=window.document.getElementById("rotatedellipses");e.circlesCheckbox=window.document.getElementById("circles");e.linesCheckbox=window.document.getElementById("lines");e.shapeOpacitySlider=window.document.getElementById("shapeopacity");
e.randomShapesPerStepSlider=window.document.getElementById("randomshapesperstep");e.shapeMutationsPerStepSlider=window.document.getElementById("shapemutationsperstep");e.currentImageCanvas=window.document.getElementById("currentimagecanvas");e.seagullImageElement=window.document.getElementById("defaultimage");e.currentSvgContainer=window.document.getElementById("currentsvgcontainer");h.SVG_STYLE_HOOK="::svg_style_hook::";q.__toStr={}.toString;G.BYTES_PER_ELEMENT=4;H.BYTES_PER_ELEMENT=1;e.main()})("undefined"!=
typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);