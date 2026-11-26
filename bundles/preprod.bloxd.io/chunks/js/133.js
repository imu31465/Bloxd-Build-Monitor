/*! For license information please see gw4e3a.133.505210fd.chunk.js.LICENSE.txt */
export const id = 133;
export const ids = [133];
export const modules = {
  6950: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Graph: () => EB,
      debug: () => uG,
      default: () => IG,
      graphlib: () => QB,
      layout: () => lG,
      util: () => mG,
      version: () => QO
    });
    var YB = Object.defineProperty,
      DB = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? YB(BB, OB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GB
      }) : BB[OB] = GB)(BB, "symbol" != typeof OB ? OB + "" : OB, GB),
      QB = {};
    ((BB, OB) => {
      for (var GB in OB) YB(BB, GB, {
        get: OB[GB],
        enumerable: !0
      })
    })(QB, {
      Graph: () => EB,
      alg: () => NB
    });
    var oB = Object.defineProperty,
      jB = (BB, OB) => {
        for (var GB in OB) oB(BB, GB, {
          get: OB[GB],
          enumerable: !0
        })
      },
      yB = class {
        constructor(BB) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, BB && (this._isDirected = !("directed" in BB) || BB.directed, this._isMultigraph = "multigraph" in BB && BB.multigraph, this._isCompound = "compound" in BB && BB.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
        }
        isDirected() {
          return this._isDirected
        }
        isMultigraph() {
          return this._isMultigraph
        }
        isCompound() {
          return this._isCompound
        }
        setGraph(BB) {
          return this._label = BB, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(BB) {
          return this._defaultNodeLabelFn = "function" != typeof BB ? () => BB : BB, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((BB => 0 === Object.keys(this._in[BB]).length))
        }
        sinks() {
          return this.nodes().filter((BB => 0 === Object.keys(this._out[BB]).length))
        }
        setNodes(BB, OB) {
          return BB.forEach((BB => {
            void 0 !== OB ? this.setNode(BB, OB) : this.setNode(BB)
          })), this
        }
        setNode(BB, OB) {
          return BB in this._nodes ? (arguments.length > 1 && (this._nodes[BB] = OB), this) : (this._nodes[BB] = arguments.length > 1 ? OB : this._defaultNodeLabelFn(BB), this._isCompound && (this._parent[BB] = "\0", this._children[BB] = {}, this._children["\0"][BB] = !0), this._in[BB] = {}, this._preds[BB] = {}, this._out[BB] = {}, this._sucs[BB] = {}, ++this._nodeCount, this)
        }
        node(BB) {
          return this._nodes[BB]
        }
        hasNode(BB) {
          return BB in this._nodes
        }
        removeNode(BB) {
          if (BB in this._nodes) {
            let OB = BB => this.removeEdge(this._edgeObjs[BB]);
            delete this._nodes[BB], this._isCompound && (this._removeFromParentsChildList(BB), delete this._parent[BB], this.children(BB).forEach((BB => {
              this.setParent(BB)
            })), delete this._children[BB]), Object.keys(this._in[BB]).forEach(OB), delete this._in[BB], delete this._preds[BB], Object.keys(this._out[BB]).forEach(OB), delete this._out[BB], delete this._sucs[BB], --this._nodeCount
          }
          return this
        }
        setParent(BB, OB) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === OB) OB = "\0";
          else {
            for (let GB = OB += ""; void 0 !== GB; GB = this.parent(GB))
              if (GB === BB) throw new Error("Setting " + OB + " as parent of " + BB + " would create a cycle");
            this.setNode(OB)
          }
          return this.setNode(BB), this._removeFromParentsChildList(BB), this._parent[BB] = OB, this._children[OB][BB] = !0, this
        }
        parent(BB) {
          if (this._isCompound) {
            let OB = this._parent[BB];
            if ("\0" !== OB) return OB
          }
        }
        children() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let OB = this._children[BB];
            if (OB) return Object.keys(OB)
          } else {
            if ("\0" === BB) return this.nodes();
            if (this.hasNode(BB)) return []
          }
          return []
        }
        predecessors(BB) {
          let OB = this._preds[BB];
          if (OB) return Object.keys(OB)
        }
        successors(BB) {
          let OB = this._sucs[BB];
          if (OB) return Object.keys(OB)
        }
        neighbors(BB) {
          let OB = this.predecessors(BB);
          if (OB) {
            let GB = new Set(OB),
              YB = this.successors(BB);
            if (YB)
              for (let BB of YB) GB.add(BB);
            return Array.from(GB.values())
          }
        }
        isLeaf(BB) {
          var OB;
          let GB;
          return GB = this.isDirected() ? this.successors(BB) : this.neighbors(BB), 0 === (null != (OB = null == GB ? void 0 : GB.length) ? OB : 0)
        }
        filterNodes(BB) {
          let OB = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          OB.setGraph(this.graph()), Object.entries(this._nodes).forEach((GB => {
            let [YB, DB] = GB;
            BB(YB) && OB.setNode(YB, DB)
          })), Object.values(this._edgeObjs).forEach((BB => {
            OB.hasNode(BB.v) && OB.hasNode(BB.w) && OB.setEdge(BB, this.edge(BB))
          }));
          let GB = {},
            YB = BB => {
              let DB = this.parent(BB);
              return !DB || OB.hasNode(DB) ? (GB[BB] = DB, DB) : DB in GB ? GB[DB] : YB(DB)
            };
          return this._isCompound && OB.nodes().forEach((BB => OB.setParent(BB, YB(BB)))), OB
        }
        setDefaultEdgeLabel(BB) {
          return this._defaultEdgeLabelFn = "function" != typeof BB ? () => BB : BB, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(BB, OB) {
          return BB.reduce(((BB, GB) => (void 0 !== OB ? this.setEdge(BB, GB, OB) : this.setEdge(BB, GB), GB))), this
        }
        setEdge(BB, OB, GB, YB) {
          let DB, QB, oB, jB, yB = !1;
          "object" == typeof BB && null !== BB && "v" in BB ? (DB = BB.v, QB = BB.w, oB = BB.name, 2 === arguments.length && (jB = OB, yB = !0)) : (DB = BB, QB = OB, oB = YB, arguments.length > 2 && (jB = GB, yB = !0)), DB = "" + DB, QB = "" + QB, void 0 !== oB && (oB = "" + oB);
          let MB = PB(this._isDirected, DB, QB, oB);
          if (MB in this._edgeLabels) return yB && (this._edgeLabels[MB] = jB), this;
          if (void 0 !== oB && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(DB), this.setNode(QB), this._edgeLabels[MB] = yB ? jB : this._defaultEdgeLabelFn(DB, QB, oB);
          let zB = function(BB, OB, GB, YB) {
            let DB = "" + OB,
              QB = "" + GB;
            if (!BB && DB > QB) {
              let BB = DB;
              DB = QB, QB = BB
            }
            let oB = {
              v: DB,
              w: QB
            };
            return YB && (oB.name = YB), oB
          }(this._isDirected, DB, QB, oB);
          return DB = zB.v, QB = zB.w, Object.freeze(zB), this._edgeObjs[MB] = zB, JB(this._preds[QB], DB), JB(this._sucs[DB], QB), this._in[QB][MB] = zB, this._out[DB][MB] = zB, this._edgeCount++, this
        }
        edge(BB, OB, GB) {
          let YB = 1 === arguments.length ? zB(this._isDirected, BB) : PB(this._isDirected, BB, OB, GB);
          return this._edgeLabels[YB]
        }
        edgeAsObj(BB, OB, GB) {
          let YB = 1 === arguments.length ? this.edge(BB) : this.edge(BB, OB, GB);
          return "object" != typeof YB || null === YB ? {
            label: YB
          } : YB
        }
        hasEdge(BB, OB, GB) {
          return (1 === arguments.length ? zB(this._isDirected, BB) : PB(this._isDirected, BB, OB, GB)) in this._edgeLabels
        }
        removeEdge(BB, OB, GB) {
          let YB = 1 === arguments.length ? zB(this._isDirected, BB) : PB(this._isDirected, BB, OB, GB),
            DB = this._edgeObjs[YB];
          if (DB) {
            let BB = DB.v,
              OB = DB.w;
            delete this._edgeLabels[YB], delete this._edgeObjs[YB], MB(this._preds[OB], BB), MB(this._sucs[BB], OB), delete this._in[OB][YB], delete this._out[BB][YB], this._edgeCount--
          }
          return this
        }
        inEdges(BB, OB) {
          return this.isDirected() ? this.filterEdges(this._in[BB], BB, OB) : this.nodeEdges(BB, OB)
        }
        outEdges(BB, OB) {
          return this.isDirected() ? this.filterEdges(this._out[BB], BB, OB) : this.nodeEdges(BB, OB)
        }
        nodeEdges(BB, OB) {
          if (BB in this._nodes) return this.filterEdges({
            ...this._in[BB],
            ...this._out[BB]
          }, BB, OB)
        }
        _removeFromParentsChildList(BB) {
          delete this._children[this._parent[BB]][BB]
        }
        filterEdges(BB, OB, GB) {
          if (!BB) return;
          let YB = Object.values(BB);
          return GB ? YB.filter((BB => BB.v === OB && BB.w === GB || BB.v === GB && BB.w === OB)) : YB
        }
      };

    function JB(BB, OB) {
      BB[OB] ? BB[OB]++ : BB[OB] = 1
    }

    function MB(BB, OB) {
      void 0 !== BB[OB] && !--BB[OB] && delete BB[OB]
    }

    function PB(BB, OB, GB, YB) {
      let DB = "" + OB,
        QB = "" + GB;
      if (!BB && DB > QB) {
        let BB = DB;
        DB = QB, QB = BB
      }
      return DB + "\x01" + QB + "\x01" + (void 0 === YB ? "\0" : YB)
    }

    function zB(BB, OB) {
      return PB(BB, OB.v, OB.w, OB.name)
    }

    function lB(BB) {
      let OB = {
          options: {
            directed: BB.isDirected(),
            multigraph: BB.isMultigraph(),
            compound: BB.isCompound()
          },
          nodes: pB(BB),
          edges: qB(BB)
        },
        GB = BB.graph();
      return void 0 !== GB && (OB.value = structuredClone(GB)), OB
    }

    function pB(BB) {
      return BB.nodes().map((OB => {
        let GB = BB.node(OB),
          YB = BB.parent(OB),
          DB = {
            v: OB
          };
        return void 0 !== GB && (DB.value = GB), void 0 !== YB && (DB.parent = YB), DB
      }))
    }

    function qB(BB) {
      return BB.edges().map((OB => {
        let GB = BB.edge(OB),
          YB = {
            v: OB.v,
            w: OB.w
          };
        return void 0 !== OB.name && (YB.name = OB.name), void 0 !== GB && (YB.value = GB), YB
      }))
    }

    function ZB(BB) {
      let OB = new yB(BB.options);
      return void 0 !== BB.value && OB.setGraph(BB.value), BB.nodes.forEach((BB => {
        OB.setNode(BB.v, BB.value), BB.parent && OB.setParent(BB.v, BB.parent)
      })), BB.edges.forEach((BB => {
        OB.setEdge({
          v: BB.v,
          w: BB.w,
          name: BB.name
        }, BB.value)
      })), OB
    }
    jB({}, {
      read: () => ZB,
      write: () => lB
    });
    var NB = {};
    jB(NB, {
      CycleException: () => uB,
      bellmanFord: () => WB,
      components: () => AB,
      dijkstra: () => nB,
      dijkstraAll: () => UB,
      findCycles: () => kB,
      floydWarshall: () => KB,
      isAcyclic: () => IB,
      postorder: () => gB,
      preorder: () => rB,
      prim: () => XB,
      shortestPaths: () => wB,
      tarjan: () => fB,
      topsort: () => mB
    });
    var RB = () => 1;

    function WB(BB, OB, GB, YB) {
      return function(BB, OB, GB, YB) {
        let DB, QB = {},
          oB = 0,
          jB = BB.nodes(),
          yB = function(BB) {
            let OB = QB[BB.v],
              YB = QB[BB.w];
            if (!OB || !YB) return;
            let oB = GB(BB);
            OB.distance + oB < YB.distance && (QB[BB.w] = {
              distance: OB.distance + oB,
              predecessor: BB.v
            }, DB = !0)
          },
          JB = function() {
            jB.forEach((function(BB) {
              YB(BB).forEach((function(OB) {
                let GB = OB.v === BB ? OB.v : OB.w,
                  YB = GB === OB.v ? OB.w : OB.v;
                yB({
                  v: GB,
                  w: YB
                })
              }))
            }))
          };
        jB.forEach((function(BB) {
          let GB = BB === OB ? 0 : Number.POSITIVE_INFINITY;
          QB[BB] = {
            distance: GB,
            predecessor: ""
          }
        }));
        let MB = jB.length;
        for (let PB = 1; PB < MB && (DB = !1, oB++, JB(), DB); PB++);
        if (oB === MB - 1 && (DB = !1, JB(), DB)) throw new Error("The graph contains a negative weight cycle");
        return QB
      }(BB, String(OB), GB || RB, YB || function(OB) {
        var GB;
        return null != (GB = BB.outEdges(OB)) ? GB : []
      })
    }

    function AB(BB) {
      let OB, GB = {},
        YB = [];

      function DB(YB) {
        var QB, oB;
        YB in GB || (GB[YB] = !0, OB.push(YB), null == (QB = BB.successors(YB)) || QB.forEach(DB), null == (oB = BB.predecessors(YB)) || oB.forEach(DB))
      }
      return BB.nodes().forEach((function(BB) {
        OB = [], DB(BB), OB.length && YB.push(OB)
      })), YB
    }
    var VB = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((BB => BB.key))
        }
        has(BB) {
          return BB in this._keyIndices
        }
        priority(BB) {
          let OB = this._keyIndices[BB];
          if (void 0 !== OB) return this._arr[OB].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(BB, OB) {
          let GB = this._keyIndices,
            YB = String(BB);
          if (!(YB in GB)) {
            let BB = this._arr,
              DB = BB.length;
            return GB[YB] = DB, BB.push({
              key: YB,
              priority: OB
            }), this._decrease(DB), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let BB = this._arr.pop();
          return delete this._keyIndices[BB.key], this._heapify(0), BB.key
        }
        decrease(BB, OB) {
          let GB = this._keyIndices[BB];
          if (void 0 === GB) throw new Error(`Key not found: ${BB}`);
          let YB = this._arr[GB].priority;
          if (OB > YB) throw new Error(`New priority is greater than current priority. Key: ${BB} Old: ${YB} New: ${OB}`);
          this._arr[GB].priority = OB, this._decrease(GB)
        }
        _heapify(BB) {
          let OB = this._arr,
            GB = 2 * BB,
            YB = GB + 1,
            DB = BB;
          GB < OB.length && (DB = OB[GB].priority < OB[DB].priority ? GB : DB, YB < OB.length && (DB = OB[YB].priority < OB[DB].priority ? YB : DB), DB !== BB && (this._swap(BB, DB), this._heapify(DB)))
        }
        _decrease(BB) {
          let OB, GB = this._arr,
            YB = GB[BB].priority;
          for (; 0 !== BB && (OB = BB >> 1, !(GB[OB].priority < YB));) this._swap(BB, OB), BB = OB
        }
        _swap(BB, OB) {
          let GB = this._arr,
            YB = this._keyIndices,
            DB = GB[BB],
            QB = GB[OB];
          GB[BB] = QB, GB[OB] = DB, YB[QB.key] = BB, YB[DB.key] = OB
        }
      },
      SB = () => 1;

    function nB(BB, OB, GB, YB) {
      return function(BB, OB, GB, YB) {
        let DB, QB, oB = {},
          jB = new VB,
          yB = function(BB) {
            let OB = BB.v !== DB ? BB.v : BB.w,
              YB = oB[OB];
            if (!YB) return;
            let yB = GB(BB),
              JB = QB.distance + yB;
            if (yB < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + BB + " Weight: " + yB);
            JB < YB.distance && (YB.distance = JB, YB.predecessor = DB, jB.decrease(OB, JB))
          };
        for (BB.nodes().forEach((function(BB) {
            let GB = BB === OB ? 0 : Number.POSITIVE_INFINITY;
            oB[BB] = {
              distance: GB,
              predecessor: ""
            }, jB.add(BB, GB)
          })); jB.size() > 0;) {
          DB = jB.removeMin();
          let BB = oB[DB];
          if (!BB || BB.distance === Number.POSITIVE_INFINITY) break;
          QB = BB, YB(DB).forEach(yB)
        }
        return oB
      }(BB, String(OB), GB || SB, YB || function(OB) {
        var GB;
        return null != (GB = BB.outEdges(OB)) ? GB : []
      })
    }

    function UB(BB, OB, GB) {
      return BB.nodes().reduce((function(YB, DB) {
        return YB[DB] = nB(BB, DB, OB, GB), YB
      }), {})
    }

    function fB(BB) {
      let OB = 0,
        GB = [],
        YB = {},
        DB = [];

      function QB(oB) {
        var jB;
        let yB = YB[oB] = {
          onStack: !0,
          lowlink: OB,
          index: OB++
        };
        if (GB.push(oB), null == (jB = BB.successors(oB)) || jB.forEach((function(BB) {
            if (BB in YB) {
              let OB = YB[BB];
              null != OB && OB.onStack && (yB.lowlink = Math.min(yB.lowlink, OB.index))
            } else {
              QB(BB);
              let OB = YB[BB];
              OB && (yB.lowlink = Math.min(yB.lowlink, OB.lowlink))
            }
          })), yB.lowlink === yB.index) {
          let BB, OB = [];
          do {
            BB = GB.pop();
            let DB = YB[BB];
            DB && (DB.onStack = !1), OB.push(BB)
          } while (oB !== BB);
          DB.push(OB)
        }
      }
      return BB.nodes().forEach((function(BB) {
        BB in YB || QB(BB)
      })), DB
    }

    function kB(BB) {
      return fB(BB).filter((function(OB) {
        var GB;
        let YB = OB[0];
        return !!YB && (OB.length > 1 || 1 === OB.length && (null != (GB = BB.outEdges(YB, YB)) ? GB : []).length > 0)
      }))
    }
    var dB = () => 1;

    function KB(BB, OB, GB) {
      return function(BB, OB, GB) {
        let YB = {},
          DB = BB.nodes();
        return DB.forEach((function(BB) {
          let QB = {};
          YB[BB] = QB, QB[BB] = {
            distance: 0,
            predecessor: ""
          }, DB.forEach((function(OB) {
            BB !== OB && (QB[OB] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), GB(BB).forEach((function(GB) {
            let YB = GB.v === BB ? GB.w : GB.v,
              DB = OB(GB);
            QB[YB] = {
              distance: DB,
              predecessor: BB
            }
          }))
        })), DB.forEach((function(BB) {
          let OB = YB[BB];
          OB && DB.forEach((function(GB) {
            let QB = YB[GB];
            QB && DB.forEach((function(GB) {
              let YB = QB[BB],
                DB = OB[GB],
                oB = QB[GB];
              if (YB && DB && oB) {
                let BB = YB.distance + DB.distance;
                BB < oB.distance && (oB.distance = BB, oB.predecessor = DB.predecessor)
              }
            }))
          }))
        })), YB
      }(BB, OB || dB, GB || function(OB) {
        var GB;
        return null != (GB = BB.outEdges(OB)) ? GB : []
      })
    }
    var uB = class extends Error {
      constructor(BB) {
        super(BB), this.name = "CycleException"
      }
    };

    function mB(BB) {
      let OB = {},
        GB = {},
        YB = [];
      if (BB.sinks().forEach((function DB(QB) {
          var oB;
          if (QB in GB) throw new uB;
          QB in OB || (GB[QB] = !0, OB[QB] = !0, null == (oB = BB.predecessors(QB)) || oB.forEach(DB), delete GB[QB], YB.push(QB))
        })), Object.keys(OB).length !== BB.nodeCount()) throw new uB;
      return YB
    }

    function IB(BB) {
      try {
        mB(BB)
      } catch (OB) {
        if (OB instanceof uB) return !1;
        throw OB
      }
      return !0
    }

    function FB(BB, OB, GB, YB, DB) {
      Array.isArray(OB) || (OB = [OB]);
      let QB = OB => {
          var GB;
          return null != (GB = BB.isDirected() ? BB.successors(OB) : BB.neighbors(OB)) ? GB : []
        },
        oB = {};
      return OB.forEach((function(OB) {
        if (!BB.hasNode(OB)) throw new Error("Graph does not have node: " + OB);
        DB = iB(BB, OB, "post" === GB, oB, QB, YB, DB)
      })), DB
    }

    function iB(BB, OB, GB, YB, DB, QB, oB) {
      return OB in YB || (YB[OB] = !0, GB || (oB = QB(oB, OB)), DB(OB).forEach((function(OB) {
        oB = iB(BB, OB, GB, YB, DB, QB, oB)
      })), GB && (oB = QB(oB, OB))), oB
    }

    function LB(BB, OB, GB) {
      return FB(BB, OB, GB, (function(BB, OB) {
        return BB.push(OB), BB
      }), [])
    }

    function gB(BB, OB) {
      return LB(BB, OB, "post")
    }

    function rB(BB, OB) {
      return LB(BB, OB, "pre")
    }

    function XB(BB, OB) {
      var GB;
      let YB, DB = new yB,
        QB = {},
        oB = new VB;

      function jB(BB) {
        let GB = BB.v === YB ? BB.w : BB.v,
          DB = oB.priority(GB);
        if (void 0 !== DB) {
          let jB = OB(BB);
          jB < DB && (QB[GB] = YB, oB.decrease(GB, jB))
        }
      }
      if (0 === BB.nodeCount()) return DB;
      BB.nodes().forEach((function(BB) {
        oB.add(BB, Number.POSITIVE_INFINITY), DB.setNode(BB)
      }));
      let JB = BB.nodes()[0];
      void 0 !== JB && oB.decrease(JB, 0);
      let MB = !1;
      for (; oB.size() > 0;) {
        if (YB = oB.removeMin(), YB in QB) DB.setEdge(YB, QB[YB]);
        else {
          if (MB) throw new Error("Input graph is not connected: " + BB);
          MB = !0
        }
        null == (GB = BB.nodeEdges(YB)) || GB.forEach(jB)
      }
      return DB
    }

    function wB(BB, OB, GB, YB) {
      return function(BB, OB, GB, YB) {
        if (void 0 === GB) return nB(BB, OB, GB, YB);
        let DB = !1,
          QB = BB.nodes();
        for (let oB = 0; oB < QB.length; oB++) {
          let jB = QB[oB];
          if (void 0 === jB) continue;
          let yB = YB(jB);
          for (let BB = 0; BB < yB.length; BB++) {
            let OB = yB[BB];
            if (!OB) continue;
            let YB = OB.v === jB ? OB.v : OB.w;
            GB({
              v: YB,
              w: YB === OB.v ? OB.w : OB.v
            }) < 0 && (DB = !0)
          }
          if (DB) return WB(BB, OB, GB, YB)
        }
        return nB(BB, OB, GB, YB)
      }(BB, OB, GB, null != YB ? YB : OB => {
        var GB;
        return null != (GB = BB.outEdges(OB)) ? GB : []
      })
    }
    var EB = yB;

    function cB(BB, OB, GB, YB) {
      let DB = YB;
      for (; BB.hasNode(DB);) DB = tB(YB);
      return GB.dummy = OB, BB.setNode(DB, GB), DB
    }

    function hB(BB) {
      let OB = new EB({
        multigraph: BB.isMultigraph()
      }).setGraph(BB.graph());
      return BB.nodes().forEach((GB => {
        BB.children(GB).length || OB.setNode(GB, BB.node(GB))
      })), BB.edges().forEach((GB => {
        OB.setEdge(GB, BB.edge(GB))
      })), OB
    }

    function aB(BB, OB) {
      let GB, YB, DB = BB.x,
        QB = BB.y,
        oB = OB.x - DB,
        jB = OB.y - QB,
        yB = BB.width / 2,
        JB = BB.height / 2;
      if (!oB && !jB) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(jB) * yB > Math.abs(oB) * JB ? (jB < 0 && (JB = -JB), GB = JB * oB / jB, YB = JB) : (oB < 0 && (yB = -yB), GB = yB, YB = yB * jB / oB), {
        x: DB + GB,
        y: QB + YB
      }
    }

    function eB(BB) {
      let OB = BO(HB(BB) + 1).map((() => []));
      return BB.nodes().forEach((GB => {
        let YB = BB.node(GB),
          DB = YB.rank;
        void 0 !== DB && (OB[DB] || (OB[DB] = []), OB[DB][YB.order] = GB)
      })), OB
    }

    function TB(BB, OB, GB, YB) {
      let DB = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (DB.rank = GB, DB.order = YB), cB(BB, "border", DB, OB)
    }
    var bB = 65535;

    function CB(BB, OB) {
      if (OB.length > bB) {
        let GB = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bB,
            GB = [];
          for (let YB = 0; YB < BB.length; YB += OB) {
            let DB = BB.slice(YB, YB + OB);
            GB.push(DB)
          }
          return GB
        }(OB);
        return BB(...GB.map((OB => BB(...OB))))
      }
      return BB(...OB)
    }

    function HB(BB) {
      let OB = BB.nodes().map((OB => {
        let GB = BB.node(OB).rank;
        return void 0 === GB ? Number.MIN_VALUE : GB
      }));
      return CB(Math.max, OB)
    }

    function vB(BB, OB) {
      let GB = Date.now();
      try {
        return OB()
      } finally {
        console.log(BB + " time: " + (Date.now() - GB) + "ms")
      }
    }

    function sB(BB, OB) {
      return OB()
    }
    var xB = 0;

    function tB(BB) {
      return BB + "" + ++xB
    }

    function BO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == OB && (OB = BB, BB = 0);
      let YB = BB => BB < OB;
      GB < 0 && (YB = BB => OB < BB);
      let DB = [];
      for (let QB = BB; YB(QB); QB += GB) DB.push(QB);
      return DB
    }

    function OO(BB, OB) {
      let GB = {};
      for (let YB of OB) void 0 !== BB[YB] && (GB[YB] = BB[YB]);
      return GB
    }

    function GO(BB, OB) {
      let GB;
      return GB = "string" == typeof OB ? BB => BB[OB] : OB, Object.entries(BB).reduce(((BB, OB) => {
        let [YB, DB] = OB;
        return BB[YB] = GB(DB, YB), BB
      }), {})
    }
    var YO = "\0";

    function DO(BB, OB, GB) {
      var YB, DB, QB, oB, jB, yB;
      if (!(BB && OB && GB && "edge" === OB.dummy && "edge" === GB.dummy && OB.edgeObj && GB.edgeObj && BB[OB.edgeObj.v] && BB[GB.edgeObj.v] && BB[OB.edgeObj.w] && BB[GB.edgeObj.w])) return 0;
      let JB = !0;
      OB.edgeObj.w === GB.edgeObj.w && (JB = !1);
      let MB = JB ? null != (DB = null == (YB = BB[OB.edgeObj.v]) ? void 0 : YB.rank) ? DB : NaN : null != (oB = null == (QB = BB[OB.edgeObj.w]) ? void 0 : QB.rank) ? oB : NaN,
        PB = Object.entries(BB).find((BB => {
          var GB, YB;
          return (null == (GB = BB[1].edgeObj) ? void 0 : GB.v) === OB.edgeObj.v && (null == (YB = BB[1].edgeObj) ? void 0 : YB.w) === OB.edgeObj.w && BB[1].rank === MB
        })),
        zB = Object.entries(BB).find((BB => {
          var OB, YB;
          return (null == (OB = BB[1].edgeObj) ? void 0 : OB.v) === GB.edgeObj.v && (null == (YB = BB[1].edgeObj) ? void 0 : YB.w) === GB.edgeObj.w && BB[1].rank === MB
        }));
      if (!PB || !zB) return 0;
      let lB = null != (jB = PB[1].order) ? jB : NaN,
        pB = null != (yB = zB[1].order) ? yB : NaN;
      return isNaN(lB - pB) ? 0 : lB - pB
    }
    var QO = "3.1.1";

    function oO(BB) {
      BB._prev._next = BB._next, BB._next._prev = BB._prev, delete BB._next, delete BB._prev
    }

    function jO(BB, OB) {
      if ("_next" !== BB && "_prev" !== BB) return OB
    }
    var yO = class {
        constructor() {
          DB(this, "_sentinel");
          let BB = {};
          BB._next = BB._prev = BB, this._sentinel = BB
        }
        dequeue() {
          let BB = this._sentinel,
            OB = BB._prev;
          if (OB !== BB) return oO(OB), OB
        }
        enqueue(BB) {
          let OB = this._sentinel;
          BB._prev && BB._next && oO(BB), BB._next = OB._next, OB._next._prev = BB, OB._next = BB, BB._prev = OB
        }
        toString() {
          let BB = [],
            OB = this._sentinel,
            GB = OB._prev;
          for (; GB !== OB;) BB.push(JSON.stringify(GB, jO)), GB = GB._prev;
          return "[" + BB.join(", ") + "]"
        }
      },
      JO = () => 1;

    function MO(BB, OB) {
      if (BB.nodeCount() <= 1) return [];
      let GB = function(BB, OB) {
        let GB = new EB,
          YB = 0,
          DB = 0;
        BB.nodes().forEach((BB => {
          GB.setNode(BB, {
            v: BB,
            in: 0,
            out: 0
          })
        })), BB.edges().forEach((BB => {
          let QB = GB.edge(BB.v, BB.w) || 0,
            oB = OB(BB),
            jB = QB + oB;
          GB.setEdge(BB.v, BB.w, jB);
          let yB = GB.node(BB.v),
            JB = GB.node(BB.w);
          DB = Math.max(DB, yB.out += oB), YB = Math.max(YB, JB.in += oB)
        }));
        let QB = function(BB) {
            let OB = [];
            for (let GB = 0; GB < BB; GB++) OB.push(GB);
            return OB
          }(DB + YB + 3).map((() => new yO)),
          oB = YB + 1;
        return GB.nodes().forEach((BB => {
          zO(QB, oB, GB.node(BB))
        })), {
          graph: GB,
          buckets: QB,
          zeroIdx: oB
        }
      }(BB, OB || JO);
      return function(BB, OB, GB) {
        var YB;
        let DB, QB = [],
          oB = OB[OB.length - 1],
          jB = OB[0];
        for (; BB.nodeCount();) {
          for (; DB = jB.dequeue();) PO(BB, OB, GB, DB);
          for (; DB = oB.dequeue();) PO(BB, OB, GB, DB);
          if (BB.nodeCount())
            for (let oB = OB.length - 2; oB > 0; --oB)
              if (DB = null == (YB = OB[oB]) ? void 0 : YB.dequeue(), DB) {
                QB = QB.concat(PO(BB, OB, GB, DB, !0) || []);
                break
              }
        }
        return QB
      }(GB.graph, GB.buckets, GB.zeroIdx).flatMap((OB => BB.outEdges(OB.v, OB.w) || []))
    }

    function PO(BB, OB, GB, YB, DB) {
      let QB = [],
        oB = DB ? QB : void 0;
      return (BB.inEdges(YB.v) || []).forEach((YB => {
        let oB = BB.edge(YB),
          jB = BB.node(YB.v);
        DB && QB.push({
          v: YB.v,
          w: YB.w
        }), jB.out -= oB, zO(OB, GB, jB)
      })), (BB.outEdges(YB.v) || []).forEach((YB => {
        let DB = BB.edge(YB),
          QB = YB.w,
          oB = BB.node(QB);
        oB.in -= DB, zO(OB, GB, oB)
      })), BB.removeNode(YB.v), oB
    }

    function zO(BB, OB, GB) {
      var YB, DB, QB;
      GB.out ? GB.in ? null == (QB = BB[GB.out - GB.in + OB]) || QB.enqueue(GB) : null == (DB = BB[BB.length - 1]) || DB.enqueue(GB) : null == (YB = BB[0]) || YB.enqueue(GB)
    }

    function lO(BB, OB) {
      var GB;
      ("greedy" === BB.graph().acyclicer ? MO(BB, (GB = BB, BB => GB.edge(BB).weight)) : function(BB, OB) {
        let GB = [],
          YB = {},
          DB = {};

        function QB(OB) {
          Object.hasOwn(DB, OB) || (DB[OB] = !0, YB[OB] = !0, BB.outEdges(OB).forEach((BB => {
            Object.hasOwn(YB, BB.w) ? GB.push(BB) : QB(BB.w)
          })), delete YB[OB])
        }

        function oB(QB) {
          var jB;
          Object.hasOwn(DB, QB) || (DB[QB] = !0, YB[QB] = !0, null == (jB = BB.outEdges(QB)) || jB.forEach((DB => {
            var jB, yB;
            Object.hasOwn(YB, DB.w) || (null == (jB = OB.node(QB)) ? void 0 : jB.rank) > (null == (yB = OB.node(DB.w)) ? void 0 : yB.rank) && function(BB, OB, GB) {
              let YB = new Set;

              function DB(OB) {
                var QB;
                if (BB.sources().includes(OB)) return !0;
                YB.add(OB);
                for (let oB of null != (QB = BB.inEdges(OB)) ? QB : [])
                  if ((oB.v !== GB.v || oB.w !== GB.w) && !YB.has(oB.v) && DB(oB.v)) return !0;
                return !1
              }
              return DB(OB)
            }(BB, DB.w, DB) ? GB.push(DB) : oB(DB.w)
          })), delete YB[QB])
        }
        let jB = QB;
        return OB && "function" == typeof OB.node && (jB = oB), BB.sources().forEach(jB), BB.nodes().forEach(jB), GB
      }(BB, null != OB ? OB : null)).forEach((OB => {
        let GB = BB.edge(OB);
        BB.removeEdge(OB), GB.forwardName = OB.name, GB.reversed = !0, BB.setEdge(OB.w, OB.v, GB, tB("rev"))
      }))
    }

    function pO(BB) {
      BB.graph().dummyChains = [], BB.edges().forEach((OB => function(BB, OB) {
        let GB, YB, DB, QB = OB.v,
          oB = BB.node(QB).rank,
          jB = OB.w,
          yB = BB.node(jB).rank,
          JB = OB.name,
          MB = BB.edge(OB),
          PB = MB.labelRank;
        if (yB === oB + 1) return;
        for (BB.removeEdge(OB), DB = 0, ++oB; oB < yB; ++DB, ++oB) MB.points = [], YB = {
          width: 0,
          height: 0,
          edgeLabel: MB,
          edgeObj: OB,
          rank: oB
        }, GB = cB(BB, "edge", YB, "_d"), oB === PB && (YB.width = MB.width, YB.height = MB.height, YB.dummy = "edge-label", YB.labelpos = MB.labelpos), BB.setEdge(QB, GB, {
          weight: MB.weight
        }, JB), 0 === DB && BB.graph().dummyChains.push(GB), QB = GB;
        BB.setEdge(QB, jB, {
          weight: MB.weight
        }, JB)
      }(BB, OB)))
    }

    function qO(BB) {
      let OB = {};
      BB.sources().forEach((function GB(YB) {
        let DB = BB.node(YB);
        if (Object.hasOwn(OB, YB)) return DB.rank;
        OB[YB] = !0;
        let QB = BB.outEdges(YB),
          oB = QB ? QB.map((OB => null == OB ? Number.POSITIVE_INFINITY : GB(OB.w) - BB.edge(OB).minlen)) : [],
          jB = CB(Math.min, oB);
        return jB === Number.POSITIVE_INFINITY && (jB = 0), DB.rank = jB
      }))
    }

    function ZO(BB, OB) {
      return BB.node(OB.w).rank - BB.node(OB.v).rank - BB.edge(OB).minlen
    }
    var NO = function(BB) {
      let OB = new EB({
          directed: !1
        }),
        GB = BB.nodes();
      if (0 === GB.length) throw new Error("Graph must have at least one node");
      let YB, DB, QB = GB[0],
        oB = BB.nodeCount();
      for (OB.setNode(QB, {}); RO(OB, BB) < oB && (YB = WO(OB, BB), YB);) DB = OB.hasNode(YB.v) ? ZO(BB, YB) : -ZO(BB, YB), AO(OB, BB, DB);
      return OB
    };

    function RO(BB, OB) {
      return BB.nodes().forEach((function GB(YB) {
        let DB = OB.nodeEdges(YB);
        DB && DB.forEach((DB => {
          let QB = DB.v,
            oB = YB === QB ? DB.w : QB;
          !BB.hasNode(oB) && !ZO(OB, DB) && (BB.setNode(oB, {}), BB.setEdge(YB, oB, {}), GB(oB))
        }))
      })), BB.nodeCount()
    }

    function WO(BB, OB) {
      return OB.edges().reduce(((GB, YB) => {
        let DB = Number.POSITIVE_INFINITY;
        return BB.hasNode(YB.v) !== BB.hasNode(YB.w) && (DB = ZO(OB, YB)), DB < GB[0] ? [DB, YB] : GB
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function AO(BB, OB, GB) {
      BB.nodes().forEach((BB => OB.node(BB).rank += GB))
    }
    var {
      preorder: VO,
      postorder: SO
    } = NB, nO = UO;

    function UO(BB) {
      BB = function(BB) {
        let OB = (new EB).setGraph(BB.graph());
        return BB.nodes().forEach((GB => OB.setNode(GB, BB.node(GB)))), BB.edges().forEach((GB => {
          let YB = OB.edge(GB.v, GB.w) || {
              weight: 0,
              minlen: 1
            },
            DB = BB.edge(GB);
          OB.setEdge(GB.v, GB.w, {
            weight: YB.weight + DB.weight,
            minlen: Math.max(YB.minlen, DB.minlen)
          })
        })), OB
      }(BB), qO(BB);
      let OB, GB, YB = NO(BB);
      for (dO(YB), fO(YB, BB); OB = uO(YB);) GB = mO(YB, BB, OB), IO(YB, BB, OB, GB)
    }

    function fO(BB, OB) {
      let GB = SO(BB, BB.nodes());
      GB = GB.slice(0, GB.length - 1), GB.forEach((GB => function(BB, OB, GB) {
        let YB = BB.node(GB).parent,
          DB = BB.edge(GB, YB);
        DB.cutvalue = kO(BB, OB, GB)
      }(BB, OB, GB)))
    }

    function kO(BB, OB, GB) {
      let YB = BB.node(GB).parent,
        DB = !0,
        QB = OB.edge(GB, YB),
        oB = 0;
      QB || (DB = !1, QB = OB.edge(YB, GB)), oB = QB.weight;
      let jB = OB.nodeEdges(GB);
      return jB && jB.forEach((QB => {
        let jB = QB.v === GB,
          yB = jB ? QB.w : QB.v;
        if (yB !== YB) {
          let YB = jB === DB,
            JB = OB.edge(QB).weight;
          if (oB += YB ? JB : -JB, function(BB, OB, GB) {
              return BB.hasEdge(OB, GB)
            }(BB, GB, yB)) {
            let OB = BB.edge(GB, yB).cutvalue;
            oB += YB ? -OB : OB
          }
        }
      })), oB
    }

    function dO(BB, OB) {
      arguments.length < 2 && (OB = BB.nodes()[0]), KO(BB, {}, 1, OB)
    }

    function KO(BB, OB, GB, YB, DB) {
      let QB = GB,
        oB = BB.node(YB);
      OB[YB] = !0;
      let jB = BB.neighbors(YB);
      return jB && jB.forEach((DB => {
        Object.hasOwn(OB, DB) || (GB = KO(BB, OB, GB, DB, YB))
      })), oB.low = QB, oB.lim = GB++, DB ? oB.parent = DB : delete oB.parent, GB
    }

    function uO(BB) {
      return BB.edges().find((OB => BB.edge(OB).cutvalue < 0))
    }

    function mO(BB, OB, GB) {
      let YB = GB.v,
        DB = GB.w;
      OB.hasEdge(YB, DB) || (YB = GB.w, DB = GB.v);
      let QB = BB.node(YB),
        oB = BB.node(DB),
        jB = QB,
        yB = !1;
      return QB.lim > oB.lim && (jB = oB, yB = !0), OB.edges().filter((OB => yB === FO(BB, BB.node(OB.v), jB) && yB !== FO(BB, BB.node(OB.w), jB))).reduce(((BB, GB) => ZO(OB, GB) < ZO(OB, BB) ? GB : BB))
    }

    function IO(BB, OB, GB, YB) {
      let DB = GB.v,
        QB = GB.w;
      BB.removeEdge(DB, QB), BB.setEdge(YB.v, YB.w, {}), dO(BB), fO(BB, OB),
        function(BB, OB) {
          let GB = BB.nodes().find((OB => !BB.node(OB).parent));
          if (!GB) return;
          let YB = VO(BB, [GB]);
          YB = YB.slice(1), YB.forEach((GB => {
            let YB = BB.node(GB).parent,
              DB = OB.edge(GB, YB),
              QB = !1;
            DB || (DB = OB.edge(YB, GB), QB = !0), OB.node(GB).rank = OB.node(YB).rank + (QB ? DB.minlen : -DB.minlen)
          }))
        }(BB, OB)
    }

    function FO(BB, OB, GB) {
      return GB.low <= OB.lim && OB.lim <= GB.lim
    }
    UO.initLowLimValues = dO, UO.initCutValues = fO, UO.calcCutValue = kO, UO.leaveEdge = uO, UO.enterEdge = mO, UO.exchangeEdges = IO;
    var iO = function(BB) {
      let OB = BB.graph().ranker;
      if ("function" == typeof OB) return OB(BB);
      switch (OB) {
        case "network-simplex":
        default:
          gO(BB);
          break;
        case "tight-tree":
          ! function(BB) {
            qO(BB), NO(BB)
          }(BB);
          break;
        case "longest-path":
          LO(BB);
        case "none":
      }
    };
    var LO = qO;

    function gO(BB) {
      nO(BB)
    }
    var rO = function(BB) {
      let OB = function(BB) {
          let OB = {},
            GB = 0;

          function YB(DB) {
            let QB = GB;
            BB.children(DB).forEach(YB), OB[DB] = {
              low: QB,
              lim: GB++
            }
          }
          return BB.children(YO).forEach(YB), OB
        }(BB),
        GB = BB.graph();
      if (!Array.isArray(GB.dummyChains)) return;
      GB.dummyChains.forEach((GB => {
        let YB = BB.node(GB),
          DB = YB.edgeObj,
          QB = function(BB, OB, GB, YB) {
            let DB, QB = [],
              oB = [],
              jB = Math.min(OB[GB].low, OB[YB].low),
              yB = Math.max(OB[GB].lim, OB[YB].lim);
            DB = GB;
            do {
              DB = BB.parent(DB), QB.push(DB)
            } while (DB && (OB[DB].low > jB || yB > OB[DB].lim));
            let JB = DB,
              MB = YB;
            for (;
              (MB = BB.parent(MB)) !== JB;) oB.push(MB);
            return {
              path: QB.concat(oB.reverse()),
              lca: JB
            }
          }(BB, OB, DB.v, DB.w),
          oB = QB.path,
          jB = QB.lca,
          yB = 0,
          JB = oB[yB],
          MB = !0;
        for (; GB !== DB.w;) {
          if (YB = BB.node(GB), MB) {
            for (;
              (JB = oB[yB]) !== jB && BB.node(JB).maxRank < YB.rank;) yB++;
            JB === jB && (MB = !1)
          }
          if (!MB) {
            for (; yB < oB.length - 1 && BB.node(oB[yB + 1]).minRank <= YB.rank;) yB++;
            JB = oB[yB]
          }
          void 0 !== JB && BB.setParent(GB, JB), GB = BB.successors(GB)[0]
        }
      }))
    };

    function XO(BB) {
      let OB = cB(BB, "root", {}, "_root"),
        GB = function(BB) {
          let OB = {};

          function GB(YB, DB) {
            let QB = BB.children(YB);
            QB && QB.length && QB.forEach((BB => GB(BB, DB + 1))), OB[YB] = DB
          }
          return BB.children(YO).forEach((BB => GB(BB, 1))), OB
        }(BB),
        YB = Object.values(GB),
        DB = CB(Math.max, YB) - 1,
        QB = 2 * DB + 1;
      BB.graph().nestingRoot = OB, BB.edges().forEach((OB => BB.edge(OB).minlen *= QB));
      let oB = function(BB) {
        return BB.edges().reduce(((OB, GB) => OB + BB.edge(GB).weight), 0)
      }(BB) + 1;
      BB.children(YO).forEach((YB => {
        wO(BB, OB, QB, oB, DB, GB, YB)
      })), BB.graph().nodeRankFactor = QB
    }

    function wO(BB, OB, GB, YB, DB, QB, oB) {
      var jB;
      let yB = BB.children(oB);
      if (!yB.length) return void(oB !== OB && BB.setEdge(OB, oB, {
        weight: 0,
        minlen: GB
      }));
      let JB = TB(BB, "_bt"),
        MB = TB(BB, "_bb"),
        PB = BB.node(oB);
      BB.setParent(JB, oB), PB.borderTop = JB, BB.setParent(MB, oB), PB.borderBottom = MB, yB.forEach((jB => {
        var yB;
        wO(BB, OB, GB, YB, DB, QB, jB);
        let PB = BB.node(jB),
          zB = PB.borderTop ? PB.borderTop : jB,
          lB = PB.borderBottom ? PB.borderBottom : jB,
          pB = PB.borderTop ? YB : 2 * YB,
          qB = zB !== lB ? 1 : DB - (null != (yB = QB[oB]) ? yB : 0) + 1;
        BB.setEdge(JB, zB, {
          weight: pB,
          minlen: qB,
          nestingEdge: !0
        }), BB.setEdge(lB, MB, {
          weight: pB,
          minlen: qB,
          nestingEdge: !0
        })
      })), BB.parent(oB) || BB.setEdge(OB, JB, {
        weight: 0,
        minlen: DB + (null != (jB = QB[oB]) ? jB : 0)
      })
    }
    var EO = function(BB) {
      BB.children(YO).forEach((function OB(GB) {
        let YB = BB.children(GB),
          DB = BB.node(GB);
        if (YB.length && YB.forEach(OB), DB && Object.hasOwn(DB, "minRank")) {
          DB.borderLeft = [], DB.borderRight = [];
          for (let OB = DB.minRank, YB = DB.maxRank + 1; OB < YB; ++OB) cO(BB, "borderLeft", "_bl", GB, DB, OB), cO(BB, "borderRight", "_br", GB, DB, OB)
        }
      }))
    };

    function cO(BB, OB, GB, YB, DB, QB) {
      let oB = {
          width: 0,
          height: 0,
          rank: QB,
          borderType: OB
        },
        jB = DB[OB][QB - 1],
        yB = cB(BB, "border", oB, GB);
      DB[OB][QB] = yB, BB.setParent(yB, YB), jB && BB.setEdge(jB, yB, {
        weight: 1
      })
    }

    function hO(BB) {
      var OB;
      let GB = null == (OB = BB.graph().rankdir) ? void 0 : OB.toLowerCase();
      ("bt" === GB || "rl" === GB) && function(BB) {
        BB.nodes().forEach((OB => TO(BB.node(OB)))), BB.edges().forEach((OB => {
          var GB;
          let YB = BB.edge(OB);
          null == (GB = YB.points) || GB.forEach(TO), Object.hasOwn(YB, "y") && TO(YB)
        }))
      }(BB), ("lr" === GB || "rl" === GB) && (function(BB) {
        BB.nodes().forEach((OB => bO(BB.node(OB)))), BB.edges().forEach((OB => {
          var GB;
          let YB = BB.edge(OB);
          null == (GB = YB.points) || GB.forEach(bO), Object.hasOwn(YB, "x") && bO(YB)
        }))
      }(BB), aO(BB))
    }

    function aO(BB) {
      BB.nodes().forEach((OB => eO(BB.node(OB)))), BB.edges().forEach((OB => eO(BB.edge(OB))))
    }

    function eO(BB) {
      let OB = BB.width;
      BB.width = BB.height, BB.height = OB
    }

    function TO(BB) {
      BB.y = -BB.y
    }

    function bO(BB) {
      let OB = BB.x;
      BB.x = BB.y, BB.y = OB
    }

    function CO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GB = {},
        YB = BB.nodes().filter((OB => !BB.children(OB).length)),
        DB = YB.map((OB => BB.node(OB).rank)),
        QB = BO(CB(Math.max, DB) + 1).map((() => []));
      return YB.sort(((OB, GB) => BB.node(OB).rank - BB.node(GB).rank)).forEach((function YB(DB) {
        if (GB[DB]) return;
        GB[DB] = !0;
        let oB = BB.node(DB);
        QB[oB.rank].push(DB);
        let jB = BB.successors(DB);
        jB && [...jB].sort(((GB, YB) => function(GB, YB) {
          let DB = BB.node(GB),
            QB = BB.node(YB);
          return DO(OB, DB, QB)
        }(GB, YB))).forEach(YB)
      })), QB
    }

    function HO(BB, OB) {
      let GB = 0;
      for (let YB = 1; YB < OB.length; ++YB) GB += vO(BB, OB[YB - 1], OB[YB]);
      return GB
    }

    function vO(BB, OB, GB) {
      let YB = function(BB, OB) {
          return BB.reduce(((BB, GB, YB) => (BB[GB] = OB[YB], BB)), {})
        }(GB, GB.map(((BB, OB) => OB))),
        DB = OB.flatMap((OB => {
          let GB = BB.outEdges(OB);
          return GB ? GB.map((OB => ({
            pos: YB[OB.w],
            weight: BB.edge(OB).weight
          }))).sort(((BB, OB) => BB.pos - OB.pos)) : []
        })),
        QB = 1;
      for (; QB < GB.length;) QB <<= 1;
      let oB = 2 * QB - 1;
      QB -= 1;
      let jB = new Array(oB).fill(0),
        yB = 0;
      return DB.forEach((BB => {
        let OB = BB.pos + QB;
        jB[OB] += BB.weight;
        let GB = 0;
        for (; OB > 0;) OB % 2 && (GB += jB[OB + 1]), OB = OB - 1 >> 1, jB[OB] += BB.weight;
        yB += BB.weight * GB
      })), yB
    }

    function sO(BB, OB) {
      let GB = {};
      return BB.forEach(((BB, OB) => {
          let YB = {
            indegree: 0,
            in: [],
            out: [],
            vs: [BB.v],
            i: OB
          };
          void 0 !== BB.barycenter && (YB.barycenter = BB.barycenter, YB.weight = BB.weight), GB[BB.v] = YB
        })), OB.edges().forEach((BB => {
          let OB = GB[BB.v],
            YB = GB[BB.w];
          void 0 !== OB && void 0 !== YB && (YB.indegree++, OB.out.push(YB))
        })),
        function(BB) {
          let OB = [];

          function GB(BB) {
            return OB => {
              OB.merged || (void 0 === OB.barycenter || void 0 === BB.barycenter || OB.barycenter >= BB.barycenter) && function(BB, OB) {
                let GB = 0,
                  YB = 0;
                BB.weight && (GB += BB.barycenter * BB.weight, YB += BB.weight), OB.weight && (GB += OB.barycenter * OB.weight, YB += OB.weight), BB.vs = OB.vs.concat(BB.vs), BB.barycenter = GB / YB, BB.weight = YB, BB.i = Math.min(OB.i, BB.i), OB.merged = !0
              }(BB, OB)
            }
          }

          function YB(OB) {
            return GB => {
              GB.in.push(OB), 0 === --GB.indegree && BB.push(GB)
            }
          }
          for (; BB.length;) {
            let DB = BB.pop();
            OB.push(DB), DB.in.reverse().forEach(GB(DB)), DB.out.forEach(YB(DB))
          }
          return OB.filter((BB => !BB.merged)).map((BB => OO(BB, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(GB).filter((BB => !BB.indegree)))
    }

    function xO(BB, OB, GB, YB, DB) {
      let QB = {},
        oB = null,
        jB = null,
        yB = DB;
      "boolean" == typeof OB ? (yB = OB, QB = {}) : OB && (QB = OB, oB = null != GB ? GB : null, jB = null != YB ? YB : null);
      let JB = function(BB, OB) {
          let GB = {
            lhs: [],
            rhs: []
          };
          return BB.forEach((BB => {
            OB(BB) ? GB.lhs.push(BB) : GB.rhs.push(BB)
          })), GB
        }(BB, (BB => Object.hasOwn(BB, "barycenter"))),
        MB = JB.lhs,
        PB = JB.rhs.sort(((BB, OB) => OB.i - BB.i)),
        zB = [],
        lB = 0,
        pB = 0,
        qB = 0;
      MB.sort(function(BB, OB, GB) {
        return (YB, DB) => {
          if (YB.barycenter < DB.barycenter) return -1;
          if (YB.barycenter > DB.barycenter) return 1;
          if (BB && ("string" == typeof YB.vs[0] || "string" == typeof DB.vs[0])) {
            let GB = BB.node(YB.vs[0]),
              QB = BB.node(DB.vs[0]),
              oB = DO(OB, GB, QB);
            if (0 !== oB) return oB
          }
          return GB ? DB.i - YB.i : YB.i - DB.i
        }
      }(jB, oB, !!yB));
      for (let [NB, RB] of Object.entries(QB)) {
        let BB = MB.findIndex((BB => BB.vs[0] === NB));
        MB.splice(BB + 1, 0, RB)
      }
      qB = tO(zB, PB, qB), MB.forEach((BB => {
        qB += BB.vs.length, zB.push(BB.vs), lB += BB.barycenter * BB.weight, pB += BB.weight, qB = tO(zB, PB, qB)
      }));
      let ZB = {
        vs: zB.flat(1)
      };
      return pB && (ZB.barycenter = lB / pB, ZB.weight = pB), ZB
    }

    function tO(BB, OB, GB) {
      let YB;
      for (; OB.length && (YB = OB[OB.length - 1]).i <= GB;) OB.pop(), BB.push(YB.vs), GB++;
      return GB
    }

    function BG(BB, OB, GB, YB, DB) {
      var QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB;
      let ZB = null,
        NB = DB;
      "boolean" == typeof YB ? (NB = YB, ZB = null) : void 0 !== YB && (ZB = YB);
      let RB = BB.children(OB),
        WB = BB.node(OB),
        AB = WB ? WB.borderLeft : void 0,
        VB = WB ? WB.borderRight : void 0,
        SB = {};
      AB && (RB = RB.filter((BB => BB !== AB && BB !== VB)));
      let nB = function(BB) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((OB => {
          let GB = BB.inEdges(OB);
          if (!GB || !GB.length) return {
            v: OB
          };
          {
            let YB = GB.reduce(((OB, GB) => {
              let YB = BB.edge(GB),
                DB = BB.node(GB.v);
              return {
                sum: OB.sum + YB.weight * DB.order,
                weight: OB.weight + YB.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: OB,
              barycenter: YB.sum / YB.weight,
              weight: YB.weight
            }
          }
        }))
      }(BB, RB);
      nB.forEach((OB => {
        if (BB.children(OB.v).length) {
          let {
            result: YB
          } = BG(BB, OB.v, GB, ZB, NB);
          SB[OB.v] = YB, Object.hasOwn(YB, "barycenter") && function(BB, OB) {
            void 0 !== BB.barycenter ? (BB.barycenter = (BB.barycenter * BB.weight + OB.barycenter * OB.weight) / (BB.weight + OB.weight), BB.weight += OB.weight) : (BB.barycenter = OB.barycenter, BB.weight = OB.weight)
          }(OB, YB)
        }
      }));
      let UB = sO(nB, GB);
      ! function(BB, OB) {
        BB.forEach((BB => {
          BB.vs = BB.vs.flatMap((BB => OB[BB] ? OB[BB].vs : BB))
        }))
      }(UB, SB);
      let fB = {},
        kB = !1;
      for (let KB = 0; KB < UB.length; KB++)
        for (let OB = KB + 1; OB < UB.length; OB++)
          if (UB[KB] && UB[OB] && null != (QB = UB[KB]) && QB.barycenter && null != (oB = UB[OB]) && oB.barycenter && (null == (jB = UB[KB]) ? void 0 : jB.barycenter) === UB[OB].barycenter) {
            let GB = null != (JB = null == (yB = UB[KB]) ? void 0 : yB.vs[0]) ? JB : "",
              YB = null != (PB = null == (MB = UB[OB]) ? void 0 : MB.vs[0]) ? PB : "",
              DB = BB.node(GB),
              QB = BB.node(YB);
            if ("edge" === DB.dummy && "edge" === QB.dummy && (null == (zB = DB.edgeObj) ? void 0 : zB.v) === (null == (lB = QB.edgeObj) ? void 0 : lB.v) && (null == (pB = DB.edgeObj) ? void 0 : pB.w) === (null == (qB = QB.edgeObj) ? void 0 : qB.w)) {
              if (DB.edgeLabel.reversed) {
                fB[YB] = UB[KB], UB.splice(KB, 1), KB--;
                break
              }
              fB[GB] = UB[OB], UB.splice(OB, 1), OB--
            } else kB = !0
          } let dB = xO(UB, fB, ZB, BB, NB);
      if (AB && VB) {
        dB.vs = [AB, dB.vs, VB].flat(1);
        let OB = BB.predecessors(AB);
        if (OB && OB.length) {
          let GB = BB.node(OB[0]),
            YB = BB.predecessors(VB),
            DB = BB.node(YB[0]);
          Object.hasOwn(dB, "barycenter") || (dB.barycenter = 0, dB.weight = 0), dB.barycenter = (dB.barycenter * dB.weight + GB.order + DB.order) / (dB.weight + 2), dB.weight += 2
        }
      }
      return Object.defineProperty(dB, "result", {
        value: dB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(dB, "usedBias", {
        value: kB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), dB
    }

    function OG(BB, OB, GB, YB) {
      YB || (YB = BB.nodes());
      let DB = function(BB) {
          let OB;
          for (; BB.hasNode(OB = tB("_root")););
          return OB
        }(BB),
        QB = new EB({
          compound: !0
        }).setGraph({
          root: DB
        }).setDefaultNodeLabel((OB => BB.node(OB)));
      return YB.forEach((YB => {
        let oB = BB.node(YB),
          jB = BB.parent(YB);
        if (oB.rank === OB || oB.minRank <= OB && OB <= oB.maxRank) {
          QB.setNode(YB), QB.setParent(YB, jB || DB);
          let yB = BB[GB](YB);
          yB && yB.forEach((OB => {
            let GB = OB.v === YB ? OB.w : OB.v,
              DB = QB.edge(GB, YB),
              oB = void 0 !== DB ? DB.weight : 0;
            QB.setEdge(GB, YB, {
              weight: BB.edge(OB).weight + oB
            })
          })), Object.hasOwn(oB, "minRank") && QB.setNode(YB, {
            borderLeft: oB.borderLeft[OB],
            borderRight: oB.borderRight[OB]
          })
        }
      })), QB
    }

    function GG(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof OB.customOrder) return void OB.customOrder(BB, GG);
      let YB = HB(BB),
        DB = YG(BB, BO(1, YB + 1), "inEdges"),
        QB = YG(BB, BO(YB - 1, -1, -1), "outEdges"),
        oB = CO(BB, GB);
      if (QG(BB, oB), OB.disableOptimalOrderHeuristic) return;
      let jB, yB = Number.POSITIVE_INFINITY,
        JB = OB.constraints || [];
      for (let MB = 0, PB = 0; PB < 4; ++MB, ++PB) {
        DG(MB % 2 ? DB : QB, MB % 4 >= 2, JB, GB), oB = eB(BB);
        let OB = HO(BB, oB);
        OB < yB ? (PB = 0, jB = Object.assign({}, oB), yB = OB) : OB === yB && (jB = structuredClone(oB))
      }
      QG(BB, jB)
    }

    function YG(BB, OB, GB) {
      let YB = new Map,
        DB = (BB, OB) => {
          YB.has(BB) || YB.set(BB, []), YB.get(BB).push(OB)
        };
      for (let QB of BB.nodes()) {
        let OB = BB.node(QB);
        if ("number" == typeof OB.rank && DB(OB.rank, QB), "number" == typeof OB.minRank && "number" == typeof OB.maxRank)
          for (let BB = OB.minRank; BB <= OB.maxRank; BB++) BB !== OB.rank && DB(BB, QB)
      }
      return OB.map((function(OB) {
        return OG(BB, OB, GB, YB.get(OB) || [])
      }))
    }

    function DG(BB, OB, GB, YB) {
      let DB = !0,
        QB = new EB;
      BB.forEach((function(BB) {
        GB.forEach((BB => QB.setEdge(BB.left, BB.right)));
        let oB = BB.graph().root,
          {
            result: jB,
            usedBias: yB
          } = BG(BB, oB, QB, YB, DB);
        OB && yB && (DB = !DB), jB.vs.forEach(((OB, GB) => BB.node(OB).order = GB)),
          function(BB, OB, GB) {
            let YB, DB = {};
            GB.forEach((GB => {
              let QB, oB, jB = BB.parent(GB);
              for (; jB;) {
                if (QB = BB.parent(jB), QB ? (oB = DB[QB], DB[QB] = jB) : (oB = YB, YB = jB), oB && oB !== jB) return void OB.setEdge(oB, jB);
                jB = QB
              }
            }))
          }(BB, QB, jB.vs)
      }))
    }

    function QG(BB, OB) {
      Object.values(OB).forEach((OB => OB.forEach(((OB, GB) => BB.node(OB).order = GB))))
    }

    function oG(BB, OB, GB) {
      if (OB > GB) {
        let BB = OB;
        OB = GB, GB = BB
      }
      let YB = BB[OB];
      YB || (BB[OB] = YB = {}), YB[GB] = !0
    }

    function jG(BB, OB, GB) {
      if (OB > GB) {
        let BB = OB;
        OB = GB, GB = BB
      }
      let YB = BB[OB];
      return void 0 !== YB && Object.hasOwn(YB, GB)
    }

    function yG(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        QB = {},
        oB = function(BB, OB, GB, YB) {
          let DB = new EB,
            QB = BB.graph(),
            oB = function(BB, OB, GB) {
              return (YB, DB, QB) => {
                let oB, jB = YB.node(DB),
                  yB = YB.node(QB),
                  JB = 0;
                if (JB += jB.width / 2, Object.hasOwn(jB, "labelpos")) switch (jB.labelpos.toLowerCase()) {
                  case "l":
                    oB = -jB.width / 2;
                    break;
                  case "r":
                    oB = jB.width / 2
                }
                if (oB && (JB += GB ? oB : -oB), oB = void 0, JB += (jB.dummy ? OB : BB) / 2, JB += (yB.dummy ? OB : BB) / 2, JB += yB.width / 2, Object.hasOwn(yB, "labelpos")) switch (yB.labelpos.toLowerCase()) {
                  case "l":
                    oB = yB.width / 2;
                    break;
                  case "r":
                    oB = -yB.width / 2
                }
                return oB && (JB += GB ? oB : -oB), JB
              }
            }(QB.nodesep, QB.edgesep, YB);
          return OB.forEach((OB => {
            let YB;
            OB.forEach((OB => {
              let QB = GB[OB];
              if (void 0 !== QB) {
                if (DB.setNode(QB), void 0 !== YB) {
                  let jB = GB[YB];
                  if (void 0 !== jB) {
                    let GB = DB.edge(jB, QB);
                    DB.setEdge(jB, QB, Math.max(oB(BB, OB, YB), GB || 0))
                  }
                }
                YB = OB
              }
            }))
          })), DB
        }(BB, OB, GB, DB),
        jB = DB ? "borderLeft" : "borderRight";

      function yB(BB, OB) {
        let GB = oB.nodes().slice(),
          YB = {},
          DB = GB.pop();
        for (; DB;) {
          if (YB[DB]) BB(DB);
          else {
            YB[DB] = !0, GB.push(DB);
            for (let BB of OB(DB)) GB.push(BB)
          }
          DB = GB.pop()
        }
      }
      return yB((function(BB) {
        let OB = oB.inEdges(BB);
        QB[BB] = OB ? OB.reduce(((BB, OB) => {
          var GB;
          let YB = null != (GB = QB[OB.v]) ? GB : 0,
            DB = oB.edge(OB);
          return Math.max(BB, YB + (void 0 !== DB ? DB : 0))
        }), 0) : 0
      }), (function(BB) {
        return oB.predecessors(BB) || []
      })), yB((function(OB) {
        let GB = oB.outEdges(OB),
          YB = Number.POSITIVE_INFINITY;
        GB && (YB = GB.reduce(((BB, OB) => {
          let GB = QB[OB.w],
            YB = oB.edge(OB);
          return Math.min(BB, (void 0 !== GB ? GB : 0) - (void 0 !== YB ? YB : 0))
        }), Number.POSITIVE_INFINITY));
        let DB = BB.node(OB);
        YB !== Number.POSITIVE_INFINITY && DB.borderType !== jB && (QB[OB] = Math.max(void 0 !== QB[OB] ? QB[OB] : 0, YB))
      }), (function(BB) {
        return oB.successors(BB) || []
      })), Object.keys(YB).forEach((BB => {
        var OB;
        let YB = GB[BB];
        void 0 !== YB && (QB[BB] = null != (OB = QB[YB]) ? OB : 0)
      })), QB
    }

    function JG(BB, OB) {
      let GB, YB = eB(BB),
        DB = Object.assign(function(BB, OB) {
          let GB = {};
          return OB.length && OB.reduce((function(OB, YB) {
            let DB = 0,
              QB = 0,
              oB = OB.length,
              jB = YB[YB.length - 1];
            return YB.forEach(((OB, yB) => {
              let JB = function(BB, OB) {
                  if (BB.node(OB).dummy) {
                    let GB = BB.predecessors(OB);
                    if (GB) return GB.find((OB => BB.node(OB).dummy))
                  }
                }(BB, OB),
                MB = JB ? BB.node(JB).order : oB;
              (JB || OB === jB) && (YB.slice(QB, yB + 1).forEach((OB => {
                let YB = BB.predecessors(OB);
                YB && YB.forEach((YB => {
                  let QB = BB.node(YB),
                    oB = QB.order;
                  (oB < DB || MB < oB) && (!QB.dummy || !BB.node(OB).dummy) && oG(GB, YB, OB)
                }))
              })), QB = yB + 1, DB = MB)
            })), YB
          })), GB
        }(BB, YB), function(BB, OB) {
          let GB = {};

          function YB(OB, YB, DB, QB, oB) {
            BO(YB, DB).forEach((YB => {
              let DB = OB[YB];
              if (void 0 !== DB && BB.node(DB).dummy) {
                let OB = BB.predecessors(DB);
                OB && OB.forEach((OB => {
                  if (void 0 === OB) return;
                  let YB = BB.node(OB);
                  YB.dummy && (YB.order < QB || YB.order > oB) && oG(GB, OB, DB)
                }))
              }
            }))
          }
          return OB.length && OB.reduce((function(OB, GB) {
            let DB = -1,
              QB = -1,
              oB = 0;
            return GB.forEach(((jB, yB) => {
              if ("border" === BB.node(jB).dummy) {
                let OB = BB.predecessors(jB);
                if (OB && OB.length) {
                  let jB = OB[0];
                  if (void 0 === jB) return;
                  QB = BB.node(jB).order, YB(GB, oB, yB, DB, QB), oB = yB, DB = QB
                }
              }
              YB(GB, oB, GB.length, QB, OB.length)
            })), GB
          })), GB
        }(BB, YB)),
        QB = {};
      ["u", "d"].forEach((oB => {
        GB = "u" === oB ? YB : Object.values(YB).reverse(), ["l", "r"].forEach((YB => {
          "r" === YB && (GB = GB.map((BB => Object.values(BB).reverse())));
          let jB = function(BB, OB, GB, YB, DB) {
              let QB = {},
                oB = {},
                jB = {};
              return OB.forEach((BB => {
                BB.forEach(((BB, OB) => {
                  QB[BB] = BB, oB[BB] = BB, jB[BB] = OB
                }))
              })), OB.forEach((OB => {
                let yB = -1,
                  JB = -1,
                  MB = !1,
                  PB = OB,
                  zB = OB.findIndex((OB => (null == DB ? void 0 : DB.includes(OB)) || MG(OB, BB, DB)));
                zB > 0 && (PB = [OB[zB], ...OB.slice(0, zB), ...OB.slice(zB + 1)], MB = !0), PB.forEach((OB => {
                  var PB;
                  let zB = YB(OB);
                  if (zB && zB.length) {
                    null != DB && DB.includes(OB) && (zB = zB.filter((OB => MG(OB, BB, DB))));
                    let YB = zB.sort(((BB, OB) => {
                        let GB = jB[BB],
                          YB = jB[OB];
                        return (void 0 !== GB ? GB : 0) - (void 0 !== YB ? YB : 0)
                      })),
                      lB = (YB.length - 1) / 2;
                    for (let BB = Math.floor(lB), DB = Math.ceil(lB); BB <= DB; ++BB) {
                      let DB = YB[BB];
                      if (void 0 === DB) continue;
                      let zB = jB[DB];
                      if (void 0 !== zB && oB[OB] === OB && yB < zB && jB[DB] !== JB && !jG(GB, OB, DB)) {
                        let BB = QB[DB];
                        void 0 !== BB && (oB[DB] = OB, oB[OB] = QB[OB] = BB, yB = zB, MB && (yB = -1, JB = null != (PB = jB[DB]) ? PB : -1, MB = !1))
                      }
                    }
                  }
                }))
              })), {
                root: QB,
                align: oB
              }
            }(BB, GB, DB, (OB => ("u" === oB ? BB.predecessors(OB) : BB.successors(OB)) || []), OB),
            yB = yG(BB, GB, jB.root, jB.align, "r" === YB);
          "r" === YB && (yB = GO(yB, (BB => -BB))), QB[oB + YB] = yB
        }))
      }));
      let oB = function(BB, OB) {
        return Object.values(OB).reduce(((OB, GB) => {
          let YB = Number.NEGATIVE_INFINITY,
            DB = Number.POSITIVE_INFINITY;
          Object.entries(GB).forEach((OB => {
            let [GB, QB] = OB, oB = function(BB, OB) {
              return BB.node(OB).width
            }(BB, GB) / 2;
            YB = Math.max(QB + oB, YB), DB = Math.min(QB - oB, DB)
          }));
          let QB = YB - DB;
          return QB < OB[0] && (OB = [QB, GB]), OB
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(BB, QB);
      return function(BB, OB) {
          let GB = Object.values(OB),
            YB = CB(Math.min, GB),
            DB = CB(Math.max, GB);
          ["u", "d"].forEach((GB => {
            ["l", "r"].forEach((QB => {
              let oB = GB + QB,
                jB = BB[oB];
              if (!jB || jB === OB) return;
              let yB = Object.values(jB),
                JB = YB - CB(Math.min, yB);
              "l" !== QB && (JB = DB - CB(Math.max, yB)), JB && (BB[oB] = GO(jB, (BB => BB + JB)))
            }))
          }))
        }(QB, oB),
        function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            GB = BB.ul;
          return GB ? GO(GB, ((GB, YB) => {
            var DB, QB;
            if (OB) {
              let GB = OB.toLowerCase(),
                DB = BB[GB];
              if (DB && void 0 !== DB[YB]) return DB[YB]
            }
            let oB = Object.values(BB).map((BB => {
              let OB = BB[YB];
              return void 0 !== OB ? OB : 0
            })).sort(((BB, OB) => BB - OB));
            return ((null != (DB = oB[1]) ? DB : 0) + (null != (QB = oB[2]) ? QB : 0)) / 2
          })) : {}
        }(QB, BB.graph().align)
    }

    function MG(BB, OB, GB) {
      var YB;
      if (!GB) return !1;
      let DB = null == (YB = OB.node(BB)) ? void 0 : YB.edgeObj;
      if (!DB || OB.node(BB).edgeLabel.reversed) return !1;
      let QB = GB.indexOf(null == DB ? void 0 : DB.v),
        oB = GB.indexOf(null == DB ? void 0 : DB.w);
      return -1 !== QB && -1 !== oB && QB === (oB + 1) % GB.length || QB === (oB - 1) % GB.length
    }

    function PG(BB, OB) {
      (function(BB) {
        let OB = eB(BB),
          GB = BB.graph(),
          YB = GB.ranksep,
          DB = GB.rankalign,
          QB = 0;
        OB.forEach((OB => {
          let GB = OB.reduce(((OB, GB) => {
            var YB;
            let DB = null != (YB = BB.node(GB).height) ? YB : 0;
            return OB > DB ? OB : DB
          }), 0);
          OB.forEach((OB => {
            let YB = BB.node(OB);
            YB.y = "top" === DB ? QB + YB.height / 2 : "bottom" === DB ? QB + GB - YB.height / 2 : QB + GB / 2
          })), QB += GB + YB
        }))
      })(BB = hB(BB)), Object.entries(JG(BB, OB)).forEach((OB => {
        let [GB, YB] = OB;
        return BB.node(GB).x = YB
      }))
    }
    var zG = new WeakMap;

    function lG(BB) {
      return qG(BB, sB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), BB
    }

    function pG(BB, OB, GB) {
      let YB = OB;
      for (; void 0 !== YB;) {
        let OB = BB.parent(YB);
        if (OB === GB) return YB;
        YB = OB
      }
    }

    function qG(BB, OB, GB) {
      var YB;
      let DB = BB.nodes().filter((OB => BB.children(OB).length)),
        QB = {};
      DB.forEach((YB => {
        let DB = BB.node(YB);
        if (DB && DB.rankdir) {
          let oB = new EB({
            multigraph: !0,
            compound: !0
          });
          oB.setGraph({
            rankdir: DB.rankdir
          });
          let jB = BB.children(YB);
          jB.forEach((OB => {
            let GB = {
              ...BB.node(OB)
            };
            oB.setNode(OB, GB);
            let DB = BB.parent(OB);
            DB && DB !== YB && jB.includes(DB) && oB.setParent(OB, DB)
          }));
          let yB = new Set;
          BB.edges().forEach((OB => {
            let GB = pG(BB, OB.v, YB),
              DB = pG(BB, OB.w, YB);
            if (GB && DB && GB !== DB) {
              let YB = `${GB}\0${DB}`;
              yB.has(YB) || (yB.add(YB), oB.setEdge(GB, DB, {
                ...BB.edge(OB)
              }))
            }
          })), qG(oB, OB, GB);
          let JB = kG(oB);
          ZG(JB, OB, GB, null), NG(oB, JB);
          let MB = 1 / 0,
            PB = 1 / 0,
            zB = -1 / 0,
            lB = -1 / 0;
          oB.nodes().forEach((BB => {
            if (BB === YB) return;
            let OB = oB.node(BB);
            OB && "number" == typeof OB.x && "number" == typeof OB.y && "number" == typeof OB.width && "number" == typeof OB.height && (MB = Math.min(MB, OB.x - OB.width / 2), zB = Math.max(zB, OB.x + OB.width / 2), PB = Math.min(PB, OB.y - OB.height / 2), lB = Math.max(lB, OB.y + OB.height / 2))
          })), (!isFinite(MB) || !isFinite(PB) || !isFinite(zB) || !isFinite(lB)) && (MB = PB = 0, zB = lB = 0);
          let pB = zB - MB,
            qB = lB - PB;
          QB[YB] = {
            minX: MB,
            XD: PB,
            maxX: zB,
            wD: lB,
            width: pB,
            height: qB,
            offsetX: MB,
            offsetY: PB
          }, DB._dagreClusterSubgraph = oB
        }
      }));
      let oB = [],
        jB = new Map;
      DB.forEach((OB => {
        let GB = BB.node(OB);
        GB && GB.rankdir && QB[OB] && jB.set(OB, (BB.children(OB) || []).filter((BB => BB !== OB)))
      }));
      let yB = new Set([...jB.values()].flat()),
        JB = new Map;
      jB.forEach(((OB, GB) => {
        yB.has(GB) || JB.set(GB, (OB => {
          let GB = [],
            YB = (BB.children(OB) || []).filter((BB => BB !== OB));
          for (; YB.length > 0;) {
            let OB = YB.shift();
            GB.push(OB), (BB.children(OB) || []).filter((BB => BB !== OB)).forEach((BB => YB.push(BB)))
          }
          return GB
        })(GB))
      }));
      let MB = new Set([...JB.values()].flat()),
        PB = BB => {
          for (let [OB, GB] of JB)
            if (GB.includes(BB)) return OB;
          return BB
        },
        zB = [];
      BB.edges().forEach((OB => {
        (MB.has(OB.v) || MB.has(OB.w)) && zB.push({
          edge: OB,
          label: BB.edge(OB)
        })
      }));
      let lB = new Map;
      MB.forEach((OB => {
        let GB = BB.parent(OB);
        lB.set(OB, "string" == typeof GB ? GB : void 0)
      })), JB.forEach(((OB, GB) => {
        let YB = BB.node(GB),
          DB = [];
        OB.forEach((OB => {
          let GB = BB.node(OB);
          GB && (DB.push({
            id: OB,
            node: GB,
            parent: lB.get(OB)
          }), BB.removeNode(OB))
        }));
        let jB = zB.filter((BB => {
            let {
              edge: GB
            } = BB;
            return OB.includes(GB.v) || OB.includes(GB.w)
          })),
          yB = QB[GB];
        YB && (oB.push({
          clusterId: GB,
          subgraph: YB._dagreClusterSubgraph,
          bounds: yB,
          children: OB,
          removedNodes: DB,
          removedEdges: jB
        }), YB.width = yB.width, YB.height = yB.height)
      }));
      let pB = new Set;
      zB.forEach((OB => {
        let {
          edge: GB,
          label: YB
        } = OB, DB = PB(GB.v), QB = PB(GB.w);
        if (DB !== QB && BB.hasNode(DB) && BB.hasNode(QB)) {
          let OB = `${DB}\0${QB}`;
          pB.has(OB) || (pB.add(OB), BB.setEdge(DB, QB, {
            ...YB,
            width: 0,
            height: 0
          }))
        }
      }));
      let qB = kG(BB),
        ZB = ZG(qB, OB, GB, null != (YB = zG.get(BB)) ? YB : null);
      zG.set(BB, ZB), NG(BB, qB), pB.forEach((OB => {
        let GB = OB.indexOf("\0"),
          YB = OB.slice(0, GB),
          DB = OB.slice(GB + 1);
        BB.hasEdge(YB, DB) && BB.removeEdge(YB, DB)
      })), oB.forEach((OB => {
        let {
          clusterId: GB,
          subgraph: YB,
          bounds: DB,
          removedNodes: QB,
          removedEdges: oB
        } = OB;
        var jB, yB;
        let JB = BB.node(GB),
          MB = null != (jB = null == JB ? void 0 : JB.x) ? jB : 0,
          PB = null != (yB = null == JB ? void 0 : JB.y) ? yB : 0,
          zB = (DB.minX + DB.maxX) / 2,
          lB = (DB.XD + DB.wD) / 2;
        QB.forEach((OB => {
          let {
            id: GB,
            node: YB,
            parent: DB
          } = OB;
          BB.setNode(GB, YB), void 0 !== DB && BB.setParent(GB, DB)
        })), oB.forEach((OB => {
          let {
            edge: GB,
            label: YB
          } = OB;
          BB.setEdge(GB, YB)
        })), YB.nodes().forEach((OB => {
          if (OB === GB) return;
          let DB = YB.node(OB),
            QB = BB.node(OB);
          QB && DB && "number" == typeof DB.x && "number" == typeof DB.y && (QB.x = MB + (DB.x - zB), QB.y = PB + (DB.y - lB))
        })), delete JB._dagreClusterSubgraph
      })), DB.forEach((OB => {
        var GB, YB;
        let DB = BB.node(OB),
          oB = QB[OB];
        if (DB && DB.rankdir && DB._dagreClusterSubgraph && oB) {
          let QB = DB._dagreClusterSubgraph,
            jB = null != (GB = DB.x) ? GB : 0,
            yB = null != (YB = DB.y) ? YB : 0,
            JB = (oB.minX + oB.maxX) / 2,
            MB = (oB.XD + oB.wD) / 2;
          QB.nodes().forEach((GB => {
            if (GB === OB) return;
            let YB = QB.node(GB),
              DB = BB.node(GB);
            if (DB && YB && "number" == typeof YB.x && "number" == typeof YB.y) {
              let BB = YB.x - JB,
                OB = YB.y - MB;
              DB.x = jB + BB, DB.y = yB + OB
            }
          })), delete DB._dagreClusterSubgraph
        }
      }))
    }

    function ZG(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var DB, QB;
      let oB = !1 !== (null == GB ? void 0 : GB.useDynamic),
        jB = oB && null != (DB = null == YB ? void 0 : YB.graph) ? DB : null,
        yB = oB && null != (QB = null == YB ? void 0 : YB.rawNodes) ? QB : null;
      OB("    makeSpaceForEdgeLabels", (() => function(BB) {
        let OB = BB.graph();
        OB.ranksep /= 2, BB.edges().forEach((GB => {
          var YB;
          let DB = BB.edge(GB);
          DB.minlen *= 2, "c" !== (null != (YB = DB.labelpos) ? YB : "r").toLowerCase() && ("TB" === OB.rankdir || "BT" === OB.rankdir ? DB.width += DB.labeloffset : DB.height += DB.labeloffset)
        }))
      }(BB))), OB("    removeSelfEdges", (() => function(BB) {
        BB.edges().forEach((OB => {
          if (OB.v === OB.w) {
            let GB = BB.node(OB.v);
            GB.selfEdges || (GB.selfEdges = []), GB.selfEdges.push({
              e: OB,
              label: BB.edge(OB)
            }), BB.removeEdge(OB)
          }
        }))
      }(BB))), OB("    acyclic", (() => lO(BB, jB))), OB("    nestingGraph.run", (() => XO(BB))), OB("    rank", (() => iO(hB(BB)))), OB("    injectEdgeLabelProxies", (() => function(BB) {
        BB.edges().forEach((OB => {
          let GB = BB.edge(OB);
          if (GB.width && GB.height) {
            let GB = BB.node(OB.v),
              YB = {
                rank: (BB.node(OB.w).rank - GB.rank) / 2 + GB.rank,
                e: OB
              };
            cB(BB, "edge-proxy", YB, "_ep")
          }
        }))
      }(BB))), OB("    removeEmptyRanks", (() => function(BB) {
        let OB = BB.nodes().map((OB => BB.node(OB).rank)).filter((BB => void 0 !== BB)),
          GB = CB(Math.min, OB),
          YB = [];
        BB.nodes().forEach((OB => {
          let DB = BB.node(OB).rank - GB;
          YB[DB] || (YB[DB] = []), YB[DB].push(OB)
        }));
        let DB = 0,
          QB = BB.graph().nodeRankFactor;
        Array.from(YB).forEach(((OB, GB) => {
          void 0 === OB && GB % QB !== 0 ? --DB : void 0 !== OB && DB && OB.forEach((OB => BB.node(OB).rank += DB))
        }))
      }(BB))), OB("    nestingGraph.cleanup", (() => function(BB) {
        let OB = BB.graph();
        BB.removeNode(OB.nestingRoot), delete OB.nestingRoot, BB.edges().forEach((OB => {
          BB.edge(OB).nestingEdge && BB.removeEdge(OB)
        }))
      }(BB))), OB("    normalizeRanks", (() => function(BB) {
        let OB = BB.nodes().map((OB => {
            let GB = BB.node(OB).rank;
            return void 0 === GB ? Number.MAX_VALUE : GB
          })),
          GB = CB(Math.min, OB);
        BB.nodes().forEach((OB => {
          let YB = BB.node(OB);
          Object.hasOwn(YB, "rank") && (YB.rank -= GB)
        }))
      }(BB))), OB("    assignRankMinMax", (() => function(BB) {
        let OB = 0;
        BB.nodes().forEach((GB => {
          let YB = BB.node(GB);
          YB.borderTop && (YB.minRank = BB.node(YB.borderTop).rank, YB.maxRank = BB.node(YB.borderBottom).rank, OB = Math.max(OB, YB.maxRank))
        })), BB.graph().maxRank = OB
      }(BB))), OB("    removeEdgeLabelProxies", (() => function(BB) {
        BB.nodes().forEach((OB => {
          let GB = BB.node(OB);
          if ("edge-proxy" === GB.dummy) {
            let YB = GB;
            BB.edge(YB.e).labelRank = GB.rank, BB.removeNode(OB)
          }
        }))
      }(BB))), OB("    normalize.run", (() => pO(BB))), OB("    parentDummyChains", (() => rO(BB))), OB("    addBorderSegments", (() => EO(BB))), OB("    order", (() => GG(BB, GB, yB))), OB("    insertSelfEdges", (() => function(BB) {
        eB(BB).forEach((OB => {
          let GB = 0;
          OB.forEach(((OB, YB) => {
            let DB = BB.node(OB);
            "number" != typeof DB.rank && (DB.rank = 0), DB.order = YB + GB, (DB.selfEdges || []).forEach((OB => {
              cB(BB, "selfedge", {
                width: OB.label.width,
                height: OB.label.height,
                rank: DB.rank,
                order: YB + ++GB,
                e: OB.e,
                edgeLabel: OB.label
              }, "_se"), (!Array.isArray(OB.label.points) || 7 !== OB.label.points.length) && (OB.label.points = [{
                x: 0,
                y: -10
              }, {
                x: 0,
                y: -10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }])
            })), delete DB.selfEdges
          }))
        }))
      }(BB))), OB("    adjustCoordinateSystem", (() => function(BB) {
        var OB;
        let GB = null == (OB = BB.graph().rankdir) ? void 0 : OB.toLowerCase();
        ("lr" === GB || "rl" === GB) && aO(BB)
      }(BB))), OB("    position", (() => PG(BB, GB.corePath))), OB("    positionSelfEdges", (() => function(BB) {
        BB.nodes().forEach((OB => {
          let GB = BB.node(OB),
            YB = BB => "number" == typeof BB && isFinite(BB);
          if ("selfedge" === GB.dummy) {
            let DB = GB,
              QB = BB.node(DB.e.v),
              oB = YB(null == QB ? void 0 : QB.x) ? QB.x : 0,
              jB = YB(null == QB ? void 0 : QB.y) ? QB.y : 0,
              yB = YB(null == QB ? void 0 : QB.width) ? QB.width : 0,
              JB = YB(null == QB ? void 0 : QB.height) ? QB.height : 0,
              MB = YB(GB.x) ? GB.x : oB,
              PB = YB(GB.y) ? GB.y : jB,
              zB = yB / 2,
              lB = JB / 2;
            DB.edgeLabel.points = [{
              x: MB + zB,
              y: PB - lB
            }, {
              x: MB + zB,
              y: PB - lB
            }, {
              x: MB,
              y: PB
            }, {
              x: MB - zB,
              y: PB + lB
            }, {
              x: MB - zB,
              y: PB + lB
            }, {
              x: MB,
              y: PB
            }, {
              x: MB,
              y: PB
            }], DB.edgeLabel.x = MB, DB.edgeLabel.y = PB, BB.setEdge(DB.e, DB.edgeLabel), BB.removeNode(OB)
          } else GB && Array.isArray(GB.selfEdges) && GB.selfEdges.forEach((BB => {
            if (!Array.isArray(BB.label.points) || 7 !== BB.label.points.length) {
              let OB = YB(GB.x) ? GB.x : 0,
                DB = YB(GB.y) ? GB.y : 0,
                QB = (YB(GB.width) ? GB.width : 0) / 2,
                oB = (YB(GB.height) ? GB.height : 0) / 2;
              BB.label.points = [{
                x: OB + QB,
                y: DB - oB
              }, {
                x: OB + QB,
                y: DB - oB
              }, {
                x: OB,
                y: DB
              }, {
                x: OB - QB,
                y: DB + oB
              }, {
                x: OB - QB,
                y: DB + oB
              }, {
                x: OB,
                y: DB
              }, {
                x: OB,
                y: DB
              }]
            }
          }))
        }))
      }(BB)));
      let JB = JSON.parse(JSON.stringify(BB._nodes));
      return OB("    removeBorderNodes", (() => function(BB) {
        BB.nodes().forEach((OB => {
          if (BB.children(OB).length) {
            let GB = BB.node(OB),
              YB = BB.node(GB.borderTop),
              DB = BB.node(GB.borderBottom),
              QB = BB.node(GB.borderLeft[GB.borderLeft.length - 1]),
              oB = BB.node(GB.borderRight[GB.borderRight.length - 1]);
            GB.width = Math.abs(oB.x - QB.x), GB.height = Math.abs(DB.y - YB.y), GB.x = QB.x + GB.width / 2, GB.y = YB.y + GB.height / 2
          }
        })), BB.nodes().forEach((OB => {
          "border" === BB.node(OB).dummy && BB.removeNode(OB)
        }))
      }(BB))), OB("    normalize.undo", (() => function(BB) {
        BB.graph().dummyChains.forEach((OB => {
          let GB, YB = BB.node(OB),
            DB = YB.edgeLabel;
          for (BB.setEdge(YB.edgeObj, DB); YB.dummy;) GB = BB.successors(OB)[0], BB.removeNode(OB), DB.points.push({
            x: YB.x,
            y: YB.y
          }), "edge-label" === YB.dummy && (DB.x = YB.x, DB.y = YB.y, DB.width = YB.width, DB.height = YB.height), OB = GB, YB = BB.node(OB)
        }))
      }(BB))), OB("    fixupEdgeLabelCoords", (() => function(BB) {
        BB.edges().forEach((OB => {
          let GB = BB.edge(OB);
          if (Object.hasOwn(GB, "x")) switch (("l" === GB.labelpos || "r" === GB.labelpos) && (GB.width -= GB.labeloffset), GB.labelpos) {
            case "l":
              GB.x -= GB.width / 2 + GB.labeloffset;
              break;
            case "r":
              GB.x += GB.width / 2 + GB.labeloffset
          }
        }))
      }(BB))), OB("    undoCoordinateSystem", (() => hO(BB))), OB("    translateGraph", (() => function(BB) {
        let OB = Number.POSITIVE_INFINITY,
          GB = 0,
          YB = Number.POSITIVE_INFINITY,
          DB = 0,
          QB = BB.graph(),
          oB = QB.marginx || 0,
          jB = QB.marginy || 0;

        function yB(BB) {
          let QB = BB.x,
            oB = BB.y,
            jB = BB.width,
            yB = BB.height;
          OB = Math.min(OB, QB - jB / 2), GB = Math.max(GB, QB + jB / 2), YB = Math.min(YB, oB - yB / 2), DB = Math.max(DB, oB + yB / 2)
        }
        BB.nodes().forEach((OB => yB(BB.node(OB)))), BB.edges().forEach((OB => {
          let GB = BB.edge(OB);
          Object.hasOwn(GB, "x") && yB(GB)
        })), OB -= oB, YB -= jB, BB.nodes().forEach((GB => {
          let DB = BB.node(GB);
          DB.x -= OB, DB.y -= YB
        })), BB.edges().forEach((GB => {
          let DB = BB.edge(GB);
          DB.points.forEach((BB => {
            BB.x -= OB, BB.y -= YB
          })), Object.hasOwn(DB, "x") && (DB.x -= OB), Object.hasOwn(DB, "y") && (DB.y -= YB)
        })), QB.width = GB - OB + oB, QB.height = DB - YB + jB
      }(BB))), OB("    assignNodeIntersects", (() => function(BB) {
        BB.edges().forEach((OB => {
          if (OB.v === OB.w) return;
          let GB, YB, DB = BB.edge(OB),
            QB = BB.node(OB.v),
            oB = BB.node(OB.w);
          DB.points ? (GB = DB.points[0], YB = DB.points[DB.points.length - 1]) : (DB.points = [], GB = oB, YB = QB), DB.points.unshift(aB(QB, GB)), DB.points.push(aB(oB, YB))
        }))
      }(BB))), OB("    reversePoints", (() => function(BB) {
        BB.edges().forEach((OB => {
          let GB = BB.edge(OB);
          GB.reversed && GB.points.reverse()
        }))
      }(BB))), OB("    acyclic.undo", (() => function(BB) {
        BB.edges().forEach((OB => {
          let GB = BB.edge(OB);
          if (GB.reversed) {
            BB.removeEdge(OB);
            let YB = GB.forwardName;
            delete GB.reversed, delete GB.forwardName, BB.setEdge(OB.w, OB.v, GB, YB)
          }
        }))
      }(BB))), {
        graph: BB,
        rawNodes: JB
      }
    }

    function NG(BB, OB) {
      BB.nodes().forEach((GB => {
        let YB = BB.node(GB),
          DB = OB.node(GB);
        YB && (YB.x = DB.x, YB.y = DB.y, YB.order = DB.order, YB.rank = DB.rank, OB.children(GB).length && (YB.width = DB.width, YB.height = DB.height))
      })), BB.edges().forEach((GB => {
        let YB = BB.edge(GB),
          DB = OB.edge(GB);
        YB.points = DB.points, Object.hasOwn(DB, "x") && (YB.x = DB.x, YB.y = DB.y)
      })), BB.graph().width = OB.graph().width, BB.graph().height = OB.graph().height
    }
    var RG = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      WG = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      AG = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      VG = ["width", "height", "rank"],
      SG = {
        width: 0,
        height: 0
      },
      nG = ["minlen", "weight", "width", "height", "labeloffset"],
      UG = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      fG = ["labelpos"];

    function kG(BB) {
      let OB = new EB({
          multigraph: !0,
          compound: !0
        }),
        GB = KG(BB.graph());
      return OB.setGraph(Object.assign({}, WG, dG(GB, RG), OO(GB, AG))), BB.nodes().forEach((GB => {
        let YB = dG(KG(BB.node(GB)), VG);
        Object.keys(SG).forEach((BB => {
          void 0 === YB[BB] && (YB[BB] = SG[BB])
        })), OB.setNode(GB, YB);
        let DB = BB.parent(GB);
        void 0 !== DB && OB.setParent(GB, DB)
      })), BB.edges().forEach((GB => {
        let YB = KG(BB.edge(GB));
        OB.setEdge(GB, Object.assign({}, UG, dG(YB, nG), OO(YB, fG)))
      })), OB
    }

    function dG(BB, OB) {
      return GO(OO(BB, OB), Number)
    }

    function KG(BB) {
      let OB = {};
      return BB && Object.entries(BB).forEach((BB => {
        let [GB, YB] = BB;
        "string" == typeof GB && (GB = GB.toLowerCase()), OB[GB] = YB
      })), OB
    }

    function uG(BB) {
      let OB = eB(BB),
        GB = new EB({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return BB.nodes().forEach((OB => {
        GB.setNode(OB, {
          label: OB
        }), GB.setParent(OB, "layer" + BB.node(OB).rank)
      })), BB.edges().forEach((BB => GB.setEdge(BB.v, BB.w, {}, BB.name))), OB.forEach(((BB, OB) => {
        let YB = "layer" + OB;
        GB.setNode(YB, {
          rank: "same"
        }), BB.reduce(((BB, OB) => (GB.setEdge(BB, OB, {
          style: "invis"
        }), OB)))
      })), GB
    }
    var mG = {
        time: vB,
        notime: sB
      },
      IG = {
        graphlib: QB,
        version: QO,
        layout: lG,
        debug: uG,
        util: {
          time: vB,
          notime: sB
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);