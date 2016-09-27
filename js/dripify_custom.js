/*
* @Author: suifengtec
* @Date:   2016-09-27 08:33:48
* @Last Modified by:   suifengtec
* @Last Modified time: 2016-09-27 08:35:26
*/

jQuery(document).ready(function($) {

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

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("确定要移除 \"" + element.filename + "\" 吗?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        $('.lelive-create-upload-cover-success-tip').html('<input type="submit" id="upload-cover-for-new" class="upload-cover-for-new" value="上传"/>');
        $('#cwp-lelive-upload-cover-btn').css('display','block');

        alert('文件已删除');
    });

    drEvent.on('dropify.beforeUpload', function(event, element){

      $('#acgfs-cover-upload-btn').trigger('click');

        /*return confirm("确定要上传文件吗?");*/

    });
    drEvent.on('dropify.afterUpload', function(event, element){
       /*alert('文件上传动作');*/
    });

});