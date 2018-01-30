var transform = {'tag':'div class="archive"','html':'${link}'};  
  
var data = [  
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':''}, 
      {'link':''}, 	  
      {'link':''}	  
];  
  
document.getElementById('sb').innerHTML = json2html.transform(data,transform);  

var transform = {'tag':'div class="archive popular"','html':'${link}'};  
  
var data = [  
      {'link':'    <time datetime="2011-02-23T00:00:00-08:00"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2011年2月23日</font></font></time><div><a href="http://henry.precheur.org/clan.cx/feedbackarmy.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用反馈军团clan.cx</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':'<time datetime="2018-01-30 12:07:08"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年1月30日</font></font></time><div><a href="http://henry.precheur.org/vim/create_spell_file_for_vim.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为VIM创建一个拼写文件</font></font></a></div>'}, 
      {'link':''}	  
];  
  
document.getElementById('js').innerHTML = json2html.transform(data,transform);  
