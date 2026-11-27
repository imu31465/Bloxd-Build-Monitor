/*! For license information please see 1yqdn.141.a07f42d0.chunk.js.LICENSE.txt */
export const id = 141;
export const ids = [141];
export const modules = {
  7416: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Graph: () => fW,
      debug: () => oO,
      default: () => eO,
      graphlib: () => NW,
      layout: () => bO,
      util: () => dO,
      version: () => Ni
    });
    var mW = Object.defineProperty,
      EW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? mW(WW, iW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: OW
      }) : WW[iW] = OW)(WW, "symbol" != typeof iW ? iW + "" : iW, OW),
      NW = {};
    ((WW, iW) => {
      for (var OW in iW) mW(WW, OW, {
        get: iW[OW],
        enumerable: !0
      })
    })(NW, {
      Graph: () => fW,
      alg: () => UW
    });
    var PW = Object.defineProperty,
      LW = (WW, iW) => {
        for (var OW in iW) PW(WW, OW, {
          get: iW[OW],
          enumerable: !0
        })
      },
      cW = class {
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
        setNodes(WW, iW) {
          return WW.forEach((WW => {
            void 0 !== iW ? this.setNode(WW, iW) : this.setNode(WW)
          })), this
        }
        setNode(WW, iW) {
          return WW in this._nodes ? (arguments.length > 1 && (this._nodes[WW] = iW), this) : (this._nodes[WW] = arguments.length > 1 ? iW : this._defaultNodeLabelFn(WW), this._isCompound && (this._parent[WW] = "\0", this._children[WW] = {}, this._children["\0"][WW] = !0), this._in[WW] = {}, this._preds[WW] = {}, this._out[WW] = {}, this._sucs[WW] = {}, ++this._nodeCount, this)
        }
        node(WW) {
          return this._nodes[WW]
        }
        hasNode(WW) {
          return WW in this._nodes
        }
        removeNode(WW) {
          if (WW in this._nodes) {
            let iW = WW => this.removeEdge(this._edgeObjs[WW]);
            delete this._nodes[WW], this._isCompound && (this._removeFromParentsChildList(WW), delete this._parent[WW], this.children(WW).forEach((WW => {
              this.setParent(WW)
            })), delete this._children[WW]), Object.keys(this._in[WW]).forEach(iW), delete this._in[WW], delete this._preds[WW], Object.keys(this._out[WW]).forEach(iW), delete this._out[WW], delete this._sucs[WW], --this._nodeCount
          }
          return this
        }
        setParent(WW, iW) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === iW) iW = "\0";
          else {
            for (let OW = iW += ""; void 0 !== OW; OW = this.parent(OW))
              if (OW === WW) throw new Error("Setting " + iW + " as parent of " + WW + " would create a cycle");
            this.setNode(iW)
          }
          return this.setNode(WW), this._removeFromParentsChildList(WW), this._parent[WW] = iW, this._children[iW][WW] = !0, this
        }
        parent(WW) {
          if (this._isCompound) {
            let iW = this._parent[WW];
            if ("\0" !== iW) return iW
          }
        }
        children() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let iW = this._children[WW];
            if (iW) return Object.keys(iW)
          } else {
            if ("\0" === WW) return this.nodes();
            if (this.hasNode(WW)) return []
          }
          return []
        }
        predecessors(WW) {
          let iW = this._preds[WW];
          if (iW) return Object.keys(iW)
        }
        successors(WW) {
          let iW = this._sucs[WW];
          if (iW) return Object.keys(iW)
        }
        neighbors(WW) {
          let iW = this.predecessors(WW);
          if (iW) {
            let OW = new Set(iW),
              mW = this.successors(WW);
            if (mW)
              for (let WW of mW) OW.add(WW);
            return Array.from(OW.values())
          }
        }
        isLeaf(WW) {
          var iW;
          let OW;
          return OW = this.isDirected() ? this.successors(WW) : this.neighbors(WW), 0 === (null != (iW = null == OW ? void 0 : OW.length) ? iW : 0)
        }
        filterNodes(WW) {
          let iW = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          iW.setGraph(this.graph()), Object.entries(this._nodes).forEach((OW => {
            let [mW, EW] = OW;
            WW(mW) && iW.setNode(mW, EW)
          })), Object.values(this._edgeObjs).forEach((WW => {
            iW.hasNode(WW.v) && iW.hasNode(WW.w) && iW.setEdge(WW, this.edge(WW))
          }));
          let OW = {},
            mW = WW => {
              let EW = this.parent(WW);
              return !EW || iW.hasNode(EW) ? (OW[WW] = EW, EW) : EW in OW ? OW[EW] : mW(EW)
            };
          return this._isCompound && iW.nodes().forEach((WW => iW.setParent(WW, mW(WW)))), iW
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
        setPath(WW, iW) {
          return WW.reduce(((WW, OW) => (void 0 !== iW ? this.setEdge(WW, OW, iW) : this.setEdge(WW, OW), OW))), this
        }
        setEdge(WW, iW, OW, mW) {
          let EW, NW, PW, LW, cW = !1;
          "object" == typeof WW && null !== WW && "v" in WW ? (EW = WW.v, NW = WW.w, PW = WW.name, 2 === arguments.length && (LW = iW, cW = !0)) : (EW = WW, NW = iW, PW = mW, arguments.length > 2 && (LW = OW, cW = !0)), EW = "" + EW, NW = "" + NW, void 0 !== PW && (PW = "" + PW);
          let tW = ZW(this._isDirected, EW, NW, PW);
          if (tW in this._edgeLabels) return cW && (this._edgeLabels[tW] = LW), this;
          if (void 0 !== PW && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(EW), this.setNode(NW), this._edgeLabels[tW] = cW ? LW : this._defaultEdgeLabelFn(EW, NW, PW);
          let xW = function(WW, iW, OW, mW) {
            let EW = "" + iW,
              NW = "" + OW;
            if (!WW && EW > NW) {
              let WW = EW;
              EW = NW, NW = WW
            }
            let PW = {
              v: EW,
              w: NW
            };
            return mW && (PW.name = mW), PW
          }(this._isDirected, EW, NW, PW);
          return EW = xW.v, NW = xW.w, Object.freeze(xW), this._edgeObjs[tW] = xW, wW(this._preds[NW], EW), wW(this._sucs[EW], NW), this._in[NW][tW] = xW, this._out[EW][tW] = xW, this._edgeCount++, this
        }
        edge(WW, iW, OW) {
          let mW = 1 === arguments.length ? xW(this._isDirected, WW) : ZW(this._isDirected, WW, iW, OW);
          return this._edgeLabels[mW]
        }
        edgeAsObj(WW, iW, OW) {
          let mW = 1 === arguments.length ? this.edge(WW) : this.edge(WW, iW, OW);
          return "object" != typeof mW || null === mW ? {
            label: mW
          } : mW
        }
        hasEdge(WW, iW, OW) {
          return (1 === arguments.length ? xW(this._isDirected, WW) : ZW(this._isDirected, WW, iW, OW)) in this._edgeLabels
        }
        removeEdge(WW, iW, OW) {
          let mW = 1 === arguments.length ? xW(this._isDirected, WW) : ZW(this._isDirected, WW, iW, OW),
            EW = this._edgeObjs[mW];
          if (EW) {
            let WW = EW.v,
              iW = EW.w;
            delete this._edgeLabels[mW], delete this._edgeObjs[mW], tW(this._preds[iW], WW), tW(this._sucs[WW], iW), delete this._in[iW][mW], delete this._out[WW][mW], this._edgeCount--
          }
          return this
        }
        inEdges(WW, iW) {
          return this.isDirected() ? this.filterEdges(this._in[WW], WW, iW) : this.nodeEdges(WW, iW)
        }
        outEdges(WW, iW) {
          return this.isDirected() ? this.filterEdges(this._out[WW], WW, iW) : this.nodeEdges(WW, iW)
        }
        nodeEdges(WW, iW) {
          if (WW in this._nodes) return this.filterEdges({
            ...this._in[WW],
            ...this._out[WW]
          }, WW, iW)
        }
        _removeFromParentsChildList(WW) {
          delete this._children[this._parent[WW]][WW]
        }
        filterEdges(WW, iW, OW) {
          if (!WW) return;
          let mW = Object.values(WW);
          return OW ? mW.filter((WW => WW.v === iW && WW.w === OW || WW.v === OW && WW.w === iW)) : mW
        }
      };

    function wW(WW, iW) {
      WW[iW] ? WW[iW]++ : WW[iW] = 1
    }

    function tW(WW, iW) {
      void 0 !== WW[iW] && !--WW[iW] && delete WW[iW]
    }

    function ZW(WW, iW, OW, mW) {
      let EW = "" + iW,
        NW = "" + OW;
      if (!WW && EW > NW) {
        let WW = EW;
        EW = NW, NW = WW
      }
      return EW + "\x01" + NW + "\x01" + (void 0 === mW ? "\0" : mW)
    }

    function xW(WW, iW) {
      return ZW(WW, iW.v, iW.w, iW.name)
    }

    function lW(WW) {
      let iW = {
          options: {
            directed: WW.isDirected(),
            multigraph: WW.isMultigraph(),
            compound: WW.isCompound()
          },
          nodes: AW(WW),
          edges: bW(WW)
        },
        OW = WW.graph();
      return void 0 !== OW && (iW.value = structuredClone(OW)), iW
    }

    function AW(WW) {
      return WW.nodes().map((iW => {
        let OW = WW.node(iW),
          mW = WW.parent(iW),
          EW = {
            v: iW
          };
        return void 0 !== OW && (EW.value = OW), void 0 !== mW && (EW.parent = mW), EW
      }))
    }

    function bW(WW) {
      return WW.edges().map((iW => {
        let OW = WW.edge(iW),
          mW = {
            v: iW.v,
            w: iW.w
          };
        return void 0 !== iW.name && (mW.name = iW.name), void 0 !== OW && (mW.value = OW), mW
      }))
    }

    function jW(WW) {
      let iW = new cW(WW.options);
      return void 0 !== WW.value && iW.setGraph(WW.value), WW.nodes.forEach((WW => {
        iW.setNode(WW.v, WW.value), WW.parent && iW.setParent(WW.v, WW.parent)
      })), WW.edges.forEach((WW => {
        iW.setEdge({
          v: WW.v,
          w: WW.w,
          name: WW.name
        }, WW.value)
      })), iW
    }
    LW({}, {
      read: () => jW,
      write: () => lW
    });
    var UW = {};
    LW(UW, {
      CycleException: () => nW,
      bellmanFord: () => sW,
      components: () => MW,
      dijkstra: () => YW,
      dijkstraAll: () => yW,
      findCycles: () => JW,
      floydWarshall: () => HW,
      isAcyclic: () => oW,
      postorder: () => gW,
      preorder: () => DW,
      prim: () => VW,
      shortestPaths: () => pW,
      tarjan: () => TW,
      topsort: () => uW
    });
    var kW = () => 1;

    function sW(WW, iW, OW, mW) {
      return function(WW, iW, OW, mW) {
        let EW, NW = {},
          PW = 0,
          LW = WW.nodes(),
          cW = function(WW) {
            let iW = NW[WW.v],
              mW = NW[WW.w];
            if (!iW || !mW) return;
            let PW = OW(WW);
            iW.distance + PW < mW.distance && (NW[WW.w] = {
              distance: iW.distance + PW,
              predecessor: WW.v
            }, EW = !0)
          },
          wW = function() {
            LW.forEach((function(WW) {
              mW(WW).forEach((function(iW) {
                let OW = iW.v === WW ? iW.v : iW.w,
                  mW = OW === iW.v ? iW.w : iW.v;
                cW({
                  v: OW,
                  w: mW
                })
              }))
            }))
          };
        LW.forEach((function(WW) {
          let OW = WW === iW ? 0 : Number.POSITIVE_INFINITY;
          NW[WW] = {
            distance: OW,
            predecessor: ""
          }
        }));
        let tW = LW.length;
        for (let ZW = 1; ZW < tW && (EW = !1, PW++, wW(), EW); ZW++);
        if (PW === tW - 1 && (EW = !1, wW(), EW)) throw new Error("The graph contains a negative weight cycle");
        return NW
      }(WW, String(iW), OW || kW, mW || function(iW) {
        var OW;
        return null != (OW = WW.outEdges(iW)) ? OW : []
      })
    }

    function MW(WW) {
      let iW, OW = {},
        mW = [];

      function EW(mW) {
        var NW, PW;
        mW in OW || (OW[mW] = !0, iW.push(mW), null == (NW = WW.successors(mW)) || NW.forEach(EW), null == (PW = WW.predecessors(mW)) || PW.forEach(EW))
      }
      return WW.nodes().forEach((function(WW) {
        iW = [], EW(WW), iW.length && mW.push(iW)
      })), mW
    }
    var KW = class {
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
          let iW = this._keyIndices[WW];
          if (void 0 !== iW) return this._arr[iW].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(WW, iW) {
          let OW = this._keyIndices,
            mW = String(WW);
          if (!(mW in OW)) {
            let WW = this._arr,
              EW = WW.length;
            return OW[mW] = EW, WW.push({
              key: mW,
              priority: iW
            }), this._decrease(EW), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let WW = this._arr.pop();
          return delete this._keyIndices[WW.key], this._heapify(0), WW.key
        }
        decrease(WW, iW) {
          let OW = this._keyIndices[WW];
          if (void 0 === OW) throw new Error(`Key not found: ${WW}`);
          let mW = this._arr[OW].priority;
          if (iW > mW) throw new Error(`New priority is greater than current priority. Key: ${WW} Old: ${mW} New: ${iW}`);
          this._arr[OW].priority = iW, this._decrease(OW)
        }
        _heapify(WW) {
          let iW = this._arr,
            OW = 2 * WW,
            mW = OW + 1,
            EW = WW;
          OW < iW.length && (EW = iW[OW].priority < iW[EW].priority ? OW : EW, mW < iW.length && (EW = iW[mW].priority < iW[EW].priority ? mW : EW), EW !== WW && (this._swap(WW, EW), this._heapify(EW)))
        }
        _decrease(WW) {
          let iW, OW = this._arr,
            mW = OW[WW].priority;
          for (; 0 !== WW && (iW = WW >> 1, !(OW[iW].priority < mW));) this._swap(WW, iW), WW = iW
        }
        _swap(WW, iW) {
          let OW = this._arr,
            mW = this._keyIndices,
            EW = OW[WW],
            NW = OW[iW];
          OW[WW] = NW, OW[iW] = EW, mW[NW.key] = WW, mW[EW.key] = iW
        }
      },
      SW = () => 1;

    function YW(WW, iW, OW, mW) {
      return function(WW, iW, OW, mW) {
        let EW, NW, PW = {},
          LW = new KW,
          cW = function(WW) {
            let iW = WW.v !== EW ? WW.v : WW.w,
              mW = PW[iW];
            if (!mW) return;
            let cW = OW(WW),
              wW = NW.distance + cW;
            if (cW < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + WW + " Weight: " + cW);
            wW < mW.distance && (mW.distance = wW, mW.predecessor = EW, LW.decrease(iW, wW))
          };
        for (WW.nodes().forEach((function(WW) {
            let OW = WW === iW ? 0 : Number.POSITIVE_INFINITY;
            PW[WW] = {
              distance: OW,
              predecessor: ""
            }, LW.add(WW, OW)
          })); LW.size() > 0;) {
          EW = LW.removeMin();
          let WW = PW[EW];
          if (!WW || WW.distance === Number.POSITIVE_INFINITY) break;
          NW = WW, mW(EW).forEach(cW)
        }
        return PW
      }(WW, String(iW), OW || SW, mW || function(iW) {
        var OW;
        return null != (OW = WW.outEdges(iW)) ? OW : []
      })
    }

    function yW(WW, iW, OW) {
      return WW.nodes().reduce((function(mW, EW) {
        return mW[EW] = YW(WW, EW, iW, OW), mW
      }), {})
    }

    function TW(WW) {
      let iW = 0,
        OW = [],
        mW = {},
        EW = [];

      function NW(PW) {
        var LW;
        let cW = mW[PW] = {
          onStack: !0,
          lowlink: iW,
          index: iW++
        };
        if (OW.push(PW), null == (LW = WW.successors(PW)) || LW.forEach((function(WW) {
            if (WW in mW) {
              let iW = mW[WW];
              null != iW && iW.onStack && (cW.lowlink = Math.min(cW.lowlink, iW.index))
            } else {
              NW(WW);
              let iW = mW[WW];
              iW && (cW.lowlink = Math.min(cW.lowlink, iW.lowlink))
            }
          })), cW.lowlink === cW.index) {
          let WW, iW = [];
          do {
            WW = OW.pop();
            let EW = mW[WW];
            EW && (EW.onStack = !1), iW.push(WW)
          } while (PW !== WW);
          EW.push(iW)
        }
      }
      return WW.nodes().forEach((function(WW) {
        WW in mW || NW(WW)
      })), EW
    }

    function JW(WW) {
      return TW(WW).filter((function(iW) {
        var OW;
        let mW = iW[0];
        return !!mW && (iW.length > 1 || 1 === iW.length && (null != (OW = WW.outEdges(mW, mW)) ? OW : []).length > 0)
      }))
    }
    var hW = () => 1;

    function HW(WW, iW, OW) {
      return function(WW, iW, OW) {
        let mW = {},
          EW = WW.nodes();
        return EW.forEach((function(WW) {
          let NW = {};
          mW[WW] = NW, NW[WW] = {
            distance: 0,
            predecessor: ""
          }, EW.forEach((function(iW) {
            WW !== iW && (NW[iW] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), OW(WW).forEach((function(OW) {
            let mW = OW.v === WW ? OW.w : OW.v,
              EW = iW(OW);
            NW[mW] = {
              distance: EW,
              predecessor: WW
            }
          }))
        })), EW.forEach((function(WW) {
          let iW = mW[WW];
          iW && EW.forEach((function(OW) {
            let NW = mW[OW];
            NW && EW.forEach((function(OW) {
              let mW = NW[WW],
                EW = iW[OW],
                PW = NW[OW];
              if (mW && EW && PW) {
                let WW = mW.distance + EW.distance;
                WW < PW.distance && (PW.distance = WW, PW.predecessor = EW.predecessor)
              }
            }))
          }))
        })), mW
      }(WW, iW || hW, OW || function(iW) {
        var OW;
        return null != (OW = WW.outEdges(iW)) ? OW : []
      })
    }
    var nW = class extends Error {
      constructor(WW) {
        super(WW), this.name = "CycleException"
      }
    };

    function uW(WW) {
      let iW = {},
        OW = {},
        mW = [];
      if (WW.sinks().forEach((function EW(NW) {
          var PW;
          if (NW in OW) throw new nW;
          NW in iW || (OW[NW] = !0, iW[NW] = !0, null == (PW = WW.predecessors(NW)) || PW.forEach(EW), delete OW[NW], mW.push(NW))
        })), Object.keys(iW).length !== WW.nodeCount()) throw new nW;
      return mW
    }

    function oW(WW) {
      try {
        uW(WW)
      } catch (iW) {
        if (iW instanceof nW) return !1;
        throw iW
      }
      return !0
    }

    function dW(WW, iW, OW, mW, EW) {
      Array.isArray(iW) || (iW = [iW]);
      let NW = iW => {
          var OW;
          return null != (OW = WW.isDirected() ? WW.successors(iW) : WW.neighbors(iW)) ? OW : []
        },
        PW = {};
      return iW.forEach((function(iW) {
        if (!WW.hasNode(iW)) throw new Error("Graph does not have node: " + iW);
        EW = eW(WW, iW, "post" === OW, PW, NW, mW, EW)
      })), EW
    }

    function eW(WW, iW, OW, mW, EW, NW, PW) {
      return iW in mW || (mW[iW] = !0, OW || (PW = NW(PW, iW)), EW(iW).forEach((function(iW) {
        PW = eW(WW, iW, OW, mW, EW, NW, PW)
      })), OW && (PW = NW(PW, iW))), PW
    }

    function vW(WW, iW, OW) {
      return dW(WW, iW, OW, (function(WW, iW) {
        return WW.push(iW), WW
      }), [])
    }

    function gW(WW, iW) {
      return vW(WW, iW, "post")
    }

    function DW(WW, iW) {
      return vW(WW, iW, "pre")
    }

    function VW(WW, iW) {
      var OW;
      let mW, EW = new cW,
        NW = {},
        PW = new KW;

      function LW(WW) {
        let OW = WW.v === mW ? WW.w : WW.v,
          EW = PW.priority(OW);
        if (void 0 !== EW) {
          let LW = iW(WW);
          LW < EW && (NW[OW] = mW, PW.decrease(OW, LW))
        }
      }
      if (0 === WW.nodeCount()) return EW;
      WW.nodes().forEach((function(WW) {
        PW.add(WW, Number.POSITIVE_INFINITY), EW.setNode(WW)
      }));
      let wW = WW.nodes()[0];
      void 0 !== wW && PW.decrease(wW, 0);
      let tW = !1;
      for (; PW.size() > 0;) {
        if (mW = PW.removeMin(), mW in NW) EW.setEdge(mW, NW[mW]);
        else {
          if (tW) throw new Error("Input graph is not connected: " + WW);
          tW = !0
        }
        null == (OW = WW.nodeEdges(mW)) || OW.forEach(LW)
      }
      return EW
    }

    function pW(WW, iW, OW, mW) {
      return function(WW, iW, OW, mW) {
        if (void 0 === OW) return YW(WW, iW, OW, mW);
        let EW = !1,
          NW = WW.nodes();
        for (let PW = 0; PW < NW.length; PW++) {
          let LW = NW[PW];
          if (void 0 === LW) continue;
          let cW = mW(LW);
          for (let WW = 0; WW < cW.length; WW++) {
            let iW = cW[WW];
            if (!iW) continue;
            let mW = iW.v === LW ? iW.v : iW.w;
            OW({
              v: mW,
              w: mW === iW.v ? iW.w : iW.v
            }) < 0 && (EW = !0)
          }
          if (EW) return sW(WW, iW, OW, mW)
        }
        return YW(WW, iW, OW, mW)
      }(WW, iW, OW, null != mW ? mW : iW => {
        var OW;
        return null != (OW = WW.outEdges(iW)) ? OW : []
      })
    }
    var fW = cW;

    function CW(WW, iW, OW, mW) {
      let EW = mW;
      for (; WW.hasNode(EW);) EW = QW(mW);
      return OW.dummy = iW, WW.setNode(EW, OW), EW
    }

    function XW(WW) {
      let iW = new fW({
        multigraph: WW.isMultigraph()
      }).setGraph(WW.graph());
      return WW.nodes().forEach((OW => {
        WW.children(OW).length || iW.setNode(OW, WW.node(OW))
      })), WW.edges().forEach((OW => {
        iW.setEdge(OW, WW.edge(OW))
      })), iW
    }

    function BW(WW, iW) {
      let OW, mW, EW = WW.x,
        NW = WW.y,
        PW = iW.x - EW,
        LW = iW.y - NW,
        cW = WW.width / 2,
        wW = WW.height / 2;
      if (!PW && !LW) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(LW) * cW > Math.abs(PW) * wW ? (LW < 0 && (wW = -wW), OW = wW * PW / LW, mW = wW) : (PW < 0 && (cW = -cW), OW = cW, mW = cW * LW / PW), {
        x: EW + OW,
        y: NW + mW
      }
    }

    function qW(WW) {
      let iW = Wi(aW(WW) + 1).map((() => []));
      return WW.nodes().forEach((OW => {
        let mW = WW.node(OW),
          EW = mW.rank;
        void 0 !== EW && (iW[EW] || (iW[EW] = []), iW[EW][mW.order] = OW)
      })), iW
    }

    function RW(WW, iW, OW, mW) {
      let EW = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (EW.rank = OW, EW.order = mW), CW(WW, "border", EW, iW)
    }
    var GW = 65535;

    function IW(WW, iW) {
      if (iW.length > GW) {
        let OW = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GW,
            OW = [];
          for (let mW = 0; mW < WW.length; mW += iW) {
            let EW = WW.slice(mW, mW + iW);
            OW.push(EW)
          }
          return OW
        }(iW);
        return WW(...OW.map((iW => WW(...iW))))
      }
      return WW(...iW)
    }

    function aW(WW) {
      let iW = WW.nodes().map((iW => {
        let OW = WW.node(iW).rank;
        return void 0 === OW ? Number.MIN_VALUE : OW
      }));
      return IW(Math.max, iW)
    }

    function rW(WW, iW) {
      let OW = Date.now();
      try {
        return iW()
      } finally {
        console.log(WW + " time: " + (Date.now() - OW) + "ms")
      }
    }

    function zW(WW, iW) {
      return iW()
    }
    var FW = 0;

    function QW(WW) {
      return WW + "" + ++FW
    }

    function Wi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == iW && (iW = WW, WW = 0);
      let mW = WW => WW < iW;
      OW < 0 && (mW = WW => iW < WW);
      let EW = [];
      for (let NW = WW; mW(NW); NW += OW) EW.push(NW);
      return EW
    }

    function ii(WW, iW) {
      let OW = {};
      for (let mW of iW) void 0 !== WW[mW] && (OW[mW] = WW[mW]);
      return OW
    }

    function Oi(WW, iW) {
      let OW;
      return OW = "string" == typeof iW ? WW => WW[iW] : iW, Object.entries(WW).reduce(((WW, iW) => {
        let [mW, EW] = iW;
        return WW[mW] = OW(EW, mW), WW
      }), {})
    }
    var mi = "\0";

    function Ei(WW, iW, OW) {
      var mW, EW, NW, PW, LW, cW;
      if (!(WW && iW && OW && "edge" === iW.dummy && "edge" === OW.dummy && iW.edgeObj && OW.edgeObj && WW[iW.edgeObj.v] && WW[OW.edgeObj.v] && WW[iW.edgeObj.w] && WW[OW.edgeObj.w])) return 0;
      let wW = !0;
      iW.edgeObj.w === OW.edgeObj.w && (wW = !1);
      let tW = wW ? null != (EW = null == (mW = WW[iW.edgeObj.v]) ? void 0 : mW.rank) ? EW : NaN : null != (PW = null == (NW = WW[iW.edgeObj.w]) ? void 0 : NW.rank) ? PW : NaN,
        ZW = Object.entries(WW).find((WW => {
          var OW, mW;
          return (null == (OW = WW[1].edgeObj) ? void 0 : OW.v) === iW.edgeObj.v && (null == (mW = WW[1].edgeObj) ? void 0 : mW.w) === iW.edgeObj.w && WW[1].rank === tW
        })),
        xW = Object.entries(WW).find((WW => {
          var iW, mW;
          return (null == (iW = WW[1].edgeObj) ? void 0 : iW.v) === OW.edgeObj.v && (null == (mW = WW[1].edgeObj) ? void 0 : mW.w) === OW.edgeObj.w && WW[1].rank === tW
        }));
      if (!ZW || !xW) return 0;
      let lW = null != (LW = ZW[1].order) ? LW : NaN,
        AW = null != (cW = xW[1].order) ? cW : NaN;
      return isNaN(lW - AW) ? 0 : lW - AW
    }
    var Ni = "3.1.1";

    function Pi(WW) {
      WW._prev._next = WW._next, WW._next._prev = WW._prev, delete WW._next, delete WW._prev
    }

    function Li(WW, iW) {
      if ("_next" !== WW && "_prev" !== WW) return iW
    }
    var ci = class {
        constructor() {
          EW(this, "_sentinel");
          let WW = {};
          WW._next = WW._prev = WW, this._sentinel = WW
        }
        dequeue() {
          let WW = this._sentinel,
            iW = WW._prev;
          if (iW !== WW) return Pi(iW), iW
        }
        enqueue(WW) {
          let iW = this._sentinel;
          WW._prev && WW._next && Pi(WW), WW._next = iW._next, iW._next._prev = WW, iW._next = WW, WW._prev = iW
        }
        toString() {
          let WW = [],
            iW = this._sentinel,
            OW = iW._prev;
          for (; OW !== iW;) WW.push(JSON.stringify(OW, Li)), OW = OW._prev;
          return "[" + WW.join(", ") + "]"
        }
      },
      wi = () => 1;

    function ti(WW, iW) {
      if (WW.nodeCount() <= 1) return [];
      let OW = function(WW, iW) {
        let OW = new fW,
          mW = 0,
          EW = 0;
        WW.nodes().forEach((WW => {
          OW.setNode(WW, {
            v: WW,
            in: 0,
            out: 0
          })
        })), WW.edges().forEach((WW => {
          let NW = OW.edge(WW.v, WW.w) || 0,
            PW = iW(WW),
            LW = NW + PW;
          OW.setEdge(WW.v, WW.w, LW);
          let cW = OW.node(WW.v),
            wW = OW.node(WW.w);
          EW = Math.max(EW, cW.out += PW), mW = Math.max(mW, wW.in += PW)
        }));
        let NW = function(WW) {
            let iW = [];
            for (let OW = 0; OW < WW; OW++) iW.push(OW);
            return iW
          }(EW + mW + 3).map((() => new ci)),
          PW = mW + 1;
        return OW.nodes().forEach((WW => {
          xi(NW, PW, OW.node(WW))
        })), {
          graph: OW,
          buckets: NW,
          zeroIdx: PW
        }
      }(WW, iW || wi);
      return function(WW, iW, OW) {
        var mW;
        let EW, NW = [],
          PW = iW[iW.length - 1],
          LW = iW[0];
        for (; WW.nodeCount();) {
          for (; EW = LW.dequeue();) Zi(WW, iW, OW, EW);
          for (; EW = PW.dequeue();) Zi(WW, iW, OW, EW);
          if (WW.nodeCount())
            for (let PW = iW.length - 2; PW > 0; --PW)
              if (EW = null == (mW = iW[PW]) ? void 0 : mW.dequeue(), EW) {
                NW = NW.concat(Zi(WW, iW, OW, EW, !0) || []);
                break
              }
        }
        return NW
      }(OW.graph, OW.buckets, OW.zeroIdx).flatMap((iW => WW.outEdges(iW.v, iW.w) || []))
    }

    function Zi(WW, iW, OW, mW, EW) {
      let NW = [],
        PW = EW ? NW : void 0;
      return (WW.inEdges(mW.v) || []).forEach((mW => {
        let PW = WW.edge(mW),
          LW = WW.node(mW.v);
        EW && NW.push({
          v: mW.v,
          w: mW.w
        }), LW.out -= PW, xi(iW, OW, LW)
      })), (WW.outEdges(mW.v) || []).forEach((mW => {
        let EW = WW.edge(mW),
          NW = mW.w,
          PW = WW.node(NW);
        PW.in -= EW, xi(iW, OW, PW)
      })), WW.removeNode(mW.v), PW
    }

    function xi(WW, iW, OW) {
      var mW, EW, NW;
      OW.out ? OW.in ? null == (NW = WW[OW.out - OW.in + iW]) || NW.enqueue(OW) : null == (EW = WW[WW.length - 1]) || EW.enqueue(OW) : null == (mW = WW[0]) || mW.enqueue(OW)
    }

    function li(WW, iW) {
      var OW;
      ("greedy" === WW.graph().acyclicer ? ti(WW, (OW = WW, WW => OW.edge(WW).weight)) : function(WW, iW) {
        let OW = [],
          mW = {},
          EW = {};

        function NW(iW) {
          Object.hasOwn(EW, iW) || (EW[iW] = !0, mW[iW] = !0, WW.outEdges(iW).forEach((WW => {
            Object.hasOwn(mW, WW.w) ? OW.push(WW) : NW(WW.w)
          })), delete mW[iW])
        }

        function PW(NW) {
          var LW;
          Object.hasOwn(EW, NW) || (EW[NW] = !0, mW[NW] = !0, null == (LW = WW.outEdges(NW)) || LW.forEach((EW => {
            var LW, cW;
            Object.hasOwn(mW, EW.w) || (null == (LW = iW.node(NW)) ? void 0 : LW.rank) > (null == (cW = iW.node(EW.w)) ? void 0 : cW.rank) && function(WW, iW, OW) {
              let mW = new Set;

              function EW(iW) {
                var NW;
                if (WW.sources().includes(iW)) return !0;
                mW.add(iW);
                for (let PW of null != (NW = WW.inEdges(iW)) ? NW : [])
                  if ((PW.v !== OW.v || PW.w !== OW.w) && !mW.has(PW.v) && EW(PW.v)) return !0;
                return !1
              }
              return EW(iW)
            }(WW, EW.w, EW) ? OW.push(EW) : PW(EW.w)
          })), delete mW[NW])
        }
        let LW = NW;
        return iW && "function" == typeof iW.node && (LW = PW), WW.sources().forEach(LW), WW.nodes().forEach(LW), OW
      }(WW, null != iW ? iW : null)).forEach((iW => {
        let OW = WW.edge(iW);
        WW.removeEdge(iW), OW.forwardName = iW.name, OW.reversed = !0, WW.setEdge(iW.w, iW.v, OW, QW("rev"))
      }))
    }

    function Ai(WW) {
      WW.graph().dummyChains = [], WW.edges().forEach((iW => function(WW, iW) {
        let OW, mW, EW, NW = iW.v,
          PW = WW.node(NW).rank,
          LW = iW.w,
          cW = WW.node(LW).rank,
          wW = iW.name,
          tW = WW.edge(iW),
          ZW = tW.labelRank;
        if (cW === PW + 1) return;
        for (WW.removeEdge(iW), EW = 0, ++PW; PW < cW; ++EW, ++PW) tW.points = [], mW = {
          width: 0,
          height: 0,
          edgeLabel: tW,
          edgeObj: iW,
          rank: PW
        }, OW = CW(WW, "edge", mW, "_d"), PW === ZW && (mW.width = tW.width, mW.height = tW.height, mW.dummy = "edge-label", mW.labelpos = tW.labelpos), WW.setEdge(NW, OW, {
          weight: tW.weight
        }, wW), 0 === EW && WW.graph().dummyChains.push(OW), NW = OW;
        WW.setEdge(NW, LW, {
          weight: tW.weight
        }, wW)
      }(WW, iW)))
    }

    function bi(WW) {
      let iW = {};
      WW.sources().forEach((function OW(mW) {
        let EW = WW.node(mW);
        if (Object.hasOwn(iW, mW)) return EW.rank;
        iW[mW] = !0;
        let NW = WW.outEdges(mW),
          PW = NW ? NW.map((iW => null == iW ? Number.POSITIVE_INFINITY : OW(iW.w) - WW.edge(iW).minlen)) : [],
          LW = IW(Math.min, PW);
        return LW === Number.POSITIVE_INFINITY && (LW = 0), EW.rank = LW
      }))
    }

    function ji(WW, iW) {
      return WW.node(iW.w).rank - WW.node(iW.v).rank - WW.edge(iW).minlen
    }
    var Ui = function(WW) {
      let iW = new fW({
          directed: !1
        }),
        OW = WW.nodes();
      if (0 === OW.length) throw new Error("Graph must have at least one node");
      let mW, EW, NW = OW[0],
        PW = WW.nodeCount();
      for (iW.setNode(NW, {}); ki(iW, WW) < PW && (mW = si(iW, WW), mW);) EW = iW.hasNode(mW.v) ? ji(WW, mW) : -ji(WW, mW), Mi(iW, WW, EW);
      return iW
    };

    function ki(WW, iW) {
      return WW.nodes().forEach((function OW(mW) {
        let EW = iW.nodeEdges(mW);
        EW && EW.forEach((EW => {
          let NW = EW.v,
            PW = mW === NW ? EW.w : NW;
          !WW.hasNode(PW) && !ji(iW, EW) && (WW.setNode(PW, {}), WW.setEdge(mW, PW, {}), OW(PW))
        }))
      })), WW.nodeCount()
    }

    function si(WW, iW) {
      return iW.edges().reduce(((OW, mW) => {
        let EW = Number.POSITIVE_INFINITY;
        return WW.hasNode(mW.v) !== WW.hasNode(mW.w) && (EW = ji(iW, mW)), EW < OW[0] ? [EW, mW] : OW
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Mi(WW, iW, OW) {
      WW.nodes().forEach((WW => iW.node(WW).rank += OW))
    }
    var {
      preorder: Ki,
      postorder: Si
    } = UW, Yi = yi;

    function yi(WW) {
      WW = function(WW) {
        let iW = (new fW).setGraph(WW.graph());
        return WW.nodes().forEach((OW => iW.setNode(OW, WW.node(OW)))), WW.edges().forEach((OW => {
          let mW = iW.edge(OW.v, OW.w) || {
              weight: 0,
              minlen: 1
            },
            EW = WW.edge(OW);
          iW.setEdge(OW.v, OW.w, {
            weight: mW.weight + EW.weight,
            minlen: Math.max(mW.minlen, EW.minlen)
          })
        })), iW
      }(WW), bi(WW);
      let iW, OW, mW = Ui(WW);
      for (Hi(mW), Ti(mW, WW); iW = ui(mW);) OW = oi(mW, WW, iW), di(mW, WW, iW, OW)
    }

    function Ti(WW, iW) {
      let OW = Si(WW, WW.nodes());
      OW = OW.slice(0, OW.length - 1), OW.forEach((OW => function(WW, iW, OW) {
        let mW = WW.node(OW).parent,
          EW = WW.edge(OW, mW);
        EW.cutvalue = Ji(WW, iW, OW)
      }(WW, iW, OW)))
    }

    function Ji(WW, iW, OW) {
      let mW = WW.node(OW).parent,
        EW = !0,
        NW = iW.edge(OW, mW),
        PW = 0;
      NW || (EW = !1, NW = iW.edge(mW, OW)), PW = NW.weight;
      let LW = iW.nodeEdges(OW);
      return LW && LW.forEach((NW => {
        let LW = NW.v === OW,
          cW = LW ? NW.w : NW.v;
        if (cW !== mW) {
          let mW = LW === EW,
            wW = iW.edge(NW).weight;
          if (PW += mW ? wW : -wW, function(WW, iW, OW) {
              return WW.hasEdge(iW, OW)
            }(WW, OW, cW)) {
            let iW = WW.edge(OW, cW).cutvalue;
            PW += mW ? -iW : iW
          }
        }
      })), PW
    }

    function Hi(WW, iW) {
      arguments.length < 2 && (iW = WW.nodes()[0]), ni(WW, {}, 1, iW)
    }

    function ni(WW, iW, OW, mW, EW) {
      let NW = OW,
        PW = WW.node(mW);
      iW[mW] = !0;
      let LW = WW.neighbors(mW);
      return LW && LW.forEach((EW => {
        Object.hasOwn(iW, EW) || (OW = ni(WW, iW, OW, EW, mW))
      })), PW.low = NW, PW.lim = OW++, EW ? PW.parent = EW : delete PW.parent, OW
    }

    function ui(WW) {
      return WW.edges().find((iW => WW.edge(iW).cutvalue < 0))
    }

    function oi(WW, iW, OW) {
      let mW = OW.v,
        EW = OW.w;
      iW.hasEdge(mW, EW) || (mW = OW.w, EW = OW.v);
      let NW = WW.node(mW),
        PW = WW.node(EW),
        LW = NW,
        cW = !1;
      return NW.lim > PW.lim && (LW = PW, cW = !0), iW.edges().filter((iW => cW === ei(WW, WW.node(iW.v), LW) && cW !== ei(WW, WW.node(iW.w), LW))).reduce(((WW, OW) => ji(iW, OW) < ji(iW, WW) ? OW : WW))
    }

    function di(WW, iW, OW, mW) {
      let EW = OW.v,
        NW = OW.w;
      WW.removeEdge(EW, NW), WW.setEdge(mW.v, mW.w, {}), Hi(WW), Ti(WW, iW),
        function(WW, iW) {
          let OW = WW.nodes().find((iW => !WW.node(iW).parent));
          if (!OW) return;
          let mW = Ki(WW, [OW]);
          mW = mW.slice(1), mW.forEach((OW => {
            let mW = WW.node(OW).parent,
              EW = iW.edge(OW, mW),
              NW = !1;
            EW || (EW = iW.edge(mW, OW), NW = !0), iW.node(OW).rank = iW.node(mW).rank + (NW ? EW.minlen : -EW.minlen)
          }))
        }(WW, iW)
    }

    function ei(WW, iW, OW) {
      return OW.low <= iW.lim && iW.lim <= OW.lim
    }
    yi.initLowLimValues = Hi, yi.initCutValues = Ti, yi.calcCutValue = Ji, yi.leaveEdge = ui, yi.enterEdge = oi, yi.exchangeEdges = di;
    var vi = function(WW) {
      let iW = WW.graph().ranker;
      if ("function" == typeof iW) return iW(WW);
      switch (iW) {
        case "network-simplex":
        default:
          Di(WW);
          break;
        case "tight-tree":
          ! function(WW) {
            bi(WW), Ui(WW)
          }(WW);
          break;
        case "longest-path":
          gi(WW);
        case "none":
      }
    };
    var gi = bi;

    function Di(WW) {
      Yi(WW)
    }
    var Vi = function(WW) {
      let iW = function(WW) {
          let iW = {},
            OW = 0;

          function mW(EW) {
            let NW = OW;
            WW.children(EW).forEach(mW), iW[EW] = {
              low: NW,
              lim: OW++
            }
          }
          return WW.children(mi).forEach(mW), iW
        }(WW),
        OW = WW.graph();
      if (!Array.isArray(OW.dummyChains)) return;
      OW.dummyChains.forEach((OW => {
        let mW = WW.node(OW),
          EW = mW.edgeObj,
          NW = function(WW, iW, OW, mW) {
            let EW, NW = [],
              PW = [],
              LW = Math.min(iW[OW].low, iW[mW].low),
              cW = Math.max(iW[OW].lim, iW[mW].lim);
            EW = OW;
            do {
              EW = WW.parent(EW), NW.push(EW)
            } while (EW && (iW[EW].low > LW || cW > iW[EW].lim));
            let wW = EW,
              tW = mW;
            for (;
              (tW = WW.parent(tW)) !== wW;) PW.push(tW);
            return {
              path: NW.concat(PW.reverse()),
              lca: wW
            }
          }(WW, iW, EW.v, EW.w),
          PW = NW.path,
          LW = NW.lca,
          cW = 0,
          wW = PW[cW],
          tW = !0;
        for (; OW !== EW.w;) {
          if (mW = WW.node(OW), tW) {
            for (;
              (wW = PW[cW]) !== LW && WW.node(wW).maxRank < mW.rank;) cW++;
            wW === LW && (tW = !1)
          }
          if (!tW) {
            for (; cW < PW.length - 1 && WW.node(PW[cW + 1]).minRank <= mW.rank;) cW++;
            wW = PW[cW]
          }
          void 0 !== wW && WW.setParent(OW, wW), OW = WW.successors(OW)[0]
        }
      }))
    };

    function fi(WW) {
      let iW = CW(WW, "root", {}, "_root"),
        OW = function(WW) {
          let iW = {};

          function OW(mW, EW) {
            let NW = WW.children(mW);
            NW && NW.length && NW.forEach((WW => OW(WW, EW + 1))), iW[mW] = EW
          }
          return WW.children(mi).forEach((WW => OW(WW, 1))), iW
        }(WW),
        mW = Object.values(OW),
        EW = IW(Math.max, mW) - 1,
        NW = 2 * EW + 1;
      WW.graph().nestingRoot = iW, WW.edges().forEach((iW => WW.edge(iW).minlen *= NW));
      let PW = function(WW) {
        return WW.edges().reduce(((iW, OW) => iW + WW.edge(OW).weight), 0)
      }(WW) + 1;
      WW.children(mi).forEach((mW => {
        Ci(WW, iW, NW, PW, EW, OW, mW)
      })), WW.graph().nodeRankFactor = NW
    }

    function Ci(WW, iW, OW, mW, EW, NW, PW) {
      var LW;
      let cW = WW.children(PW);
      if (!cW.length) return void(PW !== iW && WW.setEdge(iW, PW, {
        weight: 0,
        minlen: OW
      }));
      let wW = RW(WW, "_bt"),
        tW = RW(WW, "_bb"),
        ZW = WW.node(PW);
      WW.setParent(wW, PW), ZW.borderTop = wW, WW.setParent(tW, PW), ZW.borderBottom = tW, cW.forEach((LW => {
        var cW;
        Ci(WW, iW, OW, mW, EW, NW, LW);
        let ZW = WW.node(LW),
          xW = ZW.borderTop ? ZW.borderTop : LW,
          lW = ZW.borderBottom ? ZW.borderBottom : LW,
          AW = ZW.borderTop ? mW : 2 * mW,
          bW = xW !== lW ? 1 : EW - (null != (cW = NW[PW]) ? cW : 0) + 1;
        WW.setEdge(wW, xW, {
          weight: AW,
          minlen: bW,
          nestingEdge: !0
        }), WW.setEdge(lW, tW, {
          weight: AW,
          minlen: bW,
          nestingEdge: !0
        })
      })), WW.parent(PW) || WW.setEdge(iW, wW, {
        weight: 0,
        minlen: EW + (null != (LW = NW[PW]) ? LW : 0)
      })
    }
    var Xi = function(WW) {
      WW.children(mi).forEach((function iW(OW) {
        let mW = WW.children(OW),
          EW = WW.node(OW);
        if (mW.length && mW.forEach(iW), EW && Object.hasOwn(EW, "minRank")) {
          EW.borderLeft = [], EW.borderRight = [];
          for (let iW = EW.minRank, mW = EW.maxRank + 1; iW < mW; ++iW) Bi(WW, "borderLeft", "_bl", OW, EW, iW), Bi(WW, "borderRight", "_br", OW, EW, iW)
        }
      }))
    };

    function Bi(WW, iW, OW, mW, EW, NW) {
      let PW = {
          width: 0,
          height: 0,
          rank: NW,
          borderType: iW
        },
        LW = EW[iW][NW - 1],
        cW = CW(WW, "border", PW, OW);
      EW[iW][NW] = cW, WW.setParent(cW, mW), LW && WW.setEdge(LW, cW, {
        weight: 1
      })
    }

    function qi(WW) {
      var iW;
      let OW = null == (iW = WW.graph().rankdir) ? void 0 : iW.toLowerCase();
      ("bt" === OW || "rl" === OW) && function(WW) {
        WW.nodes().forEach((iW => Ii(WW.node(iW)))), WW.edges().forEach((iW => {
          var OW;
          let mW = WW.edge(iW);
          null == (OW = mW.points) || OW.forEach(Ii), Object.hasOwn(mW, "y") && Ii(mW)
        }))
      }(WW), ("lr" === OW || "rl" === OW) && (function(WW) {
        WW.nodes().forEach((iW => ai(WW.node(iW)))), WW.edges().forEach((iW => {
          var OW;
          let mW = WW.edge(iW);
          null == (OW = mW.points) || OW.forEach(ai), Object.hasOwn(mW, "x") && ai(mW)
        }))
      }(WW), Ri(WW))
    }

    function Ri(WW) {
      WW.nodes().forEach((iW => Gi(WW.node(iW)))), WW.edges().forEach((iW => Gi(WW.edge(iW))))
    }

    function Gi(WW) {
      let iW = WW.width;
      WW.width = WW.height, WW.height = iW
    }

    function Ii(WW) {
      WW.y = -WW.y
    }

    function ai(WW) {
      let iW = WW.x;
      WW.x = WW.y, WW.y = iW
    }

    function ri(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        OW = {},
        mW = WW.nodes().filter((iW => !WW.children(iW).length)),
        EW = mW.map((iW => WW.node(iW).rank)),
        NW = Wi(IW(Math.max, EW) + 1).map((() => []));
      return mW.sort(((iW, OW) => WW.node(iW).rank - WW.node(OW).rank)).forEach((function mW(EW) {
        if (OW[EW]) return;
        OW[EW] = !0;
        let PW = WW.node(EW);
        NW[PW.rank].push(EW);
        let LW = WW.successors(EW);
        LW && [...LW].sort(((OW, mW) => function(OW, mW) {
          let EW = WW.node(OW),
            NW = WW.node(mW);
          return Ei(iW, EW, NW)
        }(OW, mW))).forEach(mW)
      })), NW
    }

    function zi(WW, iW) {
      let OW = 0;
      for (let mW = 1; mW < iW.length; ++mW) OW += Fi(WW, iW[mW - 1], iW[mW]);
      return OW
    }

    function Fi(WW, iW, OW) {
      let mW = function(WW, iW) {
          return WW.reduce(((WW, OW, mW) => (WW[OW] = iW[mW], WW)), {})
        }(OW, OW.map(((WW, iW) => iW))),
        EW = iW.flatMap((iW => {
          let OW = WW.outEdges(iW);
          return OW ? OW.map((iW => ({
            pos: mW[iW.w],
            weight: WW.edge(iW).weight
          }))).sort(((WW, iW) => WW.pos - iW.pos)) : []
        })),
        NW = 1;
      for (; NW < OW.length;) NW <<= 1;
      let PW = 2 * NW - 1;
      NW -= 1;
      let LW = new Array(PW).fill(0),
        cW = 0;
      return EW.forEach((WW => {
        let iW = WW.pos + NW;
        LW[iW] += WW.weight;
        let OW = 0;
        for (; iW > 0;) iW % 2 && (OW += LW[iW + 1]), iW = iW - 1 >> 1, LW[iW] += WW.weight;
        cW += WW.weight * OW
      })), cW
    }

    function Qi(WW, iW) {
      let OW = {};
      return WW.forEach(((WW, iW) => {
          let mW = {
            indegree: 0,
            in: [],
            out: [],
            vs: [WW.v],
            i: iW
          };
          void 0 !== WW.barycenter && (mW.barycenter = WW.barycenter, mW.weight = WW.weight), OW[WW.v] = mW
        })), iW.edges().forEach((WW => {
          let iW = OW[WW.v],
            mW = OW[WW.w];
          void 0 !== iW && void 0 !== mW && (mW.indegree++, iW.out.push(mW))
        })),
        function(WW) {
          let iW = [];

          function OW(WW) {
            return iW => {
              iW.merged || (void 0 === iW.barycenter || void 0 === WW.barycenter || iW.barycenter >= WW.barycenter) && function(WW, iW) {
                let OW = 0,
                  mW = 0;
                WW.weight && (OW += WW.barycenter * WW.weight, mW += WW.weight), iW.weight && (OW += iW.barycenter * iW.weight, mW += iW.weight), WW.vs = iW.vs.concat(WW.vs), WW.barycenter = OW / mW, WW.weight = mW, WW.i = Math.min(iW.i, WW.i), iW.merged = !0
              }(WW, iW)
            }
          }

          function mW(iW) {
            return OW => {
              OW.in.push(iW), 0 === --OW.indegree && WW.push(OW)
            }
          }
          for (; WW.length;) {
            let EW = WW.pop();
            iW.push(EW), EW.in.reverse().forEach(OW(EW)), EW.out.forEach(mW(EW))
          }
          return iW.filter((WW => !WW.merged)).map((WW => ii(WW, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(OW).filter((WW => !WW.indegree)))
    }

    function WO(WW, iW, OW, mW, EW) {
      let NW = {},
        PW = null,
        LW = null,
        cW = EW;
      "boolean" == typeof iW ? (cW = iW, NW = {}) : iW && (NW = iW, PW = null != OW ? OW : null, LW = null != mW ? mW : null);
      let wW = function(WW, iW) {
          let OW = {
            lhs: [],
            rhs: []
          };
          return WW.forEach((WW => {
            iW(WW) ? OW.lhs.push(WW) : OW.rhs.push(WW)
          })), OW
        }(WW, (WW => Object.hasOwn(WW, "barycenter"))),
        tW = wW.lhs,
        ZW = wW.rhs.sort(((WW, iW) => iW.i - WW.i)),
        xW = [],
        lW = 0,
        AW = 0,
        bW = 0;
      tW.sort(function(WW, iW, OW) {
        return (mW, EW) => {
          if (mW.barycenter < EW.barycenter) return -1;
          if (mW.barycenter > EW.barycenter) return 1;
          if (WW && ("string" == typeof mW.vs[0] || "string" == typeof EW.vs[0])) {
            let OW = WW.node(mW.vs[0]),
              NW = WW.node(EW.vs[0]),
              PW = Ei(iW, OW, NW);
            if (0 !== PW) return PW
          }
          return OW ? EW.i - mW.i : mW.i - EW.i
        }
      }(LW, PW, !!cW));
      for (let [UW, kW] of Object.entries(NW)) {
        let WW = tW.findIndex((WW => WW.vs[0] === UW));
        tW.splice(WW + 1, 0, kW)
      }
      bW = iO(xW, ZW, bW), tW.forEach((WW => {
        bW += WW.vs.length, xW.push(WW.vs), lW += WW.barycenter * WW.weight, AW += WW.weight, bW = iO(xW, ZW, bW)
      }));
      let jW = {
        vs: xW.flat(1)
      };
      return AW && (jW.barycenter = lW / AW, jW.weight = AW), jW
    }

    function iO(WW, iW, OW) {
      let mW;
      for (; iW.length && (mW = iW[iW.length - 1]).i <= OW;) iW.pop(), WW.push(mW.vs), OW++;
      return OW
    }

    function OO(WW, iW, OW, mW, EW) {
      var NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW;
      let jW = null,
        UW = EW;
      "boolean" == typeof mW ? (UW = mW, jW = null) : void 0 !== mW && (jW = mW);
      let kW = WW.children(iW),
        sW = WW.node(iW),
        MW = sW ? sW.borderLeft : void 0,
        KW = sW ? sW.borderRight : void 0,
        SW = {};
      MW && (kW = kW.filter((WW => WW !== MW && WW !== KW)));
      let YW = function(WW) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((iW => {
          let OW = WW.inEdges(iW);
          if (!OW || !OW.length) return {
            v: iW
          };
          {
            let mW = OW.reduce(((iW, OW) => {
              let mW = WW.edge(OW),
                EW = WW.node(OW.v);
              return {
                sum: iW.sum + mW.weight * EW.order,
                weight: iW.weight + mW.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: iW,
              barycenter: mW.sum / mW.weight,
              weight: mW.weight
            }
          }
        }))
      }(WW, kW);
      YW.forEach((iW => {
        if (WW.children(iW.v).length) {
          let {
            result: mW
          } = OO(WW, iW.v, OW, jW, UW);
          SW[iW.v] = mW, Object.hasOwn(mW, "barycenter") && function(WW, iW) {
            void 0 !== WW.barycenter ? (WW.barycenter = (WW.barycenter * WW.weight + iW.barycenter * iW.weight) / (WW.weight + iW.weight), WW.weight += iW.weight) : (WW.barycenter = iW.barycenter, WW.weight = iW.weight)
          }(iW, mW)
        }
      }));
      let yW = Qi(YW, OW);
      ! function(WW, iW) {
        WW.forEach((WW => {
          WW.vs = WW.vs.flatMap((WW => iW[WW] ? iW[WW].vs : WW))
        }))
      }(yW, SW);
      let TW = {},
        JW = !1;
      for (let HW = 0; HW < yW.length; HW++)
        for (let iW = HW + 1; iW < yW.length; iW++)
          if (yW[HW] && yW[iW] && null != (NW = yW[HW]) && NW.barycenter && null != (PW = yW[iW]) && PW.barycenter && (null == (LW = yW[HW]) ? void 0 : LW.barycenter) === yW[iW].barycenter) {
            let OW = null != (wW = null == (cW = yW[HW]) ? void 0 : cW.vs[0]) ? wW : "",
              mW = null != (ZW = null == (tW = yW[iW]) ? void 0 : tW.vs[0]) ? ZW : "",
              EW = WW.node(OW),
              NW = WW.node(mW);
            if ("edge" === EW.dummy && "edge" === NW.dummy && (null == (xW = EW.edgeObj) ? void 0 : xW.v) === (null == (lW = NW.edgeObj) ? void 0 : lW.v) && (null == (AW = EW.edgeObj) ? void 0 : AW.w) === (null == (bW = NW.edgeObj) ? void 0 : bW.w)) {
              if (EW.edgeLabel.reversed) {
                TW[mW] = yW[HW], yW.splice(HW, 1), HW--;
                break
              }
              TW[OW] = yW[iW], yW.splice(iW, 1), iW--
            } else JW = !0
          } let hW = WO(yW, TW, jW, WW, UW);
      if (MW && KW) {
        hW.vs = [MW, hW.vs, KW].flat(1);
        let iW = WW.predecessors(MW);
        if (iW && iW.length) {
          let OW = WW.node(iW[0]),
            mW = WW.predecessors(KW),
            EW = WW.node(mW[0]);
          Object.hasOwn(hW, "barycenter") || (hW.barycenter = 0, hW.weight = 0), hW.barycenter = (hW.barycenter * hW.weight + OW.order + EW.order) / (hW.weight + 2), hW.weight += 2
        }
      }
      return Object.defineProperty(hW, "result", {
        value: hW,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(hW, "usedBias", {
        value: JW,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), hW
    }

    function mO(WW, iW, OW, mW) {
      mW || (mW = WW.nodes());
      let EW = function(WW) {
          let iW;
          for (; WW.hasNode(iW = QW("_root")););
          return iW
        }(WW),
        NW = new fW({
          compound: !0
        }).setGraph({
          root: EW
        }).setDefaultNodeLabel((iW => WW.node(iW)));
      return mW.forEach((mW => {
        let PW = WW.node(mW),
          LW = WW.parent(mW);
        if (PW.rank === iW || PW.minRank <= iW && iW <= PW.maxRank) {
          NW.setNode(mW), NW.setParent(mW, LW || EW);
          let cW = WW[OW](mW);
          cW && cW.forEach((iW => {
            let OW = iW.v === mW ? iW.w : iW.v,
              EW = NW.edge(OW, mW),
              PW = void 0 !== EW ? EW.weight : 0;
            NW.setEdge(OW, mW, {
              weight: WW.edge(iW).weight + PW
            })
          })), Object.hasOwn(PW, "minRank") && NW.setNode(mW, {
            borderLeft: PW.borderLeft[iW],
            borderRight: PW.borderRight[iW]
          })
        }
      })), NW
    }

    function EO(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof iW.customOrder) return void iW.customOrder(WW, EO);
      let mW = aW(WW),
        EW = NO(WW, Wi(1, mW + 1), "inEdges"),
        NW = NO(WW, Wi(mW - 1, -1, -1), "outEdges"),
        PW = ri(WW, OW);
      if (LO(WW, PW), iW.disableOptimalOrderHeuristic) return;
      let LW, cW = Number.POSITIVE_INFINITY,
        wW = iW.constraints || [];
      for (let tW = 0, ZW = 0; ZW < 4; ++tW, ++ZW) {
        PO(tW % 2 ? EW : NW, tW % 4 >= 2, wW, OW), PW = qW(WW);
        let iW = zi(WW, PW);
        iW < cW ? (ZW = 0, LW = Object.assign({}, PW), cW = iW) : iW === cW && (LW = structuredClone(PW))
      }
      LO(WW, LW)
    }

    function NO(WW, iW, OW) {
      let mW = new Map,
        EW = (WW, iW) => {
          mW.has(WW) || mW.set(WW, []), mW.get(WW).push(iW)
        };
      for (let NW of WW.nodes()) {
        let iW = WW.node(NW);
        if ("number" == typeof iW.rank && EW(iW.rank, NW), "number" == typeof iW.minRank && "number" == typeof iW.maxRank)
          for (let WW = iW.minRank; WW <= iW.maxRank; WW++) WW !== iW.rank && EW(WW, NW)
      }
      return iW.map((function(iW) {
        return mO(WW, iW, OW, mW.get(iW) || [])
      }))
    }

    function PO(WW, iW, OW, mW) {
      let EW = !0,
        NW = new fW;
      WW.forEach((function(WW) {
        OW.forEach((WW => NW.setEdge(WW.left, WW.right)));
        let PW = WW.graph().root,
          {
            result: LW,
            usedBias: cW
          } = OO(WW, PW, NW, mW, EW);
        iW && cW && (EW = !EW), LW.vs.forEach(((iW, OW) => WW.node(iW).order = OW)),
          function(WW, iW, OW) {
            let mW, EW = {};
            OW.forEach((OW => {
              let NW, PW, LW = WW.parent(OW);
              for (; LW;) {
                if (NW = WW.parent(LW), NW ? (PW = EW[NW], EW[NW] = LW) : (PW = mW, mW = LW), PW && PW !== LW) return void iW.setEdge(PW, LW);
                LW = NW
              }
            }))
          }(WW, NW, LW.vs)
      }))
    }

    function LO(WW, iW) {
      Object.values(iW).forEach((iW => iW.forEach(((iW, OW) => WW.node(iW).order = OW))))
    }

    function cO(WW, iW, OW) {
      if (iW > OW) {
        let WW = iW;
        iW = OW, OW = WW
      }
      let mW = WW[iW];
      mW || (WW[iW] = mW = {}), mW[OW] = !0
    }

    function wO(WW, iW, OW) {
      if (iW > OW) {
        let WW = iW;
        iW = OW, OW = WW
      }
      let mW = WW[iW];
      return void 0 !== mW && Object.hasOwn(mW, OW)
    }

    function tO(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        NW = {},
        PW = function(WW, iW, OW, mW) {
          let EW = new fW,
            NW = WW.graph(),
            PW = function(WW, iW, OW) {
              return (mW, EW, NW) => {
                let PW, LW = mW.node(EW),
                  cW = mW.node(NW),
                  wW = 0;
                if (wW += LW.width / 2, Object.hasOwn(LW, "labelpos")) switch (LW.labelpos.toLowerCase()) {
                  case "l":
                    PW = -LW.width / 2;
                    break;
                  case "r":
                    PW = LW.width / 2
                }
                if (PW && (wW += OW ? PW : -PW), PW = void 0, wW += (LW.dummy ? iW : WW) / 2, wW += (cW.dummy ? iW : WW) / 2, wW += cW.width / 2, Object.hasOwn(cW, "labelpos")) switch (cW.labelpos.toLowerCase()) {
                  case "l":
                    PW = cW.width / 2;
                    break;
                  case "r":
                    PW = -cW.width / 2
                }
                return PW && (wW += OW ? PW : -PW), wW
              }
            }(NW.nodesep, NW.edgesep, mW);
          return iW.forEach((iW => {
            let mW;
            iW.forEach((iW => {
              let NW = OW[iW];
              if (void 0 !== NW) {
                if (EW.setNode(NW), void 0 !== mW) {
                  let LW = OW[mW];
                  if (void 0 !== LW) {
                    let OW = EW.edge(LW, NW);
                    EW.setEdge(LW, NW, Math.max(PW(WW, iW, mW), OW || 0))
                  }
                }
                mW = iW
              }
            }))
          })), EW
        }(WW, iW, OW, EW),
        LW = EW ? "borderLeft" : "borderRight";

      function cW(WW, iW) {
        let OW = PW.nodes().slice(),
          mW = {},
          EW = OW.pop();
        for (; EW;) {
          if (mW[EW]) WW(EW);
          else {
            mW[EW] = !0, OW.push(EW);
            for (let WW of iW(EW)) OW.push(WW)
          }
          EW = OW.pop()
        }
      }
      return cW((function(WW) {
        let iW = PW.inEdges(WW);
        NW[WW] = iW ? iW.reduce(((WW, iW) => {
          var OW;
          let mW = null != (OW = NW[iW.v]) ? OW : 0,
            EW = PW.edge(iW);
          return Math.max(WW, mW + (void 0 !== EW ? EW : 0))
        }), 0) : 0
      }), (function(WW) {
        return PW.predecessors(WW) || []
      })), cW((function(iW) {
        let OW = PW.outEdges(iW),
          mW = Number.POSITIVE_INFINITY;
        OW && (mW = OW.reduce(((WW, iW) => {
          let OW = NW[iW.w],
            mW = PW.edge(iW);
          return Math.min(WW, (void 0 !== OW ? OW : 0) - (void 0 !== mW ? mW : 0))
        }), Number.POSITIVE_INFINITY));
        let EW = WW.node(iW);
        mW !== Number.POSITIVE_INFINITY && EW.borderType !== LW && (NW[iW] = Math.max(void 0 !== NW[iW] ? NW[iW] : 0, mW))
      }), (function(WW) {
        return PW.successors(WW) || []
      })), Object.keys(mW).forEach((WW => {
        var iW;
        let mW = OW[WW];
        void 0 !== mW && (NW[WW] = null != (iW = NW[mW]) ? iW : 0)
      })), NW
    }

    function ZO(WW, iW) {
      let OW, mW = qW(WW),
        EW = Object.assign(function(WW, iW) {
          let OW = {};
          return iW.length && iW.reduce((function(iW, mW) {
            let EW = 0,
              NW = 0,
              PW = iW.length,
              LW = mW[mW.length - 1];
            return mW.forEach(((iW, cW) => {
              let wW = function(WW, iW) {
                  if (WW.node(iW).dummy) {
                    let OW = WW.predecessors(iW);
                    if (OW) return OW.find((iW => WW.node(iW).dummy))
                  }
                }(WW, iW),
                tW = wW ? WW.node(wW).order : PW;
              (wW || iW === LW) && (mW.slice(NW, cW + 1).forEach((iW => {
                let mW = WW.predecessors(iW);
                mW && mW.forEach((mW => {
                  let NW = WW.node(mW),
                    PW = NW.order;
                  (PW < EW || tW < PW) && (!NW.dummy || !WW.node(iW).dummy) && cO(OW, mW, iW)
                }))
              })), NW = cW + 1, EW = tW)
            })), mW
          })), OW
        }(WW, mW), function(WW, iW) {
          let OW = {};

          function mW(iW, mW, EW, NW, PW) {
            Wi(mW, EW).forEach((mW => {
              let EW = iW[mW];
              if (void 0 !== EW && WW.node(EW).dummy) {
                let iW = WW.predecessors(EW);
                iW && iW.forEach((iW => {
                  if (void 0 === iW) return;
                  let mW = WW.node(iW);
                  mW.dummy && (mW.order < NW || mW.order > PW) && cO(OW, iW, EW)
                }))
              }
            }))
          }
          return iW.length && iW.reduce((function(iW, OW) {
            let EW = -1,
              NW = -1,
              PW = 0;
            return OW.forEach(((LW, cW) => {
              if ("border" === WW.node(LW).dummy) {
                let iW = WW.predecessors(LW);
                if (iW && iW.length) {
                  let LW = iW[0];
                  if (void 0 === LW) return;
                  NW = WW.node(LW).order, mW(OW, PW, cW, EW, NW), PW = cW, EW = NW
                }
              }
              mW(OW, PW, OW.length, NW, iW.length)
            })), OW
          })), OW
        }(WW, mW)),
        NW = {};
      ["u", "d"].forEach((PW => {
        OW = "u" === PW ? mW : Object.values(mW).reverse(), ["l", "r"].forEach((mW => {
          "r" === mW && (OW = OW.map((WW => Object.values(WW).reverse())));
          let LW = function(WW, iW, OW, mW, EW) {
              let NW = {},
                PW = {},
                LW = {};
              return iW.forEach((WW => {
                WW.forEach(((WW, iW) => {
                  NW[WW] = WW, PW[WW] = WW, LW[WW] = iW
                }))
              })), iW.forEach((iW => {
                let cW = -1,
                  wW = -1,
                  tW = !1,
                  ZW = iW,
                  xW = iW.findIndex((iW => (null == EW ? void 0 : EW.includes(iW)) || xO(iW, WW, EW)));
                xW > 0 && (ZW = [iW[xW], ...iW.slice(0, xW), ...iW.slice(xW + 1)], tW = !0), ZW.forEach((iW => {
                  var ZW;
                  let xW = mW(iW);
                  if (xW && xW.length) {
                    null != EW && EW.includes(iW) && (xW = xW.filter((iW => xO(iW, WW, EW))));
                    let mW = xW.sort(((WW, iW) => {
                        let OW = LW[WW],
                          mW = LW[iW];
                        return (void 0 !== OW ? OW : 0) - (void 0 !== mW ? mW : 0)
                      })),
                      lW = (mW.length - 1) / 2;
                    for (let WW = Math.floor(lW), EW = Math.ceil(lW); WW <= EW; ++WW) {
                      let EW = mW[WW];
                      if (void 0 === EW) continue;
                      let xW = LW[EW];
                      if (void 0 !== xW && PW[iW] === iW && cW < xW && LW[EW] !== wW && !wO(OW, iW, EW)) {
                        let WW = NW[EW];
                        void 0 !== WW && (PW[EW] = iW, PW[iW] = NW[iW] = WW, cW = xW, tW && (cW = -1, wW = null != (ZW = LW[EW]) ? ZW : -1, tW = !1))
                      }
                    }
                  }
                }))
              })), {
                root: NW,
                align: PW
              }
            }(WW, OW, EW, (iW => ("u" === PW ? WW.predecessors(iW) : WW.successors(iW)) || []), iW),
            cW = tO(WW, OW, LW.root, LW.align, "r" === mW);
          "r" === mW && (cW = Oi(cW, (WW => -WW))), NW[PW + mW] = cW
        }))
      }));
      let PW = function(WW, iW) {
        return Object.values(iW).reduce(((iW, OW) => {
          let mW = Number.NEGATIVE_INFINITY,
            EW = Number.POSITIVE_INFINITY;
          Object.entries(OW).forEach((iW => {
            let [OW, NW] = iW, PW = function(WW, iW) {
              return WW.node(iW).width
            }(WW, OW) / 2;
            mW = Math.max(NW + PW, mW), EW = Math.min(NW - PW, EW)
          }));
          let NW = mW - EW;
          return NW < iW[0] && (iW = [NW, OW]), iW
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(WW, NW);
      return function(WW, iW) {
          let OW = Object.values(iW),
            mW = IW(Math.min, OW),
            EW = IW(Math.max, OW);
          ["u", "d"].forEach((OW => {
            ["l", "r"].forEach((NW => {
              let PW = OW + NW,
                LW = WW[PW];
              if (!LW || LW === iW) return;
              let cW = Object.values(LW),
                wW = mW - IW(Math.min, cW);
              "l" !== NW && (wW = EW - IW(Math.max, cW)), wW && (WW[PW] = Oi(LW, (WW => WW + wW)))
            }))
          }))
        }(NW, PW),
        function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            OW = WW.ul;
          return OW ? Oi(OW, ((OW, mW) => {
            var EW, NW;
            if (iW) {
              let OW = iW.toLowerCase(),
                EW = WW[OW];
              if (EW && void 0 !== EW[mW]) return EW[mW]
            }
            let PW = Object.values(WW).map((WW => {
              let iW = WW[mW];
              return void 0 !== iW ? iW : 0
            })).sort(((WW, iW) => WW - iW));
            return ((null != (EW = PW[1]) ? EW : 0) + (null != (NW = PW[2]) ? NW : 0)) / 2
          })) : {}
        }(NW, WW.graph().align)
    }

    function xO(WW, iW, OW) {
      var mW;
      if (!OW) return !1;
      let EW = null == (mW = iW.node(WW)) ? void 0 : mW.edgeObj;
      if (!EW || iW.node(WW).edgeLabel.reversed) return !1;
      let NW = OW.indexOf(null == EW ? void 0 : EW.v),
        PW = OW.indexOf(null == EW ? void 0 : EW.w);
      return -1 !== NW && -1 !== PW && NW === (PW + 1) % OW.length || NW === (PW - 1) % OW.length
    }

    function lO(WW, iW) {
      (function(WW) {
        let iW = qW(WW),
          OW = WW.graph(),
          mW = OW.ranksep,
          EW = OW.rankalign,
          NW = 0;
        iW.forEach((iW => {
          let OW = iW.reduce(((iW, OW) => {
            var mW;
            let EW = null != (mW = WW.node(OW).height) ? mW : 0;
            return iW > EW ? iW : EW
          }), 0);
          iW.forEach((iW => {
            let mW = WW.node(iW);
            mW.y = "top" === EW ? NW + mW.height / 2 : "bottom" === EW ? NW + OW - mW.height / 2 : NW + OW / 2
          })), NW += OW + mW
        }))
      })(WW = XW(WW)), Object.entries(ZO(WW, iW)).forEach((iW => {
        let [OW, mW] = iW;
        return WW.node(OW).x = mW
      }))
    }
    var AO = new WeakMap;

    function bO(WW) {
      return UO(WW, zW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), WW
    }

    function jO(WW, iW, OW) {
      let mW = iW;
      for (; void 0 !== mW;) {
        let iW = WW.parent(mW);
        if (iW === OW) return mW;
        mW = iW
      }
    }

    function UO(WW, iW, OW) {
      var mW;
      let EW = WW.nodes().filter((iW => WW.children(iW).length)),
        NW = {};
      EW.forEach((mW => {
        let EW = WW.node(mW);
        if (EW && EW.rankdir) {
          let PW = new fW({
            multigraph: !0,
            compound: !0
          });
          PW.setGraph({
            rankdir: EW.rankdir
          });
          let LW = WW.children(mW);
          LW.forEach((iW => {
            let OW = {
              ...WW.node(iW)
            };
            PW.setNode(iW, OW);
            let EW = WW.parent(iW);
            EW && EW !== mW && LW.includes(EW) && PW.setParent(iW, EW)
          }));
          let cW = new Set;
          WW.edges().forEach((iW => {
            let OW = jO(WW, iW.v, mW),
              EW = jO(WW, iW.w, mW);
            if (OW && EW && OW !== EW) {
              let mW = `${OW}\0${EW}`;
              cW.has(mW) || (cW.add(mW), PW.setEdge(OW, EW, {
                ...WW.edge(iW)
              }))
            }
          })), UO(PW, iW, OW);
          let wW = HO(PW);
          kO(wW, iW, OW, null), sO(PW, wW);
          let tW = 1 / 0,
            ZW = 1 / 0,
            xW = -1 / 0,
            lW = -1 / 0;
          PW.nodes().forEach((WW => {
            if (WW === mW) return;
            let iW = PW.node(WW);
            iW && "number" == typeof iW.x && "number" == typeof iW.y && "number" == typeof iW.width && "number" == typeof iW.height && (tW = Math.min(tW, iW.x - iW.width / 2), xW = Math.max(xW, iW.x + iW.width / 2), ZW = Math.min(ZW, iW.y - iW.height / 2), lW = Math.max(lW, iW.y + iW.height / 2))
          })), (!isFinite(tW) || !isFinite(ZW) || !isFinite(xW) || !isFinite(lW)) && (tW = ZW = 0, xW = lW = 0);
          let AW = xW - tW,
            bW = lW - ZW;
          NW[mW] = {
            minX: tW,
            Am: ZW,
            maxX: xW,
            bm: lW,
            width: AW,
            height: bW,
            offsetX: tW,
            offsetY: ZW
          }, EW._dagreClusterSubgraph = PW
        }
      }));
      let PW = [],
        LW = new Map;
      EW.forEach((iW => {
        let OW = WW.node(iW);
        OW && OW.rankdir && NW[iW] && LW.set(iW, (WW.children(iW) || []).filter((WW => WW !== iW)))
      }));
      let cW = new Set([...LW.values()].flat()),
        wW = new Map;
      LW.forEach(((iW, OW) => {
        cW.has(OW) || wW.set(OW, (iW => {
          let OW = [],
            mW = (WW.children(iW) || []).filter((WW => WW !== iW));
          for (; mW.length > 0;) {
            let iW = mW.shift();
            OW.push(iW), (WW.children(iW) || []).filter((WW => WW !== iW)).forEach((WW => mW.push(WW)))
          }
          return OW
        })(OW))
      }));
      let tW = new Set([...wW.values()].flat()),
        ZW = WW => {
          for (let [iW, OW] of wW)
            if (OW.includes(WW)) return iW;
          return WW
        },
        xW = [];
      WW.edges().forEach((iW => {
        (tW.has(iW.v) || tW.has(iW.w)) && xW.push({
          edge: iW,
          label: WW.edge(iW)
        })
      }));
      let lW = new Map;
      tW.forEach((iW => {
        let OW = WW.parent(iW);
        lW.set(iW, "string" == typeof OW ? OW : void 0)
      })), wW.forEach(((iW, OW) => {
        let mW = WW.node(OW),
          EW = [];
        iW.forEach((iW => {
          let OW = WW.node(iW);
          OW && (EW.push({
            id: iW,
            node: OW,
            parent: lW.get(iW)
          }), WW.removeNode(iW))
        }));
        let LW = xW.filter((WW => {
            let {
              edge: OW
            } = WW;
            return iW.includes(OW.v) || iW.includes(OW.w)
          })),
          cW = NW[OW];
        mW && (PW.push({
          clusterId: OW,
          subgraph: mW._dagreClusterSubgraph,
          bounds: cW,
          children: iW,
          removedNodes: EW,
          removedEdges: LW
        }), mW.width = cW.width, mW.height = cW.height)
      }));
      let AW = new Set;
      xW.forEach((iW => {
        let {
          edge: OW,
          label: mW
        } = iW, EW = ZW(OW.v), NW = ZW(OW.w);
        if (EW !== NW && WW.hasNode(EW) && WW.hasNode(NW)) {
          let iW = `${EW}\0${NW}`;
          AW.has(iW) || (AW.add(iW), WW.setEdge(EW, NW, {
            ...mW,
            width: 0,
            height: 0
          }))
        }
      }));
      let bW = HO(WW),
        jW = kO(bW, iW, OW, null != (mW = AO.get(WW)) ? mW : null);
      AO.set(WW, jW), sO(WW, bW), AW.forEach((iW => {
        let OW = iW.indexOf("\0"),
          mW = iW.slice(0, OW),
          EW = iW.slice(OW + 1);
        WW.hasEdge(mW, EW) && WW.removeEdge(mW, EW)
      })), PW.forEach((iW => {
        let {
          clusterId: OW,
          subgraph: mW,
          bounds: EW,
          removedNodes: NW,
          removedEdges: PW
        } = iW;
        var LW, cW;
        let wW = WW.node(OW),
          tW = null != (LW = null == wW ? void 0 : wW.x) ? LW : 0,
          ZW = null != (cW = null == wW ? void 0 : wW.y) ? cW : 0,
          xW = (EW.minX + EW.maxX) / 2,
          lW = (EW.Am + EW.bm) / 2;
        NW.forEach((iW => {
          let {
            id: OW,
            node: mW,
            parent: EW
          } = iW;
          WW.setNode(OW, mW), void 0 !== EW && WW.setParent(OW, EW)
        })), PW.forEach((iW => {
          let {
            edge: OW,
            label: mW
          } = iW;
          WW.setEdge(OW, mW)
        })), mW.nodes().forEach((iW => {
          if (iW === OW) return;
          let EW = mW.node(iW),
            NW = WW.node(iW);
          NW && EW && "number" == typeof EW.x && "number" == typeof EW.y && (NW.x = tW + (EW.x - xW), NW.y = ZW + (EW.y - lW))
        })), delete wW._dagreClusterSubgraph
      })), EW.forEach((iW => {
        var OW, mW;
        let EW = WW.node(iW),
          PW = NW[iW];
        if (EW && EW.rankdir && EW._dagreClusterSubgraph && PW) {
          let NW = EW._dagreClusterSubgraph,
            LW = null != (OW = EW.x) ? OW : 0,
            cW = null != (mW = EW.y) ? mW : 0,
            wW = (PW.minX + PW.maxX) / 2,
            tW = (PW.Am + PW.bm) / 2;
          NW.nodes().forEach((OW => {
            if (OW === iW) return;
            let mW = NW.node(OW),
              EW = WW.node(OW);
            if (EW && mW && "number" == typeof mW.x && "number" == typeof mW.y) {
              let WW = mW.x - wW,
                iW = mW.y - tW;
              EW.x = LW + WW, EW.y = cW + iW
            }
          })), delete EW._dagreClusterSubgraph
        }
      }))
    }

    function kO(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var EW, NW;
      let PW = !1 !== (null == OW ? void 0 : OW.useDynamic),
        LW = PW && null != (EW = null == mW ? void 0 : mW.graph) ? EW : null,
        cW = PW && null != (NW = null == mW ? void 0 : mW.rawNodes) ? NW : null;
      iW("    makeSpaceForEdgeLabels", (() => function(WW) {
        let iW = WW.graph();
        iW.ranksep /= 2, WW.edges().forEach((OW => {
          var mW;
          let EW = WW.edge(OW);
          EW.minlen *= 2, "c" !== (null != (mW = EW.labelpos) ? mW : "r").toLowerCase() && ("TB" === iW.rankdir || "BT" === iW.rankdir ? EW.width += EW.labeloffset : EW.height += EW.labeloffset)
        }))
      }(WW))), iW("    removeSelfEdges", (() => function(WW) {
        WW.edges().forEach((iW => {
          if (iW.v === iW.w) {
            let OW = WW.node(iW.v);
            OW.selfEdges || (OW.selfEdges = []), OW.selfEdges.push({
              e: iW,
              label: WW.edge(iW)
            }), WW.removeEdge(iW)
          }
        }))
      }(WW))), iW("    acyclic", (() => li(WW, LW))), iW("    nestingGraph.run", (() => fi(WW))), iW("    rank", (() => vi(XW(WW)))), iW("    injectEdgeLabelProxies", (() => function(WW) {
        WW.edges().forEach((iW => {
          let OW = WW.edge(iW);
          if (OW.width && OW.height) {
            let OW = WW.node(iW.v),
              mW = {
                rank: (WW.node(iW.w).rank - OW.rank) / 2 + OW.rank,
                e: iW
              };
            CW(WW, "edge-proxy", mW, "_ep")
          }
        }))
      }(WW))), iW("    removeEmptyRanks", (() => function(WW) {
        let iW = WW.nodes().map((iW => WW.node(iW).rank)).filter((WW => void 0 !== WW)),
          OW = IW(Math.min, iW),
          mW = [];
        WW.nodes().forEach((iW => {
          let EW = WW.node(iW).rank - OW;
          mW[EW] || (mW[EW] = []), mW[EW].push(iW)
        }));
        let EW = 0,
          NW = WW.graph().nodeRankFactor;
        Array.from(mW).forEach(((iW, OW) => {
          void 0 === iW && OW % NW !== 0 ? --EW : void 0 !== iW && EW && iW.forEach((iW => WW.node(iW).rank += EW))
        }))
      }(WW))), iW("    nestingGraph.cleanup", (() => function(WW) {
        let iW = WW.graph();
        WW.removeNode(iW.nestingRoot), delete iW.nestingRoot, WW.edges().forEach((iW => {
          WW.edge(iW).nestingEdge && WW.removeEdge(iW)
        }))
      }(WW))), iW("    normalizeRanks", (() => function(WW) {
        let iW = WW.nodes().map((iW => {
            let OW = WW.node(iW).rank;
            return void 0 === OW ? Number.MAX_VALUE : OW
          })),
          OW = IW(Math.min, iW);
        WW.nodes().forEach((iW => {
          let mW = WW.node(iW);
          Object.hasOwn(mW, "rank") && (mW.rank -= OW)
        }))
      }(WW))), iW("    assignRankMinMax", (() => function(WW) {
        let iW = 0;
        WW.nodes().forEach((OW => {
          let mW = WW.node(OW);
          mW.borderTop && (mW.minRank = WW.node(mW.borderTop).rank, mW.maxRank = WW.node(mW.borderBottom).rank, iW = Math.max(iW, mW.maxRank))
        })), WW.graph().maxRank = iW
      }(WW))), iW("    removeEdgeLabelProxies", (() => function(WW) {
        WW.nodes().forEach((iW => {
          let OW = WW.node(iW);
          if ("edge-proxy" === OW.dummy) {
            let mW = OW;
            WW.edge(mW.e).labelRank = OW.rank, WW.removeNode(iW)
          }
        }))
      }(WW))), iW("    normalize.run", (() => Ai(WW))), iW("    parentDummyChains", (() => Vi(WW))), iW("    addBorderSegments", (() => Xi(WW))), iW("    order", (() => EO(WW, OW, cW))), iW("    insertSelfEdges", (() => function(WW) {
        qW(WW).forEach((iW => {
          let OW = 0;
          iW.forEach(((iW, mW) => {
            let EW = WW.node(iW);
            "number" != typeof EW.rank && (EW.rank = 0), EW.order = mW + OW, (EW.selfEdges || []).forEach((iW => {
              CW(WW, "selfedge", {
                width: iW.label.width,
                height: iW.label.height,
                rank: EW.rank,
                order: mW + ++OW,
                e: iW.e,
                edgeLabel: iW.label
              }, "_se"), (!Array.isArray(iW.label.points) || 7 !== iW.label.points.length) && (iW.label.points = [{
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
            })), delete EW.selfEdges
          }))
        }))
      }(WW))), iW("    adjustCoordinateSystem", (() => function(WW) {
        var iW;
        let OW = null == (iW = WW.graph().rankdir) ? void 0 : iW.toLowerCase();
        ("lr" === OW || "rl" === OW) && Ri(WW)
      }(WW))), iW("    position", (() => lO(WW, OW.corePath))), iW("    positionSelfEdges", (() => function(WW) {
        WW.nodes().forEach((iW => {
          let OW = WW.node(iW),
            mW = WW => "number" == typeof WW && isFinite(WW);
          if ("selfedge" === OW.dummy) {
            let EW = OW,
              NW = WW.node(EW.e.v),
              PW = mW(null == NW ? void 0 : NW.x) ? NW.x : 0,
              LW = mW(null == NW ? void 0 : NW.y) ? NW.y : 0,
              cW = mW(null == NW ? void 0 : NW.width) ? NW.width : 0,
              wW = mW(null == NW ? void 0 : NW.height) ? NW.height : 0,
              tW = mW(OW.x) ? OW.x : PW,
              ZW = mW(OW.y) ? OW.y : LW,
              xW = cW / 2,
              lW = wW / 2;
            EW.edgeLabel.points = [{
              x: tW + xW,
              y: ZW - lW
            }, {
              x: tW + xW,
              y: ZW - lW
            }, {
              x: tW,
              y: ZW
            }, {
              x: tW - xW,
              y: ZW + lW
            }, {
              x: tW - xW,
              y: ZW + lW
            }, {
              x: tW,
              y: ZW
            }, {
              x: tW,
              y: ZW
            }], EW.edgeLabel.x = tW, EW.edgeLabel.y = ZW, WW.setEdge(EW.e, EW.edgeLabel), WW.removeNode(iW)
          } else OW && Array.isArray(OW.selfEdges) && OW.selfEdges.forEach((WW => {
            if (!Array.isArray(WW.label.points) || 7 !== WW.label.points.length) {
              let iW = mW(OW.x) ? OW.x : 0,
                EW = mW(OW.y) ? OW.y : 0,
                NW = (mW(OW.width) ? OW.width : 0) / 2,
                PW = (mW(OW.height) ? OW.height : 0) / 2;
              WW.label.points = [{
                x: iW + NW,
                y: EW - PW
              }, {
                x: iW + NW,
                y: EW - PW
              }, {
                x: iW,
                y: EW
              }, {
                x: iW - NW,
                y: EW + PW
              }, {
                x: iW - NW,
                y: EW + PW
              }, {
                x: iW,
                y: EW
              }, {
                x: iW,
                y: EW
              }]
            }
          }))
        }))
      }(WW)));
      let wW = JSON.parse(JSON.stringify(WW._nodes));
      return iW("    removeBorderNodes", (() => function(WW) {
        WW.nodes().forEach((iW => {
          if (WW.children(iW).length) {
            let OW = WW.node(iW),
              mW = WW.node(OW.borderTop),
              EW = WW.node(OW.borderBottom),
              NW = WW.node(OW.borderLeft[OW.borderLeft.length - 1]),
              PW = WW.node(OW.borderRight[OW.borderRight.length - 1]);
            OW.width = Math.abs(PW.x - NW.x), OW.height = Math.abs(EW.y - mW.y), OW.x = NW.x + OW.width / 2, OW.y = mW.y + OW.height / 2
          }
        })), WW.nodes().forEach((iW => {
          "border" === WW.node(iW).dummy && WW.removeNode(iW)
        }))
      }(WW))), iW("    normalize.undo", (() => function(WW) {
        WW.graph().dummyChains.forEach((iW => {
          let OW, mW = WW.node(iW),
            EW = mW.edgeLabel;
          for (WW.setEdge(mW.edgeObj, EW); mW.dummy;) OW = WW.successors(iW)[0], WW.removeNode(iW), EW.points.push({
            x: mW.x,
            y: mW.y
          }), "edge-label" === mW.dummy && (EW.x = mW.x, EW.y = mW.y, EW.width = mW.width, EW.height = mW.height), iW = OW, mW = WW.node(iW)
        }))
      }(WW))), iW("    fixupEdgeLabelCoords", (() => function(WW) {
        WW.edges().forEach((iW => {
          let OW = WW.edge(iW);
          if (Object.hasOwn(OW, "x")) switch (("l" === OW.labelpos || "r" === OW.labelpos) && (OW.width -= OW.labeloffset), OW.labelpos) {
            case "l":
              OW.x -= OW.width / 2 + OW.labeloffset;
              break;
            case "r":
              OW.x += OW.width / 2 + OW.labeloffset
          }
        }))
      }(WW))), iW("    undoCoordinateSystem", (() => qi(WW))), iW("    translateGraph", (() => function(WW) {
        let iW = Number.POSITIVE_INFINITY,
          OW = 0,
          mW = Number.POSITIVE_INFINITY,
          EW = 0,
          NW = WW.graph(),
          PW = NW.marginx || 0,
          LW = NW.marginy || 0;

        function cW(WW) {
          let NW = WW.x,
            PW = WW.y,
            LW = WW.width,
            cW = WW.height;
          iW = Math.min(iW, NW - LW / 2), OW = Math.max(OW, NW + LW / 2), mW = Math.min(mW, PW - cW / 2), EW = Math.max(EW, PW + cW / 2)
        }
        WW.nodes().forEach((iW => cW(WW.node(iW)))), WW.edges().forEach((iW => {
          let OW = WW.edge(iW);
          Object.hasOwn(OW, "x") && cW(OW)
        })), iW -= PW, mW -= LW, WW.nodes().forEach((OW => {
          let EW = WW.node(OW);
          EW.x -= iW, EW.y -= mW
        })), WW.edges().forEach((OW => {
          let EW = WW.edge(OW);
          EW.points.forEach((WW => {
            WW.x -= iW, WW.y -= mW
          })), Object.hasOwn(EW, "x") && (EW.x -= iW), Object.hasOwn(EW, "y") && (EW.y -= mW)
        })), NW.width = OW - iW + PW, NW.height = EW - mW + LW
      }(WW))), iW("    assignNodeIntersects", (() => function(WW) {
        WW.edges().forEach((iW => {
          if (iW.v === iW.w) return;
          let OW, mW, EW = WW.edge(iW),
            NW = WW.node(iW.v),
            PW = WW.node(iW.w);
          EW.points ? (OW = EW.points[0], mW = EW.points[EW.points.length - 1]) : (EW.points = [], OW = PW, mW = NW), EW.points.unshift(BW(NW, OW)), EW.points.push(BW(PW, mW))
        }))
      }(WW))), iW("    reversePoints", (() => function(WW) {
        WW.edges().forEach((iW => {
          let OW = WW.edge(iW);
          OW.reversed && OW.points.reverse()
        }))
      }(WW))), iW("    acyclic.undo", (() => function(WW) {
        WW.edges().forEach((iW => {
          let OW = WW.edge(iW);
          if (OW.reversed) {
            WW.removeEdge(iW);
            let mW = OW.forwardName;
            delete OW.reversed, delete OW.forwardName, WW.setEdge(iW.w, iW.v, OW, mW)
          }
        }))
      }(WW))), {
        graph: WW,
        rawNodes: wW
      }
    }

    function sO(WW, iW) {
      WW.nodes().forEach((OW => {
        let mW = WW.node(OW),
          EW = iW.node(OW);
        mW && (mW.x = EW.x, mW.y = EW.y, mW.order = EW.order, mW.rank = EW.rank, iW.children(OW).length && (mW.width = EW.width, mW.height = EW.height))
      })), WW.edges().forEach((OW => {
        let mW = WW.edge(OW),
          EW = iW.edge(OW);
        mW.points = EW.points, Object.hasOwn(EW, "x") && (mW.x = EW.x, mW.y = EW.y)
      })), WW.graph().width = iW.graph().width, WW.graph().height = iW.graph().height
    }
    var MO = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      KO = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      SO = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      YO = ["width", "height", "rank"],
      yO = {
        width: 0,
        height: 0
      },
      TO = ["minlen", "weight", "width", "height", "labeloffset"],
      JO = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      hO = ["labelpos"];

    function HO(WW) {
      let iW = new fW({
          multigraph: !0,
          compound: !0
        }),
        OW = uO(WW.graph());
      return iW.setGraph(Object.assign({}, KO, nO(OW, MO), ii(OW, SO))), WW.nodes().forEach((OW => {
        let mW = nO(uO(WW.node(OW)), YO);
        Object.keys(yO).forEach((WW => {
          void 0 === mW[WW] && (mW[WW] = yO[WW])
        })), iW.setNode(OW, mW);
        let EW = WW.parent(OW);
        void 0 !== EW && iW.setParent(OW, EW)
      })), WW.edges().forEach((OW => {
        let mW = uO(WW.edge(OW));
        iW.setEdge(OW, Object.assign({}, JO, nO(mW, TO), ii(mW, hO)))
      })), iW
    }

    function nO(WW, iW) {
      return Oi(ii(WW, iW), Number)
    }

    function uO(WW) {
      let iW = {};
      return WW && Object.entries(WW).forEach((WW => {
        let [OW, mW] = WW;
        "string" == typeof OW && (OW = OW.toLowerCase()), iW[OW] = mW
      })), iW
    }

    function oO(WW) {
      let iW = qW(WW),
        OW = new fW({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return WW.nodes().forEach((iW => {
        OW.setNode(iW, {
          label: iW
        }), OW.setParent(iW, "layer" + WW.node(iW).rank)
      })), WW.edges().forEach((WW => OW.setEdge(WW.v, WW.w, {}, WW.name))), iW.forEach(((WW, iW) => {
        let mW = "layer" + iW;
        OW.setNode(mW, {
          rank: "same"
        }), WW.reduce(((WW, iW) => (OW.setEdge(WW, iW, {
          style: "invis"
        }), iW)))
      })), OW
    }
    var dO = {
        time: rW,
        notime: zW
      },
      eO = {
        graphlib: NW,
        version: Ni,
        layout: bO,
        debug: oO,
        util: {
          time: rW,
          notime: zW
        }
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);