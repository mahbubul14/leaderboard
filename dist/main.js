/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import 'lodash';\n// import './style.css';\n\nconst players = [];\n\nconst table = document.querySelector('.table');\nconst url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7p06s7iTb0rdCtnItvZ9/scores/';\nconst yourName = document.getElementById('name');\nconst score = document.getElementById('score');\nconst refresh = document.getElementById('refresh');\nconst submit = document.getElementById('submit')\n\nconst produceResult = (results) => {\n  const childEle = Array.from(document.querySelectorAll('.table div'));\n  childEle.forEach((el) => {\n    el.remove();\n  });\n  results.forEach((result) => {\n    const content = `${result.user}: ${result.score}`;\n\n    const list = document.createElement('div');\n    list.className = 'list';\n    list.innerText = content;\n    table.appendChild(list);\n  });\n}\n\nconst sendScores = async () => {\n  const response = await (await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      user: yourName.value,\n      score: score.value,\n    }),\n  })).json();\n  yourName.value = '';\n  score.value = '';\n  return response;\n};\n\nconst getScores = async () => {\n  const response = await (await fetch(url)).json();\n  results = response.result;\n  produceResult(results);\n};\n\ngetScores();\n\nsubmit.addEventListener('click', () => {\n  sendScores();\n});\n\nrefresh.addEventListener('click', () => {\n  document.querySelector('.table').innerHtml = '';\n  getScores();\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;