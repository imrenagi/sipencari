package block

import "strings"

type (
	Website struct {
		URL         string `json:"url"`
		Description string `json:"description"`
	}
)

func IsSiteBlocked(site Website) bool {
	if strings.Contains(site.Description, "asing") {
		return true
	}

	return false
}
