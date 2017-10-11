var str = Array();
str = ["window.history","window.location","window.novigator","window.screen", "window",".go",".hash",".appCodeNone",".awailHigh",".inserWidth",".forward",".forward",".appNone",".awailWidth",".inserHight",".back",".href",".cookieEnabled()",".height",".screenX",".length",".port",".javaEnabled()",".width",".screenY"," ",".protocol",".onLine",".colorDepth",".scrollX"," ",".search",".userAgent",".orientation()",".scrollY"," ",".reload()"," "," ",".scrollTo"," ",".assign(path)"," "," ",".scrollBy(x,y)"," "," "," "," ",".open(s)"," "," "," "," ",".close()"," "," "," "," ",".screenLeft"," "," "," "," ",".screenTop"];
document.write('<table border="1">')
for (i=0; i<13; i++) {
    document.write('<tr>')
    for (j=0; j<5; j++) {
        document.write('<td>'+str[5*i+j]+'</td>')
    }
    document.write('</tr>')
}
document.write('</table>')
