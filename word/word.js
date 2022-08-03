function changetitle()
{
    var docname= document.getElementById('docname').value;
    document.title = docname;
}
function prrint()
{
    var docname= document.getElementById('docname').value;
    document.title = docname;
    var divContents = document.getElementById("document").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body ><h1>');
    a.document.write(docname);
    a.document.write('</h1>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
function landscape()
{
    var mainwidth = document.getElementById("document").offsetWidth ;
    var mainheigth = document.getElementById("document").offsetHeight ;
    //consol.log(mainwidth)
    document.getElementById("document").style.width =  mainheigth+'px';
    document.getElementById("document").style.height  = mainwidth+'px';
    document.getElementById("pwidth").value = width='cm';
    document.getElementById("pheight").value = height='cm';
 }
function papertype(width,height) 
{
    document.getElementById("document").style.width =  mainheigth+'cm';
    document.getElementById("document").style.height  = mainwidth+'cm';
    document.getElementById("pwidth").value = width='cm';
    document.getElementById("pheight"). value = height='cm';
}
function changebg(bgcolor)
{
    document.getElementById('document').style. 
    backgroundColor = bgcolor;
}