import { Navigation } from '../navigation/Navigation'
import classes from './Header.module.css'

export const Header = () => {
	return (
		<>
			<header className={classes['header']}>
				<Navigation />
				<div className={classes['wrapper']}>
					<span className={classes['marvel']}>Marvel</span>
					<span className={classes['studios']}>Studios</span>
				</div>
			</header>
		</>
	)
}

//=============================
{
	/* <header className={classes['button']}>
<div className={classes['container']}>
	<div className={classes['menu']}></div>
</div>

<div
	className={classes['header__animation run-animation']}
	id='animate'
>
	<div className={classes['header-animation__logo']}>
		<span className={classes['header-animation__site-name']}>
			Marvel
		</span>
		<span className={classes['header-animation__site-sub']}>
			Explorer
		</span>

		<p className={classes['header-animation__description']}>
			Привет! На этом сайте ты сможешь насладится быстрым доступом к
			информации о героях вселенной Marvel, не отвлекаясь на лишние
			детали. Просто герои и их силы.
		</p>
		<div className={classes['header-animation__restart']}>Restart</div>
	</div>
</div>
<div className={classes['images']}></div>
</header> */
}
