# OverView

**programing x houseplants**  
Github API get specified　repository.  
Expressing the maturity level of a project using a tree.  


# Construction
1. Github API Get specified　repository Date  

Get Datas  
 - Tree
 - Commit
 - PullRequest
 - Discossion


2. Print tree
DateDate



# 概要

**プログラミング × 観葉植物**
githubと連携して特定のリポジトリの  
コードからどんなプロジェクトかを  
木で表示します  


# 仕組み

1. 取得
読み込み時点から1ヶ月間のリポジトリのデータから  
PullRequest,issues,commit  
もしあるならDIscossionを取得する  

2. 描画
枝-PullRequest  
葉-commit  
落ち葉  
    議論  
    issuessの  
        建てられ具合  
        解決量  


として木でそのリポジトリの活動量を表現するシステムです