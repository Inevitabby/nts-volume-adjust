// ==UserScript==
// @name         NTS.live Volume Adjust
// @namespace    https://raw.githubusercontent.com/Inevitabby/nts-volume-adjust/refs/heads/main/nts-volume-adjust.user.js
// @version      1.0
// @description  Adjust volume of music on NTS.live.
// @author       Inevitabby
// @match        https://www.nts.live/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	const VOLUME = 0.3;

	function poll() {
		const AUDIO_ELEM = document.querySelector(".soundcloud-player audio");
		if (!AUDIO_ELEM) return setTimeout(poll, 500);

		AUDIO_ELEM.volume = VOLUME;
		AUDIO_ELEM.addEventListener("volumechange", () => {
			if (AUDIO_ELEM.volume === VOLUME) return;
			AUDIO_ELEM.volume = VOLUME;
		});
	}

	poll();
})();
