(()=>{var t={607:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),s=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),s(r(50),e),s(r(268),e),s(r(764),e)},50:(t,e)=>{"use strict";function r(t,e,r,n){let s,i,a,l,c,o,u,f;if(s=(t=Math.round(t*Math.pow(10,e))/Math.pow(10,e))+"",i=s.split("."),i[0]||(i[0]="0"),i[1]||(i[1]=""),i[1].length<e){for(a=i[1],l=i[1].length+1;l<=e;l++)a+="0";i[1]=a}if(""!=n&&(i[0].length>3&&i[0]>0||i[0].length>4&&i[0]<0)){for(o=i[0],i[0]="",c=3;c<o.length;c+=3)u=o.slice(o.length-c,o.length-c+3),i[0]=n+u+i[0]+"";f=o.substr(0,o.length%3==0?3:o.length%3),i[0]=f+i[0]}return i[0]+r+i[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.cfloat=e.cdate=e.number_format_de=e.number_format=void 0,e.number_format=r,e.number_format_de=function(t){return r(t,2,",",".")},e.cdate=function(t){if(t instanceof Date)return t;if("string"==typeof t){if(t.indexOf(".")>0){var e=t.split(".");return t=e[2]+"-"+("00"+e[1]).slice(-2)+"-"+("00"+e[0]).slice(-2),new Date(t)}if(t.indexOf("-")>0)return e=t.split("-"),t=e[0]+"-"+("00"+e[1]).slice(-2)+"-"+("00"+e[2]).slice(-2),new Date(t)}else(isNaN(t)||null==t)&&(t="0000-00-00");return new Date(t)},e.cfloat=function(t){if("string"==typeof t)t=(t=t.replace(".","")).replace(",","."),t=parseFloat(t),isNaN(t)&&(t=0);else{if(isNaN(t))return 0;if(void 0===t)return 0;if(null===t)return 0}return t}},764:()=>{},268:()=>{$("#myform").submit((function(){return $(".input-euro").each((function(){str=$(this).val(),str=str.replace(".",""),str=str.replace(" ",""),str=str.replace(",","."),$(this).val(str)})),$(".input-percent").each((function(){str=$(this).val(),str=str.replace(".",""),str=str.replace(" ",""),str=str.replace(",","."),$(this).val(str)})),$(".input-int").each((function(){str=$(this).val(),str=str.replace(".",""),str=str.replace(" ",""),str=str.replace(",","."),$(this).val(str)})),$(".input-number").each((function(){str=$(this).val(),str=str.replace(".",""),str=str.replace(" ",""),str=str.replace(",","."),$(this).val(str)})),!0}))}},e={};!function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}(607)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUwsUUFBUSxJQUFLLEtBR3ZCRSxFQUFFakQsTUFBTXFELElBQUlELFFBR2hCSCxFQUFFLGlCQUFpQkUsTUFBSyxXQUNwQkMsSUFBTUgsRUFBRWpELE1BQU1xRCxNQUVkRCxJQUFNQSxJQUFJTCxRQUFRLElBQUssSUFDdkJLLElBQU1BLElBQUlMLFFBQVEsSUFBSyxJQUN2QkssSUFBTUEsSUFBSUwsUUFBUSxJQUFLLEtBR3ZCRSxFQUFFakQsTUFBTXFELElBQUlELFNBSVQsT0NsRFBFLEVBQTJCLElBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJqRCxJQUFqQmtELEVBQ0gsT0FBT0EsRUFBYTdDLFFBR3JCLElBQUk4QyxFQUFTSixFQUF5QkUsR0FBWSxDQUdqRDVDLFFBQVMsSUFPVixPQUhBK0MsRUFBb0JILEdBQVV4QyxLQUFLMEMsRUFBTzlDLFFBQVM4QyxFQUFRQSxFQUFPOUMsUUFBUzJDLEdBR3BFRyxFQUFPOUMsUUNsQlcyQyxDQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGl0aGlsYmVydC9qbGliLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BpdGhpbGJlcnQvamxpYi8uL3NyYy96YWhsLnRzIiwid2VicGFjazovL0BpdGhpbGJlcnQvamxpYi8uL3NyYy9qcy9teWZvcm0uanMiLCJ3ZWJwYWNrOi8vQGl0aGlsYmVydC9qbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpdGhpbGJlcnQvamxpYi93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vL2V4cG9ydCAqIGZyb20gJy4vbGliL2FzeW5jJztcbi8vZXhwb3J0ICogZnJvbSAnLi9saWIvbnVtYmVyJztcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3phaGxcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2pzL215Zm9ybVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vanMvZGVsZXRlZm9ybVwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERoQ1FVRTRRanRCUVVNNVFpd3JRa0ZCSzBJN096czdPenM3T3pzN096dEJRVVV2UWl4NVEwRkJkVUk3UVVGRmRrSXNPRU5CUVRSQ08wRkJRelZDTEd0RVFVRm5ReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNmbG9hdCA9IGV4cG9ydHMuY2RhdGUgPSBleHBvcnRzLm51bWJlcl9mb3JtYXRfZGUgPSBleHBvcnRzLm51bWJlcl9mb3JtYXQgPSB2b2lkIDA7XG4vKipcbiAqIEZvcm1hdGllcnQgZWluIFphaGxcbiAqIFF1ZWxsZTogaHR0cDovL3d3dy5icmFpbjQuZGUvcHJvZ3JhbW1pZXJlY2tlL2pzL251bWJlckZvcm1hdC5waHBcbiAqXG4gKiBAcGFyYW0ge2Zsb2F0fSBudW1iZXIgRGllIFphaGwgc2VsYmVyXG4gKiBAcGFyYW0ge2ludH0gbGFlbmdlICBBbnphaGwgWmFobGVuIG5hY2ggZGVtIEtvbW1hXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwICBTZXBlcmF0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aF9zZXAgVGF1c2VuZGVyc2VwZXJhdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXRpZXJ0ZSBaYWhsXG4gKi9cbmZ1bmN0aW9uIG51bWJlcl9mb3JtYXQobnVtYmVyLCBsYWVuZ2UsIHNlcCwgdGhfc2VwKSB7XG4gICAgbGV0IHN0cl9udW1iZXI7XG4gICAgbGV0IGFycl9pbnQ7XG4gICAgbGV0IG5hY2hrb21tYTtcbiAgICBsZXQgaTtcbiAgICBsZXQgajtcbiAgICBsZXQgQmVncmlmZjtcbiAgICBsZXQgRXh0cmFrdDtcbiAgICBsZXQgc3RyX2ZpcnN0O1xuICAgIG51bWJlciA9IE1hdGgucm91bmQobnVtYmVyICogTWF0aC5wb3coMTAsIGxhZW5nZSkpIC8gTWF0aC5wb3coMTAsIGxhZW5nZSk7XG4gICAgc3RyX251bWJlciA9IG51bWJlciArICcnO1xuICAgIGFycl9pbnQgPSBzdHJfbnVtYmVyLnNwbGl0KCcuJyk7XG4gICAgaWYgKCFhcnJfaW50WzBdKVxuICAgICAgICBhcnJfaW50WzBdID0gJzAnO1xuICAgIGlmICghYXJyX2ludFsxXSlcbiAgICAgICAgYXJyX2ludFsxXSA9ICcnO1xuICAgIGlmIChhcnJfaW50WzFdLmxlbmd0aCA8IGxhZW5nZSkge1xuICAgICAgICBuYWNoa29tbWEgPSBhcnJfaW50WzFdO1xuICAgICAgICBmb3IgKGkgPSBhcnJfaW50WzFdLmxlbmd0aCArIDE7IGkgPD0gbGFlbmdlOyBpKyspIHtcbiAgICAgICAgICAgIG5hY2hrb21tYSArPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgYXJyX2ludFsxXSA9IG5hY2hrb21tYTtcbiAgICB9XG4gICAgLy9pZiAodGhfc2VwICE9IFwiXCIgJiYgYXJyX2ludFswXS5sZW5ndGggPiAzKSB7XG4gICAgaWYgKHRoX3NlcCAhPSAnJyAmJlxuICAgICAgICAoKGFycl9pbnRbMF0ubGVuZ3RoID4gMyAmJiBhcnJfaW50WzBdID4gMCkgfHxcbiAgICAgICAgICAgIChhcnJfaW50WzBdLmxlbmd0aCA+IDQgJiYgYXJyX2ludFswXSA8IDApKSkge1xuICAgICAgICBCZWdyaWZmID0gYXJyX2ludFswXTtcbiAgICAgICAgYXJyX2ludFswXSA9ICcnO1xuICAgICAgICBmb3IgKGogPSAzOyBqIDwgQmVncmlmZi5sZW5ndGg7IGogKz0gMykge1xuICAgICAgICAgICAgRXh0cmFrdCA9IEJlZ3JpZmYuc2xpY2UoQmVncmlmZi5sZW5ndGggLSBqLCBCZWdyaWZmLmxlbmd0aCAtIGogKyAzKTtcbiAgICAgICAgICAgIGFycl9pbnRbMF0gPSB0aF9zZXAgKyBFeHRyYWt0ICsgYXJyX2ludFswXSArICcnO1xuICAgICAgICB9XG4gICAgICAgIHN0cl9maXJzdCA9IEJlZ3JpZmYuc3Vic3RyKDAsIEJlZ3JpZmYubGVuZ3RoICUgMyA9PSAwID8gMyA6IEJlZ3JpZmYubGVuZ3RoICUgMyk7XG4gICAgICAgIGFycl9pbnRbMF0gPSBzdHJfZmlyc3QgKyBhcnJfaW50WzBdO1xuICAgIH1cbiAgICByZXR1cm4gYXJyX2ludFswXSArIHNlcCArIGFycl9pbnRbMV07XG59XG5leHBvcnRzLm51bWJlcl9mb3JtYXQgPSBudW1iZXJfZm9ybWF0O1xuZnVuY3Rpb24gbnVtYmVyX2Zvcm1hdF9kZShudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyX2Zvcm1hdChudW1iZXIsIDIsICcsJywgJy4nKTtcbn1cbmV4cG9ydHMubnVtYmVyX2Zvcm1hdF9kZSA9IG51bWJlcl9mb3JtYXRfZGU7XG4vKipcbiAqIEZvcm1hdGllcnQgZWluIERFIG9kZXIgSVNPIERhdHVtIHp1IERhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfGRhdGV9IGRhdHVtXG4gKiBAcmV0dXJuIERhdGVcbiAqL1xuZnVuY3Rpb24gY2RhdGUoZGF0dW0pIHtcbiAgICBpZiAoZGF0dW0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXR1bTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdHVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAvL1Byw7xmZW4gb2IgUHVua3QgZHJpbiBpc3RcbiAgICAgICAgaWYgKGRhdHVtLmluZGV4T2YoJy4nKSA+IDApIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBkYXR1bS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZGF0dW0gPVxuICAgICAgICAgICAgICAgIHRtcFsyXSArXG4gICAgICAgICAgICAgICAgICAgICctJyArXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgdG1wWzFdKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgICAgICAgICAnLScgK1xuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIHRtcFswXSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdHVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXR1bS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gZGF0dW0uc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGRhdHVtID1cbiAgICAgICAgICAgICAgICB0bXBbMF0gK1xuICAgICAgICAgICAgICAgICAgICAnLScgK1xuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIHRtcFsxXSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgICAgICAgICAgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyB0bXBbMl0pLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXR1bSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOYU4oZGF0dW0pKSB7XG4gICAgICAgIGRhdHVtID0gJzAwMDAtMDAtMDAnO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXR1bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhdHVtID0gJzAwMDAtMDAtMDAnO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXR1bSA9PT0gbnVsbCkge1xuICAgICAgICBkYXR1bSA9ICcwMDAwLTAwLTAwJztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdHVtKTtcbn1cbmV4cG9ydHMuY2RhdGUgPSBjZGF0ZTtcbmZ1bmN0aW9uIGNmbG9hdCh6YWhsKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY2Zsb2F0OiAnICsgemFobCArICcgLSAnICsgdHlwZW9mIHphaGwpO1xuICAgIGlmICh0eXBlb2YgemFobCA9PSAnc3RyaW5nJykge1xuICAgICAgICB6YWhsID0gemFobC5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICB6YWhsID0gemFobC5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgemFobCA9IHBhcnNlRmxvYXQoemFobCk7XG4gICAgICAgIGlmIChpc05hTih6YWhsKSkge1xuICAgICAgICAgICAgemFobCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOYU4oemFobCkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHphaGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoemFobCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHphaGw7XG59XG5leHBvcnRzLmNmbG9hdCA9IGNmbG9hdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWVtRm9iQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5NllXaHNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJPenM3T3pzN096czdSMEZUUnp0QlFVTklMRk5CUVdkQ0xHRkJRV0VzUTBGQlF5eE5RVUZqTEVWQlFVVXNUVUZCWXl4RlFVRkZMRWRCUVZjc1JVRkJSU3hOUVVGak8wbEJRM1pHTEVsQlFVa3NWVUZCYTBJc1EwRkJRenRKUVVOMlFpeEpRVUZKTEU5QlFXTXNRMEZCUXp0SlFVTnVRaXhKUVVGSkxGTkJRV2xDTEVOQlFVTTdTVUZEZEVJc1NVRkJTU3hEUVVGVExFTkJRVU03U1VGRFpDeEpRVUZKTEVOQlFWTXNRMEZCUXp0SlFVTmtMRWxCUVVrc1QwRkJaU3hEUVVGRE8wbEJRM0JDTEVsQlFVa3NUMEZCWlN4RFFVRkRPMGxCUTNCQ0xFbEJRVWtzVTBGQmFVSXNRMEZCUXp0SlFVVjBRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVNeFJTeFZRVUZWTEVkQlFVY3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVONlFpeFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVVZvUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGJFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03VVVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMnBETEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVWQlFVVTdVVUZET1VJc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMmhFTEZOQlFWTXNTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRiRUk3VVVGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8wdEJRM2hDTzBsQlEwUXNPRU5CUVRoRE8wbEJRemxETEVsQlEwVXNUVUZCVFN4SlFVRkpMRVZCUVVVN1VVRkRXaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONFF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU0xUXp0UlFVTkJMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tJc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjBReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEycEVPMUZCUTBRc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlEzaENMRU5CUVVNc1JVRkRSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRMnBFTEVOQlFVTTdVVUZEUml4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOeVF6dEpRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRka01zUTBGQlF6dEJRVEZEUkN4elEwRXdRME03UVVGRlJDeFRRVUZuUWl4blFrRkJaMElzUTBGQlF5eE5RVUZqTzBsQlF6ZERMRTlCUVU4c1lVRkJZU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRelZETEVOQlFVTTdRVUZHUkN3MFEwRkZRenRCUVVWRU96czdPMGRCU1VjN1FVRkRTQ3hUUVVGblFpeExRVUZMTEVOQlFVTXNTMEZCVlR0SlFVTTVRaXhKUVVGSkxFdEJRVXNzV1VGQldTeEpRVUZKTEVWQlFVVTdVVUZEZWtJc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRFpEdFRRVUZOTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hGUVVGRk8xRkJRM0JETERCQ1FVRXdRanRSUVVNeFFpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6RkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUzBGQlN6dG5Ra0ZEU0N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5PTEVkQlFVYzdiMEpCUTBnc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjZRaXhIUVVGSE8yOUNRVU5JTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGVFSTdZVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTJwRExFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNTMEZCU3p0blFrRkRTQ3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTk9MRWRCUVVjN2IwSkJRMGdzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONlFpeEhRVUZITzI5Q1FVTklMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZUVJN1MwRkRSanRUUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTNaQ0xFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdTMEZEZEVJN1UwRkJUU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTEVWQlFVVTdVVUZET1VJc1MwRkJTeXhIUVVGSExGbEJRVmtzUTBGQlF6dExRVU4wUWp0VFFVRk5MRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzUlVGQlJUdFJRVU42UWl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRE8wdEJRM1JDTzBsQlJVUXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU42UWl4RFFVRkRPMEZCYWtORUxITkNRV2xEUXp0QlFVVkVMRk5CUVdkQ0xFMUJRVTBzUTBGQlF5eEpRVUZUTzBsQlF6bENMSFZFUVVGMVJEdEpRVU4yUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hKUVVGSkxGRkJRVkVzUlVGQlJUdFJRVU16UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJUbENMRWxCUVVrc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEWml4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRMVk3UzBGRFJqdFRRVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xRkJRM1JDTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTFZN1UwRkJUU3hKUVVGSkxFbEJRVWtzUzBGQlN5eFRRVUZUTEVWQlFVVTdVVUZETjBJc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRFZqdFRRVUZOTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVONFFpeFBRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTldPMGxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03UVVGRFpDeERRVUZETzBGQmJFSkVMSGRDUVd0Q1F5SjkiLCIvKipcbiAqIEZvcm1hdHMgbnVtYmVycyBmcm9tIERFIGZvcm1hdCB0byBVUyBmb3JtYXQgYmVmb3JlIHRoZSBmb3JtIGlzIHNlbnRcbiAqL1xuXG4kKCcjbXlmb3JtJykuc3VibWl0KGZ1bmN0aW9uKCkge1xuICAgICQoJy5pbnB1dC1ldXJvJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcsJywgJy4nKTtcblxuXG4gICAgICAgICQodGhpcykudmFsKHN0cik7XG4gICAgfSk7XG5cblxuICAgICQoJy5pbnB1dC1wZXJjZW50JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcsJywgJy4nKTtcblxuXG4gICAgICAgICQodGhpcykudmFsKHN0cik7XG4gICAgfSk7XG5cbiAgICAkKCcuaW5wdXQtaW50JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcsJywgJy4nKTtcblxuXG4gICAgICAgICQodGhpcykudmFsKHN0cik7XG4gICAgfSk7XG5cbiAgICAkKCcuaW5wdXQtbnVtYmVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgc3RyID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcsJywgJy4nKTtcblxuXG4gICAgICAgICQodGhpcykudmFsKHN0cik7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiB0cnVlOyAvLyByZXR1cm4gZmFsc2UgdG8gY2FuY2VsIGZvcm0gYWN0aW9uXG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwibmFtZXMiOlsiX19jcmVhdGVCaW5kaW5nIiwidGhpcyIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIiwiZXhwb3J0cyIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ2YWx1ZSIsIm51bWJlcl9mb3JtYXQiLCJudW1iZXIiLCJsYWVuZ2UiLCJzZXAiLCJ0aF9zZXAiLCJzdHJfbnVtYmVyIiwiYXJyX2ludCIsIm5hY2hrb21tYSIsImkiLCJqIiwiQmVncmlmZiIsIkV4dHJha3QiLCJzdHJfZmlyc3QiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJzcGxpdCIsImxlbmd0aCIsInNsaWNlIiwic3Vic3RyIiwiY2Zsb2F0IiwiY2RhdGUiLCJudW1iZXJfZm9ybWF0X2RlIiwiZGF0dW0iLCJEYXRlIiwiaW5kZXhPZiIsInRtcCIsImlzTmFOIiwiemFobCIsInJlcGxhY2UiLCJwYXJzZUZsb2F0IiwiJCIsInN1Ym1pdCIsImVhY2giLCJzdHIiLCJ2YWwiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIl0sInNvdXJjZVJvb3QiOiIifQ==