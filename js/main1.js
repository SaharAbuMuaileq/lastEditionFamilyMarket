$(document).ready(function(){
 $('.productSection div').click(function(){
     $('.classPart').toggle();
 });

 $('.classPart a.diary').hover(function(){
     $('.showDetails').html($('.diaryDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.drinks').hover(function(){
     $('.showDetails').html($('.drinksDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.clean').hover(function(){
     $('.showDetails').html($('.cleanDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.jam').hover(function(){
     $('.showDetails').html($('.jamDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.rice').hover(function(){
     $('.showDetails').html($('.riceDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.biscuit').hover(function(){
     $('.showDetails').html($('.biscuitDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.macaroni').hover(function(){
     $('.showDetails').html($('.macaroniDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.spices').hover(function(){
     $('.showDetails').html($('.spicesDetails').html()).css({'color':'#402F27'});
 });
 $('.classPart a.chepsi').hover(function(){
     $('.showDetails').html($('.chepsiDetails').html()).css({'color':'#402F27'});
 });

//  animation for boxes



});