document.getElementById('language-select').addEventListener('change', function() {
    document.getElementById('content-Chinese').style.display = 'none';
    document.getElementById('content-English').style.display = 'none';
    document.getElementById('content-Deutsch').style.display = 'none';

    var selectedLanguage = this.value;
    document.getElementById('content-' + selectedLanguage).style.display = 'block';
});