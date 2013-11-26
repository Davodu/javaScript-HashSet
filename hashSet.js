/**
 * Copyright 2013 Taku Mapfumo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function HashSet() {
    this._arr = new Array();
}

HashSet.prototype.add = function (e) {
    var arr = this._arr;
    var i = arr.indexOf(e);
    if (i == -1) arr.push(e);
}

HashSet.prototype.get = function (i) {
    return this._arr[i];
}

HashSet.prototype.size = function (i) {
    return this._arr.length;
}

HashSet.prototype.values = function () {
    return this._arr;
}

HashSet.prototype.remove = function (e) {
    var arr = this._arr;
    var i = arr.indexOf(e);
    if (i != -1) arr.splice(i, 1);
}

HashSet.prototype.contains = function (e) {
    var arr = this._arr;
    var i = arr.indexOf(e);
    return i != -1 ? true : false;
}

HashSet.prototype.addAll = function (r) {
    var k = r.values();
    for (var i = 0; i < k.length; i++) {
        this.add(k[i]);
    }
}

HashSet.prototype.removeAll = function (r) {
    var k = r.values();
    for (var i = 0; i < k.length; i++) {
        this.remove(k[i]);
    }
    return this;
}

HashSet.prototype.union = function (r) {
    var x = new HashSet();
    var k = r.values();
    var arr = this._arr;
    for (var i = 0; i < arr.length; i++) {
        x.add(arr[i]);
    }
    for (var i = 0; i < k.length; i++) {
        x.add(k[i]);
    }
    return x;
}

HashSet.prototype.intersection = function (r) {
    var x = new HashSet();
    var arr = this._arr;
    var k = r.values();
    for (var i = 0; i < k.length; i++) {
        if (this.contains(k[i])) {
            x.add(k[i]);
        }
    }
    return x;
}

HashSet.prototype.difference = function (r) {
    var x = new HashSet();
    var y = new HashSet();
    var z = new HashSet();
    x = this.union(r);
    y = this.intersection(r);
    return x.removeAll(y);
}

HashSet.prototype.isSubsetOf = function (r) {
    var arr = this._arr;
    for (var i = 0; i < arr.length; i++) {
        if (!r.contains(arr[i])) {
            return false;
        }
    }
    return true;
}

HashSet.prototype.complement = function (r) {
    var x = new HashSet();
    var arr = this._arr;
    for (var i = 0; i < arr.length; i++) {
        if (!r.contains(arr[i])) {
            x.add(arr[i])
        }
    }
    return x;
}

HashSet.prototype.equals = function (r) {
    var arr = this._arr;
    var k = r.values();
    k.sort();
    arr.sort(); //sort arrays
    return !(k > arr || k < arr);
}

HashSet.prototype.toString = function () {
    return this._arr.join(',');
}

Array.prototype.indexOf = function (obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
        if (this[i] === obj) {
            return i;
        }
    }
    return -1;
}
