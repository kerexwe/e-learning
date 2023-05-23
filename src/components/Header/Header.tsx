import React, { useEffect, useMemo, useState } from "react";
import { useTranslation , Trans } from "react-i18next";
import css from "./Header.module.scss";
import LogoLight from "./assets/logo-light.svg";
import LogoDark from "./assets/logo-dark.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import downArrowLight from "./assets/DownArrow-light.svg";
import downArrowDark from "./assets/DownArrow-Dark.svg";
import SearchLight from "./assets/search-light.svg";
import SearchDark from "./assets/search-dark.svg";
import LanguageLight from "./assets/language-light.svg";
import LanguageDark from "./assets/language-dark.svg";
import sun from "./assets/lightMode.svg";
import moon from "./assets/darkMode.svg";
import Button from "./../Button/Button";
import MediaQuery from "react-responsive";
import burger_icon_light from "./assets/burger_icon.svg";
import burger_icon_dark from "./assets/burger_icon_dark.svg";
import { AppDispatch, AppSelector } from "../../redux";
import { changeTheme } from "../../redux/themeSlice";


const options : Record<string, string> = {
	Home: "/",
	Blog: "/Blog",
	CoursesList: "/Courses/list",
	Contacts: "/Contacts",
	AboutUs: "/AboutUs",
};

const Header = () => {

	const dispatch = AppDispatch();
	const themeDark = AppSelector((state) => state.themeDark)
	const { t, i18n } = useTranslation();


	const navigate = useNavigate();
	const [PagesOpen, setPagesOpen] = useState<boolean>(false);
	const [modalMobile, setModalMobile] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const { pathname } = useLocation();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (modalMobile) {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.height = "auto";
			document.body.style.overflow = "visible";
		}
	},[modalMobile]);

	const handleScroll = () => {
		if (window.pageYOffset > 1) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const toggle = (set: React.Dispatch<React.SetStateAction<boolean>>): void => {
		set((elem: boolean) => !elem);
	};


	return (
		<header
			id="Header"
			className={`${css.header} container ${isScrolled ? css.scrolled : ""}`}>
			<MediaQuery maxWidth={1200}>
				<nav className={css.mobile_header}>
					<img
						src={
							themeDark
								? LogoDark
								: LogoLight
						}
						alt="logo"
					/>
				</nav>
				<div className={css.header_left}>
					{modalMobile ? (
						<>
							<Button onClick={() => dispatch(changeTheme())}
								text={
									<img
										style={{ width: "18px", height: 18 + "px" }}
										src={
											themeDark ? moon : sun
										}
										alt="screenMode"
									/>
								}
							/>

							<Button onClick={() => i18n.changeLanguage( i18n.resolvedLanguage === "en" ? "ru" : "en")} text={ <img className={css.darkLightMode_icon}
										src={
											themeDark
												? LanguageDark
												: LanguageLight
										}
										alt="language" />
								}
							/>
						</>
					) : null}

					<Button onClick={() => toggle(setModalMobile)}
						text={
							<img
								src={
									themeDark
										? burger_icon_dark
										: burger_icon_light
								}
								alt="search"
							/>
						}
					/>
					<Button
						text={
							<img
								src={
									themeDark
										? SearchDark
										: SearchLight
								}
								alt="search"
							/>
						}
					/>
				</div>
				<div
					className={`${css.modal_header} ${
						modalMobile ? css.open_modal : null }`}>
					<Link to={"/"} className={css.nav_links}>
						{t("header.Home")}
					</Link>
					<Link to={"/Components"} className={css.nav_links}>
						{t("header.Components")}
					</Link>
					<p className={css.Pages} onClick={() => toggle(setPagesOpen)}>
						{t("header.Pages")}
						<img
							className={PagesOpen ? css.Rotate_180_degree : null}
							src={
								themeDark
									? downArrowDark
									: downArrowLight
							}
							alt=""
						/>
						{PagesOpen ? (
							<div className={css.modal_pages_mobile}>
								{Object.keys(options).map((option : any ) => (
									<Button
										key={option}
										href={options[option]}
										text={t(`header.${option}`)}
										onClick={() => {
											navigate(options[option]);
											setPagesOpen(false);
										}}>
										{option}
									</Button>
								))}
							</div>
						) : null}
					</p>
					<Link to={"/Documentation"} className={css.nav_links}>
						{t("header.Documentation")}
					</Link>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={1201}>
				<nav>
					<img
						src={
							themeDark
								? LogoDark
								: LogoLight
						}
						alt="logo"
					/>
					<Link to={"/"} className={css.nav_links}>
						{t("header.Home")}
					</Link>
					<Link to={"/Components"} className={css.nav_links}>
						{t("header.Components")}
					</Link>
					<p className={css.Pages} onClick={() => toggle(setPagesOpen)}>
						{t("header.Pages")}
						<img
							className={PagesOpen ? css.Rotate_180_degree : null}
							src={
								themeDark
									? downArrowDark
									: downArrowLight
							}
							alt=""
						/>
					</p>
					<Link to={"/Documentation"} className={css.nav_links}>
						{t("header.Documentation")}
					</Link>
				</nav>
				<div className={css.Pages_options + ` ${PagesOpen ? "" : "hide"}`}>
					{Object.keys(options).map((option) => (
						<Button
							key={option}
							className="main_text"
							href={options[option]}
							text={t(`header.${option}`)}
							onClick={() => {
								navigate(options[option]);
								setPagesOpen(false);
							}}>
							{option}
						</Button>
					))}
				</div>

				<div className={css.header_left}>
					<Button
						onClick={() => dispatch(changeTheme())}
						text={
							<img
								style={{ width: "18px", height: 18 + "px" }}
								src={themeDark ? moon : sun}
								alt="screenMode"
							/>
						}
					/>
					<Button
						text={
							<img
								src={
									themeDark
										? SearchDark
										: SearchLight
								}
								alt="search"
							/>
						}
					/>
					<Button
						onClick={() =>
							i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ru" : "en")
						}
						text={
							<img
								className={css.darkLightMode_icon}
								src={
									themeDark
										? LanguageDark
										: LanguageLight
								}
								alt="language"
							/>
						}
					/>
					<Button
						text={<p className="main_text">{t("header.Login")}</p>}
					/>
					<Button
						type={
							themeDark ? "dark" : "white"
						}
						text={t("header.JoinUs")}
					/>
				</div>
			</MediaQuery>
		</header>
	);
};

export default Header;
