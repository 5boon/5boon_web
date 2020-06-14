<template>
    <div class="section1-wrapper">
        <div class="inner split">
            <section>
                <h2>오늘의 기분</h2>
                <p>내가 오늘 기록한 감정에 따라 메인 화면이 바뀝니다. 내 감정을 기록하고 공유하세요.
                </p>
                <a href="#" class="button alt">Learn more</a>
            </section>
            <section>
                <ul class="checklist">
                    <li>귀여운 감정표현으로 지금의 기분을 기록하세요</li>
                    <li>친구들에게 내 감정을 공유해보세요</li>
                    <li>다른사람들의 기분을 확인해보세요</li>
                    <li>간단한 일기처럼 그때그때의 기분을 글로 남겨보세요</li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "section1"
    }
</script>

<style scoped>
    .section1-wrapper {
		padding: 7em 0 3em 0;
		position: relative;
        height: 350px;
        background: white;
	}

    .section1-wrapper > .inner {
        margin-left: auto;
        margin-right: auto;
        width: 70em;
        max-width: 100%;
    }

    .split {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding-bottom: 2em;
        padding-left: 110px
	}

    .split > * {
        width: 50%;
    }

    .split > *:nth-child(odd) {
        padding-right: 3em;
    }

    .split > *:nth-child(even) {
        padding-left: 3em;
        border-left: solid 2px;
    }

    .split > * > :last-child,
    .split > * > :last-child > :last-child,
    .split > * > :last-child > :last-child > :last-child {
        margin-bottom: 0;
    }

	.split > :nth-child(even) {
		border-left-color: rgba(144, 144, 144, 0.25);
	}

    ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

    ul li {
        font-family: 'Noto Sans KR', sans-serif;
        padding-left: 0.5em;
        font-size: large;
    }

    ul.alt li {
        border-top: solid 1px;
        padding: 0.5em 0;
    }

    ul.alt li:first-child {
        border-top: 0;
        padding-top: 0;
    }

    ul.checklist {
        list-style: none;
        padding-left: 0;
    }

    ul.checklist li {
        text-decoration: none;
        margin-bottom: 1.5em;
        padding-left: 0;
    }

    ul.checklist li:before {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Noto Sans KR', sans-serif;
        font-style: normal;
        font-weight: normal;
        text-transform: none !important;
    }

    ul.checklist li:before {
        content: '\f00c';
        margin-right: 0.75em;
    }

    ul.actions {
        cursor: default;
        list-style: none;
        padding-left: 0;
    }
</style>
