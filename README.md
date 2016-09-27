# dropify_custom
add an upload for dropify by JeremyFagis
## Usage
```
	var dropifyUploadFunc = function (){

		console.log('uploadCallback fire!');
	}

    var drEvent = $('.dropify-event').dropify({
        messages: {
            'default': '拖入或点选一个文件',
            'replace': '拖动文件到这里或者点击选择一个文件可以替换这个哦！',
            'remove':  '移除',
            'upload':  '上传',
            'error':   '矮油，出错了，重试一下？'
        },
		callbacks: {
	       	uploadCallback : dropifyUploadFunc
	    }
    });

```


## Demo Screenshot
![dropify_custom demo ccreenshot](https://raw.githubusercontent.com/suifengtec/dropify_custom/master/screenshot.jpg)