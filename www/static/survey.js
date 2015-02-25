 


var mobile_off_flag=0;

//-------GET GEO LOCATION
function getLocationInfo() { //location
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#long").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	$("#errorChkVSubmit").html('');
	$("#errorConfirmProfileUpdate").html('');
	
	$("#checkLocation").html('Location Confirmed');
	$("#checkLocationProfileUpdate").html('Location Confirmed');	
}

function onError(error) {
	$("#lat").val(0);
	$("#long").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	
	$("#checkLocation").html('Location not found');
	$("#checkLocationProfileUpdate").html('Location not found');
	}

// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		var url = "#login";
		$.mobile.navigate(url);		
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1=""
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str=''
	localStorage.productSampleStr=''
	localStorage.productppmStr='';
	
	$("#doc_campaign").html('');
	$("#doc_gift").html('');
	$("#doc_ppm").html('');
	$("#doc_sample").html('');
	
	

	
	
	//$(".market").html('');
	$(".visit_client").html('');
	
	var url = "#pageHome";
	$.mobile.navigate(url);
}

//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		
		localStorage.payment_mode=""
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		
		
		
		
		localStorage.market_client=''
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		
		localStorage.market_doctor='';
		
		
		//----------- empty brand data from local storage
		var brandList = localStorage.brand_list_string.split('<rd>');
		var brandListLength=brandList.length	
		for (var i=0; i < brandListLength; i++){
			var brandName = brandList[i]
			if(brandName!=""){
				var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
				localStorage[brandCharStr]='';	
			}																					
		}
		
		var url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	};
}

function get_login() {
	var url = "#login";
	$.mobile.navigate(url);
	}

							
//========================= Longin: Check user
function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	

	
	//Main
	//var apipath_base_photo_dm='http://e2.businesssolutionapps.com/mrepnovelta/syncmobile_ofline_ppm_02012015/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	//var apipath_base_photo_dm='http://127.0.0.1:8000/mrepnovelta/syncmobile_ofline_ppm_02012015/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	
	//var apipath_base_photo_dm='http://127.0.0.1:8000/mrepnovelta/syncmobile_ofline_ppm_report/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	var apipath_base_photo_dm='http://e2.businesssolutionapps.com/mrepnovelta/syncmobile_ofline_ppm_report/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	//$("#error_login").html(apipath_base_photo_dm);
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	var base_url='';
	var photo_url='';
	
	localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		

		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		
		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		localStorage.productppmtStr='';
		
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		
		localStorage.market_doctor='';
		
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		
		//----
		$.ajax({
			 type: 'POST',
			 url: apipath_base_photo_dm,
			 success: function(result) {	
			 		
				if (result==''){
					$("#wait_image_login").hide();
					$("#loginButton").show();
					$("#error_login").html('Base URL not available');						
				}else{
					var startIndex=result.indexOf('<start>')
					var endIndex=result.indexOf('<end>')
					
					var urlResult=result.substring(startIndex+7,endIndex);
					
					var resultArray = urlResult.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0]
						photo_url=resultArray[1]
						photo_submit_url=resultArray[2]
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							clear_autho();
							$("#error_login").html("");		
							$("#loginButton").hide();
							$("#wait_image_login").show();
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
						//	$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
							//http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
							
							$.ajax({
									 type: 'POST',
									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
									 success: function(result) {
											
											if (result==''){
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html('Sorry Network not available');
												
											}else{							
												var resultArray = result.split('<SYNCDATA>');			
												if (resultArray[0]=='FAILED'){
													$("#wait_image_login").hide();
													$("#loginButton").show();								
													//$("#error_login").html(resultArray[1]);
													
												}else if (resultArray[0]=='SUCCESS'){
													
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													//alert (localStorage.menu);
												//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=''
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
															
															 menu_str=menu_str+'<a id="sub_button" data-role="button" style="height:100px;" onClick="'+s_key+'()" ><img style="padding-top:0px; padding-bottom:0px;" src="'+s_key+'.png"></a>'

														
														
														
													}
													
												}
												
												localStorage.menu_list=menu_str;
												
												$('#menu_show').empty();
												//$("#menu_tbl").html(localStorage.menu_list);
												$('#menu_show').append(localStorage.menu_list).trigger('create');
												//alert (localStorage.menu_list);
												//=============set menu end================
													
													
													
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													
													//------------ Order Item list								

													
													var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" data-inset="true" data-filter-reveal="true" > ';
													
													
													//product_tbl_doc_campaign=='<ul id="campaign_combo_id_lv" data-role="listview">'		
													var product_tbl_doc_sample='<ul id="sample_combo_id_lv" data-role="listview"  data-filter="true" data-input="#sample_combo_id" data-inset="true" data-filter-reveal="true" > ';
													
													
													
													var product_tbl_order='<ul id="item_combo_id_lv" data-role="listview" data-filter="true" data-input="#item_combo_id" data-inset="true" data-filter-reveal="true">'
													
													for (var j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';																		

														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input onBlur="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>'
														//------------ Doctor Campaign Item list
														
														
														product_tbl_doc_campaign=product_tbl_doc_campaign+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

															
														//-------------Sample----------
														
														product_tbl_doc_sample=product_tbl_doc_sample+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input onBlur="getSampleData_keyup(\''+product_id2+'\')" type="number" id="sample_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="sample_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="sample_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="sample_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+product_name2.toUpperCase()+'</td></tr>'+'</table>'+'</li>'
														
														
													
													}
													product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
													product_tbl_doc_sample=product_tbl_doc_sample+'</ul>';
													 
													
													localStorage.product_tbl_str=product_tbl_order											
													localStorage.product_tbl_str_doc_campaign=product_tbl_doc_campaign
													localStorage.product_tbl_str_doc_sample=product_tbl_doc_sample
													
													
													
													$("#product_list_tbl").html(localStorage.product_tbl_str);
													$("#doctor_campaign_list_tbl").html(localStorage.product_tbl_str_doc_campaign);
													
													//$('#doctor_campaign_list_tbl').empty();
													//$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
													
													
													$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
													//$('#doctor_sample_list_tbl').empty();
													//$('#doctor_sample_list_tbl').append(localStorage.product_tbl_str_doc_sample).trigger('create');
													
													
													
													//alert (localStorage.product_tbl_str_doc_sample)
													//------------ Gift Item list								
													//alert (localStorage.gift_string);
													
													
													if (localStorage.gift_string.length > 5 ){
													
														var giftList=localStorage.gift_string.split('<rd>');
														var giftLength=giftList.length;
														
														//alert ('nadira');
														//var gift_tbl_doc='<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;">';
														
														var gift_tbl_doc='<ul id="gift_combo_id_lv" data-role="listview"  data-filter="true" data-input="#gift_combo_id" data-inset="true" >';
														for (var j=0; j < giftLength; j++){
															var gifttArray = giftList[j].split('<fd>');
															var gift_id=gifttArray[0];	
															var gift_name=gifttArray[1];
															var gift_qty='0';
															
															
															
															
															//------------ Doctor Gift Item list
															
															gift_tbl_doc=gift_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="gift_id'+gift_id+'" value="'+gift_id+'" ><input onBlur="getGiftData_keyup(\''+gift_id+'\')" type="number" id="gift_qty'+gift_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_gift_name'+gift_id.toUpperCase()+'" value="'+gift_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ gift_name +'" onClick="tr_item_doc_campaign(\''+gift_id+'\')" >'+ gift_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
														
														gift_tbl_doc=gift_tbl_doc+'</ul>';//+'</table>'
													
														localStorage.gift_tbl_doc=gift_tbl_doc
														$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
														
														//$('#doctor_gift_list_tbl').empty();
														//$('#doctor_gift_list_tbl').append(localStorage.gift_tbl_doc).trigger('create');
													
													}
													
													
//													========================PPM Start========
													if (localStorage.ppm_string.length > 5 ){
													
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														
														//alert ('nadira');
														//var ppm_tbl_doc='<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;">';
														
														var ppm_tbl_doc='<ul id="ppm_combo_id_lv" data-role="listview"  data-filter="true" data-input="#ppm_combo_id" data-inset="true" >';
														for (var j=0; j < ppmLength; j++){
															var ppmArray = ppmList[j].split('<fd>');
															var ppm_id=ppmArray[0];	
															var ppm_name=ppmArray[1];
															var ppm_qty='0';
															
															
															
															
															//------------ Doctor ppm Item list
															
															ppm_tbl_doc=ppm_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="ppm_id'+ppm_id+'" value="'+ppm_id+'" ><input onBlur="getppmData_keyup(\''+ppm_id+'\')" type="number" id="ppm_qty'+ppm_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_ppm_name'+ppm_id.toUpperCase()+'" value="'+ppm_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ ppm_name +'" onClick="tr_item_doc_campaign(\''+ppm_id+'\')" >'+ ppm_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
														
														ppm_tbl_doc=ppm_tbl_doc+'</ul>';//+'</table>'
													
														localStorage.ppm_tbl_doc=ppm_tbl_doc
														$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
														
														//alert (localStorage.ppm_tbl_doc);
														//$('#doctor_ppm_list_tbl').empty();
														//$('#doctor_ppm_list_tbl').append(localStorage.ppm_tbl_doc).trigger('create');
													
													} 


//													===========================ppm end===============
													//==========Combo for report Start
													market_list_combo();
													item_list_combo();
													mpo_list_combo()
													//==========Combo for report End
													
													//--------- Delivery Item List								
													var product_tbl_delevery='<table border="0" id="delevery_tbl" cellpadding="0" cellspacing="0" style="background-color:#F7F7F7; border-radius:5px;">';
													for (var i=0; i < productLength; i++){
														var productArray = productList[i].split('<fd>');
														var product_id=productArray[0];	
														var product_name=productArray[1];
														
														
														product_tbl_delevery+='<tr  style="border-bottom:1px solid #D2EEE9;"><td width="40%" style="text-align:center; padding-left:5px;"><input type="number" id="delivery_qty'+product_id+'" value="" placeholder="0" ><input type="hidden" id="order_id'+product_id+'" value="'+product_id+'" ><input type="hidden" id="delivery_id'+product_id+'" value="'+product_id+'" placeholder="qty" ><input type="hidden" id="delivery_name'+product_id+'" value="'+product_name+'" placeholder="qty" ></td><td width="60%" style="text-align:left;">&nbsp;&nbsp;'+product_name+'</td></tr>';
													}
													product_tbl_delevery+='</table>';								
													localStorage.product_tbl_del_str=product_tbl_delevery
													
													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															visitPlanMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="visitPlanMarketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															
															//profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															}
													}
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb
													localStorage.market_cmb_list_cp=profileMarketComb;
													
													
	
													client_catList();	

													//---------------
													$("#error_login").html('');
													$("#wait_image_login").hide();
													$("#loginButton").show();
													
													//----------------
													localStorage.visit_page=""
													
													
													$("#se_mpo").val(localStorage.user_id);
													//alert (localStorage.user_id); 
													
													
																		
													localStorage.synced='YES';
													var url = "#pageHome";
													$.mobile.navigate(url);								
													location.reload();
													
												}else{
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Server Error');							
													}
											}
										  },
									  error: function(result) {					 
										  $("#wait_image_login").hide();
										  $("#loginButton").show();
										  $("#error_login").html('Network Timeout. Please try again.');
										 // $("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
										  
										  var url = "#login";
										  $.mobile.navigate(url);	
									  }
								  });//end ajax
								}//base url check
						//alert ('nadira');
						//-------------		
					}else{
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
					}
					
				}
			  },
			  error: function(result) {			  	   
				 // alert ('nadira');
				  $("#wait_image_login").hide();
				  $("#loginButton").show();
				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
				//  $("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
			  }
		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function

function getOtherOutlet(){	
	if (mobile_off_flag==1){
		mobile_off_flag=0;
		
		var url = "#pageHome";
		$.mobile.navigate(url);
		
	}else{
		var visit_type=localStorage.visit_type;
		//alert(visit_type);
		if (visit_type=="Scheduled"){
			var url = "#page_scheduled";
			$.mobile.navigate(url);
			
		}else if(visit_type=="Unscheduled"){
			var url = "#page_market_ret";
			$.mobile.navigate(url);
		};
	};
}

//-------------- Schedule Date Page
function getScheduleDate(){
	$("#btn_schedule_date").show();
	$("#wait_image_schedule_date").hide();
	
	var search_date=$("#sch_date").val();
	
	if (search_date=='' || search_date==undefined){		
		var now = new Date();
		var month=now.getUTCMonth()+1;
		
		if (month<10){
			month="0"+month
			}
		var day=now.getUTCDate();
		if (day<10){
			day="0"+day
			}		
		search_date = now.getUTCFullYear()+ "-" + month + "-" + day;
		$("#sch_date").val(search_date);
	}
	
	var url = "#page_scheduled";
	$.mobile.navigate(url);
	}


//------------------------------------------- Schedule Visit: Get retailers
function getSheduledRetailer(){	
	$("#schedule_client_combo_id").val('');
	
	var search_date=$("#sch_date").val();
	
	if (search_date=='' || search_date==undefined){		
		$("#err_retailer_date_next").text("Date Required");
	}else{
		var serch_date = new Date(search_date);	
		if (serch_date=='Invalid Date'){		
			$("#err_retailer_date_next").text("Invalid date");
		}else{
			$("#err_retailer_date_next").text("");
			$("#btn_schedule_date").hide();
			$("#wait_image_schedule_date").show();
	
			//alert(localStorage.base_url+'getScheduleClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&sch_date='+search_date);
			//http://127.0.0.1:8000/lscmreporting/syncmobile/getScheduleClientList?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&sch_date=2014-9-14
			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getScheduleClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&sch_date='+search_date,
				 success: function(result) {
						
						if (result==''){
							$("#err_retailer_date_next").html('Sorry Network not available');
							$("#btn_schedule_date").show();
							$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_retailer_date_next").html(resultArray[1]);								
								$("#btn_schedule_date").show();
								$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var client_string=resultArray[1];
																
								//----------------
								var clientList = client_string.split('<rd>');
								var clientListShowLength=clientList.length
								
								//var schedule_client_combo='<option value="0" >Select Retailer</option>'
								var schedule_client_combo=''			
								for (var i=0; i < clientListShowLength; i++){
									var clientValueArray = clientList[i].split('<fd>');
									var clientID=clientValueArray[0];
									var clientName=clientValueArray[1];
									if (clientID!=''){
										//schedule_client_combo+='<option value="'+clientName+'-'+clientID+'" >'+clientName+'-'+clientID+'</option>';
										schedule_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="sheduledRetailerVisitNextLV(\''+clientName+'-'+clientID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+clientName+'-'+clientID+'</a></li>';
									}
								}
																
								var schedule_client_combo_ob=$('#schedule_client_combo_id_lv');
								schedule_client_combo_ob.empty();	
								schedule_client_combo_ob.append(schedule_client_combo);			
																
								//schedule_client_combo_ob[0].selectedIndex = 0;
								
								$(".s_date").html(search_date);
								
								
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#btn_schedule_date").show();
								$("#wait_image_schedule_date").hide();
								
								//-----
								var url = "#page_scheduled_retailer";
								$.mobile.navigate(url);	
								
								//schedule_client_combo_ob.selectmenu("refresh");
								schedule_client_combo_ob.listview("refresh");
								
							}else{						
								$("#err_retailer_date_next").html('Server Error');
								$("#btn_schedule_date").show();
								$("#wait_image_schedule_date").hide();
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
					  $("#btn_schedule_date").show();
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
		
		}
	}
}

//------------------------------------------ Schedule Visit: Next button; merchandizing
function sheduledRetailerVisitNextLV(lvalue) {
	$("#schedule_client_combo_id").val(lvalue);
	sheduledRetailerVisitNext();	
	}
	
function sheduledRetailerVisitNext() {
	var search_date=$("#sch_date").val();
	var visit_client=$("#schedule_client_combo_id").val();
	
	var visit_type="Scheduled";
	var scheduled_date=search_date
	
	if(visit_client=='' || visit_client==0){
			$("#err_retailer_next").text("Retailer required");
		}else{
			$("#err_retailer_next").text("");
			$("#btn_schedule_ret").hide();
			$("#wait_image_schedule_ret").show();
			
			visitClientId=visit_client.split('-')[1]
			
			//alert(localStorage.base_url+'getClientInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId);
   			//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getClientInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId,
				 success: function(result) {
						
						//alert(result);
						if (result==''){
							$("#err_retailer_next").html('Sorry Network not available');
							$("#btn_schedule_ret").show();
							$("#wait_image_schedule_ret").hide();
			
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_retailer_next").html(resultArray[1]);
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
							}else if (resultArray[0]=='SUCCESS'){
								
								var visitMarketStr=resultArray[1];
								var merItemStr=resultArray[2];
								var lastMarketInfoStr=resultArray[3];
								
								//------------------------- Campaign
								localStorage.campaign_string=resultArray[4];
								localStorage.visit_camp_list_str=resultArray[5];
								
								var visit_distributor_nameid=resultArray[6];
														
								localStorage.visit_camp_submit_str=''
								
								//------
								localStorage.marchandizingStr=merItemStr
								localStorage.marchandizingInfoStr=''
								
								//----------- empty brand data from local storage
								var brandList = localStorage.brand_list_string.split('<rd>');
								var brandListLength=brandList.length	
								for (var i=0; i < brandListLength; i++){
									var brandName = brandList[i]
									
									if(brandName!=""){
										var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
										localStorage[brandCharStr]='';	
									}																												
								}
								
								//-------------------	
								localStorage.marketInfoStr=lastMarketInfoStr
								localStorage.marketInfoSubmitStr=''
								
								var lastMarketInfoStrList = lastMarketInfoStr.split('<rd>');
								var lastMarketInfoStrListLength=lastMarketInfoStrList.length
								for (var i=0; i < lastMarketInfoStrListLength; i++){
									var brandNameStrDetails = lastMarketInfoStrList[i]
									
									if(brandNameStrDetails!=''){
										var brandNameStrDetailsList=brandNameStrDetails.split('<fd>');
										var brandNameCurrent=brandNameStrDetailsList[0]
										
										var brandCharStrCurrent=brandNameCurrent.replace(' ','').replace('-','').replace('.','');
										localStorage[brandCharStrCurrent]=brandNameStrDetails;										
									}
								}
								
								//---------------
								$(".market").html(visitMarketStr);
								$(".visit_distributor").html(visit_distributor_nameid);
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								$(".visit_client").html(visit_client);
								
								localStorage.visit_client=visit_client
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								localStorage.visitMarketStr=visitMarketStr
								localStorage.visit_distributor_nameid=visit_distributor_nameid
										
								localStorage.visit_page="YES"
								
								//------------------- 							
								$("#err_retailer_next").text("");
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
			
								var url = "#page_visit";	
								$.mobile.navigate(url);
								
								//location.reload();
								
							}else{						
								$("#err_retailer_next").html('Server Error');	
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();						
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_next").html('Network Timeout. Please try again.');
					  $("#btn_schedule_ret").show();
					  $("#wait_image_schedule_ret").hide();
				  }
			 });//end ajax			
		}	
 }

//------------------------------Unsheduled visit: market
function addMarketList() {
	//$("#btn_unschedule_market").hide();
	//$("#wait_image_unschedule_market").show();
	$("#unschedule_market_combo_id").val('');
	
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	
	//---
	
	/*var unschedule_market_combo_ob=$('#unschedule_market_combo_id');
	unschedule_market_combo_ob.empty()
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	unschedule_market_combo_ob[0].selectedIndex = 0;*/
	
	var unschedule_market_combo_ob=$('#unschedule_market_combo_id_lv');
	unschedule_market_combo_ob.empty()
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	
	//-------	
	var url = "#page_market";
	$.mobile.navigate(url);
	//unschedule_market_combo_ob.selectmenu("refresh");
	unschedule_market_combo_ob.listview("refresh");
}

//--------------------------------- Unsheduled visit: Client list by market id

function marketNextLV(lvalue) {
	$("#unschedule_market_combo_id").val(lvalue);
	//alert(lvalue);
	if (localStorage.doctor_flag==1){
		marketNext_doc();
		//$("#ret_cat").hide();
		//alert (localStorage.doctor_flag)
		
	}
	else{
		marketNext();	
		//$("#ret_cat").show();
		//alert (localStorage.doctor_flag)
	}	
	}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			
			
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			
			market_list=localStorage.market_client;
			//alert (market_list);
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray = market_list.split('</'+market_Id+'>');			
					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
										
										
										
									}
	
								}
								else{
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									
								//	unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+'</font></a></li>';
								}	
							}
						 }
					//---class="ui-li-count" +'<img src="location.png" alt="" class="ui-li-icon ui-corner-none">'+'<img src="location.png" alt="">' 
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		//								unscheduled_m_client_combo_ob.empty()
		//								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
		//								unscheduled_m_client_combo_ob[0].selectedIndex = 0;
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					var url = "#page_market_ret";	
					$.mobile.navigate(url);
					
					//unscheduled_m_client_combo_ob.selectmenu("refresh");
					unscheduled_m_client_combo_ob.listview("refresh");
					
				}
			}//end else
			//============================Get market client list end===============================
		}			
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//alert(lvalue);
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}

function marketRetailerNext() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	//alert (visit_client);
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			$("#btn_unschedule_market_ret").hide();
			$("#wait_image_unschedule_market_ret").show();		
			
			visitClientId_list=visit_client.split('|')
			
			
			
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			
			
			//$("#err_m_retailer_next").text(localStorage.base_url+'getClientInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId);
   			
			// ajax-------
			//$.ajax({
//				 type: 'POST',
//				 url: localStorage.base_url+'getClientInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId,
//				 success: function(result) {
//						
//						if (result==''){
//							$("#err_m_retailer_next").text("Sorry Network not available");
//							$("#wait_image_unschedule_market_ret").hide();		
//							$("#btn_unschedule_market_ret").show();
//						}else{
//							var resultArray = result.split('<SYNCDATA>');			
//							if (resultArray[0]=='FAILED'){						
//								$("#err_m_retailer_next").html(resultArray[1]);
//								$("#wait_image_unschedule_market_ret").hide();		
//								$("#btn_unschedule_market_ret").show();
//								
//							}else if (resultArray[0]=='SUCCESS'){
//								
//								var visitMarketStr=resultArray[1];
//								var merItemStr=resultArray[2];
//								var lastMarketInfoStr=resultArray[3];
//								
//								//------------------------- Campaign
//								localStorage.campaign_string=resultArray[4];
//								localStorage.visit_camp_list_str=resultArray[5];
//								
//								var visit_distributor_nameid=resultArray[6];
//								
//								localStorage.visit_camp_submit_str=''
//								
//								//----------------
//								localStorage.marchandizingStr=merItemStr
//								localStorage.marchandizingInfoStr=''
//								
//								//----------- empty brand data from local storage
//								var brandList = localStorage.brand_list_string.split('<rd>');
//								var brandListLength=brandList.length	
//								for (var i=0; i < brandListLength; i++){
//									var brandName = brandList[i]
//									
//									if(brandName!=""){
//										var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
//										localStorage[brandCharStr]='';	
//									}																												
//								}
//								
//								//-------------------	
//								localStorage.marketInfoStr=lastMarketInfoStr
//								localStorage.marketInfoSubmitStr=''
//								
//								var lastMarketInfoStrList = lastMarketInfoStr.split('<rd>');
//								var lastMarketInfoStrListLength=lastMarketInfoStrList.length
//								for (var i=0; i < lastMarketInfoStrListLength; i++){
//									var brandNameStrDetails = lastMarketInfoStrList[i]
//									
//									if(brandNameStrDetails!=''){
//										var brandNameStrDetailsList=brandNameStrDetails.split('<fd>');
//										var brandNameCurrent=brandNameStrDetailsList[0]
//										
//										var brandCharStrCurrent=brandNameCurrent.replace(' ','').replace('-','').replace('.','');
//										localStorage[brandCharStrCurrent]=brandNameStrDetails;										
//									}
//								}
								//----------
								
								//$(".market").html(visitMarketStr);
								//$(".visit_distributor").html(visit_distributor_nameid);
								$(".visit_client").html(visit_client);
									
								//localStorage.visit_client=visit_client
								
								localStorage.visit_client_show=visit_client
								localStorage.visit_client=visit_client.split('|')[1]
								//localStorage.visitMarketStr=visitMarketStr
								//localStorage.visit_distributor_nameid=visit_distributor_nameid
								
								localStorage.visit_page="YES"
								
								//--------
								$("#err_m_retailer_next").text("");
								$("#wait_image_unschedule_market_ret").hide();		
								$("#btn_unschedule_market_ret").show();
		
								var url = "#page_visit";
								$.mobile.navigate(url);
								//location.reload();
								
							//}else{						
//								$("#err_m_retailer_next").html('Server Error');
//								$("#wait_image_unschedule_market_ret").hide();		
//								$("#btn_unschedule_market_ret").show();							
//								}
//						}
//					  },
//				  error: function(result) {
//					  	$("#err_m_retailer_next").html('Network Timeout. Please try again.');
//					  	$("#wait_image_unschedule_market_ret").hide();		
//						$("#btn_unschedule_market_ret").show();
//				  }
//			 });//end ajax
		}
}

//------------------------------Visit: Market Info List Show
function getMarketInfo() {
	var brandList = localStorage.brand_list_string.split('<rd>');
	var brandListLength=brandList.length
	var market_brand_list=''
	for (var i=0; i < brandListLength; i++){
		var brandName = brandList[i]
		
		if(brandName!=''){
			var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
			var marketInfoBrandStr=localStorage[brandCharStr];
			
			if (marketInfoBrandStr=='' || marketInfoBrandStr==undefined){
				market_brand_list+='<li style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketInfo(\''+brandName+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+brandName+'</a></li>';
			}else{
				market_brand_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-check" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketInfo(\''+brandName+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+brandName+'</a></li>';
				}
			
		}
	}
	
	//----------------
	var market_info_lv_ob=$('#market_info_lv');
	market_info_lv_ob.empty()
	market_info_lv_ob.append(market_brand_list);
	
	//-------	
	var url = "#market_info";
	$.mobile.navigate(url);
	market_info_lv_ob.listview("refresh");
}


//----------------- Visit: Market Info Dialog show
function marketInfo(result){	
		$("#error_marketinfo_dialog").html('');
		
		var brand_name=result;		
		var m_sales='';
		var m_stock='';
		var m_credit='';
		var m_price='';
		var m_free_bag='';
		var m_ret_com='';
		var m_trade_pro='';
		var m_remarks='';
		
		var brandCharStr=brand_name.replace(' ','').replace('-','').replace('.','');
		
		var marketInfoBrandStr=localStorage[brandCharStr]
		
		if (marketInfoBrandStr!="" &&  marketInfoBrandStr!=undefined){
			var brandArray=marketInfoBrandStr.split("<fd>");				
			m_sales=brandArray[1];
			m_stock=brandArray[2];
			m_credit=brandArray[3];
			m_price=brandArray[4];
			m_free_bag=brandArray[5];
			m_ret_com=brandArray[6];
			m_trade_pro=brandArray[7];
			m_remarks=brandArray[8];			
			}
		
		//----------------
		$("#brand_name").val(brand_name);
		
		$("#m_sales").val(m_sales);
		$("#m_stock").val(m_stock);
		$("#m_credit").val(m_credit);
		$("#m_price").val(m_price);
		$("#m_free_bag").val(m_free_bag);
		$("#m_ret_com").val(m_ret_com);
		
		$("#m_remarks").val(m_remarks);
		
		//--------------
		$('#m_trade_pro').empty();
		var selectOption='<option value="" >Select</option><option value="Yes" >Yes</option><option value="No" >No</option>';
		$('#m_trade_pro').append(selectOption);	
		var zselect = $("#m_trade_pro");		
		zselect.val(m_trade_pro);
		
		//----------------
		
		var url = "#dialogMarketInfo";
		$.mobile.navigate(url);
		
		zselect.selectmenu("refresh");		
}

//----------------- Visit: Market Info new add from Dialog
function marketInfoAdd(){	
	var m_brand_name=$("#brand_name").val();
	var m_sales=$("#m_sales").val();
	var m_stock=$("#m_stock").val();
	var m_credit=$("#m_credit").val();
	var m_price=$("#m_price").val();
	var m_free_bag=$("#m_free_bag").val();
	var m_ret_com=$("#m_ret_com").val();	
	var m_trade_pro=$("#m_trade_pro").val();
	var m_remarks=$("#m_remarks").val();
	
	if(m_brand_name==''){
		$("#error_marketinfo_dialog").html('Brand Name Required');
		
	}else if(m_stock==''){
		$("#error_marketinfo_dialog").html('Stock Required');
		
	}else if(m_price==''){
		$("#error_marketinfo_dialog").html('Price Required');
		
	}else if(m_sales==''){
		$("#error_marketinfo_dialog").html('Monthly Sales Required');
		
	}else if(m_trade_pro==''){
		$("#error_marketinfo_dialog").html('Trade Promotion Required');
		
	}else{
		var brandCharStr=m_brand_name.replace(' ','').replace('-','').replace('.','');
		localStorage[brandCharStr]=m_brand_name+'<fd>'+m_sales+'<fd>'+m_stock+'<fd>'+m_credit+'<fd>'+m_price+'<fd>'+m_free_bag+'<fd>'+m_ret_com+'<fd>'+m_trade_pro+'<fd>'+m_remarks;
		
		//--------------------------	
		$("#brand_name").val("");
		$("#m_sales").val("");
		$("#m_stock").val("");
		$("#m_credit").val("");
		$("#m_price").val("");
		$("#m_free_bag").val("");
		$("#m_ret_com").val("");
			
		$("#m_trade_pro").val("");
		$("#m_remarks").val("");
		
		getMarketInfo();
		}
	}

//----------------- Visit: Market Info cancel from Dialog
function marketInfoCancel(){	
	var m_brand_name=$("#brand_name").val();
	
	var brandCharStr=m_brand_name.replace(' ','').replace('-','').replace('.','');
	localStorage[brandCharStr]="";
	
	//--------------------------	
	$("#brand_name").val("");
	$("#m_sales").val("");
	$("#m_stock").val("");
	$("#m_credit").val("");
	$("#m_price").val("");
	$("#m_free_bag").val("");
	$("#m_ret_com").val("");
	
	$("#m_trade_pro").val("");
	$("#m_remarks").val("");
	
	getMarketInfo();
		
	}
	
//----------------- Visit: Set market info data
function setMarketInfo(){
	var marketInfoStr='';
	
	var brandList = localStorage.brand_list_string.split('<rd>');
	var brandListLength=brandList.length;
	
	for (var i=0; i < brandListLength; i++){
		var brandName = brandList[i]
		var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
		var marketInfoBrandStr=localStorage[brandCharStr];
		
		if (marketInfoBrandStr!="" &&  marketInfoBrandStr!=undefined){
			if(marketInfoStr==""){
				marketInfoStr=marketInfoBrandStr
			}else{
				marketInfoStr+='<rd>'+marketInfoBrandStr
				}	
		}
		
	}
	
	localStorage.marketInfoStr=marketInfoStr;
	localStorage.marketInfoSubmitStr=marketInfoStr;
	
	var url = "#page_visit";	
	$.mobile.navigate(url);
	
	}

//--------------------------------- Order: Show order from home

function getOrder_load(){	
	//var url = "#page_order";	
//	$.mobile.navigate(url);	
	//-----
	
	//var productList=localStorage.productListStr.split('<rd>');
//	var productLength=productList.length;
	
	/*for (var i=0; i < productLength; i++){
		var productArray2 = productList[i].split('<fd>');
		var product_id2=productArray2[0];	
		var product_name2=productArray2[1];
		$("#order_qty"+product_id2).val('');
	}*/
	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];		
			$("#order_qty"+orderProductId).val(orderProductQty);
		}		
	}
	
}
function getOrder(){	
	$("#errorChkVSubmit").html('');
	var url = "#page_order";	
	$.mobile.navigate(url);	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data

//function getOrderData_keyup(product_id){
//	var productOrder_change=productOrder_change
//	
//}



function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val();
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	

		
	}
function getOrderData(){	
	cart_data();
	var url = "#page_cart";	
	$.mobile.navigate(url);	
		
	}

//------------ marchandizing: Show marchandizing page
function getMarchandizing(){
	
	var marchandizingList=localStorage.marchandizingStr.split('<rd>');
	var marchandizingItemLength=marchandizingList.length;
	
	$("#tbl_marchandizing_show").empty();
	
	for (var i=0; i < marchandizingItemLength; i++){
		var marchandizingArray = marchandizingList[i].split('<fd>');
		var item_id=marchandizingArray[0];
		var item_name=marchandizingArray[1];
		var item_qty=marchandizingArray[2];
		var ins_date=marchandizingArray[3];
		
		var item_visible=marchandizingArray[4];
		var item_status=marchandizingArray[5];
		var item_dismantle=marchandizingArray[6];
		var new_flag=marchandizingArray[7];
		
		if(item_id!='' && item_id!=undefined){
					
			var bg_color="background-color:#D8EBEB";
			
			if (new_flag==1){
				bg_color="background-color:#FFF4F4";
				}
			
			//--------------
			var visible_cmbo="";
			if(item_visible=="Yes"){
				visible_cmbo='<select name="" id="item_visible'+i+'" data-native-menu="false"><option value="" >Visible</option><option value="Yes" selected="selected" >Yes</option><option value="No" >No</option></select>';
			}else if(item_visible=="No"){
				visible_cmbo='<select name="" id="item_visible'+i+'" data-native-menu="false"><option value="" >Visible</option><option value="Yes" >Yes</option><option value="No" selected="selected">No</option></select>';
			}else{
				visible_cmbo='<select name="" id="item_visible'+i+'" data-native-menu="false"><option value="" selected="selected" >Visible</option><option value="Yes" >Yes</option><option value="No" >No</option></select>';
				}
			//-------------
			//alert(marchandizingList[i]);
			
			var status_cmbo="";
			if(item_status=="Good"){
				status_cmbo='<select name="" id="item_status'+i+'" data-native-menu="false"><option value="" >Status</option><option value="Good" selected="selected">Good</option><option value="Bad" >Bad</option></select>';
				
							
			}else if(item_status=="Bad"){
				status_cmbo='<select name="" id="item_status'+i+'" data-native-menu="false"><option value="" >Status</option><option value="Good" >Good</option><option value="Bad" selected="selected">Bad</option></select>';
				
				
			}else{
				status_cmbo='<select name="" id="item_status'+i+'" data-native-menu="false"><option value="" selected="selected" >Status</option><option value="Good" >Good</option><option value="Bad" >Bad</option></select>';
				}
			
			//--------------- <input type="button" name="" id="" style="width:50%" onclick=delete_merchandizing('+i+'); value=" X "/>
			var lastRow=''
			if (new_flag==1){
				lastRow='<td>Cancel</td><td ><a data-role="button" style="text-decoration:none" onclick=delete_merchandizing('+i+');>X</a></td>';
			}else{
				if(item_dismantle=='YES'){
					lastRow='<td>Dismantle</td><td ><input type="checkbox" id="" name="dismantle'+i+'" value="YES" checked/></td>';
				}else{
					lastRow='<td>Dismantle</td><td ><input type="checkbox" id="" name="dismantle'+i+'" value="YES"/></td>';
					}
				}
			
			marchandizing='<tr id="merchandizingrow_'+i+'" ><td style="width:100%"></br><table width="100%"  style='+bg_color+';>'+
			'<tr ><td>Item</td><td style="font-weight:bold; text-shadow:none; color:#408080;" >:'+item_name+'-'+item_id+'<input type="hidden" id="item_id'+i+'" name="" value="'+item_id+'" /><input type="hidden" id="item_name'+i+'" name="" value="'+item_name+'" /></td></tr>'+
			'<tr><td>Qty</td><td >:'+item_qty+'<input type="hidden" id="item_qty'+i+'" name="" value="'+item_qty+'" /></td></tr>'+
			'<tr><td>Installation Date</td><td >:'+ins_date+'<input type="hidden" id="ins_date'+i+'" name="" value="'+ins_date+'"/></td></tr>'+
			
			'<tr><td>Visible</td><td >'+visible_cmbo+'</td></tr>'+
			'<tr><td>Status</td><td >'+status_cmbo+'</td></tr>'+			
			'<tr>'+lastRow+'</tr> '+	
			
			'</table></td></tr>';	
			
			$("#tbl_marchandizing_show").append(marchandizing).trigger('create');
		}
	}
	
	
	//---------------------------------
		
	var url = "#marchendizing";
	$.mobile.navigate(url);
	
	//-----------------
	
}

//-------------- Marchandizing Delete
function delete_merchandizing(rowid){
		//alert(rowid);
		//clientDelArray.splice(rowid,1);
		//$("#btn_del_x"+rowid).parent().parent().parent().remove();
		$("#merchandizingrow_"+rowid).remove();
		
		var marchandizingList=localStorage.marchandizingStr.split('<rd>');
		marchandizingList.splice(rowid,1);
		
		var marchandizingStrLast=''
		
		var marchandizingItemLength=marchandizingList.length;
		for (var i=0; i < marchandizingItemLength; i++){
			
			var marchandizingArray = marchandizingList[i].split('<fd>');
			
			var item_id=marchandizingArray[0];
			var item_name=marchandizingArray[1];
			var item_qty=marchandizingArray[2];
			var ins_date=marchandizingArray[3];			
			var item_visible=marchandizingArray[4];
			var item_status=marchandizingArray[5];	
			var dismantle=marchandizingArray[6];	
			//var dismantle="NO";	
			var new_flag=marchandizingArray[7];
			
			var mz_str=item_id+'<fd>'+item_name+'<fd>'+item_qty+'<fd>'+ins_date+'<fd>'+item_visible+'<fd>'+item_status+'<fd>'+dismantle+'<fd>'+new_flag;
			
			if(marchandizingStrLast==''){
				marchandizingStrLast=mz_str;
			}else{
				marchandizingStrLast=marchandizingStrLast+'<rd>'+mz_str			
				}
			
		}		
		localStorage.marchandizingStr=marchandizingStrLast;
		
		getMarchandizing();
}



//------------ marchandizing: marchandizing item Dialog  new
function addMarchandizingItem(){	
	var marchanItem=localStorage.marchandizingItem.split('<rd>');
	
	var marchandizing_item_ob = $("#marchandizing_item_id");
	marchandizing_item_ob.empty();
	
	var mzItemOption='<option value="" >Select</option>';
	for (var i=0; i < marchanItem.length; i++){		
		var item_name=marchanItem[i]
		var mItemIList=item_name.split('<fd>');
		var mItemId=mItemIList[0]
		var mItemName=mItemIList[1]
		if (mItemId!=''){
			mzItemOption+='<option value="'+mItemName+'-'+mItemId+'" >'+mItemName+'-'+mItemId+'</option>';
			/*ob1.append('<option value="'+mItemName+'-'+mItemId+'" >'+mItemName+'-'+mItemId+'</option>');*/
			}			
	}	
	marchandizing_item_ob.append(mzItemOption);
	marchandizing_item_ob[0].selectedIndex = 0;
	
	
	$("#mz_qty").val('');
	$("#mz_ins_date").val('');
	
	var mz_visible_ob=$("#mz_visible");
	mz_visible_ob.empty();
	mz_visible_ob.append('<option value="" >Select</option><option value="Yes" >Yes</option><option value="No" >No</option>');
	mz_visible_ob.selectedIndex = 0;
	
	var mz_status_ob=$("#mz_status");
	mz_status_ob.empty();
	mz_status_ob.append('<option value="" >Select</option><option value="Good" >Good</option><option value="Bad" >Bad</option>');
	mz_status_ob.selectedIndex = 0;
	
	
	//--------------
	var url = "#dialogAddItem";
	$.mobile.navigate(url);
	
	//-----------------
	marchandizing_item_ob.selectmenu("refresh");
	mz_visible_ob.selectmenu("refresh");
	mz_status_ob.selectmenu("refresh");
	
	}
	
//------------ marchandizing: marchandizing item Dialog add button
function addMarchandizingInfo(){	
	$("#err_merchandizing_dialog").text("");
	
	var mz_item_name_id=$("#marchandizing_item_id").val();
	var mz_item_name_id_List=mz_item_name_id.split('-')
	
	var mz_item_name=mz_item_name_id_List[0]
	var mz_item_id=mz_item_name_id_List[1];
	
	var mz_item_qty=$("#mz_qty").val();
	var mz_date=$("#mz_ins_date").val();
	
	var mz_status=$("#mz_status").val();
	var mz_visible=$("#mz_visible").val();
	var mz_dismantle="NO";
	
	if(mz_item_name_id=='' || mz_item_qty=='' || mz_date=='' || mz_status=='' || mz_visible==''){		
		$("#err_merchandizing_dialog").text("All value required");
	}else{
		
		var tempQty=0
		try{
			tempQty=eval(mz_item_qty);
		}catch(ex){
			tempQty=0;
			}
		
		if(tempQty<=0){
				$("#err_merchandizing_dialog").text("Invalid Quantity");				
		}else{
			
			var mz_date_ok = new Date(mz_date);
			
			if (mz_date_ok.toString()=='Invalid Date'){		
				$("#err_merchandizing_dialog").text("Invalid date");
					
			}else{			
				var mz_n_str=mz_item_id+'<fd>'+mz_item_name+'<fd>'+mz_item_qty+'<fd>'+mz_date+'<fd>'+mz_visible+'<fd>'+mz_status+'<fd>'+mz_dismantle+'<fd>1';
				//alert(mz_n_str);	
				if(localStorage.marchandizingStr=='' || localStorage.marchandizingStr==undefined){
					localStorage.marchandizingStr=mz_n_str;
				}else{
					localStorage.marchandizingStr=localStorage.marchandizingStr+'<rd>'+mz_n_str			
					}
				
				getMarchandizing();
			
		   }//date check
		}//	qty check
		
	}//all value
	
 }//function


//------------ marchandizing: Set marchandizing  data for done
function getMarchandizingData(){
	var marchandizingList=localStorage.marchandizingStr.split('<rd>');
	
	var marchandizingItemLength=marchandizingList.length;
	
	var marchandizingStr="";
	for (var i=0; i < marchandizingItemLength; i++){		
		var item_id=$("#item_id"+i).val();
		var item_name=$("#item_name"+i).val();
		var item_qty=$("#item_qty"+i).val();
		var ins_date=$("#ins_date"+i).val();
		var item_visible=$("#item_visible"+i).val();
		var item_status=$("#item_status"+i).val();				
		var item_dismantle=$("input[name='dismantle"+i+"']:checked").val();
		
		if (item_dismantle==undefined){
			item_dismantle='NO'
		}else{
			item_dismantle='YES'
			}
		
		var marchandizingArray = marchandizingList[i].split('<fd>');
		var new_flag=0;
		if(marchandizingArray.length==8){
			new_flag=marchandizingArray[7];
			}
		
		if(item_id==undefined){
			continue;
			}
		
		//alert(item_id+'<fd>'+item_name+'<fd>'+item_qty+'<fd>'+ins_date+'<fd>'+item_visible+'<fd>'+item_status+'<fd>'+item_dismantle+'<fd>'+new_flag);
		//-------
		if (marchandizingStr==''){
			marchandizingStr=item_id+'<fd>'+item_name+'<fd>'+item_qty+'<fd>'+ins_date+'<fd>'+item_visible+'<fd>'+item_status+'<fd>'+item_dismantle+'<fd>'+new_flag
			
		}else{
			marchandizingStr+='<rd>'+item_id+'<fd>'+item_name+'<fd>'+item_qty+'<fd>'+ins_date+'<fd>'+item_visible+'<fd>'+item_status+'<fd>'+item_dismantle+'<fd>'+new_flag
			
			}	
	}	
	localStorage.marchandizingStr=marchandizingStr;
	localStorage.marchandizingInfoStr=marchandizingStr;
	
	var url = "#page_visit";	
	$.mobile.navigate(url);
}

//----------------- Campaign
var visitCampaginTempArray=[]
var visitCampaginArray=[]

function getVisitCampaign(){
	var campaignList = localStorage.campaign_string.split('<rd>');
	var campaignListLength=campaignList.length
	
	var campaign_cmb_listStr='<option value="0">Select Offer</option>'
	for (var i=0; i < campaignListLength; i++){
		var campaignArray = campaignList[i].split('<fd>');
		var campaignOfferId=campaignArray[0];
		var campaignOfferName=campaignArray[1];
		var campaignDes=campaignArray[2];
		if (campaignOfferId!='' && campaignOfferId!=undefined){
			campaign_cmb_listStr+='<option value="'+campaignOfferId+'_'+campaignOfferName+'_'+campaignDes+'" >'+campaignOfferName+' ('+campaignOfferId+')</option>';
			}
	}
	
	//-------------------------
	$("#error_visit_campaign").text("");
	
	var visit_campaign_cmb_ob=$('#visit_campaign_cmb_id');
	visit_campaign_cmb_ob.empty()
	visit_campaign_cmb_ob.append(campaign_cmb_listStr);
	visit_campaign_cmb_ob[0].selectedIndex = 0;
	
	//-------------- exist data show
	visitCampaginTempArray=[]
	visitCampaginArray=[]
	
	$("#tbl_visit_campaign").empty();
	$("#tbl_visit_campaign").append('<tr ><td style="background-color:#92C9C9; color:#F2F9F9; text-shadow:none;"><b>Offer</b></td><td style="background-color:#92C9C9; color:#F2F9F9; text-shadow:none;"><b>Period</b></td><td style="background-color:#92C9C9; color:#F2F9F9; text-shadow:none;"><b>Delete</b></td></tr>');
	
	if(localStorage.visit_camp_list_str!=undefined && localStorage.visit_camp_list_str!=''){
		//added campaign
		visitCampaginTempArray=localStorage.visit_camp_list_str.split('<rd>');
		var campTempArrayLength=visitCampaginTempArray.length;
		
		//totalCampaign				
		for (i=0; i < campTempArrayLength; i++){		
			var offer_data=visitCampaginTempArray[i];
				
			if(offer_data!=''){
				var offer_list=offer_data.split('<fd>');
				
				var offer_id=offer_list[0]
				var campaignOffName=offer_list[1];
				var campaignOffDes=offer_list[2];
							
				visitCampaginArray.push(offer_data)
				$("#tbl_visit_campaign").append("<tr id='visitCamp"+offer_id+"'><td class='offer_name' width='50%'>"+campaignOffName+" ("+offer_id+")</td><td class='offer_des' width='40%'>"+campaignOffDes+"</td><td width='10%' style='text-align:center'><a onClick=deleteVisitCampaign('"+offer_id+"');> X </a></td></tr>");
											 
			 }
		}
		
	}
	
	//----
	
	var url = "#page_campaign";
	$.mobile.navigate(url);
	visit_campaign_cmb_ob.selectmenu("refresh");
	
}

//----------------------------------Visit Plan: Add Retailer
function addVisitCampaign(){
	$("#error_visit_campaign").html('');
	visit_campaign_offer_name=$("#visit_campaign_cmb_id").val();
	
	if(visit_campaign_offer_name=='' || visit_campaign_offer_name==0){
		$("#error_visit_campaign").html('Offer required');		
	}else{
		var offer_IdNameDesList=visit_campaign_offer_name.split('_');
		var offer_id=offer_IdNameDesList[0];
		var offer_name=offer_IdNameDesList[1];
		var offer_des=offer_IdNameDesList[2];
		
		var offer_data=offer_id+'<fd>'+offer_name+'<fd>'+offer_des
		
		var indexVal=visitCampaginArray.indexOf(offer_data);
		
		if(indexVal<0){
			visitCampaginArray.push(offer_data)			
			$("#tbl_visit_campaign").append("<tr id='visitCamp"+offer_id+"'><td class='offer_name' width='50%'>"+offer_name+" ("+offer_id+")</td><td class='offer_des' width='40%'>"+offer_des+"</td><td width='10%' style='text-align:center'><a onClick=deleteVisitCampaign('"+offer_id+"');> X </a></td></tr>");
		}else{
			$("#error_visit_campaign").html('already exist');				
			}		
	  }
	}

//----------------------------------Visit Plan: Delete Retailer
function deleteVisitCampaign(campaignid){		
		var visitCampaginArrayLength=visitCampaginArray.length;
		
		//totalCampaign				
		for (i=0; i < visitCampaginArrayLength; i++){		
			var offer_data=visitCampaginArray[i];
			
			if(offer_data!=''){
				var offer_list=offer_data.split('<fd>');
				
				var offer_id=offer_list[0]
				var campaignOffName=offer_list[1];
				var campaignOffDes=offer_list[2];
				
				if(offer_id==campaignid){
					var campData=offer_id+'<fd>'+campaignOffName+'<fd>'+campaignOffDes
					
					var index=visitCampaginArray.indexOf(campData)
										
					visitCampaginArray.splice(index,1);
					$("#visitCamp"+campaignid).remove();
					
				}
			}
		}
  }

function getVisitCampaignData(){
	var visit_camp_list_str=''
	var visit_camp_submit_str=''
	
	campArrayLength=visitCampaginArray.length
	for (i=0; i < campArrayLength; i++){		
		var offer_data=visitCampaginArray[i];
		if(offer_data!=''){
			var offer_list=offer_data.split('<fd>');
			
			var offer_id=offer_list[0]
			var offer_name=offer_list[1];
			var offer_des=offer_list[2];
			
			if(offer_id!=''){
				if(visit_camp_list_str==""){
					  visit_camp_list_str=offer_id+'<fd>'+offer_name+'<fd>'+offer_des;
					  visit_camp_submit_str=offer_id;
				 }else{
					  visit_camp_list_str+='<rd>'+offer_id+'<fd>'+offer_name+'<fd>'+offer_des;
					  visit_camp_submit_str+='<fd>'+offer_id;
				 }
			}
	    }	
	  }
	
	localStorage.visit_camp_list_str=visit_camp_list_str;
	localStorage.visit_camp_submit_str=visit_camp_submit_str;
		
	var url = "#page_visit";
	$.mobile.navigate(url);
}
//-----VISIT SUBMIT
function visitSubmit(){	
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		lscVisitSubmit();	
	}	

}





function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	//alert (localStorage.visit_client);
	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done
	//marchandizingInfoStr=localStorage.marchandizingStr;
	//campaign_str=localStorage.visit_camp_list_str;
	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for (var i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var long=$("#long").val();
	var now = $.now();
	
	//alert(photoRequired+','+lscPhoto);
	localStorage.payment_mode=$("#payment_mode").val();
	if (photoRequired=='Yes' && lscPhoto==''){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
		
		
		if (lat=='' || lat==0 || long=='' || long==0){
			$("#errorChkVSubmit").html('Location not Confirmed');		
		}else{
			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#btn_visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					//$("#errorChkVSubmit").html(localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+long+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode)
					// ajax-------
					//alert (localStorage.payment_mode);
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+long+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode,
						 success: function(result) {
								
								//alert(result);
								if (result==''){					
									$("#errorChkVSubmit").html('Sorry Network not available');
									$("#wait_image_visit_submit").hide();
									$("#btn_visit_submit").show();									
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
										
										//-----------
										localStorage.visit_client=''
										//localStorage.visit_type=''
										//localStorage.scheduled_date=''
										localStorage.marchandizingStr=''
										
										localStorage.marketInfoLSCStr=''
//										localStorage.marketInfoAkijStr=''
//										localStorage.marketInfo7RingsStr=''
//										localStorage.marketInfoShahStr=''
//										localStorage.marketInfoScanStr=''
										
										localStorage.marketInfoStr='';
										localStorage.marketInfoSubmitStr='';
										
										localStorage.productOrderStr='';
										localStorage.marchandizingInfoStr='';
										localStorage.visit_camp_list_str='';
										localStorage.visit_camp_submit_str='';
										visitCampaginTempArray=[];
										visitCampaginArray=[];
										
										localStorage.visit_page="";
										
										localStorage.show_total="";
										
										//----------- empty brand data from local storage
										var brandList = localStorage.brand_list_string.split('<rd>');
										var brandListLength=brandList.length	
										for (var i=0; i < brandListLength; i++){
											var brandName = brandList[i]
											
											if(brandName!=""){
												var brandCharStr=brandName.replace(' ','').replace('-','').replace('.','');
												localStorage[brandCharStr]='';	
											}
																														
										}
										
										//-------------
										// Clear localStorage
											
											localStorage.productOrderStr='';
											var productList=localStorage.productListStr.split('<rd>');
											var productLength=productList.length;
											for (var i=0; i < productLength; i++){
												var productArray2 = productList[i].split('<fd>');
												var product_id2=productArray2[0];	
												var product_name2=productArray2[1];
												$("#order_qty"+product_id2).val('');
												//alert (product_id2);
											}	
											//localStorage.visit_client='';
											//localStorage.visit_type='';
										
										
										
										
										//--------------------------------------------------------
										//$(".market").html('');
										$(".visit_client").html('');
										
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#long").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
										
										$("#checkLocation").html('');
										$("#checkLocationProfileUpdate").html('');
										
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();
										
										$("#product_total_last").html('');
										$("#product_list_tbl_cart").html('');
										$("#product_total_cart").html('');
										$("#item_combo_id").val('Search');
										
										
										
										
										//image upload function									
										//uploadPhotoV(lscPhoto, imageName);
										
										//--
										$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										
										var url = "#page_confirm_visit_success";	
										$.mobile.navigate(url);
																				
									}else{						
										$("#errorChkVSubmit").html('Server Error');
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();								
										}
								}
							  },
						  error: function(result) {			  
								$("#errorChkVSubmit").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit").hide();
								$("#btn_visit_submit").show();	
						  }
					 });//end ajax	
				}
			}
		  }//locaction check
	}
  }


//------------------- Client Profile: Page from home
function addMarketListCp() {
	$("#profile_market_cmb_id").val('');
	
	//$("#btn_profile_market").hide();
	//$("#wait_image_profile_market").show();
	
	var market_cmb_list_cp=localStorage.market_cmb_list_cp;	
	//---
	/*var profile_market_cmb_id_ob=$('#profile_market_cmb_id');
	profile_market_cmb_id_ob.empty()
	profile_market_cmb_id_ob.append(market_cmb_list_cp);
	profile_market_cmb_id_ob[0].selectedIndex = 0;*/
	
	//var market_cmb_list_cplv=localStorage.market_cmb_list_cplv;
	var profile_market_cmb_id_oblv=$('#profile_market_cmb_id_lv');
	profile_market_cmb_id_oblv.empty();
	profile_market_cmb_id_oblv.append(market_cmb_list_cp);
	
	//-------
	var url = "#page_market_clprofile";
	$.mobile.navigate(url);
	//location.reload();
	//profile_market_cmb_id_ob.selectmenu("refresh");
	profile_market_cmb_id_oblv.listview("refresh");
}


//--------------------------------- Client Profile: Client list by market id

function marketNextCProfileLV(lvalue) {
	$("#profile_market_cmb_id").val(lvalue);
	//alert(lvalue);
	marketNextCProfile();
	
	}


function marketNextCProfile() {
	$("#err_market_next_cp").html('');
	//$("#profile_client_id").val('');
	
	var market_name=$("#profile_market_cmb_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next_cp").text("Market required");
		}else{
			$("#btn_profile_market").hide();
			$("#wait_image_profile_market").show();	
			
			
			//visitMarketStr
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			//alert (market_name);
			//alert (market_Id);
			//$("#err_market_next_cp").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			
			
			var catType=$("#catCombo_profile").val();
			//===========================Get market client list Start============================
			
			market_list=localStorage.market_client;
			//alert (marketNameId);
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next_cp").text("Sorry Network not available");	
					$("#wait_image_profile_market").hide();		
					//$("#btn_unschedule_profilemarket").show();
			}else{					
					var resultArray = market_list.split('</'+market_Id+'>');			
					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next_cp").text("Retailer not available");	
						$("#wait_image_profile_market").hide();		
						//$("#btn_unschedule_market").show();
						
					}
					else{
						
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var profile_m_client_combo=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										profile_m_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextCProfileLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
	
								}
								else{
									profile_m_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextCProfileLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									//profile_m_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextCProfileLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+'</font></a></li>';
								}	
							}
						 }
					//---class="ui-li-count" +'<img src="location.png" alt="" class="ui-li-icon ui-corner-none">'+'<img src="location.png" alt="">' 
					

								var profile_client_id_ob=$('#profile_client_id_lv');
								profile_client_id_ob.empty()
								profile_client_id_ob.append(profile_m_client_combo);
								
								$(".market").html(market_name);								
																
								//---------	
								$("#err_market_next_cp").html('');
								$("#wait_image_profile_market").hide();		
								$("#btn_profile_market").show();
								
								//-----
								var url = "#page_market_ret_cprofile";	
								$.mobile.navigate(url);
								//----
								
								//profile_client_id_ob.selectmenu("refresh");
								profile_client_id_ob.listview("refresh");
					
				}
			}//end else
			//============================Get market client list end===============================
			
			
	
			
		}	
		
}

//--------------------------------- Client Profile: retailer next

function marketRetailerNextCProfileLV(lvalue) {
	$("#profile_client_id").val(lvalue);
	//alert(lvalue);
	marketRetailerNextCProfile();	
	}
	
function marketRetailerNextCProfile() {
	$("#err_m_retailer_next_cp").text("");
	$("#err_profile_next_cp").html('');
	$("#errorConfirmProfileUpdate").html('');
	
	
	var profile_client=$("#profile_client_id").val();		
	
	if(profile_client=='' || profile_client==0){
			$("#err_m_retailer_next_cp").text("Retailer required");
		}else{
			$("#btn_profile_market_ret").hide();
			$("#wait_image_profile_market_ret").show();		
			
		
			localStorage.visit_client=profile_client
			
			profileClientId=localStorage.visit_client.split('|')[1]
			
			//$("#err_m_retailer_next_cp").text(localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+profileClientId);
   			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+profileClientId,
				 success: function(result) {
						
						//alert(result);
						if (result==''){					
							$("#err_m_retailer_next_cp").text('Sorry Network not available');
							$("#wait_image_profile_market_ret").hide();		
							$("#btn_profile_market_ret").show();
			
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_m_retailer_next_cp").html(resultArray[1]);
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();
							
							}else if (resultArray[0]=='SUCCESS'){
													
								var visitMarketStr=resultArray[1];
								var clientCatStr=resultArray[2];								
								var clientProfileStr=resultArray[3];
								var clientProfileDistributorStr=resultArray[4];
								
								//------------------ Client Category
								var clientCatStrList=clientCatStr.split('<fd>')								
								var clientCatStrListLength=clientCatStrList.length									
								//var ob2 = $("#cp_Category");
								
								var cp_categoryOptions='';							
								for (var k=0; k < clientCatStrListLength; k++){
									var clientCatID = clientCatStrList[k]									
									if(clientCatID!=''){
										cp_categoryOptions+='<option value="'+clientCatID+'" >'+clientCatID+'</option>';
										}								
								}
								
								
								//--------
								$(".prof_market_class").html(visitMarketStr);
								$(".prof_distributor_class").html(clientProfileDistributorStr);		
								$(".prof_retailer_class").html(profile_client);						
								//$(".prof_retailer_class").html(profileClientId);
												
								//----------------						
												
								//localStorage.clientProfileStr=clientProfileStr								
								
								//$("#cp_marketnameid").val(visitMarketStr);
								
								var clientProfileList=clientProfileStr.split('<fd>')
								
								$("#cp_id").val(clientProfileList[0]);
								$("#cp_name").val(clientProfileList[1]);
								$("#cp_address").val(clientProfileList[2]);
								
								$("#cp_marketid").val(clientProfileList[3]);
								$("#cp_contact1").val(clientProfileList[4]);
								$("#cp_contact2").val(clientProfileList[5]);
								
								$("#cp_owner_name").val(clientProfileList[6]);
								$("#cp_nid").val(clientProfileList[7]);
								$("#cp_Passport").val(clientProfileList[8]);
								$("#cp_dob").val(clientProfileList[9]);
								$("#cp_dom").val(clientProfileList[10]);
								$("#cp_kidsinfo").val(clientProfileList[11]);
								$("#cp_hobby").val(clientProfileList[12]);
								//$("#cp_trade_license").val(clientProfileList[13]);
								var cp_trade_license=clientProfileList[13];
								
								$("#cp_trade_licence_no").val(clientProfileList[14]);
								//$("#cp_vat_registration").val(clientProfileList[15]);
								var cp_vat_registration=clientProfileList[15];
								
								$("#cp_vat_reg_no").val(clientProfileList[16]);
								
								$("#cp_manager_name").val(clientProfileList[17]);
								$("#cp_manager_cont_no").val(clientProfileList[18]);
								$("#cp_starting_year").val(clientProfileList[19]);
								//$("#cp_Category").val(clientProfileList[20]);
								var cp_Category=clientProfileList[20];
								
								//$("#cp_lsc_covered").val(clientProfileList[21]);
								var cp_lsc_covered=clientProfileList[21];
								
								$("#cp_monthly_sales_capacity").val(clientProfileList[22]);
								$("#cp_monthly_sales").val(clientProfileList[23]);
								//$("#cp_shop_rent_own").val(clientProfileList[24]);
								var cp_shop_rent_own=clientProfileList[24];
								
								$("#cp_warehouse_capacity").val(clientProfileList[25]);
								$("#cp_shop_size").val(clientProfileList[26]);
								$("#cp_shop_front_size").val(clientProfileList[27]);
								$("#cp_truck_number").val(clientProfileList[28]);
								$("#cp_barge_number").val(clientProfileList[29]);
								//$("#cp_status").val(clientProfileList[30]);
								var cp_status=clientProfileList[30];
								var client_photo_str=clientProfileList[31];
								
								//--------------
								var client_photo_strimage = document.getElementById('clientProfileImage');
    							
								//client_photo_strimage.src = 'http://e.businesssolutionapps.com/lscmreporting/static/client_pic/'+client_photo_str;
								client_photo_strimage.src = localStorage.photo_url+'client_pic/'+client_photo_str;
								
								//$("#clientProfileImage").src = client_photo_str;
								
								//------------------------------------------
								var cp_trade_license_ob=$("#cp_trade_license");
								cp_trade_license_ob.empty();
								var cp_trade_licenseOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_trade_license_ob.append(cp_trade_licenseOption);	
								cp_trade_license_ob.val(cp_trade_license);
								
								var cp_vat_registration_ob=$("#cp_vat_registration");
								cp_vat_registration_ob.empty();
								var cp_vat_registration_obOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_vat_registration_ob.append(cp_vat_registration_obOption);	
								cp_vat_registration_ob.val(cp_vat_registration);
								
								var cp_Category_ob=$("#cp_Category");
								cp_Category_ob.empty();
								var cp_Category_obOption=cp_categoryOptions;
								cp_Category_ob.append(cp_Category_obOption);	
								cp_Category_ob.val(cp_Category);
								
								var cp_lsc_covered_ob=$("#cp_lsc_covered");
								cp_lsc_covered_ob.empty();
								var cp_lsc_covered_obOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_lsc_covered_ob.append(cp_lsc_covered_obOption);	
								cp_lsc_covered_ob.val(cp_lsc_covered);
								
								var cp_shop_rent_own_ob=$("#cp_shop_rent_own");
								cp_shop_rent_own_ob.empty();
								var cp_shop_rent_own_obOption='<option value="" >Select</option><option value="Rented" >Rented</option><option value="Own" >Own</option>';
								cp_shop_rent_own_ob.append(cp_shop_rent_own_obOption);	
								cp_shop_rent_own_ob.val(cp_shop_rent_own);
								
								var cp_status_ob=$("#cp_status");
								cp_status_ob.empty();
								var cp_status_obOption='<option value="" >Select</option><option value="ACTIVE" >ACTIVE</option><option value="INACTIVE" >INACTIVE</option>';
								cp_status_ob.append(cp_status_obOption);	
								cp_status_ob.val(cp_status);						
								
								//--------------------------------
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();								
								$("#err_m_retailer_next_cp").text("");	
															
								var url = "#profile_update";
								$.mobile.navigate(url);
								
								//-----------------------								
								cp_trade_license_ob.selectmenu("refresh");
								cp_vat_registration_ob.selectmenu("refresh");
								cp_Category_ob.selectmenu("refresh");
								cp_lsc_covered_ob.selectmenu("refresh");
								cp_shop_rent_own_ob.selectmenu("refresh");
								cp_status_ob.selectmenu("refresh");
								
								//------------------------------------------
								
								
							}else{						
								$("#err_m_retailer_next_cp").html('Server Error');	
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();						
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_m_retailer_next_cp").html('Network Timeout. Please try again.');
					  $("#wait_image_profile_market_ret").hide();		
					  $("#btn_profile_market_ret").show();
				  }
			 });//end ajax	
			
		}
}



//--------------------------Client profile: profile button Next
var clientUpdateStr=''

function prifileInfoNext(){	
	$("#err_profile_next_cp").html('');
	$("#errorConfirmProfileUpdate").html('');
	
	$("#checkLocation").html('');
	$("#checkLocationProfileUpdate").html('');
	
	
	clientUpdateStr=''
	
	//var cp_marketnameid=$("#cp_marketnameid").val();
	
	var cp_id=$("#cp_id").val();
	var cp_name=$("#cp_name").val();
	var cp_name=$("#cp_name").val();
	cp_name=cp_name.replace('&',' and ');
	
	var cp_address=$("#cp_address").val();
	cp_address=cp_address.replace('&',' and ');
	
	var cp_marketid=$("#cp_marketid").val();
	var cp_contact1=$("#cp_contact1").val();
	var cp_contact2=$("#cp_contact2").val();
	
	var cp_owner_name=$("#cp_owner_name").val();
	var cp_nid=$("#cp_nid").val();
	var cp_Passport=$("#cp_Passport").val();
	var cp_dob=$("#cp_dob").val();
	var cp_dom=$("#cp_dom").val();
	var cp_kidsinfo=$("#cp_kidsinfo").val();
	var cp_hobby=$("#cp_hobby").val();
	var cp_trade_license=$("#cp_trade_license").val();
	var cp_trade_licence_no=$("#cp_trade_licence_no").val();
	var cp_vat_registration=$("#cp_vat_registration").val();
	var cp_vat_reg_no=$("#cp_vat_reg_no").val();
	
	var cp_manager_name=$("#cp_manager_name").val();
	var cp_manager_cont_no=$("#cp_manager_cont_no").val();
	var cp_starting_year=$("#cp_starting_year").val();
	var cp_Category=$("#cp_Category").val();
	var cp_lsc_covered=$("#cp_lsc_covered").val();
	var cp_monthly_sales_capacity=$("#cp_monthly_sales_capacity").val();
	var cp_monthly_sales=$("#cp_monthly_sales").val();
	var cp_shop_rent_own=$("#cp_shop_rent_own").val();
	var cp_warehouse_capacity=$("#cp_warehouse_capacity").val();
	var cp_shop_size=$("#cp_shop_size").val();
	var cp_shop_front_size=$("#cp_shop_front_size").val();
	var cp_truck_number=$("#cp_truck_number").val();
	var cp_barge_number=$("#cp_barge_number").val();
	var cp_status=$("#cp_status").val();
	
	//if(cp_id=='' || cp_name=='' || cp_marketid==''|| cp_contact1=='' || cp_owner_name=='' || cp_trade_license=='' || cp_vat_registration=='' || cp_Category=='' || cp_lsc_covered=='' || cp_shop_rent_own=='' || cp_status==''){
	if(cp_id=='' || cp_name=='' || cp_marketid==''|| cp_contact1=='' || cp_owner_name=='' || cp_shop_rent_own=='' ){
		$("#err_profile_next_cp").html('Important Value Required');
		
	}else{
//		
//		//------------------------ Contact 1 check
//		var contact1Flag=true;
//		try{
//		 	cp_contact1=eval(cp_contact1);
//			if (cp_contact1<1){
//				contact1Flag=false;
//				}
//		}catch(ex){
//			contact1Flag=false;
//			}
//		//----	condition	
//		if (contact1Flag==false){
//			$("#err_profile_next_cp").html('Invalid Contact 1');			
//		}else{
//			
//			//------------------------ Contact 2 check
//			var contact2Flag=true;
//			try{
//				if (cp_contact2!=''){
//					cp_contact2=eval(cp_contact2);
//					if (cp_contact2<1){
//						contact2Flag=false;
//						}
//				}
//			}catch(ex){
//				contact2Flag=false;
//				}
//			
//			//--------- condition
//			if(contact2Flag==false){
//				$("#err_profile_next_cp").html('Invalid Contact 2');	
//			}else{
//				//------------------------ nid check
//				var cp_nidFlag=true;
//				try{
//					if (cp_nid!=''){
//						cp_nid=eval(cp_nid);
//						if (cp_nid<0){
//							cp_nidFlag=false;
//							}
//					}
//				}catch(ex){
//					cp_nidFlag=false;
//					}
//				//--------- condition
//				if(cp_nidFlag==false){
//					$("#err_profile_next_cp").html('Invalid NID');	
//				}else{
//					//--------- DOB,DOM Check
//					var dateFlag=true;
//					if(cp_dob!=''){
//						var cp_dob_temp = new Date(cp_dob);		
//						if (cp_dob_temp=='Invalid Date'){		
//							$("#err_profile_next_cp").text("Invalid DOB");
//							dateFlag=false;
//						}
//					}
//					if (dateFlag==true){
//						if(cp_dom!=''){
//							var cp_dom_temp = new Date(cp_dom);		
//							if (cp_dom_temp=='Invalid Date'){		
//								$("#err_profile_next_cp").text("Invalid DOM");
//								dateFlag=false;
//							}						
//						
//						}
//					}
//					
//					if(dateFlag==true){
//						//------------------------ cp_manager_cont_no check
//						var cp_manager_cont_noFlag=true;
//						try{
//							if (cp_manager_cont_no!=''){
//								cp_manager_cont_no=eval(cp_manager_cont_no);
//								if (cp_manager_cont_no<1){
//									cp_manager_cont_noFlag=false;
//									}
//							}
//						}catch(ex){
//							cp_manager_cont_noFlag=false;
//							}
//						//--------- condition
//						if(cp_manager_cont_noFlag==false){
//							$("#err_profile_next_cp").html('Invalid Manager Cont. No');	
//						}else{
//							//------------------------ cp_starting_year check
//							var cp_starting_yearFlag=true;
//							try{
//								if (cp_starting_year!=''){
//									cp_starting_year=eval(cp_starting_year);
//									if (cp_starting_year<1000){
//										cp_starting_yearFlag=false;
//									}
//								}
//							}catch(ex){
//								cp_starting_yearFlag=false;
//								}
//							//--------- condition
//							if(cp_starting_yearFlag==false){
//								$("#err_profile_next_cp").html('Invalid Starting Year');	
//							}else{
//								
//								//------------------------ cp_monthly_sales_capacity check
//								var cp_monthly_sales_capacityFlag=true;
//								try{
//									if (cp_monthly_sales_capacity!=''){
//										cp_monthly_sales_capacity=eval(cp_monthly_sales_capacity);
//										if (cp_monthly_sales_capacity<0){
//											cp_monthly_sales_capacityFlag=false;
//										}
//									}
//								}catch(ex){
//									cp_monthly_sales_capacityFlag=false;
//									}
//								//--------- condition
//								if(cp_monthly_sales_capacityFlag==false){
//									$("#err_profile_next_cp").html('Invalid Monthly Sales Capacity');	
//								}else{
//									//------------------------ cp_monthly_sales check
//									var cp_monthly_salesFlag=true;
//									try{
//										if (cp_monthly_sales!=''){
//											cp_monthly_sales=eval(cp_monthly_sales);
//											if (cp_monthly_sales<0){
//												cp_monthly_salesFlag=false;
//											}
//										}
//									}catch(ex){
//										cp_monthly_salesFlag=false;
//										}
//									//--------- condition
//									if(cp_monthly_salesFlag==false){
//										$("#err_profile_next_cp").html('Invalid Monthly Sales');	
//									}else{
//										//------------------------ cp_warehouse_capacity check
//										var cp_warehouse_capacityFlag=true;
//										try{
//											if (cp_warehouse_capacity!=''){
//												cp_warehouse_capacity=eval(cp_warehouse_capacity);
//												if (cp_warehouse_capacity<0){
//													cp_warehouse_capacityFlag=false;
//												}
//											}
//										}catch(ex){
//											cp_warehouse_capacityFlag=false;
//											}
//										//--------- condition
//										if(cp_warehouse_capacityFlag==false){
//											$("#err_profile_next_cp").html('Invalid Warehouse Capacity');	
//										}else{
//											
//											//------------------------ cp_shop_size check
//											var cp_shop_sizeFlag=true;
//											try{
//												if (cp_shop_size!=''){
//													cp_shop_size=eval(cp_shop_size);
//													if (cp_shop_size<0){
//														cp_shop_sizeFlag=false;
//													}
//												}
//											}catch(ex){
//												cp_shop_sizeFlag=false;
//												}
//											//--------- condition
//											if(cp_shop_sizeFlag==false){
//												$("#err_profile_next_cp").html('Invalid Shop Size');	
//											}else{
//													//------------------------ cp_shop_front_size check
//													var cp_shop_front_sizeFlag=true;
//													try{
//														if (cp_shop_front_size!=''){
//															cp_shop_front_size=eval(cp_shop_front_size);
//															if (cp_shop_front_size<0){
//																cp_shop_front_sizeFlag=false;
//															}
//														}
//													}catch(ex){
//														cp_shop_front_sizeFlag=false;
//														}
//													//--------- condition
//													if(cp_shop_front_sizeFlag==false){
//														$("#err_profile_next_cp").html('Invalid Shop Front Size');	
//													}else{
//															//------------------------ cp_truck_number check
//															var cp_truck_numberFlag=true;
//															try{
//																if (cp_truck_number!=''){
//																	cp_truck_number=eval(cp_truck_number);
//																	if (cp_truck_number<0){
//																		cp_truck_numberFlag=false;
//																	}
//																}
//															}catch(ex){
//																cp_truck_numberFlag=false;
//																}
//															//--------- condition
//															if(cp_truck_numberFlag==false){
//																$("#err_profile_next_cp").html('Invalid Truck Number');	
//															}else{
//																//------------------------ cp_barge_number check
//																var cp_barge_numberFlag=true;
//																try{
//																	if (cp_barge_number!=''){
//																		cp_barge_number=eval(cp_barge_number);
//																		if (cp_barge_number<0){
//																			cp_barge_numberFlag=false;
//																		}
//																	}
//																}catch(ex){
//																	cp_barge_numberFlag=false;
//																	}
//																//--------- condition
//																if(cp_barge_numberFlag==false){
//																	$("#err_profile_next_cp").html('Invalid Barge Number');	
//																}else{
//																	//==============
																	//alert ('nnn')
																	clientUpdateStr=cp_id+'<fd>'+cp_name+'<fd>'+cp_address+'<fd>'+cp_marketid+'<fd>'+cp_contact1+'<fd>'+cp_contact2+'<fd>'+
																	cp_owner_name+'<fd>'+cp_nid+'<fd>'+cp_Passport+'<fd>'+cp_dob+'<fd>'+cp_dom+'<fd>'+cp_kidsinfo+'<fd>'+cp_hobby+'<fd>'+cp_trade_license+'<fd>'+cp_trade_licence_no+'<fd>'+cp_vat_registration+'<fd>'+cp_vat_reg_no+'<fd>'+
																	cp_manager_name+'<fd>'+cp_manager_cont_no+'<fd>'+cp_starting_year+'<fd>'+cp_Category+'<fd>'+cp_lsc_covered+'<fd>'+cp_monthly_sales_capacity+'<fd>'+cp_monthly_sales+'<fd>'+cp_shop_rent_own+'<fd>'+cp_warehouse_capacity+'<fd>'+cp_shop_size+'<fd>'+cp_shop_front_size+'<fd>'+cp_truck_number+'<fd>'+cp_barge_number+'<fd>'+cp_status
																	
																	var url = "#page_confirm_profile_update";
																	$.mobile.navigate(url);
																	//alert(clientUpdateStr);																	
																	
																	//===============
												//	}//Barge (Number)
//												}//Truck (Number)
//											 }//Shop Front Size
//											}//Shop Size
//										}//Warehouse Capacity
//									}//monthly sales
//							  }//monthly sales capacity
//							}// year check
//						}//manager contact							
//					 }//date				  
//				}	//		NID		
//			  }	//contact 2		
//			}	//contact 1
		}//must value
		
	}//function
	

//--------------------------Client profile: Profile Submit

function lscProfileSubmit(){
	$("#errorConfirmProfileUpdate").html('');	
	var lat=$("#lat_p").val();
	var long=$("#long_p").val();
	var client_id=$("#cp_id").val();
	
	var lscPhotoProfile=$("#lscPhotoProfile").val();
	
	var imageName=client_id+'.jpg'
	
	if (lat=='' || lat==0 || long=='' || long==0){
		$("#errorConfirmProfileUpdate").html('Location not Confirmed');		
	}else{
		
		if (clientUpdateStr==''){
			$("#errorConfirmProfileUpdate").html('Data not available');		
		}else{
			$("#btn_profile_update").hide();
			$("#wait_image_profile_update").show();		
			
			//$("#errorConfirmProfileUpdate").text(localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURI(clientUpdateStr)+'&lat='+lat+'&long='+long+'&profile_photo='+imageName+'&profile_photo_str=abc')
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURI(clientUpdateStr)+'&lat='+lat+'&long='+long+'&profile_photo='+imageName+'&profile_photo_str=abc',
				 success: function(result) {
						
						//alert(result);
						if (result==''){					
							$("#errorConfirmProfileUpdate").html('Sorry Network not available');
							$("#wait_image_profile_update").hide();		
							$("#btn_profile_update").show();
							
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								//$("#errorConfirmProfileUpdate").html(resultArray[1]);
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								
							}else if (resultArray[0]=='SUCCESS'){								
								//-----------
								
								clientUpdateStr=''
								$("#lat_p").val('');
								$("#long_p").val('');								
								$("#lscPhotoProfile").val('');
								//$("#myImageProfile").src='';								
    							document.getElementById('myImageProfile').src = '';
								
										
								$("#lat").val('');
								$("#long").val('');
								
								$(".prof_market_class").html('');
								$(".prof_distributor_class").html('');								
								$(".prof_retailer_class").html('');
								
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								
								//image upload function								
								//uploadPhotoProfile(lscPhotoProfile, imageName);
								
								//----
								
								var url = "#page_profile_update_success";	
								$.mobile.navigate(url);
								
							}else{						
								$("#errorConfirmProfileUpdate").html('Server Error');
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								}
						}
					  },
				  error: function(result) {			  
					 // $("#errorConfirmProfileUpdate").html('Network Timeout. Please try again.');
					  $("#wait_image_profile_update").hide();		
					  $("#btn_profile_update").show();
				  }
			 });//end ajax	
			
		}
	}//check location
  }


//----------------------------------Delivery:  Home page Delevery button
function delivery() {	
	//$("#wait_image_delivery_dealer").show();		
	//$("#btn_delivery_dealer").hide();
	$("#delivery_distributor_cmb_id").val('');	
	
	var delivery_distributor_cmb_list=localStorage.delivery_distributor_cmb_list;
	
	//---	
	/*var delivery_distributor_cmb_ob=$('#delivery_distributor_cmb_id');
	delivery_distributor_cmb_ob.empty()
	delivery_distributor_cmb_ob.append(delivery_distributor_cmb_list);
	delivery_distributor_cmb_ob[0].selectedIndex = 0;*/
	
	var delivery_distributor_cmb_ob=$('#delivery_distributor_cmb_id_lv');
	delivery_distributor_cmb_ob.empty()
	delivery_distributor_cmb_ob.append(delivery_distributor_cmb_list);
		
	//-------	
	var url = "#page_del_conf";
	$.mobile.navigate(url);
	//delivery_distributor_cmb_ob.selectmenu("refresh");
	delivery_distributor_cmb_ob.listview("refresh");
}


//----------------------------------- delivery: Distributor Next button
function distributorNextLV(lvalue) {
	$("#delivery_distributor_cmb_id").val(lvalue);	
	distributorNext();	
	}


function distributorNext() {	
	$("#err_distributor").text("");
	
	distributor_name=$("#delivery_distributor_cmb_id").val();
	deliveryDate=$("#delivery_date").val();
	
	var now = new Date();
	var month=now.getUTCMonth()+1;
	if (month<10){
		month="0"+month
		}
	var day=now.getUTCDate();
	if (day<10){
		day="0"+day
		}
		
	var year=now.getUTCFullYear();
	
	var currentDay = new Date(year+ "-" + month + "-" + day);	
	var delivery_date = new Date(deliveryDate);
	
	if (delivery_date=='Invalid Date'){		
		$("#err_distributor").text("Invalid date");
	}else{
		if (delivery_date>currentDay){
			$("#err_distributor").text("Future date not allowed");
		}else{	
			if(distributor_name=='' || distributor_name==0){
					$("#err_distributor").text("Distributor required");
				}else{
					$("#wait_image_delivery_dealer").show();		
					$("#btn_delivery_dealer").hide();
					
					
					var distributorNameId=distributor_name.split('-');
					var dealer_id=distributorNameId[1];
					
					//alert(localStorage.base_url+'getDistributorClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
					// ajax-------
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'getDistributorClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&dealer_id='+dealer_id,
						 success: function(result) {
								if (result==''){					
									$("#err_distributor").html('Sorry Network not available');
									$("#wait_image_delivery_dealer").hide();		
									$("#btn_delivery_dealer").show();
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#err_distributor").html(resultArray[1]);
										$("#wait_image_delivery_dealer").hide();		
										$("#btn_delivery_dealer").show();
									}else if (resultArray[0]=='SUCCESS'){
											
										var dis_client_string=resultArray[1];
										
										localStorage.delivery_date=deliveryDate;
										localStorage.dis_client_string=dis_client_string;
										localStorage.distributor_name=distributor_name;
										
										//----------------
										var distClientList = localStorage.dis_client_string.split('<rd>');
										var distClientListShowLength=distClientList.length	
										
										//var delivery_retailer_cmb='<select name="distributor_client" id="distributor_client_cmb_id" data-native-menu="false">'						
										var delivery_retailer_cmb='<option value="0" >Select Retailer</option>'
										
										for (var i=0; i < distClientListShowLength; i++){
											var distClientValueArray = distClientList[i].split('<fd>');
											var distClientID=distClientValueArray[0];
											var distClientName=distClientValueArray[1];											
											delivery_retailer_cmb+='<option value="'+distClientName+'-'+distClientID+'" >'+distClientName+'-'+distClientID+'</option>';			
										}	
										
			  							//delivery_retailer_cmb+='</select>'
										//localStorage.delivery_retailer_cmb_list=delivery_retailer_cmb
										
										$(".delivery_dt").html(deliveryDate);
										$(".distributor").html(distributor_name);
										
										//$("#del_product_list_tbl").html(localStorage.product_tbl_del_str);
										
										var delivery_retailer_cmb_ob=$('#delivery_retailer_cmb_id');
										delivery_retailer_cmb_ob.empty()
										delivery_retailer_cmb_ob.append(delivery_retailer_cmb);
										delivery_retailer_cmb_ob[0].selectedIndex = 0;
										
										//--------------
										var productList=localStorage.productListStr.split('<rd>');
										var productLength=productList.length;										
										for (var j=0; j < productLength; j++){				
											var deleveryItemArray = productList[j].split('<fd>');
											var productId=deleveryItemArray[0];											
											jQuery("#delivery_qty"+productId).val("");
										}
										
										//----------------	
										$("#err_distributor").text("");	
										$("#wait_image_delivery_dealer").hide();		
										$("#btn_delivery_dealer").show();
														
										var url = "#page_del_item";	
										$.mobile.navigate(url);
										//location.reload();
										delivery_retailer_cmb_ob.selectmenu("refresh");
										
										
									}else{						
										$("#err_distributor").html('Server Error');	
										$("#wait_image_delivery_dealer").hide();		
										$("#btn_delivery_dealer").show();						
										}
								}
							  },
						  error: function(result) {			  
							  	$("#err_distributor").html('Network Timeout. Please try again.');
							  	$("#wait_image_delivery_dealer").hide();		
								$("#btn_delivery_dealer").show();
						  }
					 });//end ajax	
			}
		}
	}
	
}

//---------------------------------------delivery: Add delivery Item
var dist_retailer_name="";
var del_supercrit="";
var del_powercrit="";
var clientDelArray=[]

function addDeliveryItem(){
	$("#err_d_retailer").text("");
	
	dist_retailer_name=$("#delivery_retailer_cmb_id").val();
	clientNameIdList=dist_retailer_name.split('-')
	clientId='';
	clientName='';
	if (clientNameIdList.length==2){
		clientName=clientNameIdList[0]
		clientId=clientNameIdList[1]
		}
	
	if(dist_retailer_name=='' || dist_retailer_name==0){
			$("#err_d_retailer").text("Retailer required");
	}else{
		var productList2=localStorage.productListStr.split('<rd>');
		var productLength2=productList2.length;
		
		var productDeleveryStrShow='';	
		var validFlag=false
		for (var i=0; i < productLength2; i++){
			var productArray = productList2[i].split('<fd>');
			var product_id=productArray[0];	
			var product_name=productArray[1];
						
			var pid=$("#delivery_id"+product_id).val();
			var pname=$("#delivery_name"+product_id).val();
			var pQty=$("#delivery_qty"+product_id).val();	
			
			var pqty=0
			try{
				pqty=eval(pQty)
			}catch(ex){
				pqty=0
				validFlag=false
			}
			
			if (pqty!='' && pqty > 0){
				validFlag=true
				if (productDeleveryStrShow==''){
					productDeleveryStrShow=pid+'<fd>'+pqty+'<fd>'+pname					
				}else{
					productDeleveryStrShow+='<rd>'+pid+'<fd>'+pqty+'<fd>'+pname					
					}			
			}			
		}
		
		if (validFlag==true){
			dictList={'clientId':clientId,'clientName':clientName,'clientData':productDeleveryStrShow}
			clientDelArray.push(dictList)
			$("#err_d_retailer").text( clientName+'-'+clientId+", Added successfully.");
			
			}else{
				$("#err_d_retailer").text("Valid Qty required");
			}
					
		}
	}

//--------------------------------------------delivery: Preview delevery Item
function previewDelivery(){
	$("#err_d_retailer").text("");
	
	arrayLength=clientDelArray.length
	
	if(arrayLength<=0){
		$("#err_d_retailer").text("Data not available");		
	}else{
		
		var prev_del_tbl='';	
		var delivery_pro_list=[];
		var deleveryItemArray =[];
		var item_qty='';
		var item_name='';
		var i=0;
		var j=0;
		
		$('#tbl_delivery_item_prev').empty();				
		
		
		for (i=0; i < arrayLength; i++){		
			clientDictData=clientDelArray[i]
			
			clientID=clientDictData['clientId']
			clientName=clientDictData['clientName']
			clientData=clientDictData['clientData']
			
			//alert(clientID+','+clientData);
				
			prev_del_tbl="<table style='width:100%' border='0' cellpadding='0' cellspacing='0'><tr><td width='99%' colspan='2' style='background-color:#92C9C9; color:#F2F9F9; text-shadow:none;'><b>"+clientName+"-"+clientID+"</b><input type='hidden' id='clientId' value='"+clientId+"'></td><td width='1%' style='background-color:#92C9C9; text-align:right; color:#F2F9F9;'><a id='btn_del_x"+i+"' onclick=delete_delivery('"+i+"');>X</a></td></tr>";
			
			delivery_pro_list=clientData.split('<rd>');
			for (j=0; j < delivery_pro_list.length; j++){
				deleveryItemArray = delivery_pro_list[j].split('<fd>');
				
				item_qty=deleveryItemArray[1];
				item_name=deleveryItemArray[2];
				
				prev_del_tbl+="<tr><td width='20%'>"+item_qty+"</td><td colspan='2' width='80%'>"+item_name+"</td></tr>";
				
				}
				
			prev_del_tbl+="</table>";
			
			//alert(prev_del_tbl);
			
			$("#tbl_delivery_item_prev").append(prev_del_tbl).trigger('create');			
				
			}
			
			var url = "#page_del_preview";	
			$.mobile.navigate(url);
	  }
	}

//--------------------------------------------delivery: Delete delevery Item
function delete_delivery(rowid){
		//alert(rowid);
		clientDelArray.splice(rowid,1);
		$("#btn_del_x"+rowid).parent().parent().parent().remove();
	}

//--------------------------------------------delivery: Submit delevery data
function deliverySubmit(){	
	$("#error_del_submit").text("");
		
	var lat=$("#lat").val();
	var long=$("#long").val();
	
	arrayLength=clientDelArray.length
	if(arrayLength<=0){
		$("#error_del_submit").text("Data not available");		
	}else{		
		del_data=''
		for (i=0; i < arrayLength; i++){		
			clientDictData=clientDelArray[i]
			
			clientID=clientDictData['clientId']
			clientData=clientDictData['clientData']
			
			itemQtyStr=''
			delivery_pro_list=clientData.split('<rd>');
			for (j=0; j < delivery_pro_list.length; j++){
				deleveryItemArray = delivery_pro_list[j].split('<fd>');
				item_id=deleveryItemArray[0];
				item_qty=deleveryItemArray[1];
				
				if (itemQtyStr==''){
					itemQtyStr=item_id+'<fd>'+item_qty
				}else{
					itemQtyStr+='<fdfd>'+item_id+'<fd>'+item_qty						
				}
			   }
			
			if (del_data==''){
					del_data=clientID+'<rd>'+itemQtyStr
			}else{
				del_data+='<rdrd>'+clientID+'<rd>'+itemQtyStr		
			}		
		}
		
		if(del_data==''){		
			$("#error_del_submit").text("Data required");
		}else{
			var distributorNameId=localStorage.distributor_name.split('-');
			var dealer_id=distributorNameId[1];			
			var deliveryDate=localStorage.delivery_date;
			
			if(dealer_id=='' || deliveryDate==''){
				$("#error_del_submit").text("Distributor/Delivery Date not available");
			}else{
				
				$("#wait_image_delivery_submit").show();		
				$("#btn_delivery_submit").hide();
				
				//alert(localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&lat='+lat+'&long='+long)
				// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'deliverySubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&depot_id='+dealer_id+'&delivery_date='+deliveryDate+'&delivery_data='+del_data+'&lat='+lat+'&long='+long,
					 success: function(result) {
							
							//alert(result);
							if (result==''){					
								$("#error_del_submit").html('Sorry Network not available');								
								$("#wait_image_delivery_submit").hide();		
								$("#btn_delivery_submit").show();
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_del_submit").html(resultArray[1]);
									$("#wait_image_delivery_submit").hide();		
									$("#btn_delivery_submit").show();
									
								}else if (resultArray[0]=='SUCCESS'){
									
									//-----------
									clientDelArray=[]
									localStorage.distributor_name=''	
									localStorage.delivery_date=''
									localStorage.dis_client_string=''		
									//-------------
									$("#error_del_submit").html('');
									$("#wait_image_delivery_submit").hide();		
									$("#btn_delivery_submit").show();
								
									var url = "#page_delivery_success";	
									$.mobile.navigate(url);
									//location.reload();
									
								}else{						
									$("#error_del_submit").html('Server Error');		
									$("#wait_image_delivery_submit").hide();		
									$("#btn_delivery_submit").show();					
									}
							}
						  },
					  error: function(result) {			  
						  	$("#error_del_submit").html('Network Timeout. Please try again.');
						  	$("#wait_image_delivery_submit").hide();		
							$("#btn_delivery_submit").show();
					  }
				 });//end ajax	
						
			}
		}
	
	}
}


//----------------------------------Visit Plan Page: Visit Plan button click
var plan_retailer_name="";
var planRetailerArray=[]

function addVisitPlanMarketList() {	
	//$("#btn_visit_plan_market").hide();
	//$("#wait_image_visit_plan_market").show();	
	$("#plan_date").val('');
	$("#visit_market_cmb_id").val('');
	
	var visit_market_cmb_list=localStorage.visit_plan_marketlist_combo;
	
	//---
	/*var visit_market_cmb_id_ob=$('#visit_market_cmb_id');
	visit_market_cmb_id_ob.empty()
	visit_market_cmb_id_ob.append(visit_market_cmb_list);
	visit_market_cmb_id_ob[0].selectedIndex = 0;*/
	
	var visit_market_cmb_id_ob=$('#visit_market_cmb_id_lv');
	visit_market_cmb_id_ob.empty()
	visit_market_cmb_id_ob.append(visit_market_cmb_list);
	
	//-------	
	var url = "#page_market_visit_plan";
	$.mobile.navigate(url);
	//location.reload();
	//visit_market_cmb_id_ob.selectmenu("refresh");
	visit_market_cmb_id_ob.listview("refresh");
	
}

//----------------------------------Visit Plan: get client by market
function visitPlanMarketNextLV(lvalue) {
	$("#visit_market_cmb_id").val(lvalue);
	//alert(lvalue);
	visitPlanMarketNext();	
	}

function visitPlanMarketNext() {
	$("#err_p_market").text("");
	
	planMarket=$("#visit_market_cmb_id").val();
	planDate=$("#plan_date").val();	
	
	var now = new Date();
	var month=now.getUTCMonth()+1;
	if (month<10){
		month="0"+month
		}
	var day=now.getUTCDate();
	if (day<10){
		day="0"+day
		}
	
	var year=now.getUTCFullYear();
	
	var currentDay = new Date(year+ "-" + month + "-" + day);	
	var visit_plan_d = new Date(planDate);
	
	if (visit_plan_d=='Invalid Date'){		
		$("#err_p_market").text("Invalid date");
	}else{
		if (visit_plan_d<currentDay){
			$("#err_p_market").text("Plan date can not be previous date");
		}else{
			if(planMarket=='' || planMarket==0){
					$("#err_p_market").text("Market required");
				}else{		
					$("#btn_visit_plan_market").hide();
					$("#wait_image_visit_plan_market").show();		
					
					
					var marketNameId=planMarket.split('-');
					var market_Id=marketNameId[1];
					
					//alert(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
					// ajax-------
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id,
						 success: function(result){								
								if (result==''){					
									$("#err_p_market").text('Sorry Network not available');
									$("#wait_image_visit_plan_market").hide();		
									$("#btn_visit_plan_market").show();
								}else{			
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#err_p_market").html(resultArray[1]);
										$("#wait_image_visit_plan_market").hide();		
										$("#btn_visit_plan_market").show();
									}else if (resultArray[0]=='SUCCESS'){
										var plan_client_string=resultArray[1];
										
																				
										localStorage.plan_market=planMarket;
										localStorage.plan_date=planDate;
										//localStorage.m_plan_client_string=plan_client_string
										
										//----------------------------------- Retailer Combo										
										var mPlanClientList = plan_client_string.split('<rd>');
										var mPlanClientListShowLength=mPlanClientList.length	
										
										//var visit_plan_client_cmb_list='<select name="visit_plan_client" id="visit_plan_client_cmb_id" data-native-menu="false">'							
										var visit_plan_client_cmb_list='<option value="0" >Select retailer</option>'
										for (var i=0; i < mPlanClientListShowLength; i++){
											var mPlanClientValueArray = mPlanClientList[i].split('<fd>');
											var mPlanClientID=mPlanClientValueArray[0];
											var mPlanClientName=mPlanClientValueArray[1];
											if (mPlanClientID!=''){
												visit_plan_client_cmb_list+='<option value="'+mPlanClientName+'-'+mPlanClientID+'" >'+mPlanClientName+'-'+mPlanClientID+'</option>';
												}											
										}
										//visit_plan_client_cmb_list+='</select>'
										
										//localStorage.visit_plan_client_cmb_list=visit_plan_client_cmb_list
										
										var visit_plan_client_cmb_id_ob=$('#visit_plan_client_cmb_id');
										visit_plan_client_cmb_id_ob.empty()										
										visit_plan_client_cmb_id_ob.append(visit_plan_client_cmb_list);
										
										visit_plan_client_cmb_id_ob[0].selectedIndex = 0;
										
										$(".visit_plan_date").html(planDate);
										$(".plan_market").html(planMarket);	
										
										$("#tbl_visit_plan_rev").empty();
										$("#tbl_visit_plan_rev").append('<tr ><td colspan="2" style="background-color:#92C9C9; color:#F2F9F9; text-shadow:none;"><b>Retailer Name</b></td></tr>');
										
										planRetailerArray=[]
										
										//-----------------------------------										
										$("#err_p_market").text("");
										$("#wait_image_visit_plan_market").hide();		
										$("#btn_visit_plan_market").show();
									
										var url = "#page_plan";			
										$.mobile.navigate(url);
										//location.reload();
										visit_plan_client_cmb_id_ob.selectmenu("refresh");
										
															
									}else{						
										$("#err_p_market").html('Server Error');			
										$("#wait_image_visit_plan_market").hide();		
										$("#btn_visit_plan_market").show();				
										}
								}
							  },
						  error: function(result) {			  
							  $("#err_p_market").html('Network Timeout. Please try again.');
							  $("#wait_image_visit_plan_market").hide();		
							  $("#btn_visit_plan_market").show();
						  }
					 });//end ajax	
					
				}			
		}
	}
}


//----------------------------------Visit Plan: Add Retailer

function addVisitPlanRetailer(){
	$("#err_plan_visit").html('');
	plan_retailer_name=$("#visit_plan_client_cmb_id").val();
	
	if(plan_retailer_name=='' || plan_retailer_name==0){
		$("#err_plan_visit").html('Retailer required');		
	}else{
		var plan_retailer_NameId=plan_retailer_name.split('-');
		var retailer_Id=plan_retailer_NameId[1];
		var indexVal=planRetailerArray.indexOf(retailer_Id);
		
		if(indexVal<0){
			planRetailerArray.push(retailer_Id)			
			$("#tbl_visit_plan_rev").append("<tr id='planRetailer"+retailer_Id+"'><td class='retailer_name' width='90%'>"+plan_retailer_name+"</td><td width='10%' style='text-align:center'><a onClick=deletePlanRetailer('"+retailer_Id+"');> X </a></td></tr>");
		}else{
			$("#err_plan_visit").html('already exist');				
			}		
	 }	
	}

//----------------------------------Visit Plan: Delete Retailer
function deletePlanRetailer(retid){		
		var index=planRetailerArray.indexOf(retid)		
		planRetailerArray.splice(index,1);
		
		$("#planRetailer"+retid).remove();
				
	}

//----------------------------------Visit Plan: Delete Retailer
function visitPlanSubmit(){
	$("#err_plan_visit").html('');
	plan_ret_list_str=''
	
	arrayLength=planRetailerArray.length
	
	if(arrayLength<=0){
		$("#err_plan_visit").text("Data not available");		
	}else{
		for (i=0; i < arrayLength; i++){		
			planRetailerId=planRetailerArray[i]
			
			if(plan_ret_list_str==""){
			  plan_ret_list_str=planRetailerId
			 }else{
				  plan_ret_list_str=plan_ret_list_str+'<fd>'+planRetailerId
			 }
		}
		//------------------
		$("#btn_visit_plan_submit").hide();
		$("#wait_image_visit_plan_submit").show();		
		
				
		var marketNameId=localStorage.plan_market.split('-');
		var market_Id=marketNameId[1];
		planDate=localStorage.plan_date;
		
		//alert(localStorage.base_url+'setScheduleClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
		// ajax-------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'setScheduleClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&plan_date='+planDate+'&client_list='+plan_ret_list_str,
			 success: function(result){								
					if (result==''){					
						$("#err_plan_visit").html('Sorry Network not available');
						$("#wait_image_visit_plan_submit").hide();		
						$("#btn_visit_plan_submit").show();
					}else{			
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_plan_visit").html(resultArray[1]);
							$("#wait_image_visit_plan_submit").hide();		
							$("#btn_visit_plan_submit").show();
						}else if (resultArray[0]=='SUCCESS'){
							var plan_client_string=resultArray[1];
							
							localStorage.plan_market='';
							localStorage.plan_date=''
							plan_ret_list_str=''
							planRetailerArray=[]
							
							$("#err_plan_visit").text("");
							$("#wait_image_visit_plan_submit").hide();		
							$("#btn_visit_plan_submit").show();
						
							var url = "#page_visit_plan_success";			
							$.mobile.navigate(url);
							
						}else{						
							$("#err_plan_visit").html('Server Error');	
							$("#wait_image_visit_plan_submit").hide();		
							$("#btn_visit_plan_submit").show();						
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_plan_visit").html('Network Timeout. Please try again.');
				  $("#wait_image_visit_plan_submit").hide();		
				  $("#btn_visit_plan_submit").show();
			  }
		 });//end ajax	
		
		//--------------------
	  }
	
	}


//-------------------------- Visit Report: Show
function getVisitReportPage(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").hide();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	var url = "#page_visit_rpt";			
	$.mobile.navigate(url);
}


function visitReport(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").show();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	visit_client=localStorage.visit_client	
	clientId=visit_client.split('-')[1]
	
	//alert(localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId)
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId,
		 success: function(result) {
				
				//alert(result);
				if (result==''){					
					$("#err_visit_rpt").html('Sorry Network not available');
					$("#wait_image_visit_report").hide();
	
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#err_visit_rpt").html(resultArray[1]);
						$("#wait_image_visit_report").hide();
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						$("#wait_image_visit_report").hide();
						
						var campaignData=resultArray[1]
						var stockData=resultArray[2]
						var marketInfoStockList=resultArray[3]
						var deliverySalesList=eval(resultArray[4])
						
						
						//------------------------
						var salesStrData='<tr ><td colspan="2" ><b>LSC Sales:</b></td></tr>'
                		salesStrData+='<tr style="font-weight:bold; text-shadow:none; color:#408080;" ><td >Month</td><td >Qty</td></tr>'
                		
						var deliverySalesListLength=deliverySalesList.length;						
						for (i=0; i < deliverySalesListLength; i++){
							var salesDictData=deliverySalesList[i];
							
							var month=salesDictData['Month']
							var qty=salesDictData['Qty']
							
							salesStrData+='<tr style="font-size:11px;"><td >'+month+'</td><td >'+qty+'</td></tr>'
							
							//alert(month+','+qty);
							}
												
						$("#tbl_visit_rpt_show_campaign").append(campaignData).trigger('create');						
						$("#tbl_visit_rpt_show_stock").append(stockData).trigger('create');
						$("#retailerStock").val(marketInfoStockList);
						
						$("#tbl_visit_rpt_show_sales").append(salesStrData).trigger('create');
						
						loadChart();
						//----
												
					}else{						
						$("#err_visit_rpt").html('Server Error');
						$("#wait_image_visit_report").hide();
						}
				}
			  },
		  error: function(result) {			  
			  $("#err_visit_rpt").html('Network Timeout. Please try again.');
			  $("#wait_image_visit_report").hide();
		  }
	 });//end ajax	
	
  }

//-------------------------------------

function getComplain() {	
	$("#error_complain").text("");
	
	var complain_type_string=localStorage.complain_type_string
	var complain_from_string=localStorage.complain_from_string
	
	//-----------------------------------	
	/*var complain_from_List = complain_from_string.split('<rd>');
	var complain_from_ListLength=complain_from_List.length	
	
	var complain_fromList='<option value="0" >Select From</option>'
	for (var i=0; i < complain_from_ListLength; i++){
		var complain_from= complain_from_List[i];		
		if(complain_from!=''){
			complain_fromList+='<option value="'+complain_from+'" >'+complain_from+'</option>';
			}								
	}
	
	var complain_from_id_ob=$('#complain_from_id');
	complain_from_id_ob.empty()
	complain_from_id_ob.append(complain_fromList);
	complain_from_id_ob[0].selectedIndex = 0;*/
	
	//-----------------------------------	
	var complain_type_List = complain_type_string.split('<rd>');
	var complain_type_ListLength=complain_type_List.length	
	
	var complainTypeList='<option value="0" > Select Type</option>'
	for (var j=0; j < complain_type_ListLength; j++){
		var complain_type= complain_type_List[j];		
		if(complain_type!=''){
			complainTypeList+='<option value="'+complain_type+'" >'+complain_type+'</option>';
			}
	}
	
	var complain_type_id_ob=$('#complain_type_id');
	complain_type_id_ob.empty()
	complain_type_id_ob.append(complainTypeList);
	complain_type_id_ob[0].selectedIndex = 0;
	
	$("#complain_ref").val('');
	$("#complain_details").val('');
	
	//-----------------------------------	
	var url = "#page_complain_new";	
	$.mobile.navigate(url);
	
	complain_from_id_ob.selectmenu("refresh");
	complain_type_id_ob.selectmenu("refresh");			
}

//=====
function complainSubmit(){
	$("#error_complain").html('');
	
	//var complain_from=$("#complain_from_id").val();
	var complain_ref=$("#complain_ref").val();
	var complain_type=$("#complain_type_id").val();
	var complain_details=$("#complain_details").val();
	var complain_from=' ';
	//if(complain_from=='' || complain_from==0){
//		$("#error_complain").html('Complain From Required');
//	}else{
	
		if(complain_ref=='' || complain_ref==0){
			$("#error_complain").html('Reference Required');	
		}else{
			if(complain_type=='' || complain_type==0){
				$("#error_complain").html('Complain Type Required');	
			}else{
				
				$("#btn_complain_submit").hide();
				$("#wait_image_complain_submit").show();	
			
				//$("#error_complain").html(localStorage.base_url+'complainSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&complain_from='+complain_from+'&complain_ref='+complain_ref+'&complain_type='+complain_type+'&complain_details='+complain_details)
				
				// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'complainSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&complain_from='+complain_from+'&complain_ref='+complain_ref+'&complain_type='+complain_type+'&complain_details='+complain_details,
					 success: function(result) {
							
							if (result==''){					
								$("#err_visit_rpt").html('Sorry Network not available');
								$("#wait_image_complain_submit").hide();
								$("#btn_complain_submit").show();
								
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_complain").html(resultArray[1]);
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									
								}else if (resultArray[0]=='SUCCESS'){								
									//-----------
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									
									var sl=resultArray[1]
									
									var url = "#page_complain_success";	
									$.mobile.navigate(url);
									
									//----
												
								}else{						
									$("#error_complain").html('Server Error');
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_complain").html('Network Timeout. Please try again.');
						  $("#wait_image_complain_submit").hide();
						  $("#btn_complain_submit").show();
					  }
				 });//end ajax	
			}
		}
//	}
  }

//----
function showComplain(){
	$("#error_complain_page").html('');
	/*$("#btn_complain_submit").hide();
	$("#wait_image_complain_submit").show();*/	
	
	$("#tbl_show_complain").empty();
	
	//alert(localStorage.base_url+'showComplain?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showComplain?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
		 success: function(result) {
				
				if (result==''){					
					$("#error_complain_page").html('Sorry Network not available');
					
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_complain_page").html(resultArray[1]);
												
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						
						var resData=resultArray[1]
						
						
						$("#tbl_show_complain").append(resData).trigger('create');
						
						
						var url = "#page_complain_show";	
						$.mobile.navigate(url);
						
						//----
									
					}else{						
						$("#error_complain_page").html('Server Error');						
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_complain_page").html('Network Timeout. Please try again.');
		  }
	 });//end ajax
  }


//============= Show Task
function showTask(){
	$("#error_task_page").html('');
	
	$("#wait_image_task_submit").hide();
	
	$("#tbl_show_task").empty();
	
	//alert(localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
		 success: function(result) {
				
				if (result==''){					
					$("#error_task_page").html('Sorry Network not available');
					
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_task_page").html(resultArray[1]);
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						
						var resData=resultArray[1]
						
						$("#tbl_show_task").append(resData).trigger('create');
						
						var url = "#page_task_show";	
						$.mobile.navigate(url);
						
						//----		
					}else{						
						$("#error_task_page").html('Server Error');						
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_task_page").html('Network Timeout. Please try again.');
		  }
	 });//end ajax
  }

//============= Show Task
function updateTask(rowid){
	$("#error_task_list").html('');
	
	$("#btn_task_update"+rowid).hide();
	$("#wait_image_task_submit").show();
	
	$("#tbl_show_task").empty();
	
	//alert(localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&action=Update&rowid='+rowid,
		 success: function(result) {
				
				if (result==''){					
					$("#error_task_list").html('Sorry Network not available');
					$("#btn_task_update"+rowid).show();
					$("#wait_image_task_submit").hide();
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_task_list").html(resultArray[1]);
						$("#btn_task_update"+rowid).show();
						$("#wait_image_task_submit").hide();
					
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						var resData=resultArray[1]
						
						$("#wait_image_task_submit").hide();
						
						$("#tbl_show_task").append(resData).trigger('create');
						
						var url = "#page_task_show";	
						$.mobile.navigate(url);
						
						//----		
					}else{						
						$("#error_task_list").html('Server Error');
						$("#btn_task_update"+rowid).show();
						$("#wait_image_task_submit").hide();				
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_task_list").html('Network Timeout. Please try again.');
			  $("#btn_task_update"+rowid).show();
			  $("#wait_image_task_submit").hide();
		  }
	 });//end ajax
  }
  

//------------------------------ Report part: Show
function getRegionReport() {
	$("#tbl_region_show_report").empty();
	
	var region_combo_list=localStorage.region_string;
	
	//-------
	var rpt_region_cmb_id_ob=$('#rpt_region_cmb_id');
	rpt_region_cmb_id_ob.empty()
	rpt_region_cmb_id_ob.append(region_combo_list);
	rpt_region_cmb_id_ob[0].selectedIndex = 0;
	
	//-------	
	var url = "#page_report";
	$.mobile.navigate(url);
	rpt_region_cmb_id_ob.selectmenu("refresh");
}

//============= Show region Order
function regionOrderReport(){
	$("#err_region_rpt").html('');
	$("#wait_image_region_report").show();	
	$("#tbl_region_show_report").empty();
	
	var region=$("#rpt_region_cmb_id").val();
	var month=$("#rpt_region_month_cmb_id").val();
	
	if (region=='0'){
		$("#err_region_rpt").html('Region Required');
		$("#wait_image_region_report").hide();
		
	}else if(month==''){
		$("#err_region_rpt").html('Month Required');
		$("#wait_image_region_report").hide();
		
	}else{
		
		var regionId=region.split('-')[1]
		
		//alert(localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month)
		
		// ajax -------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'regionOrderReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month,
			 success: function(result) {
					
					if (result==''){					
						$("#err_region_rpt").html('Sorry Network not available');
						$("#wait_image_region_report").hide();
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_region_rpt").html(resultArray[1]);
							$("#wait_image_region_report").hide();
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------						
							var resData=resultArray[1]
							
							$("#wait_image_region_report").hide();
							
							$("#tbl_region_show_report").append(resData).trigger('create');
														
							//----		
						}else{						
							$("#err_region_rpt").html('Server Error');	
							$("#wait_image_region_report").hide();					
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_region_rpt").html('Network Timeout. Please try again.');
				  $("#wait_image_region_report").hide();
				  
			  }
		 });//end ajax
	 
	}
  }


//============= Show region Sales Confirmation
function regionSalesConfReport(){
	$("#err_region_rpt").html('');
	$("#wait_image_region_report").show();	
	$("#tbl_region_show_report").empty();
	
	var region=$("#rpt_region_cmb_id").val();
	var month=$("#rpt_region_month_cmb_id").val();
	
	if (region=='0'){
		$("#err_region_rpt").html('Region Required');
		$("#wait_image_region_report").hide();
		
	}else if(month==''){
		$("#err_region_rpt").html('Month Required');
		$("#wait_image_region_report").hide();
		
	}else{
		
		var regionId=region.split('-')[1]
		
		//alert(localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month)
		
		// ajax -------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'regionSalesConfReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month,
			 success: function(result) {
					
					if (result==''){					
						$("#err_region_rpt").html('Sorry Network not available');
						$("#wait_image_region_report").hide();
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_region_rpt").html(resultArray[1]);
							$("#wait_image_region_report").hide();
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------						
							var resData=resultArray[1]
							
							$("#wait_image_region_report").hide();
							
							$("#tbl_region_show_report").append(resData).trigger('create');
														
							//----		
						}else{						
							$("#err_region_rpt").html('Server Error');	
							$("#wait_image_region_report").hide();					
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_region_rpt").html('Network Timeout. Please try again.');
				  $("#wait_image_region_report").hide();
				  
			  }
		 });//end ajax
	 
	}
  }



//============= Show region Visit Summary
function regionVisitSummaryReport(){
	$("#err_region_rpt").html('');
	$("#wait_image_region_report").show();	
	$("#tbl_region_show_report").empty();
	
	var region=$("#rpt_region_cmb_id").val();
	var month=$("#rpt_region_month_cmb_id").val();
	
	if (region=='0'){
		$("#err_region_rpt").html('Region Required');
		$("#wait_image_region_report").hide();
		
	}else if(month==''){
		$("#err_region_rpt").html('Month Required');
		$("#wait_image_region_report").hide();
		
	}else{
		
		var regionId=region.split('-')[1]
		
		//alert(localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month)
		
		// ajax -------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'regionVisitSummaryReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month,
			 success: function(result) {
					
					if (result==''){					
						$("#err_region_rpt").html('Sorry Network not available');
						$("#wait_image_region_report").hide();
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_region_rpt").html(resultArray[1]);
							$("#wait_image_region_report").hide();
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------						
							var resData=resultArray[1]
							
							$("#wait_image_region_report").hide();
							
							$("#tbl_region_show_report").append(resData).trigger('create');
							
							//----		
						}else{						
							$("#err_region_rpt").html('Server Error');	
							$("#wait_image_region_report").hide();					
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_region_rpt").html('Network Timeout. Please try again.');
				  $("#wait_image_region_report").hide();
				  
			  }
		 });//end ajax
	}
  }



//============= Show region Target Vs Achievement
function regionTarVsAchReport(){
	$("#err_region_rpt").html('');
	$("#wait_image_region_report").show();	
	$("#tbl_region_show_report").empty();
	
	var region=$("#rpt_region_cmb_id").val();
	var month=$("#rpt_region_month_cmb_id").val();
	
	if (region=='0'){
		$("#err_region_rpt").html('Region Required');
		$("#wait_image_region_report").hide();
		
	}else if(month==''){
		$("#err_region_rpt").html('Month Required');
		$("#wait_image_region_report").hide();
		
	}else{
		
		var regionId=region.split('-')[1]
		
		//alert(localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month)
		
		// ajax -------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'regionTarVsAchReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month,
			 success: function(result) {
					
					if (result==''){					
						$("#err_region_rpt").html('Sorry Network not available');
						$("#wait_image_region_report").hide();
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_region_rpt").html(resultArray[1]);
							$("#wait_image_region_report").hide();
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------						
							var resData=resultArray[1]
							
							$("#wait_image_region_report").hide();
							
							$("#tbl_region_show_report").append(resData).trigger('create');
							
							//----		
						}else{						
							$("#err_region_rpt").html('Server Error');	
							$("#wait_image_region_report").hide();					
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_region_rpt").html('Network Timeout. Please try again.');
				  $("#wait_image_region_report").hide();
				  
			  }
		 });//end ajax
	}
  }


//============= Show Today summary region
function regionTodaySummReport(){
	$("#err_region_rpt").html('');
	$("#wait_image_region_report").show();	
	$("#tbl_region_show_report").empty();
		
	var region=$("#rpt_region_cmb_id").val();
	var month=$("#rpt_region_month_cmb_id").val();
	
	if (region=='0'){
		$("#err_region_rpt").html('Region Required');
		$("#wait_image_region_report").hide();
		
	}else if(month==''){
		$("#err_region_rpt").html('Month Required');
		$("#wait_image_region_report").hide();
		
	}else{
		
		var regionId=region.split('-')[1]
		
		//alert(localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month)
		
		// ajax-------
		$.ajax({
			 type: 'POST',
			 url: localStorage.base_url+'regionTodaySummary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&regionId='+regionId+'&month='+month,
			 success: function(result) {
					
					if (result==''){					
						$("#err_region_rpt").html('Sorry Network not available');
						$("#wait_image_region_report").hide();
					}else{					
						var resultArray = result.split('<SYNCDATA>');			
						if (resultArray[0]=='FAILED'){						
							$("#err_region_rpt").html(resultArray[1]);
							$("#wait_image_region_report").hide();
						}else if (resultArray[0]=='SUCCESS'){								
							//-----------						
							var resData=resultArray[1]
							
							$("#wait_image_region_report").hide();
							
							$("#tbl_region_show_report").append(resData).trigger('create');
														
							//----		
						}else{						
							$("#err_region_rpt").html('Server Error');	
							$("#wait_image_region_report").hide();					
							}
					}
				  },
			  error: function(result) {			  
				  $("#err_region_rpt").html('Network Timeout. Please try again.');
				  $("#wait_image_region_report").hide();
				  
			  }
		 });//end ajax
	 
	}
  }













//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}

// ----------------Camera------------

//Image
function getImage() {
	navigator.camera.getPicture(onSuccessV, onFailV, { quality: 10,
		destinationType: Camera.DestinationType.FILE_URI });
}
function onSuccessV(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
	imagePath = imageURI;
	$("#lscPhoto").val(imagePath);
}
function onFailV(message) {
	imagePath="";
    alert('Failed because: ' + message);
}

//image Profile
function getImageProfile() {	
	navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		destinationType: Camera.DestinationType.FILE_URI });
}
function onSuccessProfile(imageURI) {
    var image = document.getElementById('myImageProfile');
    image.src = imageURI;
	imagePath = imageURI;
	$("#lscPhotoProfile").val(imagePath);
}
function onFailProfile(message) {
	imagePath="";
    alert('Failed because: ' + message);
}

//------------------------------------------------------------------------------
//File upload 
function uploadPhotoV(imageURI, imageName) {
    var options = new FileUploadOptions();
    options.fileKey="upload";
//    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.fileName=imageName;
//	options.fileName = options.fileName
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderVisit/"),winV,failV,options);
	//ft.upload(imageURI, encodeURI("http://127.0.0.1:8000/welcome/wab_sync/fileUploader/"),win,fail,options);
}

function winV(r) {
//    console.log("Code = " + r.responseCode);
//    console.log("Response = " + r.response);
//    console.log("Sent = " + r.bytesSent);
}

function failV(error) {
	$(".errorChkVSubmit").text('Memory Error. Please take new picture and Submit');
    //alert("An error has occurred: Code = " + error.code);
//    console.log("upload error source " + error.source);
//    console.log("upload error target " + error.target);
}

//------------------------------------------------------------------------------
//File upload 
function uploadPhotoProfile(imageURI, imageName) {
    var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;
	
    var ft = new FileTransfer();
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderProfile/"),winProfile,failProfile,options);
}

function winProfile(r) {
//    console.log("Code = " + r.responseCode);
//    console.log("Response = " + r.response);
//    console.log("Sent = " + r.bytesSent);
}

function failProfile(error) {
	$(".errorConfirmProfileUpdate").text('Memory Error. Please take new picture and Submit');
    //alert("An error has occurred: Code = " + error.code);
//    console.log("upload error source " + error.source);
//    console.log("upload error target " + error.target);
}



//=====================MAP Start=====================
function marketNextCProfile_map() {
	
	$("#err_m_retailer_next_cp").html('');
	
	var market_name=$("#profile_market_cmb_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_m_retailer_next_cp").text("Market required");
		}else{
			$("#wait_image_profile_market_ret").show();	
			
			
			//visitMarketStr
			var marketNameId=market_name.split('-');
			var market_Id=marketNameId[1];
			
			//alert(localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			//$("#map_path").text(localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id,
				 success: function(result) {
						
						//alert(result);
						if (result==''){					
							$("#err_m_retailer_next_cp").html('Sorry Network not available');
							$("#wait_image_profile_market_ret").hide();
						}else{
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_m_retailer_next_cp").html(resultArray[1]);
								$("#wait_image_profile_market_ret").hide();
							}else if (resultArray[0]=='SUCCESS'){
								var m_client_string=resultArray[1];
								var result_show_Array = m_client_string.split('<fdfd>');	
								
								localStorage.map_desc=result_show_Array[0];
								localStorage.c_point=result_show_Array[1]
								
								$("#desc").val(localStorage.map_desc);
								$("#c_point").val(localStorage.c_point);
								
								initialize();
								google.maps.event.addDomListener(window, 'load', initialize);
								
								//-----
								$("#err_m_retailer_next_cp").html('');
								$("#wait_image_profile_market_ret").hide();	
								
								//---------	
								
								var url = "#page_market_ret_cprofile_map";
								$.mobile.navigate(url);
								
								}								
						}
					  },
				  error: function(result) {			  
					  $("#err_m_retailer_next_cp").html('Network Timeout. Please try again.');
					  $("#wait_image_profile_market_ret").hide();
					  
				  }
			 });//end ajax	
			
		}	
	
}
function initialize() {
  var center_point=$("#c_point").val();
  var center_point_Array = center_point.split(',');	
 // alert (center_point);
  var myLatlng = new google.maps.LatLng(parseFloat(center_point_Array[0]),parseFloat(center_point_Array[1]));
 // var myLatlng_1 = new google.maps.LatLng(60, 105);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
	

  }

 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker, i;
  var icons="lafarge_g.png";
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Outlet',
	  icon: icons
	  
  });
 //alert ('nadira');
 var p_station=$("#desc").val();
 

  
  
  var fields = p_station.split('rdrd');
  var total_fields=p_station.split("rdrd").length
  //alert (total_fields);
  
  
 var locations = [];
 var field=[];
 var j=0;
 
 for (j = 0; j < total_fields; j++){
	 var s=0;
	 var fields_single = fields[j].split(',');
  	 var total_fields_single=fields[j].split(",").length
	 var arr=[];
	 for (s = 0; s < total_fields_single; s++){
		 arr.push(fields_single[s]);
  		}
	locations.push(arr);
 }
 
 
 var infowindow = new google.maps.InfoWindow();
 var marker, i;
 var icons="lafarge_g.png";
 
 
 
 for (i = 0; i < locations.length; i++) {  
 	
   //check double shop==============
	  var searchS=locations[i][1]+','+locations[i][2];
	  var mOutlet = p_station.split('rdrd');
	  var total_mOutlet=p_station.split("rdrd").length
	  show_info='';
	  //alert (total_mOutlet);
	  for (var m = 0; m < total_mOutlet; m++){
		
		 if ( (mOutlet[m].search(searchS))!= -1 ){
			 var mOutlet_single=mOutlet[m].split(',');
			 if (show_info==''){
				 show_info='<div  style="height:300px; width:700px">'+mOutlet_single[m][0]+'</div>';
				 icons="lafarge_g.png";
			 }
			 else{
				//alert (locations[i][0]); 
				show_info=show_info+'<div style="background-color:#408080; height:2px"></div>'+'<div  style="height:300px; width:700px">'+mOutlet_single[m][0]+'</div>';	 
				icons="lafarge_g.png";
			 }
			 
		 }
		
		 //alert ('start: '+locations[i][0])
	   }// double check for loop
	  
   //======check double shop end========
   		
		
	  marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map,
		icon: icons
	   
	  });
		  
		  

      		google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					
				  //check double shop==============
				  var searchS=locations[i][1]+','+locations[i][2];
				  var mOutlet = p_station.split('rdrd');
				  var total_mOutlet=p_station.split("rdrd").length
				  show_info='';
				  
				  for (var m = 0; m < total_mOutlet; m++){
					 if ( (mOutlet[m].search(searchS))!= -1 ){
						 var mOutlet_single=mOutlet[m].split(',');
						 if (show_info==''){
							 show_info='<div  style="height:auto; width:auto">'+locations[i][0]+'</div>';
							
						 }
						 else{
							show_info=show_info+'<div style="background-color:#408080; height:2px"></div>'+'<div  style="height:300px; width:700px">'+locations[i][0]+'</div>';	 
							
						 }
						
					 }
					 
				   }// double check for loop
			   //======check double shop end========	
					
				  infowindow.setContent(show_info);
				  infowindow.open(map, marker);
				}
      		})(marker, i));
	  
  
  		//alert (i)
  
 }  //main for
  
  
}
//=====================MAP End=====================


//--------------------Item Search Start----------------
function search_item() {	
	var p_name=$("#item_search").val();
	
	
	
	/*var string=p_name;
	var n=string.split(".");
	var vfinal=""
	for(i=0;i<n.length;i++)
	{
	   var spaceput=""
	   var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
	   n[i]=n[i].replace(/^\s+/,"");
	   var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
	   for(j=0;j<spaceCount;j++)
	   spaceput=spaceput+" ";
	   vfinal=vfinal+spaceput+newstring+".";
	 }
	 vfinal=vfinal.substring(0, vfinal.length - 1);*/
	 
	
	vfinal=p_name.toUpperCase()
	
	
	//alert (vfinal);
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#order_qty"+product_id).focus().select();
			$("#item_search").val('');
			return;
		}
				
	}
	
}


//--------------------Item Search End----------------
//--------------------cart Start----------------
function cart_data() {	
	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		//var product_tbl_cart_str='<ul id="cart_combo_id_lv" data-role="listview">';
		//var product_tbl_cart_str='<table width="100%" border="1"  cellpadding="0" cellspacing="0" style="border-radius:5px;">';
		var product_tbl_cart_str='<ul  data-role="listview">';
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				//alert (orderProductId+'    '+orderProductQty);
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td  style="text-align:left;">'+ product_name.toUpperCase()+'</td></tr>'+'</table>'+'</li>'
				
				

				

				}
		
		}
		product_tbl_cart_str=product_tbl_cart_str+'</ul>';		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		$('#product_list_tbl_cart').empty();
		$('#product_list_tbl_cart').append(localStorage.product_tbl_cart).trigger('create');
		//$("#product_list_tbl_cart").html('');
//		$("#product_list_tbl_cart").html(localStorage.product_tbl_cart);
		
		var show_total="Total Order Amount: "+localStorage.total_value + " BDT"
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		//location.refresh();
		
		//var cart_combo_ob=$('#cart_combo_id_lv');
//		cart_combo_ob.empty()
//		cart_combo_ob.append(product_tbl_cart_str);
//		
//		 cart_combo_ob.listview("refresh");
	}
	else{
		var url = "#page_order";	
		$.mobile.navigate(url);
	}
	
	
	
	
}



//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val();
	
//	alert (pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	//alert (productOrderStr)
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				//alert (pqty);
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//alert (localStorage.productOrderStr);
		//================price===========
		//alert (localStorage.productOrderStr.length);
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;

				
				
				}
		
		}
		
		
		
		//alert (total_value)
		localStorage.total_value=total_value.toFixed(2);
		
		$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " BDT");
		$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " BDT");

	}
		
		
//		==================================
	}

//----------------------cart end----------------

function payment_mode(){
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	
	var url = "#page_visit";
	$.mobile.navigate(url);
	localStorage.payment_mode=payment_mode
}

function cancel_cart() {
	//localStorage.productOrderStr='';
	
	var productList=localStorage.productOrderStr.split('<rd>');
	var productLength=productList.length;
	for (var i=0; i < productLength; i++){
		var productArray2 = productList[i].split('<fd>');
		var product_id2=productArray2[0];	
		var product_name2=productArray2[1];
		$("#order_qty"+product_id2).val('');
		//alert (product_id2);
	}
	localStorage.productOrderStr='';
	var url = "#page_visit";	
	$.mobile.navigate(url);
}

//===================Doctor Start==============
function marketNext_doc() {
	
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			//visitMarketStr
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Unscheduled";
			var scheduled_date="";
			
			//var visit_type='unschedule';
			//var market_Id=market_name.replace(marketNameId[0]+"-","");
			//alert (market_Id);
			
			//$("#err_market_next").html(localStorage.base_url+'getMarketClientList_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			result=localStorage.market_doctor
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
			}else{					

				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
					
						
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//alert (mClientListShowLength);
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if(mClientID!=''){
	
								unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+'</a></li>';
								}								
						}
									
									
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						
						
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						//alert ('nadira  1');	
						localStorage.visit_type=visit_type
						localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
									var url = "#page_market_ret";	
									$.mobile.navigate(url);
									
									//unscheduled_m_client_combo_ob.selectmenu("refresh");
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}
//==============================Doctor==========

function marketRetailerNext_doc() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
	}else{
		$("#btn_unschedule_market_ret").hide();
		$("#wait_image_unschedule_market_ret").show();		
		
		//visitClientId=visit_client.split('-')[1]	
		//$(".market").html(visitMarketStr);
		//$(".visit_distributor").html(visit_distributor_nameid);
		//alert ('3');
		$(".visit_client").html(visit_client);
		
		localStorage.visit_client_show=visit_client
		if (visit_client!=localStorage.visit_client){
			localStorage.productGiftStr='';
			localStorage.campaign_doc_str=''
			localStorage.productSampleStr=''
			
			localStorage.productppmStr='';
			
			localStorage.campaign_show_1='';
			localStorage.gift_show_1='';
			localStorage.sample_show_1='';
			
			localStorage.ppm_show_1='';
			
			$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");	
			$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	
			$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");	
			$("#doc_ppm").html("</br>"+localStorage.ppmt_show_1+"</br>");	
		}
		
			
		localStorage.visit_client=visit_client
		//localStorage.visitMarketStr=visitMarketStr
		//localStorage.visit_distributor_nameid=visit_distributor_nameid

		localStorage.visit_page="YES"
		
		//--------
		//$("#err_m_retailer_next").text("");
		$("#wait_image_unschedule_market_ret").hide();		
		//$("#btn_unschedule_market_ret").show();

		var url = "#page_visit_doc";
		$.mobile.navigate(url);
		//location.reload();
							
			
	
	}
}
//=========================


function getCampaign(){
	localStorage.campaign=1;
	//getDoctorCampaign();
	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	//$('#doctor_campaign_list_tbl').empty();
	//$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
	
	//$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	
	
	
	
	var campaign_show=localStorage.campaign_doc_str;
	//alert (campaign_show);
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (campaign_show_1);
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	for (var j=0; j < campaign_showListLength; j++){
		//campaign_show_1=campaign_show_1+campaign_showList[j]+'</br>'
		
		//var pname=$("#doc_camp_name"+campaign_showList[j]).val();
		
		var camp_combo="#doc_camp"+campaign_showList[j]
		
		//alert (camp_combo);
		
		$(camp_combo).attr('checked', true);
		//$("#doc_campaign").html(campaign_show);
	}
	
	
	
	var url = "#page_doctor_campaign";	
	$.mobile.navigate(url);	
}
//function getDoctorCampaign(){	
//	$("#errorChkVSubmit").html('');
//	//$("#doctor_campaign_list_tbl").html(localStorage.product_tbl_str_doc_campaign);
//	$('#doctor_campaign_list_tbl').empty();
//	$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
//	//localStorage.campaign_doc_str='';
//	var url = "#page_doctor_campaign";	
//	$.mobile.navigate(url);	
//	//location.reload();
//	//-----
//}


//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	
	//alert (vfinal);
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	//<tr id="doc_camp_tr_id'+product_id2+'" style="border-bottom:1px solid #D2EEE9; height:30px"><td width="50px" style="text-align:center; padding-left:5px;"><input type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>';
	var camp_combo_val=$(camp_combo).is(":checked")
	
	
	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	
	
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
				//productOrderShowStr=productOrderShowStr+'</br>'+pname
			}	
		}
		else{
			var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			var campaign_doc_strListLength=campaign_doc_strList.length;
			for (var j=0; j < orderProductLength; j++){
					var campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						//productOrderShowStr=productOrderShowStr.replace(productOrderShowStr, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+campaign_docProductId
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		//alert ('3')
		var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		var campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (var j=0; j < campaign_doc_strListLength; j++){
		var campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
					
					
					
				
			}
		}
	
		localStorage.campaign_doc_str=campaign_doc_str;
		
		//$("#doc_campaign").html(localStorage.campaign_doc_str);
		
		
		
		
	}
//	alert (localStorage.campaign_doc_str)
		
	}
function getDocCampaignData(){	
	var campaign_show=localStorage.campaign_doc_str;
	//alert (campaign_show);
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (campaign_show_1);
	//alert (campaign_showList)
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	var campaign_show_1='';
	
	
	for (var j=0; j < campaign_showListLength; j++){
		//campaign_show_1=campaign_show_1+campaign_showList[j]+'</br>'
		if (j==0){
			campaign_show_1=campaign_show_1+'<table width="100%" cellspacing="0" border="1" style="border:thin;  border-color:#006600;">';
		}
		var pname=$("#doc_camp_name"+campaign_showList[j]).val();
		campaign_show_1=campaign_show_1+' <tr id="'+campaign_showList[j]+'"><td>'+pname+'('+campaign_showList[j]+')'+' </td><td> <a data-role="button" class="ui-btn" style="text-align:center" onClick="campaign_remove(\''+campaign_showList[j]+'\');" > X </a> </td></tr>'
		//alert (campaign_showList[j]);
		//$("#doc_campaign").html(campaign_show);
	}
	if (campaign_show_1!=''){
		campaign_show_1=campaign_show_1+'</table>';
	}
	localStorage.campaign_show_1=campaign_show_1;
	//alert (campaign_show_1.indexOf('undefined'));
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+'</br>');
	}
	
	
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);			
	}
function campaign_remove(id){
	var campaign_show=localStorage.campaign_doc_str;
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	

	for (var j=0; j < campaign_showListLength; j++){

		if (j==0){
			campaign_show=campaign_show.replace(id,"");
		}
		else{
			campaign_show=campaign_show.replace("<rd>"+id,"");
		}


	}
	localStorage.campaign_doc_str=campaign_show;
	//var camp_combo="#doc_camp"+id
	//$(camp_combo).attr('checked', false);
	$('#'+id).remove();
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		var campaign= ($("#doc_campaign").html());
		localStorage.campaign_show_1=campaign;
	}
	
	//getDocCampaignData();
}

function getDoctorGift(){
	if ((localStorage.gift_tbl_doc==undefined) || (localStorage.gift_tbl_doc=='undefined')){
		localStorage.gift_tbl_doc='';
	}
	//localStorage.productGiftStr='';
	//$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	//$('#doctor_gift_list_tbl').empty();
	//$('#doctor_gift_list_tbl').append(localStorage.gift_tbl_doc).trigger('create');
	
	//  Set Gift Data==========
	var gift_show=localStorage.productGiftStr;
	//alert (gift_show);
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (campaign_show_1);
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	
	//alert (localStorage.productGiftStr);
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		//alert ("#gift_qty"+giftProductsingleList[0]);
//		alert (giftProductsingleList[1]);
		$('#gift_qty'+giftProductsingleList[0]).val(giftProductsingleList[1]);
	
		//alert ('nadira');

	}
	
	
	
	
	
	
	
	
	var url = "#page_doctor_gift";	
	$.mobile.navigate(url)
	
	
}
//--------------------------------- Order: Set Order data
function getGiftData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#gift_qty"+product_id).val();
	var productGiftStr=localStorage.productGiftStr
	var productGiftShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productGiftStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				productGiftShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				productGiftShowStr=productGiftShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			for (var j=0; j < giftProductLength; j++){
			var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					if (giftProductId==pid){
						productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
						
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							productGiftShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+giftProductId+'<fd>'+giftProductQty
							productGiftShowStr=productGiftShowStr+', '+pname+'('+giftProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productGiftStr=productGiftStr;
		
		
	}
	else{		
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (orderProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					}
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productGiftStr=productGiftStr
	}
	//alert (localStorage.productGiftStr)	
	//	------------------------------------------------------
}
function getDocGiftData(){	
	var gift_show=localStorage.productGiftStr;
	//alert (localStorage.productGiftStr);
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (campaign_show_1);
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		//if (j==0){
//			gift_show_1=gift_show_1+'<table width="100%" cellspacing="0" border="1" style="border:thin;  border-color:#006600">';
//		}
		//gift_show_1=gift_show_1+'<tr><td  width="90%">'+pname+'('+giftProductsingleList[0]+')'+'</td><td>'+giftProductsingleList[1]+'</td></tr>'
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  width="90%">'+pname+'('+giftProductsingleList[0]+')'+'</td><td>'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
		//alert (giftProductsingleList[1]);
		//gift_show_1=gift_show_1+gift_showList[j].replace("<fd>","--")+'</br>'
		
		//$("#doc_campaign").html(campaign_show);
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	//alert (campaign_show_1);
	localStorage.gift_show_1=gift_show_1;
	
	//alert ('getDocGiftData'+localStorage.gift_show_1);
	if  (gift_show_1.indexOf('undefined')==-1 ){
		//$("#doc_gift").html(localStorage.gift_show_1+'</br>');
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);	
		
	}







function giftCartData_keyup(product_id){
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
//	alert (pqty);
	
	
	$("#gift_qty"+product_id).val(pqty);
	var productGiftStr=localStorage.productGiftStr
	
	//alert (productOrderStr)
	var gift_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productGiftStr.indexOf(product_id)==-1){
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				//productOrderShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				//alert (productGiftStr);
				//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			//alert (giftProductLength);
			
			for (var j=0; j < giftProductLength; j++){
				var giftProductIdQtyList=giftProductList[j].split('<fd>');
				//alert (giftProductIdQtyList.length);
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					
					if (giftProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productGiftStr.indexOf(product_id)
						if (product_index==0){
							//alert (productGiftStr);
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
							//alert ("1:  "+productGiftStr)
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
							//alert ("2:  "+productGiftStr)
						}
						
						//alert (productGiftStr);
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productGiftStr=productGiftStr;
		//alert (localStorage.productGiftStr)
		
	}
	else{
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (giftProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					} //if (giftProductLength>1){
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					} //if (giftProductLength==1
				
				} //if (giftProductId==pid)
					
					
					
				}//if(giftProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productGiftStr=productGiftStr
		
		
		getDocGiftData();
		
//		==================================
	}



//===========================PPM Start=================

function getDoctorppm(){
	//alert (localStorage.ppm_tbl_doc);
	if ((localStorage.ppm_tbl_doc==undefined) || (localStorage.ppm_tbl_doc=='undefined')){
		localStorage.ppm_tbl_doc='';
	}
	//alert (localStorage.ppm_tbl_doc);
	//localStorage.productppmStr='';
	//$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
	//$('#doctor_ppm_list_tbl').empty();
	//$('#doctor_ppm_list_tbl').append(localStorage.ppm_tbl_doc).trigger('create');
	
	//  Set ppm Data==========
	var ppm_show=localStorage.productppmStr;
	
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (ppm_show);
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	
	//alert (ppm_showListLength);
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		//alert (ppmProductsingle)
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		//alert ("#ppm_qty"+ppmProductsingleList[0]);
//		alert (ppmProductsingleList[1]);
		$('#ppm_qty'+ppmProductsingleList[0]).val(ppmProductsingleList[1]);
	
		//alert ('nadira');

	}
	
	
	
	
	
	
	
	
	var url = "#page_doctor_ppm";	
	$.mobile.navigate(url)
	
	
}
//--------------------------------- Order: Set Order data
function getppmData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#ppm_qty"+product_id).val();
	var productppmStr=localStorage.productppmStr
	var productppmShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productppmStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				productppmShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				productppmShowStr=productppmShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			for (var j=0; j < ppmProductLength; j++){
			var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					if (ppmProductId==pid){
						productppmStr=productppmStr.replace(ppmProductList[j], "")
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							productppmShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+ppmProductId+'<fd>'+ppmProductQty
							productppmShowStr=productppmShowStr+', '+pname+'('+ppmProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productppmStr=productppmStr;
		
		
	}
	else{		
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (orderProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					}
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productppmStr=productppmStr
	}
	//alert (localStorage.productppmStr)	
	//	------------------------------------------------------
}
function getDocppmData(){	
	var ppm_show=localStorage.productppmStr;
	//alert (ppm_show);
	//campaign_show_1=campaign_show.replace('<rd>','</br>')
	//alert (campaign_show_1);
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		//alert (ppmProductsingle)
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		//if (j==0){
//			ppm_show_1=ppm_show_1+'<table width="100%" cellspacing="0" border="1" style="border:thin;  border-color:#006600">';
//		}
		//ppm_show_1=ppm_show_1+'<tr><td  width="90%">'+pname+'('+ppmProductsingleList[0]+')'+'</td><td>'+ppmProductsingleList[1]+'</td></tr>'
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  width="90%">'+pname+'('+ppmProductsingleList[0]+')'+'</td><td>'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
		//alert (ppmProductsingleList[1]);
		//ppm_show_1=ppm_show_1+ppm_showList[j].replace("<fd>","--")+'</br>'
		
		//$("#doc_campaign").html(campaign_show);
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	//alert (ppm_show_1);
	//alert ('getDocppmData'+localStorage.ppm_show_1);
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		//$("#doc_ppm").html(localStorage.ppm_show_1+'</br>');
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);	
		
	}







function ppmCartData_keyup(product_id){
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
//	alert (pqty);
	
	
	$("#ppm_qty"+product_id).val(pqty);
	var productppmStr=localStorage.productppmStr
	
	//alert (productOrderStr)
	var ppm_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productppmStr.indexOf(product_id)==-1){
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				//productOrderShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			//alert (ppmProductLength);
			
			for (var j=0; j < ppmProductLength; j++){
				var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				//alert (ppmProductIdQtyList.length);
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					
					if (ppmProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productppmStr.indexOf(product_id)
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productppmStr=productppmStr;
		//alert (productppmStr)
		
	}
	else{
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (ppmProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					} //if (ppmProductLength>1){
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					} //if (ppmProductLength==1
				
				} //if (ppmProductId==pid)
					
					
					
				}//if(ppmProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productppmStr=productppmStr
		getDocppmData();
		
		
		alert ("cart: "+localStorage.productppmStr);
		
		
//		==================================
	}




//============================ppm End===================







//--------------------------------- Sample: Show Sample from home

function getDocSampleData(){	
//alert (localStorage.productSampleStr);
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	var sample_show_1='<ul  data-role="listview">';
	for (var j=0; j < sampleProductLength; j++){
		
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');

			var pname=$("#sample_name"+sampleProductsingleList[0]).val();
			
				//if (j==0){
//					sample_show_1=sample_show_1+'<table width="100%" cellspacing="0" border="1" style="border:thin;  border-color:#006600">';
//				}
				//sample_show_1=sample_show_1+'<tr><td width="90%">'+pname+'('+sampleProductsingleList[0]+')'+'</td><td>'+sampleProductsingleList[1]+'</td></tr>'
				
				sample_show_1=sample_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  width="90%">'+pname+'('+sampleProductsingleList[0]+')'+'</td><td>'+'<input  type="number" id="s_cart_qty'+ sampleProductsingleList[0] +'"  onBlur="sampleCartData_keyup(\''+sampleProductsingleList[0] +'\');" value="'+sampleProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
				
		}
		
		if (sample_show_1!=''){
				sample_show_1=sample_show_1+'</ul>';
		}
		
		localStorage.sample_show_1=sample_show_1;
		if  (sample_show_1.indexOf('undefined')==-1 ){
			//$("#doc_sample").html(localStorage.sample_show_1);
			$('#doc_sample').empty();
			$('#doc_sample').append("</br>"+localStorage.sample_show_1+"</br>").trigger('create');
		}
		var url = "#page_visit_doc";	
		$.mobile.navigate(url);	
		
	
	
}
function getDoctorSample(){	
	$("#myerror_doctor_sample").html('');
	if ((localStorage.productSampleStr==undefined) || (localStorage.productSampleStr=='undefined')){
		localStorage.productSampleStr='';
	}
	//$('#doctor_sample_list_tbl').empty();
	//$('#doctor_sample_list_tbl').append(localStorage.product_tbl_str_doc_sample).trigger('create');
	//$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	//localStorage.productSampleStr='';
	
	
	
	//  Set Sample Data==========
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	for (var j=0; j < sampleProductLength; j++){
		
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');
			
			
			$("#sample_qty"+sampleProductsingleList[0]).val(sampleProductsingleList[1]);

			//var pname=$("#sample_name"+sampleProductsingleList[0]).val();
//			sample_show_1=sample_show_1+pname+'('+sampleProductsingleList[0]+')'+'  --  '+sampleProductsingleList[1]+'</br>'
//			
//			localStorage.sample_show_1=sample_show_1;
//			$("#doc_sample").html(localStorage.sample_show_1);
			//var url = "#page_visit_doc";	
//			$.mobile.navigate(url);	
		
	}
	var url = "#page_doctor_sample";	
	$.mobile.navigate(url);	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data
function getSampleData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#sample_qty"+product_id).val();
	
	var productSampleStr=localStorage.productSampleStr
	
	
	var productSampleShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productSampleStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				productSampleShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			for (var j=0; j < sampleProductLength; j++){
			var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					if (sampleProductId==pid){
						productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							productSampleShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+sampleProductId+'<fd>'+sampleProductQty
							productSampleShowStr=productSampleShowStr+', '+pname+'('+sampleProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productSampleStr=productSampleStr;
		
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=orderProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					}
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productSampleStr=productSampleStr
	}
	
	//alert (localStorage.productSampleStr)	
	//	------------------------------------------------------
}
	
function sampleCartData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#s_cart_qty"+product_id).val();
	
//	alert (pqty);
	
	
	$("#sample_qty"+product_id).val(pqty);
	var productSampleStr=localStorage.productSampleStr
	
	//alert (productOrderStr)
	var sample_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				//productOrderShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				//alert (productsampleStr);
				//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			//alert (sampleProductLength);
			
			for (var j=0; j < sampleProductLength; j++){
				var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				//alert (sampleProductIdQtyList.length);
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					
					if (sampleProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productSampleStr.indexOf(product_id)
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productSampleStr=productSampleStr;
		//alert (productsampleStr)
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=sampleProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					} //if (sampleProductLength>1){
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					} //if (sampleProductLength==1
				
				} //if (sampleProductId==pid)
					
					
					
				}//if(sampleProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productSampleStr=productSampleStr
		
		
		
		getDocSampleData();

//		==================================
	}


//===============	
	
	
	
	
	
	

//----------------------Doctor visit submit
function visitSubmit_doc(){	
	$("#errorChkVSubmit").text("");
	
	visitClientId=localStorage.visit_client.split('|')[1]	
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	
	sample_doc_Str=localStorage.productSampleStr;
	gift_doc_Str=localStorage.productGiftStr;
	campaign_doc_str=localStorage.campaign_doc_str;
	
	ppm_doc_Str=localStorage.productppmStr;
	
	notes= $("#doc_feedback").val();
	

	
	
	
	
	
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for (var i=0; i < campaignListLength; i++){		
		
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
		}
	}
	//alert (campaign_submit);
	//----------------------- Sample check
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		for (var i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			
			if (sample_submit==''){
				sample_submit=sample_single_list[0]+','+sample_single_list[1]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[0]+','+sample_single_list[1]
			}
		}
	}
	//alert (sample_submit);
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for (var i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');	
			if (gift_submit==''){
				gift_submit=gift_single_list[0]+','+gift_single_list[1]
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[0]+','+gift_single_list[1]
			}
		}
	}
	
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		ppm_submit='';
		for (var i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');	
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[0]+','+ppm_single_list[1]
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[0]+','+ppm_single_list[1]
			}
		}
	}
	//-------------------------------
	if (campaign_submit.indexOf('undefined')!=-1){
		campaign_submit='';
		
	}
	if (gift_submit.indexOf('undefined')!=-1){
		gift_submit='';
		
	}
	if (sample_submit.indexOf('undefined')!=-1){
		sample_submit='';
		
	}
	if (ppm_submit.indexOf('undefined')!=-1){
		ppm_submit='';
		
	}
	//------------------------
	
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	
	//alert (msg);
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var long=$("#long").val();
	var now = $.now();
	
	//alert(photoRequired+','+lscPhoto);
	
	//if (photoRequired=='Yes' && lscPhoto==''){
//		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
//	}else{
//		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
	
	var v_with=$("input[name=v_with]:checked").val()
	
	if (v_with=='' || v_with==undefined || v_with=='undefined'){
		$("#errorChkVSubmit").html('Visited with not selected');		
	}else{
		
		if (lat=='' || lat==0 || long=='' || long==0){
			$("#errorChkVSubmit").html('Location not Confirmed');		
		}else{
			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#btn_visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);

					//$("#errorChkVSubmit").html(localStorage.base_url+'doctor_visit_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+long+'&v_with='+v_with)
					// ajax-------
					//alert (localStorage.payment_mode);
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'doctor_visit_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+long+'&v_with='+v_with,
						 success: function(result) {
								
								//alert(result);
								if (result==''){					
									$("#errorChkVSubmit").html('Sorry Network not available');
									$("#wait_image_visit_submit").hide();
									$("#btn_visit_submit").show();									
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
										
										//-----------
										localStorage.visit_client=''
										
									
										
										localStorage.visit_page=""
										
										localStorage.productGiftStr='';
										localStorage.campaign_doc_str=''
										localStorage.productSampleStr=''
										localStorage.productppmStr=''
										
										localStorage.campaign_show_1='';
										localStorage.gift_show_1='';
										localStorage.sample_show_1='';
										localStorage.ppm_show_1='';
										
										
										//-------------
										// Clear Campaign and sample
											
											//localStorage.productOrderStr='';
											var productList=localStorage.productListStr.split('<rd>');
											var productLength=productList.length;
											for (var i=0; i < productLength; i++){
												var productArray2 = productList[i].split('<fd>');
												var product_id2=productArray2[0];	
												var product_name2=productArray2[1];
												$("#sample_qty"+product_id2).val('');
												
												
												var camp_combo="#doc_camp"+product_id2
												$(camp_combo).attr('checked', false);
												//alert (product_id2);
											}	
										// Clear Gift
											
											//localStorage.productOrderStr='';
											var giftList=localStorage.gift_string.split('<rd>');
											var giftLength=giftList.length;
											for (var i=0; i < giftLength; i++){
												var giftArray2 = giftList[i].split('<fd>');
												var gift_id2=giftArray2[0];	
												//var product_name2=giftArray2[1];
												$("#gift_qty"+gift_id2).val('');
											}
											// Clear ppm
											
											//localStorage.productOrderStr='';
											var ppmList=localStorage.ppm_string.split('<rd>');
											var ppmLength=ppmList.length;
											for (var i=0; i < ppmLength; i++){
												var ppmArray2 = ppmList[i].split('<fd>');
												var ppm_id2=ppmArray2[0];	
												//var product_name2=ppmArray2[1];
												$("#ppm_qty"+ppm_id2).val('');
												

											}	
											
											//====================================
										
										
										$("#doc_feedback").val('');
										
										//$(".market").html('');
										$(".visit_client").html('');
										//--------------------------------------------------------
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#long").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
//										
										$("#checkLocation").html('');
										$("#checkLocationProfileUpdate").html('');
										
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();
										
										//image upload function									
										//uploadPhotoV(lscPhoto, imageName);
										
										//--
										//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										$("#visit_success").html('</br></br>Submitted Successfully');
										localStorage.visit_page=''
										
										var url = "#page_confirm_visit_success";	
										$.mobile.navigate(url);
										//location.reload();
																				
									}else{						
										$("#errorChkVSubmit").html('Server Error');
										$("#wait_image_visit_submit").hide();
										$("#btn_visit_submit").show();								
										}
								}
							  },
						  error: function(result) {			  
								$("#errorChkVSubmit").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit").hide();
								$("#btn_visit_submit").show();	
						  }
					 });//end ajax	
				}
			}
		  }//locaction check
	}//Visited with check
	//}//image
  }


//======================Doctor End==============
function clear_mgs(){
	$("#error_login").html('');
	$("#error_login").html('');	
	$("#err_retailer_date_next").html('');	
	$("#err_retailer_next").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	$("#err_market_next_cp").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_distributor").html('');
	$("#error_del_submit").html('');
	$("#err_p_market").html('');
	$("#err_plan_visit").html('');
	$("#err_visit_rpt").html('');
	$("#error_complain").html('');
	$("#error_complain_page").html('');
	$("#error_task_page").html('');
	$("#error_task_list").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	
	
	
}

function client_catList() {	
	$('#catCombo').empty();
	var catArray=localStorage.clientCat_string.split('<rd>')	
	var ob = $("#catCombo");
	var ob_profile = $("#catCombo_profile");
	var value="";
	//var text="Category";
	
	//alert (localStorage.clientListStr);
	
	for (var p=0; p<catArray.length; p++){
		var catId = catArray[p];
		ob.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		ob_profile.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		}	
	ob.prepend("<option value=''>Category</option>");
	ob_profile.prepend("<option value=''>Category</option>");
}




//=========================Menu functions Start=================

function chemist_visit() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	
	localStorage.doctor_flag=0;
	//localStorage.chemist_profile_flag=0;
	//reset_doc();
	addMarketList();
	
	
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	//localStorage.chemist_profile_flag=1;
	//reset_doc();
	addMarketListCp();
	
	
}
function doctor_visit() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Doctor</font>');
	//localStorage.chemist_profile_flag=0;
	localStorage.doctor_flag=1;
	addMarketList();
	//set_doc();
	
}
function doctor_profile() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Doctor</font>');
	
	
	localStorage.doctor_flag=1;
	//localStorage.chemist_profile_flag=0;
	addMarketListCp();
	//set_doc();
	
}
function feedback() {
	var url = "#page_complain";	
	$.mobile.navigate(url);
}
function reports() {
	//var url = "#page_reports";
	var url = "#page_reports_dcr";
	$.mobile.navigate(url);
}

function market_list_combo() {	
	$('#se_market').empty();
	$('#se_market_doc').empty();
	var marketArray=localStorage.marketListStr.split('<rd>')	
	var ob = $("#se_market");
	var ob_1 = $("#se_market_doc");
	var value="";
	for (var p=0; p<marketArray.length; p++){
		market_single=marketArray[p].split('<fd>')
		var marketId = market_single[0];
		var marketName = market_single[1];
		ob.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		ob_1.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		//alert ("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		}	
	ob.prepend("<option value=''>Market</option>");
	ob_1.prepend("<option value=''>Market</option>");
}


function item_list_combo() {	
	$('#se_item').empty();
	var productArray=localStorage.productListStr.split('<rd>')	
	var ob = $("#se_item");
	var value="";
	//var text="Category";
	
	//alert (marketArray.length);
	
	for (var p=0; p<productArray.length; p++){
		product_single=productArray[p].split('<fd>')
		var item_id = product_single[0];
		var name = product_single[1];
		ob.prepend("<option value='"+ item_id+"'>" + name+"-"+item_id + "</option>");
		//alert ("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		}	
	ob.prepend("<option value=''>Item</option>");
}

function mpo_list_combo() {	
	$('#se_mpo').empty();
	var ob = $("#se_mpo");
	var user_type=localStorage.user_type;
	//alert (user_type);
	if (user_type=='rep'){
		ob.prepend("<option value='"+ localStorage.user_id +"'>" + localStorage.user_id + "</option>");
	}
	
	
	//var productArray=localStorage.productListStr.split('<rd>')	
//	var ob = $("# se_mpo");
//	var value="";
//	//var text="Category";
//	
//	//alert (marketArray.length);
//	
//	for (var p=0; p<productArray.length; p++){
//		product_single=productArray[p].split('<fd>')
//		var item_id = product_single[0];
//		var name = product_single[1];
//		ob.prepend("<option value='"+ item_id+"'>" + name+"-"+item_id + "</option>");
//		//alert ("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
//		}	
//	ob.prepend("<option value=''>Item</option>");
}



//=========================Menu functions End=================

$(document).on("pagecreate", "#page_order", function(){    
//$("item_combo_id").keyup(function(){
    $("#item_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch);
});

function startsWithSearch( idx, searchValue ) {
    
	var ret = false;
    if (searchValue && searchValue.length > 0){        
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
    return ret;
}
//-------------GIft
$(document).on("pagecreate", "#page_doctor_gift", function(){    
	$("#gift_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_gift);
});

function startsWithSearch_gift( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//-------------GIft
$(document).on("pagecreate", "#page_doctor_ppm", function(){    
	$("#ppm_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ppm);
});

function startsWithSearch_ppm( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//------------Sample
$(document).on("pagecreate", "#page_doctor_sample", function(){    
	$("#sample_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_sample);
});

function startsWithSearch_sample( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//--------------Campaign
//------------Sample
$(document).on("pagecreate", "#page_doctor_campaign", function(){    
	$("#campaign_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_campaign);
});

function startsWithSearch_campaign( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
}




//------------Market
$(document).on("pagecreate", "#page_market", function(){    
	$("#unschedule_market_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_market);
});

function startsWithSearch_market( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//------------Chemist
$(document).on("pagecreate", "#page_market_ret", function(){    
	$("#unscheduled_m_client_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ret);
});

function startsWithSearch_ret( idx, searchValue ) {
	var ret = false;
	//alert (searchValue);
    if (searchValue && searchValue.length > 0){ 
        var text = $(this).text().toUpperCase();
		
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
		//alert (filttext);
		//alert (text.indexOf(searchValue.toUpperCase()));
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5){
           // alert ('nadira')
			ret = true; //filter this one out
        }
    } 
    return ret;
} 




//==============================html script==========================

$(document).ready(function(){

	//=====Set menu============
	$('#menu_show').empty();
	$('#menu_show').append(localStorage.menu_list).trigger('create');
	//===========Set menu end========										
											
											
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	$("#wait_image_schedule_date").hide();		
	$("#btn_schedule_date").show();
	
	$("#wait_image_schedule_ret").hide();		
	$("#btn_schedule_ret").show();
	
	$("#wait_image_unschedule_market").hide();		
	$("#btn_unschedule_market").show();
	
	$("#wait_image_unschedule_market_ret").hide();		
	$("#btn_unschedule_market_ret").show();
	
	$("#wait_image_visit_submit").hide();		
	$("#btn_visit_submit").show();
	
	$("#wait_image_delivery_submit").hide();		
	$("#btn_delivery_submit").show();
	
	$("#wait_image_delivery_dealer").hide();		
	$("#btn_delivery_dealer").show();
	
	$("#wait_image_profile_market").hide();		
	$("#btn_profile_market").show();
	
	$("#wait_image_profile_market_ret").hide();		
	$("#btn_profile_market_ret").show();
	
	$("#wait_image_profile_update").hide();		
	$("#btn_profile_update").show();
	
	$("#wait_image_visit_plan_market").hide();		
	$("#btn_visit_plan_market").show();
	
	$("#wait_image_visit_plan_submit").hide();		
	$("#btn_visit_plan_submit").show();
	
	$("#wait_image_visit_report").hide();
	
	$("#wait_image_complain_submit").hide();
	$("#btn_complain_submit").show();	
	
	$("#wait_image_region_report").hide();
	
	client_catList();
	first_page();
	
	
	//Set report combo
	market_list_combo();
	item_list_combo();
	mpo_list_combo()
	$("#se_mpo").val(localStorage.user_id);
	
	
	$("#product_list_tbl").html(localStorage.product_tbl_str);
	$("#del_product_list_tbl").html(localStorage.product_tbl_del_str);
	
	$("#sch_date").val(localStorage.search_date);
	
	
	
	
	//set doctor
	$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
	
	
	//Set total 
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);
	
	
	//Set Campaign
	//	$('#doctor_campaign_list_tbl').empty();
	//	$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
		
	
	// delivery qty refresh during client change
	jQuery("#delivery_retailer_cmb_id").change(function(){	
		var productList=localStorage.productListStr.split('<rd>');
		var productLength=productList.length;
		
		for (var i=0; i < productLength; i++){				
			var deleveryItemArray = productList[i].split('<fd>');
			var productId=deleveryItemArray[0];											
			jQuery("#delivery_qty"+productId).val("");
		}				
	});
	
	//------
	
	//===============Map=============
	$("#desc").val(localStorage.map_desc);
	$("#c_point").val(localStorage.c_point);		
	//==============Map end===========
	
	//============== Redirect to doctor visit page
	//alert (localStorage.chemist_profile_flag)
//		//alert (localStorage.visit_page);
//		if ( localStorage.chemist_profile_flag==1) {
//			var url = "#index";
//			$.mobile.navigate(url);	
//		}
	
	
	if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){
		campaign_show_1=localStorage.campaign_show_1;
		gift_show_1=localStorage.gift_show_1;
		sample_show_1=localStorage.sample_show_1;
		
		ppm_show_1=localStorage.ppm_show_1;
		
		if  (campaign_show_1.indexOf('undefined')==-1 ){
			$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");
		}
		if  (gift_show_1.indexOf('undefined')==-1 ){
			//alert (localStorage.gift_show_1);
			$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	

		}
		if  (ppm_show_1.indexOf('undefined')==-1 ){
			//alert (localStorage.ppm_show_1);
			$("#doc_ppm").html("</br>"+localStorage.ppm_show_1+"</br>");	
			//$('#doc_gift').empty();
			//$('#doc_gift').append(localStorage.gift_show_1).trigger('create');
		}
		//alert (sample_show_1=localStorage.sample_show_1);
		//alert (sample_show_1);
		if  (sample_show_1.indexOf('undefined')==-1 ){
			$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");
		}
		//$("#doc_campaign").html(localStorage.campaign_show_1);	
		//$("#doc_gift").html(localStorage.gift_show_1);	
		//$("#doc_sample").html(localStorage.sample_show_1);	
		
		
		//$(".market").html(localStorage.visitMarketStr);
		//$(".visit_distributor").html(localStorage.visit_distributor_nameid);
		//$(".visit_type").html(localStorage.visit_type);								
		//$(".s_date").html(localStorage.scheduled_date);
		$(".market").html(localStorage.visit_market_show);
		$(".visit_client").html(localStorage.visit_client_show);
	
		var url = "#page_visit_doc";
		$.mobile.navigate(url);	
	}
	
	
	
	//================== Redirect to visit page
	if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
		$("#sch_date").val(localStorage.scheduled_date);
		
		$(".market").html(localStorage.visit_market_show);
		$(".visit_distributor").html(localStorage.visit_distributor_nameid);
		$(".visit_type").html(localStorage.visit_type);								
		$(".s_date").html(localStorage.scheduled_date);
		$(".visit_client").html(localStorage.visit_client_show);
		mobile_off_flag=1;
		
		var url = "# ";
		$.mobile.navigate(url);	
		getOrder_load();	
	}
	
	
});

 <!--============== Schedule Client Combo===========-->
$.mobile.document.on( "listviewcreate", "#schedule_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#schedule_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#schedule_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#schedule_client_combo_id-dialog", function( e ) {
	var form = $( "#schedule_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#schedule_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//------------------------------------- Unschedule market combo -----------------------------

$.mobile.document.on( "listviewcreate", "#unschedule_market_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unschedule_market_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unschedule_market_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unschedule_market_combo_id-dialog", function( e ) {
	var form = $( "#unschedule_market_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unschedule_market_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});	

<!-------------------  Unschedule Market Client/retailer list-->
$.mobile.document.on( "listviewcreate", "#unscheduled_m_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unscheduled_m_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unscheduled_m_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unscheduled_m_client_combo_id-dialog", function( e ) {
	var form = $( "#unscheduled_m_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unscheduled_m_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//-------------------------------------Delivery Distributor Combo list -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_distributor_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_distributor_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_distributor_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_distributor_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_distributor_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_distributor_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//-------------------------------------Delivery distributor client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_retailer_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_retailer_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_retailer_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_retailer_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_retailer_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_retailer_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- visit plan market -----------------------------
$.mobile.document.on( "listviewcreate", "#visit_market_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_market_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_market_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_market_cmb_id-dialog", function( e ) {
	var form = $( "#visit_market_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_market_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//------------------------------------- visit plan client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#visit_plan_client_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_plan_client_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_plan_client_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_plan_client_cmb_id-dialog", function(  e ) {
	var form = $( "#visit_plan_client_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_plan_client_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- marchandizing Item  -----------------------------

$.mobile.document.on( "listviewcreate", "#marchandizing_item_id-menu", function( e ) {
	var input,
		listbox = $( "#marchandizing_item_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#marchandizing_item_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#marchandizing_item_id-dialog", function( e ) {
	var form = $( "#marchandizing_item_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#marchandizing_item_id-listbox" );
	form 
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Market Combo---------
$.mobile.document
.on( "listviewcreate", "#se_market-menu", function( e ) {
	var input,
		listbox = $( "#se_market-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market-dialog", function( e ) {
	var form = $( "#se_market-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
//==========================================doctor===============

$.mobile.document
.on( "listviewcreate", "#se_market_doc-menu", function( e ) {
	var input,
		listbox = $( "#se_market_doc-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch_doc' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market_doc-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market_doc-dialog", function( e ) {
	var form = $( "#se_market_doc-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market_doc-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Item Combo---------
$.mobile.document
.on( "listviewcreate", "#se_item-menu", function( e ) {
	var input,
		listbox = $( "#se_item-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='itemSearch' data-type='search'></input></br>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_item-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_item-dialog", function( e ) {
	var form = $( "#se_item-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_item-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

////---------------------Set mpo Combo--------
//$.mobile.document
//.on( "listviewcreate", "#se_mpo-menu", function( e ) {
//	var input,
//		listbox = $( "#se_mpo-listbox" ),
//		form = listbox.jqmData( "filter-form" ),
//		listview = $( e.target );
//	if ( !form ) {
//		input = $( "<input id='mpoSearch' data-type='search'></input></br>" );
//		form = $( "<form></form>" ).append( input );
//		input.textinput();
//		$( "#se_mpo-listbox" )
//			.prepend( form )
//			.jqmData( "filter-form", form );
//	}
//	listview.filterable({ input: input });
//})
//.on( "pagebeforeshow pagehide", "#se_mpo-dialog", function( e ) {
//	var form = $( "#se_mpo-listbox" ).jqmData( "filter-form" ),
//		placeInDialog = ( e.type === "pagebeforeshow" ),
//		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_mpo-listbox" );
//	form
//		.find( "input" )
//		.textinput( "option", "inset", !placeInDialog )
//		.end()
//		.prependTo( destination );
//});


//=======================Report=================
function set_report_parameter() {	
	var date_from=$("#date_from").val();
	var date_to=$("#date_to").val();
	var rep_id_report=$("#se_mpo").val();
	var se_item_report=$("#se_item ").val();
	var se_market_report=$("#se_market ").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report==""){
		se_market_report="All"
	}
	if (se_item_report==""){
		se_item_report="All"
	}
	
	if (date_from.length==0){
		date_from_show="Today"
	}
	else{
		date_from_show=date_from
	}
	if (date_to.length==0){
		date_to_show="Today"
	}
	else{
		date_to_show=date_to
	}
	//alert (se_item_report);
	
	
	localStorage.date_from=date_from
	localStorage.date_to=date_to;
	localStorage.rep_id_report=rep_id_report;
	localStorage.se_item_report=se_item_report;
	localStorage.se_market_report=se_market_report;
	
	
	$("#report_market").html("Market :"+localStorage.se_market_report);
	$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo").html("MPO :"+localStorage.rep_id_report);
	$("#date_f").html("DateFrom :"+date_from_show);
	$("#date_t").html("DateTo :"+date_to_show);
	
}
function s_order_summary_report() {		
	set_report_parameter();


//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report+'&se_item_report='+localStorage.se_item_report+'&se_market_report='+localStorage.se_market_report+'&date_from='+localStorage.date_from+'&date_to='+localStorage.date_to);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report+'&se_item_report='+localStorage.se_item_report+'&se_market_report='+localStorage.se_market_report+'&date_from='+localStorage.date_from+'&date_to='+localStorage.date_to,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								//alert (result_string);
								var resultList = result_string.split('<rd>');
								//var resultListLength=resultList.length
								
								//var schedule_client_combo='<option value="0" >Select Retailer</option>'
								//alert (resultList.length);
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
							
								
								//alert (order_count);
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header").text("Sales Call and Order Summary");
								$("#sales_call").html("Sales Call:"+sales_call);
								$("#order_count").html("Order Count:"+order_count);
								$("#order_value").html("Order Value:"+order_value);
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Server Error');
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								}
						}
					  },
				  error: function(result) {			  
					 // $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
					 // $("#btn_schedule_date").show();
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function s_order_detail_report() {	
	set_report_parameter();
	//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report+'&se_item_report='+localStorage.se_item_report+'&se_market_report='+localStorage.se_market_report+'&date_from='+localStorage.date_from+'&date_to='+localStorage.date_to);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report+'&se_item_report='+localStorage.se_item_report+'&se_market_report='+localStorage.se_market_report+'&date_from='+localStorage.date_from+'&date_to='+localStorage.date_to,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								//alert (result_string);
								var resultList = result_string.split('<rd>');
								//var resultListLength=resultList.length
								
								//var schedule_client_combo='<option value="0" >Select Retailer</option>'
								//alert (resultList.length);
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
								var rep_detail=resultList[3];
							
								
								//alert (order_count);
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#report_header").text("Sales Call and Order Detail");
								
								$("#sales_call").html("Sales Call:"+sales_call);
								$("#order_count").html("Order Count:"+order_count);
								$("#order_value").html("Order Value:"+order_value);
								//alert (rep_detail)
								$("#rep_detail").html(rep_detail);
								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Server Error');
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								}
						}
					  },
				  error: function(result) {			  
					 // $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
					 // $("#btn_schedule_date").show();
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}
//========================Doctor report
function set_report_parameter_doctor() {	
	var date_from_doc=$("#date_from_doc").val();
	var date_to_doc=$("#date_to_doc").val();
	var rep_id_report_doc=$("#se_mpo_doc").val();
	var se_item_report_doc=$("#se_item_doc").val();
	var se_market_report_doc=$("#se_market_doc").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report_doc==""){
		se_market_report_doc="All"
	}
	
	
	se_item_report="All"
	
	//alert (date_from.length)
	if (date_from_doc.length==0){
		date_from_show_doc="Today"
	}
	else{
		date_from_show_doc=date_from_doc
	}
	if (date_to_doc.length==0){
		date_to_show_doc="Today"
	}
	else{
		date_to_show_doc=date_to_doc
	}
	//alert (se_item_report);
	
	
	localStorage.date_from_doc=date_from_doc
	localStorage.date_to_doc=date_to_doc;
	localStorage.rep_id_report_doc=rep_id_report_doc;
	localStorage.se_item_report_doc=se_item_report_doc;
	localStorage.se_market_report_doc=se_market_report_doc;
	
	
	$("#report_market_doctor").html("Market :"+localStorage.se_market_report_doc);
	//$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo_doctor").html("MPO :"+localStorage.rep_id_report_doc);
	$("#date_f_doctor").html("DateFrom :"+date_from_show_doc);
	$("#date_t_doctor").html("DateTo :"+date_to_show_doc);
	//alert (date_to_show)
}




function summary_report_doctor() {		
	set_report_parameter_doctor();
	$("#rep_detail_doctor").html('');
	

//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								//alert (result_string);
								var resultList = result_string.split('<rd>');
								//var resultListLength=resultList.length
								
								//var schedule_client_combo='<option value="0" >Select Retailer</option>'
								//alert (resultList.length);
								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
							
								
								//alert (order_count);
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header").text("SDoctor Visit Summary");
								$("#visit_count_doctor").html("visit Count:"+visit_count);
								//$("#visit_withAtt_doctor").html("Visit With Attribute:"+visit_with_attribute);
								//$("#visit_withoutAtt_doctor").html("Visit Without Attribute:"+visit_without_attribute);
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Server Error');
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
					 // $("#btn_schedule_date").show();
					 // $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function detail_report_doctor() {	
	set_report_parameter_doctor();


//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								//alert (result_string);
								var resultList = result_string.split('<rd>');
								//var resultListLength=resultList.length
								
								//var schedule_client_combo='<option value="0" >Select Retailer</option>'
								//alert (resultList.length);
								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
								var report_detal =resultList[3];
							
								
								//alert (order_count);
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header").text("SDoctor Visit Detail");
								
								
								
								$("#visit_count_doctor").html("visit Count:"+visit_count);
							//	$("#visit_withAtt_doctor").html("Visit With Attribute:"+visit_with_attribute);
							//	$("#visit_withoutAtt_doctor").html("Visit Without Attribute:"+visit_without_attribute);
								
								$("#rep_detail_doctor").html('<table width="300px" border="0" cellpadding="0" cellpadding="0"><tr><td>'+report_detal+'</td></tr></table>');
								
								
								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Server Error');
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
					 // $("#btn_schedule_date").show();
					 // $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}
