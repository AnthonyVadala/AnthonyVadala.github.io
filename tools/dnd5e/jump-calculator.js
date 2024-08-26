$(window).on('load', function() {
	$("input").keyup(updateOutput);
	$("input").change(updateOutput);
	updateOutput();
});

function updateOutput() {
	var str_mod = Math.floor($("#STR").val()/2-5);
	var dex_mod = Math.floor($("#DEX").val()/2-5);
	var height = $("#heightFT").val() * 1 + $("#heightIN").val()/12;

	var lateLongMod = 0;
	var lateHighMod = 0;
	var runningLongMod = 0;
	var runningHighMod = 0;
	var globalMultiplier = 1;
	
	if($("#tiger_barbarian").is(':checked')) lateLongMod += 10;
	if($("#tiger_barbarian").is(':checked')) lateHighMod += 3;
	if($("#remarkable_athlete").is(':checked')) runningLongMod += str_mod;
	if($("#step_of_the_wind").is(':checked')) globalMultiplier *= 2;
	if($("#jump_spell").is(':checked')) globalMultiplier *= 3;
	if($("#boots_of_springing").is(':checked')) globalMultiplier *= 3;
	if($("#athlete_feat").is(':checked')) {
		$(".info").html("(5 feet of movement)");
	} else {
		$(".info").html("(10 feet of movement)");
	}
	if($("#second_story_work").is(':checked')) {
		$("#DEXopt").show();
	} else {
		$("#DEXopt").hide();
	}
	if($("#second_story_work").is(':checked')) runningLongMod += dex_mod;
	if($("#second_story_work").is(':checked')) runningHighMod += dex_mod;

	$("#run_horizontal").html(globalMultiplier * Math.floor($("#STR").val()*1 + lateLongMod + runningLongMod));
	$("#stand_horizontal").html(globalMultiplier * Math.floor($("#STR").val()*0.5 + lateLongMod));
	$("#obstacle").html(globalMultiplier * Math.floor($("#STR").val()*2.5)/10);
	$("#run_vertical").html(globalMultiplier * (3+str_mod + lateHighMod + runningHighMod));
	$("#stand_vertical").html(globalMultiplier * ((3+str_mod)/2 + lateHighMod));
	$("#run_grab").html(Math.floor((globalMultiplier * (3+str_mod + lateHighMod + runningHighMod) + height*1.5)*10)/10);
	$("#stand_grab").html(Math.floor(((globalMultiplier * (3+str_mod)/2 + lateHighMod) + height*1.5)*10)/10);
}