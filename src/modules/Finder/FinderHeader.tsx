import React, { useMemo } from "react"
import { Button } from "../../components/Button"
import { Container } from "../../components/Container"
import { HeaderL } from "../../components/Header"
import { Input } from "../../components/Input"
import { background } from "../../constants/colors.constants"
import { defaultHorizontalPadding, defaultBorderRadius } from "../../constants/css.constants"
import { Dictionary } from "../../constants/Dictionary"
import { useAuth } from "../../hooks/useAuth"
import { useGoogle } from "../../hooks/useGoogle"
import useMediaQuery from "../../hooks/useMediaQuery"

export const FinderHeader = () => {
  const { user, clearUser } = useAuth()
  const { search, saveSearch, changeRequestProcessingStatus, clearSearchAndImagesState } = useGoogle()
  const isMobile = useMediaQuery("(max-width: 560px)")

  const greetings = useMemo(() => `Hello, ${user}`, [user])

  const onSignoutClick = () => {
    clearUser()
    clearSearchAndImagesState()
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveSearch(e.target.value)
  }

  const onSearchEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeRequestProcessingStatus(true)
    }
  }

  const onSearchButtonClick = () => {
    changeRequestProcessingStatus(true)
  }

  return (
    <Container>
      <Container
        customHeight={{ value: 150, metric: "px" }}
        colorized={background}
        padding={{ left: defaultHorizontalPadding, right: defaultHorizontalPadding }}
        flex
        flexDirection={isMobile ? "column" : "row"}
        verticalAlign="center"
        horizontalAlign={isMobile ? "space-around" : "space-between"}>
        <div>
          <HeaderL data-testid="finder_greetings_header">{greetings}</HeaderL>
        </div>
        <div>
          <Input
            data-testid="search_input"
            placeholder={Dictionary.SearchInputPlaceholder}
            customWidth={{ value: 250, metric: "px" }}
            value={search}
            onChange={onSearchChange}
            onKeyDown={onSearchEnterKeyPress}
          />
          <Button onClick={onSearchButtonClick}>{Dictionary.SearchButton}</Button>
        </div>
        <div>
          <Button
            data-testid="signout_button"
            onClick={onSignoutClick}
            round={{
              upperRight: defaultBorderRadius,
              upperLeft: defaultBorderRadius,
              lowerLeft: defaultBorderRadius,
              lowerRight: defaultBorderRadius,
            }}>
            {Dictionary.SignOutButton}
          </Button>
        </div>
      </Container>
    </Container>
  )
}
