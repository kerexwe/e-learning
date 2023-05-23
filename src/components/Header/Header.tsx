import React, { useEffect, useState, Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, AppSelector } from "../../redux";
import { changeTheme } from "../../redux/themeSlice";
import MediaQuery from "react-responsive";
import Button from "./../Button/Button";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import css from "./Header.module.scss";
import LogoLight from "./assets/logo-light.svg";
import LogoDark from "./assets/logo-dark.svg";
import downArrowLight from "./assets/DownArrow-light.svg";
import downArrowDark from "./assets/DownArrow-Dark.svg";
import SearchLight from "./assets/search-light.svg";
import SearchDark from "./assets/search-dark.svg";
import LanguageLight from "./assets/language-light.svg";
import LanguageDark from "./assets/language-dark.svg";
import burger_icon_light from "./assets/burger_icon.svg";
import burger_icon_dark from "./assets/burger_icon_dark.svg";
import sound_on from "./assets/sound_on.mp3";
import sound_off from "./assets/sound_off.mp3";


const options: Record<string, string> = {
  Home: "/",
  Blog: "/Blog",
  CoursesList: "/Courses/list",
  Contacts: "/Contacts",
  AboutUs: "/AboutUs",
};

const Header = () => {
  const dispatch = AppDispatch();
  const themeDark = AppSelector((state) => state.themeDark);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [PagesOpen, setPagesOpen] = useState<boolean>(false);
  const [modalMobile, setModalMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
  }, [modalMobile]);

  const handleScroll = () => {
    if (window.pageYOffset > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggle = (set: Dispatch<React.SetStateAction<boolean>>): void => {
    set((elem: boolean) => !elem);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === `${themeDark ? "dark" : "light"}`
              ? "#8796A5"
              : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor:
        theme.palette.mode === `${themeDark ? "dark" : "light"}`
          ? "#003892"
          : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));


  function switchHandler() {
    new Audio(themeDark ? sound_on : sound_off).play()
    dispatch(changeTheme());
  }


  return (
    <header
      id="Header"
      className={`${css.header} container ${isScrolled ? css.scrolled : ""}`}
    >
      <MediaQuery maxWidth={1200}>
        <nav className={css.mobile_header}>
          <img src={themeDark ? LogoDark : LogoLight} alt="logo" />
        </nav>
        <div className={css.header_left}>
          {modalMobile ? (
            <>
              <FormGroup
                onChange={switchHandler}
                className={`${css.switch__changeTheme}`}
              >
                <FormControlLabel
                  sx={{
                    m: 0,
                  }}
                  control={
                    <MaterialUISwitch sx={{ m: 1 }} checked={themeDark} />
                  }
                  label=""
                />
              </FormGroup>

              <Button
                onClick={() =>
                  i18n.changeLanguage(
                    i18n.resolvedLanguage === "en" ? "ru" : "en"
                  )
                }
                text={
                  <img
                    className={css.darkLightMode_icon}
                    src={themeDark ? LanguageDark : LanguageLight}
                    alt="language"
                  />
                }
              />
            </>
          ) : null}

          <Button
            onClick={() => toggle(setModalMobile)}
            text={
              <img
                src={themeDark ? burger_icon_dark : burger_icon_light}
                alt="search"
              />
            }
          />
          <Button
            text={
              <img src={themeDark ? SearchDark : SearchLight} alt="search" />
            }
          />
        </div>
        <div
          className={`${css.modal_header} ${
            modalMobile ? css.open_modal : null
          }`}
        >
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
              src={themeDark ? downArrowDark : downArrowLight}
              alt=""
            />
            {PagesOpen ? (
              <div className={css.modal_pages_mobile}>
                {Object.keys(options).map((option: any) => (
                  <Button
                    key={option}
                    text={t(`header.${option}`)}
                    onClick={() => {
                      navigate(options[option]);
                      setPagesOpen(false);
                    }}
                  >
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
          <img src={themeDark ? LogoDark : LogoLight} alt="logo" />
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
              src={themeDark ? downArrowDark : downArrowLight}
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
              text={t(`header.${option}`)}
              onClick={() => {
                navigate(options[option]);
                setPagesOpen(false);
              }}
            >
              {option}
            </Button>
          ))}
        </div>
        <div className={css.header_left}>
          <FormGroup
            onChange={switchHandler}
            className={`${css.switch__changeTheme}`}
          >
            <FormControlLabel
              sx={{
                m: 0,
              }}
              control={<MaterialUISwitch sx={{ m: 1 }} checked={themeDark} />}
              label=""
            />
          </FormGroup>
          <Button
            text={
              <img src={themeDark ? SearchDark : SearchLight} alt="search" />
            }
          />
          <Button
            onClick={() =>
              i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ru" : "en")
            }
            text={
              <img
                className={css.darkLightMode_icon}
                src={themeDark ? LanguageDark : LanguageLight}
                alt="language"
              />
            }
          />
          <Button text={<p className="main_text">{t("header.Login")}</p>} />
          <Button
            type={themeDark ? "dark" : "white"}
            text={t("header.JoinUs")}
          />
        </div>
      </MediaQuery>
    </header>
  );
};

export default Header;
