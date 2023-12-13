<script setup lang="ts">

</script>

<template>
	<section class="main">
		<section class="login">
			<form class="form form_login">
				<fieldset class="form__fieldset form__fieldset_login">
					<legend class="form__legend">
						<h2>Вход</h2>
						<span>подзаголовочек</span>
					</legend>

					<ul class="form__fields">
						<li class="form__field">
							<label class="form__label form__label_email">Ваш email</label>

							<input type="email" class="form__input form__input_email" aria-invalid="true"
									aria-describedby="email-help-text" autocomplete="username" placeholder="электронная почта" required>

							<span id="email-help-text" role="tooltip" class="a11y-tooltip">Текст подсказки</span>
						</li>

						<li class="form__field">
							<label class="form__label form__label_password">Ваш пароль</label>

							<input type="password" class="form__input form__input_password" aria-invalid="true"
									aria-describedby="password-help-text" autocomplete="current-password" id="current-password"
									placeholder="пароль" required>

							<span id="password-help-text" role="tooltip"
									class="a11y-tooltip">Текст подсказки или ошибки прям длинненький такой, длиннющий, ух</span>
						</li>
					</ul>
				</fieldset>

				<button type="submit" class="form__button">Войти</button>
			</form>

			<p>Зарегистрироваться (ссылка/кнопка)</p>
		</section>

		<section class="create">
			<form class="form form_create">
				<fieldset class="form__fieldset form__fieldset_create">
					<legend class="form__legend">
						<h2>Создать аккаунт</h2>
						<span>подзаголовочек</span>
					</legend>

					<label class="form__label form__label_username"></label>
					<span>Ваше имя</span>
					<input type="text" class="form__input form__input_username" aria-invalid="true"
							aria-describedby="username-help-text">
					<span id="username-help-text" role="tooltip" class="a11y-tooltip">Текст подсказки</span>

					<label class="form__label form__label_email"></label>
					<span>Ваш email</span>
					<input type="text" class="form__input form__input_email" aria-invalid="true"
							aria-describedby="email-help-text">
					<span id="email-help-text" role="tooltip" class="a11y-tooltip">Текст подсказки</span>

					<label class="form__label form__label_password"></label>
					<span>Ваш пароль</span>
					<input type="password" class="form__input form__input_password" aria-invalid="true"
							aria-describedby="password-help-text" autocomplete="new-password" id="new-password">
					<span id="password-help-text" role="tooltip" class="a11y-tooltip">Текст подсказки</span>

					<!--					<label class="form__label form__label_confirm-password"></label>-->
					<!--					<span>Подтверждение пароля</span>-->
					<!--					<input type="text" class="form__input form__input_confirm-password" aria-invalid="true"-->
					<!--							aria-describedby="confirm-password-help-text">-->
					<!--					<span id="confirm-password-help-text" role="tooltip" class="a11y-tooltip">Текст подсказки</span>-->

					<label class="form__label form__label_accept"></label>
					<span>Согласен с правилами</span>
					<input id="accept" type="checkbox" name="accept" value="accept">

				</fieldset>

				<button type="submit">Создать</button>

			</form>

			<p>Войти (ссылка/кнопка)</p>
		</section>
	</section>
</template>

<style scoped lang="stylus">


.main
	filter grayscale()
	background-color azure
	@media screen and (min-width 768px)
		padding 44px calc((100vw - 768px + 88px) / 2)

.form
	display grid
	gap 22px
	padding 22px
	background-color bisque

.form__fieldset
	display grid
	gap 22px
	padding 0
	background-color lavender
	border none

.form__legend
	float left

h2
	margin-bottom 11px

.form__fields
	display grid
	gap 22px
	margin 0
	padding 0
	list-style-type none

.form__field
	position relative
	display grid
	grid-template-rows auto 44px auto
	align-items center
	background-color lightpink

.form__label
	position relative
	justify-self start
	padding 6px 11px

.form__input
	height 44px
	padding 0 11px
	border 1px solid #999
	border-radius 4px

.form__input:valid + .form__label
	color #333

.form__input:focus + .form__label
	color #333

.a11y-tooltip
	padding 6px 11px
	background-color rgba(0, 191, 255, 0.1)

button:focus,
input:focus
	outline none
	border-color royalblue

.form__button
	height 44px
	border 1px solid #999
	border-radius 4px

button
	cursor pointer
</style>