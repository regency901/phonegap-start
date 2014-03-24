/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    // Application Constructor
    initialize: function() {
        
        
    $(document).on('pageinit', '#home', function(){  
            console.log('Received pageinit event on #home');
            alert('Received pageinit event on #home');            
            
            // Search for in right panel
            $(document).on('click', '#submit', function() { // catch the form's submit event
                console.log('Received click event on #submit');
                alert('Search Ridder Scorecard form clicked!');
                /*
                if($('#username').val().length > 0 && $('#password').val().length > 0){
                    // Send data to server through the ajax call
                    // action is functionality we want to call and outputJSON is our data
                        $.ajax({url: 'check.php',
                            data: {action : 'login', formData : $('#check-user').serialize()},
                            type: 'post',                   
                            async: 'true',
                                                    dataType: 'json',
                            beforeSend: function() {
                                // This callback function will trigger before data is sent
                                $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                            },
                            complete: function() {
                                // This callback function will trigger on data sent/received complete
                                $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                            },
                            success: function (result) {
                                if(result.status) {
                                    $.mobile.changePage("#second");                         
                                } else {
                                    alert('Logon unsuccessful!'); 
                                }
                            },
                            error: function (request,error) {
                                // This callback function will trigger on unsuccessful action                
                                alert('Network error has occurred please try again!');
                            }
                        });                   
                } else {
                    alert('Please fill all necessary fields');
                } 
                */          
                return false; // cancel original event to prevent form submitting
            });    
    });



    },
    
};
