# ubuntuのイメージをダウンロード
FROM ubuntu

# ワークディレクトリ
WORKDIR /src

# timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# apt
RUN apt update
RUN apt upgrade -y

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \ 
    apt install unzip && unzip awscliv2.zip && ./aws/install && \
    rm awscliv2.zip && rm -rf aws
