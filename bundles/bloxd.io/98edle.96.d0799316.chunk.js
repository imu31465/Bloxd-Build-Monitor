/*! For license information please see 98edle.96.d0799316.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  5428: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Graph: () => xR,
      debug: () => kw,
      default: () => sM,
      graphlib: () => zR,
      layout: () => TM,
      util: () => aw,
      version: () => zM
    });
    var wW = Object.defineProperty,
      CW = (WW, RW, MW) => ((WW, RW, MW) => RW in WW ? wW(WW, RW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: MW
      }) : WW[RW] = MW)(WW, "symbol" != typeof RW ? RW + "" : RW, MW),
      zR = {};
    ((WW, RW) => {
      for (var MW in RW) wW(WW, MW, {
        get: RW[MW],
        enumerable: !0
      })
    })(zR, {
      Graph: () => xR,
      alg: () => JW
    });
    var AW = Object.defineProperty,
      bR = (WW, RW) => {
        for (var MW in RW) AW(WW, MW, {
          get: RW[MW],
          enumerable: !0
        })
      },
      yR = class {
        constructor(WW) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, WW && (this._isDirected = !("directed" in WW) || WW.directed, this._isMultigraph = "multigraph" in WW && WW.multigraph, this._isCompound = "compound" in WW && WW.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(WW) {
          return this._label = WW, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(WW) {
          return this._defaultNodeLabelFn = "function" != typeof WW ? () => WW : WW, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((WW => 0 === Object.keys(this._in[WW]).length))
        }
        sinks() {
          return this.nodes().filter((WW => 0 === Object.keys(this._out[WW]).length))
        }
        setNodes(WW, RW) {
          return WW.forEach((WW => {
            void 0 !== RW ? this.setNode(WW, RW) : this.setNode(WW)
          })), this
        }
        setNode(WW, RW) {
          return WW in this._nodes ? (arguments.length > 1 && (this._nodes[WW] = RW), this) : (this._nodes[WW] = arguments.length > 1 ? RW : this._defaultNodeLabelFn(WW), this._isCompound && (this._parent[WW] = "\0", this._children[WW] = {}, this._children["\0"][WW] = !0), this._in[WW] = {}, this._preds[WW] = {}, this._out[WW] = {}, this._sucs[WW] = {}, ++this._nodeCount, this)
        }
        node(WW) {
          return this._nodes[WW]
        }
        hasNode(WW) {
          return WW in this._nodes
        }
        removeNode(WW) {
          if (WW in this._nodes) {
            let RW = WW => this.removeEdge(this._edgeObjs[WW]);
            delete this._nodes[WW], this._isCompound && (this._removeFromParentsChildList(WW), delete this._parent[WW], this.children(WW).forEach((WW => {
              this.setParent(WW)
            })), delete this._children[WW]), Object.keys(this._in[WW]).forEach(RW), delete this._in[WW], delete this._preds[WW], Object.keys(this._out[WW]).forEach(RW), delete this._out[WW], delete this._sucs[WW], --this._nodeCount
          }
          return this
        }
        setParent(WW, RW) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === RW) RW = "\0";
          else {
            for (let MW = RW += ""; void 0 !== MW; MW = this.parent(MW))
              if (MW === WW) throw new Error("Setting " + RW + " as parent of " + WW + " would create a cycle");
            this.setNode(RW)
          }
          return this.setNode(WW), this._removeFromParentsChildList(WW), this._parent[WW] = RW, this._children[RW][WW] = !0, this
        }
        parent(WW) {
          if (this._isCompound) {
            let RW = this._parent[WW];
            if ("\0" !== RW) return RW
          }
        }
        children() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let RW = this._children[WW];
            if (RW) return Object.keys(RW)
          } else {
            if ("\0" === WW) return this.nodes();
            if (this.hasNode(WW)) return []
          }
          return []
        }
        predecessors(WW) {
          let RW = this._preds[WW];
          if (RW) return Object.keys(RW)
        }
        successors(WW) {
          let RW = this._sucs[WW];
          if (RW) return Object.keys(RW)
        }
        neighbors(WW) {
          let RW = this.predecessors(WW);
          if (RW) {
            let MW = new Set(RW),
              wW = this.successors(WW);
            if (wW)
              for (let WW of wW) MW.add(WW);
            return Array.from(MW.values())
          }
        }
        isLeaf(WW) {
          var RW;
          let MW;
          return MW = this.isDirected() ? this.successors(WW) : this.neighbors(WW), 0 === (null != (RW = null == MW ? void 0 : MW.length) ? RW : 0)
        }
        filterNodes(WW) {
          let RW = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          RW.setGraph(this.graph()), Object.entries(this._nodes).forEach((MW => {
            let [wW, CW] = MW;
            WW(wW) && RW.setNode(wW, CW)
          })), Object.values(this._edgeObjs).forEach((WW => {
            RW.hasNode(WW.v) && RW.hasNode(WW.w) && RW.setEdge(WW, this.edge(WW))
          }));
          let MW = {},
            wW = WW => {
              let CW = this.parent(WW);
              return !CW || RW.hasNode(CW) ? (MW[WW] = CW, CW) : CW in MW ? MW[CW] : wW(CW)
            };
          return this._isCompound && RW.nodes().forEach((WW => RW.setParent(WW, wW(WW)))), RW
        }
        setDefaultEdgeLabel(WW) {
          return this._defaultEdgeLabelFn = "function" != typeof WW ? () => WW : WW, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(WW, RW) {
          return WW.reduce(((WW, MW) => (void 0 !== RW ? this.setEdge(WW, MW, RW) : this.setEdge(WW, MW), MW))), this
        }
        setEdge(WW, RW, MW, wW) {
          let CW, zR, AW, bR, yR = !1;
          "object" == typeof WW && null !== WW && "v" in WW ? (CW = WW.v, zR = WW.w, AW = WW.name, 2 === arguments.length && (bR = RW, yR = !0)) : (CW = WW, zR = RW, AW = wW, arguments.length > 2 && (bR = MW, yR = !0)), CW = "" + CW, zR = "" + zR, void 0 !== AW && (AW = "" + AW);
          let eW = BW(this._isDirected, CW, zR, AW);
          if (eW in this._edgeLabels) return yR && (this._edgeLabels[eW] = bR), this;
          if (void 0 !== AW && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(CW), this.setNode(zR), this._edgeLabels[eW] = yR ? bR : this._defaultEdgeLabelFn(CW, zR, AW);
          let tR = function(WW, RW, MW, wW) {
            let CW = "" + RW,
              zR = "" + MW;
            if (!WW && CW > zR) {
              let WW = CW;
              CW = zR, zR = WW
            }
            let AW = {
              v: CW,
              w: zR
            };
            return wW && (AW.name = wW), AW
          }(this._isDirected, CW, zR, AW);
          return CW = tR.v, zR = tR.w, Object.freeze(tR), this._edgeObjs[eW] = tR, NW(this._preds[zR], CW), NW(this._sucs[CW], zR), this._in[zR][eW] = tR, this._out[CW][eW] = tR, this._edgeCount++, this
        }
        edge(WW, RW, MW) {
          let wW = 1 === arguments.length ? tR(this._isDirected, WW) : BW(this._isDirected, WW, RW, MW);
          return this._edgeLabels[wW]
        }
        edgeAsObj(WW, RW, MW) {
          let wW = 1 === arguments.length ? this.edge(WW) : this.edge(WW, RW, MW);
          return "object" != typeof wW || null === wW ? {
            label: wW
          } : wW
        }
        hasEdge(WW, RW, MW) {
          return (1 === arguments.length ? tR(this._isDirected, WW) : BW(this._isDirected, WW, RW, MW)) in this._edgeLabels
        }
        removeEdge(WW, RW, MW) {
          let wW = 1 === arguments.length ? tR(this._isDirected, WW) : BW(this._isDirected, WW, RW, MW),
            CW = this._edgeObjs[wW];
          if (CW) {
            let WW = CW.v,
              RW = CW.w;
            delete this._edgeLabels[wW], delete this._edgeObjs[wW], eW(this._preds[RW], WW), eW(this._sucs[WW], RW), delete this._in[RW][wW], delete this._out[WW][wW], this._edgeCount--
          }
          return this
        }
        inEdges(WW, RW) {
          return this.isDirected() ? this.filterEdges(this._in[WW], WW, RW) : this.nodeEdges(WW, RW)
        }
        outEdges(WW, RW) {
          return this.isDirected() ? this.filterEdges(this._out[WW], WW, RW) : this.nodeEdges(WW, RW)
        }
        nodeEdges(WW, RW) {
          if (WW in this._nodes) return this.filterEdges({
            ...this._in[WW],
            ...this._out[WW]
          }, WW, RW)
        }
        _removeFromParentsChildList(WW) {
          delete this._children[this._parent[WW]][WW]
        }
        filterEdges(WW, RW, MW) {
          if (!WW) return;
          let wW = Object.values(WW);
          return MW ? wW.filter((WW => WW.v === RW && WW.w === MW || WW.v === MW && WW.w === RW)) : wW
        }
      };

    function NW(WW, RW) {
      WW[RW] ? WW[RW]++ : WW[RW] = 1
    }

    function eW(WW, RW) {
      void 0 !== WW[RW] && !--WW[RW] && delete WW[RW]
    }

    function BW(WW, RW, MW, wW) {
      let CW = "" + RW,
        zR = "" + MW;
      if (!WW && CW > zR) {
        let WW = CW;
        CW = zR, zR = WW
      }
      return CW + "\x01" + zR + "\x01" + (void 0 === wW ? "\0" : wW)
    }

    function tR(WW, RW) {
      return BW(WW, RW.v, RW.w, RW.name)
    }

    function TW(WW) {
      let RW = {
          options: {
            directed: WW.isDirected(),
            multigraph: WW.isMultigraph(),
            compound: WW.isCompound()
          },
          nodes: gR(WW),
          edges: iR(WW)
        },
        MW = WW.graph();
      return void 0 !== MW && (RW.value = structuredClone(MW)), RW
    }

    function gR(WW) {
      return WW.nodes().map((RW => {
        let MW = WW.node(RW),
          wW = WW.parent(RW),
          CW = {
            v: RW
          };
        return void 0 !== MW && (CW.value = MW), void 0 !== wW && (CW.parent = wW), CW
      }))
    }

    function iR(WW) {
      return WW.edges().map((RW => {
        let MW = WW.edge(RW),
          wW = {
            v: RW.v,
            w: RW.w
          };
        return void 0 !== RW.name && (wW.name = RW.name), void 0 !== MW && (wW.value = MW), wW
      }))
    }

    function YW(WW) {
      let RW = new yR(WW.options);
      return void 0 !== WW.value && RW.setGraph(WW.value), WW.nodes.forEach((WW => {
        RW.setNode(WW.v, WW.value), WW.parent && RW.setParent(WW.v, WW.parent)
      })), WW.edges.forEach((WW => {
        RW.setEdge({
          v: WW.v,
          w: WW.w,
          name: WW.name
        }, WW.value)
      })), RW
    }
    bR({}, {
      read: () => YW,
      write: () => TW
    });
    var JW = {};
    bR(JW, {
      CycleException: () => kR,
      bellmanFord: () => IW,
      components: () => oW,
      dijkstra: () => fW,
      dijkstraAll: () => QW,
      findCycles: () => cR,
      floydWarshall: () => jR,
      isAcyclic: () => sW,
      postorder: () => UW,
      preorder: () => EW,
      prim: () => VW,
      shortestPaths: () => mR,
      tarjan: () => rR,
      topsort: () => aR
    });
    var PW = () => 1;

    function IW(WW, RW, MW, wW) {
      return function(WW, RW, MW, wW) {
        let CW, zR = {},
          AW = 0,
          bR = WW.nodes(),
          yR = function(WW) {
            let RW = zR[WW.v],
              wW = zR[WW.w];
            if (!RW || !wW) return;
            let AW = MW(WW);
            RW.distance + AW < wW.distance && (zR[WW.w] = {
              distance: RW.distance + AW,
              predecessor: WW.v
            }, CW = !0)
          },
          NW = function() {
            bR.forEach((function(WW) {
              wW(WW).forEach((function(RW) {
                let MW = RW.v === WW ? RW.v : RW.w,
                  wW = MW === RW.v ? RW.w : RW.v;
                yR({
                  v: MW,
                  w: wW
                })
              }))
            }))
          };
        bR.forEach((function(WW) {
          let MW = WW === RW ? 0 : Number.POSITIVE_INFINITY;
          zR[WW] = {
            distance: MW,
            predecessor: ""
          }
        }));
        let eW = bR.length;
        for (let BW = 1; BW < eW && (CW = !1, AW++, NW(), CW); BW++);
        if (AW === eW - 1 && (CW = !1, NW(), CW)) throw new Error("The graph contains a negative weight cycle");
        return zR
      }(WW, String(RW), MW || PW, wW || function(RW) {
        var MW;
        return null != (MW = WW.outEdges(RW)) ? MW : []
      })
    }

    function oW(WW) {
      let RW, MW = {},
        wW = [];

      function CW(wW) {
        var zR, AW;
        wW in MW || (MW[wW] = !0, RW.push(wW), null == (zR = WW.successors(wW)) || zR.forEach(CW), null == (AW = WW.predecessors(wW)) || AW.forEach(CW))
      }
      return WW.nodes().forEach((function(WW) {
        RW = [], CW(WW), RW.length && wW.push(RW)
      })), wW
    }
    var lW = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((WW => WW.key))
        }
        has(WW) {
          return WW in this._keyIndices
        }
        priority(WW) {
          let RW = this._keyIndices[WW];
          if (void 0 !== RW) return this._arr[RW].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(WW, RW) {
          let MW = this._keyIndices,
            wW = String(WW);
          if (!(wW in MW)) {
            let WW = this._arr,
              CW = WW.length;
            return MW[wW] = CW, WW.push({
              key: wW,
              priority: RW
            }), this._decrease(CW), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let WW = this._arr.pop();
          return delete this._keyIndices[WW.key], this._heapify(0), WW.key
        }
        decrease(WW, RW) {
          let MW = this._keyIndices[WW];
          if (void 0 === MW) throw new Error(`Key not found: ${WW}`);
          let wW = this._arr[MW].priority;
          if (RW > wW) throw new Error(`New priority is greater than current priority. Key: ${WW} Old: ${wW} New: ${RW}`);
          this._arr[MW].priority = RW, this._decrease(MW)
        }
        _heapify(WW) {
          let RW = this._arr,
            MW = 2 * WW,
            wW = MW + 1,
            CW = WW;
          MW < RW.length && (CW = RW[MW].priority < RW[CW].priority ? MW : CW, wW < RW.length && (CW = RW[wW].priority < RW[CW].priority ? wW : CW), CW !== WW && (this._swap(WW, CW), this._heapify(CW)))
        }
        _decrease(WW) {
          let RW, MW = this._arr,
            wW = MW[WW].priority;
          for (; 0 !== WW && (RW = WW >> 1, !(MW[RW].priority < wW));) this._swap(WW, RW), WW = RW
        }
        _swap(WW, RW) {
          let MW = this._arr,
            wW = this._keyIndices,
            CW = MW[WW],
            zR = MW[RW];
          MW[WW] = zR, MW[RW] = CW, wW[zR.key] = WW, wW[CW.key] = RW
        }
      },
      FW = () => 1;

    function fW(WW, RW, MW, wW) {
      return function(WW, RW, MW, wW) {
        let CW, zR, AW = {},
          bR = new lW,
          yR = function(WW) {
            let RW = WW.v !== CW ? WW.v : WW.w,
              wW = AW[RW];
            if (!wW) return;
            let yR = MW(WW),
              NW = zR.distance + yR;
            if (yR < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + WW + " Weight: " + yR);
            NW < wW.distance && (wW.distance = NW, wW.predecessor = CW, bR.decrease(RW, NW))
          };
        for (WW.nodes().forEach((function(WW) {
            let MW = WW === RW ? 0 : Number.POSITIVE_INFINITY;
            AW[WW] = {
              distance: MW,
              predecessor: ""
            }, bR.add(WW, MW)
          })); bR.size() > 0;) {
          CW = bR.removeMin();
          let WW = AW[CW];
          if (!WW || WW.distance === Number.POSITIVE_INFINITY) break;
          zR = WW, wW(CW).forEach(yR)
        }
        return AW
      }(WW, String(RW), MW || FW, wW || function(RW) {
        var MW;
        return null != (MW = WW.outEdges(RW)) ? MW : []
      })
    }

    function QW(WW, RW, MW) {
      return WW.nodes().reduce((function(wW, CW) {
        return wW[CW] = fW(WW, CW, RW, MW), wW
      }), {})
    }

    function rR(WW) {
      let RW = 0,
        MW = [],
        wW = {},
        CW = [];

      function zR(AW) {
        var bR;
        let yR = wW[AW] = {
          onStack: !0,
          lowlink: RW,
          index: RW++
        };
        if (MW.push(AW), null == (bR = WW.successors(AW)) || bR.forEach((function(WW) {
            if (WW in wW) {
              let RW = wW[WW];
              null != RW && RW.onStack && (yR.lowlink = Math.min(yR.lowlink, RW.index))
            } else {
              zR(WW);
              let RW = wW[WW];
              RW && (yR.lowlink = Math.min(yR.lowlink, RW.lowlink))
            }
          })), yR.lowlink === yR.index) {
          let WW, RW = [];
          do {
            WW = MW.pop();
            let CW = wW[WW];
            CW && (CW.onStack = !1), RW.push(WW)
          } while (AW !== WW);
          CW.push(RW)
        }
      }
      return WW.nodes().forEach((function(WW) {
        WW in wW || zR(WW)
      })), CW
    }

    function cR(WW) {
      return rR(WW).filter((function(RW) {
        var MW;
        let wW = RW[0];
        return !!wW && (RW.length > 1 || 1 === RW.length && (null != (MW = WW.outEdges(wW, wW)) ? MW : []).length > 0)
      }))
    }
    var XW = () => 1;

    function jR(WW, RW, MW) {
      return function(WW, RW, MW) {
        let wW = {},
          CW = WW.nodes();
        return CW.forEach((function(WW) {
          let zR = {};
          wW[WW] = zR, zR[WW] = {
            distance: 0,
            predecessor: ""
          }, CW.forEach((function(RW) {
            WW !== RW && (zR[RW] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), MW(WW).forEach((function(MW) {
            let wW = MW.v === WW ? MW.w : MW.v,
              CW = RW(MW);
            zR[wW] = {
              distance: CW,
              predecessor: WW
            }
          }))
        })), CW.forEach((function(WW) {
          let RW = wW[WW];
          RW && CW.forEach((function(MW) {
            let zR = wW[MW];
            zR && CW.forEach((function(MW) {
              let wW = zR[WW],
                CW = RW[MW],
                AW = zR[MW];
              if (wW && CW && AW) {
                let WW = wW.distance + CW.distance;
                WW < AW.distance && (AW.distance = WW, AW.predecessor = CW.predecessor)
              }
            }))
          }))
        })), wW
      }(WW, RW || XW, MW || function(RW) {
        var MW;
        return null != (MW = WW.outEdges(RW)) ? MW : []
      })
    }
    var kR = class extends Error {
      constructor(WW) {
        super(WW), this.name = "CycleException"
      }
    };

    function aR(WW) {
      let RW = {},
        MW = {},
        wW = [];
      if (WW.sinks().forEach((function CW(zR) {
          var AW;
          if (zR in MW) throw new kR;
          zR in RW || (MW[zR] = !0, RW[zR] = !0, null == (AW = WW.predecessors(zR)) || AW.forEach(CW), delete MW[zR], wW.push(zR))
        })), Object.keys(RW).length !== WW.nodeCount()) throw new kR;
      return wW
    }

    function sW(WW) {
      try {
        aR(WW)
      } catch (RW) {
        if (RW instanceof kR) return !1;
        throw RW
      }
      return !0
    }

    function dW(WW, RW, MW, wW, CW) {
      Array.isArray(RW) || (RW = [RW]);
      let zR = RW => {
          var MW;
          return null != (MW = WW.isDirected() ? WW.successors(RW) : WW.neighbors(RW)) ? MW : []
        },
        AW = {};
      return RW.forEach((function(RW) {
        if (!WW.hasNode(RW)) throw new Error("Graph does not have node: " + RW);
        CW = pW(WW, RW, "post" === MW, AW, zR, wW, CW)
      })), CW
    }

    function pW(WW, RW, MW, wW, CW, zR, AW) {
      return RW in wW || (wW[RW] = !0, MW || (AW = zR(AW, RW)), CW(RW).forEach((function(RW) {
        AW = pW(WW, RW, MW, wW, CW, zR, AW)
      })), MW && (AW = zR(AW, RW))), AW
    }

    function hW(WW, RW, MW) {
      return dW(WW, RW, MW, (function(WW, RW) {
        return WW.push(RW), WW
      }), [])
    }

    function UW(WW, RW) {
      return hW(WW, RW, "post")
    }

    function EW(WW, RW) {
      return hW(WW, RW, "pre")
    }

    function VW(WW, RW) {
      var MW;
      let wW, CW = new yR,
        zR = {},
        AW = new lW;

      function bR(WW) {
        let MW = WW.v === wW ? WW.w : WW.v,
          CW = AW.priority(MW);
        if (void 0 !== CW) {
          let bR = RW(WW);
          bR < CW && (zR[MW] = wW, AW.decrease(MW, bR))
        }
      }
      if (0 === WW.nodeCount()) return CW;
      WW.nodes().forEach((function(WW) {
        AW.add(WW, Number.POSITIVE_INFINITY), CW.setNode(WW)
      }));
      let NW = WW.nodes()[0];
      void 0 !== NW && AW.decrease(NW, 0);
      let eW = !1;
      for (; AW.size() > 0;) {
        if (wW = AW.removeMin(), wW in zR) CW.setEdge(wW, zR[wW]);
        else {
          if (eW) throw new Error("Input graph is not connected: " + WW);
          eW = !0
        }
        null == (MW = WW.nodeEdges(wW)) || MW.forEach(bR)
      }
      return CW
    }

    function mR(WW, RW, MW, wW) {
      return function(WW, RW, MW, wW) {
        if (void 0 === MW) return fW(WW, RW, MW, wW);
        let CW = !1,
          zR = WW.nodes();
        for (let AW = 0; AW < zR.length; AW++) {
          let bR = zR[AW];
          if (void 0 === bR) continue;
          let yR = wW(bR);
          for (let WW = 0; WW < yR.length; WW++) {
            let RW = yR[WW];
            if (!RW) continue;
            let wW = RW.v === bR ? RW.v : RW.w;
            MW({
              v: wW,
              w: wW === RW.v ? RW.w : RW.v
            }) < 0 && (CW = !0)
          }
          if (CW) return IW(WW, RW, MW, wW)
        }
        return fW(WW, RW, MW, wW)
      }(WW, RW, MW, null != wW ? wW : RW => {
        var MW;
        return null != (MW = WW.outEdges(RW)) ? MW : []
      })
    }
    var xR = yR;

    function vR(WW, RW, MW, wW) {
      let CW = wW;
      for (; WW.hasNode(CW);) CW = SW(wW);
      return MW.dummy = RW, WW.setNode(CW, MW), CW
    }

    function KW(WW) {
      let RW = new xR({
        multigraph: WW.isMultigraph()
      }).setGraph(WW.graph());
      return WW.nodes().forEach((MW => {
        WW.children(MW).length || RW.setNode(MW, WW.node(MW))
      })), WW.edges().forEach((MW => {
        RW.setEdge(MW, WW.edge(MW))
      })), RW
    }

    function uW(WW, RW) {
      let MW, wW, CW = WW.x,
        zR = WW.y,
        AW = RW.x - CW,
        bR = RW.y - zR,
        yR = WW.width / 2,
        NW = WW.height / 2;
      if (!AW && !bR) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(bR) * yR > Math.abs(AW) * NW ? (bR < 0 && (NW = -NW), MW = NW * AW / bR, wW = NW) : (AW < 0 && (yR = -yR), MW = yR, wW = yR * bR / AW), {
        x: CW + MW,
        y: zR + wW
      }
    }

    function OW(WW) {
      let RW = WR(HW(WW) + 1).map((() => []));
      return WW.nodes().forEach((MW => {
        let wW = WW.node(MW),
          CW = wW.rank;
        void 0 !== CW && (RW[CW] || (RW[CW] = []), RW[CW][wW.order] = MW)
      })), RW
    }

    function nW(WW, RW, MW, wW) {
      let CW = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (CW.rank = MW, CW.order = wW), vR(WW, "border", CW, RW)
    }
    var GW = 65535;

    function LW(WW, RW) {
      if (RW.length > GW) {
        let MW = function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GW,
            MW = [];
          for (let wW = 0; wW < WW.length; wW += RW) {
            let CW = WW.slice(wW, wW + RW);
            MW.push(CW)
          }
          return MW
        }(RW);
        return WW(...MW.map((RW => WW(...RW))))
      }
      return WW(...RW)
    }

    function HW(WW) {
      let RW = WW.nodes().map((RW => {
        let MW = WW.node(RW).rank;
        return void 0 === MW ? Number.MIN_VALUE : MW
      }));
      return LW(Math.max, RW)
    }

    function DW(WW, RW) {
      let MW = Date.now();
      try {
        return RW()
      } finally {
        console.log(WW + " time: " + (Date.now() - MW) + "ms")
      }
    }

    function qR(WW, RW) {
      return RW()
    }
    var ZW = 0;

    function SW(WW) {
      return WW + "" + ++ZW
    }

    function WR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == RW && (RW = WW, WW = 0);
      let wW = WW => WW < RW;
      MW < 0 && (wW = WW => RW < WW);
      let CW = [];
      for (let zR = WW; wW(zR); zR += MW) CW.push(zR);
      return CW
    }

    function RR(WW, RW) {
      let MW = {};
      for (let wW of RW) void 0 !== WW[wW] && (MW[wW] = WW[wW]);
      return MW
    }

    function MR(WW, RW) {
      let MW;
      return MW = "string" == typeof RW ? WW => WW[RW] : RW, Object.entries(WW).reduce(((WW, RW) => {
        let [wW, CW] = RW;
        return WW[wW] = MW(CW, wW), WW
      }), {})
    }
    var wR = "\0";

    function CR(WW, RW, MW) {
      var wW, CW, zR, AW, bR, yR;
      if (!(WW && RW && MW && "edge" === RW.dummy && "edge" === MW.dummy && RW.edgeObj && MW.edgeObj && WW[RW.edgeObj.v] && WW[MW.edgeObj.v] && WW[RW.edgeObj.w] && WW[MW.edgeObj.w])) return 0;
      let NW = !0;
      RW.edgeObj.w === MW.edgeObj.w && (NW = !1);
      let eW = NW ? null != (CW = null == (wW = WW[RW.edgeObj.v]) ? void 0 : wW.rank) ? CW : NaN : null != (AW = null == (zR = WW[RW.edgeObj.w]) ? void 0 : zR.rank) ? AW : NaN,
        BW = Object.entries(WW).find((WW => {
          var MW, wW;
          return (null == (MW = WW[1].edgeObj) ? void 0 : MW.v) === RW.edgeObj.v && (null == (wW = WW[1].edgeObj) ? void 0 : wW.w) === RW.edgeObj.w && WW[1].rank === eW
        })),
        tR = Object.entries(WW).find((WW => {
          var RW, wW;
          return (null == (RW = WW[1].edgeObj) ? void 0 : RW.v) === MW.edgeObj.v && (null == (wW = WW[1].edgeObj) ? void 0 : wW.w) === MW.edgeObj.w && WW[1].rank === eW
        }));
      if (!BW || !tR) return 0;
      let TW = null != (bR = BW[1].order) ? bR : NaN,
        gR = null != (yR = tR[1].order) ? yR : NaN;
      return isNaN(TW - gR) ? 0 : TW - gR
    }
    var zM = "3.1.1";

    function AR(WW) {
      WW._prev._next = WW._next, WW._next._prev = WW._prev, delete WW._next, delete WW._prev
    }

    function bM(WW, RW) {
      if ("_next" !== WW && "_prev" !== WW) return RW
    }
    var yM = class {
        constructor() {
          CW(this, "_sentinel");
          let WW = {};
          WW._next = WW._prev = WW, this._sentinel = WW
        }
        dequeue() {
          let WW = this._sentinel,
            RW = WW._prev;
          if (RW !== WW) return AR(RW), RW
        }
        enqueue(WW) {
          let RW = this._sentinel;
          WW._prev && WW._next && AR(WW), WW._next = RW._next, RW._next._prev = WW, RW._next = WW, WW._prev = RW
        }
        toString() {
          let WW = [],
            RW = this._sentinel,
            MW = RW._prev;
          for (; MW !== RW;) WW.push(JSON.stringify(MW, bM)), MW = MW._prev;
          return "[" + WW.join(", ") + "]"
        }
      },
      NR = () => 1;

    function eR(WW, RW) {
      if (WW.nodeCount() <= 1) return [];
      let MW = function(WW, RW) {
        let MW = new xR,
          wW = 0,
          CW = 0;
        WW.nodes().forEach((WW => {
          MW.setNode(WW, {
            v: WW,
            in: 0,
            out: 0
          })
        })), WW.edges().forEach((WW => {
          let zR = MW.edge(WW.v, WW.w) || 0,
            AW = RW(WW),
            bR = zR + AW;
          MW.setEdge(WW.v, WW.w, bR);
          let yR = MW.node(WW.v),
            NW = MW.node(WW.w);
          CW = Math.max(CW, yR.out += AW), wW = Math.max(wW, NW.in += AW)
        }));
        let zR = function(WW) {
            let RW = [];
            for (let MW = 0; MW < WW; MW++) RW.push(MW);
            return RW
          }(CW + wW + 3).map((() => new yM)),
          AW = wW + 1;
        return MW.nodes().forEach((WW => {
          tM(zR, AW, MW.node(WW))
        })), {
          graph: MW,
          buckets: zR,
          zeroIdx: AW
        }
      }(WW, RW || NR);
      return function(WW, RW, MW) {
        var wW;
        let CW, zR = [],
          AW = RW[RW.length - 1],
          bR = RW[0];
        for (; WW.nodeCount();) {
          for (; CW = bR.dequeue();) BR(WW, RW, MW, CW);
          for (; CW = AW.dequeue();) BR(WW, RW, MW, CW);
          if (WW.nodeCount())
            for (let AW = RW.length - 2; AW > 0; --AW)
              if (CW = null == (wW = RW[AW]) ? void 0 : wW.dequeue(), CW) {
                zR = zR.concat(BR(WW, RW, MW, CW, !0) || []);
                break
              }
        }
        return zR
      }(MW.graph, MW.buckets, MW.zeroIdx).flatMap((RW => WW.outEdges(RW.v, RW.w) || []))
    }

    function BR(WW, RW, MW, wW, CW) {
      let zR = [],
        AW = CW ? zR : void 0;
      return (WW.inEdges(wW.v) || []).forEach((wW => {
        let AW = WW.edge(wW),
          bR = WW.node(wW.v);
        CW && zR.push({
          v: wW.v,
          w: wW.w
        }), bR.out -= AW, tM(RW, MW, bR)
      })), (WW.outEdges(wW.v) || []).forEach((wW => {
        let CW = WW.edge(wW),
          zR = wW.w,
          AW = WW.node(zR);
        AW.in -= CW, tM(RW, MW, AW)
      })), WW.removeNode(wW.v), AW
    }

    function tM(WW, RW, MW) {
      var wW, CW, zR;
      MW.out ? MW.in ? null == (zR = WW[MW.out - MW.in + RW]) || zR.enqueue(MW) : null == (CW = WW[WW.length - 1]) || CW.enqueue(MW) : null == (wW = WW[0]) || wW.enqueue(MW)
    }

    function TR(WW, RW) {
      var MW;
      ("greedy" === WW.graph().acyclicer ? eR(WW, (MW = WW, WW => MW.edge(WW).weight)) : function(WW, RW) {
        let MW = [],
          wW = {},
          CW = {};

        function zR(RW) {
          Object.hasOwn(CW, RW) || (CW[RW] = !0, wW[RW] = !0, WW.outEdges(RW).forEach((WW => {
            Object.hasOwn(wW, WW.w) ? MW.push(WW) : zR(WW.w)
          })), delete wW[RW])
        }

        function AW(zR) {
          var bR;
          Object.hasOwn(CW, zR) || (CW[zR] = !0, wW[zR] = !0, null == (bR = WW.outEdges(zR)) || bR.forEach((CW => {
            var bR, yR;
            Object.hasOwn(wW, CW.w) || (null == (bR = RW.node(zR)) ? void 0 : bR.rank) > (null == (yR = RW.node(CW.w)) ? void 0 : yR.rank) && function(WW, RW, MW) {
              let wW = new Set;

              function CW(RW) {
                var zR;
                if (WW.sources().includes(RW)) return !0;
                wW.add(RW);
                for (let AW of null != (zR = WW.inEdges(RW)) ? zR : [])
                  if ((AW.v !== MW.v || AW.w !== MW.w) && !wW.has(AW.v) && CW(AW.v)) return !0;
                return !1
              }
              return CW(RW)
            }(WW, CW.w, CW) ? MW.push(CW) : AW(CW.w)
          })), delete wW[zR])
        }
        let bR = zR;
        return RW && "function" == typeof RW.node && (bR = AW), WW.sources().forEach(bR), WW.nodes().forEach(bR), MW
      }(WW, null != RW ? RW : null)).forEach((RW => {
        let MW = WW.edge(RW);
        WW.removeEdge(RW), MW.forwardName = RW.name, MW.reversed = !0, WW.setEdge(RW.w, RW.v, MW, SW("rev"))
      }))
    }

    function gM(WW) {
      WW.graph().dummyChains = [], WW.edges().forEach((RW => function(WW, RW) {
        let MW, wW, CW, zR = RW.v,
          AW = WW.node(zR).rank,
          bR = RW.w,
          yR = WW.node(bR).rank,
          NW = RW.name,
          eW = WW.edge(RW),
          BW = eW.labelRank;
        if (yR === AW + 1) return;
        for (WW.removeEdge(RW), CW = 0, ++AW; AW < yR; ++CW, ++AW) eW.points = [], wW = {
          width: 0,
          height: 0,
          edgeLabel: eW,
          edgeObj: RW,
          rank: AW
        }, MW = vR(WW, "edge", wW, "_d"), AW === BW && (wW.width = eW.width, wW.height = eW.height, wW.dummy = "edge-label", wW.labelpos = eW.labelpos), WW.setEdge(zR, MW, {
          weight: eW.weight
        }, NW), 0 === CW && WW.graph().dummyChains.push(MW), zR = MW;
        WW.setEdge(zR, bR, {
          weight: eW.weight
        }, NW)
      }(WW, RW)))
    }

    function iM(WW) {
      let RW = {};
      WW.sources().forEach((function MW(wW) {
        let CW = WW.node(wW);
        if (Object.hasOwn(RW, wW)) return CW.rank;
        RW[wW] = !0;
        let zR = WW.outEdges(wW),
          AW = zR ? zR.map((RW => null == RW ? Number.POSITIVE_INFINITY : MW(RW.w) - WW.edge(RW).minlen)) : [],
          bR = LW(Math.min, AW);
        return bR === Number.POSITIVE_INFINITY && (bR = 0), CW.rank = bR
      }))
    }

    function YR(WW, RW) {
      return WW.node(RW.w).rank - WW.node(RW.v).rank - WW.edge(RW).minlen
    }
    var JR = function(WW) {
      let RW = new xR({
          directed: !1
        }),
        MW = WW.nodes();
      if (0 === MW.length) throw new Error("Graph must have at least one node");
      let wW, CW, zR = MW[0],
        AW = WW.nodeCount();
      for (RW.setNode(zR, {}); PR(RW, WW) < AW && (wW = IR(RW, WW), wW);) CW = RW.hasNode(wW.v) ? YR(WW, wW) : -YR(WW, wW), oR(RW, WW, CW);
      return RW
    };

    function PR(WW, RW) {
      return WW.nodes().forEach((function MW(wW) {
        let CW = RW.nodeEdges(wW);
        CW && CW.forEach((CW => {
          let zR = CW.v,
            AW = wW === zR ? CW.w : zR;
          !WW.hasNode(AW) && !YR(RW, CW) && (WW.setNode(AW, {}), WW.setEdge(wW, AW, {}), MW(AW))
        }))
      })), WW.nodeCount()
    }

    function IR(WW, RW) {
      return RW.edges().reduce(((MW, wW) => {
        let CW = Number.POSITIVE_INFINITY;
        return WW.hasNode(wW.v) !== WW.hasNode(wW.w) && (CW = YR(RW, wW)), CW < MW[0] ? [CW, wW] : MW
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function oR(WW, RW, MW) {
      WW.nodes().forEach((WW => RW.node(WW).rank += MW))
    }
    var {
      preorder: lR,
      postorder: FR
    } = JW, fR = QR;

    function QR(WW) {
      WW = function(WW) {
        let RW = (new xR).setGraph(WW.graph());
        return WW.nodes().forEach((MW => RW.setNode(MW, WW.node(MW)))), WW.edges().forEach((MW => {
          let wW = RW.edge(MW.v, MW.w) || {
              weight: 0,
              minlen: 1
            },
            CW = WW.edge(MW);
          RW.setEdge(MW.v, MW.w, {
            weight: wW.weight + CW.weight,
            minlen: Math.max(wW.minlen, CW.minlen)
          })
        })), RW
      }(WW), iM(WW);
      let RW, MW, wW = JR(WW);
      for (XR(wW), rM(wW, WW); RW = kM(wW);) MW = aM(wW, WW, RW), sR(wW, WW, RW, MW)
    }

    function rM(WW, RW) {
      let MW = FR(WW, WW.nodes());
      MW = MW.slice(0, MW.length - 1), MW.forEach((MW => function(WW, RW, MW) {
        let wW = WW.node(MW).parent,
          CW = WW.edge(MW, wW);
        CW.cutvalue = cM(WW, RW, MW)
      }(WW, RW, MW)))
    }

    function cM(WW, RW, MW) {
      let wW = WW.node(MW).parent,
        CW = !0,
        zR = RW.edge(MW, wW),
        AW = 0;
      zR || (CW = !1, zR = RW.edge(wW, MW)), AW = zR.weight;
      let bR = RW.nodeEdges(MW);
      return bR && bR.forEach((zR => {
        let bR = zR.v === MW,
          yR = bR ? zR.w : zR.v;
        if (yR !== wW) {
          let wW = bR === CW,
            NW = RW.edge(zR).weight;
          if (AW += wW ? NW : -NW, function(WW, RW, MW) {
              return WW.hasEdge(RW, MW)
            }(WW, MW, yR)) {
            let RW = WW.edge(MW, yR).cutvalue;
            AW += wW ? -RW : RW
          }
        }
      })), AW
    }

    function XR(WW, RW) {
      arguments.length < 2 && (RW = WW.nodes()[0]), jM(WW, {}, 1, RW)
    }

    function jM(WW, RW, MW, wW, CW) {
      let zR = MW,
        AW = WW.node(wW);
      RW[wW] = !0;
      let bR = WW.neighbors(wW);
      return bR && bR.forEach((CW => {
        Object.hasOwn(RW, CW) || (MW = jM(WW, RW, MW, CW, wW))
      })), AW.low = zR, AW.lim = MW++, CW ? AW.parent = CW : delete AW.parent, MW
    }

    function kM(WW) {
      return WW.edges().find((RW => WW.edge(RW).cutvalue < 0))
    }

    function aM(WW, RW, MW) {
      let wW = MW.v,
        CW = MW.w;
      RW.hasEdge(wW, CW) || (wW = MW.w, CW = MW.v);
      let zR = WW.node(wW),
        AW = WW.node(CW),
        bR = zR,
        yR = !1;
      return zR.lim > AW.lim && (bR = AW, yR = !0), RW.edges().filter((RW => yR === dR(WW, WW.node(RW.v), bR) && yR !== dR(WW, WW.node(RW.w), bR))).reduce(((WW, MW) => YR(RW, MW) < YR(RW, WW) ? MW : WW))
    }

    function sR(WW, RW, MW, wW) {
      let CW = MW.v,
        zR = MW.w;
      WW.removeEdge(CW, zR), WW.setEdge(wW.v, wW.w, {}), XR(WW), rM(WW, RW),
        function(WW, RW) {
          let MW = WW.nodes().find((RW => !WW.node(RW).parent));
          if (!MW) return;
          let wW = lR(WW, [MW]);
          wW = wW.slice(1), wW.forEach((MW => {
            let wW = WW.node(MW).parent,
              CW = RW.edge(MW, wW),
              zR = !1;
            CW || (CW = RW.edge(wW, MW), zR = !0), RW.node(MW).rank = RW.node(wW).rank + (zR ? CW.minlen : -CW.minlen)
          }))
        }(WW, RW)
    }

    function dR(WW, RW, MW) {
      return MW.low <= RW.lim && RW.lim <= MW.lim
    }
    QR.initLowLimValues = XR, QR.initCutValues = rM, QR.calcCutValue = cM, QR.leaveEdge = kM, QR.enterEdge = aM, QR.exchangeEdges = sR;
    var pR = function(WW) {
      let RW = WW.graph().ranker;
      if ("function" == typeof RW) return RW(WW);
      switch (RW) {
        case "network-simplex":
        default:
          UR(WW);
          break;
        case "tight-tree":
          ! function(WW) {
            iM(WW), JR(WW)
          }(WW);
          break;
        case "longest-path":
          hR(WW);
        case "none":
      }
    };
    var hR = iM;

    function UR(WW) {
      fR(WW)
    }
    var ER = function(WW) {
      let RW = function(WW) {
          let RW = {},
            MW = 0;

          function wW(CW) {
            let zR = MW;
            WW.children(CW).forEach(wW), RW[CW] = {
              low: zR,
              lim: MW++
            }
          }
          return WW.children(wR).forEach(wW), RW
        }(WW),
        MW = WW.graph();
      if (!Array.isArray(MW.dummyChains)) return;
      MW.dummyChains.forEach((MW => {
        let wW = WW.node(MW),
          CW = wW.edgeObj,
          zR = function(WW, RW, MW, wW) {
            let CW, zR = [],
              AW = [],
              bR = Math.min(RW[MW].low, RW[wW].low),
              yR = Math.max(RW[MW].lim, RW[wW].lim);
            CW = MW;
            do {
              CW = WW.parent(CW), zR.push(CW)
            } while (CW && (RW[CW].low > bR || yR > RW[CW].lim));
            let NW = CW,
              eW = wW;
            for (;
              (eW = WW.parent(eW)) !== NW;) AW.push(eW);
            return {
              path: zR.concat(AW.reverse()),
              lca: NW
            }
          }(WW, RW, CW.v, CW.w),
          AW = zR.path,
          bR = zR.lca,
          yR = 0,
          NW = AW[yR],
          eW = !0;
        for (; MW !== CW.w;) {
          if (wW = WW.node(MW), eW) {
            for (;
              (NW = AW[yR]) !== bR && WW.node(NW).maxRank < wW.rank;) yR++;
            NW === bR && (eW = !1)
          }
          if (!eW) {
            for (; yR < AW.length - 1 && WW.node(AW[yR + 1]).minRank <= wW.rank;) yR++;
            NW = AW[yR]
          }
          void 0 !== NW && WW.setParent(MW, NW), MW = WW.successors(MW)[0]
        }
      }))
    };

    function VR(WW) {
      let RW = vR(WW, "root", {}, "_root"),
        MW = function(WW) {
          let RW = {};

          function MW(wW, CW) {
            let zR = WW.children(wW);
            zR && zR.length && zR.forEach((WW => MW(WW, CW + 1))), RW[wW] = CW
          }
          return WW.children(wR).forEach((WW => MW(WW, 1))), RW
        }(WW),
        wW = Object.values(MW),
        CW = LW(Math.max, wW) - 1,
        zR = 2 * CW + 1;
      WW.graph().nestingRoot = RW, WW.edges().forEach((RW => WW.edge(RW).minlen *= zR));
      let AW = function(WW) {
        return WW.edges().reduce(((RW, MW) => RW + WW.edge(MW).weight), 0)
      }(WW) + 1;
      WW.children(wR).forEach((wW => {
        mM(WW, RW, zR, AW, CW, MW, wW)
      })), WW.graph().nodeRankFactor = zR
    }

    function mM(WW, RW, MW, wW, CW, zR, AW) {
      var bR;
      let yR = WW.children(AW);
      if (!yR.length) return void(AW !== RW && WW.setEdge(RW, AW, {
        weight: 0,
        minlen: MW
      }));
      let NW = nW(WW, "_bt"),
        eW = nW(WW, "_bb"),
        BW = WW.node(AW);
      WW.setParent(NW, AW), BW.borderTop = NW, WW.setParent(eW, AW), BW.borderBottom = eW, yR.forEach((bR => {
        var yR;
        mM(WW, RW, MW, wW, CW, zR, bR);
        let BW = WW.node(bR),
          tR = BW.borderTop ? BW.borderTop : bR,
          TW = BW.borderBottom ? BW.borderBottom : bR,
          gR = BW.borderTop ? wW : 2 * wW,
          iR = tR !== TW ? 1 : CW - (null != (yR = zR[AW]) ? yR : 0) + 1;
        WW.setEdge(NW, tR, {
          weight: gR,
          minlen: iR,
          nestingEdge: !0
        }), WW.setEdge(TW, eW, {
          weight: gR,
          minlen: iR,
          nestingEdge: !0
        })
      })), WW.parent(AW) || WW.setEdge(RW, NW, {
        weight: 0,
        minlen: CW + (null != (bR = zR[AW]) ? bR : 0)
      })
    }
    var xM = function(WW) {
      WW.children(wR).forEach((function RW(MW) {
        let wW = WW.children(MW),
          CW = WW.node(MW);
        if (wW.length && wW.forEach(RW), CW && Object.hasOwn(CW, "minRank")) {
          CW.borderLeft = [], CW.borderRight = [];
          for (let RW = CW.minRank, wW = CW.maxRank + 1; RW < wW; ++RW) vM(WW, "borderLeft", "_bl", MW, CW, RW), vM(WW, "borderRight", "_br", MW, CW, RW)
        }
      }))
    };

    function vM(WW, RW, MW, wW, CW, zR) {
      let AW = {
          width: 0,
          height: 0,
          rank: zR,
          borderType: RW
        },
        bR = CW[RW][zR - 1],
        yR = vR(WW, "border", AW, MW);
      CW[RW][zR] = yR, WW.setParent(yR, wW), bR && WW.setEdge(bR, yR, {
        weight: 1
      })
    }

    function KR(WW) {
      var RW;
      let MW = null == (RW = WW.graph().rankdir) ? void 0 : RW.toLowerCase();
      ("bt" === MW || "rl" === MW) && function(WW) {
        WW.nodes().forEach((RW => nR(WW.node(RW)))), WW.edges().forEach((RW => {
          var MW;
          let wW = WW.edge(RW);
          null == (MW = wW.points) || MW.forEach(nR), Object.hasOwn(wW, "y") && nR(wW)
        }))
      }(WW), ("lr" === MW || "rl" === MW) && (function(WW) {
        WW.nodes().forEach((RW => GR(WW.node(RW)))), WW.edges().forEach((RW => {
          var MW;
          let wW = WW.edge(RW);
          null == (MW = wW.points) || MW.forEach(GR), Object.hasOwn(wW, "x") && GR(wW)
        }))
      }(WW), uR(WW))
    }

    function uR(WW) {
      WW.nodes().forEach((RW => OR(WW.node(RW)))), WW.edges().forEach((RW => OR(WW.edge(RW))))
    }

    function OR(WW) {
      let RW = WW.width;
      WW.width = WW.height, WW.height = RW
    }

    function nR(WW) {
      WW.y = -WW.y
    }

    function GR(WW) {
      let RW = WW.x;
      WW.x = WW.y, WW.y = RW
    }

    function LR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        MW = {},
        wW = WW.nodes().filter((RW => !WW.children(RW).length)),
        CW = wW.map((RW => WW.node(RW).rank)),
        zR = WR(LW(Math.max, CW) + 1).map((() => []));
      return wW.sort(((RW, MW) => WW.node(RW).rank - WW.node(MW).rank)).forEach((function wW(CW) {
        if (MW[CW]) return;
        MW[CW] = !0;
        let AW = WW.node(CW);
        zR[AW.rank].push(CW);
        let bR = WW.successors(CW);
        bR && [...bR].sort(((MW, wW) => function(MW, wW) {
          let CW = WW.node(MW),
            zR = WW.node(wW);
          return CR(RW, CW, zR)
        }(MW, wW))).forEach(wW)
      })), zR
    }

    function HR(WW, RW) {
      let MW = 0;
      for (let wW = 1; wW < RW.length; ++wW) MW += DR(WW, RW[wW - 1], RW[wW]);
      return MW
    }

    function DR(WW, RW, MW) {
      let wW = function(WW, RW) {
          return WW.reduce(((WW, MW, wW) => (WW[MW] = RW[wW], WW)), {})
        }(MW, MW.map(((WW, RW) => RW))),
        CW = RW.flatMap((RW => {
          let MW = WW.outEdges(RW);
          return MW ? MW.map((RW => ({
            pos: wW[RW.w],
            weight: WW.edge(RW).weight
          }))).sort(((WW, RW) => WW.pos - RW.pos)) : []
        })),
        zR = 1;
      for (; zR < MW.length;) zR <<= 1;
      let AW = 2 * zR - 1;
      zR -= 1;
      let bR = new Array(AW).fill(0),
        yR = 0;
      return CW.forEach((WW => {
        let RW = WW.pos + zR;
        bR[RW] += WW.weight;
        let MW = 0;
        for (; RW > 0;) RW % 2 && (MW += bR[RW + 1]), RW = RW - 1 >> 1, bR[RW] += WW.weight;
        yR += WW.weight * MW
      })), yR
    }

    function qM(WW, RW) {
      let MW = {};
      return WW.forEach(((WW, RW) => {
          let wW = {
            indegree: 0,
            in: [],
            out: [],
            vs: [WW.v],
            i: RW
          };
          void 0 !== WW.barycenter && (wW.barycenter = WW.barycenter, wW.weight = WW.weight), MW[WW.v] = wW
        })), RW.edges().forEach((WW => {
          let RW = MW[WW.v],
            wW = MW[WW.w];
          void 0 !== RW && void 0 !== wW && (wW.indegree++, RW.out.push(wW))
        })),
        function(WW) {
          let RW = [];

          function MW(WW) {
            return RW => {
              RW.merged || (void 0 === RW.barycenter || void 0 === WW.barycenter || RW.barycenter >= WW.barycenter) && function(WW, RW) {
                let MW = 0,
                  wW = 0;
                WW.weight && (MW += WW.barycenter * WW.weight, wW += WW.weight), RW.weight && (MW += RW.barycenter * RW.weight, wW += RW.weight), WW.vs = RW.vs.concat(WW.vs), WW.barycenter = MW / wW, WW.weight = wW, WW.i = Math.min(RW.i, WW.i), RW.merged = !0
              }(WW, RW)
            }
          }

          function wW(RW) {
            return MW => {
              MW.in.push(RW), 0 === --MW.indegree && WW.push(MW)
            }
          }
          for (; WW.length;) {
            let CW = WW.pop();
            RW.push(CW), CW.in.reverse().forEach(MW(CW)), CW.out.forEach(wW(CW))
          }
          return RW.filter((WW => !WW.merged)).map((WW => RR(WW, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(MW).filter((WW => !WW.indegree)))
    }

    function ZR(WW, RW, MW, wW, CW) {
      let zR = {},
        AW = null,
        bR = null,
        yR = CW;
      "boolean" == typeof RW ? (yR = RW, zR = {}) : RW && (zR = RW, AW = null != MW ? MW : null, bR = null != wW ? wW : null);
      let NW = function(WW, RW) {
          let MW = {
            lhs: [],
            rhs: []
          };
          return WW.forEach((WW => {
            RW(WW) ? MW.lhs.push(WW) : MW.rhs.push(WW)
          })), MW
        }(WW, (WW => Object.hasOwn(WW, "barycenter"))),
        eW = NW.lhs,
        BW = NW.rhs.sort(((WW, RW) => RW.i - WW.i)),
        tR = [],
        TW = 0,
        gR = 0,
        iR = 0;
      eW.sort(function(WW, RW, MW) {
        return (wW, CW) => {
          if (wW.barycenter < CW.barycenter) return -1;
          if (wW.barycenter > CW.barycenter) return 1;
          if (WW && ("string" == typeof wW.vs[0] || "string" == typeof CW.vs[0])) {
            let MW = WW.node(wW.vs[0]),
              zR = WW.node(CW.vs[0]),
              AW = CR(RW, MW, zR);
            if (0 !== AW) return AW
          }
          return MW ? CW.i - wW.i : wW.i - CW.i
        }
      }(bR, AW, !!yR));
      for (let [JW, PW] of Object.entries(zR)) {
        let WW = eW.findIndex((WW => WW.vs[0] === JW));
        eW.splice(WW + 1, 0, PW)
      }
      iR = SR(tR, BW, iR), eW.forEach((WW => {
        iR += WW.vs.length, tR.push(WW.vs), TW += WW.barycenter * WW.weight, gR += WW.weight, iR = SR(tR, BW, iR)
      }));
      let YW = {
        vs: tR.flat(1)
      };
      return gR && (YW.barycenter = TW / gR, YW.weight = gR), YW
    }

    function SR(WW, RW, MW) {
      let wW;
      for (; RW.length && (wW = RW[RW.length - 1]).i <= MW;) RW.pop(), WW.push(wW.vs), MW++;
      return MW
    }

    function WM(WW, RW, MW, wW, CW) {
      var zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR;
      let YW = null,
        JW = CW;
      "boolean" == typeof wW ? (JW = wW, YW = null) : void 0 !== wW && (YW = wW);
      let PW = WW.children(RW),
        IW = WW.node(RW),
        oW = IW ? IW.borderLeft : void 0,
        lW = IW ? IW.borderRight : void 0,
        FW = {};
      oW && (PW = PW.filter((WW => WW !== oW && WW !== lW)));
      let fW = function(WW) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((RW => {
          let MW = WW.inEdges(RW);
          if (!MW || !MW.length) return {
            v: RW
          };
          {
            let wW = MW.reduce(((RW, MW) => {
              let wW = WW.edge(MW),
                CW = WW.node(MW.v);
              return {
                sum: RW.sum + wW.weight * CW.order,
                weight: RW.weight + wW.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: RW,
              barycenter: wW.sum / wW.weight,
              weight: wW.weight
            }
          }
        }))
      }(WW, PW);
      fW.forEach((RW => {
        if (WW.children(RW.v).length) {
          let {
            result: wW
          } = WM(WW, RW.v, MW, YW, JW);
          FW[RW.v] = wW, Object.hasOwn(wW, "barycenter") && function(WW, RW) {
            void 0 !== WW.barycenter ? (WW.barycenter = (WW.barycenter * WW.weight + RW.barycenter * RW.weight) / (WW.weight + RW.weight), WW.weight += RW.weight) : (WW.barycenter = RW.barycenter, WW.weight = RW.weight)
          }(RW, wW)
        }
      }));
      let QW = qM(fW, MW);
      ! function(WW, RW) {
        WW.forEach((WW => {
          WW.vs = WW.vs.flatMap((WW => RW[WW] ? RW[WW].vs : WW))
        }))
      }(QW, FW);
      let rR = {},
        cR = !1;
      for (let jR = 0; jR < QW.length; jR++)
        for (let RW = jR + 1; RW < QW.length; RW++)
          if (QW[jR] && QW[RW] && null != (zR = QW[jR]) && zR.barycenter && null != (AW = QW[RW]) && AW.barycenter && (null == (bR = QW[jR]) ? void 0 : bR.barycenter) === QW[RW].barycenter) {
            let MW = null != (NW = null == (yR = QW[jR]) ? void 0 : yR.vs[0]) ? NW : "",
              wW = null != (BW = null == (eW = QW[RW]) ? void 0 : eW.vs[0]) ? BW : "",
              CW = WW.node(MW),
              zR = WW.node(wW);
            if ("edge" === CW.dummy && "edge" === zR.dummy && (null == (tR = CW.edgeObj) ? void 0 : tR.v) === (null == (TW = zR.edgeObj) ? void 0 : TW.v) && (null == (gR = CW.edgeObj) ? void 0 : gR.w) === (null == (iR = zR.edgeObj) ? void 0 : iR.w)) {
              if (CW.edgeLabel.reversed) {
                rR[wW] = QW[jR], QW.splice(jR, 1), jR--;
                break
              }
              rR[MW] = QW[RW], QW.splice(RW, 1), RW--
            } else cR = !0
          } let XW = ZR(QW, rR, YW, WW, JW);
      if (oW && lW) {
        XW.vs = [oW, XW.vs, lW].flat(1);
        let RW = WW.predecessors(oW);
        if (RW && RW.length) {
          let MW = WW.node(RW[0]),
            wW = WW.predecessors(lW),
            CW = WW.node(wW[0]);
          Object.hasOwn(XW, "barycenter") || (XW.barycenter = 0, XW.weight = 0), XW.barycenter = (XW.barycenter * XW.weight + MW.order + CW.order) / (XW.weight + 2), XW.weight += 2
        }
      }
      return Object.defineProperty(XW, "result", {
        value: XW,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(XW, "usedBias", {
        value: cR,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), XW
    }

    function RM(WW, RW, MW, wW) {
      wW || (wW = WW.nodes());
      let CW = function(WW) {
          let RW;
          for (; WW.hasNode(RW = SW("_root")););
          return RW
        }(WW),
        zR = new xR({
          compound: !0
        }).setGraph({
          root: CW
        }).setDefaultNodeLabel((RW => WW.node(RW)));
      return wW.forEach((wW => {
        let AW = WW.node(wW),
          bR = WW.parent(wW);
        if (AW.rank === RW || AW.minRank <= RW && RW <= AW.maxRank) {
          zR.setNode(wW), zR.setParent(wW, bR || CW);
          let yR = WW[MW](wW);
          yR && yR.forEach((RW => {
            let MW = RW.v === wW ? RW.w : RW.v,
              CW = zR.edge(MW, wW),
              AW = void 0 !== CW ? CW.weight : 0;
            zR.setEdge(MW, wW, {
              weight: WW.edge(RW).weight + AW
            })
          })), Object.hasOwn(AW, "minRank") && zR.setNode(wW, {
            borderLeft: AW.borderLeft[RW],
            borderRight: AW.borderRight[RW]
          })
        }
      })), zR
    }

    function MM(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof RW.customOrder) return void RW.customOrder(WW, MM);
      let wW = HW(WW),
        CW = wM(WW, WR(1, wW + 1), "inEdges"),
        zR = wM(WW, WR(wW - 1, -1, -1), "outEdges"),
        AW = LR(WW, MW);
      if (zw(WW, AW), RW.disableOptimalOrderHeuristic) return;
      let bR, yR = Number.POSITIVE_INFINITY,
        NW = RW.constraints || [];
      for (let eW = 0, BW = 0; BW < 4; ++eW, ++BW) {
        CM(eW % 2 ? CW : zR, eW % 4 >= 2, NW, MW), AW = OW(WW);
        let RW = HR(WW, AW);
        RW < yR ? (BW = 0, bR = Object.assign({}, AW), yR = RW) : RW === yR && (bR = structuredClone(AW))
      }
      zw(WW, bR)
    }

    function wM(WW, RW, MW) {
      let wW = new Map,
        CW = (WW, RW) => {
          wW.has(WW) || wW.set(WW, []), wW.get(WW).push(RW)
        };
      for (let zR of WW.nodes()) {
        let RW = WW.node(zR);
        if ("number" == typeof RW.rank && CW(RW.rank, zR), "number" == typeof RW.minRank && "number" == typeof RW.maxRank)
          for (let WW = RW.minRank; WW <= RW.maxRank; WW++) WW !== RW.rank && CW(WW, zR)
      }
      return RW.map((function(RW) {
        return RM(WW, RW, MW, wW.get(RW) || [])
      }))
    }

    function CM(WW, RW, MW, wW) {
      let CW = !0,
        zR = new xR;
      WW.forEach((function(WW) {
        MW.forEach((WW => zR.setEdge(WW.left, WW.right)));
        let AW = WW.graph().root,
          {
            result: bR,
            usedBias: yR
          } = WM(WW, AW, zR, wW, CW);
        RW && yR && (CW = !CW), bR.vs.forEach(((RW, MW) => WW.node(RW).order = MW)),
          function(WW, RW, MW) {
            let wW, CW = {};
            MW.forEach((MW => {
              let zR, AW, bR = WW.parent(MW);
              for (; bR;) {
                if (zR = WW.parent(bR), zR ? (AW = CW[zR], CW[zR] = bR) : (AW = wW, wW = bR), AW && AW !== bR) return void RW.setEdge(AW, bR);
                bR = zR
              }
            }))
          }(WW, zR, bR.vs)
      }))
    }

    function zw(WW, RW) {
      Object.values(RW).forEach((RW => RW.forEach(((RW, MW) => WW.node(RW).order = MW))))
    }

    function AM(WW, RW, MW) {
      if (RW > MW) {
        let WW = RW;
        RW = MW, MW = WW
      }
      let wW = WW[RW];
      wW || (WW[RW] = wW = {}), wW[MW] = !0
    }

    function bw(WW, RW, MW) {
      if (RW > MW) {
        let WW = RW;
        RW = MW, MW = WW
      }
      let wW = WW[RW];
      return void 0 !== wW && Object.hasOwn(wW, MW)
    }

    function yw(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        zR = {},
        AW = function(WW, RW, MW, wW) {
          let CW = new xR,
            zR = WW.graph(),
            AW = function(WW, RW, MW) {
              return (wW, CW, zR) => {
                let AW, bR = wW.node(CW),
                  yR = wW.node(zR),
                  NW = 0;
                if (NW += bR.width / 2, Object.hasOwn(bR, "labelpos")) switch (bR.labelpos.toLowerCase()) {
                  case "l":
                    AW = -bR.width / 2;
                    break;
                  case "r":
                    AW = bR.width / 2
                }
                if (AW && (NW += MW ? AW : -AW), AW = void 0, NW += (bR.dummy ? RW : WW) / 2, NW += (yR.dummy ? RW : WW) / 2, NW += yR.width / 2, Object.hasOwn(yR, "labelpos")) switch (yR.labelpos.toLowerCase()) {
                  case "l":
                    AW = yR.width / 2;
                    break;
                  case "r":
                    AW = -yR.width / 2
                }
                return AW && (NW += MW ? AW : -AW), NW
              }
            }(zR.nodesep, zR.edgesep, wW);
          return RW.forEach((RW => {
            let wW;
            RW.forEach((RW => {
              let zR = MW[RW];
              if (void 0 !== zR) {
                if (CW.setNode(zR), void 0 !== wW) {
                  let bR = MW[wW];
                  if (void 0 !== bR) {
                    let MW = CW.edge(bR, zR);
                    CW.setEdge(bR, zR, Math.max(AW(WW, RW, wW), MW || 0))
                  }
                }
                wW = RW
              }
            }))
          })), CW
        }(WW, RW, MW, CW),
        bR = CW ? "borderLeft" : "borderRight";

      function yR(WW, RW) {
        let MW = AW.nodes().slice(),
          wW = {},
          CW = MW.pop();
        for (; CW;) {
          if (wW[CW]) WW(CW);
          else {
            wW[CW] = !0, MW.push(CW);
            for (let WW of RW(CW)) MW.push(WW)
          }
          CW = MW.pop()
        }
      }
      return yR((function(WW) {
        let RW = AW.inEdges(WW);
        zR[WW] = RW ? RW.reduce(((WW, RW) => {
          var MW;
          let wW = null != (MW = zR[RW.v]) ? MW : 0,
            CW = AW.edge(RW);
          return Math.max(WW, wW + (void 0 !== CW ? CW : 0))
        }), 0) : 0
      }), (function(WW) {
        return AW.predecessors(WW) || []
      })), yR((function(RW) {
        let MW = AW.outEdges(RW),
          wW = Number.POSITIVE_INFINITY;
        MW && (wW = MW.reduce(((WW, RW) => {
          let MW = zR[RW.w],
            wW = AW.edge(RW);
          return Math.min(WW, (void 0 !== MW ? MW : 0) - (void 0 !== wW ? wW : 0))
        }), Number.POSITIVE_INFINITY));
        let CW = WW.node(RW);
        wW !== Number.POSITIVE_INFINITY && CW.borderType !== bR && (zR[RW] = Math.max(void 0 !== zR[RW] ? zR[RW] : 0, wW))
      }), (function(WW) {
        return AW.successors(WW) || []
      })), Object.keys(wW).forEach((WW => {
        var RW;
        let wW = MW[WW];
        void 0 !== wW && (zR[WW] = null != (RW = zR[wW]) ? RW : 0)
      })), zR
    }

    function NM(WW, RW) {
      let MW, wW = OW(WW),
        CW = Object.assign(function(WW, RW) {
          let MW = {};
          return RW.length && RW.reduce((function(RW, wW) {
            let CW = 0,
              zR = 0,
              AW = RW.length,
              bR = wW[wW.length - 1];
            return wW.forEach(((RW, yR) => {
              let NW = function(WW, RW) {
                  if (WW.node(RW).dummy) {
                    let MW = WW.predecessors(RW);
                    if (MW) return MW.find((RW => WW.node(RW).dummy))
                  }
                }(WW, RW),
                eW = NW ? WW.node(NW).order : AW;
              (NW || RW === bR) && (wW.slice(zR, yR + 1).forEach((RW => {
                let wW = WW.predecessors(RW);
                wW && wW.forEach((wW => {
                  let zR = WW.node(wW),
                    AW = zR.order;
                  (AW < CW || eW < AW) && (!zR.dummy || !WW.node(RW).dummy) && AM(MW, wW, RW)
                }))
              })), zR = yR + 1, CW = eW)
            })), wW
          })), MW
        }(WW, wW), function(WW, RW) {
          let MW = {};

          function wW(RW, wW, CW, zR, AW) {
            WR(wW, CW).forEach((wW => {
              let CW = RW[wW];
              if (void 0 !== CW && WW.node(CW).dummy) {
                let RW = WW.predecessors(CW);
                RW && RW.forEach((RW => {
                  if (void 0 === RW) return;
                  let wW = WW.node(RW);
                  wW.dummy && (wW.order < zR || wW.order > AW) && AM(MW, RW, CW)
                }))
              }
            }))
          }
          return RW.length && RW.reduce((function(RW, MW) {
            let CW = -1,
              zR = -1,
              AW = 0;
            return MW.forEach(((bR, yR) => {
              if ("border" === WW.node(bR).dummy) {
                let RW = WW.predecessors(bR);
                if (RW && RW.length) {
                  let bR = RW[0];
                  if (void 0 === bR) return;
                  zR = WW.node(bR).order, wW(MW, AW, yR, CW, zR), AW = yR, CW = zR
                }
              }
              wW(MW, AW, MW.length, zR, RW.length)
            })), MW
          })), MW
        }(WW, wW)),
        zR = {};
      ["u", "d"].forEach((AW => {
        MW = "u" === AW ? wW : Object.values(wW).reverse(), ["l", "r"].forEach((wW => {
          "r" === wW && (MW = MW.map((WW => Object.values(WW).reverse())));
          let bR = function(WW, RW, MW, wW, CW) {
              let zR = {},
                AW = {},
                bR = {};
              return RW.forEach((WW => {
                WW.forEach(((WW, RW) => {
                  zR[WW] = WW, AW[WW] = WW, bR[WW] = RW
                }))
              })), RW.forEach((RW => {
                let yR = -1,
                  NW = -1,
                  eW = !1,
                  BW = RW,
                  tR = RW.findIndex((RW => (null == CW ? void 0 : CW.includes(RW)) || eM(RW, WW, CW)));
                tR > 0 && (BW = [RW[tR], ...RW.slice(0, tR), ...RW.slice(tR + 1)], eW = !0), BW.forEach((RW => {
                  var BW;
                  let tR = wW(RW);
                  if (tR && tR.length) {
                    null != CW && CW.includes(RW) && (tR = tR.filter((RW => eM(RW, WW, CW))));
                    let wW = tR.sort(((WW, RW) => {
                        let MW = bR[WW],
                          wW = bR[RW];
                        return (void 0 !== MW ? MW : 0) - (void 0 !== wW ? wW : 0)
                      })),
                      TW = (wW.length - 1) / 2;
                    for (let WW = Math.floor(TW), CW = Math.ceil(TW); WW <= CW; ++WW) {
                      let CW = wW[WW];
                      if (void 0 === CW) continue;
                      let tR = bR[CW];
                      if (void 0 !== tR && AW[RW] === RW && yR < tR && bR[CW] !== NW && !bw(MW, RW, CW)) {
                        let WW = zR[CW];
                        void 0 !== WW && (AW[CW] = RW, AW[RW] = zR[RW] = WW, yR = tR, eW && (yR = -1, NW = null != (BW = bR[CW]) ? BW : -1, eW = !1))
                      }
                    }
                  }
                }))
              })), {
                root: zR,
                align: AW
              }
            }(WW, MW, CW, (RW => ("u" === AW ? WW.predecessors(RW) : WW.successors(RW)) || []), RW),
            yR = yw(WW, MW, bR.root, bR.align, "r" === wW);
          "r" === wW && (yR = MR(yR, (WW => -WW))), zR[AW + wW] = yR
        }))
      }));
      let AW = function(WW, RW) {
        return Object.values(RW).reduce(((RW, MW) => {
          let wW = Number.NEGATIVE_INFINITY,
            CW = Number.POSITIVE_INFINITY;
          Object.entries(MW).forEach((RW => {
            let [MW, zR] = RW, AW = function(WW, RW) {
              return WW.node(RW).width
            }(WW, MW) / 2;
            wW = Math.max(zR + AW, wW), CW = Math.min(zR - AW, CW)
          }));
          let zR = wW - CW;
          return zR < RW[0] && (RW = [zR, MW]), RW
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(WW, zR);
      return function(WW, RW) {
          let MW = Object.values(RW),
            wW = LW(Math.min, MW),
            CW = LW(Math.max, MW);
          ["u", "d"].forEach((MW => {
            ["l", "r"].forEach((zR => {
              let AW = MW + zR,
                bR = WW[AW];
              if (!bR || bR === RW) return;
              let yR = Object.values(bR),
                NW = wW - LW(Math.min, yR);
              "l" !== zR && (NW = CW - LW(Math.max, yR)), NW && (WW[AW] = MR(bR, (WW => WW + NW)))
            }))
          }))
        }(zR, AW),
        function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            MW = WW.ul;
          return MW ? MR(MW, ((MW, wW) => {
            var CW, zR;
            if (RW) {
              let MW = RW.toLowerCase(),
                CW = WW[MW];
              if (CW && void 0 !== CW[wW]) return CW[wW]
            }
            let AW = Object.values(WW).map((WW => {
              let RW = WW[wW];
              return void 0 !== RW ? RW : 0
            })).sort(((WW, RW) => WW - RW));
            return ((null != (CW = AW[1]) ? CW : 0) + (null != (zR = AW[2]) ? zR : 0)) / 2
          })) : {}
        }(zR, WW.graph().align)
    }

    function eM(WW, RW, MW) {
      var wW;
      if (!MW) return !1;
      let CW = null == (wW = RW.node(WW)) ? void 0 : wW.edgeObj;
      if (!CW || RW.node(WW).edgeLabel.reversed) return !1;
      let zR = MW.indexOf(null == CW ? void 0 : CW.v),
        AW = MW.indexOf(null == CW ? void 0 : CW.w);
      return -1 !== zR && -1 !== AW && zR === (AW + 1) % MW.length || zR === (AW - 1) % MW.length
    }

    function BM(WW, RW) {
      (function(WW) {
        let RW = OW(WW),
          MW = WW.graph(),
          wW = MW.ranksep,
          CW = MW.rankalign,
          zR = 0;
        RW.forEach((RW => {
          let MW = RW.reduce(((RW, MW) => {
            var wW;
            let CW = null != (wW = WW.node(MW).height) ? wW : 0;
            return RW > CW ? RW : CW
          }), 0);
          RW.forEach((RW => {
            let wW = WW.node(RW);
            wW.y = "top" === CW ? zR + wW.height / 2 : "bottom" === CW ? zR + MW - wW.height / 2 : zR + MW / 2
          })), zR += MW + wW
        }))
      })(WW = KW(WW)), Object.entries(NM(WW, RW)).forEach((RW => {
        let [MW, wW] = RW;
        return WW.node(MW).x = wW
      }))
    }
    var tw = new WeakMap;

    function TM(WW) {
      return iw(WW, qR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), WW
    }

    function gw(WW, RW, MW) {
      let wW = RW;
      for (; void 0 !== wW;) {
        let RW = WW.parent(wW);
        if (RW === MW) return wW;
        wW = RW
      }
    }

    function iw(WW, RW, MW) {
      var wW;
      let CW = WW.nodes().filter((RW => WW.children(RW).length)),
        zR = {};
      CW.forEach((wW => {
        let CW = WW.node(wW);
        if (CW && CW.rankdir) {
          let AW = new xR({
            multigraph: !0,
            compound: !0
          });
          AW.setGraph({
            rankdir: CW.rankdir
          });
          let bR = WW.children(wW);
          bR.forEach((RW => {
            let MW = {
              ...WW.node(RW)
            };
            AW.setNode(RW, MW);
            let CW = WW.parent(RW);
            CW && CW !== wW && bR.includes(CW) && AW.setParent(RW, CW)
          }));
          let yR = new Set;
          WW.edges().forEach((RW => {
            let MW = gw(WW, RW.v, wW),
              CW = gw(WW, RW.w, wW);
            if (MW && CW && MW !== CW) {
              let wW = `${MW}\0${CW}`;
              yR.has(wW) || (yR.add(wW), AW.setEdge(MW, CW, {
                ...WW.edge(RW)
              }))
            }
          })), iw(AW, RW, MW);
          let NW = cwW(AW);
          YM(NW, RW, MW, null), JM(AW, NW);
          let eW = 1 / 0,
            BW = 1 / 0,
            tR = -1 / 0,
            TW = -1 / 0;
          AW.nodes().forEach((WW => {
            if (WW === wW) return;
            let RW = AW.node(WW);
            RW && "number" == typeof RW.x && "number" == typeof RW.y && "number" == typeof RW.width && "number" == typeof RW.height && (eW = Math.min(eW, RW.x - RW.width / 2), tR = Math.max(tR, RW.x + RW.width / 2), BW = Math.min(BW, RW.y - RW.height / 2), TW = Math.max(TW, RW.y + RW.height / 2))
          })), (!isFinite(eW) || !isFinite(BW) || !isFinite(tR) || !isFinite(TW)) && (eW = BW = 0, tR = TW = 0);
          let gR = tR - eW,
            iR = TW - BW;
          zR[wW] = {
            minX: eW,
            yA: BW,
            maxX: tR,
            Nz: TW,
            width: gR,
            height: iR,
            offsetX: eW,
            offsetY: BW
          }, CW._dagreClusterSubgraph = AW
        }
      }));
      let AW = [],
        bR = new Map;
      CW.forEach((RW => {
        let MW = WW.node(RW);
        MW && MW.rankdir && zR[RW] && bR.set(RW, (WW.children(RW) || []).filter((WW => WW !== RW)))
      }));
      let yR = new Set([...bR.values()].flat()),
        NW = new Map;
      bR.forEach(((RW, MW) => {
        yR.has(MW) || NW.set(MW, (RW => {
          let MW = [],
            wW = (WW.children(RW) || []).filter((WW => WW !== RW));
          for (; wW.length > 0;) {
            let RW = wW.shift();
            MW.push(RW), (WW.children(RW) || []).filter((WW => WW !== RW)).forEach((WW => wW.push(WW)))
          }
          return MW
        })(MW))
      }));
      let eW = new Set([...NW.values()].flat()),
        BW = WW => {
          for (let [RW, MW] of NW)
            if (MW.includes(WW)) return RW;
          return WW
        },
        tR = [];
      WW.edges().forEach((RW => {
        (eW.has(RW.v) || eW.has(RW.w)) && tR.push({
          edge: RW,
          label: WW.edge(RW)
        })
      }));
      let TW = new Map;
      eW.forEach((RW => {
        let MW = WW.parent(RW);
        TW.set(RW, "string" == typeof MW ? MW : void 0)
      })), NW.forEach(((RW, MW) => {
        let wW = WW.node(MW),
          CW = [];
        RW.forEach((RW => {
          let MW = WW.node(RW);
          MW && (CW.push({
            id: RW,
            node: MW,
            parent: TW.get(RW)
          }), WW.removeNode(RW))
        }));
        let bR = tR.filter((WW => {
            let {
              edge: MW
            } = WW;
            return RW.includes(MW.v) || RW.includes(MW.w)
          })),
          yR = zR[MW];
        wW && (AW.push({
          clusterId: MW,
          subgraph: wW._dagreClusterSubgraph,
          bounds: yR,
          children: RW,
          removedNodes: CW,
          removedEdges: bR
        }), wW.width = yR.width, wW.height = yR.height)
      }));
      let gR = new Set;
      tR.forEach((RW => {
        let {
          edge: MW,
          label: wW
        } = RW, CW = BW(MW.v), zR = BW(MW.w);
        if (CW !== zR && WW.hasNode(CW) && WW.hasNode(zR)) {
          let RW = `${CW}\0${zR}`;
          gR.has(RW) || (gR.add(RW), WW.setEdge(CW, zR, {
            ...wW,
            width: 0,
            height: 0
          }))
        }
      }));
      let iR = cwW(WW),
        YW = YM(iR, RW, MW, null != (wW = tw.get(WW)) ? wW : null);
      tw.set(WW, YW), JM(WW, iR), gR.forEach((RW => {
        let MW = RW.indexOf("\0"),
          wW = RW.slice(0, MW),
          CW = RW.slice(MW + 1);
        WW.hasEdge(wW, CW) && WW.removeEdge(wW, CW)
      })), AW.forEach((RW => {
        let {
          clusterId: MW,
          subgraph: wW,
          bounds: CW,
          removedNodes: zR,
          removedEdges: AW
        } = RW;
        var bR, yR;
        let NW = WW.node(MW),
          eW = null != (bR = null == NW ? void 0 : NW.x) ? bR : 0,
          BW = null != (yR = null == NW ? void 0 : NW.y) ? yR : 0,
          tR = (CW.minX + CW.maxX) / 2,
          TW = (CW.yA + CW.Nz) / 2;
        zR.forEach((RW => {
          let {
            id: MW,
            node: wW,
            parent: CW
          } = RW;
          WW.setNode(MW, wW), void 0 !== CW && WW.setParent(MW, CW)
        })), AW.forEach((RW => {
          let {
            edge: MW,
            label: wW
          } = RW;
          WW.setEdge(MW, wW)
        })), wW.nodes().forEach((RW => {
          if (RW === MW) return;
          let CW = wW.node(RW),
            zR = WW.node(RW);
          zR && CW && "number" == typeof CW.x && "number" == typeof CW.y && (zR.x = eW + (CW.x - tR), zR.y = BW + (CW.y - TW))
        })), delete NW._dagreClusterSubgraph
      })), CW.forEach((RW => {
        var MW, wW;
        let CW = WW.node(RW),
          AW = zR[RW];
        if (CW && CW.rankdir && CW._dagreClusterSubgraph && AW) {
          let zR = CW._dagreClusterSubgraph,
            bR = null != (MW = CW.x) ? MW : 0,
            yR = null != (wW = CW.y) ? wW : 0,
            NW = (AW.minX + AW.maxX) / 2,
            eW = (AW.yA + AW.Nz) / 2;
          zR.nodes().forEach((MW => {
            if (MW === RW) return;
            let wW = zR.node(MW),
              CW = WW.node(MW);
            if (CW && wW && "number" == typeof wW.x && "number" == typeof wW.y) {
              let WW = wW.x - NW,
                RW = wW.y - eW;
              CW.x = bR + WW, CW.y = yR + RW
            }
          })), delete CW._dagreClusterSubgraph
        }
      }))
    }

    function YM(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var CW, zR;
      let AW = !1 !== (null == MW ? void 0 : MW.useDynamic),
        bR = AW && null != (CW = null == wW ? void 0 : wW.graph) ? CW : null,
        yR = AW && null != (zR = null == wW ? void 0 : wW.rawNodes) ? zR : null;
      RW("    makeSpaceForEdgeLabels", (() => function(WW) {
        let RW = WW.graph();
        RW.ranksep /= 2, WW.edges().forEach((MW => {
          var wW;
          let CW = WW.edge(MW);
          CW.minlen *= 2, "c" !== (null != (wW = CW.labelpos) ? wW : "r").toLowerCase() && ("TB" === RW.rankdir || "BT" === RW.rankdir ? CW.width += CW.labeloffset : CW.height += CW.labeloffset)
        }))
      }(WW))), RW("    removeSelfEdges", (() => function(WW) {
        WW.edges().forEach((RW => {
          if (RW.v === RW.w) {
            let MW = WW.node(RW.v);
            MW.selfEdges || (MW.selfEdges = []), MW.selfEdges.push({
              e: RW,
              label: WW.edge(RW)
            }), WW.removeEdge(RW)
          }
        }))
      }(WW))), RW("    acyclic", (() => TR(WW, bR))), RW("    nestingGraph.run", (() => VR(WW))), RW("    rank", (() => pR(KW(WW)))), RW("    injectEdgeLabelProxies", (() => function(WW) {
        WW.edges().forEach((RW => {
          let MW = WW.edge(RW);
          if (MW.width && MW.height) {
            let MW = WW.node(RW.v),
              wW = {
                rank: (WW.node(RW.w).rank - MW.rank) / 2 + MW.rank,
                e: RW
              };
            vR(WW, "edge-proxy", wW, "_ep")
          }
        }))
      }(WW))), RW("    removeEmptyRanks", (() => function(WW) {
        let RW = WW.nodes().map((RW => WW.node(RW).rank)).filter((WW => void 0 !== WW)),
          MW = LW(Math.min, RW),
          wW = [];
        WW.nodes().forEach((RW => {
          let CW = WW.node(RW).rank - MW;
          wW[CW] || (wW[CW] = []), wW[CW].push(RW)
        }));
        let CW = 0,
          zR = WW.graph().nodeRankFactor;
        Array.from(wW).forEach(((RW, MW) => {
          void 0 === RW && MW % zR !== 0 ? --CW : void 0 !== RW && CW && RW.forEach((RW => WW.node(RW).rank += CW))
        }))
      }(WW))), RW("    nestingGraph.cleanup", (() => function(WW) {
        let RW = WW.graph();
        WW.removeNode(RW.nestingRoot), delete RW.nestingRoot, WW.edges().forEach((RW => {
          WW.edge(RW).nestingEdge && WW.removeEdge(RW)
        }))
      }(WW))), RW("    normalizeRanks", (() => function(WW) {
        let RW = WW.nodes().map((RW => {
            let MW = WW.node(RW).rank;
            return void 0 === MW ? Number.MAX_VALUE : MW
          })),
          MW = LW(Math.min, RW);
        WW.nodes().forEach((RW => {
          let wW = WW.node(RW);
          Object.hasOwn(wW, "rank") && (wW.rank -= MW)
        }))
      }(WW))), RW("    assignRankMinMax", (() => function(WW) {
        let RW = 0;
        WW.nodes().forEach((MW => {
          let wW = WW.node(MW);
          wW.borderTop && (wW.minRank = WW.node(wW.borderTop).rank, wW.maxRank = WW.node(wW.borderBottom).rank, RW = Math.max(RW, wW.maxRank))
        })), WW.graph().maxRank = RW
      }(WW))), RW("    removeEdgeLabelProxies", (() => function(WW) {
        WW.nodes().forEach((RW => {
          let MW = WW.node(RW);
          if ("edge-proxy" === MW.dummy) {
            let wW = MW;
            WW.edge(wW.e).labelRank = MW.rank, WW.removeNode(RW)
          }
        }))
      }(WW))), RW("    normalize.run", (() => gM(WW))), RW("    parentDummyChains", (() => ER(WW))), RW("    addBorderSegments", (() => xM(WW))), RW("    order", (() => MM(WW, MW, yR))), RW("    insertSelfEdges", (() => function(WW) {
        OW(WW).forEach((RW => {
          let MW = 0;
          RW.forEach(((RW, wW) => {
            let CW = WW.node(RW);
            "number" != typeof CW.rank && (CW.rank = 0), CW.order = wW + MW, (CW.selfEdges || []).forEach((RW => {
              vR(WW, "selfedge", {
                width: RW.label.width,
                height: RW.label.height,
                rank: CW.rank,
                order: wW + ++MW,
                e: RW.e,
                edgeLabel: RW.label
              }, "_se"), (!Array.isArray(RW.label.points) || 7 !== RW.label.points.length) && (RW.label.points = [{
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
            })), delete CW.selfEdges
          }))
        }))
      }(WW))), RW("    adjustCoordinateSystem", (() => function(WW) {
        var RW;
        let MW = null == (RW = WW.graph().rankdir) ? void 0 : RW.toLowerCase();
        ("lr" === MW || "rl" === MW) && uR(WW)
      }(WW))), RW("    position", (() => BM(WW, MW.corePath))), RW("    positionSelfEdges", (() => function(WW) {
        WW.nodes().forEach((RW => {
          let MW = WW.node(RW),
            wW = WW => "number" == typeof WW && isFinite(WW);
          if ("selfedge" === MW.dummy) {
            let CW = MW,
              zR = WW.node(CW.e.v),
              AW = wW(null == zR ? void 0 : zR.x) ? zR.x : 0,
              bR = wW(null == zR ? void 0 : zR.y) ? zR.y : 0,
              yR = wW(null == zR ? void 0 : zR.width) ? zR.width : 0,
              NW = wW(null == zR ? void 0 : zR.height) ? zR.height : 0,
              eW = wW(MW.x) ? MW.x : AW,
              BW = wW(MW.y) ? MW.y : bR,
              tR = yR / 2,
              TW = NW / 2;
            CW.edgeLabel.points = [{
              x: eW + tR,
              y: BW - TW
            }, {
              x: eW + tR,
              y: BW - TW
            }, {
              x: eW,
              y: BW
            }, {
              x: eW - tR,
              y: BW + TW
            }, {
              x: eW - tR,
              y: BW + TW
            }, {
              x: eW,
              y: BW
            }, {
              x: eW,
              y: BW
            }], CW.edgeLabel.x = eW, CW.edgeLabel.y = BW, WW.setEdge(CW.e, CW.edgeLabel), WW.removeNode(RW)
          } else MW && Array.isArray(MW.selfEdges) && MW.selfEdges.forEach((WW => {
            if (!Array.isArray(WW.label.points) || 7 !== WW.label.points.length) {
              let RW = wW(MW.x) ? MW.x : 0,
                CW = wW(MW.y) ? MW.y : 0,
                zR = (wW(MW.width) ? MW.width : 0) / 2,
                AW = (wW(MW.height) ? MW.height : 0) / 2;
              WW.label.points = [{
                x: RW + zR,
                y: CW - AW
              }, {
                x: RW + zR,
                y: CW - AW
              }, {
                x: RW,
                y: CW
              }, {
                x: RW - zR,
                y: CW + AW
              }, {
                x: RW - zR,
                y: CW + AW
              }, {
                x: RW,
                y: CW
              }, {
                x: RW,
                y: CW
              }]
            }
          }))
        }))
      }(WW)));
      let NW = JSON.parse(JSON.stringify(WW._nodes));
      return RW("    removeBorderNodes", (() => function(WW) {
        WW.nodes().forEach((RW => {
          if (WW.children(RW).length) {
            let MW = WW.node(RW),
              wW = WW.node(MW.borderTop),
              CW = WW.node(MW.borderBottom),
              zR = WW.node(MW.borderLeft[MW.borderLeft.length - 1]),
              AW = WW.node(MW.borderRight[MW.borderRight.length - 1]);
            MW.width = Math.abs(AW.x - zR.x), MW.height = Math.abs(CW.y - wW.y), MW.x = zR.x + MW.width / 2, MW.y = wW.y + MW.height / 2
          }
        })), WW.nodes().forEach((RW => {
          "border" === WW.node(RW).dummy && WW.removeNode(RW)
        }))
      }(WW))), RW("    normalize.undo", (() => function(WW) {
        WW.graph().dummyChains.forEach((RW => {
          let MW, wW = WW.node(RW),
            CW = wW.edgeLabel;
          for (WW.setEdge(wW.edgeObj, CW); wW.dummy;) MW = WW.successors(RW)[0], WW.removeNode(RW), CW.points.push({
            x: wW.x,
            y: wW.y
          }), "edge-label" === wW.dummy && (CW.x = wW.x, CW.y = wW.y, CW.width = wW.width, CW.height = wW.height), RW = MW, wW = WW.node(RW)
        }))
      }(WW))), RW("    fixupEdgeLabelCoords", (() => function(WW) {
        WW.edges().forEach((RW => {
          let MW = WW.edge(RW);
          if (Object.hasOwn(MW, "x")) switch (("l" === MW.labelpos || "r" === MW.labelpos) && (MW.width -= MW.labeloffset), MW.labelpos) {
            case "l":
              MW.x -= MW.width / 2 + MW.labeloffset;
              break;
            case "r":
              MW.x += MW.width / 2 + MW.labeloffset
          }
        }))
      }(WW))), RW("    undoCoordinateSystem", (() => KR(WW))), RW("    translateGraph", (() => function(WW) {
        let RW = Number.POSITIVE_INFINITY,
          MW = 0,
          wW = Number.POSITIVE_INFINITY,
          CW = 0,
          zR = WW.graph(),
          AW = zR.marginx || 0,
          bR = zR.marginy || 0;

        function yR(WW) {
          let zR = WW.x,
            AW = WW.y,
            bR = WW.width,
            yR = WW.height;
          RW = Math.min(RW, zR - bR / 2), MW = Math.max(MW, zR + bR / 2), wW = Math.min(wW, AW - yR / 2), CW = Math.max(CW, AW + yR / 2)
        }
        WW.nodes().forEach((RW => yR(WW.node(RW)))), WW.edges().forEach((RW => {
          let MW = WW.edge(RW);
          Object.hasOwn(MW, "x") && yR(MW)
        })), RW -= AW, wW -= bR, WW.nodes().forEach((MW => {
          let CW = WW.node(MW);
          CW.x -= RW, CW.y -= wW
        })), WW.edges().forEach((MW => {
          let CW = WW.edge(MW);
          CW.points.forEach((WW => {
            WW.x -= RW, WW.y -= wW
          })), Object.hasOwn(CW, "x") && (CW.x -= RW), Object.hasOwn(CW, "y") && (CW.y -= wW)
        })), zR.width = MW - RW + AW, zR.height = CW - wW + bR
      }(WW))), RW("    assignNodeIntersects", (() => function(WW) {
        WW.edges().forEach((RW => {
          if (RW.v === RW.w) return;
          let MW, wW, CW = WW.edge(RW),
            zR = WW.node(RW.v),
            AW = WW.node(RW.w);
          CW.points ? (MW = CW.points[0], wW = CW.points[CW.points.length - 1]) : (CW.points = [], MW = AW, wW = zR), CW.points.unshift(uW(zR, MW)), CW.points.push(uW(AW, wW))
        }))
      }(WW))), RW("    reversePoints", (() => function(WW) {
        WW.edges().forEach((RW => {
          let MW = WW.edge(RW);
          MW.reversed && MW.points.reverse()
        }))
      }(WW))), RW("    acyclic.undo", (() => function(WW) {
        WW.edges().forEach((RW => {
          let MW = WW.edge(RW);
          if (MW.reversed) {
            WW.removeEdge(RW);
            let wW = MW.forwardName;
            delete MW.reversed, delete MW.forwardName, WW.setEdge(RW.w, RW.v, MW, wW)
          }
        }))
      }(WW))), {
        graph: WW,
        rawNodes: NW
      }
    }

    function JM(WW, RW) {
      WW.nodes().forEach((MW => {
        let wW = WW.node(MW),
          CW = RW.node(MW);
        wW && (wW.x = CW.x, wW.y = CW.y, wW.order = CW.order, wW.rank = CW.rank, RW.children(MW).length && (wW.width = CW.width, wW.height = CW.height))
      })), WW.edges().forEach((MW => {
        let wW = WW.edge(MW),
          CW = RW.edge(MW);
        wW.points = CW.points, Object.hasOwn(CW, "x") && (wW.x = CW.x, wW.y = CW.y)
      })), WW.graph().width = RW.graph().width, WW.graph().height = RW.graph().height
    }
    var PM = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      IM = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      oM = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      lM = ["width", "height", "rank"],
      FM = {
        width: 0,
        height: 0
      },
      fM = ["minlen", "weight", "width", "height", "labeloffset"],
      QM = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      rw = ["labelpos"];

    function cwW(WW) {
      let RW = new xR({
          multigraph: !0,
          compound: !0
        }),
        MW = jw(WW.graph());
      return RW.setGraph(Object.assign({}, IM, XM(MW, PM), RR(MW, oM))), WW.nodes().forEach((MW => {
        let wW = XM(jw(WW.node(MW)), lM);
        Object.keys(FM).forEach((WW => {
          void 0 === wW[WW] && (wW[WW] = FM[WW])
        })), RW.setNode(MW, wW);
        let CW = WW.parent(MW);
        void 0 !== CW && RW.setParent(MW, CW)
      })), WW.edges().forEach((MW => {
        let wW = jw(WW.edge(MW));
        RW.setEdge(MW, Object.assign({}, QM, XM(wW, fM), RR(wW, rw)))
      })), RW
    }

    function XM(WW, RW) {
      return MR(RR(WW, RW), Number)
    }

    function jw(WW) {
      let RW = {};
      return WW && Object.entries(WW).forEach((WW => {
        let [MW, wW] = WW;
        "string" == typeof MW && (MW = MW.toLowerCase()), RW[MW] = wW
      })), RW
    }

    function kw(WW) {
      let RW = OW(WW),
        MW = new xR({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return WW.nodes().forEach((RW => {
        MW.setNode(RW, {
          label: RW
        }), MW.setParent(RW, "layer" + WW.node(RW).rank)
      })), WW.edges().forEach((WW => MW.setEdge(WW.v, WW.w, {}, WW.name))), RW.forEach(((WW, RW) => {
        let wW = "layer" + RW;
        MW.setNode(wW, {
          rank: "same"
        }), WW.reduce(((WW, RW) => (MW.setEdge(WW, RW, {
          style: "invis"
        }), RW)))
      })), MW
    }
    var aw = {
        time: DW,
        notime: qR
      },
      sM = {
        graphlib: zR,
        version: zM,
        layout: TM,
        debug: kw,
        util: {
          time: DW,
          notime: qR
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);