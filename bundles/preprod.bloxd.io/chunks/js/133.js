/*! For license information please see cwj32u.133.1f293ae3.chunk.js.LICENSE.txt */
export const id = 133;
export const ids = [133];
export const modules = {
  6977: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Graph: () => jH,
      debug: () => IL,
      default: () => lL,
      graphlib: () => SH,
      layout: () => YL,
      util: () => fL,
      version: () => SB
    });
    var AH = Object.defineProperty,
      rH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? AH(HH, BH, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: LH
      }) : HH[BH] = LH)(HH, "symbol" != typeof BH ? BH + "" : BH, LH),
      SH = {};
    ((HH, BH) => {
      for (var LH in BH) AH(HH, LH, {
        get: BH[LH],
        enumerable: !0
      })
    })(SH, {
      Graph: () => jH,
      alg: () => MH
    });
    var hH = Object.defineProperty,
      tH = (HH, BH) => {
        for (var LH in BH) hH(HH, LH, {
          get: BH[LH],
          enumerable: !0
        })
      },
      zH = class {
        constructor(HH) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, HH && (this._isDirected = !("directed" in HH) || HH.directed, this._isMultigraph = "multigraph" in HH && HH.multigraph, this._isCompound = "compound" in HH && HH.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(HH) {
          return this._label = HH, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(HH) {
          return this._defaultNodeLabelFn = "function" != typeof HH ? () => HH : HH, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((HH => 0 === Object.keys(this._in[HH]).length))
        }
        sinks() {
          return this.nodes().filter((HH => 0 === Object.keys(this._out[HH]).length))
        }
        setNodes(HH, BH) {
          return HH.forEach((HH => {
            void 0 !== BH ? this.setNode(HH, BH) : this.setNode(HH)
          })), this
        }
        setNode(HH, BH) {
          return HH in this._nodes ? (arguments.length > 1 && (this._nodes[HH] = BH), this) : (this._nodes[HH] = arguments.length > 1 ? BH : this._defaultNodeLabelFn(HH), this._isCompound && (this._parent[HH] = "\0", this._children[HH] = {}, this._children["\0"][HH] = !0), this._in[HH] = {}, this._preds[HH] = {}, this._out[HH] = {}, this._sucs[HH] = {}, ++this._nodeCount, this)
        }
        node(HH) {
          return this._nodes[HH]
        }
        hasNode(HH) {
          return HH in this._nodes
        }
        removeNode(HH) {
          if (HH in this._nodes) {
            let BH = HH => this.removeEdge(this._edgeObjs[HH]);
            delete this._nodes[HH], this._isCompound && (this._removeFromParentsChildList(HH), delete this._parent[HH], this.children(HH).forEach((HH => {
              this.setParent(HH)
            })), delete this._children[HH]), Object.keys(this._in[HH]).forEach(BH), delete this._in[HH], delete this._preds[HH], Object.keys(this._out[HH]).forEach(BH), delete this._out[HH], delete this._sucs[HH], --this._nodeCount
          }
          return this
        }
        setParent(HH, BH) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === BH) BH = "\0";
          else {
            for (let LH = BH += ""; void 0 !== LH; LH = this.parent(LH))
              if (LH === HH) throw new Error("Setting " + BH + " as parent of " + HH + " would create a cycle");
            this.setNode(BH)
          }
          return this.setNode(HH), this._removeFromParentsChildList(HH), this._parent[HH] = BH, this._children[BH][HH] = !0, this
        }
        parent(HH) {
          if (this._isCompound) {
            let BH = this._parent[HH];
            if ("\0" !== BH) return BH
          }
        }
        children() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let BH = this._children[HH];
            if (BH) return Object.keys(BH)
          } else {
            if ("\0" === HH) return this.nodes();
            if (this.hasNode(HH)) return []
          }
          return []
        }
        predecessors(HH) {
          let BH = this._preds[HH];
          if (BH) return Object.keys(BH)
        }
        successors(HH) {
          let BH = this._sucs[HH];
          if (BH) return Object.keys(BH)
        }
        neighbors(HH) {
          let BH = this.predecessors(HH);
          if (BH) {
            let LH = new Set(BH),
              AH = this.successors(HH);
            if (AH)
              for (let HH of AH) LH.add(HH);
            return Array.from(LH.values())
          }
        }
        isLeaf(HH) {
          var BH;
          let LH;
          return LH = this.isDirected() ? this.successors(HH) : this.neighbors(HH), 0 === (null != (BH = null == LH ? void 0 : LH.length) ? BH : 0)
        }
        filterNodes(HH) {
          let BH = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          BH.setGraph(this.graph()), Object.entries(this._nodes).forEach((LH => {
            let [AH, rH] = LH;
            HH(AH) && BH.setNode(AH, rH)
          })), Object.values(this._edgeObjs).forEach((HH => {
            BH.hasNode(HH.v) && BH.hasNode(HH.w) && BH.setEdge(HH, this.edge(HH))
          }));
          let LH = {},
            AH = HH => {
              let rH = this.parent(HH);
              return !rH || BH.hasNode(rH) ? (LH[HH] = rH, rH) : rH in LH ? LH[rH] : AH(rH)
            };
          return this._isCompound && BH.nodes().forEach((HH => BH.setParent(HH, AH(HH)))), BH
        }
        setDefaultEdgeLabel(HH) {
          return this._defaultEdgeLabelFn = "function" != typeof HH ? () => HH : HH, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(HH, BH) {
          return HH.reduce(((HH, LH) => (void 0 !== BH ? this.setEdge(HH, LH, BH) : this.setEdge(HH, LH), LH))), this
        }
        setEdge(HH, BH, LH, AH) {
          let rH, SH, hH, tH, zH = !1;
          "object" == typeof HH && null !== HH && "v" in HH ? (rH = HH.v, SH = HH.w, hH = HH.name, 2 === arguments.length && (tH = BH, zH = !0)) : (rH = HH, SH = BH, hH = AH, arguments.length > 2 && (tH = LH, zH = !0)), rH = "" + rH, SH = "" + SH, void 0 !== hH && (hH = "" + hH);
          let EH = XH(this._isDirected, rH, SH, hH);
          if (EH in this._edgeLabels) return zH && (this._edgeLabels[EH] = tH), this;
          if (void 0 !== hH && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(rH), this.setNode(SH), this._edgeLabels[EH] = zH ? tH : this._defaultEdgeLabelFn(rH, SH, hH);
          let GH = function(HH, BH, LH, AH) {
            let rH = "" + BH,
              SH = "" + LH;
            if (!HH && rH > SH) {
              let HH = rH;
              rH = SH, SH = HH
            }
            let hH = {
              v: rH,
              w: SH
            };
            return AH && (hH.name = AH), hH
          }(this._isDirected, rH, SH, hH);
          return rH = GH.v, SH = GH.w, Object.freeze(GH), this._edgeObjs[EH] = GH, CH(this._preds[SH], rH), CH(this._sucs[rH], SH), this._in[SH][EH] = GH, this._out[rH][EH] = GH, this._edgeCount++, this
        }
        edge(HH, BH, LH) {
          let AH = 1 === arguments.length ? GH(this._isDirected, HH) : XH(this._isDirected, HH, BH, LH);
          return this._edgeLabels[AH]
        }
        edgeAsObj(HH, BH, LH) {
          let AH = 1 === arguments.length ? this.edge(HH) : this.edge(HH, BH, LH);
          return "object" != typeof AH || null === AH ? {
            label: AH
          } : AH
        }
        hasEdge(HH, BH, LH) {
          return (1 === arguments.length ? GH(this._isDirected, HH) : XH(this._isDirected, HH, BH, LH)) in this._edgeLabels
        }
        removeEdge(HH, BH, LH) {
          let AH = 1 === arguments.length ? GH(this._isDirected, HH) : XH(this._isDirected, HH, BH, LH),
            rH = this._edgeObjs[AH];
          if (rH) {
            let HH = rH.v,
              BH = rH.w;
            delete this._edgeLabels[AH], delete this._edgeObjs[AH], EH(this._preds[BH], HH), EH(this._sucs[HH], BH), delete this._in[BH][AH], delete this._out[HH][AH], this._edgeCount--
          }
          return this
        }
        inEdges(HH, BH) {
          return this.isDirected() ? this.filterEdges(this._in[HH], HH, BH) : this.nodeEdges(HH, BH)
        }
        outEdges(HH, BH) {
          return this.isDirected() ? this.filterEdges(this._out[HH], HH, BH) : this.nodeEdges(HH, BH)
        }
        nodeEdges(HH, BH) {
          if (HH in this._nodes) return this.filterEdges({
            ...this._in[HH],
            ...this._out[HH]
          }, HH, BH)
        }
        _removeFromParentsChildList(HH) {
          delete this._children[this._parent[HH]][HH]
        }
        filterEdges(HH, BH, LH) {
          if (!HH) return;
          let AH = Object.values(HH);
          return LH ? AH.filter((HH => HH.v === BH && HH.w === LH || HH.v === LH && HH.w === BH)) : AH
        }
      };

    function CH(HH, BH) {
      HH[BH] ? HH[BH]++ : HH[BH] = 1
    }

    function EH(HH, BH) {
      void 0 !== HH[BH] && !--HH[BH] && delete HH[BH]
    }

    function XH(HH, BH, LH, AH) {
      let rH = "" + BH,
        SH = "" + LH;
      if (!HH && rH > SH) {
        let HH = rH;
        rH = SH, SH = HH
      }
      return rH + "\x01" + SH + "\x01" + (void 0 === AH ? "\0" : AH)
    }

    function GH(HH, BH) {
      return XH(HH, BH.v, BH.w, BH.name)
    }

    function YH(HH) {
      let BH = {
          options: {
            directed: HH.isDirected(),
            multigraph: HH.isMultigraph(),
            compound: HH.isCompound()
          },
          nodes: uH(HH),
          edges: QH(HH)
        },
        LH = HH.graph();
      return void 0 !== LH && (BH.value = structuredClone(LH)), BH
    }

    function uH(HH) {
      return HH.nodes().map((BH => {
        let LH = HH.node(BH),
          AH = HH.parent(BH),
          rH = {
            v: BH
          };
        return void 0 !== LH && (rH.value = LH), void 0 !== AH && (rH.parent = AH), rH
      }))
    }

    function QH(HH) {
      return HH.edges().map((BH => {
        let LH = HH.edge(BH),
          AH = {
            v: BH.v,
            w: BH.w
          };
        return void 0 !== BH.name && (AH.name = BH.name), void 0 !== LH && (AH.value = LH), AH
      }))
    }

    function WH(HH) {
      let BH = new zH(HH.options);
      return void 0 !== HH.value && BH.setGraph(HH.value), HH.nodes.forEach((HH => {
        BH.setNode(HH.v, HH.value), HH.parent && BH.setParent(HH.v, HH.parent)
      })), HH.edges.forEach((HH => {
        BH.setEdge({
          v: HH.v,
          w: HH.w,
          name: HH.name
        }, HH.value)
      })), BH
    }
    tH({}, {
      read: () => WH,
      write: () => YH
    });
    var MH = {};
    tH(MH, {
      CycleException: () => IH,
      bellmanFord: () => vH,
      components: () => PH,
      dijkstra: () => VH,
      dijkstraAll: () => OH,
      findCycles: () => kH,
      floydWarshall: () => oH,
      isAcyclic: () => lH,
      postorder: () => qH,
      preorder: () => gH,
      prim: () => NH,
      shortestPaths: () => RH,
      tarjan: () => bH,
      topsort: () => fH
    });
    var xH = () => 1;

    function vH(HH, BH, LH, AH) {
      return function(HH, BH, LH, AH) {
        let rH, SH = {},
          hH = 0,
          tH = HH.nodes(),
          zH = function(HH) {
            let BH = SH[HH.v],
              AH = SH[HH.w];
            if (!BH || !AH) return;
            let hH = LH(HH);
            BH.distance + hH < AH.distance && (SH[HH.w] = {
              distance: BH.distance + hH,
              predecessor: HH.v
            }, rH = !0)
          },
          CH = function() {
            tH.forEach((function(HH) {
              AH(HH).forEach((function(BH) {
                let LH = BH.v === HH ? BH.v : BH.w,
                  AH = LH === BH.v ? BH.w : BH.v;
                zH({
                  v: LH,
                  w: AH
                })
              }))
            }))
          };
        tH.forEach((function(HH) {
          let LH = HH === BH ? 0 : Number.POSITIVE_INFINITY;
          SH[HH] = {
            distance: LH,
            predecessor: ""
          }
        }));
        let EH = tH.length;
        for (let XH = 1; XH < EH && (rH = !1, hH++, CH(), rH); XH++);
        if (hH === EH - 1 && (rH = !1, CH(), rH)) throw new Error("The graph contains a negative weight cycle");
        return SH
      }(HH, String(BH), LH || xH, AH || function(BH) {
        var LH;
        return null != (LH = HH.outEdges(BH)) ? LH : []
      })
    }

    function PH(HH) {
      let BH, LH = {},
        AH = [];

      function rH(AH) {
        var SH, hH;
        AH in LH || (LH[AH] = !0, BH.push(AH), null == (SH = HH.successors(AH)) || SH.forEach(rH), null == (hH = HH.predecessors(AH)) || hH.forEach(rH))
      }
      return HH.nodes().forEach((function(HH) {
        BH = [], rH(HH), BH.length && AH.push(BH)
      })), AH
    }
    var TH = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((HH => HH.key))
        }
        has(HH) {
          return HH in this._keyIndices
        }
        priority(HH) {
          let BH = this._keyIndices[HH];
          if (void 0 !== BH) return this._arr[BH].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(HH, BH) {
          let LH = this._keyIndices,
            AH = String(HH);
          if (!(AH in LH)) {
            let HH = this._arr,
              rH = HH.length;
            return LH[AH] = rH, HH.push({
              key: AH,
              priority: BH
            }), this._decrease(rH), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let HH = this._arr.pop();
          return delete this._keyIndices[HH.key], this._heapify(0), HH.key
        }
        decrease(HH, BH) {
          let LH = this._keyIndices[HH];
          if (void 0 === LH) throw new Error(`Key not found: ${HH}`);
          let AH = this._arr[LH].priority;
          if (BH > AH) throw new Error(`New priority is greater than current priority. Key: ${HH} Old: ${AH} New: ${BH}`);
          this._arr[LH].priority = BH, this._decrease(LH)
        }
        _heapify(HH) {
          let BH = this._arr,
            LH = 2 * HH,
            AH = LH + 1,
            rH = HH;
          LH < BH.length && (rH = BH[LH].priority < BH[rH].priority ? LH : rH, AH < BH.length && (rH = BH[AH].priority < BH[rH].priority ? AH : rH), rH !== HH && (this._swap(HH, rH), this._heapify(rH)))
        }
        _decrease(HH) {
          let BH, LH = this._arr,
            AH = LH[HH].priority;
          for (; 0 !== HH && (BH = HH >> 1, !(LH[BH].priority < AH));) this._swap(HH, BH), HH = BH
        }
        _swap(HH, BH) {
          let LH = this._arr,
            AH = this._keyIndices,
            rH = LH[HH],
            SH = LH[BH];
          LH[HH] = SH, LH[BH] = rH, AH[SH.key] = HH, AH[rH.key] = BH
        }
      },
      UH = () => 1;

    function VH(HH, BH, LH, AH) {
      return function(HH, BH, LH, AH) {
        let rH, SH, hH = {},
          tH = new TH,
          zH = function(HH) {
            let BH = HH.v !== rH ? HH.v : HH.w,
              AH = hH[BH];
            if (!AH) return;
            let zH = LH(HH),
              CH = SH.distance + zH;
            if (zH < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + HH + " Weight: " + zH);
            CH < AH.distance && (AH.distance = CH, AH.predecessor = rH, tH.decrease(BH, CH))
          };
        for (HH.nodes().forEach((function(HH) {
            let LH = HH === BH ? 0 : Number.POSITIVE_INFINITY;
            hH[HH] = {
              distance: LH,
              predecessor: ""
            }, tH.add(HH, LH)
          })); tH.size() > 0;) {
          rH = tH.removeMin();
          let HH = hH[rH];
          if (!HH || HH.distance === Number.POSITIVE_INFINITY) break;
          SH = HH, AH(rH).forEach(zH)
        }
        return hH
      }(HH, String(BH), LH || UH, AH || function(BH) {
        var LH;
        return null != (LH = HH.outEdges(BH)) ? LH : []
      })
    }

    function OH(HH, BH, LH) {
      return HH.nodes().reduce((function(AH, rH) {
        return AH[rH] = VH(HH, rH, BH, LH), AH
      }), {})
    }

    function bH(HH) {
      let BH = 0,
        LH = [],
        AH = {},
        rH = [];

      function SH(hH) {
        var tH;
        let zH = AH[hH] = {
          onStack: !0,
          lowlink: BH,
          index: BH++
        };
        if (LH.push(hH), null == (tH = HH.successors(hH)) || tH.forEach((function(HH) {
            if (HH in AH) {
              let BH = AH[HH];
              null != BH && BH.onStack && (zH.lowlink = Math.min(zH.lowlink, BH.index))
            } else {
              SH(HH);
              let BH = AH[HH];
              BH && (zH.lowlink = Math.min(zH.lowlink, BH.lowlink))
            }
          })), zH.lowlink === zH.index) {
          let HH, BH = [];
          do {
            HH = LH.pop();
            let rH = AH[HH];
            rH && (rH.onStack = !1), BH.push(HH)
          } while (hH !== HH);
          rH.push(BH)
        }
      }
      return HH.nodes().forEach((function(HH) {
        HH in AH || SH(HH)
      })), rH
    }

    function kH(HH) {
      return bH(HH).filter((function(BH) {
        var LH;
        let AH = BH[0];
        return !!AH && (BH.length > 1 || 1 === BH.length && (null != (LH = HH.outEdges(AH, AH)) ? LH : []).length > 0)
      }))
    }
    var mH = () => 1;

    function oH(HH, BH, LH) {
      return function(HH, BH, LH) {
        let AH = {},
          rH = HH.nodes();
        return rH.forEach((function(HH) {
          let SH = {};
          AH[HH] = SH, SH[HH] = {
            distance: 0,
            predecessor: ""
          }, rH.forEach((function(BH) {
            HH !== BH && (SH[BH] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), LH(HH).forEach((function(LH) {
            let AH = LH.v === HH ? LH.w : LH.v,
              rH = BH(LH);
            SH[AH] = {
              distance: rH,
              predecessor: HH
            }
          }))
        })), rH.forEach((function(HH) {
          let BH = AH[HH];
          BH && rH.forEach((function(LH) {
            let SH = AH[LH];
            SH && rH.forEach((function(LH) {
              let AH = SH[HH],
                rH = BH[LH],
                hH = SH[LH];
              if (AH && rH && hH) {
                let HH = AH.distance + rH.distance;
                HH < hH.distance && (hH.distance = HH, hH.predecessor = rH.predecessor)
              }
            }))
          }))
        })), AH
      }(HH, BH || mH, LH || function(BH) {
        var LH;
        return null != (LH = HH.outEdges(BH)) ? LH : []
      })
    }
    var IH = class extends Error {
      constructor(HH) {
        super(HH), this.name = "CycleException"
      }
    };

    function fH(HH) {
      let BH = {},
        LH = {},
        AH = [];
      if (HH.sinks().forEach((function rH(SH) {
          var hH;
          if (SH in LH) throw new IH;
          SH in BH || (LH[SH] = !0, BH[SH] = !0, null == (hH = HH.predecessors(SH)) || hH.forEach(rH), delete LH[SH], AH.push(SH))
        })), Object.keys(BH).length !== HH.nodeCount()) throw new IH;
      return AH
    }

    function lH(HH) {
      try {
        fH(HH)
      } catch (BH) {
        if (BH instanceof IH) return !1;
        throw BH
      }
      return !0
    }

    function KH(HH, BH, LH, AH, rH) {
      Array.isArray(BH) || (BH = [BH]);
      let SH = BH => {
          var LH;
          return null != (LH = HH.isDirected() ? HH.successors(BH) : HH.neighbors(BH)) ? LH : []
        },
        hH = {};
      return BH.forEach((function(BH) {
        if (!HH.hasNode(BH)) throw new Error("Graph does not have node: " + BH);
        rH = cH(HH, BH, "post" === LH, hH, SH, AH, rH)
      })), rH
    }

    function cH(HH, BH, LH, AH, rH, SH, hH) {
      return BH in AH || (AH[BH] = !0, LH || (hH = SH(hH, BH)), rH(BH).forEach((function(BH) {
        hH = cH(HH, BH, LH, AH, rH, SH, hH)
      })), LH && (hH = SH(hH, BH))), hH
    }

    function eH(HH, BH, LH) {
      return KH(HH, BH, LH, (function(HH, BH) {
        return HH.push(BH), HH
      }), [])
    }

    function qH(HH, BH) {
      return eH(HH, BH, "post")
    }

    function gH(HH, BH) {
      return eH(HH, BH, "pre")
    }

    function NH(HH, BH) {
      var LH;
      let AH, rH = new zH,
        SH = {},
        hH = new TH;

      function tH(HH) {
        let LH = HH.v === AH ? HH.w : HH.v,
          rH = hH.priority(LH);
        if (void 0 !== rH) {
          let tH = BH(HH);
          tH < rH && (SH[LH] = AH, hH.decrease(LH, tH))
        }
      }
      if (0 === HH.nodeCount()) return rH;
      HH.nodes().forEach((function(HH) {
        hH.add(HH, Number.POSITIVE_INFINITY), rH.setNode(HH)
      }));
      let CH = HH.nodes()[0];
      void 0 !== CH && hH.decrease(CH, 0);
      let EH = !1;
      for (; hH.size() > 0;) {
        if (AH = hH.removeMin(), AH in SH) rH.setEdge(AH, SH[AH]);
        else {
          if (EH) throw new Error("Input graph is not connected: " + HH);
          EH = !0
        }
        null == (LH = HH.nodeEdges(AH)) || LH.forEach(tH)
      }
      return rH
    }

    function RH(HH, BH, LH, AH) {
      return function(HH, BH, LH, AH) {
        if (void 0 === LH) return VH(HH, BH, LH, AH);
        let rH = !1,
          SH = HH.nodes();
        for (let hH = 0; hH < SH.length; hH++) {
          let tH = SH[hH];
          if (void 0 === tH) continue;
          let zH = AH(tH);
          for (let HH = 0; HH < zH.length; HH++) {
            let BH = zH[HH];
            if (!BH) continue;
            let AH = BH.v === tH ? BH.v : BH.w;
            LH({
              v: AH,
              w: AH === BH.v ? BH.w : BH.v
            }) < 0 && (rH = !0)
          }
          if (rH) return vH(HH, BH, LH, AH)
        }
        return VH(HH, BH, LH, AH)
      }(HH, BH, LH, null != AH ? AH : BH => {
        var LH;
        return null != (LH = HH.outEdges(BH)) ? LH : []
      })
    }
    var jH = zH;

    function nH(HH, BH, LH, AH) {
      let rH = AH;
      for (; HH.hasNode(rH);) rH = yH(AH);
      return LH.dummy = BH, HH.setNode(rH, LH), rH
    }

    function FH(HH) {
      let BH = new jH({
        multigraph: HH.isMultigraph()
      }).setGraph(HH.graph());
      return HH.nodes().forEach((LH => {
        HH.children(LH).length || BH.setNode(LH, HH.node(LH))
      })), HH.edges().forEach((LH => {
        BH.setEdge(LH, HH.edge(LH))
      })), BH
    }

    function DH(HH, BH) {
      let LH, AH, rH = HH.x,
        SH = HH.y,
        hH = BH.x - rH,
        tH = BH.y - SH,
        zH = HH.width / 2,
        CH = HH.height / 2;
      if (!hH && !tH) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(tH) * zH > Math.abs(hH) * CH ? (tH < 0 && (CH = -CH), LH = CH * hH / tH, AH = CH) : (hH < 0 && (zH = -zH), LH = zH, AH = zH * tH / hH), {
        x: rH + LH,
        y: SH + AH
      }
    }

    function wH(HH) {
      let BH = HB(sH(HH) + 1).map((() => []));
      return HH.nodes().forEach((LH => {
        let AH = HH.node(LH),
          rH = AH.rank;
        void 0 !== rH && (BH[rH] || (BH[rH] = []), BH[rH][AH.order] = LH)
      })), BH
    }

    function ZH(HH, BH, LH, AH) {
      let rH = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (rH.rank = LH, rH.order = AH), nH(HH, "border", rH, BH)
    }
    var dH = 65535;

    function aH(HH, BH) {
      if (BH.length > dH) {
        let LH = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dH,
            LH = [];
          for (let AH = 0; AH < HH.length; AH += BH) {
            let rH = HH.slice(AH, AH + BH);
            LH.push(rH)
          }
          return LH
        }(BH);
        return HH(...LH.map((BH => HH(...BH))))
      }
      return HH(...BH)
    }

    function sH(HH) {
      let BH = HH.nodes().map((BH => {
        let LH = HH.node(BH).rank;
        return void 0 === LH ? Number.MIN_VALUE : LH
      }));
      return aH(Math.max, BH)
    }

    function JH(HH, BH) {
      let LH = Date.now();
      try {
        return BH()
      } finally {
        console.log(HH + " time: " + (Date.now() - LH) + "ms")
      }
    }

    function iH(HH, BH) {
      return BH()
    }
    var pH = 0;

    function yH(HH) {
      return HH + "" + ++pH
    }

    function HB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == BH && (BH = HH, HH = 0);
      let AH = HH => HH < BH;
      LH < 0 && (AH = HH => BH < HH);
      let rH = [];
      for (let SH = HH; AH(SH); SH += LH) rH.push(SH);
      return rH
    }

    function BB(HH, BH) {
      let LH = {};
      for (let AH of BH) void 0 !== HH[AH] && (LH[AH] = HH[AH]);
      return LH
    }

    function LB(HH, BH) {
      let LH;
      return LH = "string" == typeof BH ? HH => HH[BH] : BH, Object.entries(HH).reduce(((HH, BH) => {
        let [AH, rH] = BH;
        return HH[AH] = LH(rH, AH), HH
      }), {})
    }
    var AB = "\0";

    function rB(HH, BH, LH) {
      var AH, rH, SH, hH, tH, zH;
      if (!(HH && BH && LH && "edge" === BH.dummy && "edge" === LH.dummy && BH.edgeObj && LH.edgeObj && HH[BH.edgeObj.v] && HH[LH.edgeObj.v] && HH[BH.edgeObj.w] && HH[LH.edgeObj.w])) return 0;
      let CH = !0;
      BH.edgeObj.w === LH.edgeObj.w && (CH = !1);
      let EH = CH ? null != (rH = null == (AH = HH[BH.edgeObj.v]) ? void 0 : AH.rank) ? rH : NaN : null != (hH = null == (SH = HH[BH.edgeObj.w]) ? void 0 : SH.rank) ? hH : NaN,
        XH = Object.entries(HH).find((HH => {
          var LH, AH;
          return (null == (LH = HH[1].edgeObj) ? void 0 : LH.v) === BH.edgeObj.v && (null == (AH = HH[1].edgeObj) ? void 0 : AH.w) === BH.edgeObj.w && HH[1].rank === EH
        })),
        GH = Object.entries(HH).find((HH => {
          var BH, AH;
          return (null == (BH = HH[1].edgeObj) ? void 0 : BH.v) === LH.edgeObj.v && (null == (AH = HH[1].edgeObj) ? void 0 : AH.w) === LH.edgeObj.w && HH[1].rank === EH
        }));
      if (!XH || !GH) return 0;
      let YH = null != (tH = XH[1].order) ? tH : NaN,
        uH = null != (zH = GH[1].order) ? zH : NaN;
      return isNaN(YH - uH) ? 0 : YH - uH
    }
    var SB = "3.1.1";

    function hB(HH) {
      HH._prev._next = HH._next, HH._next._prev = HH._prev, delete HH._next, delete HH._prev
    }

    function tB(HH, BH) {
      if ("_next" !== HH && "_prev" !== HH) return BH
    }
    var zB = class {
        constructor() {
          rH(this, "_sentinel");
          let HH = {};
          HH._next = HH._prev = HH, this._sentinel = HH
        }
        dequeue() {
          let HH = this._sentinel,
            BH = HH._prev;
          if (BH !== HH) return hB(BH), BH
        }
        enqueue(HH) {
          let BH = this._sentinel;
          HH._prev && HH._next && hB(HH), HH._next = BH._next, BH._next._prev = HH, BH._next = HH, HH._prev = BH
        }
        toString() {
          let HH = [],
            BH = this._sentinel,
            LH = BH._prev;
          for (; LH !== BH;) HH.push(JSON.stringify(LH, tB)), LH = LH._prev;
          return "[" + HH.join(", ") + "]"
        }
      },
      CB = () => 1;

    function EB(HH, BH) {
      if (HH.nodeCount() <= 1) return [];
      let LH = function(HH, BH) {
        let LH = new jH,
          AH = 0,
          rH = 0;
        HH.nodes().forEach((HH => {
          LH.setNode(HH, {
            v: HH,
            in: 0,
            out: 0
          })
        })), HH.edges().forEach((HH => {
          let SH = LH.edge(HH.v, HH.w) || 0,
            hH = BH(HH),
            tH = SH + hH;
          LH.setEdge(HH.v, HH.w, tH);
          let zH = LH.node(HH.v),
            CH = LH.node(HH.w);
          rH = Math.max(rH, zH.out += hH), AH = Math.max(AH, CH.in += hH)
        }));
        let SH = function(HH) {
            let BH = [];
            for (let LH = 0; LH < HH; LH++) BH.push(LH);
            return BH
          }(rH + AH + 3).map((() => new zB)),
          hH = AH + 1;
        return LH.nodes().forEach((HH => {
          GB(SH, hH, LH.node(HH))
        })), {
          graph: LH,
          buckets: SH,
          zeroIdx: hH
        }
      }(HH, BH || CB);
      return function(HH, BH, LH) {
        var AH;
        let rH, SH = [],
          hH = BH[BH.length - 1],
          tH = BH[0];
        for (; HH.nodeCount();) {
          for (; rH = tH.dequeue();) XB(HH, BH, LH, rH);
          for (; rH = hH.dequeue();) XB(HH, BH, LH, rH);
          if (HH.nodeCount())
            for (let hH = BH.length - 2; hH > 0; --hH)
              if (rH = null == (AH = BH[hH]) ? void 0 : AH.dequeue(), rH) {
                SH = SH.concat(XB(HH, BH, LH, rH, !0) || []);
                break
              }
        }
        return SH
      }(LH.graph, LH.buckets, LH.zeroIdx).flatMap((BH => HH.outEdges(BH.v, BH.w) || []))
    }

    function XB(HH, BH, LH, AH, rH) {
      let SH = [],
        hH = rH ? SH : void 0;
      return (HH.inEdges(AH.v) || []).forEach((AH => {
        let hH = HH.edge(AH),
          tH = HH.node(AH.v);
        rH && SH.push({
          v: AH.v,
          w: AH.w
        }), tH.out -= hH, GB(BH, LH, tH)
      })), (HH.outEdges(AH.v) || []).forEach((AH => {
        let rH = HH.edge(AH),
          SH = AH.w,
          hH = HH.node(SH);
        hH.in -= rH, GB(BH, LH, hH)
      })), HH.removeNode(AH.v), hH
    }

    function GB(HH, BH, LH) {
      var AH, rH, SH;
      LH.out ? LH.in ? null == (SH = HH[LH.out - LH.in + BH]) || SH.enqueue(LH) : null == (rH = HH[HH.length - 1]) || rH.enqueue(LH) : null == (AH = HH[0]) || AH.enqueue(LH)
    }

    function YB(HH, BH) {
      var LH;
      ("greedy" === HH.graph().acyclicer ? EB(HH, (LH = HH, HH => LH.edge(HH).weight)) : function(HH, BH) {
        let LH = [],
          AH = {},
          rH = {};

        function SH(BH) {
          Object.hasOwn(rH, BH) || (rH[BH] = !0, AH[BH] = !0, HH.outEdges(BH).forEach((HH => {
            Object.hasOwn(AH, HH.w) ? LH.push(HH) : SH(HH.w)
          })), delete AH[BH])
        }

        function hH(SH) {
          var tH;
          Object.hasOwn(rH, SH) || (rH[SH] = !0, AH[SH] = !0, null == (tH = HH.outEdges(SH)) || tH.forEach((rH => {
            var tH, zH;
            Object.hasOwn(AH, rH.w) || (null == (tH = BH.node(SH)) ? void 0 : tH.rank) > (null == (zH = BH.node(rH.w)) ? void 0 : zH.rank) && function(HH, BH, LH) {
              let AH = new Set;

              function rH(BH) {
                var SH;
                if (HH.sources().includes(BH)) return !0;
                AH.add(BH);
                for (let hH of null != (SH = HH.inEdges(BH)) ? SH : [])
                  if ((hH.v !== LH.v || hH.w !== LH.w) && !AH.has(hH.v) && rH(hH.v)) return !0;
                return !1
              }
              return rH(BH)
            }(HH, rH.w, rH) ? LH.push(rH) : hH(rH.w)
          })), delete AH[SH])
        }
        let tH = SH;
        return BH && "function" == typeof BH.node && (tH = hH), HH.sources().forEach(tH), HH.nodes().forEach(tH), LH
      }(HH, null != BH ? BH : null)).forEach((BH => {
        let LH = HH.edge(BH);
        HH.removeEdge(BH), LH.forwardName = BH.name, LH.reversed = !0, HH.setEdge(BH.w, BH.v, LH, yH("rev"))
      }))
    }

    function uB(HH) {
      HH.graph().dummyChains = [], HH.edges().forEach((BH => function(HH, BH) {
        let LH, AH, rH, SH = BH.v,
          hH = HH.node(SH).rank,
          tH = BH.w,
          zH = HH.node(tH).rank,
          CH = BH.name,
          EH = HH.edge(BH),
          XH = EH.labelRank;
        if (zH === hH + 1) return;
        for (HH.removeEdge(BH), rH = 0, ++hH; hH < zH; ++rH, ++hH) EH.points = [], AH = {
          width: 0,
          height: 0,
          edgeLabel: EH,
          edgeObj: BH,
          rank: hH
        }, LH = nH(HH, "edge", AH, "_d"), hH === XH && (AH.width = EH.width, AH.height = EH.height, AH.dummy = "edge-label", AH.labelpos = EH.labelpos), HH.setEdge(SH, LH, {
          weight: EH.weight
        }, CH), 0 === rH && HH.graph().dummyChains.push(LH), SH = LH;
        HH.setEdge(SH, tH, {
          weight: EH.weight
        }, CH)
      }(HH, BH)))
    }

    function QB(HH) {
      let BH = {};
      HH.sources().forEach((function LH(AH) {
        let rH = HH.node(AH);
        if (Object.hasOwn(BH, AH)) return rH.rank;
        BH[AH] = !0;
        let SH = HH.outEdges(AH),
          hH = SH ? SH.map((BH => null == BH ? Number.POSITIVE_INFINITY : LH(BH.w) - HH.edge(BH).minlen)) : [],
          tH = aH(Math.min, hH);
        return tH === Number.POSITIVE_INFINITY && (tH = 0), rH.rank = tH
      }))
    }

    function WB(HH, BH) {
      return HH.node(BH.w).rank - HH.node(BH.v).rank - HH.edge(BH).minlen
    }
    var MB = function(HH) {
      let BH = new jH({
          directed: !1
        }),
        LH = HH.nodes();
      if (0 === LH.length) throw new Error("Graph must have at least one node");
      let AH, rH, SH = LH[0],
        hH = HH.nodeCount();
      for (BH.setNode(SH, {}); xB(BH, HH) < hH && (AH = vB(BH, HH), AH);) rH = BH.hasNode(AH.v) ? WB(HH, AH) : -WB(HH, AH), PB(BH, HH, rH);
      return BH
    };

    function xB(HH, BH) {
      return HH.nodes().forEach((function LH(AH) {
        let rH = BH.nodeEdges(AH);
        rH && rH.forEach((rH => {
          let SH = rH.v,
            hH = AH === SH ? rH.w : SH;
          !HH.hasNode(hH) && !WB(BH, rH) && (HH.setNode(hH, {}), HH.setEdge(AH, hH, {}), LH(hH))
        }))
      })), HH.nodeCount()
    }

    function vB(HH, BH) {
      return BH.edges().reduce(((LH, AH) => {
        let rH = Number.POSITIVE_INFINITY;
        return HH.hasNode(AH.v) !== HH.hasNode(AH.w) && (rH = WB(BH, AH)), rH < LH[0] ? [rH, AH] : LH
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function PB(HH, BH, LH) {
      HH.nodes().forEach((HH => BH.node(HH).rank += LH))
    }
    var {
      preorder: TB,
      postorder: UB
    } = MH, VB = OB;

    function OB(HH) {
      HH = function(HH) {
        let BH = (new jH).setGraph(HH.graph());
        return HH.nodes().forEach((LH => BH.setNode(LH, HH.node(LH)))), HH.edges().forEach((LH => {
          let AH = BH.edge(LH.v, LH.w) || {
              weight: 0,
              minlen: 1
            },
            rH = HH.edge(LH);
          BH.setEdge(LH.v, LH.w, {
            weight: AH.weight + rH.weight,
            minlen: Math.max(AH.minlen, rH.minlen)
          })
        })), BH
      }(HH), QB(HH);
      let BH, LH, AH = MB(HH);
      for (mB(AH), bB(AH, HH); BH = IB(AH);) LH = fB(AH, HH, BH), lB(AH, HH, BH, LH)
    }

    function bB(HH, BH) {
      let LH = UB(HH, HH.nodes());
      LH = LH.slice(0, LH.length - 1), LH.forEach((LH => function(HH, BH, LH) {
        let AH = HH.node(LH).parent,
          rH = HH.edge(LH, AH);
        rH.cutvalue = kB(HH, BH, LH)
      }(HH, BH, LH)))
    }

    function kB(HH, BH, LH) {
      let AH = HH.node(LH).parent,
        rH = !0,
        SH = BH.edge(LH, AH),
        hH = 0;
      SH || (rH = !1, SH = BH.edge(AH, LH)), hH = SH.weight;
      let tH = BH.nodeEdges(LH);
      return tH && tH.forEach((SH => {
        let tH = SH.v === LH,
          zH = tH ? SH.w : SH.v;
        if (zH !== AH) {
          let AH = tH === rH,
            CH = BH.edge(SH).weight;
          if (hH += AH ? CH : -CH, function(HH, BH, LH) {
              return HH.hasEdge(BH, LH)
            }(HH, LH, zH)) {
            let BH = HH.edge(LH, zH).cutvalue;
            hH += AH ? -BH : BH
          }
        }
      })), hH
    }

    function mB(HH, BH) {
      arguments.length < 2 && (BH = HH.nodes()[0]), oB(HH, {}, 1, BH)
    }

    function oB(HH, BH, LH, AH, rH) {
      let SH = LH,
        hH = HH.node(AH);
      BH[AH] = !0;
      let tH = HH.neighbors(AH);
      return tH && tH.forEach((rH => {
        Object.hasOwn(BH, rH) || (LH = oB(HH, BH, LH, rH, AH))
      })), hH.low = SH, hH.lim = LH++, rH ? hH.parent = rH : delete hH.parent, LH
    }

    function IB(HH) {
      return HH.edges().find((BH => HH.edge(BH).cutvalue < 0))
    }

    function fB(HH, BH, LH) {
      let AH = LH.v,
        rH = LH.w;
      BH.hasEdge(AH, rH) || (AH = LH.w, rH = LH.v);
      let SH = HH.node(AH),
        hH = HH.node(rH),
        tH = SH,
        zH = !1;
      return SH.lim > hH.lim && (tH = hH, zH = !0), BH.edges().filter((BH => zH === KB(HH, HH.node(BH.v), tH) && zH !== KB(HH, HH.node(BH.w), tH))).reduce(((HH, LH) => WB(BH, LH) < WB(BH, HH) ? LH : HH))
    }

    function lB(HH, BH, LH, AH) {
      let rH = LH.v,
        SH = LH.w;
      HH.removeEdge(rH, SH), HH.setEdge(AH.v, AH.w, {}), mB(HH), bB(HH, BH),
        function(HH, BH) {
          let LH = HH.nodes().find((BH => !HH.node(BH).parent));
          if (!LH) return;
          let AH = TB(HH, [LH]);
          AH = AH.slice(1), AH.forEach((LH => {
            let AH = HH.node(LH).parent,
              rH = BH.edge(LH, AH),
              SH = !1;
            rH || (rH = BH.edge(AH, LH), SH = !0), BH.node(LH).rank = BH.node(AH).rank + (SH ? rH.minlen : -rH.minlen)
          }))
        }(HH, BH)
    }

    function KB(HH, BH, LH) {
      return LH.low <= BH.lim && BH.lim <= LH.lim
    }
    OB.initLowLimValues = mB, OB.initCutValues = bB, OB.calcCutValue = kB, OB.leaveEdge = IB, OB.enterEdge = fB, OB.exchangeEdges = lB;
    var cB = function(HH) {
      let BH = HH.graph().ranker;
      if ("function" == typeof BH) return BH(HH);
      switch (BH) {
        case "network-simplex":
        default:
          qB(HH);
          break;
        case "tight-tree":
          ! function(HH) {
            QB(HH), MB(HH)
          }(HH);
          break;
        case "longest-path":
          eB(HH);
        case "none":
      }
    };
    var eB = QB;

    function qB(HH) {
      VB(HH)
    }
    var gB = function(HH) {
      let BH = function(HH) {
          let BH = {},
            LH = 0;

          function AH(rH) {
            let SH = LH;
            HH.children(rH).forEach(AH), BH[rH] = {
              low: SH,
              lim: LH++
            }
          }
          return HH.children(AB).forEach(AH), BH
        }(HH),
        LH = HH.graph();
      if (!Array.isArray(LH.dummyChains)) return;
      LH.dummyChains.forEach((LH => {
        let AH = HH.node(LH),
          rH = AH.edgeObj,
          SH = function(HH, BH, LH, AH) {
            let rH, SH = [],
              hH = [],
              tH = Math.min(BH[LH].low, BH[AH].low),
              zH = Math.max(BH[LH].lim, BH[AH].lim);
            rH = LH;
            do {
              rH = HH.parent(rH), SH.push(rH)
            } while (rH && (BH[rH].low > tH || zH > BH[rH].lim));
            let CH = rH,
              EH = AH;
            for (;
              (EH = HH.parent(EH)) !== CH;) hH.push(EH);
            return {
              path: SH.concat(hH.reverse()),
              lca: CH
            }
          }(HH, BH, rH.v, rH.w),
          hH = SH.path,
          tH = SH.lca,
          zH = 0,
          CH = hH[zH],
          EH = !0;
        for (; LH !== rH.w;) {
          if (AH = HH.node(LH), EH) {
            for (;
              (CH = hH[zH]) !== tH && HH.node(CH).maxRank < AH.rank;) zH++;
            CH === tH && (EH = !1)
          }
          if (!EH) {
            for (; zH < hH.length - 1 && HH.node(hH[zH + 1]).minRank <= AH.rank;) zH++;
            CH = hH[zH]
          }
          void 0 !== CH && HH.setParent(LH, CH), LH = HH.successors(LH)[0]
        }
      }))
    };

    function NB(HH) {
      let BH = nH(HH, "root", {}, "_root"),
        LH = function(HH) {
          let BH = {};

          function LH(AH, rH) {
            let SH = HH.children(AH);
            SH && SH.length && SH.forEach((HH => LH(HH, rH + 1))), BH[AH] = rH
          }
          return HH.children(AB).forEach((HH => LH(HH, 1))), BH
        }(HH),
        AH = Object.values(LH),
        rH = aH(Math.max, AH) - 1,
        SH = 2 * rH + 1;
      HH.graph().nestingRoot = BH, HH.edges().forEach((BH => HH.edge(BH).minlen *= SH));
      let hH = function(HH) {
        return HH.edges().reduce(((BH, LH) => BH + HH.edge(LH).weight), 0)
      }(HH) + 1;
      HH.children(AB).forEach((AH => {
        RB(HH, BH, SH, hH, rH, LH, AH)
      })), HH.graph().nodeRankFactor = SH
    }

    function RB(HH, BH, LH, AH, rH, SH, hH) {
      var tH;
      let zH = HH.children(hH);
      if (!zH.length) return void(hH !== BH && HH.setEdge(BH, hH, {
        weight: 0,
        minlen: LH
      }));
      let CH = ZH(HH, "_bt"),
        EH = ZH(HH, "_bb"),
        XH = HH.node(hH);
      HH.setParent(CH, hH), XH.borderTop = CH, HH.setParent(EH, hH), XH.borderBottom = EH, zH.forEach((tH => {
        var zH;
        RB(HH, BH, LH, AH, rH, SH, tH);
        let XH = HH.node(tH),
          GH = XH.borderTop ? XH.borderTop : tH,
          YH = XH.borderBottom ? XH.borderBottom : tH,
          uH = XH.borderTop ? AH : 2 * AH,
          QH = GH !== YH ? 1 : rH - (null != (zH = SH[hH]) ? zH : 0) + 1;
        HH.setEdge(CH, GH, {
          weight: uH,
          minlen: QH,
          nestingEdge: !0
        }), HH.setEdge(YH, EH, {
          weight: uH,
          minlen: QH,
          nestingEdge: !0
        })
      })), HH.parent(hH) || HH.setEdge(BH, CH, {
        weight: 0,
        minlen: rH + (null != (tH = SH[hH]) ? tH : 0)
      })
    }
    var jB = function(HH) {
      HH.children(AB).forEach((function BH(LH) {
        let AH = HH.children(LH),
          rH = HH.node(LH);
        if (AH.length && AH.forEach(BH), rH && Object.hasOwn(rH, "minRank")) {
          rH.borderLeft = [], rH.borderRight = [];
          for (let BH = rH.minRank, AH = rH.maxRank + 1; BH < AH; ++BH) nB(HH, "borderLeft", "_bl", LH, rH, BH), nB(HH, "borderRight", "_br", LH, rH, BH)
        }
      }))
    };

    function nB(HH, BH, LH, AH, rH, SH) {
      let hH = {
          width: 0,
          height: 0,
          rank: SH,
          borderType: BH
        },
        tH = rH[BH][SH - 1],
        zH = nH(HH, "border", hH, LH);
      rH[BH][SH] = zH, HH.setParent(zH, AH), tH && HH.setEdge(tH, zH, {
        weight: 1
      })
    }

    function FB(HH) {
      var BH;
      let LH = null == (BH = HH.graph().rankdir) ? void 0 : BH.toLowerCase();
      ("bt" === LH || "rl" === LH) && function(HH) {
        HH.nodes().forEach((BH => ZB(HH.node(BH)))), HH.edges().forEach((BH => {
          var LH;
          let AH = HH.edge(BH);
          null == (LH = AH.points) || LH.forEach(ZB), Object.hasOwn(AH, "y") && ZB(AH)
        }))
      }(HH), ("lr" === LH || "rl" === LH) && (function(HH) {
        HH.nodes().forEach((BH => dB(HH.node(BH)))), HH.edges().forEach((BH => {
          var LH;
          let AH = HH.edge(BH);
          null == (LH = AH.points) || LH.forEach(dB), Object.hasOwn(AH, "x") && dB(AH)
        }))
      }(HH), DB(HH))
    }

    function DB(HH) {
      HH.nodes().forEach((BH => wB(HH.node(BH)))), HH.edges().forEach((BH => wB(HH.edge(BH))))
    }

    function wB(HH) {
      let BH = HH.width;
      HH.width = HH.height, HH.height = BH
    }

    function ZB(HH) {
      HH.y = -HH.y
    }

    function dB(HH) {
      let BH = HH.x;
      HH.x = HH.y, HH.y = BH
    }

    function aB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        LH = {},
        AH = HH.nodes().filter((BH => !HH.children(BH).length)),
        rH = AH.map((BH => HH.node(BH).rank)),
        SH = HB(aH(Math.max, rH) + 1).map((() => []));
      return AH.sort(((BH, LH) => HH.node(BH).rank - HH.node(LH).rank)).forEach((function AH(rH) {
        if (LH[rH]) return;
        LH[rH] = !0;
        let hH = HH.node(rH);
        SH[hH.rank].push(rH);
        let tH = HH.successors(rH);
        tH && [...tH].sort(((LH, AH) => function(LH, AH) {
          let rH = HH.node(LH),
            SH = HH.node(AH);
          return rB(BH, rH, SH)
        }(LH, AH))).forEach(AH)
      })), SH
    }

    function sB(HH, BH) {
      let LH = 0;
      for (let AH = 1; AH < BH.length; ++AH) LH += JB(HH, BH[AH - 1], BH[AH]);
      return LH
    }

    function JB(HH, BH, LH) {
      let AH = function(HH, BH) {
          return HH.reduce(((HH, LH, AH) => (HH[LH] = BH[AH], HH)), {})
        }(LH, LH.map(((HH, BH) => BH))),
        rH = BH.flatMap((BH => {
          let LH = HH.outEdges(BH);
          return LH ? LH.map((BH => ({
            pos: AH[BH.w],
            weight: HH.edge(BH).weight
          }))).sort(((HH, BH) => HH.pos - BH.pos)) : []
        })),
        SH = 1;
      for (; SH < LH.length;) SH <<= 1;
      let hH = 2 * SH - 1;
      SH -= 1;
      let tH = new Array(hH).fill(0),
        zH = 0;
      return rH.forEach((HH => {
        let BH = HH.pos + SH;
        tH[BH] += HH.weight;
        let LH = 0;
        for (; BH > 0;) BH % 2 && (LH += tH[BH + 1]), BH = BH - 1 >> 1, tH[BH] += HH.weight;
        zH += HH.weight * LH
      })), zH
    }

    function iB(HH, BH) {
      let LH = {};
      return HH.forEach(((HH, BH) => {
          let AH = {
            indegree: 0,
            in: [],
            out: [],
            vs: [HH.v],
            i: BH
          };
          void 0 !== HH.barycenter && (AH.barycenter = HH.barycenter, AH.weight = HH.weight), LH[HH.v] = AH
        })), BH.edges().forEach((HH => {
          let BH = LH[HH.v],
            AH = LH[HH.w];
          void 0 !== BH && void 0 !== AH && (AH.indegree++, BH.out.push(AH))
        })),
        function(HH) {
          let BH = [];

          function LH(HH) {
            return BH => {
              BH.merged || (void 0 === BH.barycenter || void 0 === HH.barycenter || BH.barycenter >= HH.barycenter) && function(HH, BH) {
                let LH = 0,
                  AH = 0;
                HH.weight && (LH += HH.barycenter * HH.weight, AH += HH.weight), BH.weight && (LH += BH.barycenter * BH.weight, AH += BH.weight), HH.vs = BH.vs.concat(HH.vs), HH.barycenter = LH / AH, HH.weight = AH, HH.i = Math.min(BH.i, HH.i), BH.merged = !0
              }(HH, BH)
            }
          }

          function AH(BH) {
            return LH => {
              LH.in.push(BH), 0 === --LH.indegree && HH.push(LH)
            }
          }
          for (; HH.length;) {
            let rH = HH.pop();
            BH.push(rH), rH.in.reverse().forEach(LH(rH)), rH.out.forEach(AH(rH))
          }
          return BH.filter((HH => !HH.merged)).map((HH => BB(HH, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(LH).filter((HH => !HH.indegree)))
    }

    function pB(HH, BH, LH, AH, rH) {
      let SH = {},
        hH = null,
        tH = null,
        zH = rH;
      "boolean" == typeof BH ? (zH = BH, SH = {}) : BH && (SH = BH, hH = null != LH ? LH : null, tH = null != AH ? AH : null);
      let CH = function(HH, BH) {
          let LH = {
            lhs: [],
            rhs: []
          };
          return HH.forEach((HH => {
            BH(HH) ? LH.lhs.push(HH) : LH.rhs.push(HH)
          })), LH
        }(HH, (HH => Object.hasOwn(HH, "barycenter"))),
        EH = CH.lhs,
        XH = CH.rhs.sort(((HH, BH) => BH.i - HH.i)),
        GH = [],
        YH = 0,
        uH = 0,
        QH = 0;
      EH.sort(function(HH, BH, LH) {
        return (AH, rH) => {
          if (AH.barycenter < rH.barycenter) return -1;
          if (AH.barycenter > rH.barycenter) return 1;
          if (HH && ("string" == typeof AH.vs[0] || "string" == typeof rH.vs[0])) {
            let LH = HH.node(AH.vs[0]),
              SH = HH.node(rH.vs[0]),
              hH = rB(BH, LH, SH);
            if (0 !== hH) return hH
          }
          return LH ? rH.i - AH.i : AH.i - rH.i
        }
      }(tH, hH, !!zH));
      for (let [MH, xH] of Object.entries(SH)) {
        let HH = EH.findIndex((HH => HH.vs[0] === MH));
        EH.splice(HH + 1, 0, xH)
      }
      QH = yB(GH, XH, QH), EH.forEach((HH => {
        QH += HH.vs.length, GH.push(HH.vs), YH += HH.barycenter * HH.weight, uH += HH.weight, QH = yB(GH, XH, QH)
      }));
      let WH = {
        vs: GH.flat(1)
      };
      return uH && (WH.barycenter = YH / uH, WH.weight = uH), WH
    }

    function yB(HH, BH, LH) {
      let AH;
      for (; BH.length && (AH = BH[BH.length - 1]).i <= LH;) BH.pop(), HH.push(AH.vs), LH++;
      return LH
    }

    function HL(HH, BH, LH, AH, rH) {
      var SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH;
      let WH = null,
        MH = rH;
      "boolean" == typeof AH ? (MH = AH, WH = null) : void 0 !== AH && (WH = AH);
      let xH = HH.children(BH),
        vH = HH.node(BH),
        PH = vH ? vH.borderLeft : void 0,
        TH = vH ? vH.borderRight : void 0,
        UH = {};
      PH && (xH = xH.filter((HH => HH !== PH && HH !== TH)));
      let VH = function(HH) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((BH => {
          let LH = HH.inEdges(BH);
          if (!LH || !LH.length) return {
            v: BH
          };
          {
            let AH = LH.reduce(((BH, LH) => {
              let AH = HH.edge(LH),
                rH = HH.node(LH.v);
              return {
                sum: BH.sum + AH.weight * rH.order,
                weight: BH.weight + AH.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: BH,
              barycenter: AH.sum / AH.weight,
              weight: AH.weight
            }
          }
        }))
      }(HH, xH);
      VH.forEach((BH => {
        if (HH.children(BH.v).length) {
          let {
            result: AH
          } = HL(HH, BH.v, LH, WH, MH);
          UH[BH.v] = AH, Object.hasOwn(AH, "barycenter") && function(HH, BH) {
            void 0 !== HH.barycenter ? (HH.barycenter = (HH.barycenter * HH.weight + BH.barycenter * BH.weight) / (HH.weight + BH.weight), HH.weight += BH.weight) : (HH.barycenter = BH.barycenter, HH.weight = BH.weight)
          }(BH, AH)
        }
      }));
      let OH = iB(VH, LH);
      ! function(HH, BH) {
        HH.forEach((HH => {
          HH.vs = HH.vs.flatMap((HH => BH[HH] ? BH[HH].vs : HH))
        }))
      }(OH, UH);
      let bH = {},
        kH = !1;
      for (let oH = 0; oH < OH.length; oH++)
        for (let BH = oH + 1; BH < OH.length; BH++)
          if (OH[oH] && OH[BH] && null != (SH = OH[oH]) && SH.barycenter && null != (hH = OH[BH]) && hH.barycenter && (null == (tH = OH[oH]) ? void 0 : tH.barycenter) === OH[BH].barycenter) {
            let LH = null != (CH = null == (zH = OH[oH]) ? void 0 : zH.vs[0]) ? CH : "",
              AH = null != (XH = null == (EH = OH[BH]) ? void 0 : EH.vs[0]) ? XH : "",
              rH = HH.node(LH),
              SH = HH.node(AH);
            if ("edge" === rH.dummy && "edge" === SH.dummy && (null == (GH = rH.edgeObj) ? void 0 : GH.v) === (null == (YH = SH.edgeObj) ? void 0 : YH.v) && (null == (uH = rH.edgeObj) ? void 0 : uH.w) === (null == (QH = SH.edgeObj) ? void 0 : QH.w)) {
              if (rH.edgeLabel.reversed) {
                bH[AH] = OH[oH], OH.splice(oH, 1), oH--;
                break
              }
              bH[LH] = OH[BH], OH.splice(BH, 1), BH--
            } else kH = !0
          } let mH = pB(OH, bH, WH, HH, MH);
      if (PH && TH) {
        mH.vs = [PH, mH.vs, TH].flat(1);
        let BH = HH.predecessors(PH);
        if (BH && BH.length) {
          let LH = HH.node(BH[0]),
            AH = HH.predecessors(TH),
            rH = HH.node(AH[0]);
          Object.hasOwn(mH, "barycenter") || (mH.barycenter = 0, mH.weight = 0), mH.barycenter = (mH.barycenter * mH.weight + LH.order + rH.order) / (mH.weight + 2), mH.weight += 2
        }
      }
      return Object.defineProperty(mH, "result", {
        value: mH,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(mH, "usedBias", {
        value: kH,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), mH
    }

    function BL(HH, BH, LH, AH) {
      AH || (AH = HH.nodes());
      let rH = function(HH) {
          let BH;
          for (; HH.hasNode(BH = yH("_root")););
          return BH
        }(HH),
        SH = new jH({
          compound: !0
        }).setGraph({
          root: rH
        }).setDefaultNodeLabel((BH => HH.node(BH)));
      return AH.forEach((AH => {
        let hH = HH.node(AH),
          tH = HH.parent(AH);
        if (hH.rank === BH || hH.minRank <= BH && BH <= hH.maxRank) {
          SH.setNode(AH), SH.setParent(AH, tH || rH);
          let zH = HH[LH](AH);
          zH && zH.forEach((BH => {
            let LH = BH.v === AH ? BH.w : BH.v,
              rH = SH.edge(LH, AH),
              hH = void 0 !== rH ? rH.weight : 0;
            SH.setEdge(LH, AH, {
              weight: HH.edge(BH).weight + hH
            })
          })), Object.hasOwn(hH, "minRank") && SH.setNode(AH, {
            borderLeft: hH.borderLeft[BH],
            borderRight: hH.borderRight[BH]
          })
        }
      })), SH
    }

    function LL(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof BH.customOrder) return void BH.customOrder(HH, LL);
      let AH = sH(HH),
        rH = AL(HH, HB(1, AH + 1), "inEdges"),
        SH = AL(HH, HB(AH - 1, -1, -1), "outEdges"),
        hH = aB(HH, LH);
      if (SL(HH, hH), BH.disableOptimalOrderHeuristic) return;
      let tH, zH = Number.POSITIVE_INFINITY,
        CH = BH.constraints || [];
      for (let EH = 0, XH = 0; XH < 4; ++EH, ++XH) {
        rL(EH % 2 ? rH : SH, EH % 4 >= 2, CH, LH), hH = wH(HH);
        let BH = sB(HH, hH);
        BH < zH ? (XH = 0, tH = Object.assign({}, hH), zH = BH) : BH === zH && (tH = structuredClone(hH))
      }
      SL(HH, tH)
    }

    function AL(HH, BH, LH) {
      let AH = new Map,
        rH = (HH, BH) => {
          AH.has(HH) || AH.set(HH, []), AH.get(HH).push(BH)
        };
      for (let SH of HH.nodes()) {
        let BH = HH.node(SH);
        if ("number" == typeof BH.rank && rH(BH.rank, SH), "number" == typeof BH.minRank && "number" == typeof BH.maxRank)
          for (let HH = BH.minRank; HH <= BH.maxRank; HH++) HH !== BH.rank && rH(HH, SH)
      }
      return BH.map((function(BH) {
        return BL(HH, BH, LH, AH.get(BH) || [])
      }))
    }

    function rL(HH, BH, LH, AH) {
      let rH = !0,
        SH = new jH;
      HH.forEach((function(HH) {
        LH.forEach((HH => SH.setEdge(HH.left, HH.right)));
        let hH = HH.graph().root,
          {
            result: tH,
            usedBias: zH
          } = HL(HH, hH, SH, AH, rH);
        BH && zH && (rH = !rH), tH.vs.forEach(((BH, LH) => HH.node(BH).order = LH)),
          function(HH, BH, LH) {
            let AH, rH = {};
            LH.forEach((LH => {
              let SH, hH, tH = HH.parent(LH);
              for (; tH;) {
                if (SH = HH.parent(tH), SH ? (hH = rH[SH], rH[SH] = tH) : (hH = AH, AH = tH), hH && hH !== tH) return void BH.setEdge(hH, tH);
                tH = SH
              }
            }))
          }(HH, SH, tH.vs)
      }))
    }

    function SL(HH, BH) {
      Object.values(BH).forEach((BH => BH.forEach(((BH, LH) => HH.node(BH).order = LH))))
    }

    function hL(HH, BH, LH) {
      if (BH > LH) {
        let HH = BH;
        BH = LH, LH = HH
      }
      let AH = HH[BH];
      AH || (HH[BH] = AH = {}), AH[LH] = !0
    }

    function tL(HH, BH, LH) {
      if (BH > LH) {
        let HH = BH;
        BH = LH, LH = HH
      }
      let AH = HH[BH];
      return void 0 !== AH && Object.hasOwn(AH, LH)
    }

    function zL(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        SH = {},
        hH = function(HH, BH, LH, AH) {
          let rH = new jH,
            SH = HH.graph(),
            hH = function(HH, BH, LH) {
              return (AH, rH, SH) => {
                let hH, tH = AH.node(rH),
                  zH = AH.node(SH),
                  CH = 0;
                if (CH += tH.width / 2, Object.hasOwn(tH, "labelpos")) switch (tH.labelpos.toLowerCase()) {
                  case "l":
                    hH = -tH.width / 2;
                    break;
                  case "r":
                    hH = tH.width / 2
                }
                if (hH && (CH += LH ? hH : -hH), hH = void 0, CH += (tH.dummy ? BH : HH) / 2, CH += (zH.dummy ? BH : HH) / 2, CH += zH.width / 2, Object.hasOwn(zH, "labelpos")) switch (zH.labelpos.toLowerCase()) {
                  case "l":
                    hH = zH.width / 2;
                    break;
                  case "r":
                    hH = -zH.width / 2
                }
                return hH && (CH += LH ? hH : -hH), CH
              }
            }(SH.nodesep, SH.edgesep, AH);
          return BH.forEach((BH => {
            let AH;
            BH.forEach((BH => {
              let SH = LH[BH];
              if (void 0 !== SH) {
                if (rH.setNode(SH), void 0 !== AH) {
                  let tH = LH[AH];
                  if (void 0 !== tH) {
                    let LH = rH.edge(tH, SH);
                    rH.setEdge(tH, SH, Math.max(hH(HH, BH, AH), LH || 0))
                  }
                }
                AH = BH
              }
            }))
          })), rH
        }(HH, BH, LH, rH),
        tH = rH ? "borderLeft" : "borderRight";

      function zH(HH, BH) {
        let LH = hH.nodes().slice(),
          AH = {},
          rH = LH.pop();
        for (; rH;) {
          if (AH[rH]) HH(rH);
          else {
            AH[rH] = !0, LH.push(rH);
            for (let HH of BH(rH)) LH.push(HH)
          }
          rH = LH.pop()
        }
      }
      return zH((function(HH) {
        let BH = hH.inEdges(HH);
        SH[HH] = BH ? BH.reduce(((HH, BH) => {
          var LH;
          let AH = null != (LH = SH[BH.v]) ? LH : 0,
            rH = hH.edge(BH);
          return Math.max(HH, AH + (void 0 !== rH ? rH : 0))
        }), 0) : 0
      }), (function(HH) {
        return hH.predecessors(HH) || []
      })), zH((function(BH) {
        let LH = hH.outEdges(BH),
          AH = Number.POSITIVE_INFINITY;
        LH && (AH = LH.reduce(((HH, BH) => {
          let LH = SH[BH.w],
            AH = hH.edge(BH);
          return Math.min(HH, (void 0 !== LH ? LH : 0) - (void 0 !== AH ? AH : 0))
        }), Number.POSITIVE_INFINITY));
        let rH = HH.node(BH);
        AH !== Number.POSITIVE_INFINITY && rH.borderType !== tH && (SH[BH] = Math.max(void 0 !== SH[BH] ? SH[BH] : 0, AH))
      }), (function(HH) {
        return hH.successors(HH) || []
      })), Object.keys(AH).forEach((HH => {
        var BH;
        let AH = LH[HH];
        void 0 !== AH && (SH[HH] = null != (BH = SH[AH]) ? BH : 0)
      })), SH
    }

    function CL(HH, BH) {
      let LH, AH = wH(HH),
        rH = Object.assign(function(HH, BH) {
          let LH = {};
          return BH.length && BH.reduce((function(BH, AH) {
            let rH = 0,
              SH = 0,
              hH = BH.length,
              tH = AH[AH.length - 1];
            return AH.forEach(((BH, zH) => {
              let CH = function(HH, BH) {
                  if (HH.node(BH).dummy) {
                    let LH = HH.predecessors(BH);
                    if (LH) return LH.find((BH => HH.node(BH).dummy))
                  }
                }(HH, BH),
                EH = CH ? HH.node(CH).order : hH;
              (CH || BH === tH) && (AH.slice(SH, zH + 1).forEach((BH => {
                let AH = HH.predecessors(BH);
                AH && AH.forEach((AH => {
                  let SH = HH.node(AH),
                    hH = SH.order;
                  (hH < rH || EH < hH) && (!SH.dummy || !HH.node(BH).dummy) && hL(LH, AH, BH)
                }))
              })), SH = zH + 1, rH = EH)
            })), AH
          })), LH
        }(HH, AH), function(HH, BH) {
          let LH = {};

          function AH(BH, AH, rH, SH, hH) {
            HB(AH, rH).forEach((AH => {
              let rH = BH[AH];
              if (void 0 !== rH && HH.node(rH).dummy) {
                let BH = HH.predecessors(rH);
                BH && BH.forEach((BH => {
                  if (void 0 === BH) return;
                  let AH = HH.node(BH);
                  AH.dummy && (AH.order < SH || AH.order > hH) && hL(LH, BH, rH)
                }))
              }
            }))
          }
          return BH.length && BH.reduce((function(BH, LH) {
            let rH = -1,
              SH = -1,
              hH = 0;
            return LH.forEach(((tH, zH) => {
              if ("border" === HH.node(tH).dummy) {
                let BH = HH.predecessors(tH);
                if (BH && BH.length) {
                  let tH = BH[0];
                  if (void 0 === tH) return;
                  SH = HH.node(tH).order, AH(LH, hH, zH, rH, SH), hH = zH, rH = SH
                }
              }
              AH(LH, hH, LH.length, SH, BH.length)
            })), LH
          })), LH
        }(HH, AH)),
        SH = {};
      ["u", "d"].forEach((hH => {
        LH = "u" === hH ? AH : Object.values(AH).reverse(), ["l", "r"].forEach((AH => {
          "r" === AH && (LH = LH.map((HH => Object.values(HH).reverse())));
          let tH = function(HH, BH, LH, AH, rH) {
              let SH = {},
                hH = {},
                tH = {};
              return BH.forEach((HH => {
                HH.forEach(((HH, BH) => {
                  SH[HH] = HH, hH[HH] = HH, tH[HH] = BH
                }))
              })), BH.forEach((BH => {
                let zH = -1,
                  CH = -1,
                  EH = !1,
                  XH = BH,
                  GH = BH.findIndex((BH => (null == rH ? void 0 : rH.includes(BH)) || EL(BH, HH, rH)));
                GH > 0 && (XH = [BH[GH], ...BH.slice(0, GH), ...BH.slice(GH + 1)], EH = !0), XH.forEach((BH => {
                  var XH;
                  let GH = AH(BH);
                  if (GH && GH.length) {
                    null != rH && rH.includes(BH) && (GH = GH.filter((BH => EL(BH, HH, rH))));
                    let AH = GH.sort(((HH, BH) => {
                        let LH = tH[HH],
                          AH = tH[BH];
                        return (void 0 !== LH ? LH : 0) - (void 0 !== AH ? AH : 0)
                      })),
                      YH = (AH.length - 1) / 2;
                    for (let HH = Math.floor(YH), rH = Math.ceil(YH); HH <= rH; ++HH) {
                      let rH = AH[HH];
                      if (void 0 === rH) continue;
                      let GH = tH[rH];
                      if (void 0 !== GH && hH[BH] === BH && zH < GH && tH[rH] !== CH && !tL(LH, BH, rH)) {
                        let HH = SH[rH];
                        void 0 !== HH && (hH[rH] = BH, hH[BH] = SH[BH] = HH, zH = GH, EH && (zH = -1, CH = null != (XH = tH[rH]) ? XH : -1, EH = !1))
                      }
                    }
                  }
                }))
              })), {
                root: SH,
                align: hH
              }
            }(HH, LH, rH, (BH => ("u" === hH ? HH.predecessors(BH) : HH.successors(BH)) || []), BH),
            zH = zL(HH, LH, tH.root, tH.align, "r" === AH);
          "r" === AH && (zH = LB(zH, (HH => -HH))), SH[hH + AH] = zH
        }))
      }));
      let hH = function(HH, BH) {
        return Object.values(BH).reduce(((BH, LH) => {
          let AH = Number.NEGATIVE_INFINITY,
            rH = Number.POSITIVE_INFINITY;
          Object.entries(LH).forEach((BH => {
            let [LH, SH] = BH, hH = function(HH, BH) {
              return HH.node(BH).width
            }(HH, LH) / 2;
            AH = Math.max(SH + hH, AH), rH = Math.min(SH - hH, rH)
          }));
          let SH = AH - rH;
          return SH < BH[0] && (BH = [SH, LH]), BH
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(HH, SH);
      return function(HH, BH) {
          let LH = Object.values(BH),
            AH = aH(Math.min, LH),
            rH = aH(Math.max, LH);
          ["u", "d"].forEach((LH => {
            ["l", "r"].forEach((SH => {
              let hH = LH + SH,
                tH = HH[hH];
              if (!tH || tH === BH) return;
              let zH = Object.values(tH),
                CH = AH - aH(Math.min, zH);
              "l" !== SH && (CH = rH - aH(Math.max, zH)), CH && (HH[hH] = LB(tH, (HH => HH + CH)))
            }))
          }))
        }(SH, hH),
        function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            LH = HH.ul;
          return LH ? LB(LH, ((LH, AH) => {
            var rH, SH;
            if (BH) {
              let LH = BH.toLowerCase(),
                rH = HH[LH];
              if (rH && void 0 !== rH[AH]) return rH[AH]
            }
            let hH = Object.values(HH).map((HH => {
              let BH = HH[AH];
              return void 0 !== BH ? BH : 0
            })).sort(((HH, BH) => HH - BH));
            return ((null != (rH = hH[1]) ? rH : 0) + (null != (SH = hH[2]) ? SH : 0)) / 2
          })) : {}
        }(SH, HH.graph().align)
    }

    function EL(HH, BH, LH) {
      var AH;
      if (!LH) return !1;
      let rH = null == (AH = BH.node(HH)) ? void 0 : AH.edgeObj;
      if (!rH || BH.node(HH).edgeLabel.reversed) return !1;
      let SH = LH.indexOf(null == rH ? void 0 : rH.v),
        hH = LH.indexOf(null == rH ? void 0 : rH.w);
      return -1 !== SH && -1 !== hH && SH === (hH + 1) % LH.length || SH === (hH - 1) % LH.length
    }

    function XL(HH, BH) {
      (function(HH) {
        let BH = wH(HH),
          LH = HH.graph(),
          AH = LH.ranksep,
          rH = LH.rankalign,
          SH = 0;
        BH.forEach((BH => {
          let LH = BH.reduce(((BH, LH) => {
            var AH;
            let rH = null != (AH = HH.node(LH).height) ? AH : 0;
            return BH > rH ? BH : rH
          }), 0);
          BH.forEach((BH => {
            let AH = HH.node(BH);
            AH.y = "top" === rH ? SH + AH.height / 2 : "bottom" === rH ? SH + LH - AH.height / 2 : SH + LH / 2
          })), SH += LH + AH
        }))
      })(HH = FH(HH)), Object.entries(CL(HH, BH)).forEach((BH => {
        let [LH, AH] = BH;
        return HH.node(LH).x = AH
      }))
    }
    var GL = new WeakMap;

    function YL(HH) {
      return QL(HH, iH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), HH
    }

    function uL(HH, BH, LH) {
      let AH = BH;
      for (; void 0 !== AH;) {
        let BH = HH.parent(AH);
        if (BH === LH) return AH;
        AH = BH
      }
    }

    function QL(HH, BH, LH) {
      var AH;
      let rH = HH.nodes().filter((BH => HH.children(BH).length)),
        SH = {};
      rH.forEach((AH => {
        let rH = HH.node(AH);
        if (rH && rH.rankdir) {
          let hH = new jH({
            multigraph: !0,
            compound: !0
          });
          hH.setGraph({
            rankdir: rH.rankdir
          });
          let tH = HH.children(AH);
          tH.forEach((BH => {
            let LH = {
              ...HH.node(BH)
            };
            hH.setNode(BH, LH);
            let rH = HH.parent(BH);
            rH && rH !== AH && tH.includes(rH) && hH.setParent(BH, rH)
          }));
          let zH = new Set;
          HH.edges().forEach((BH => {
            let LH = uL(HH, BH.v, AH),
              rH = uL(HH, BH.w, AH);
            if (LH && rH && LH !== rH) {
              let AH = `${LH}\0${rH}`;
              zH.has(AH) || (zH.add(AH), hH.setEdge(LH, rH, {
                ...HH.edge(BH)
              }))
            }
          })), QL(hH, BH, LH);
          let CH = kL(hH);
          WL(CH, BH, LH, null), ML(hH, CH);
          let EH = 1 / 0,
            XH = 1 / 0,
            GH = -1 / 0,
            YH = -1 / 0;
          hH.nodes().forEach((HH => {
            if (HH === AH) return;
            let BH = hH.node(HH);
            BH && "number" == typeof BH.x && "number" == typeof BH.y && "number" == typeof BH.width && "number" == typeof BH.height && (EH = Math.min(EH, BH.x - BH.width / 2), GH = Math.max(GH, BH.x + BH.width / 2), XH = Math.min(XH, BH.y - BH.height / 2), YH = Math.max(YH, BH.y + BH.height / 2))
          })), (!isFinite(EH) || !isFinite(XH) || !isFinite(GH) || !isFinite(YH)) && (EH = XH = 0, GH = YH = 0);
          let uH = GH - EH,
            QH = YH - XH;
          SH[AH] = {
            minX: EH,
            Sr: XH,
            maxX: GH,
            hr: YH,
            width: uH,
            height: QH,
            offsetX: EH,
            offsetY: XH
          }, rH._dagreClusterSubgraph = hH
        }
      }));
      let hH = [],
        tH = new Map;
      rH.forEach((BH => {
        let LH = HH.node(BH);
        LH && LH.rankdir && SH[BH] && tH.set(BH, (HH.children(BH) || []).filter((HH => HH !== BH)))
      }));
      let zH = new Set([...tH.values()].flat()),
        CH = new Map;
      tH.forEach(((BH, LH) => {
        zH.has(LH) || CH.set(LH, (BH => {
          let LH = [],
            AH = (HH.children(BH) || []).filter((HH => HH !== BH));
          for (; AH.length > 0;) {
            let BH = AH.shift();
            LH.push(BH), (HH.children(BH) || []).filter((HH => HH !== BH)).forEach((HH => AH.push(HH)))
          }
          return LH
        })(LH))
      }));
      let EH = new Set([...CH.values()].flat()),
        XH = HH => {
          for (let [BH, LH] of CH)
            if (LH.includes(HH)) return BH;
          return HH
        },
        GH = [];
      HH.edges().forEach((BH => {
        (EH.has(BH.v) || EH.has(BH.w)) && GH.push({
          edge: BH,
          label: HH.edge(BH)
        })
      }));
      let YH = new Map;
      EH.forEach((BH => {
        let LH = HH.parent(BH);
        YH.set(BH, "string" == typeof LH ? LH : void 0)
      })), CH.forEach(((BH, LH) => {
        let AH = HH.node(LH),
          rH = [];
        BH.forEach((BH => {
          let LH = HH.node(BH);
          LH && (rH.push({
            id: BH,
            node: LH,
            parent: YH.get(BH)
          }), HH.removeNode(BH))
        }));
        let tH = GH.filter((HH => {
            let {
              edge: LH
            } = HH;
            return BH.includes(LH.v) || BH.includes(LH.w)
          })),
          zH = SH[LH];
        AH && (hH.push({
          clusterId: LH,
          subgraph: AH._dagreClusterSubgraph,
          bounds: zH,
          children: BH,
          removedNodes: rH,
          removedEdges: tH
        }), AH.width = zH.width, AH.height = zH.height)
      }));
      let uH = new Set;
      GH.forEach((BH => {
        let {
          edge: LH,
          label: AH
        } = BH, rH = XH(LH.v), SH = XH(LH.w);
        if (rH !== SH && HH.hasNode(rH) && HH.hasNode(SH)) {
          let BH = `${rH}\0${SH}`;
          uH.has(BH) || (uH.add(BH), HH.setEdge(rH, SH, {
            ...AH,
            width: 0,
            height: 0
          }))
        }
      }));
      let QH = kL(HH),
        WH = WL(QH, BH, LH, null != (AH = GL.get(HH)) ? AH : null);
      GL.set(HH, WH), ML(HH, QH), uH.forEach((BH => {
        let LH = BH.indexOf("\0"),
          AH = BH.slice(0, LH),
          rH = BH.slice(LH + 1);
        HH.hasEdge(AH, rH) && HH.removeEdge(AH, rH)
      })), hH.forEach((BH => {
        let {
          clusterId: LH,
          subgraph: AH,
          bounds: rH,
          removedNodes: SH,
          removedEdges: hH
        } = BH;
        var tH, zH;
        let CH = HH.node(LH),
          EH = null != (tH = null == CH ? void 0 : CH.x) ? tH : 0,
          XH = null != (zH = null == CH ? void 0 : CH.y) ? zH : 0,
          GH = (rH.minX + rH.maxX) / 2,
          YH = (rH.Sr + rH.hr) / 2;
        SH.forEach((BH => {
          let {
            id: LH,
            node: AH,
            parent: rH
          } = BH;
          HH.setNode(LH, AH), void 0 !== rH && HH.setParent(LH, rH)
        })), hH.forEach((BH => {
          let {
            edge: LH,
            label: AH
          } = BH;
          HH.setEdge(LH, AH)
        })), AH.nodes().forEach((BH => {
          if (BH === LH) return;
          let rH = AH.node(BH),
            SH = HH.node(BH);
          SH && rH && "number" == typeof rH.x && "number" == typeof rH.y && (SH.x = EH + (rH.x - GH), SH.y = XH + (rH.y - YH))
        })), delete CH._dagreClusterSubgraph
      })), rH.forEach((BH => {
        var LH, AH;
        let rH = HH.node(BH),
          hH = SH[BH];
        if (rH && rH.rankdir && rH._dagreClusterSubgraph && hH) {
          let SH = rH._dagreClusterSubgraph,
            tH = null != (LH = rH.x) ? LH : 0,
            zH = null != (AH = rH.y) ? AH : 0,
            CH = (hH.minX + hH.maxX) / 2,
            EH = (hH.Sr + hH.hr) / 2;
          SH.nodes().forEach((LH => {
            if (LH === BH) return;
            let AH = SH.node(LH),
              rH = HH.node(LH);
            if (rH && AH && "number" == typeof AH.x && "number" == typeof AH.y) {
              let HH = AH.x - CH,
                BH = AH.y - EH;
              rH.x = tH + HH, rH.y = zH + BH
            }
          })), delete rH._dagreClusterSubgraph
        }
      }))
    }

    function WL(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var rH, SH;
      let hH = !1 !== (null == LH ? void 0 : LH.useDynamic),
        tH = hH && null != (rH = null == AH ? void 0 : AH.graph) ? rH : null,
        zH = hH && null != (SH = null == AH ? void 0 : AH.rawNodes) ? SH : null;
      BH("    makeSpaceForEdgeLabels", (() => function(HH) {
        let BH = HH.graph();
        BH.ranksep /= 2, HH.edges().forEach((LH => {
          var AH;
          let rH = HH.edge(LH);
          rH.minlen *= 2, "c" !== (null != (AH = rH.labelpos) ? AH : "r").toLowerCase() && ("TB" === BH.rankdir || "BT" === BH.rankdir ? rH.width += rH.labeloffset : rH.height += rH.labeloffset)
        }))
      }(HH))), BH("    removeSelfEdges", (() => function(HH) {
        HH.edges().forEach((BH => {
          if (BH.v === BH.w) {
            let LH = HH.node(BH.v);
            LH.selfEdges || (LH.selfEdges = []), LH.selfEdges.push({
              e: BH,
              label: HH.edge(BH)
            }), HH.removeEdge(BH)
          }
        }))
      }(HH))), BH("    acyclic", (() => YB(HH, tH))), BH("    nestingGraph.run", (() => NB(HH))), BH("    rank", (() => cB(FH(HH)))), BH("    injectEdgeLabelProxies", (() => function(HH) {
        HH.edges().forEach((BH => {
          let LH = HH.edge(BH);
          if (LH.width && LH.height) {
            let LH = HH.node(BH.v),
              AH = {
                rank: (HH.node(BH.w).rank - LH.rank) / 2 + LH.rank,
                e: BH
              };
            nH(HH, "edge-proxy", AH, "_ep")
          }
        }))
      }(HH))), BH("    removeEmptyRanks", (() => function(HH) {
        let BH = HH.nodes().map((BH => HH.node(BH).rank)).filter((HH => void 0 !== HH)),
          LH = aH(Math.min, BH),
          AH = [];
        HH.nodes().forEach((BH => {
          let rH = HH.node(BH).rank - LH;
          AH[rH] || (AH[rH] = []), AH[rH].push(BH)
        }));
        let rH = 0,
          SH = HH.graph().nodeRankFactor;
        Array.from(AH).forEach(((BH, LH) => {
          void 0 === BH && LH % SH !== 0 ? --rH : void 0 !== BH && rH && BH.forEach((BH => HH.node(BH).rank += rH))
        }))
      }(HH))), BH("    nestingGraph.cleanup", (() => function(HH) {
        let BH = HH.graph();
        HH.removeNode(BH.nestingRoot), delete BH.nestingRoot, HH.edges().forEach((BH => {
          HH.edge(BH).nestingEdge && HH.removeEdge(BH)
        }))
      }(HH))), BH("    normalizeRanks", (() => function(HH) {
        let BH = HH.nodes().map((BH => {
            let LH = HH.node(BH).rank;
            return void 0 === LH ? Number.MAX_VALUE : LH
          })),
          LH = aH(Math.min, BH);
        HH.nodes().forEach((BH => {
          let AH = HH.node(BH);
          Object.hasOwn(AH, "rank") && (AH.rank -= LH)
        }))
      }(HH))), BH("    assignRankMinMax", (() => function(HH) {
        let BH = 0;
        HH.nodes().forEach((LH => {
          let AH = HH.node(LH);
          AH.borderTop && (AH.minRank = HH.node(AH.borderTop).rank, AH.maxRank = HH.node(AH.borderBottom).rank, BH = Math.max(BH, AH.maxRank))
        })), HH.graph().maxRank = BH
      }(HH))), BH("    removeEdgeLabelProxies", (() => function(HH) {
        HH.nodes().forEach((BH => {
          let LH = HH.node(BH);
          if ("edge-proxy" === LH.dummy) {
            let AH = LH;
            HH.edge(AH.e).labelRank = LH.rank, HH.removeNode(BH)
          }
        }))
      }(HH))), BH("    normalize.run", (() => uB(HH))), BH("    parentDummyChains", (() => gB(HH))), BH("    addBorderSegments", (() => jB(HH))), BH("    order", (() => LL(HH, LH, zH))), BH("    insertSelfEdges", (() => function(HH) {
        wH(HH).forEach((BH => {
          let LH = 0;
          BH.forEach(((BH, AH) => {
            let rH = HH.node(BH);
            "number" != typeof rH.rank && (rH.rank = 0), rH.order = AH + LH, (rH.selfEdges || []).forEach((BH => {
              nH(HH, "selfedge", {
                width: BH.label.width,
                height: BH.label.height,
                rank: rH.rank,
                order: AH + ++LH,
                e: BH.e,
                edgeLabel: BH.label
              }, "_se"), (!Array.isArray(BH.label.points) || 7 !== BH.label.points.length) && (BH.label.points = [{
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
            })), delete rH.selfEdges
          }))
        }))
      }(HH))), BH("    adjustCoordinateSystem", (() => function(HH) {
        var BH;
        let LH = null == (BH = HH.graph().rankdir) ? void 0 : BH.toLowerCase();
        ("lr" === LH || "rl" === LH) && DB(HH)
      }(HH))), BH("    position", (() => XL(HH, LH.corePath))), BH("    positionSelfEdges", (() => function(HH) {
        HH.nodes().forEach((BH => {
          let LH = HH.node(BH),
            AH = HH => "number" == typeof HH && isFinite(HH);
          if ("selfedge" === LH.dummy) {
            let rH = LH,
              SH = HH.node(rH.e.v),
              hH = AH(null == SH ? void 0 : SH.x) ? SH.x : 0,
              tH = AH(null == SH ? void 0 : SH.y) ? SH.y : 0,
              zH = AH(null == SH ? void 0 : SH.width) ? SH.width : 0,
              CH = AH(null == SH ? void 0 : SH.height) ? SH.height : 0,
              EH = AH(LH.x) ? LH.x : hH,
              XH = AH(LH.y) ? LH.y : tH,
              GH = zH / 2,
              YH = CH / 2;
            rH.edgeLabel.points = [{
              x: EH + GH,
              y: XH - YH
            }, {
              x: EH + GH,
              y: XH - YH
            }, {
              x: EH,
              y: XH
            }, {
              x: EH - GH,
              y: XH + YH
            }, {
              x: EH - GH,
              y: XH + YH
            }, {
              x: EH,
              y: XH
            }, {
              x: EH,
              y: XH
            }], rH.edgeLabel.x = EH, rH.edgeLabel.y = XH, HH.setEdge(rH.e, rH.edgeLabel), HH.removeNode(BH)
          } else LH && Array.isArray(LH.selfEdges) && LH.selfEdges.forEach((HH => {
            if (!Array.isArray(HH.label.points) || 7 !== HH.label.points.length) {
              let BH = AH(LH.x) ? LH.x : 0,
                rH = AH(LH.y) ? LH.y : 0,
                SH = (AH(LH.width) ? LH.width : 0) / 2,
                hH = (AH(LH.height) ? LH.height : 0) / 2;
              HH.label.points = [{
                x: BH + SH,
                y: rH - hH
              }, {
                x: BH + SH,
                y: rH - hH
              }, {
                x: BH,
                y: rH
              }, {
                x: BH - SH,
                y: rH + hH
              }, {
                x: BH - SH,
                y: rH + hH
              }, {
                x: BH,
                y: rH
              }, {
                x: BH,
                y: rH
              }]
            }
          }))
        }))
      }(HH)));
      let CH = JSON.parse(JSON.stringify(HH._nodes));
      return BH("    removeBorderNodes", (() => function(HH) {
        HH.nodes().forEach((BH => {
          if (HH.children(BH).length) {
            let LH = HH.node(BH),
              AH = HH.node(LH.borderTop),
              rH = HH.node(LH.borderBottom),
              SH = HH.node(LH.borderLeft[LH.borderLeft.length - 1]),
              hH = HH.node(LH.borderRight[LH.borderRight.length - 1]);
            LH.width = Math.abs(hH.x - SH.x), LH.height = Math.abs(rH.y - AH.y), LH.x = SH.x + LH.width / 2, LH.y = AH.y + LH.height / 2
          }
        })), HH.nodes().forEach((BH => {
          "border" === HH.node(BH).dummy && HH.removeNode(BH)
        }))
      }(HH))), BH("    normalize.undo", (() => function(HH) {
        HH.graph().dummyChains.forEach((BH => {
          let LH, AH = HH.node(BH),
            rH = AH.edgeLabel;
          for (HH.setEdge(AH.edgeObj, rH); AH.dummy;) LH = HH.successors(BH)[0], HH.removeNode(BH), rH.points.push({
            x: AH.x,
            y: AH.y
          }), "edge-label" === AH.dummy && (rH.x = AH.x, rH.y = AH.y, rH.width = AH.width, rH.height = AH.height), BH = LH, AH = HH.node(BH)
        }))
      }(HH))), BH("    fixupEdgeLabelCoords", (() => function(HH) {
        HH.edges().forEach((BH => {
          let LH = HH.edge(BH);
          if (Object.hasOwn(LH, "x")) switch (("l" === LH.labelpos || "r" === LH.labelpos) && (LH.width -= LH.labeloffset), LH.labelpos) {
            case "l":
              LH.x -= LH.width / 2 + LH.labeloffset;
              break;
            case "r":
              LH.x += LH.width / 2 + LH.labeloffset
          }
        }))
      }(HH))), BH("    undoCoordinateSystem", (() => FB(HH))), BH("    translateGraph", (() => function(HH) {
        let BH = Number.POSITIVE_INFINITY,
          LH = 0,
          AH = Number.POSITIVE_INFINITY,
          rH = 0,
          SH = HH.graph(),
          hH = SH.marginx || 0,
          tH = SH.marginy || 0;

        function zH(HH) {
          let SH = HH.x,
            hH = HH.y,
            tH = HH.width,
            zH = HH.height;
          BH = Math.min(BH, SH - tH / 2), LH = Math.max(LH, SH + tH / 2), AH = Math.min(AH, hH - zH / 2), rH = Math.max(rH, hH + zH / 2)
        }
        HH.nodes().forEach((BH => zH(HH.node(BH)))), HH.edges().forEach((BH => {
          let LH = HH.edge(BH);
          Object.hasOwn(LH, "x") && zH(LH)
        })), BH -= hH, AH -= tH, HH.nodes().forEach((LH => {
          let rH = HH.node(LH);
          rH.x -= BH, rH.y -= AH
        })), HH.edges().forEach((LH => {
          let rH = HH.edge(LH);
          rH.points.forEach((HH => {
            HH.x -= BH, HH.y -= AH
          })), Object.hasOwn(rH, "x") && (rH.x -= BH), Object.hasOwn(rH, "y") && (rH.y -= AH)
        })), SH.width = LH - BH + hH, SH.height = rH - AH + tH
      }(HH))), BH("    assignNodeIntersects", (() => function(HH) {
        HH.edges().forEach((BH => {
          if (BH.v === BH.w) return;
          let LH, AH, rH = HH.edge(BH),
            SH = HH.node(BH.v),
            hH = HH.node(BH.w);
          rH.points ? (LH = rH.points[0], AH = rH.points[rH.points.length - 1]) : (rH.points = [], LH = hH, AH = SH), rH.points.unshift(DH(SH, LH)), rH.points.push(DH(hH, AH))
        }))
      }(HH))), BH("    reversePoints", (() => function(HH) {
        HH.edges().forEach((BH => {
          let LH = HH.edge(BH);
          LH.reversed && LH.points.reverse()
        }))
      }(HH))), BH("    acyclic.undo", (() => function(HH) {
        HH.edges().forEach((BH => {
          let LH = HH.edge(BH);
          if (LH.reversed) {
            HH.removeEdge(BH);
            let AH = LH.forwardName;
            delete LH.reversed, delete LH.forwardName, HH.setEdge(BH.w, BH.v, LH, AH)
          }
        }))
      }(HH))), {
        graph: HH,
        rawNodes: CH
      }
    }

    function ML(HH, BH) {
      HH.nodes().forEach((LH => {
        let AH = HH.node(LH),
          rH = BH.node(LH);
        AH && (AH.x = rH.x, AH.y = rH.y, AH.order = rH.order, AH.rank = rH.rank, BH.children(LH).length && (AH.width = rH.width, AH.height = rH.height))
      })), HH.edges().forEach((LH => {
        let AH = HH.edge(LH),
          rH = BH.edge(LH);
        AH.points = rH.points, Object.hasOwn(rH, "x") && (AH.x = rH.x, AH.y = rH.y)
      })), HH.graph().width = BH.graph().width, HH.graph().height = BH.graph().height
    }
    var xL = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      vL = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      PL = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      TL = ["width", "height", "rank"],
      UL = {
        width: 0,
        height: 0
      },
      VL = ["minlen", "weight", "width", "height", "labeloffset"],
      OL = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      bL = ["labelpos"];

    function kL(HH) {
      let BH = new jH({
          multigraph: !0,
          compound: !0
        }),
        LH = oL(HH.graph());
      return BH.setGraph(Object.assign({}, vL, mL(LH, xL), BB(LH, PL))), HH.nodes().forEach((LH => {
        let AH = mL(oL(HH.node(LH)), TL);
        Object.keys(UL).forEach((HH => {
          void 0 === AH[HH] && (AH[HH] = UL[HH])
        })), BH.setNode(LH, AH);
        let rH = HH.parent(LH);
        void 0 !== rH && BH.setParent(LH, rH)
      })), HH.edges().forEach((LH => {
        let AH = oL(HH.edge(LH));
        BH.setEdge(LH, Object.assign({}, OL, mL(AH, VL), BB(AH, bL)))
      })), BH
    }

    function mL(HH, BH) {
      return LB(BB(HH, BH), Number)
    }

    function oL(HH) {
      let BH = {};
      return HH && Object.entries(HH).forEach((HH => {
        let [LH, AH] = HH;
        "string" == typeof LH && (LH = LH.toLowerCase()), BH[LH] = AH
      })), BH
    }

    function IL(HH) {
      let BH = wH(HH),
        LH = new jH({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return HH.nodes().forEach((BH => {
        LH.setNode(BH, {
          label: BH
        }), LH.setParent(BH, "layer" + HH.node(BH).rank)
      })), HH.edges().forEach((HH => LH.setEdge(HH.v, HH.w, {}, HH.name))), BH.forEach(((HH, BH) => {
        let AH = "layer" + BH;
        LH.setNode(AH, {
          rank: "same"
        }), HH.reduce(((HH, BH) => (LH.setEdge(HH, BH, {
          style: "invis"
        }), BH)))
      })), LH
    }
    var fL = {
        time: JH,
        notime: iH
      },
      lL = {
        graphlib: SH,
        version: SB,
        layout: YL,
        debug: IL,
        util: {
          time: JH,
          notime: iH
        }
      }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);