package ags4

import (
//"encoding/json"
//"io/ioutil"
//"sort"
//"fmt"
)

type Heading struct {
	Code        string       ` json:"code" `
	Description string       ` json:"description" `
	DataType    string       ` json:"data_type" `
	Unit        string       ` json:"unit" `
	Example     string       ` json:"example" `
	RevDate     string       ` json:"rev_date" `
	Sort        int          ` json:"sort" `
	Status      string       ` json:"status" `
	Picklist    []AbbrevItem ` json:"picklist" `
}

