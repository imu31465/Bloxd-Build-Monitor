/*! For license information please see 90jf8k.96.2cc2c619.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  5405: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Graph: () => sF,
      debug: () => ZS,
      default: () => YS,
      graphlib: () => uF,
      layout: () => ES,
      util: () => oS,
      version: () => uW
    });
    var CF = Object.defineProperty,
      AF = (FF, WF, SF) => ((FF, WF, SF) => WF in FF ? CF(FF, WF, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: SF
      }) : FF[WF] = SF)(FF, "symbol" != typeof WF ? WF + "" : WF, SF),
      uF = {};
    ((FF, WF) => {
      for (var SF in WF) CF(FF, SF, {
        get: WF[SF],
        enumerable: !0
      })
    })(uF, {
      Graph: () => sF,
      alg: () => tW
    });
    var hF = Object.defineProperty,
      bW = (FF, WF) => {
        for (var SF in WF) hF(FF, SF, {
          get: WF[SF],
          enumerable: !0
        })
      },
      dF = class {
        constructor(FF) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, FF && (this._isDirected = !("directed" in FF) || FF.directed, this._isMultigraph = "multigraph" in FF && FF.multigraph, this._isCompound = "compound" in FF && FF.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(FF) {
          return this._label = FF, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(FF) {
          return this._defaultNodeLabelFn = "function" != typeof FF ? () => FF : FF, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((FF => 0 === Object.keys(this._in[FF]).length))
        }
        sinks() {
          return this.nodes().filter((FF => 0 === Object.keys(this._out[FF]).length))
        }
        setNodes(FF, WF) {
          return FF.forEach((FF => {
            void 0 !== WF ? this.setNode(FF, WF) : this.setNode(FF)
          })), this
        }
        setNode(FF, WF) {
          return FF in this._nodes ? (arguments.length > 1 && (this._nodes[FF] = WF), this) : (this._nodes[FF] = arguments.length > 1 ? WF : this._defaultNodeLabelFn(FF), this._isCompound && (this._parent[FF] = "\0", this._children[FF] = {}, this._children["\0"][FF] = !0), this._in[FF] = {}, this._preds[FF] = {}, this._out[FF] = {}, this._sucs[FF] = {}, ++this._nodeCount, this)
        }
        node(FF) {
          return this._nodes[FF]
        }
        hasNode(FF) {
          return FF in this._nodes
        }
        removeNode(FF) {
          if (FF in this._nodes) {
            let WF = FF => this.removeEdge(this._edgeObjs[FF]);
            delete this._nodes[FF], this._isCompound && (this._removeFromParentsChildList(FF), delete this._parent[FF], this.children(FF).forEach((FF => {
              this.setParent(FF)
            })), delete this._children[FF]), Object.keys(this._in[FF]).forEach(WF), delete this._in[FF], delete this._preds[FF], Object.keys(this._out[FF]).forEach(WF), delete this._out[FF], delete this._sucs[FF], --this._nodeCount
          }
          return this
        }
        setParent(FF, WF) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === WF) WF = "\0";
          else {
            for (let SF = WF += ""; void 0 !== SF; SF = this.parent(SF))
              if (SF === FF) throw new Error("Setting " + WF + " as parent of " + FF + " would create a cycle");
            this.setNode(WF)
          }
          return this.setNode(FF), this._removeFromParentsChildList(FF), this._parent[FF] = WF, this._children[WF][FF] = !0, this
        }
        parent(FF) {
          if (this._isCompound) {
            let WF = this._parent[FF];
            if ("\0" !== WF) return WF
          }
        }
        children() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let WF = this._children[FF];
            if (WF) return Object.keys(WF)
          } else {
            if ("\0" === FF) return this.nodes();
            if (this.hasNode(FF)) return []
          }
          return []
        }
        predecessors(FF) {
          let WF = this._preds[FF];
          if (WF) return Object.keys(WF)
        }
        successors(FF) {
          let WF = this._sucs[FF];
          if (WF) return Object.keys(WF)
        }
        neighbors(FF) {
          let WF = this.predecessors(FF);
          if (WF) {
            let SF = new Set(WF),
              CF = this.successors(FF);
            if (CF)
              for (let FF of CF) SF.add(FF);
            return Array.from(SF.values())
          }
        }
        isLeaf(FF) {
          var WF;
          let SF;
          return SF = this.isDirected() ? this.successors(FF) : this.neighbors(FF), 0 === (null != (WF = null == SF ? void 0 : SF.length) ? WF : 0)
        }
        filterNodes(FF) {
          let WF = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          WF.setGraph(this.graph()), Object.entries(this._nodes).forEach((SF => {
            let [CF, AF] = SF;
            FF(CF) && WF.setNode(CF, AF)
          })), Object.values(this._edgeObjs).forEach((FF => {
            WF.hasNode(FF.v) && WF.hasNode(FF.w) && WF.setEdge(FF, this.edge(FF))
          }));
          let SF = {},
            CF = FF => {
              let AF = this.parent(FF);
              return !AF || WF.hasNode(AF) ? (SF[FF] = AF, AF) : AF in SF ? SF[AF] : CF(AF)
            };
          return this._isCompound && WF.nodes().forEach((FF => WF.setParent(FF, CF(FF)))), WF
        }
        setDefaultEdgeLabel(FF) {
          return this._defaultEdgeLabelFn = "function" != typeof FF ? () => FF : FF, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(FF, WF) {
          return FF.reduce(((FF, SF) => (void 0 !== WF ? this.setEdge(FF, SF, WF) : this.setEdge(FF, SF), SF))), this
        }
        setEdge(FF, WF, SF, CF) {
          let AF, uF, hF, bW, dF = !1;
          "object" == typeof FF && null !== FF && "v" in FF ? (AF = FF.v, uF = FF.w, hF = FF.name, 2 === arguments.length && (bW = WF, dF = !0)) : (AF = FF, uF = WF, hF = CF, arguments.length > 2 && (bW = SF, dF = !0)), AF = "" + AF, uF = "" + uF, void 0 !== hF && (hF = "" + hF);
          let RF = iW(this._isDirected, AF, uF, hF);
          if (RF in this._edgeLabels) return dF && (this._edgeLabels[RF] = bW), this;
          if (void 0 !== hF && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(AF), this.setNode(uF), this._edgeLabels[RF] = dF ? bW : this._defaultEdgeLabelFn(AF, uF, hF);
          let eF = function(FF, WF, SF, CF) {
            let AF = "" + WF,
              uF = "" + SF;
            if (!FF && AF > uF) {
              let FF = AF;
              AF = uF, uF = FF
            }
            let hF = {
              v: AF,
              w: uF
            };
            return CF && (hF.name = CF), hF
          }(this._isDirected, AF, uF, hF);
          return AF = eF.v, uF = eF.w, Object.freeze(eF), this._edgeObjs[RF] = eF, PF(this._preds[uF], AF), PF(this._sucs[AF], uF), this._in[uF][RF] = eF, this._out[AF][RF] = eF, this._edgeCount++, this
        }
        edge(FF, WF, SF) {
          let CF = 1 === arguments.length ? eF(this._isDirected, FF) : iW(this._isDirected, FF, WF, SF);
          return this._edgeLabels[CF]
        }
        edgeAsObj(FF, WF, SF) {
          let CF = 1 === arguments.length ? this.edge(FF) : this.edge(FF, WF, SF);
          return "object" != typeof CF || null === CF ? {
            label: CF
          } : CF
        }
        hasEdge(FF, WF, SF) {
          return (1 === arguments.length ? eF(this._isDirected, FF) : iW(this._isDirected, FF, WF, SF)) in this._edgeLabels
        }
        removeEdge(FF, WF, SF) {
          let CF = 1 === arguments.length ? eF(this._isDirected, FF) : iW(this._isDirected, FF, WF, SF),
            AF = this._edgeObjs[CF];
          if (AF) {
            let FF = AF.v,
              WF = AF.w;
            delete this._edgeLabels[CF], delete this._edgeObjs[CF], RF(this._preds[WF], FF), RF(this._sucs[FF], WF), delete this._in[WF][CF], delete this._out[FF][CF], this._edgeCount--
          }
          return this
        }
        inEdges(FF, WF) {
          return this.isDirected() ? this.filterEdges(this._in[FF], FF, WF) : this.nodeEdges(FF, WF)
        }
        outEdges(FF, WF) {
          return this.isDirected() ? this.filterEdges(this._out[FF], FF, WF) : this.nodeEdges(FF, WF)
        }
        nodeEdges(FF, WF) {
          if (FF in this._nodes) return this.filterEdges({
            ...this._in[FF],
            ...this._out[FF]
          }, FF, WF)
        }
        _removeFromParentsChildList(FF) {
          delete this._children[this._parent[FF]][FF]
        }
        filterEdges(FF, WF, SF) {
          if (!FF) return;
          let CF = Object.values(FF);
          return SF ? CF.filter((FF => FF.v === WF && FF.w === SF || FF.v === SF && FF.w === WF)) : CF
        }
      };

    function PF(FF, WF) {
      FF[WF] ? FF[WF]++ : FF[WF] = 1
    }

    function RF(FF, WF) {
      void 0 !== FF[WF] && !--FF[WF] && delete FF[WF]
    }

    function iW(FF, WF, SF, CF) {
      let AF = "" + WF,
        uF = "" + SF;
      if (!FF && AF > uF) {
        let FF = AF;
        AF = uF, uF = FF
      }
      return AF + "\x01" + uF + "\x01" + (void 0 === CF ? "\0" : CF)
    }

    function eF(FF, WF) {
      return iW(FF, WF.v, WF.w, WF.name)
    }

    function EF(FF) {
      let WF = {
          options: {
            directed: FF.isDirected(),
            multigraph: FF.isMultigraph(),
            compound: FF.isCompound()
          },
          nodes: QF(FF),
          edges: rW(FF)
        },
        SF = FF.graph();
      return void 0 !== SF && (WF.value = structuredClone(SF)), WF
    }

    function QF(FF) {
      return FF.nodes().map((WF => {
        let SF = FF.node(WF),
          CF = FF.parent(WF),
          AF = {
            v: WF
          };
        return void 0 !== SF && (AF.value = SF), void 0 !== CF && (AF.parent = CF), AF
      }))
    }

    function rW(FF) {
      return FF.edges().map((WF => {
        let SF = FF.edge(WF),
          CF = {
            v: WF.v,
            w: WF.w
          };
        return void 0 !== WF.name && (CF.name = WF.name), void 0 !== SF && (CF.value = SF), CF
      }))
    }

    function gW(FF) {
      let WF = new dF(FF.options);
      return void 0 !== FF.value && WF.setGraph(FF.value), FF.nodes.forEach((FF => {
        WF.setNode(FF.v, FF.value), FF.parent && WF.setParent(FF.v, FF.parent)
      })), FF.edges.forEach((FF => {
        WF.setEdge({
          v: FF.v,
          w: FF.w,
          name: FF.name
        }, FF.value)
      })), WF
    }
    bW({}, {
      read: () => gW,
      write: () => EF
    });
    var tW = {};
    bW(tW, {
      CycleException: () => ZF,
      bellmanFord: () => aW,
      components: () => kW,
      dijkstra: () => NF,
      dijkstraAll: () => DF,
      findCycles: () => mW,
      floydWarshall: () => xW,
      isAcyclic: () => YF,
      postorder: () => zW,
      preorder: () => IF,
      prim: () => fF,
      shortestPaths: () => yW,
      tarjan: () => LF,
      topsort: () => oF
    });
    var TF = () => 1;

    function aW(FF, WF, SF, CF) {
      return function(FF, WF, SF, CF) {
        let AF, uF = {},
          hF = 0,
          bW = FF.nodes(),
          dF = function(FF) {
            let WF = uF[FF.v],
              CF = uF[FF.w];
            if (!WF || !CF) return;
            let hF = SF(FF);
            WF.distance + hF < CF.distance && (uF[FF.w] = {
              distance: WF.distance + hF,
              predecessor: FF.v
            }, AF = !0)
          },
          PF = function() {
            bW.forEach((function(FF) {
              CF(FF).forEach((function(WF) {
                let SF = WF.v === FF ? WF.v : WF.w,
                  CF = SF === WF.v ? WF.w : WF.v;
                dF({
                  v: SF,
                  w: CF
                })
              }))
            }))
          };
        bW.forEach((function(FF) {
          let SF = FF === WF ? 0 : Number.POSITIVE_INFINITY;
          uF[FF] = {
            distance: SF,
            predecessor: ""
          }
        }));
        let RF = bW.length;
        for (let iW = 1; iW < RF && (AF = !1, hF++, PF(), AF); iW++);
        if (hF === RF - 1 && (AF = !1, PF(), AF)) throw new Error("The graph contains a negative weight cycle");
        return uF
      }(FF, String(WF), SF || TF, CF || function(WF) {
        var SF;
        return null != (SF = FF.outEdges(WF)) ? SF : []
      })
    }

    function kW(FF) {
      let WF, SF = {},
        CF = [];

      function AF(CF) {
        var uF, hF;
        CF in SF || (SF[CF] = !0, WF.push(CF), null == (uF = FF.successors(CF)) || uF.forEach(AF), null == (hF = FF.predecessors(CF)) || hF.forEach(AF))
      }
      return FF.nodes().forEach((function(FF) {
        WF = [], AF(FF), WF.length && CF.push(WF)
      })), CF
    }
    var qW = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((FF => FF.key))
        }
        has(FF) {
          return FF in this._keyIndices
        }
        priority(FF) {
          let WF = this._keyIndices[FF];
          if (void 0 !== WF) return this._arr[WF].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(FF, WF) {
          let SF = this._keyIndices,
            CF = String(FF);
          if (!(CF in SF)) {
            let FF = this._arr,
              AF = FF.length;
            return SF[CF] = AF, FF.push({
              key: CF,
              priority: WF
            }), this._decrease(AF), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let FF = this._arr.pop();
          return delete this._keyIndices[FF.key], this._heapify(0), FF.key
        }
        decrease(FF, WF) {
          let SF = this._keyIndices[FF];
          if (void 0 === SF) throw new Error(`Key not found: ${FF}`);
          let CF = this._arr[SF].priority;
          if (WF > CF) throw new Error(`New priority is greater than current priority. Key: ${FF} Old: ${CF} New: ${WF}`);
          this._arr[SF].priority = WF, this._decrease(SF)
        }
        _heapify(FF) {
          let WF = this._arr,
            SF = 2 * FF,
            CF = SF + 1,
            AF = FF;
          SF < WF.length && (AF = WF[SF].priority < WF[AF].priority ? SF : AF, CF < WF.length && (AF = WF[CF].priority < WF[AF].priority ? CF : AF), AF !== FF && (this._swap(FF, AF), this._heapify(AF)))
        }
        _decrease(FF) {
          let WF, SF = this._arr,
            CF = SF[FF].priority;
          for (; 0 !== FF && (WF = FF >> 1, !(SF[WF].priority < CF));) this._swap(FF, WF), FF = WF
        }
        _swap(FF, WF) {
          let SF = this._arr,
            CF = this._keyIndices,
            AF = SF[FF],
            uF = SF[WF];
          SF[FF] = uF, SF[WF] = AF, CF[uF.key] = FF, CF[AF.key] = WF
        }
      },
      VF = () => 1;

    function NF(FF, WF, SF, CF) {
      return function(FF, WF, SF, CF) {
        let AF, uF, hF = {},
          bW = new qW,
          dF = function(FF) {
            let WF = FF.v !== AF ? FF.v : FF.w,
              CF = hF[WF];
            if (!CF) return;
            let dF = SF(FF),
              PF = uF.distance + dF;
            if (dF < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + FF + " Weight: " + dF);
            PF < CF.distance && (CF.distance = PF, CF.predecessor = AF, bW.decrease(WF, PF))
          };
        for (FF.nodes().forEach((function(FF) {
            let SF = FF === WF ? 0 : Number.POSITIVE_INFINITY;
            hF[FF] = {
              distance: SF,
              predecessor: ""
            }, bW.add(FF, SF)
          })); bW.size() > 0;) {
          AF = bW.removeMin();
          let FF = hF[AF];
          if (!FF || FF.distance === Number.POSITIVE_INFINITY) break;
          uF = FF, CF(AF).forEach(dF)
        }
        return hF
      }(FF, String(WF), SF || VF, CF || function(WF) {
        var SF;
        return null != (SF = FF.outEdges(WF)) ? SF : []
      })
    }

    function DF(FF, WF, SF) {
      return FF.nodes().reduce((function(CF, AF) {
        return CF[AF] = NF(FF, AF, WF, SF), CF
      }), {})
    }

    function LF(FF) {
      let WF = 0,
        SF = [],
        CF = {},
        AF = [];

      function uF(hF) {
        var bW;
        let dF = CF[hF] = {
          onStack: !0,
          lowlink: WF,
          index: WF++
        };
        if (SF.push(hF), null == (bW = FF.successors(hF)) || bW.forEach((function(FF) {
            if (FF in CF) {
              let WF = CF[FF];
              null != WF && WF.onStack && (dF.lowlink = Math.min(dF.lowlink, WF.index))
            } else {
              uF(FF);
              let WF = CF[FF];
              WF && (dF.lowlink = Math.min(dF.lowlink, WF.lowlink))
            }
          })), dF.lowlink === dF.index) {
          let FF, WF = [];
          do {
            FF = SF.pop();
            let AF = CF[FF];
            AF && (AF.onStack = !1), WF.push(FF)
          } while (hF !== FF);
          AF.push(WF)
        }
      }
      return FF.nodes().forEach((function(FF) {
        FF in CF || uF(FF)
      })), AF
    }

    function mW(FF) {
      return LF(FF).filter((function(WF) {
        var SF;
        let CF = WF[0];
        return !!CF && (WF.length > 1 || 1 === WF.length && (null != (SF = FF.outEdges(CF, CF)) ? SF : []).length > 0)
      }))
    }
    var OF = () => 1;

    function xW(FF, WF, SF) {
      return function(FF, WF, SF) {
        let CF = {},
          AF = FF.nodes();
        return AF.forEach((function(FF) {
          let uF = {};
          CF[FF] = uF, uF[FF] = {
            distance: 0,
            predecessor: ""
          }, AF.forEach((function(WF) {
            FF !== WF && (uF[WF] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), SF(FF).forEach((function(SF) {
            let CF = SF.v === FF ? SF.w : SF.v,
              AF = WF(SF);
            uF[CF] = {
              distance: AF,
              predecessor: FF
            }
          }))
        })), AF.forEach((function(FF) {
          let WF = CF[FF];
          WF && AF.forEach((function(SF) {
            let uF = CF[SF];
            uF && AF.forEach((function(SF) {
              let CF = uF[FF],
                AF = WF[SF],
                hF = uF[SF];
              if (CF && AF && hF) {
                let FF = CF.distance + AF.distance;
                FF < hF.distance && (hF.distance = FF, hF.predecessor = AF.predecessor)
              }
            }))
          }))
        })), CF
      }(FF, WF || OF, SF || function(WF) {
        var SF;
        return null != (SF = FF.outEdges(WF)) ? SF : []
      })
    }
    var ZF = class extends Error {
      constructor(FF) {
        super(FF), this.name = "CycleException"
      }
    };

    function oF(FF) {
      let WF = {},
        SF = {},
        CF = [];
      if (FF.sinks().forEach((function AF(uF) {
          var hF;
          if (uF in SF) throw new ZF;
          uF in WF || (SF[uF] = !0, WF[uF] = !0, null == (hF = FF.predecessors(uF)) || hF.forEach(AF), delete SF[uF], CF.push(uF))
        })), Object.keys(WF).length !== FF.nodeCount()) throw new ZF;
      return CF
    }

    function YF(FF) {
      try {
        oF(FF)
      } catch (WF) {
        if (WF instanceof ZF) return !1;
        throw WF
      }
      return !0
    }

    function MF(FF, WF, SF, CF, AF) {
      Array.isArray(WF) || (WF = [WF]);
      let uF = WF => {
          var SF;
          return null != (SF = FF.isDirected() ? FF.successors(WF) : FF.neighbors(WF)) ? SF : []
        },
        hF = {};
      return WF.forEach((function(WF) {
        if (!FF.hasNode(WF)) throw new Error("Graph does not have node: " + WF);
        AF = cW(FF, WF, "post" === SF, hF, uF, CF, AF)
      })), AF
    }

    function cW(FF, WF, SF, CF, AF, uF, hF) {
      return WF in CF || (CF[WF] = !0, SF || (hF = uF(hF, WF)), AF(WF).forEach((function(WF) {
        hF = cW(FF, WF, SF, CF, AF, uF, hF)
      })), SF && (hF = uF(hF, WF))), hF
    }

    function GF(FF, WF, SF) {
      return MF(FF, WF, SF, (function(FF, WF) {
        return FF.push(WF), FF
      }), [])
    }

    function zW(FF, WF) {
      return GF(FF, WF, "post")
    }

    function IF(FF, WF) {
      return GF(FF, WF, "pre")
    }

    function fF(FF, WF) {
      var SF;
      let CF, AF = new dF,
        uF = {},
        hF = new qW;

      function bW(FF) {
        let SF = FF.v === CF ? FF.w : FF.v,
          AF = hF.priority(SF);
        if (void 0 !== AF) {
          let bW = WF(FF);
          bW < AF && (uF[SF] = CF, hF.decrease(SF, bW))
        }
      }
      if (0 === FF.nodeCount()) return AF;
      FF.nodes().forEach((function(FF) {
        hF.add(FF, Number.POSITIVE_INFINITY), AF.setNode(FF)
      }));
      let PF = FF.nodes()[0];
      void 0 !== PF && hF.decrease(PF, 0);
      let RF = !1;
      for (; hF.size() > 0;) {
        if (CF = hF.removeMin(), CF in uF) AF.setEdge(CF, uF[CF]);
        else {
          if (RF) throw new Error("Input graph is not connected: " + FF);
          RF = !0
        }
        null == (SF = FF.nodeEdges(CF)) || SF.forEach(bW)
      }
      return AF
    }

    function yW(FF, WF, SF, CF) {
      return function(FF, WF, SF, CF) {
        if (void 0 === SF) return NF(FF, WF, SF, CF);
        let AF = !1,
          uF = FF.nodes();
        for (let hF = 0; hF < uF.length; hF++) {
          let bW = uF[hF];
          if (void 0 === bW) continue;
          let dF = CF(bW);
          for (let FF = 0; FF < dF.length; FF++) {
            let WF = dF[FF];
            if (!WF) continue;
            let CF = WF.v === bW ? WF.v : WF.w;
            SF({
              v: CF,
              w: CF === WF.v ? WF.w : WF.v
            }) < 0 && (AF = !0)
          }
          if (AF) return aW(FF, WF, SF, CF)
        }
        return NF(FF, WF, SF, CF)
      }(FF, WF, SF, null != CF ? CF : WF => {
        var SF;
        return null != (SF = FF.outEdges(WF)) ? SF : []
      })
    }
    var sF = dF;

    function nF(FF, WF, SF, CF) {
      let AF = CF;
      for (; FF.hasNode(AF);) AF = lF(CF);
      return SF.dummy = WF, FF.setNode(AF, SF), AF
    }

    function HF(FF) {
      let WF = new sF({
        multigraph: FF.isMultigraph()
      }).setGraph(FF.graph());
      return FF.nodes().forEach((SF => {
        FF.children(SF).length || WF.setNode(SF, FF.node(SF))
      })), FF.edges().forEach((SF => {
        WF.setEdge(SF, FF.edge(SF))
      })), WF
    }

    function KF(FF, WF) {
      let SF, CF, AF = FF.x,
        uF = FF.y,
        hF = WF.x - AF,
        bW = WF.y - uF,
        dF = FF.width / 2,
        PF = FF.height / 2;
      if (!hF && !bW) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(bW) * dF > Math.abs(hF) * PF ? (bW < 0 && (PF = -PF), SF = PF * hF / bW, CF = PF) : (hF < 0 && (dF = -dF), SF = dF, CF = dF * bW / hF), {
        x: AF + SF,
        y: uF + CF
      }
    }

    function wF(FF) {
      let WF = FW(jW(FF) + 1).map((() => []));
      return FF.nodes().forEach((SF => {
        let CF = FF.node(SF),
          AF = CF.rank;
        void 0 !== AF && (WF[AF] || (WF[AF] = []), WF[AF][CF.order] = SF)
      })), WF
    }

    function XF(FF, WF, SF, CF) {
      let AF = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (AF.rank = SF, AF.order = CF), nF(FF, "border", AF, WF)
    }
    var UF = 65535;

    function BF(FF, WF) {
      if (WF.length > UF) {
        let SF = function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UF,
            SF = [];
          for (let CF = 0; CF < FF.length; CF += WF) {
            let AF = FF.slice(CF, CF + WF);
            SF.push(AF)
          }
          return SF
        }(WF);
        return FF(...SF.map((WF => FF(...WF))))
      }
      return FF(...WF)
    }

    function jW(FF) {
      let WF = FF.nodes().map((WF => {
        let SF = FF.node(WF).rank;
        return void 0 === SF ? Number.MIN_VALUE : SF
      }));
      return BF(Math.max, WF)
    }

    function vW(FF, WF) {
      let SF = Date.now();
      try {
        return WF()
      } finally {
        console.log(FF + " time: " + (Date.now() - SF) + "ms")
      }
    }

    function JF(FF, WF) {
      return WF()
    }
    var pF = 0;

    function lF(FF) {
      return FF + "" + ++pF
    }

    function FW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == WF && (WF = FF, FF = 0);
      let CF = FF => FF < WF;
      SF < 0 && (CF = FF => WF < FF);
      let AF = [];
      for (let uF = FF; CF(uF); uF += SF) AF.push(uF);
      return AF
    }

    function WW(FF, WF) {
      let SF = {};
      for (let CF of WF) void 0 !== FF[CF] && (SF[CF] = FF[CF]);
      return SF
    }

    function SW(FF, WF) {
      let SF;
      return SF = "string" == typeof WF ? FF => FF[WF] : WF, Object.entries(FF).reduce(((FF, WF) => {
        let [CF, AF] = WF;
        return FF[CF] = SF(AF, CF), FF
      }), {})
    }
    var CW = "\0";

    function AW(FF, WF, SF) {
      var CF, AF, uF, hF, bW, dF;
      if (!(FF && WF && SF && "edge" === WF.dummy && "edge" === SF.dummy && WF.edgeObj && SF.edgeObj && FF[WF.edgeObj.v] && FF[SF.edgeObj.v] && FF[WF.edgeObj.w] && FF[SF.edgeObj.w])) return 0;
      let PF = !0;
      WF.edgeObj.w === SF.edgeObj.w && (PF = !1);
      let RF = PF ? null != (AF = null == (CF = FF[WF.edgeObj.v]) ? void 0 : CF.rank) ? AF : NaN : null != (hF = null == (uF = FF[WF.edgeObj.w]) ? void 0 : uF.rank) ? hF : NaN,
        iW = Object.entries(FF).find((FF => {
          var SF, CF;
          return (null == (SF = FF[1].edgeObj) ? void 0 : SF.v) === WF.edgeObj.v && (null == (CF = FF[1].edgeObj) ? void 0 : CF.w) === WF.edgeObj.w && FF[1].rank === RF
        })),
        eF = Object.entries(FF).find((FF => {
          var WF, CF;
          return (null == (WF = FF[1].edgeObj) ? void 0 : WF.v) === SF.edgeObj.v && (null == (CF = FF[1].edgeObj) ? void 0 : CF.w) === SF.edgeObj.w && FF[1].rank === RF
        }));
      if (!iW || !eF) return 0;
      let EF = null != (bW = iW[1].order) ? bW : NaN,
        QF = null != (dF = eF[1].order) ? dF : NaN;
      return isNaN(EF - QF) ? 0 : EF - QF
    }
    var uW = "3.1.1";

    function hW(FF) {
      FF._prev._next = FF._next, FF._next._prev = FF._prev, delete FF._next, delete FF._prev
    }

    function bS(FF, WF) {
      if ("_next" !== FF && "_prev" !== FF) return WF
    }
    var dW = class {
        constructor() {
          AF(this, "_sentinel");
          let FF = {};
          FF._next = FF._prev = FF, this._sentinel = FF
        }
        dequeue() {
          let FF = this._sentinel,
            WF = FF._prev;
          if (WF !== FF) return hW(WF), WF
        }
        enqueue(FF) {
          let WF = this._sentinel;
          FF._prev && FF._next && hW(FF), FF._next = WF._next, WF._next._prev = FF, WF._next = FF, FF._prev = WF
        }
        toString() {
          let FF = [],
            WF = this._sentinel,
            SF = WF._prev;
          for (; SF !== WF;) FF.push(JSON.stringify(SF, bS)), SF = SF._prev;
          return "[" + FF.join(", ") + "]"
        }
      },
      PW = () => 1;

    function RW(FF, WF) {
      if (FF.nodeCount() <= 1) return [];
      let SF = function(FF, WF) {
        let SF = new sF,
          CF = 0,
          AF = 0;
        FF.nodes().forEach((FF => {
          SF.setNode(FF, {
            v: FF,
            in: 0,
            out: 0
          })
        })), FF.edges().forEach((FF => {
          let uF = SF.edge(FF.v, FF.w) || 0,
            hF = WF(FF),
            bW = uF + hF;
          SF.setEdge(FF.v, FF.w, bW);
          let dF = SF.node(FF.v),
            PF = SF.node(FF.w);
          AF = Math.max(AF, dF.out += hF), CF = Math.max(CF, PF.in += hF)
        }));
        let uF = function(FF) {
            let WF = [];
            for (let SF = 0; SF < FF; SF++) WF.push(SF);
            return WF
          }(AF + CF + 3).map((() => new dW)),
          hF = CF + 1;
        return SF.nodes().forEach((FF => {
          eW(uF, hF, SF.node(FF))
        })), {
          graph: SF,
          buckets: uF,
          zeroIdx: hF
        }
      }(FF, WF || PW);
      return function(FF, WF, SF) {
        var CF;
        let AF, uF = [],
          hF = WF[WF.length - 1],
          bW = WF[0];
        for (; FF.nodeCount();) {
          for (; AF = bW.dequeue();) iS(FF, WF, SF, AF);
          for (; AF = hF.dequeue();) iS(FF, WF, SF, AF);
          if (FF.nodeCount())
            for (let hF = WF.length - 2; hF > 0; --hF)
              if (AF = null == (CF = WF[hF]) ? void 0 : CF.dequeue(), AF) {
                uF = uF.concat(iS(FF, WF, SF, AF, !0) || []);
                break
              }
        }
        return uF
      }(SF.graph, SF.buckets, SF.zeroIdx).flatMap((WF => FF.outEdges(WF.v, WF.w) || []))
    }

    function iS(FF, WF, SF, CF, AF) {
      let uF = [],
        hF = AF ? uF : void 0;
      return (FF.inEdges(CF.v) || []).forEach((CF => {
        let hF = FF.edge(CF),
          bW = FF.node(CF.v);
        AF && uF.push({
          v: CF.v,
          w: CF.w
        }), bW.out -= hF, eW(WF, SF, bW)
      })), (FF.outEdges(CF.v) || []).forEach((CF => {
        let AF = FF.edge(CF),
          uF = CF.w,
          hF = FF.node(uF);
        hF.in -= AF, eW(WF, SF, hF)
      })), FF.removeNode(CF.v), hF
    }

    function eW(FF, WF, SF) {
      var CF, AF, uF;
      SF.out ? SF.in ? null == (uF = FF[SF.out - SF.in + WF]) || uF.enqueue(SF) : null == (AF = FF[FF.length - 1]) || AF.enqueue(SF) : null == (CF = FF[0]) || CF.enqueue(SF)
    }

    function EW(FF, WF) {
      var SF;
      ("greedy" === FF.graph().acyclicer ? RW(FF, (SF = FF, FF => SF.edge(FF).weight)) : function(FF, WF) {
        let SF = [],
          CF = {},
          AF = {};

        function uF(WF) {
          Object.hasOwn(AF, WF) || (AF[WF] = !0, CF[WF] = !0, FF.outEdges(WF).forEach((FF => {
            Object.hasOwn(CF, FF.w) ? SF.push(FF) : uF(FF.w)
          })), delete CF[WF])
        }

        function hF(uF) {
          var bW;
          Object.hasOwn(AF, uF) || (AF[uF] = !0, CF[uF] = !0, null == (bW = FF.outEdges(uF)) || bW.forEach((AF => {
            var bW, dF;
            Object.hasOwn(CF, AF.w) || (null == (bW = WF.node(uF)) ? void 0 : bW.rank) > (null == (dF = WF.node(AF.w)) ? void 0 : dF.rank) && function(FF, WF, SF) {
              let CF = new Set;

              function AF(WF) {
                var uF;
                if (FF.sources().includes(WF)) return !0;
                CF.add(WF);
                for (let hF of null != (uF = FF.inEdges(WF)) ? uF : [])
                  if ((hF.v !== SF.v || hF.w !== SF.w) && !CF.has(hF.v) && AF(hF.v)) return !0;
                return !1
              }
              return AF(WF)
            }(FF, AF.w, AF) ? SF.push(AF) : hF(AF.w)
          })), delete CF[uF])
        }
        let bW = uF;
        return WF && "function" == typeof WF.node && (bW = hF), FF.sources().forEach(bW), FF.nodes().forEach(bW), SF
      }(FF, null != WF ? WF : null)).forEach((WF => {
        let SF = FF.edge(WF);
        FF.removeEdge(WF), SF.forwardName = WF.name, SF.reversed = !0, FF.setEdge(WF.w, WF.v, SF, lF("rev"))
      }))
    }

    function QW(FF) {
      FF.graph().dummyChains = [], FF.edges().forEach((WF => function(FF, WF) {
        let SF, CF, AF, uF = WF.v,
          hF = FF.node(uF).rank,
          bW = WF.w,
          dF = FF.node(bW).rank,
          PF = WF.name,
          RF = FF.edge(WF),
          iW = RF.labelRank;
        if (dF === hF + 1) return;
        for (FF.removeEdge(WF), AF = 0, ++hF; hF < dF; ++AF, ++hF) RF.points = [], CF = {
          width: 0,
          height: 0,
          edgeLabel: RF,
          edgeObj: WF,
          rank: hF
        }, SF = nF(FF, "edge", CF, "_d"), hF === iW && (CF.width = RF.width, CF.height = RF.height, CF.dummy = "edge-label", CF.labelpos = RF.labelpos), FF.setEdge(uF, SF, {
          weight: RF.weight
        }, PF), 0 === AF && FF.graph().dummyChains.push(SF), uF = SF;
        FF.setEdge(uF, bW, {
          weight: RF.weight
        }, PF)
      }(FF, WF)))
    }

    function rS(FF) {
      let WF = {};
      FF.sources().forEach((function SF(CF) {
        let AF = FF.node(CF);
        if (Object.hasOwn(WF, CF)) return AF.rank;
        WF[CF] = !0;
        let uF = FF.outEdges(CF),
          hF = uF ? uF.map((WF => null == WF ? Number.POSITIVE_INFINITY : SF(WF.w) - FF.edge(WF).minlen)) : [],
          bW = BF(Math.min, hF);
        return bW === Number.POSITIVE_INFINITY && (bW = 0), AF.rank = bW
      }))
    }

    function gS(FF, WF) {
      return FF.node(WF.w).rank - FF.node(WF.v).rank - FF.edge(WF).minlen
    }
    var tS = function(FF) {
      let WF = new sF({
          directed: !1
        }),
        SF = FF.nodes();
      if (0 === SF.length) throw new Error("Graph must have at least one node");
      let CF, AF, uF = SF[0],
        hF = FF.nodeCount();
      for (WF.setNode(uF, {}); TW(WF, FF) < hF && (CF = aS(WF, FF), CF);) AF = WF.hasNode(CF.v) ? gS(FF, CF) : -gS(FF, CF), kS(WF, FF, AF);
      return WF
    };

    function TW(FF, WF) {
      return FF.nodes().forEach((function SF(CF) {
        let AF = WF.nodeEdges(CF);
        AF && AF.forEach((AF => {
          let uF = AF.v,
            hF = CF === uF ? AF.w : uF;
          !FF.hasNode(hF) && !gS(WF, AF) && (FF.setNode(hF, {}), FF.setEdge(CF, hF, {}), SF(hF))
        }))
      })), FF.nodeCount()
    }

    function aS(FF, WF) {
      return WF.edges().reduce(((SF, CF) => {
        let AF = Number.POSITIVE_INFINITY;
        return FF.hasNode(CF.v) !== FF.hasNode(CF.w) && (AF = gS(WF, CF)), AF < SF[0] ? [AF, CF] : SF
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function kS(FF, WF, SF) {
      FF.nodes().forEach((FF => WF.node(FF).rank += SF))
    }
    var {
      preorder: qS,
      postorder: VW
    } = tW, NW = DW;

    function DW(FF) {
      FF = function(FF) {
        let WF = (new sF).setGraph(FF.graph());
        return FF.nodes().forEach((SF => WF.setNode(SF, FF.node(SF)))), FF.edges().forEach((SF => {
          let CF = WF.edge(SF.v, SF.w) || {
              weight: 0,
              minlen: 1
            },
            AF = FF.edge(SF);
          WF.setEdge(SF.v, SF.w, {
            weight: CF.weight + AF.weight,
            minlen: Math.max(CF.minlen, AF.minlen)
          })
        })), WF
      }(FF), rS(FF);
      let WF, SF, CF = tS(FF);
      for (OW(CF), LW(CF, FF); WF = ZW(CF);) SF = oW(CF, FF, WF), YW(CF, FF, WF, SF)
    }

    function LW(FF, WF) {
      let SF = VW(FF, FF.nodes());
      SF = SF.slice(0, SF.length - 1), SF.forEach((SF => function(FF, WF, SF) {
        let CF = FF.node(SF).parent,
          AF = FF.edge(SF, CF);
        AF.cutvalue = mS(FF, WF, SF)
      }(FF, WF, SF)))
    }

    function mS(FF, WF, SF) {
      let CF = FF.node(SF).parent,
        AF = !0,
        uF = WF.edge(SF, CF),
        hF = 0;
      uF || (AF = !1, uF = WF.edge(CF, SF)), hF = uF.weight;
      let bW = WF.nodeEdges(SF);
      return bW && bW.forEach((uF => {
        let bW = uF.v === SF,
          dF = bW ? uF.w : uF.v;
        if (dF !== CF) {
          let CF = bW === AF,
            PF = WF.edge(uF).weight;
          if (hF += CF ? PF : -PF, function(FF, WF, SF) {
              return FF.hasEdge(WF, SF)
            }(FF, SF, dF)) {
            let WF = FF.edge(SF, dF).cutvalue;
            hF += CF ? -WF : WF
          }
        }
      })), hF
    }

    function OW(FF, WF) {
      arguments.length < 2 && (WF = FF.nodes()[0]), xS(FF, {}, 1, WF)
    }

    function xS(FF, WF, SF, CF, AF) {
      let uF = SF,
        hF = FF.node(CF);
      WF[CF] = !0;
      let bW = FF.neighbors(CF);
      return bW && bW.forEach((AF => {
        Object.hasOwn(WF, AF) || (SF = xS(FF, WF, SF, AF, CF))
      })), hF.low = uF, hF.lim = SF++, AF ? hF.parent = AF : delete hF.parent, SF
    }

    function ZW(FF) {
      return FF.edges().find((WF => FF.edge(WF).cutvalue < 0))
    }

    function oW(FF, WF, SF) {
      let CF = SF.v,
        AF = SF.w;
      WF.hasEdge(CF, AF) || (CF = SF.w, AF = SF.v);
      let uF = FF.node(CF),
        hF = FF.node(AF),
        bW = uF,
        dF = !1;
      return uF.lim > hF.lim && (bW = hF, dF = !0), WF.edges().filter((WF => dF === MW(FF, FF.node(WF.v), bW) && dF !== MW(FF, FF.node(WF.w), bW))).reduce(((FF, SF) => gS(WF, SF) < gS(WF, FF) ? SF : FF))
    }

    function YW(FF, WF, SF, CF) {
      let AF = SF.v,
        uF = SF.w;
      FF.removeEdge(AF, uF), FF.setEdge(CF.v, CF.w, {}), OW(FF), LW(FF, WF),
        function(FF, WF) {
          let SF = FF.nodes().find((WF => !FF.node(WF).parent));
          if (!SF) return;
          let CF = qS(FF, [SF]);
          CF = CF.slice(1), CF.forEach((SF => {
            let CF = FF.node(SF).parent,
              AF = WF.edge(SF, CF),
              uF = !1;
            AF || (AF = WF.edge(CF, SF), uF = !0), WF.node(SF).rank = WF.node(CF).rank + (uF ? AF.minlen : -AF.minlen)
          }))
        }(FF, WF)
    }

    function MW(FF, WF, SF) {
      return SF.low <= WF.lim && WF.lim <= SF.lim
    }
    DW.initLowLimValues = OW, DW.initCutValues = LW, DW.calcCutValue = mS, DW.leaveEdge = ZW, DW.enterEdge = oW, DW.exchangeEdges = YW;
    var cS = function(FF) {
      let WF = FF.graph().ranker;
      if ("function" == typeof WF) return WF(FF);
      switch (WF) {
        case "network-simplex":
        default:
          zS(FF);
          break;
        case "tight-tree":
          ! function(FF) {
            rS(FF), tS(FF)
          }(FF);
          break;
        case "longest-path":
          GW(FF);
        case "none":
      }
    };
    var GW = rS;

    function zS(FF) {
      NW(FF)
    }
    var IW = function(FF) {
      let WF = function(FF) {
          let WF = {},
            SF = 0;

          function CF(AF) {
            let uF = SF;
            FF.children(AF).forEach(CF), WF[AF] = {
              low: uF,
              lim: SF++
            }
          }
          return FF.children(CW).forEach(CF), WF
        }(FF),
        SF = FF.graph();
      if (!Array.isArray(SF.dummyChains)) return;
      SF.dummyChains.forEach((SF => {
        let CF = FF.node(SF),
          AF = CF.edgeObj,
          uF = function(FF, WF, SF, CF) {
            let AF, uF = [],
              hF = [],
              bW = Math.min(WF[SF].low, WF[CF].low),
              dF = Math.max(WF[SF].lim, WF[CF].lim);
            AF = SF;
            do {
              AF = FF.parent(AF), uF.push(AF)
            } while (AF && (WF[AF].low > bW || dF > WF[AF].lim));
            let PF = AF,
              RF = CF;
            for (;
              (RF = FF.parent(RF)) !== PF;) hF.push(RF);
            return {
              path: uF.concat(hF.reverse()),
              lca: PF
            }
          }(FF, WF, AF.v, AF.w),
          hF = uF.path,
          bW = uF.lca,
          dF = 0,
          PF = hF[dF],
          RF = !0;
        for (; SF !== AF.w;) {
          if (CF = FF.node(SF), RF) {
            for (;
              (PF = hF[dF]) !== bW && FF.node(PF).maxRank < CF.rank;) dF++;
            PF === bW && (RF = !1)
          }
          if (!RF) {
            for (; dF < hF.length - 1 && FF.node(hF[dF + 1]).minRank <= CF.rank;) dF++;
            PF = hF[dF]
          }
          void 0 !== PF && FF.setParent(SF, PF), SF = FF.successors(SF)[0]
        }
      }))
    };

    function fW(FF) {
      let WF = nF(FF, "root", {}, "_root"),
        SF = function(FF) {
          let WF = {};

          function SF(CF, AF) {
            let uF = FF.children(CF);
            uF && uF.length && uF.forEach((FF => SF(FF, AF + 1))), WF[CF] = AF
          }
          return FF.children(CW).forEach((FF => SF(FF, 1))), WF
        }(FF),
        CF = Object.values(SF),
        AF = BF(Math.max, CF) - 1,
        uF = 2 * AF + 1;
      FF.graph().nestingRoot = WF, FF.edges().forEach((WF => FF.edge(WF).minlen *= uF));
      let hF = function(FF) {
        return FF.edges().reduce(((WF, SF) => WF + FF.edge(SF).weight), 0)
      }(FF) + 1;
      FF.children(CW).forEach((CF => {
        yS(FF, WF, uF, hF, AF, SF, CF)
      })), FF.graph().nodeRankFactor = uF
    }

    function yS(FF, WF, SF, CF, AF, uF, hF) {
      var bW;
      let dF = FF.children(hF);
      if (!dF.length) return void(hF !== WF && FF.setEdge(WF, hF, {
        weight: 0,
        minlen: SF
      }));
      let PF = XF(FF, "_bt"),
        RF = XF(FF, "_bb"),
        iW = FF.node(hF);
      FF.setParent(PF, hF), iW.borderTop = PF, FF.setParent(RF, hF), iW.borderBottom = RF, dF.forEach((bW => {
        var dF;
        yS(FF, WF, SF, CF, AF, uF, bW);
        let iW = FF.node(bW),
          eF = iW.borderTop ? iW.borderTop : bW,
          EF = iW.borderBottom ? iW.borderBottom : bW,
          QF = iW.borderTop ? CF : 2 * CF,
          rW = eF !== EF ? 1 : AF - (null != (dF = uF[hF]) ? dF : 0) + 1;
        FF.setEdge(PF, eF, {
          weight: QF,
          minlen: rW,
          nestingEdge: !0
        }), FF.setEdge(EF, RF, {
          weight: QF,
          minlen: rW,
          nestingEdge: !0
        })
      })), FF.parent(hF) || FF.setEdge(WF, PF, {
        weight: 0,
        minlen: AF + (null != (bW = uF[hF]) ? bW : 0)
      })
    }
    var sW = function(FF) {
      FF.children(CW).forEach((function WF(SF) {
        let CF = FF.children(SF),
          AF = FF.node(SF);
        if (CF.length && CF.forEach(WF), AF && Object.hasOwn(AF, "minRank")) {
          AF.borderLeft = [], AF.borderRight = [];
          for (let WF = AF.minRank, CF = AF.maxRank + 1; WF < CF; ++WF) nW(FF, "borderLeft", "_bl", SF, AF, WF), nW(FF, "borderRight", "_br", SF, AF, WF)
        }
      }))
    };

    function nW(FF, WF, SF, CF, AF, uF) {
      let hF = {
          width: 0,
          height: 0,
          rank: uF,
          borderType: WF
        },
        bW = AF[WF][uF - 1],
        dF = nF(FF, "border", hF, SF);
      AF[WF][uF] = dF, FF.setParent(dF, CF), bW && FF.setEdge(bW, dF, {
        weight: 1
      })
    }

    function HW(FF) {
      var WF;
      let SF = null == (WF = FF.graph().rankdir) ? void 0 : WF.toLowerCase();
      ("bt" === SF || "rl" === SF) && function(FF) {
        FF.nodes().forEach((WF => XW(FF.node(WF)))), FF.edges().forEach((WF => {
          var SF;
          let CF = FF.edge(WF);
          null == (SF = CF.points) || SF.forEach(XW), Object.hasOwn(CF, "y") && XW(CF)
        }))
      }(FF), ("lr" === SF || "rl" === SF) && (function(FF) {
        FF.nodes().forEach((WF => UW(FF.node(WF)))), FF.edges().forEach((WF => {
          var SF;
          let CF = FF.edge(WF);
          null == (SF = CF.points) || SF.forEach(UW), Object.hasOwn(CF, "x") && UW(CF)
        }))
      }(FF), KW(FF))
    }

    function KW(FF) {
      FF.nodes().forEach((WF => wW(FF.node(WF)))), FF.edges().forEach((WF => wW(FF.edge(WF))))
    }

    function wW(FF) {
      let WF = FF.width;
      FF.width = FF.height, FF.height = WF
    }

    function XW(FF) {
      FF.y = -FF.y
    }

    function UW(FF) {
      let WF = FF.x;
      FF.x = FF.y, FF.y = WF
    }

    function BW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        SF = {},
        CF = FF.nodes().filter((WF => !FF.children(WF).length)),
        AF = CF.map((WF => FF.node(WF).rank)),
        uF = FW(BF(Math.max, AF) + 1).map((() => []));
      return CF.sort(((WF, SF) => FF.node(WF).rank - FF.node(SF).rank)).forEach((function CF(AF) {
        if (SF[AF]) return;
        SF[AF] = !0;
        let hF = FF.node(AF);
        uF[hF.rank].push(AF);
        let bW = FF.successors(AF);
        bW && [...bW].sort(((SF, CF) => function(SF, CF) {
          let AF = FF.node(SF),
            uF = FF.node(CF);
          return AW(WF, AF, uF)
        }(SF, CF))).forEach(CF)
      })), uF
    }

    function jS(FF, WF) {
      let SF = 0;
      for (let CF = 1; CF < WF.length; ++CF) SF += vS(FF, WF[CF - 1], WF[CF]);
      return SF
    }

    function vS(FF, WF, SF) {
      let CF = function(FF, WF) {
          return FF.reduce(((FF, SF, CF) => (FF[SF] = WF[CF], FF)), {})
        }(SF, SF.map(((FF, WF) => WF))),
        AF = WF.flatMap((WF => {
          let SF = FF.outEdges(WF);
          return SF ? SF.map((WF => ({
            pos: CF[WF.w],
            weight: FF.edge(WF).weight
          }))).sort(((FF, WF) => FF.pos - WF.pos)) : []
        })),
        uF = 1;
      for (; uF < SF.length;) uF <<= 1;
      let hF = 2 * uF - 1;
      uF -= 1;
      let bW = new Array(hF).fill(0),
        dF = 0;
      return AF.forEach((FF => {
        let WF = FF.pos + uF;
        bW[WF] += FF.weight;
        let SF = 0;
        for (; WF > 0;) WF % 2 && (SF += bW[WF + 1]), WF = WF - 1 >> 1, bW[WF] += FF.weight;
        dF += FF.weight * SF
      })), dF
    }

    function JW(FF, WF) {
      let SF = {};
      return FF.forEach(((FF, WF) => {
          let CF = {
            indegree: 0,
            in: [],
            out: [],
            vs: [FF.v],
            i: WF
          };
          void 0 !== FF.barycenter && (CF.barycenter = FF.barycenter, CF.weight = FF.weight), SF[FF.v] = CF
        })), WF.edges().forEach((FF => {
          let WF = SF[FF.v],
            CF = SF[FF.w];
          void 0 !== WF && void 0 !== CF && (CF.indegree++, WF.out.push(CF))
        })),
        function(FF) {
          let WF = [];

          function SF(FF) {
            return WF => {
              WF.merged || (void 0 === WF.barycenter || void 0 === FF.barycenter || WF.barycenter >= FF.barycenter) && function(FF, WF) {
                let SF = 0,
                  CF = 0;
                FF.weight && (SF += FF.barycenter * FF.weight, CF += FF.weight), WF.weight && (SF += WF.barycenter * WF.weight, CF += WF.weight), FF.vs = WF.vs.concat(FF.vs), FF.barycenter = SF / CF, FF.weight = CF, FF.i = Math.min(WF.i, FF.i), WF.merged = !0
              }(FF, WF)
            }
          }

          function CF(WF) {
            return SF => {
              SF.in.push(WF), 0 === --SF.indegree && FF.push(SF)
            }
          }
          for (; FF.length;) {
            let AF = FF.pop();
            WF.push(AF), AF.in.reverse().forEach(SF(AF)), AF.out.forEach(CF(AF))
          }
          return WF.filter((FF => !FF.merged)).map((FF => WW(FF, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(SF).filter((FF => !FF.indegree)))
    }

    function pW(FF, WF, SF, CF, AF) {
      let uF = {},
        hF = null,
        bW = null,
        dF = AF;
      "boolean" == typeof WF ? (dF = WF, uF = {}) : WF && (uF = WF, hF = null != SF ? SF : null, bW = null != CF ? CF : null);
      let PF = function(FF, WF) {
          let SF = {
            lhs: [],
            rhs: []
          };
          return FF.forEach((FF => {
            WF(FF) ? SF.lhs.push(FF) : SF.rhs.push(FF)
          })), SF
        }(FF, (FF => Object.hasOwn(FF, "barycenter"))),
        RF = PF.lhs,
        iW = PF.rhs.sort(((FF, WF) => WF.i - FF.i)),
        eF = [],
        EF = 0,
        QF = 0,
        rW = 0;
      RF.sort(function(FF, WF, SF) {
        return (CF, AF) => {
          if (CF.barycenter < AF.barycenter) return -1;
          if (CF.barycenter > AF.barycenter) return 1;
          if (FF && ("string" == typeof CF.vs[0] || "string" == typeof AF.vs[0])) {
            let SF = FF.node(CF.vs[0]),
              uF = FF.node(AF.vs[0]),
              hF = AW(WF, SF, uF);
            if (0 !== hF) return hF
          }
          return SF ? AF.i - CF.i : CF.i - AF.i
        }
      }(bW, hF, !!dF));
      for (let [tW, TF] of Object.entries(uF)) {
        let FF = RF.findIndex((FF => FF.vs[0] === tW));
        RF.splice(FF + 1, 0, TF)
      }
      rW = lW(eF, iW, rW), RF.forEach((FF => {
        rW += FF.vs.length, eF.push(FF.vs), EF += FF.barycenter * FF.weight, QF += FF.weight, rW = lW(eF, iW, rW)
      }));
      let gW = {
        vs: eF.flat(1)
      };
      return QF && (gW.barycenter = EF / QF, gW.weight = QF), gW
    }

    function lW(FF, WF, SF) {
      let CF;
      for (; WF.length && (CF = WF[WF.length - 1]).i <= SF;) WF.pop(), FF.push(CF.vs), SF++;
      return SF
    }

    function FS(FF, WF, SF, CF, AF) {
      var uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW;
      let gW = null,
        tW = AF;
      "boolean" == typeof CF ? (tW = CF, gW = null) : void 0 !== CF && (gW = CF);
      let TF = FF.children(WF),
        aW = FF.node(WF),
        kW = aW ? aW.borderLeft : void 0,
        qW = aW ? aW.borderRight : void 0,
        VF = {};
      kW && (TF = TF.filter((FF => FF !== kW && FF !== qW)));
      let NF = function(FF) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((WF => {
          let SF = FF.inEdges(WF);
          if (!SF || !SF.length) return {
            v: WF
          };
          {
            let CF = SF.reduce(((WF, SF) => {
              let CF = FF.edge(SF),
                AF = FF.node(SF.v);
              return {
                sum: WF.sum + CF.weight * AF.order,
                weight: WF.weight + CF.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: WF,
              barycenter: CF.sum / CF.weight,
              weight: CF.weight
            }
          }
        }))
      }(FF, TF);
      NF.forEach((WF => {
        if (FF.children(WF.v).length) {
          let {
            result: CF
          } = FS(FF, WF.v, SF, gW, tW);
          VF[WF.v] = CF, Object.hasOwn(CF, "barycenter") && function(FF, WF) {
            void 0 !== FF.barycenter ? (FF.barycenter = (FF.barycenter * FF.weight + WF.barycenter * WF.weight) / (FF.weight + WF.weight), FF.weight += WF.weight) : (FF.barycenter = WF.barycenter, FF.weight = WF.weight)
          }(WF, CF)
        }
      }));
      let DF = JW(NF, SF);
      ! function(FF, WF) {
        FF.forEach((FF => {
          FF.vs = FF.vs.flatMap((FF => WF[FF] ? WF[FF].vs : FF))
        }))
      }(DF, VF);
      let LF = {},
        mW = !1;
      for (let xW = 0; xW < DF.length; xW++)
        for (let WF = xW + 1; WF < DF.length; WF++)
          if (DF[xW] && DF[WF] && null != (uF = DF[xW]) && uF.barycenter && null != (hF = DF[WF]) && hF.barycenter && (null == (bW = DF[xW]) ? void 0 : bW.barycenter) === DF[WF].barycenter) {
            let SF = null != (PF = null == (dF = DF[xW]) ? void 0 : dF.vs[0]) ? PF : "",
              CF = null != (iW = null == (RF = DF[WF]) ? void 0 : RF.vs[0]) ? iW : "",
              AF = FF.node(SF),
              uF = FF.node(CF);
            if ("edge" === AF.dummy && "edge" === uF.dummy && (null == (eF = AF.edgeObj) ? void 0 : eF.v) === (null == (EF = uF.edgeObj) ? void 0 : EF.v) && (null == (QF = AF.edgeObj) ? void 0 : QF.w) === (null == (rW = uF.edgeObj) ? void 0 : rW.w)) {
              if (AF.edgeLabel.reversed) {
                LF[CF] = DF[xW], DF.splice(xW, 1), xW--;
                break
              }
              LF[SF] = DF[WF], DF.splice(WF, 1), WF--
            } else mW = !0
          } let OF = pW(DF, LF, gW, FF, tW);
      if (kW && qW) {
        OF.vs = [kW, OF.vs, qW].flat(1);
        let WF = FF.predecessors(kW);
        if (WF && WF.length) {
          let SF = FF.node(WF[0]),
            CF = FF.predecessors(qW),
            AF = FF.node(CF[0]);
          Object.hasOwn(OF, "barycenter") || (OF.barycenter = 0, OF.weight = 0), OF.barycenter = (OF.barycenter * OF.weight + SF.order + AF.order) / (OF.weight + 2), OF.weight += 2
        }
      }
      return Object.defineProperty(OF, "result", {
        value: OF,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(OF, "usedBias", {
        value: mW,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), OF
    }

    function WS(FF, WF, SF, CF) {
      CF || (CF = FF.nodes());
      let AF = function(FF) {
          let WF;
          for (; FF.hasNode(WF = lF("_root")););
          return WF
        }(FF),
        uF = new sF({
          compound: !0
        }).setGraph({
          root: AF
        }).setDefaultNodeLabel((WF => FF.node(WF)));
      return CF.forEach((CF => {
        let hF = FF.node(CF),
          bW = FF.parent(CF);
        if (hF.rank === WF || hF.minRank <= WF && WF <= hF.maxRank) {
          uF.setNode(CF), uF.setParent(CF, bW || AF);
          let dF = FF[SF](CF);
          dF && dF.forEach((WF => {
            let SF = WF.v === CF ? WF.w : WF.v,
              AF = uF.edge(SF, CF),
              hF = void 0 !== AF ? AF.weight : 0;
            uF.setEdge(SF, CF, {
              weight: FF.edge(WF).weight + hF
            })
          })), Object.hasOwn(hF, "minRank") && uF.setNode(CF, {
            borderLeft: hF.borderLeft[WF],
            borderRight: hF.borderRight[WF]
          })
        }
      })), uF
    }

    function SS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof WF.customOrder) return void WF.customOrder(FF, SS);
      let CF = jW(FF),
        AF = CS(FF, FW(1, CF + 1), "inEdges"),
        uF = CS(FF, FW(CF - 1, -1, -1), "outEdges"),
        hF = BW(FF, SF);
      if (uS(FF, hF), WF.disableOptimalOrderHeuristic) return;
      let bW, dF = Number.POSITIVE_INFINITY,
        PF = WF.constraints || [];
      for (let RF = 0, iW = 0; iW < 4; ++RF, ++iW) {
        AS(RF % 2 ? AF : uF, RF % 4 >= 2, PF, SF), hF = wF(FF);
        let WF = jS(FF, hF);
        WF < dF ? (iW = 0, bW = Object.assign({}, hF), dF = WF) : WF === dF && (bW = structuredClone(hF))
      }
      uS(FF, bW)
    }

    function CS(FF, WF, SF) {
      let CF = new Map,
        AF = (FF, WF) => {
          CF.has(FF) || CF.set(FF, []), CF.get(FF).push(WF)
        };
      for (let uF of FF.nodes()) {
        let WF = FF.node(uF);
        if ("number" == typeof WF.rank && AF(WF.rank, uF), "number" == typeof WF.minRank && "number" == typeof WF.maxRank)
          for (let FF = WF.minRank; FF <= WF.maxRank; FF++) FF !== WF.rank && AF(FF, uF)
      }
      return WF.map((function(WF) {
        return WS(FF, WF, SF, CF.get(WF) || [])
      }))
    }

    function AS(FF, WF, SF, CF) {
      let AF = !0,
        uF = new sF;
      FF.forEach((function(FF) {
        SF.forEach((FF => uF.setEdge(FF.left, FF.right)));
        let hF = FF.graph().root,
          {
            result: bW,
            usedBias: dF
          } = FS(FF, hF, uF, CF, AF);
        WF && dF && (AF = !AF), bW.vs.forEach(((WF, SF) => FF.node(WF).order = SF)),
          function(FF, WF, SF) {
            let CF, AF = {};
            SF.forEach((SF => {
              let uF, hF, bW = FF.parent(SF);
              for (; bW;) {
                if (uF = FF.parent(bW), uF ? (hF = AF[uF], AF[uF] = bW) : (hF = CF, CF = bW), hF && hF !== bW) return void WF.setEdge(hF, bW);
                bW = uF
              }
            }))
          }(FF, uF, bW.vs)
      }))
    }

    function uS(FF, WF) {
      Object.values(WF).forEach((WF => WF.forEach(((WF, SF) => FF.node(WF).order = SF))))
    }

    function hS(FF, WF, SF) {
      if (WF > SF) {
        let FF = WF;
        WF = SF, SF = FF
      }
      let CF = FF[WF];
      CF || (FF[WF] = CF = {}), CF[SF] = !0
    }

    function bC(FF, WF, SF) {
      if (WF > SF) {
        let FF = WF;
        WF = SF, SF = FF
      }
      let CF = FF[WF];
      return void 0 !== CF && Object.hasOwn(CF, SF)
    }

    function dS(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        uF = {},
        hF = function(FF, WF, SF, CF) {
          let AF = new sF,
            uF = FF.graph(),
            hF = function(FF, WF, SF) {
              return (CF, AF, uF) => {
                let hF, bW = CF.node(AF),
                  dF = CF.node(uF),
                  PF = 0;
                if (PF += bW.width / 2, Object.hasOwn(bW, "labelpos")) switch (bW.labelpos.toLowerCase()) {
                  case "l":
                    hF = -bW.width / 2;
                    break;
                  case "r":
                    hF = bW.width / 2
                }
                if (hF && (PF += SF ? hF : -hF), hF = void 0, PF += (bW.dummy ? WF : FF) / 2, PF += (dF.dummy ? WF : FF) / 2, PF += dF.width / 2, Object.hasOwn(dF, "labelpos")) switch (dF.labelpos.toLowerCase()) {
                  case "l":
                    hF = dF.width / 2;
                    break;
                  case "r":
                    hF = -dF.width / 2
                }
                return hF && (PF += SF ? hF : -hF), PF
              }
            }(uF.nodesep, uF.edgesep, CF);
          return WF.forEach((WF => {
            let CF;
            WF.forEach((WF => {
              let uF = SF[WF];
              if (void 0 !== uF) {
                if (AF.setNode(uF), void 0 !== CF) {
                  let bW = SF[CF];
                  if (void 0 !== bW) {
                    let SF = AF.edge(bW, uF);
                    AF.setEdge(bW, uF, Math.max(hF(FF, WF, CF), SF || 0))
                  }
                }
                CF = WF
              }
            }))
          })), AF
        }(FF, WF, SF, AF),
        bW = AF ? "borderLeft" : "borderRight";

      function dF(FF, WF) {
        let SF = hF.nodes().slice(),
          CF = {},
          AF = SF.pop();
        for (; AF;) {
          if (CF[AF]) FF(AF);
          else {
            CF[AF] = !0, SF.push(AF);
            for (let FF of WF(AF)) SF.push(FF)
          }
          AF = SF.pop()
        }
      }
      return dF((function(FF) {
        let WF = hF.inEdges(FF);
        uF[FF] = WF ? WF.reduce(((FF, WF) => {
          var SF;
          let CF = null != (SF = uF[WF.v]) ? SF : 0,
            AF = hF.edge(WF);
          return Math.max(FF, CF + (void 0 !== AF ? AF : 0))
        }), 0) : 0
      }), (function(FF) {
        return hF.predecessors(FF) || []
      })), dF((function(WF) {
        let SF = hF.outEdges(WF),
          CF = Number.POSITIVE_INFINITY;
        SF && (CF = SF.reduce(((FF, WF) => {
          let SF = uF[WF.w],
            CF = hF.edge(WF);
          return Math.min(FF, (void 0 !== SF ? SF : 0) - (void 0 !== CF ? CF : 0))
        }), Number.POSITIVE_INFINITY));
        let AF = FF.node(WF);
        CF !== Number.POSITIVE_INFINITY && AF.borderType !== bW && (uF[WF] = Math.max(void 0 !== uF[WF] ? uF[WF] : 0, CF))
      }), (function(FF) {
        return hF.successors(FF) || []
      })), Object.keys(CF).forEach((FF => {
        var WF;
        let CF = SF[FF];
        void 0 !== CF && (uF[FF] = null != (WF = uF[CF]) ? WF : 0)
      })), uF
    }

    function PS(FF, WF) {
      let SF, CF = wF(FF),
        AF = Object.assign(function(FF, WF) {
          let SF = {};
          return WF.length && WF.reduce((function(WF, CF) {
            let AF = 0,
              uF = 0,
              hF = WF.length,
              bW = CF[CF.length - 1];
            return CF.forEach(((WF, dF) => {
              let PF = function(FF, WF) {
                  if (FF.node(WF).dummy) {
                    let SF = FF.predecessors(WF);
                    if (SF) return SF.find((WF => FF.node(WF).dummy))
                  }
                }(FF, WF),
                RF = PF ? FF.node(PF).order : hF;
              (PF || WF === bW) && (CF.slice(uF, dF + 1).forEach((WF => {
                let CF = FF.predecessors(WF);
                CF && CF.forEach((CF => {
                  let uF = FF.node(CF),
                    hF = uF.order;
                  (hF < AF || RF < hF) && (!uF.dummy || !FF.node(WF).dummy) && hS(SF, CF, WF)
                }))
              })), uF = dF + 1, AF = RF)
            })), CF
          })), SF
        }(FF, CF), function(FF, WF) {
          let SF = {};

          function CF(WF, CF, AF, uF, hF) {
            FW(CF, AF).forEach((CF => {
              let AF = WF[CF];
              if (void 0 !== AF && FF.node(AF).dummy) {
                let WF = FF.predecessors(AF);
                WF && WF.forEach((WF => {
                  if (void 0 === WF) return;
                  let CF = FF.node(WF);
                  CF.dummy && (CF.order < uF || CF.order > hF) && hS(SF, WF, AF)
                }))
              }
            }))
          }
          return WF.length && WF.reduce((function(WF, SF) {
            let AF = -1,
              uF = -1,
              hF = 0;
            return SF.forEach(((bW, dF) => {
              if ("border" === FF.node(bW).dummy) {
                let WF = FF.predecessors(bW);
                if (WF && WF.length) {
                  let bW = WF[0];
                  if (void 0 === bW) return;
                  uF = FF.node(bW).order, CF(SF, hF, dF, AF, uF), hF = dF, AF = uF
                }
              }
              CF(SF, hF, SF.length, uF, WF.length)
            })), SF
          })), SF
        }(FF, CF)),
        uF = {};
      ["u", "d"].forEach((hF => {
        SF = "u" === hF ? CF : Object.values(CF).reverse(), ["l", "r"].forEach((CF => {
          "r" === CF && (SF = SF.map((FF => Object.values(FF).reverse())));
          let bW = function(FF, WF, SF, CF, AF) {
              let uF = {},
                hF = {},
                bW = {};
              return WF.forEach((FF => {
                FF.forEach(((FF, WF) => {
                  uF[FF] = FF, hF[FF] = FF, bW[FF] = WF
                }))
              })), WF.forEach((WF => {
                let dF = -1,
                  PF = -1,
                  RF = !1,
                  iW = WF,
                  eF = WF.findIndex((WF => (null == AF ? void 0 : AF.includes(WF)) || RS(WF, FF, AF)));
                eF > 0 && (iW = [WF[eF], ...WF.slice(0, eF), ...WF.slice(eF + 1)], RF = !0), iW.forEach((WF => {
                  var iW;
                  let eF = CF(WF);
                  if (eF && eF.length) {
                    null != AF && AF.includes(WF) && (eF = eF.filter((WF => RS(WF, FF, AF))));
                    let CF = eF.sort(((FF, WF) => {
                        let SF = bW[FF],
                          CF = bW[WF];
                        return (void 0 !== SF ? SF : 0) - (void 0 !== CF ? CF : 0)
                      })),
                      EF = (CF.length - 1) / 2;
                    for (let FF = Math.floor(EF), AF = Math.ceil(EF); FF <= AF; ++FF) {
                      let AF = CF[FF];
                      if (void 0 === AF) continue;
                      let eF = bW[AF];
                      if (void 0 !== eF && hF[WF] === WF && dF < eF && bW[AF] !== PF && !bC(SF, WF, AF)) {
                        let FF = uF[AF];
                        void 0 !== FF && (hF[AF] = WF, hF[WF] = uF[WF] = FF, dF = eF, RF && (dF = -1, PF = null != (iW = bW[AF]) ? iW : -1, RF = !1))
                      }
                    }
                  }
                }))
              })), {
                root: uF,
                align: hF
              }
            }(FF, SF, AF, (WF => ("u" === hF ? FF.predecessors(WF) : FF.successors(WF)) || []), WF),
            dF = dS(FF, SF, bW.root, bW.align, "r" === CF);
          "r" === CF && (dF = SW(dF, (FF => -FF))), uF[hF + CF] = dF
        }))
      }));
      let hF = function(FF, WF) {
        return Object.values(WF).reduce(((WF, SF) => {
          let CF = Number.NEGATIVE_INFINITY,
            AF = Number.POSITIVE_INFINITY;
          Object.entries(SF).forEach((WF => {
            let [SF, uF] = WF, hF = function(FF, WF) {
              return FF.node(WF).width
            }(FF, SF) / 2;
            CF = Math.max(uF + hF, CF), AF = Math.min(uF - hF, AF)
          }));
          let uF = CF - AF;
          return uF < WF[0] && (WF = [uF, SF]), WF
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(FF, uF);
      return function(FF, WF) {
          let SF = Object.values(WF),
            CF = BF(Math.min, SF),
            AF = BF(Math.max, SF);
          ["u", "d"].forEach((SF => {
            ["l", "r"].forEach((uF => {
              let hF = SF + uF,
                bW = FF[hF];
              if (!bW || bW === WF) return;
              let dF = Object.values(bW),
                PF = CF - BF(Math.min, dF);
              "l" !== uF && (PF = AF - BF(Math.max, dF)), PF && (FF[hF] = SW(bW, (FF => FF + PF)))
            }))
          }))
        }(uF, hF),
        function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            SF = FF.ul;
          return SF ? SW(SF, ((SF, CF) => {
            var AF, uF;
            if (WF) {
              let SF = WF.toLowerCase(),
                AF = FF[SF];
              if (AF && void 0 !== AF[CF]) return AF[CF]
            }
            let hF = Object.values(FF).map((FF => {
              let WF = FF[CF];
              return void 0 !== WF ? WF : 0
            })).sort(((FF, WF) => FF - WF));
            return ((null != (AF = hF[1]) ? AF : 0) + (null != (uF = hF[2]) ? uF : 0)) / 2
          })) : {}
        }(uF, FF.graph().align)
    }

    function RS(FF, WF, SF) {
      var CF;
      if (!SF) return !1;
      let AF = null == (CF = WF.node(FF)) ? void 0 : CF.edgeObj;
      if (!AF || WF.node(FF).edgeLabel.reversed) return !1;
      let uF = SF.indexOf(null == AF ? void 0 : AF.v),
        hF = SF.indexOf(null == AF ? void 0 : AF.w);
      return -1 !== uF && -1 !== hF && uF === (hF + 1) % SF.length || uF === (hF - 1) % SF.length
    }

    function iC(FF, WF) {
      (function(FF) {
        let WF = wF(FF),
          SF = FF.graph(),
          CF = SF.ranksep,
          AF = SF.rankalign,
          uF = 0;
        WF.forEach((WF => {
          let SF = WF.reduce(((WF, SF) => {
            var CF;
            let AF = null != (CF = FF.node(SF).height) ? CF : 0;
            return WF > AF ? WF : AF
          }), 0);
          WF.forEach((WF => {
            let CF = FF.node(WF);
            CF.y = "top" === AF ? uF + CF.height / 2 : "bottom" === AF ? uF + SF - CF.height / 2 : uF + SF / 2
          })), uF += SF + CF
        }))
      })(FF = HF(FF)), Object.entries(PS(FF, WF)).forEach((WF => {
        let [SF, CF] = WF;
        return FF.node(SF).x = CF
      }))
    }
    var eS = new WeakMap;

    function ES(FF) {
      return rC(FF, JF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), FF
    }

    function QS(FF, WF, SF) {
      let CF = WF;
      for (; void 0 !== CF;) {
        let WF = FF.parent(CF);
        if (WF === SF) return CF;
        CF = WF
      }
    }

    function rC(FF, WF, SF) {
      var CF;
      let AF = FF.nodes().filter((WF => FF.children(WF).length)),
        uF = {};
      AF.forEach((CF => {
        let AF = FF.node(CF);
        if (AF && AF.rankdir) {
          let hF = new sF({
            multigraph: !0,
            compound: !0
          });
          hF.setGraph({
            rankdir: AF.rankdir
          });
          let bW = FF.children(CF);
          bW.forEach((WF => {
            let SF = {
              ...FF.node(WF)
            };
            hF.setNode(WF, SF);
            let AF = FF.parent(WF);
            AF && AF !== CF && bW.includes(AF) && hF.setParent(WF, AF)
          }));
          let dF = new Set;
          FF.edges().forEach((WF => {
            let SF = QS(FF, WF.v, CF),
              AF = QS(FF, WF.w, CF);
            if (SF && AF && SF !== AF) {
              let CF = `${SF}\0${AF}`;
              dF.has(CF) || (dF.add(CF), hF.setEdge(SF, AF, {
                ...FF.edge(WF)
              }))
            }
          })), rC(hF, WF, SF);
          let PF = mC(hF);
          gC(PF, WF, SF, null), tC(hF, PF);
          let RF = 1 / 0,
            iW = 1 / 0,
            eF = -1 / 0,
            EF = -1 / 0;
          hF.nodes().forEach((FF => {
            if (FF === CF) return;
            let WF = hF.node(FF);
            WF && "number" == typeof WF.x && "number" == typeof WF.y && "number" == typeof WF.width && "number" == typeof WF.height && (RF = Math.min(RF, WF.x - WF.width / 2), eF = Math.max(eF, WF.x + WF.width / 2), iW = Math.min(iW, WF.y - WF.height / 2), EF = Math.max(EF, WF.y + WF.height / 2))
          })), (!isFinite(RF) || !isFinite(iW) || !isFinite(eF) || !isFinite(EF)) && (RF = iW = 0, eF = EF = 0);
          let QF = eF - RF,
            rW = EF - iW;
          uF[CF] = {
            minX: RF,
            bh: iW,
            maxX: eF,
            du: EF,
            width: QF,
            height: rW,
            offsetX: RF,
            offsetY: iW
          }, AF._dagreClusterSubgraph = hF
        }
      }));
      let hF = [],
        bW = new Map;
      AF.forEach((WF => {
        let SF = FF.node(WF);
        SF && SF.rankdir && uF[WF] && bW.set(WF, (FF.children(WF) || []).filter((FF => FF !== WF)))
      }));
      let dF = new Set([...bW.values()].flat()),
        PF = new Map;
      bW.forEach(((WF, SF) => {
        dF.has(SF) || PF.set(SF, (WF => {
          let SF = [],
            CF = (FF.children(WF) || []).filter((FF => FF !== WF));
          for (; CF.length > 0;) {
            let WF = CF.shift();
            SF.push(WF), (FF.children(WF) || []).filter((FF => FF !== WF)).forEach((FF => CF.push(FF)))
          }
          return SF
        })(SF))
      }));
      let RF = new Set([...PF.values()].flat()),
        iW = FF => {
          for (let [WF, SF] of PF)
            if (SF.includes(FF)) return WF;
          return FF
        },
        eF = [];
      FF.edges().forEach((WF => {
        (RF.has(WF.v) || RF.has(WF.w)) && eF.push({
          edge: WF,
          label: FF.edge(WF)
        })
      }));
      let EF = new Map;
      RF.forEach((WF => {
        let SF = FF.parent(WF);
        EF.set(WF, "string" == typeof SF ? SF : void 0)
      })), PF.forEach(((WF, SF) => {
        let CF = FF.node(SF),
          AF = [];
        WF.forEach((WF => {
          let SF = FF.node(WF);
          SF && (AF.push({
            id: WF,
            node: SF,
            parent: EF.get(WF)
          }), FF.removeNode(WF))
        }));
        let bW = eF.filter((FF => {
            let {
              edge: SF
            } = FF;
            return WF.includes(SF.v) || WF.includes(SF.w)
          })),
          dF = uF[SF];
        CF && (hF.push({
          clusterId: SF,
          subgraph: CF._dagreClusterSubgraph,
          bounds: dF,
          children: WF,
          removedNodes: AF,
          removedEdges: bW
        }), CF.width = dF.width, CF.height = dF.height)
      }));
      let QF = new Set;
      eF.forEach((WF => {
        let {
          edge: SF,
          label: CF
        } = WF, AF = iW(SF.v), uF = iW(SF.w);
        if (AF !== uF && FF.hasNode(AF) && FF.hasNode(uF)) {
          let WF = `${AF}\0${uF}`;
          QF.has(WF) || (QF.add(WF), FF.setEdge(AF, uF, {
            ...CF,
            width: 0,
            height: 0
          }))
        }
      }));
      let rW = mC(FF),
        gW = gC(rW, WF, SF, null != (CF = eS.get(FF)) ? CF : null);
      eS.set(FF, gW), tC(FF, rW), QF.forEach((WF => {
        let SF = WF.indexOf("\0"),
          CF = WF.slice(0, SF),
          AF = WF.slice(SF + 1);
        FF.hasEdge(CF, AF) && FF.removeEdge(CF, AF)
      })), hF.forEach((WF => {
        let {
          clusterId: SF,
          subgraph: CF,
          bounds: AF,
          removedNodes: uF,
          removedEdges: hF
        } = WF;
        var bW, dF;
        let PF = FF.node(SF),
          RF = null != (bW = null == PF ? void 0 : PF.x) ? bW : 0,
          iW = null != (dF = null == PF ? void 0 : PF.y) ? dF : 0,
          eF = (AF.minX + AF.maxX) / 2,
          EF = (AF.bh + AF.du) / 2;
        uF.forEach((WF => {
          let {
            id: SF,
            node: CF,
            parent: AF
          } = WF;
          FF.setNode(SF, CF), void 0 !== AF && FF.setParent(SF, AF)
        })), hF.forEach((WF => {
          let {
            edge: SF,
            label: CF
          } = WF;
          FF.setEdge(SF, CF)
        })), CF.nodes().forEach((WF => {
          if (WF === SF) return;
          let AF = CF.node(WF),
            uF = FF.node(WF);
          uF && AF && "number" == typeof AF.x && "number" == typeof AF.y && (uF.x = RF + (AF.x - eF), uF.y = iW + (AF.y - EF))
        })), delete PF._dagreClusterSubgraph
      })), AF.forEach((WF => {
        var SF, CF;
        let AF = FF.node(WF),
          hF = uF[WF];
        if (AF && AF.rankdir && AF._dagreClusterSubgraph && hF) {
          let uF = AF._dagreClusterSubgraph,
            bW = null != (SF = AF.x) ? SF : 0,
            dF = null != (CF = AF.y) ? CF : 0,
            PF = (hF.minX + hF.maxX) / 2,
            RF = (hF.bh + hF.du) / 2;
          uF.nodes().forEach((SF => {
            if (SF === WF) return;
            let CF = uF.node(SF),
              AF = FF.node(SF);
            if (AF && CF && "number" == typeof CF.x && "number" == typeof CF.y) {
              let FF = CF.x - PF,
                WF = CF.y - RF;
              AF.x = bW + FF, AF.y = dF + WF
            }
          })), delete AF._dagreClusterSubgraph
        }
      }))
    }

    function gC(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var AF, uF;
      let hF = !1 !== (null == SF ? void 0 : SF.useDynamic),
        bW = hF && null != (AF = null == CF ? void 0 : CF.graph) ? AF : null,
        dF = hF && null != (uF = null == CF ? void 0 : CF.rawNodes) ? uF : null;
      WF("    makeSpaceForEdgeLabels", (() => function(FF) {
        let WF = FF.graph();
        WF.ranksep /= 2, FF.edges().forEach((SF => {
          var CF;
          let AF = FF.edge(SF);
          AF.minlen *= 2, "c" !== (null != (CF = AF.labelpos) ? CF : "r").toLowerCase() && ("TB" === WF.rankdir || "BT" === WF.rankdir ? AF.width += AF.labeloffset : AF.height += AF.labeloffset)
        }))
      }(FF))), WF("    removeSelfEdges", (() => function(FF) {
        FF.edges().forEach((WF => {
          if (WF.v === WF.w) {
            let SF = FF.node(WF.v);
            SF.selfEdges || (SF.selfEdges = []), SF.selfEdges.push({
              e: WF,
              label: FF.edge(WF)
            }), FF.removeEdge(WF)
          }
        }))
      }(FF))), WF("    acyclic", (() => EW(FF, bW))), WF("    nestingGraph.run", (() => fW(FF))), WF("    rank", (() => cS(HF(FF)))), WF("    injectEdgeLabelProxies", (() => function(FF) {
        FF.edges().forEach((WF => {
          let SF = FF.edge(WF);
          if (SF.width && SF.height) {
            let SF = FF.node(WF.v),
              CF = {
                rank: (FF.node(WF.w).rank - SF.rank) / 2 + SF.rank,
                e: WF
              };
            nF(FF, "edge-proxy", CF, "_ep")
          }
        }))
      }(FF))), WF("    removeEmptyRanks", (() => function(FF) {
        let WF = FF.nodes().map((WF => FF.node(WF).rank)).filter((FF => void 0 !== FF)),
          SF = BF(Math.min, WF),
          CF = [];
        FF.nodes().forEach((WF => {
          let AF = FF.node(WF).rank - SF;
          CF[AF] || (CF[AF] = []), CF[AF].push(WF)
        }));
        let AF = 0,
          uF = FF.graph().nodeRankFactor;
        Array.from(CF).forEach(((WF, SF) => {
          void 0 === WF && SF % uF !== 0 ? --AF : void 0 !== WF && AF && WF.forEach((WF => FF.node(WF).rank += AF))
        }))
      }(FF))), WF("    nestingGraph.cleanup", (() => function(FF) {
        let WF = FF.graph();
        FF.removeNode(WF.nestingRoot), delete WF.nestingRoot, FF.edges().forEach((WF => {
          FF.edge(WF).nestingEdge && FF.removeEdge(WF)
        }))
      }(FF))), WF("    normalizeRanks", (() => function(FF) {
        let WF = FF.nodes().map((WF => {
            let SF = FF.node(WF).rank;
            return void 0 === SF ? Number.MAX_VALUE : SF
          })),
          SF = BF(Math.min, WF);
        FF.nodes().forEach((WF => {
          let CF = FF.node(WF);
          Object.hasOwn(CF, "rank") && (CF.rank -= SF)
        }))
      }(FF))), WF("    assignRankMinMax", (() => function(FF) {
        let WF = 0;
        FF.nodes().forEach((SF => {
          let CF = FF.node(SF);
          CF.borderTop && (CF.minRank = FF.node(CF.borderTop).rank, CF.maxRank = FF.node(CF.borderBottom).rank, WF = Math.max(WF, CF.maxRank))
        })), FF.graph().maxRank = WF
      }(FF))), WF("    removeEdgeLabelProxies", (() => function(FF) {
        FF.nodes().forEach((WF => {
          let SF = FF.node(WF);
          if ("edge-proxy" === SF.dummy) {
            let CF = SF;
            FF.edge(CF.e).labelRank = SF.rank, FF.removeNode(WF)
          }
        }))
      }(FF))), WF("    normalize.run", (() => QW(FF))), WF("    parentDummyChains", (() => IW(FF))), WF("    addBorderSegments", (() => sW(FF))), WF("    order", (() => SS(FF, SF, dF))), WF("    insertSelfEdges", (() => function(FF) {
        wF(FF).forEach((WF => {
          let SF = 0;
          WF.forEach(((WF, CF) => {
            let AF = FF.node(WF);
            "number" != typeof AF.rank && (AF.rank = 0), AF.order = CF + SF, (AF.selfEdges || []).forEach((WF => {
              nF(FF, "selfedge", {
                width: WF.label.width,
                height: WF.label.height,
                rank: AF.rank,
                order: CF + ++SF,
                e: WF.e,
                edgeLabel: WF.label
              }, "_se"), (!Array.isArray(WF.label.points) || 7 !== WF.label.points.length) && (WF.label.points = [{
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
            })), delete AF.selfEdges
          }))
        }))
      }(FF))), WF("    adjustCoordinateSystem", (() => function(FF) {
        var WF;
        let SF = null == (WF = FF.graph().rankdir) ? void 0 : WF.toLowerCase();
        ("lr" === SF || "rl" === SF) && KW(FF)
      }(FF))), WF("    position", (() => iC(FF, SF.corePath))), WF("    positionSelfEdges", (() => function(FF) {
        FF.nodes().forEach((WF => {
          let SF = FF.node(WF),
            CF = FF => "number" == typeof FF && isFinite(FF);
          if ("selfedge" === SF.dummy) {
            let AF = SF,
              uF = FF.node(AF.e.v),
              hF = CF(null == uF ? void 0 : uF.x) ? uF.x : 0,
              bW = CF(null == uF ? void 0 : uF.y) ? uF.y : 0,
              dF = CF(null == uF ? void 0 : uF.width) ? uF.width : 0,
              PF = CF(null == uF ? void 0 : uF.height) ? uF.height : 0,
              RF = CF(SF.x) ? SF.x : hF,
              iW = CF(SF.y) ? SF.y : bW,
              eF = dF / 2,
              EF = PF / 2;
            AF.edgeLabel.points = [{
              x: RF + eF,
              y: iW - EF
            }, {
              x: RF + eF,
              y: iW - EF
            }, {
              x: RF,
              y: iW
            }, {
              x: RF - eF,
              y: iW + EF
            }, {
              x: RF - eF,
              y: iW + EF
            }, {
              x: RF,
              y: iW
            }, {
              x: RF,
              y: iW
            }], AF.edgeLabel.x = RF, AF.edgeLabel.y = iW, FF.setEdge(AF.e, AF.edgeLabel), FF.removeNode(WF)
          } else SF && Array.isArray(SF.selfEdges) && SF.selfEdges.forEach((FF => {
            if (!Array.isArray(FF.label.points) || 7 !== FF.label.points.length) {
              let WF = CF(SF.x) ? SF.x : 0,
                AF = CF(SF.y) ? SF.y : 0,
                uF = (CF(SF.width) ? SF.width : 0) / 2,
                hF = (CF(SF.height) ? SF.height : 0) / 2;
              FF.label.points = [{
                x: WF + uF,
                y: AF - hF
              }, {
                x: WF + uF,
                y: AF - hF
              }, {
                x: WF,
                y: AF
              }, {
                x: WF - uF,
                y: AF + hF
              }, {
                x: WF - uF,
                y: AF + hF
              }, {
                x: WF,
                y: AF
              }, {
                x: WF,
                y: AF
              }]
            }
          }))
        }))
      }(FF)));
      let PF = JSON.parse(JSON.stringify(FF._nodes));
      return WF("    removeBorderNodes", (() => function(FF) {
        FF.nodes().forEach((WF => {
          if (FF.children(WF).length) {
            let SF = FF.node(WF),
              CF = FF.node(SF.borderTop),
              AF = FF.node(SF.borderBottom),
              uF = FF.node(SF.borderLeft[SF.borderLeft.length - 1]),
              hF = FF.node(SF.borderRight[SF.borderRight.length - 1]);
            SF.width = Math.abs(hF.x - uF.x), SF.height = Math.abs(AF.y - CF.y), SF.x = uF.x + SF.width / 2, SF.y = CF.y + SF.height / 2
          }
        })), FF.nodes().forEach((WF => {
          "border" === FF.node(WF).dummy && FF.removeNode(WF)
        }))
      }(FF))), WF("    normalize.undo", (() => function(FF) {
        FF.graph().dummyChains.forEach((WF => {
          let SF, CF = FF.node(WF),
            AF = CF.edgeLabel;
          for (FF.setEdge(CF.edgeObj, AF); CF.dummy;) SF = FF.successors(WF)[0], FF.removeNode(WF), AF.points.push({
            x: CF.x,
            y: CF.y
          }), "edge-label" === CF.dummy && (AF.x = CF.x, AF.y = CF.y, AF.width = CF.width, AF.height = CF.height), WF = SF, CF = FF.node(WF)
        }))
      }(FF))), WF("    fixupEdgeLabelCoords", (() => function(FF) {
        FF.edges().forEach((WF => {
          let SF = FF.edge(WF);
          if (Object.hasOwn(SF, "x")) switch (("l" === SF.labelpos || "r" === SF.labelpos) && (SF.width -= SF.labeloffset), SF.labelpos) {
            case "l":
              SF.x -= SF.width / 2 + SF.labeloffset;
              break;
            case "r":
              SF.x += SF.width / 2 + SF.labeloffset
          }
        }))
      }(FF))), WF("    undoCoordinateSystem", (() => HW(FF))), WF("    translateGraph", (() => function(FF) {
        let WF = Number.POSITIVE_INFINITY,
          SF = 0,
          CF = Number.POSITIVE_INFINITY,
          AF = 0,
          uF = FF.graph(),
          hF = uF.marginx || 0,
          bW = uF.marginy || 0;

        function dF(FF) {
          let uF = FF.x,
            hF = FF.y,
            bW = FF.width,
            dF = FF.height;
          WF = Math.min(WF, uF - bW / 2), SF = Math.max(SF, uF + bW / 2), CF = Math.min(CF, hF - dF / 2), AF = Math.max(AF, hF + dF / 2)
        }
        FF.nodes().forEach((WF => dF(FF.node(WF)))), FF.edges().forEach((WF => {
          let SF = FF.edge(WF);
          Object.hasOwn(SF, "x") && dF(SF)
        })), WF -= hF, CF -= bW, FF.nodes().forEach((SF => {
          let AF = FF.node(SF);
          AF.x -= WF, AF.y -= CF
        })), FF.edges().forEach((SF => {
          let AF = FF.edge(SF);
          AF.points.forEach((FF => {
            FF.x -= WF, FF.y -= CF
          })), Object.hasOwn(AF, "x") && (AF.x -= WF), Object.hasOwn(AF, "y") && (AF.y -= CF)
        })), uF.width = SF - WF + hF, uF.height = AF - CF + bW
      }(FF))), WF("    assignNodeIntersects", (() => function(FF) {
        FF.edges().forEach((WF => {
          if (WF.v === WF.w) return;
          let SF, CF, AF = FF.edge(WF),
            uF = FF.node(WF.v),
            hF = FF.node(WF.w);
          AF.points ? (SF = AF.points[0], CF = AF.points[AF.points.length - 1]) : (AF.points = [], SF = hF, CF = uF), AF.points.unshift(KF(uF, SF)), AF.points.push(KF(hF, CF))
        }))
      }(FF))), WF("    reversePoints", (() => function(FF) {
        FF.edges().forEach((WF => {
          let SF = FF.edge(WF);
          SF.reversed && SF.points.reverse()
        }))
      }(FF))), WF("    acyclic.undo", (() => function(FF) {
        FF.edges().forEach((WF => {
          let SF = FF.edge(WF);
          if (SF.reversed) {
            FF.removeEdge(WF);
            let CF = SF.forwardName;
            delete SF.reversed, delete SF.forwardName, FF.setEdge(WF.w, WF.v, SF, CF)
          }
        }))
      }(FF))), {
        graph: FF,
        rawNodes: PF
      }
    }

    function tC(FF, WF) {
      FF.nodes().forEach((SF => {
        let CF = FF.node(SF),
          AF = WF.node(SF);
        CF && (CF.x = AF.x, CF.y = AF.y, CF.order = AF.order, CF.rank = AF.rank, WF.children(SF).length && (CF.width = AF.width, CF.height = AF.height))
      })), FF.edges().forEach((SF => {
        let CF = FF.edge(SF),
          AF = WF.edge(SF);
        CF.points = AF.points, Object.hasOwn(AF, "x") && (CF.x = AF.x, CF.y = AF.y)
      })), FF.graph().width = WF.graph().width, FF.graph().height = WF.graph().height
    }
    var TS = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      aC = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      kC = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      qC = ["width", "height", "rank"],
      VS = {
        width: 0,
        height: 0
      },
      NS = ["minlen", "weight", "width", "height", "labeloffset"],
      DS = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      LS = ["labelpos"];

    function mC(FF) {
      let WF = new sF({
          multigraph: !0,
          compound: !0
        }),
        SF = xC(FF.graph());
      return WF.setGraph(Object.assign({}, aC, OS(SF, TS), WW(SF, kC))), FF.nodes().forEach((SF => {
        let CF = OS(xC(FF.node(SF)), qC);
        Object.keys(VS).forEach((FF => {
          void 0 === CF[FF] && (CF[FF] = VS[FF])
        })), WF.setNode(SF, CF);
        let AF = FF.parent(SF);
        void 0 !== AF && WF.setParent(SF, AF)
      })), FF.edges().forEach((SF => {
        let CF = xC(FF.edge(SF));
        WF.setEdge(SF, Object.assign({}, DS, OS(CF, NS), WW(CF, LS)))
      })), WF
    }

    function OS(FF, WF) {
      return SW(WW(FF, WF), Number)
    }

    function xC(FF) {
      let WF = {};
      return FF && Object.entries(FF).forEach((FF => {
        let [SF, CF] = FF;
        "string" == typeof SF && (SF = SF.toLowerCase()), WF[SF] = CF
      })), WF
    }

    function ZS(FF) {
      let WF = wF(FF),
        SF = new sF({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return FF.nodes().forEach((WF => {
        SF.setNode(WF, {
          label: WF
        }), SF.setParent(WF, "layer" + FF.node(WF).rank)
      })), FF.edges().forEach((FF => SF.setEdge(FF.v, FF.w, {}, FF.name))), WF.forEach(((FF, WF) => {
        let CF = "layer" + WF;
        SF.setNode(CF, {
          rank: "same"
        }), FF.reduce(((FF, WF) => (SF.setEdge(FF, WF, {
          style: "invis"
        }), WF)))
      })), SF
    }
    var oS = {
        time: vW,
        notime: JF
      },
      YS = {
        graphlib: uF,
        version: uW,
        layout: ES,
        debug: ZS,
        util: {
          time: vW,
          notime: JF
        }
      }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);