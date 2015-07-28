# encoding: utf-8

#tips1 交换两个数的大小
def exchangeVariable(x,y)
	puts "交换前： x=>#{x}  x=>#{y}"
	x,y=y,x
	puts "交换后： x=>#{x}  y=>#{y}"
end

exchangeVariable(1,2);


#***************************************************************************#
#****************************Ruby中变量的定义方法***************************#
#***************************************************************************#
#**   1、以【@】开始的变量是【实例变量】，属于对象                        **# 
#**   2、以【@@】开始的变量是【类变量】                                   **#
#**   3、以【$】开始变量是【全局变量】，未初始化时值为nil                 **#
#**   4、常量以【大写字母】开始                                           **#
#**      4-1、常量可以定义在【类】或【模块】中，但是不能定义在方法中      **#
#**      4-2、外部访问模块中的常量需要使用【::】操作符                    **#
#**   5、局部变量以【小写字母】或【下划线】开始                           **#
#**      5-1、作用域起始于声明处，结束语声明所在的块的结尾                **#
#**      5-2、若块已经变成过程对象的话，则局部变量将持续到过程变量的结尾  **#
#***************************************************************************#



## Ruby中的数据类型
### 1、Aarray[数组]
### 2、Hash[哈希]
### 3、Number[数字]
### 4、String[字符串]
### 5、Range[范围]
### 6、Symbol[一种对象类型]