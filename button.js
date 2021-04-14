function download(){
    if (confirm ('This Resume is a Work in Progress')) {
        location.href = './resume.pdf';
    }
    return false;
}