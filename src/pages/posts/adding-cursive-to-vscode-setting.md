---
title: Adding cursive to vscode setting
date: 2020-05-12T02:37:45.786Z
hide_header: false
template: post
---
## vscode setting



```
{
    "editor.fontFamily": "'Fira Code iScript', 'FiraCode',  'JetBrains Mono',Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontWeight": "100",
    "go.formatTool": "goimports",
    "editor.minimap.maxColumn": 30,
    "go.useLanguageServer": true,
    "editor.minimap.enabled": false,
    "breadcrumbs.enabled": true,
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": true,
    "window.zoomLevel": 0,
    "workbench.colorTheme": "Winter is Coming (Dark Black)",
    "editor.fontSize": 15,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": [
                    //following will be in italic 
                    "comment",
                    "keyword", //import, export, return…
                    "storage.modifier", //static keyword
                    "storage.type.class.js", //class keyword
                  ],
                  "settings": {
                      
                    "fontStyle": "italic"
                  }
            },
            {
                "scope": [
                    //following will nor be in italic 
                    "entity.name.function",                   
                    "variable.other.property",
                    "variable.other"
                  ],
                  "settings": {
                    "fontStyle": ""
                  }
            }
        ]
    }
}
```

## zshrc

```
  # Set Spaceship ZSH as a prompt
  autoload -U promptinit; promptinit
  prompt spaceship
# ORDER
SPACESHIP_PROMPT_ORDER=(
  time     #
  vi_mode  # these sections will be
  user     # before prompt char
  host     #
  dir
  git
  node
  #ruby
  # xcode
  # swift
  golang
  dotnet
  docker
  # kubecontext
 # venv
 # pyenv
 # jobs
  # exit_code
  line_sep
  char
)
SPACESHIP_TIME_SHOW=true

# USER
SPACESHIP_USER_PREFIX="" # remove `with` before username
SPACESHIP_USER_SUFFIX="" # remove space before host

# HOST
# Result will look like this:
#   username@:(hostname)
SPACESHIP_HOST_PREFIX="@:("
SPACESHIP_HOST_SUFFIX=") "

# DIR
SPACESHIP_DIR_PREFIX='' # disable directory prefix, cause it's not the first section
# SPACESHIP_DIR_TRUNC='1' # show only last directory
# SPACESHIP_CHAR_PREFIX="\n"
# SPACESHIP_CHAR_SUFFIX="\n"

export FONTAWESOME_NPM_AUTH_TOKEN=B5E4DB4B-D817-47A6-9B3A-713FF932055F
export DOCKER_BUILDKIT=1 
export COMPOSE_DOCKER_CLI_BUILD=1


```