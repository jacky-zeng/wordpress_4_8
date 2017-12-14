# Wordpress

[![Donate][ico-donate]][link-donate]

第一个版本用的wordpress-4.8-zh_CN

### database change  (数据库修改记录)

```
   //记录访问次数
   alter table wp_posts add column visit_times int(11) unsigned not null default 0 AFTER comment_count;
   
   //记录访问者信息
   CREATE TABLE `wp_visitors` (
     `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
     `post_id` int(11) NOT NULL DEFAULT '0' COMMENT '文章id',
     `client_ip` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '' COMMENT '访问者ip',
     `serverTime` datetime DEFAULT NULL,
     `serverYear` int(11) NOT NULL DEFAULT '0',
     `serverMonth` int(11) NOT NULL DEFAULT '0',
     `serverDay` int(11) NOT NULL DEFAULT '0',
     PRIMARY KEY (`ID`),
     KEY `post_id_index` (`post_id`)
   ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
   
```

## Related
    - [view-project-url](https://www.zengyanqi.com)

## Support

If you want get more infomation, please email 1017798347@qq.com

[ico-donate]: https://img.shields.io/badge/-%E7%BA%A2%E5%8C%85-red.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8%2F9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOTE0NEQ3OTdBREYxMUU2QkVGRkQ0ODM3M0M3RTcwNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOTE0NEQ3QTdBREYxMUU2QkVGRkQ0ODM3M0M3RTcwNCI%2BIDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MTQ0RDc3N0FERjExRTZCRUZGRDQ4MzczQzdFNzA0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5MTQ0RDc4N0FERjExRTZCRUZGRDQ4MzczQzdFNzA0Ii8%2BIDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY%2BIDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8%2BXf%2Fy5QAAAqpJREFUeNp0Uz1vE0EQfbt7n7Zjx%2BAkVoQpEJ%2BiSIWQKOmCoEkH4k8gCpAokJCoaOkpEVLS8R%2BgCIJIJCiCyBEJJLFDEp%2FtO99574bZM4EExEh7Z83tvDfvzVgQEdKlxZvxwsvHtLN1iYZJEVkGZCmQ8pv4HIYQgOOEsj696s7deaquXFsQ%2BsPijej5s3kMIh%2F8HcMhDAAZEE2jQktwrRj9ZkLSfMdxh%2F69R7fVw6mxeWY%2BlTMmyehCShBKwmpUIKseqKc5l3HOgDCYUkyUKHz7OmPh%2B8YFmWomHbVKGUFWXPi3GpDjUZ7LDiYRvd4AdQY5sORutO1gf715Rt2dKD9JMxI2o5ojMwF39jRUPQBUiY8D4QWwajUky%2FsI0yHaYUQ%2FwgEJkLLGPU8EccwJZmPJXsHB2ZoW6IdApcoAFhD0kJ100Yx7pJIMFd8T9VKRm2GZJddBxXNFxtoHQ41eMkQcdFCoss5wF%2BBLsCTSIEDDLwpvzGIeYsk8PZYt8zEa1%2Fnt2RYmXB%2Fdtz3Sts2F7IvS0Eyy%2F6ZLdibzu6b4MCwcCQNCPDK%2FmYrdV3skLrpsGE%2Fz0wCFbRLCUfmdo3EMwIQpiESKlXctca5ZxWanC8EqZhp1ZH8V%2FwdAos0GrgUHiEijGyeI0xQBu3%2B1Mc12yGNd%2FANgRmG2zmc%2FOoPYDAYOj7fPS%2FZ7G%2FO1Hj2kJkqOAwiEPAnNm1d0HLiWYlaBsufCVX88sKXCZtDVklv8kicNuhh1UGbXDRuPF5pd9yyLer%2BkmNk7DLrRCfB%2Bq7WuZqul1mTBm%2BP1lBxQ7IHhMNrP107knaREoux5mCoV0ec%2F2%2FJOG0tbLQN%2BX10v%2Byu8hZ9Z72U%2B1W4cS%2BP21FgRkluq%2BC6ZZTPaVnf38HG7rbe7%2FTUhxQNu%2BMVPAQYAqNVYlao%2BUU8AAAAASUVORK5CYII%3D
[link-donate]: https://www.zengyanqi.com/myhtml/my_pay.jpg
