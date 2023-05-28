// ==UserScript==
// @name        AutoClick Bonus - twitch.tv
// @namespace   Violentmonkey Scripts
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.0
// @author      https://github.com/dev-quentin
// @description 15/11/2021, 22:15:31
// ==/UserScript==

const TIME = 1000;
const SELECTOR = 'path[d="M16.503 3.257 18 7v11H2V7l1.497-3.743A2 2 0 0 1 5.354 2h9.292a2 2 0 0 1 1.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z"]';

var a="function";var b="getParent";var c="node";var d="return";var e="node";var f="parentNode";var g="null";
eval(function(s, c, a) {while(c--) {s = s.replace(new RegExp('(?!-@)(' + c + ')(?!@-)', 'g'), a[c])}s = s.replaceAll('-@', '');s = s.replaceAll('@-', '');return s;}(`0 1(2) {3 4.5 ?? 6;}`, 7, `${a}|${b}|${c}|${d}|${e}|${f}|${g}|`.split('|')));


var a="setInterval";var b="var";var c="node";var d="document";var e="querySelector";var f="SELECTOR";var g="if";var h="node";var i="return";var j="while";var k="node";var l="nodeName";var m="BUTTON";var n="node";var o="getParent";var p="node";var q="if";var r="node";var s="null";var t="break";var u="if";var v="node";var w="node";var x="click";var y="TIME";
eval(function(s, c, a) {while(c--) {s = s.replace(new RegExp('(?!-@)(' + c + ')(?!@-)', 'g'), a[c])}s = s.replaceAll('-@', '');s = s.replaceAll('@-', '');return s;}(`0(() => {1 $2 = 3.4(5);6(!$7) {8;}9 ($10.11 != "12") {$13 = 14($15);16 ($17 === 18) {19;}}20 ($21) {$22.23();}}, 24);`, 25, `${a}|${b}|${c}|${d}|${e}|${f}|${g}|${h}|${i}|${j}|${k}|${l}|${m}|${n}|${o}|${p}|${q}|${r}|${s}|${t}|${u}|${v}|${w}|${x}|${y}|`.split('|')))