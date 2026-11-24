/*! For license information please see yma3ej.120.ade77145.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6499: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Graph: () => uT,
      debug: () => am,
      default: () => Xm,
      graphlib: () => MT,
      layout: () => pm,
      util: () => ym,
      version: () => MU
    });
    var WT = Object.defineProperty,
      zT = (TT, UT, mT) => ((TT, UT, mT) => UT in TT ? WT(TT, UT, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: mT
      }) : TT[UT] = mT)(TT, "symbol" != typeof UT ? UT + "" : UT, mT),
      MT = {};
    ((TT, UT) => {
      for (var mT in UT) WT(TT, mT, {
        get: UT[mT],
        enumerable: !0
      })
    })(MT, {
      Graph: () => uT,
      alg: () => vT
    });
    var gT = Object.defineProperty,
      nT = (TT, UT) => {
        for (var mT in UT) gT(TT, mT, {
          get: UT[mT],
          enumerable: !0
        })
      },
      HT = class {
        constructor(TT) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, TT && (this._isDirected = !("directed" in TT) || TT.directed, this._isMultigraph = "multigraph" in TT && TT.multigraph, this._isCompound = "compound" in TT && TT.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(TT) {
          return this._label = TT, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(TT) {
          return this._defaultNodeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((TT => 0 === Object.keys(this._in[TT]).length))
        }
        sinks() {
          return this.nodes().filter((TT => 0 === Object.keys(this._out[TT]).length))
        }
        setNodes(TT, UT) {
          return TT.forEach((TT => {
            void 0 !== UT ? this.setNode(TT, UT) : this.setNode(TT)
          })), this
        }
        setNode(TT, UT) {
          return TT in this._nodes ? (arguments.length > 1 && (this._nodes[TT] = UT), this) : (this._nodes[TT] = arguments.length > 1 ? UT : this._defaultNodeLabelFn(TT), this._isCompound && (this._parent[TT] = "\0", this._children[TT] = {}, this._children["\0"][TT] = !0), this._in[TT] = {}, this._preds[TT] = {}, this._out[TT] = {}, this._sucs[TT] = {}, ++this._nodeCount, this)
        }
        node(TT) {
          return this._nodes[TT]
        }
        hasNode(TT) {
          return TT in this._nodes
        }
        removeNode(TT) {
          if (TT in this._nodes) {
            let UT = TT => this.removeEdge(this._edgeObjs[TT]);
            delete this._nodes[TT], this._isCompound && (this._removeFromParentsChildList(TT), delete this._parent[TT], this.children(TT).forEach((TT => {
              this.setParent(TT)
            })), delete this._children[TT]), Object.keys(this._in[TT]).forEach(UT), delete this._in[TT], delete this._preds[TT], Object.keys(this._out[TT]).forEach(UT), delete this._out[TT], delete this._sucs[TT], --this._nodeCount
          }
          return this
        }
        setParent(TT, UT) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === UT) UT = "\0";
          else {
            for (let mT = UT += ""; void 0 !== mT; mT = this.parent(mT))
              if (mT === TT) throw new Error("Setting " + UT + " as parent of " + TT + " would create a cycle");
            this.setNode(UT)
          }
          return this.setNode(TT), this._removeFromParentsChildList(TT), this._parent[TT] = UT, this._children[UT][TT] = !0, this
        }
        parent(TT) {
          if (this._isCompound) {
            let UT = this._parent[TT];
            if ("\0" !== UT) return UT
          }
        }
        children() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let UT = this._children[TT];
            if (UT) return Object.keys(UT)
          } else {
            if ("\0" === TT) return this.nodes();
            if (this.hasNode(TT)) return []
          }
          return []
        }
        predecessors(TT) {
          let UT = this._preds[TT];
          if (UT) return Object.keys(UT)
        }
        successors(TT) {
          let UT = this._sucs[TT];
          if (UT) return Object.keys(UT)
        }
        neighbors(TT) {
          let UT = this.predecessors(TT);
          if (UT) {
            let mT = new Set(UT),
              WT = this.successors(TT);
            if (WT)
              for (let TT of WT) mT.add(TT);
            return Array.from(mT.values())
          }
        }
        isLeaf(TT) {
          var UT;
          let mT;
          return mT = this.isDirected() ? this.successors(TT) : this.neighbors(TT), 0 === (null != (UT = null == mT ? void 0 : mT.length) ? UT : 0)
        }
        filterNodes(TT) {
          let UT = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          UT.setGraph(this.graph()), Object.entries(this._nodes).forEach((mT => {
            let [WT, zT] = mT;
            TT(WT) && UT.setNode(WT, zT)
          })), Object.values(this._edgeObjs).forEach((TT => {
            UT.hasNode(TT.v) && UT.hasNode(TT.w) && UT.setEdge(TT, this.edge(TT))
          }));
          let mT = {},
            WT = TT => {
              let zT = this.parent(TT);
              return !zT || UT.hasNode(zT) ? (mT[TT] = zT, zT) : zT in mT ? mT[zT] : WT(zT)
            };
          return this._isCompound && UT.nodes().forEach((TT => UT.setParent(TT, WT(TT)))), UT
        }
        setDefaultEdgeLabel(TT) {
          return this._defaultEdgeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(TT, UT) {
          return TT.reduce(((TT, mT) => (void 0 !== UT ? this.setEdge(TT, mT, UT) : this.setEdge(TT, mT), mT))), this
        }
        setEdge(TT, UT, mT, WT) {
          let zT, MT, gT, nT, HT = !1;
          "object" == typeof TT && null !== TT && "v" in TT ? (zT = TT.v, MT = TT.w, gT = TT.name, 2 === arguments.length && (nT = UT, HT = !0)) : (zT = TT, MT = UT, gT = WT, arguments.length > 2 && (nT = mT, HT = !0)), zT = "" + zT, MT = "" + MT, void 0 !== gT && (gT = "" + gT);
          let jT = lT(this._isDirected, zT, MT, gT);
          if (jT in this._edgeLabels) return HT && (this._edgeLabels[jT] = nT), this;
          if (void 0 !== gT && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(zT), this.setNode(MT), this._edgeLabels[jT] = HT ? nT : this._defaultEdgeLabelFn(zT, MT, gT);
          let LT = function(TT, UT, mT, WT) {
            let zT = "" + UT,
              MT = "" + mT;
            if (!TT && zT > MT) {
              let TT = zT;
              zT = MT, MT = TT
            }
            let gT = {
              v: zT,
              w: MT
            };
            return WT && (gT.name = WT), gT
          }(this._isDirected, zT, MT, gT);
          return zT = LT.v, MT = LT.w, Object.freeze(LT), this._edgeObjs[jT] = LT, kT(this._preds[MT], zT), kT(this._sucs[zT], MT), this._in[MT][jT] = LT, this._out[zT][jT] = LT, this._edgeCount++, this
        }
        edge(TT, UT, mT) {
          let WT = 1 === arguments.length ? LT(this._isDirected, TT) : lT(this._isDirected, TT, UT, mT);
          return this._edgeLabels[WT]
        }
        edgeAsObj(TT, UT, mT) {
          let WT = 1 === arguments.length ? this.edge(TT) : this.edge(TT, UT, mT);
          return "object" != typeof WT || null === WT ? {
            label: WT
          } : WT
        }
        hasEdge(TT, UT, mT) {
          return (1 === arguments.length ? LT(this._isDirected, TT) : lT(this._isDirected, TT, UT, mT)) in this._edgeLabels
        }
        removeEdge(TT, UT, mT) {
          let WT = 1 === arguments.length ? LT(this._isDirected, TT) : lT(this._isDirected, TT, UT, mT),
            zT = this._edgeObjs[WT];
          if (zT) {
            let TT = zT.v,
              UT = zT.w;
            delete this._edgeLabels[WT], delete this._edgeObjs[WT], jT(this._preds[UT], TT), jT(this._sucs[TT], UT), delete this._in[UT][WT], delete this._out[TT][WT], this._edgeCount--
          }
          return this
        }
        inEdges(TT, UT) {
          return this.isDirected() ? this.filterEdges(this._in[TT], TT, UT) : this.nodeEdges(TT, UT)
        }
        outEdges(TT, UT) {
          return this.isDirected() ? this.filterEdges(this._out[TT], TT, UT) : this.nodeEdges(TT, UT)
        }
        nodeEdges(TT, UT) {
          if (TT in this._nodes) return this.filterEdges({
            ...this._in[TT],
            ...this._out[TT]
          }, TT, UT)
        }
        _removeFromParentsChildList(TT) {
          delete this._children[this._parent[TT]][TT]
        }
        filterEdges(TT, UT, mT) {
          if (!TT) return;
          let WT = Object.values(TT);
          return mT ? WT.filter((TT => TT.v === UT && TT.w === mT || TT.v === mT && TT.w === UT)) : WT
        }
      };

    function kT(TT, UT) {
      TT[UT] ? TT[UT]++ : TT[UT] = 1
    }

    function jT(TT, UT) {
      void 0 !== TT[UT] && !--TT[UT] && delete TT[UT]
    }

    function lT(TT, UT, mT, WT) {
      let zT = "" + UT,
        MT = "" + mT;
      if (!TT && zT > MT) {
        let TT = zT;
        zT = MT, MT = TT
      }
      return zT + "\x01" + MT + "\x01" + (void 0 === WT ? "\0" : WT)
    }

    function LT(TT, UT) {
      return lT(TT, UT.v, UT.w, UT.name)
    }

    function pT(TT) {
      let UT = {
          options: {
            directed: TT.isDirected(),
            multigraph: TT.isMultigraph(),
            compound: TT.isCompound()
          },
          nodes: BT(TT),
          edges: ZT(TT)
        },
        mT = TT.graph();
      return void 0 !== mT && (UT.value = structuredClone(mT)), UT
    }

    function BT(TT) {
      return TT.nodes().map((UT => {
        let mT = TT.node(UT),
          WT = TT.parent(UT),
          zT = {
            v: UT
          };
        return void 0 !== mT && (zT.value = mT), void 0 !== WT && (zT.parent = WT), zT
      }))
    }

    function ZT(TT) {
      return TT.edges().map((UT => {
        let mT = TT.edge(UT),
          WT = {
            v: UT.v,
            w: UT.w
          };
        return void 0 !== UT.name && (WT.name = UT.name), void 0 !== mT && (WT.value = mT), WT
      }))
    }

    function cT(TT) {
      let UT = new HT(TT.options);
      return void 0 !== TT.value && UT.setGraph(TT.value), TT.nodes.forEach((TT => {
        UT.setNode(TT.v, TT.value), TT.parent && UT.setParent(TT.v, TT.parent)
      })), TT.edges.forEach((TT => {
        UT.setEdge({
          v: TT.v,
          w: TT.w,
          name: TT.name
        }, TT.value)
      })), UT
    }
    nT({}, {
      read: () => cT,
      write: () => pT
    });
    var vT = {};
    nT(vT, {
      CycleException: () => tT,
      bellmanFord: () => qT,
      components: () => iT,
      dijkstra: () => eT,
      dijkstraAll: () => YT,
      findCycles: () => xT,
      floydWarshall: () => wT,
      isAcyclic: () => yT,
      postorder: () => sT,
      preorder: () => FT,
      prim: () => PT,
      shortestPaths: () => VT,
      tarjan: () => JT,
      topsort: () => aT
    });
    var fT = () => 1;

    function qT(TT, UT, mT, WT) {
      return function(TT, UT, mT, WT) {
        let zT, MT = {},
          gT = 0,
          nT = TT.nodes(),
          HT = function(TT) {
            let UT = MT[TT.v],
              WT = MT[TT.w];
            if (!UT || !WT) return;
            let gT = mT(TT);
            UT.distance + gT < WT.distance && (MT[TT.w] = {
              distance: UT.distance + gT,
              predecessor: TT.v
            }, zT = !0)
          },
          kT = function() {
            nT.forEach((function(TT) {
              WT(TT).forEach((function(UT) {
                let mT = UT.v === TT ? UT.v : UT.w,
                  WT = mT === UT.v ? UT.w : UT.v;
                HT({
                  v: mT,
                  w: WT
                })
              }))
            }))
          };
        nT.forEach((function(TT) {
          let mT = TT === UT ? 0 : Number.POSITIVE_INFINITY;
          MT[TT] = {
            distance: mT,
            predecessor: ""
          }
        }));
        let jT = nT.length;
        for (let lT = 1; lT < jT && (zT = !1, gT++, kT(), zT); lT++);
        if (gT === jT - 1 && (zT = !1, kT(), zT)) throw new Error("The graph contains a negative weight cycle");
        return MT
      }(TT, String(UT), mT || fT, WT || function(UT) {
        var mT;
        return null != (mT = TT.outEdges(UT)) ? mT : []
      })
    }

    function iT(TT) {
      let UT, mT = {},
        WT = [];

      function zT(WT) {
        var MT, gT;
        WT in mT || (mT[WT] = !0, UT.push(WT), null == (MT = TT.successors(WT)) || MT.forEach(zT), null == (gT = TT.predecessors(WT)) || gT.forEach(zT))
      }
      return TT.nodes().forEach((function(TT) {
        UT = [], zT(TT), UT.length && WT.push(UT)
      })), WT
    }
    var bT = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((TT => TT.key))
        }
        has(TT) {
          return TT in this._keyIndices
        }
        priority(TT) {
          let UT = this._keyIndices[TT];
          if (void 0 !== UT) return this._arr[UT].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(TT, UT) {
          let mT = this._keyIndices,
            WT = String(TT);
          if (!(WT in mT)) {
            let TT = this._arr,
              zT = TT.length;
            return mT[WT] = zT, TT.push({
              key: WT,
              priority: UT
            }), this._decrease(zT), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let TT = this._arr.pop();
          return delete this._keyIndices[TT.key], this._heapify(0), TT.key
        }
        decrease(TT, UT) {
          let mT = this._keyIndices[TT];
          if (void 0 === mT) throw new Error(`Key not found: ${TT}`);
          let WT = this._arr[mT].priority;
          if (UT > WT) throw new Error(`New priority is greater than current priority. Key: ${TT} Old: ${WT} New: ${UT}`);
          this._arr[mT].priority = UT, this._decrease(mT)
        }
        _heapify(TT) {
          let UT = this._arr,
            mT = 2 * TT,
            WT = mT + 1,
            zT = TT;
          mT < UT.length && (zT = UT[mT].priority < UT[zT].priority ? mT : zT, WT < UT.length && (zT = UT[WT].priority < UT[zT].priority ? WT : zT), zT !== TT && (this._swap(TT, zT), this._heapify(zT)))
        }
        _decrease(TT) {
          let UT, mT = this._arr,
            WT = mT[TT].priority;
          for (; 0 !== TT && (UT = TT >> 1, !(mT[UT].priority < WT));) this._swap(TT, UT), TT = UT
        }
        _swap(TT, UT) {
          let mT = this._arr,
            WT = this._keyIndices,
            zT = mT[TT],
            MT = mT[UT];
          mT[TT] = MT, mT[UT] = zT, WT[MT.key] = TT, WT[zT.key] = UT
        }
      },
      OT = () => 1;

    function eT(TT, UT, mT, WT) {
      return function(TT, UT, mT, WT) {
        let zT, MT, gT = {},
          nT = new bT,
          HT = function(TT) {
            let UT = TT.v !== zT ? TT.v : TT.w,
              WT = gT[UT];
            if (!WT) return;
            let HT = mT(TT),
              kT = MT.distance + HT;
            if (HT < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + TT + " Weight: " + HT);
            kT < WT.distance && (WT.distance = kT, WT.predecessor = zT, nT.decrease(UT, kT))
          };
        for (TT.nodes().forEach((function(TT) {
            let mT = TT === UT ? 0 : Number.POSITIVE_INFINITY;
            gT[TT] = {
              distance: mT,
              predecessor: ""
            }, nT.add(TT, mT)
          })); nT.size() > 0;) {
          zT = nT.removeMin();
          let TT = gT[zT];
          if (!TT || TT.distance === Number.POSITIVE_INFINITY) break;
          MT = TT, WT(zT).forEach(HT)
        }
        return gT
      }(TT, String(UT), mT || OT, WT || function(UT) {
        var mT;
        return null != (mT = TT.outEdges(UT)) ? mT : []
      })
    }

    function YT(TT, UT, mT) {
      return TT.nodes().reduce((function(WT, zT) {
        return WT[zT] = eT(TT, zT, UT, mT), WT
      }), {})
    }

    function JT(TT) {
      let UT = 0,
        mT = [],
        WT = {},
        zT = [];

      function MT(gT) {
        var nT;
        let HT = WT[gT] = {
          onStack: !0,
          lowlink: UT,
          index: UT++
        };
        if (mT.push(gT), null == (nT = TT.successors(gT)) || nT.forEach((function(TT) {
            if (TT in WT) {
              let UT = WT[TT];
              null != UT && UT.onStack && (HT.lowlink = Math.min(HT.lowlink, UT.index))
            } else {
              MT(TT);
              let UT = WT[TT];
              UT && (HT.lowlink = Math.min(HT.lowlink, UT.lowlink))
            }
          })), HT.lowlink === HT.index) {
          let TT, UT = [];
          do {
            TT = mT.pop();
            let zT = WT[TT];
            zT && (zT.onStack = !1), UT.push(TT)
          } while (gT !== TT);
          zT.push(UT)
        }
      }
      return TT.nodes().forEach((function(TT) {
        TT in WT || MT(TT)
      })), zT
    }

    function xT(TT) {
      return JT(TT).filter((function(UT) {
        var mT;
        let WT = UT[0];
        return !!WT && (UT.length > 1 || 1 === UT.length && (null != (mT = TT.outEdges(WT, WT)) ? mT : []).length > 0)
      }))
    }
    var dT = () => 1;

    function wT(TT, UT, mT) {
      return function(TT, UT, mT) {
        let WT = {},
          zT = TT.nodes();
        return zT.forEach((function(TT) {
          let MT = {};
          WT[TT] = MT, MT[TT] = {
            distance: 0,
            predecessor: ""
          }, zT.forEach((function(UT) {
            TT !== UT && (MT[UT] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), mT(TT).forEach((function(mT) {
            let WT = mT.v === TT ? mT.w : mT.v,
              zT = UT(mT);
            MT[WT] = {
              distance: zT,
              predecessor: TT
            }
          }))
        })), zT.forEach((function(TT) {
          let UT = WT[TT];
          UT && zT.forEach((function(mT) {
            let MT = WT[mT];
            MT && zT.forEach((function(mT) {
              let WT = MT[TT],
                zT = UT[mT],
                gT = MT[mT];
              if (WT && zT && gT) {
                let TT = WT.distance + zT.distance;
                TT < gT.distance && (gT.distance = TT, gT.predecessor = zT.predecessor)
              }
            }))
          }))
        })), WT
      }(TT, UT || dT, mT || function(UT) {
        var mT;
        return null != (mT = TT.outEdges(UT)) ? mT : []
      })
    }
    var tT = class extends Error {
      constructor(TT) {
        super(TT), this.name = "CycleException"
      }
    };

    function aT(TT) {
      let UT = {},
        mT = {},
        WT = [];
      if (TT.sinks().forEach((function zT(MT) {
          var gT;
          if (MT in mT) throw new tT;
          MT in UT || (mT[MT] = !0, UT[MT] = !0, null == (gT = TT.predecessors(MT)) || gT.forEach(zT), delete mT[MT], WT.push(MT))
        })), Object.keys(UT).length !== TT.nodeCount()) throw new tT;
      return WT
    }

    function yT(TT) {
      try {
        aT(TT)
      } catch (UT) {
        if (UT instanceof tT) return !1;
        throw UT
      }
      return !0
    }

    function XT(TT, UT, mT, WT, zT) {
      Array.isArray(UT) || (UT = [UT]);
      let MT = UT => {
          var mT;
          return null != (mT = TT.isDirected() ? TT.successors(UT) : TT.neighbors(UT)) ? mT : []
        },
        gT = {};
      return UT.forEach((function(UT) {
        if (!TT.hasNode(UT)) throw new Error("Graph does not have node: " + UT);
        zT = IT(TT, UT, "post" === mT, gT, MT, WT, zT)
      })), zT
    }

    function IT(TT, UT, mT, WT, zT, MT, gT) {
      return UT in WT || (WT[UT] = !0, mT || (gT = MT(gT, UT)), zT(UT).forEach((function(UT) {
        gT = IT(TT, UT, mT, WT, zT, MT, gT)
      })), mT && (gT = MT(gT, UT))), gT
    }

    function QT(TT, UT, mT) {
      return XT(TT, UT, mT, (function(TT, UT) {
        return TT.push(UT), TT
      }), [])
    }

    function sT(TT, UT) {
      return QT(TT, UT, "post")
    }

    function FT(TT, UT) {
      return QT(TT, UT, "pre")
    }

    function PT(TT, UT) {
      var mT;
      let WT, zT = new HT,
        MT = {},
        gT = new bT;

      function nT(TT) {
        let mT = TT.v === WT ? TT.w : TT.v,
          zT = gT.priority(mT);
        if (void 0 !== zT) {
          let nT = UT(TT);
          nT < zT && (MT[mT] = WT, gT.decrease(mT, nT))
        }
      }
      if (0 === TT.nodeCount()) return zT;
      TT.nodes().forEach((function(TT) {
        gT.add(TT, Number.POSITIVE_INFINITY), zT.setNode(TT)
      }));
      let kT = TT.nodes()[0];
      void 0 !== kT && gT.decrease(kT, 0);
      let jT = !1;
      for (; gT.size() > 0;) {
        if (WT = gT.removeMin(), WT in MT) zT.setEdge(WT, MT[WT]);
        else {
          if (jT) throw new Error("Input graph is not connected: " + TT);
          jT = !0
        }
        null == (mT = TT.nodeEdges(WT)) || mT.forEach(nT)
      }
      return zT
    }

    function VT(TT, UT, mT, WT) {
      return function(TT, UT, mT, WT) {
        if (void 0 === mT) return eT(TT, UT, mT, WT);
        let zT = !1,
          MT = TT.nodes();
        for (let gT = 0; gT < MT.length; gT++) {
          let nT = MT[gT];
          if (void 0 === nT) continue;
          let HT = WT(nT);
          for (let TT = 0; TT < HT.length; TT++) {
            let UT = HT[TT];
            if (!UT) continue;
            let WT = UT.v === nT ? UT.v : UT.w;
            mT({
              v: WT,
              w: WT === UT.v ? UT.w : UT.v
            }) < 0 && (zT = !0)
          }
          if (zT) return qT(TT, UT, mT, WT)
        }
        return eT(TT, UT, mT, WT)
      }(TT, UT, mT, null != WT ? WT : UT => {
        var mT;
        return null != (mT = TT.outEdges(UT)) ? mT : []
      })
    }
    var uT = HT;

    function CT(TT, UT, mT, WT) {
      let zT = WT;
      for (; TT.hasNode(zT);) zT = RT(WT);
      return mT.dummy = UT, TT.setNode(zT, mT), zT
    }

    function rT(TT) {
      let UT = new uT({
        multigraph: TT.isMultigraph()
      }).setGraph(TT.graph());
      return TT.nodes().forEach((mT => {
        TT.children(mT).length || UT.setNode(mT, TT.node(mT))
      })), TT.edges().forEach((mT => {
        UT.setEdge(mT, TT.edge(mT))
      })), UT
    }

    function KT(TT, UT) {
      let mT, WT, zT = TT.x,
        MT = TT.y,
        gT = UT.x - zT,
        nT = UT.y - MT,
        HT = TT.width / 2,
        kT = TT.height / 2;
      if (!gT && !nT) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(nT) * HT > Math.abs(gT) * kT ? (nT < 0 && (kT = -kT), mT = kT * gT / nT, WT = kT) : (gT < 0 && (HT = -HT), mT = HT, WT = HT * nT / gT), {
        x: zT + mT,
        y: MT + WT
      }
    }

    function ST(TT) {
      let UT = TU(hT(TT) + 1).map((() => []));
      return TT.nodes().forEach((mT => {
        let WT = TT.node(mT),
          zT = WT.rank;
        void 0 !== zT && (UT[zT] || (UT[zT] = []), UT[zT][WT.order] = mT)
      })), UT
    }

    function GT(TT, UT, mT, WT) {
      let zT = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (zT.rank = mT, zT.order = WT), CT(TT, "border", zT, UT)
    }
    var NT = 65535;

    function ET(TT, UT) {
      if (UT.length > NT) {
        let mT = function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NT,
            mT = [];
          for (let WT = 0; WT < TT.length; WT += UT) {
            let zT = TT.slice(WT, WT + UT);
            mT.push(zT)
          }
          return mT
        }(UT);
        return TT(...mT.map((UT => TT(...UT))))
      }
      return TT(...UT)
    }

    function hT(TT) {
      let UT = TT.nodes().map((UT => {
        let mT = TT.node(UT).rank;
        return void 0 === mT ? Number.MIN_VALUE : mT
      }));
      return ET(Math.max, UT)
    }

    function DT(TT, UT) {
      let mT = Date.now();
      try {
        return UT()
      } finally {
        console.log(TT + " time: " + (Date.now() - mT) + "ms")
      }
    }

    function oT(TT, UT) {
      return UT()
    }
    var AT = 0;

    function RT(TT) {
      return TT + "" + ++AT
    }

    function TU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == UT && (UT = TT, TT = 0);
      let WT = TT => TT < UT;
      mT < 0 && (WT = TT => UT < TT);
      let zT = [];
      for (let MT = TT; WT(MT); MT += mT) zT.push(MT);
      return zT
    }

    function UU(TT, UT) {
      let mT = {};
      for (let WT of UT) void 0 !== TT[WT] && (mT[WT] = TT[WT]);
      return mT
    }

    function mU(TT, UT) {
      let mT;
      return mT = "string" == typeof UT ? TT => TT[UT] : UT, Object.entries(TT).reduce(((TT, UT) => {
        let [WT, zT] = UT;
        return TT[WT] = mT(zT, WT), TT
      }), {})
    }
    var WU = "\0";

    function zU(TT, UT, mT) {
      var WT, zT, MT, gT, nT, HT;
      if (!(TT && UT && mT && "edge" === UT.dummy && "edge" === mT.dummy && UT.edgeObj && mT.edgeObj && TT[UT.edgeObj.v] && TT[mT.edgeObj.v] && TT[UT.edgeObj.w] && TT[mT.edgeObj.w])) return 0;
      let kT = !0;
      UT.edgeObj.w === mT.edgeObj.w && (kT = !1);
      let jT = kT ? null != (zT = null == (WT = TT[UT.edgeObj.v]) ? void 0 : WT.rank) ? zT : NaN : null != (gT = null == (MT = TT[UT.edgeObj.w]) ? void 0 : MT.rank) ? gT : NaN,
        lT = Object.entries(TT).find((TT => {
          var mT, WT;
          return (null == (mT = TT[1].edgeObj) ? void 0 : mT.v) === UT.edgeObj.v && (null == (WT = TT[1].edgeObj) ? void 0 : WT.w) === UT.edgeObj.w && TT[1].rank === jT
        })),
        LT = Object.entries(TT).find((TT => {
          var UT, WT;
          return (null == (UT = TT[1].edgeObj) ? void 0 : UT.v) === mT.edgeObj.v && (null == (WT = TT[1].edgeObj) ? void 0 : WT.w) === mT.edgeObj.w && TT[1].rank === jT
        }));
      if (!lT || !LT) return 0;
      let pT = null != (nT = lT[1].order) ? nT : NaN,
        BT = null != (HT = LT[1].order) ? HT : NaN;
      return isNaN(pT - BT) ? 0 : pT - BT
    }
    var MU = "3.1.1";

    function gU(TT) {
      TT._prev._next = TT._next, TT._next._prev = TT._prev, delete TT._next, delete TT._prev
    }

    function nU(TT, UT) {
      if ("_next" !== TT && "_prev" !== TT) return UT
    }
    var HU = class {
        constructor() {
          zT(this, "_sentinel");
          let TT = {};
          TT._next = TT._prev = TT, this._sentinel = TT
        }
        dequeue() {
          let TT = this._sentinel,
            UT = TT._prev;
          if (UT !== TT) return gU(UT), UT
        }
        enqueue(TT) {
          let UT = this._sentinel;
          TT._prev && TT._next && gU(TT), TT._next = UT._next, UT._next._prev = TT, UT._next = TT, TT._prev = UT
        }
        toString() {
          let TT = [],
            UT = this._sentinel,
            mT = UT._prev;
          for (; mT !== UT;) TT.push(JSON.stringify(mT, nU)), mT = mT._prev;
          return "[" + TT.join(", ") + "]"
        }
      },
      kU = () => 1;

    function jU(TT, UT) {
      if (TT.nodeCount() <= 1) return [];
      let mT = function(TT, UT) {
        let mT = new uT,
          WT = 0,
          zT = 0;
        TT.nodes().forEach((TT => {
          mT.setNode(TT, {
            v: TT,
            in: 0,
            out: 0
          })
        })), TT.edges().forEach((TT => {
          let MT = mT.edge(TT.v, TT.w) || 0,
            gT = UT(TT),
            nT = MT + gT;
          mT.setEdge(TT.v, TT.w, nT);
          let HT = mT.node(TT.v),
            kT = mT.node(TT.w);
          zT = Math.max(zT, HT.out += gT), WT = Math.max(WT, kT.in += gT)
        }));
        let MT = function(TT) {
            let UT = [];
            for (let mT = 0; mT < TT; mT++) UT.push(mT);
            return UT
          }(zT + WT + 3).map((() => new HU)),
          gT = WT + 1;
        return mT.nodes().forEach((TT => {
          LU(MT, gT, mT.node(TT))
        })), {
          graph: mT,
          buckets: MT,
          zeroIdx: gT
        }
      }(TT, UT || kU);
      return function(TT, UT, mT) {
        var WT;
        let zT, MT = [],
          gT = UT[UT.length - 1],
          nT = UT[0];
        for (; TT.nodeCount();) {
          for (; zT = nT.dequeue();) lU(TT, UT, mT, zT);
          for (; zT = gT.dequeue();) lU(TT, UT, mT, zT);
          if (TT.nodeCount())
            for (let gT = UT.length - 2; gT > 0; --gT)
              if (zT = null == (WT = UT[gT]) ? void 0 : WT.dequeue(), zT) {
                MT = MT.concat(lU(TT, UT, mT, zT, !0) || []);
                break
              }
        }
        return MT
      }(mT.graph, mT.buckets, mT.zeroIdx).flatMap((UT => TT.outEdges(UT.v, UT.w) || []))
    }

    function lU(TT, UT, mT, WT, zT) {
      let MT = [],
        gT = zT ? MT : void 0;
      return (TT.inEdges(WT.v) || []).forEach((WT => {
        let gT = TT.edge(WT),
          nT = TT.node(WT.v);
        zT && MT.push({
          v: WT.v,
          w: WT.w
        }), nT.out -= gT, LU(UT, mT, nT)
      })), (TT.outEdges(WT.v) || []).forEach((WT => {
        let zT = TT.edge(WT),
          MT = WT.w,
          gT = TT.node(MT);
        gT.in -= zT, LU(UT, mT, gT)
      })), TT.removeNode(WT.v), gT
    }

    function LU(TT, UT, mT) {
      var WT, zT, MT;
      mT.out ? mT.in ? null == (MT = TT[mT.out - mT.in + UT]) || MT.enqueue(mT) : null == (zT = TT[TT.length - 1]) || zT.enqueue(mT) : null == (WT = TT[0]) || WT.enqueue(mT)
    }

    function pU(TT, UT) {
      var mT;
      ("greedy" === TT.graph().acyclicer ? jU(TT, (mT = TT, TT => mT.edge(TT).weight)) : function(TT, UT) {
        let mT = [],
          WT = {},
          zT = {};

        function MT(UT) {
          Object.hasOwn(zT, UT) || (zT[UT] = !0, WT[UT] = !0, TT.outEdges(UT).forEach((TT => {
            Object.hasOwn(WT, TT.w) ? mT.push(TT) : MT(TT.w)
          })), delete WT[UT])
        }

        function gT(MT) {
          var nT;
          Object.hasOwn(zT, MT) || (zT[MT] = !0, WT[MT] = !0, null == (nT = TT.outEdges(MT)) || nT.forEach((zT => {
            var nT, HT;
            Object.hasOwn(WT, zT.w) || (null == (nT = UT.node(MT)) ? void 0 : nT.rank) > (null == (HT = UT.node(zT.w)) ? void 0 : HT.rank) && function(TT, UT, mT) {
              let WT = new Set;

              function zT(UT) {
                var MT;
                if (TT.sources().includes(UT)) return !0;
                WT.add(UT);
                for (let gT of null != (MT = TT.inEdges(UT)) ? MT : [])
                  if ((gT.v !== mT.v || gT.w !== mT.w) && !WT.has(gT.v) && zT(gT.v)) return !0;
                return !1
              }
              return zT(UT)
            }(TT, zT.w, zT) ? mT.push(zT) : gT(zT.w)
          })), delete WT[MT])
        }
        let nT = MT;
        return UT && "function" == typeof UT.node && (nT = gT), TT.sources().forEach(nT), TT.nodes().forEach(nT), mT
      }(TT, null != UT ? UT : null)).forEach((UT => {
        let mT = TT.edge(UT);
        TT.removeEdge(UT), mT.forwardName = UT.name, mT.reversed = !0, TT.setEdge(UT.w, UT.v, mT, RT("rev"))
      }))
    }

    function BU(TT) {
      TT.graph().dummyChains = [], TT.edges().forEach((UT => function(TT, UT) {
        let mT, WT, zT, MT = UT.v,
          gT = TT.node(MT).rank,
          nT = UT.w,
          HT = TT.node(nT).rank,
          kT = UT.name,
          jT = TT.edge(UT),
          lT = jT.labelRank;
        if (HT === gT + 1) return;
        for (TT.removeEdge(UT), zT = 0, ++gT; gT < HT; ++zT, ++gT) jT.points = [], WT = {
          width: 0,
          height: 0,
          edgeLabel: jT,
          edgeObj: UT,
          rank: gT
        }, mT = CT(TT, "edge", WT, "_d"), gT === lT && (WT.width = jT.width, WT.height = jT.height, WT.dummy = "edge-label", WT.labelpos = jT.labelpos), TT.setEdge(MT, mT, {
          weight: jT.weight
        }, kT), 0 === zT && TT.graph().dummyChains.push(mT), MT = mT;
        TT.setEdge(MT, nT, {
          weight: jT.weight
        }, kT)
      }(TT, UT)))
    }

    function ZU(TT) {
      let UT = {};
      TT.sources().forEach((function mT(WT) {
        let zT = TT.node(WT);
        if (Object.hasOwn(UT, WT)) return zT.rank;
        UT[WT] = !0;
        let MT = TT.outEdges(WT),
          gT = MT ? MT.map((UT => null == UT ? Number.POSITIVE_INFINITY : mT(UT.w) - TT.edge(UT).minlen)) : [],
          nT = ET(Math.min, gT);
        return nT === Number.POSITIVE_INFINITY && (nT = 0), zT.rank = nT
      }))
    }

    function cU(TT, UT) {
      return TT.node(UT.w).rank - TT.node(UT.v).rank - TT.edge(UT).minlen
    }
    var vU = function(TT) {
      let UT = new uT({
          directed: !1
        }),
        mT = TT.nodes();
      if (0 === mT.length) throw new Error("Graph must have at least one node");
      let WT, zT, MT = mT[0],
        gT = TT.nodeCount();
      for (UT.setNode(MT, {}); fU(UT, TT) < gT && (WT = qU(UT, TT), WT);) zT = UT.hasNode(WT.v) ? cU(TT, WT) : -cU(TT, WT), iU(UT, TT, zT);
      return UT
    };

    function fU(TT, UT) {
      return TT.nodes().forEach((function mT(WT) {
        let zT = UT.nodeEdges(WT);
        zT && zT.forEach((zT => {
          let MT = zT.v,
            gT = WT === MT ? zT.w : MT;
          !TT.hasNode(gT) && !cU(UT, zT) && (TT.setNode(gT, {}), TT.setEdge(WT, gT, {}), mT(gT))
        }))
      })), TT.nodeCount()
    }

    function qU(TT, UT) {
      return UT.edges().reduce(((mT, WT) => {
        let zT = Number.POSITIVE_INFINITY;
        return TT.hasNode(WT.v) !== TT.hasNode(WT.w) && (zT = cU(UT, WT)), zT < mT[0] ? [zT, WT] : mT
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function iU(TT, UT, mT) {
      TT.nodes().forEach((TT => UT.node(TT).rank += mT))
    }
    var {
      preorder: bU,
      postorder: OU
    } = vT, eU = YU;

    function YU(TT) {
      TT = function(TT) {
        let UT = (new uT).setGraph(TT.graph());
        return TT.nodes().forEach((mT => UT.setNode(mT, TT.node(mT)))), TT.edges().forEach((mT => {
          let WT = UT.edge(mT.v, mT.w) || {
              weight: 0,
              minlen: 1
            },
            zT = TT.edge(mT);
          UT.setEdge(mT.v, mT.w, {
            weight: WT.weight + zT.weight,
            minlen: Math.max(WT.minlen, zT.minlen)
          })
        })), UT
      }(TT), ZU(TT);
      let UT, mT, WT = vU(TT);
      for (dU(WT), JU(WT, TT); UT = tU(WT);) mT = aU(WT, TT, UT), yU(WT, TT, UT, mT)
    }

    function JU(TT, UT) {
      let mT = OU(TT, TT.nodes());
      mT = mT.slice(0, mT.length - 1), mT.forEach((mT => function(TT, UT, mT) {
        let WT = TT.node(mT).parent,
          zT = TT.edge(mT, WT);
        zT.cutvalue = xU(TT, UT, mT)
      }(TT, UT, mT)))
    }

    function xU(TT, UT, mT) {
      let WT = TT.node(mT).parent,
        zT = !0,
        MT = UT.edge(mT, WT),
        gT = 0;
      MT || (zT = !1, MT = UT.edge(WT, mT)), gT = MT.weight;
      let nT = UT.nodeEdges(mT);
      return nT && nT.forEach((MT => {
        let nT = MT.v === mT,
          HT = nT ? MT.w : MT.v;
        if (HT !== WT) {
          let WT = nT === zT,
            kT = UT.edge(MT).weight;
          if (gT += WT ? kT : -kT, function(TT, UT, mT) {
              return TT.hasEdge(UT, mT)
            }(TT, mT, HT)) {
            let UT = TT.edge(mT, HT).cutvalue;
            gT += WT ? -UT : UT
          }
        }
      })), gT
    }

    function dU(TT, UT) {
      arguments.length < 2 && (UT = TT.nodes()[0]), wU(TT, {}, 1, UT)
    }

    function wU(TT, UT, mT, WT, zT) {
      let MT = mT,
        gT = TT.node(WT);
      UT[WT] = !0;
      let nT = TT.neighbors(WT);
      return nT && nT.forEach((zT => {
        Object.hasOwn(UT, zT) || (mT = wU(TT, UT, mT, zT, WT))
      })), gT.low = MT, gT.lim = mT++, zT ? gT.parent = zT : delete gT.parent, mT
    }

    function tU(TT) {
      return TT.edges().find((UT => TT.edge(UT).cutvalue < 0))
    }

    function aU(TT, UT, mT) {
      let WT = mT.v,
        zT = mT.w;
      UT.hasEdge(WT, zT) || (WT = mT.w, zT = mT.v);
      let MT = TT.node(WT),
        gT = TT.node(zT),
        nT = MT,
        HT = !1;
      return MT.lim > gT.lim && (nT = gT, HT = !0), UT.edges().filter((UT => HT === XU(TT, TT.node(UT.v), nT) && HT !== XU(TT, TT.node(UT.w), nT))).reduce(((TT, mT) => cU(UT, mT) < cU(UT, TT) ? mT : TT))
    }

    function yU(TT, UT, mT, WT) {
      let zT = mT.v,
        MT = mT.w;
      TT.removeEdge(zT, MT), TT.setEdge(WT.v, WT.w, {}), dU(TT), JU(TT, UT),
        function(TT, UT) {
          let mT = TT.nodes().find((UT => !TT.node(UT).parent));
          if (!mT) return;
          let WT = bU(TT, [mT]);
          WT = WT.slice(1), WT.forEach((mT => {
            let WT = TT.node(mT).parent,
              zT = UT.edge(mT, WT),
              MT = !1;
            zT || (zT = UT.edge(WT, mT), MT = !0), UT.node(mT).rank = UT.node(WT).rank + (MT ? zT.minlen : -zT.minlen)
          }))
        }(TT, UT)
    }

    function XU(TT, UT, mT) {
      return mT.low <= UT.lim && UT.lim <= mT.lim
    }
    YU.initLowLimValues = dU, YU.initCutValues = JU, YU.calcCutValue = xU, YU.leaveEdge = tU, YU.enterEdge = aU, YU.exchangeEdges = yU;
    var IU = function(TT) {
      let UT = TT.graph().ranker;
      if ("function" == typeof UT) return UT(TT);
      switch (UT) {
        case "network-simplex":
        default:
          sU(TT);
          break;
        case "tight-tree":
          ! function(TT) {
            ZU(TT), vU(TT)
          }(TT);
          break;
        case "longest-path":
          QU(TT);
        case "none":
      }
    };
    var QU = ZU;

    function sU(TT) {
      eU(TT)
    }
    var FU = function(TT) {
      let UT = function(TT) {
          let UT = {},
            mT = 0;

          function WT(zT) {
            let MT = mT;
            TT.children(zT).forEach(WT), UT[zT] = {
              low: MT,
              lim: mT++
            }
          }
          return TT.children(WU).forEach(WT), UT
        }(TT),
        mT = TT.graph();
      if (!Array.isArray(mT.dummyChains)) return;
      mT.dummyChains.forEach((mT => {
        let WT = TT.node(mT),
          zT = WT.edgeObj,
          MT = function(TT, UT, mT, WT) {
            let zT, MT = [],
              gT = [],
              nT = Math.min(UT[mT].low, UT[WT].low),
              HT = Math.max(UT[mT].lim, UT[WT].lim);
            zT = mT;
            do {
              zT = TT.parent(zT), MT.push(zT)
            } while (zT && (UT[zT].low > nT || HT > UT[zT].lim));
            let kT = zT,
              jT = WT;
            for (;
              (jT = TT.parent(jT)) !== kT;) gT.push(jT);
            return {
              path: MT.concat(gT.reverse()),
              lca: kT
            }
          }(TT, UT, zT.v, zT.w),
          gT = MT.path,
          nT = MT.lca,
          HT = 0,
          kT = gT[HT],
          jT = !0;
        for (; mT !== zT.w;) {
          if (WT = TT.node(mT), jT) {
            for (;
              (kT = gT[HT]) !== nT && TT.node(kT).maxRank < WT.rank;) HT++;
            kT === nT && (jT = !1)
          }
          if (!jT) {
            for (; HT < gT.length - 1 && TT.node(gT[HT + 1]).minRank <= WT.rank;) HT++;
            kT = gT[HT]
          }
          void 0 !== kT && TT.setParent(mT, kT), mT = TT.successors(mT)[0]
        }
      }))
    };

    function PU(TT) {
      let UT = CT(TT, "root", {}, "_root"),
        mT = function(TT) {
          let UT = {};

          function mT(WT, zT) {
            let MT = TT.children(WT);
            MT && MT.length && MT.forEach((TT => mT(TT, zT + 1))), UT[WT] = zT
          }
          return TT.children(WU).forEach((TT => mT(TT, 1))), UT
        }(TT),
        WT = Object.values(mT),
        zT = ET(Math.max, WT) - 1,
        MT = 2 * zT + 1;
      TT.graph().nestingRoot = UT, TT.edges().forEach((UT => TT.edge(UT).minlen *= MT));
      let gT = function(TT) {
        return TT.edges().reduce(((UT, mT) => UT + TT.edge(mT).weight), 0)
      }(TT) + 1;
      TT.children(WU).forEach((WT => {
        VU(TT, UT, MT, gT, zT, mT, WT)
      })), TT.graph().nodeRankFactor = MT
    }

    function VU(TT, UT, mT, WT, zT, MT, gT) {
      var nT;
      let HT = TT.children(gT);
      if (!HT.length) return void(gT !== UT && TT.setEdge(UT, gT, {
        weight: 0,
        minlen: mT
      }));
      let kT = GT(TT, "_bt"),
        jT = GT(TT, "_bb"),
        lT = TT.node(gT);
      TT.setParent(kT, gT), lT.borderTop = kT, TT.setParent(jT, gT), lT.borderBottom = jT, HT.forEach((nT => {
        var HT;
        VU(TT, UT, mT, WT, zT, MT, nT);
        let lT = TT.node(nT),
          LT = lT.borderTop ? lT.borderTop : nT,
          pT = lT.borderBottom ? lT.borderBottom : nT,
          BT = lT.borderTop ? WT : 2 * WT,
          ZT = LT !== pT ? 1 : zT - (null != (HT = MT[gT]) ? HT : 0) + 1;
        TT.setEdge(kT, LT, {
          weight: BT,
          minlen: ZT,
          nestingEdge: !0
        }), TT.setEdge(pT, jT, {
          weight: BT,
          minlen: ZT,
          nestingEdge: !0
        })
      })), TT.parent(gT) || TT.setEdge(UT, kT, {
        weight: 0,
        minlen: zT + (null != (nT = MT[gT]) ? nT : 0)
      })
    }
    var uU = function(TT) {
      TT.children(WU).forEach((function UT(mT) {
        let WT = TT.children(mT),
          zT = TT.node(mT);
        if (WT.length && WT.forEach(UT), zT && Object.hasOwn(zT, "minRank")) {
          zT.borderLeft = [], zT.borderRight = [];
          for (let UT = zT.minRank, WT = zT.maxRank + 1; UT < WT; ++UT) CU(TT, "borderLeft", "_bl", mT, zT, UT), CU(TT, "borderRight", "_br", mT, zT, UT)
        }
      }))
    };

    function CU(TT, UT, mT, WT, zT, MT) {
      let gT = {
          width: 0,
          height: 0,
          rank: MT,
          borderType: UT
        },
        nT = zT[UT][MT - 1],
        HT = CT(TT, "border", gT, mT);
      zT[UT][MT] = HT, TT.setParent(HT, WT), nT && TT.setEdge(nT, HT, {
        weight: 1
      })
    }

    function rU(TT) {
      var UT;
      let mT = null == (UT = TT.graph().rankdir) ? void 0 : UT.toLowerCase();
      ("bt" === mT || "rl" === mT) && function(TT) {
        TT.nodes().forEach((UT => GU(TT.node(UT)))), TT.edges().forEach((UT => {
          var mT;
          let WT = TT.edge(UT);
          null == (mT = WT.points) || mT.forEach(GU), Object.hasOwn(WT, "y") && GU(WT)
        }))
      }(TT), ("lr" === mT || "rl" === mT) && (function(TT) {
        TT.nodes().forEach((UT => NU(TT.node(UT)))), TT.edges().forEach((UT => {
          var mT;
          let WT = TT.edge(UT);
          null == (mT = WT.points) || mT.forEach(NU), Object.hasOwn(WT, "x") && NU(WT)
        }))
      }(TT), KU(TT))
    }

    function KU(TT) {
      TT.nodes().forEach((UT => SU(TT.node(UT)))), TT.edges().forEach((UT => SU(TT.edge(UT))))
    }

    function SU(TT) {
      let UT = TT.width;
      TT.width = TT.height, TT.height = UT
    }

    function GU(TT) {
      TT.y = -TT.y
    }

    function NU(TT) {
      let UT = TT.x;
      TT.x = TT.y, TT.y = UT
    }

    function EU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        mT = {},
        WT = TT.nodes().filter((UT => !TT.children(UT).length)),
        zT = WT.map((UT => TT.node(UT).rank)),
        MT = TU(ET(Math.max, zT) + 1).map((() => []));
      return WT.sort(((UT, mT) => TT.node(UT).rank - TT.node(mT).rank)).forEach((function WT(zT) {
        if (mT[zT]) return;
        mT[zT] = !0;
        let gT = TT.node(zT);
        MT[gT.rank].push(zT);
        let nT = TT.successors(zT);
        nT && [...nT].sort(((mT, WT) => function(mT, WT) {
          let zT = TT.node(mT),
            MT = TT.node(WT);
          return zU(UT, zT, MT)
        }(mT, WT))).forEach(WT)
      })), MT
    }

    function hU(TT, UT) {
      let mT = 0;
      for (let WT = 1; WT < UT.length; ++WT) mT += DU(TT, UT[WT - 1], UT[WT]);
      return mT
    }

    function DU(TT, UT, mT) {
      let WT = function(TT, UT) {
          return TT.reduce(((TT, mT, WT) => (TT[mT] = UT[WT], TT)), {})
        }(mT, mT.map(((TT, UT) => UT))),
        zT = UT.flatMap((UT => {
          let mT = TT.outEdges(UT);
          return mT ? mT.map((UT => ({
            pos: WT[UT.w],
            weight: TT.edge(UT).weight
          }))).sort(((TT, UT) => TT.pos - UT.pos)) : []
        })),
        MT = 1;
      for (; MT < mT.length;) MT <<= 1;
      let gT = 2 * MT - 1;
      MT -= 1;
      let nT = new Array(gT).fill(0),
        HT = 0;
      return zT.forEach((TT => {
        let UT = TT.pos + MT;
        nT[UT] += TT.weight;
        let mT = 0;
        for (; UT > 0;) UT % 2 && (mT += nT[UT + 1]), UT = UT - 1 >> 1, nT[UT] += TT.weight;
        HT += TT.weight * mT
      })), HT
    }

    function oU(TT, UT) {
      let mT = {};
      return TT.forEach(((TT, UT) => {
          let WT = {
            indegree: 0,
            in: [],
            out: [],
            vs: [TT.v],
            i: UT
          };
          void 0 !== TT.barycenter && (WT.barycenter = TT.barycenter, WT.weight = TT.weight), mT[TT.v] = WT
        })), UT.edges().forEach((TT => {
          let UT = mT[TT.v],
            WT = mT[TT.w];
          void 0 !== UT && void 0 !== WT && (WT.indegree++, UT.out.push(WT))
        })),
        function(TT) {
          let UT = [];

          function mT(TT) {
            return UT => {
              UT.merged || (void 0 === UT.barycenter || void 0 === TT.barycenter || UT.barycenter >= TT.barycenter) && function(TT, UT) {
                let mT = 0,
                  WT = 0;
                TT.weight && (mT += TT.barycenter * TT.weight, WT += TT.weight), UT.weight && (mT += UT.barycenter * UT.weight, WT += UT.weight), TT.vs = UT.vs.concat(TT.vs), TT.barycenter = mT / WT, TT.weight = WT, TT.i = Math.min(UT.i, TT.i), UT.merged = !0
              }(TT, UT)
            }
          }

          function WT(UT) {
            return mT => {
              mT.in.push(UT), 0 === --mT.indegree && TT.push(mT)
            }
          }
          for (; TT.length;) {
            let zT = TT.pop();
            UT.push(zT), zT.in.reverse().forEach(mT(zT)), zT.out.forEach(WT(zT))
          }
          return UT.filter((TT => !TT.merged)).map((TT => UU(TT, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(mT).filter((TT => !TT.indegree)))
    }

    function AU(TT, UT, mT, WT, zT) {
      let MT = {},
        gT = null,
        nT = null,
        HT = zT;
      "boolean" == typeof UT ? (HT = UT, MT = {}) : UT && (MT = UT, gT = null != mT ? mT : null, nT = null != WT ? WT : null);
      let kT = function(TT, UT) {
          let mT = {
            lhs: [],
            rhs: []
          };
          return TT.forEach((TT => {
            UT(TT) ? mT.lhs.push(TT) : mT.rhs.push(TT)
          })), mT
        }(TT, (TT => Object.hasOwn(TT, "barycenter"))),
        jT = kT.lhs,
        lT = kT.rhs.sort(((TT, UT) => UT.i - TT.i)),
        LT = [],
        pT = 0,
        BT = 0,
        ZT = 0;
      jT.sort(function(TT, UT, mT) {
        return (WT, zT) => {
          if (WT.barycenter < zT.barycenter) return -1;
          if (WT.barycenter > zT.barycenter) return 1;
          if (TT && ("string" == typeof WT.vs[0] || "string" == typeof zT.vs[0])) {
            let mT = TT.node(WT.vs[0]),
              MT = TT.node(zT.vs[0]),
              gT = zU(UT, mT, MT);
            if (0 !== gT) return gT
          }
          return mT ? zT.i - WT.i : WT.i - zT.i
        }
      }(nT, gT, !!HT));
      for (let [vT, fT] of Object.entries(MT)) {
        let TT = jT.findIndex((TT => TT.vs[0] === vT));
        jT.splice(TT + 1, 0, fT)
      }
      ZT = RU(LT, lT, ZT), jT.forEach((TT => {
        ZT += TT.vs.length, LT.push(TT.vs), pT += TT.barycenter * TT.weight, BT += TT.weight, ZT = RU(LT, lT, ZT)
      }));
      let cT = {
        vs: LT.flat(1)
      };
      return BT && (cT.barycenter = pT / BT, cT.weight = BT), cT
    }

    function RU(TT, UT, mT) {
      let WT;
      for (; UT.length && (WT = UT[UT.length - 1]).i <= mT;) UT.pop(), TT.push(WT.vs), mT++;
      return mT
    }

    function Tm(TT, UT, mT, WT, zT) {
      var MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT;
      let cT = null,
        vT = zT;
      "boolean" == typeof WT ? (vT = WT, cT = null) : void 0 !== WT && (cT = WT);
      let fT = TT.children(UT),
        qT = TT.node(UT),
        iT = qT ? qT.borderLeft : void 0,
        bT = qT ? qT.borderRight : void 0,
        OT = {};
      iT && (fT = fT.filter((TT => TT !== iT && TT !== bT)));
      let eT = function(TT) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((UT => {
          let mT = TT.inEdges(UT);
          if (!mT || !mT.length) return {
            v: UT
          };
          {
            let WT = mT.reduce(((UT, mT) => {
              let WT = TT.edge(mT),
                zT = TT.node(mT.v);
              return {
                sum: UT.sum + WT.weight * zT.order,
                weight: UT.weight + WT.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: UT,
              barycenter: WT.sum / WT.weight,
              weight: WT.weight
            }
          }
        }))
      }(TT, fT);
      eT.forEach((UT => {
        if (TT.children(UT.v).length) {
          let {
            result: WT
          } = Tm(TT, UT.v, mT, cT, vT);
          OT[UT.v] = WT, Object.hasOwn(WT, "barycenter") && function(TT, UT) {
            void 0 !== TT.barycenter ? (TT.barycenter = (TT.barycenter * TT.weight + UT.barycenter * UT.weight) / (TT.weight + UT.weight), TT.weight += UT.weight) : (TT.barycenter = UT.barycenter, TT.weight = UT.weight)
          }(UT, WT)
        }
      }));
      let YT = oU(eT, mT);
      ! function(TT, UT) {
        TT.forEach((TT => {
          TT.vs = TT.vs.flatMap((TT => UT[TT] ? UT[TT].vs : TT))
        }))
      }(YT, OT);
      let JT = {},
        xT = !1;
      for (let wT = 0; wT < YT.length; wT++)
        for (let UT = wT + 1; UT < YT.length; UT++)
          if (YT[wT] && YT[UT] && null != (MT = YT[wT]) && MT.barycenter && null != (gT = YT[UT]) && gT.barycenter && (null == (nT = YT[wT]) ? void 0 : nT.barycenter) === YT[UT].barycenter) {
            let mT = null != (kT = null == (HT = YT[wT]) ? void 0 : HT.vs[0]) ? kT : "",
              WT = null != (lT = null == (jT = YT[UT]) ? void 0 : jT.vs[0]) ? lT : "",
              zT = TT.node(mT),
              MT = TT.node(WT);
            if ("edge" === zT.dummy && "edge" === MT.dummy && (null == (LT = zT.edgeObj) ? void 0 : LT.v) === (null == (pT = MT.edgeObj) ? void 0 : pT.v) && (null == (BT = zT.edgeObj) ? void 0 : BT.w) === (null == (ZT = MT.edgeObj) ? void 0 : ZT.w)) {
              if (zT.edgeLabel.reversed) {
                JT[WT] = YT[wT], YT.splice(wT, 1), wT--;
                break
              }
              JT[mT] = YT[UT], YT.splice(UT, 1), UT--
            } else xT = !0
          } let dT = AU(YT, JT, cT, TT, vT);
      if (iT && bT) {
        dT.vs = [iT, dT.vs, bT].flat(1);
        let UT = TT.predecessors(iT);
        if (UT && UT.length) {
          let mT = TT.node(UT[0]),
            WT = TT.predecessors(bT),
            zT = TT.node(WT[0]);
          Object.hasOwn(dT, "barycenter") || (dT.barycenter = 0, dT.weight = 0), dT.barycenter = (dT.barycenter * dT.weight + mT.order + zT.order) / (dT.weight + 2), dT.weight += 2
        }
      }
      return Object.defineProperty(dT, "result", {
        value: dT,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(dT, "usedBias", {
        value: xT,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), dT
    }

    function Um(TT, UT, mT, WT) {
      WT || (WT = TT.nodes());
      let zT = function(TT) {
          let UT;
          for (; TT.hasNode(UT = RT("_root")););
          return UT
        }(TT),
        MT = new uT({
          compound: !0
        }).setGraph({
          root: zT
        }).setDefaultNodeLabel((UT => TT.node(UT)));
      return WT.forEach((WT => {
        let gT = TT.node(WT),
          nT = TT.parent(WT);
        if (gT.rank === UT || gT.minRank <= UT && UT <= gT.maxRank) {
          MT.setNode(WT), MT.setParent(WT, nT || zT);
          let HT = TT[mT](WT);
          HT && HT.forEach((UT => {
            let mT = UT.v === WT ? UT.w : UT.v,
              zT = MT.edge(mT, WT),
              gT = void 0 !== zT ? zT.weight : 0;
            MT.setEdge(mT, WT, {
              weight: TT.edge(UT).weight + gT
            })
          })), Object.hasOwn(gT, "minRank") && MT.setNode(WT, {
            borderLeft: gT.borderLeft[UT],
            borderRight: gT.borderRight[UT]
          })
        }
      })), MT
    }

    function mm(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof UT.customOrder) return void UT.customOrder(TT, mm);
      let WT = hT(TT),
        zT = Wm(TT, TU(1, WT + 1), "inEdges"),
        MT = Wm(TT, TU(WT - 1, -1, -1), "outEdges"),
        gT = EU(TT, mT);
      if (Mm(TT, gT), UT.disableOptimalOrderHeuristic) return;
      let nT, HT = Number.POSITIVE_INFINITY,
        kT = UT.constraints || [];
      for (let jT = 0, lT = 0; lT < 4; ++jT, ++lT) {
        zm(jT % 2 ? zT : MT, jT % 4 >= 2, kT, mT), gT = ST(TT);
        let UT = hU(TT, gT);
        UT < HT ? (lT = 0, nT = Object.assign({}, gT), HT = UT) : UT === HT && (nT = structuredClone(gT))
      }
      Mm(TT, nT)
    }

    function Wm(TT, UT, mT) {
      let WT = new Map,
        zT = (TT, UT) => {
          WT.has(TT) || WT.set(TT, []), WT.get(TT).push(UT)
        };
      for (let MT of TT.nodes()) {
        let UT = TT.node(MT);
        if ("number" == typeof UT.rank && zT(UT.rank, MT), "number" == typeof UT.minRank && "number" == typeof UT.maxRank)
          for (let TT = UT.minRank; TT <= UT.maxRank; TT++) TT !== UT.rank && zT(TT, MT)
      }
      return UT.map((function(UT) {
        return Um(TT, UT, mT, WT.get(UT) || [])
      }))
    }

    function zm(TT, UT, mT, WT) {
      let zT = !0,
        MT = new uT;
      TT.forEach((function(TT) {
        mT.forEach((TT => MT.setEdge(TT.left, TT.right)));
        let gT = TT.graph().root,
          {
            result: nT,
            usedBias: HT
          } = Tm(TT, gT, MT, WT, zT);
        UT && HT && (zT = !zT), nT.vs.forEach(((UT, mT) => TT.node(UT).order = mT)),
          function(TT, UT, mT) {
            let WT, zT = {};
            mT.forEach((mT => {
              let MT, gT, nT = TT.parent(mT);
              for (; nT;) {
                if (MT = TT.parent(nT), MT ? (gT = zT[MT], zT[MT] = nT) : (gT = WT, WT = nT), gT && gT !== nT) return void UT.setEdge(gT, nT);
                nT = MT
              }
            }))
          }(TT, MT, nT.vs)
      }))
    }

    function Mm(TT, UT) {
      Object.values(UT).forEach((UT => UT.forEach(((UT, mT) => TT.node(UT).order = mT))))
    }

    function gm(TT, UT, mT) {
      if (UT > mT) {
        let TT = UT;
        UT = mT, mT = TT
      }
      let WT = TT[UT];
      WT || (TT[UT] = WT = {}), WT[mT] = !0
    }

    function nm(TT, UT, mT) {
      if (UT > mT) {
        let TT = UT;
        UT = mT, mT = TT
      }
      let WT = TT[UT];
      return void 0 !== WT && Object.hasOwn(WT, mT)
    }

    function Hm(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        MT = {},
        gT = function(TT, UT, mT, WT) {
          let zT = new uT,
            MT = TT.graph(),
            gT = function(TT, UT, mT) {
              return (WT, zT, MT) => {
                let gT, nT = WT.node(zT),
                  HT = WT.node(MT),
                  kT = 0;
                if (kT += nT.width / 2, Object.hasOwn(nT, "labelpos")) switch (nT.labelpos.toLowerCase()) {
                  case "l":
                    gT = -nT.width / 2;
                    break;
                  case "r":
                    gT = nT.width / 2
                }
                if (gT && (kT += mT ? gT : -gT), gT = void 0, kT += (nT.dummy ? UT : TT) / 2, kT += (HT.dummy ? UT : TT) / 2, kT += HT.width / 2, Object.hasOwn(HT, "labelpos")) switch (HT.labelpos.toLowerCase()) {
                  case "l":
                    gT = HT.width / 2;
                    break;
                  case "r":
                    gT = -HT.width / 2
                }
                return gT && (kT += mT ? gT : -gT), kT
              }
            }(MT.nodesep, MT.edgesep, WT);
          return UT.forEach((UT => {
            let WT;
            UT.forEach((UT => {
              let MT = mT[UT];
              if (void 0 !== MT) {
                if (zT.setNode(MT), void 0 !== WT) {
                  let nT = mT[WT];
                  if (void 0 !== nT) {
                    let mT = zT.edge(nT, MT);
                    zT.setEdge(nT, MT, Math.max(gT(TT, UT, WT), mT || 0))
                  }
                }
                WT = UT
              }
            }))
          })), zT
        }(TT, UT, mT, zT),
        nT = zT ? "borderLeft" : "borderRight";

      function HT(TT, UT) {
        let mT = gT.nodes().slice(),
          WT = {},
          zT = mT.pop();
        for (; zT;) {
          if (WT[zT]) TT(zT);
          else {
            WT[zT] = !0, mT.push(zT);
            for (let TT of UT(zT)) mT.push(TT)
          }
          zT = mT.pop()
        }
      }
      return HT((function(TT) {
        let UT = gT.inEdges(TT);
        MT[TT] = UT ? UT.reduce(((TT, UT) => {
          var mT;
          let WT = null != (mT = MT[UT.v]) ? mT : 0,
            zT = gT.edge(UT);
          return Math.max(TT, WT + (void 0 !== zT ? zT : 0))
        }), 0) : 0
      }), (function(TT) {
        return gT.predecessors(TT) || []
      })), HT((function(UT) {
        let mT = gT.outEdges(UT),
          WT = Number.POSITIVE_INFINITY;
        mT && (WT = mT.reduce(((TT, UT) => {
          let mT = MT[UT.w],
            WT = gT.edge(UT);
          return Math.min(TT, (void 0 !== mT ? mT : 0) - (void 0 !== WT ? WT : 0))
        }), Number.POSITIVE_INFINITY));
        let zT = TT.node(UT);
        WT !== Number.POSITIVE_INFINITY && zT.borderType !== nT && (MT[UT] = Math.max(void 0 !== MT[UT] ? MT[UT] : 0, WT))
      }), (function(TT) {
        return gT.successors(TT) || []
      })), Object.keys(WT).forEach((TT => {
        var UT;
        let WT = mT[TT];
        void 0 !== WT && (MT[TT] = null != (UT = MT[WT]) ? UT : 0)
      })), MT
    }

    function km(TT, UT) {
      let mT, WT = ST(TT),
        zT = Object.assign(function(TT, UT) {
          let mT = {};
          return UT.length && UT.reduce((function(UT, WT) {
            let zT = 0,
              MT = 0,
              gT = UT.length,
              nT = WT[WT.length - 1];
            return WT.forEach(((UT, HT) => {
              let kT = function(TT, UT) {
                  if (TT.node(UT).dummy) {
                    let mT = TT.predecessors(UT);
                    if (mT) return mT.find((UT => TT.node(UT).dummy))
                  }
                }(TT, UT),
                jT = kT ? TT.node(kT).order : gT;
              (kT || UT === nT) && (WT.slice(MT, HT + 1).forEach((UT => {
                let WT = TT.predecessors(UT);
                WT && WT.forEach((WT => {
                  let MT = TT.node(WT),
                    gT = MT.order;
                  (gT < zT || jT < gT) && (!MT.dummy || !TT.node(UT).dummy) && gm(mT, WT, UT)
                }))
              })), MT = HT + 1, zT = jT)
            })), WT
          })), mT
        }(TT, WT), function(TT, UT) {
          let mT = {};

          function WT(UT, WT, zT, MT, gT) {
            TU(WT, zT).forEach((WT => {
              let zT = UT[WT];
              if (void 0 !== zT && TT.node(zT).dummy) {
                let UT = TT.predecessors(zT);
                UT && UT.forEach((UT => {
                  if (void 0 === UT) return;
                  let WT = TT.node(UT);
                  WT.dummy && (WT.order < MT || WT.order > gT) && gm(mT, UT, zT)
                }))
              }
            }))
          }
          return UT.length && UT.reduce((function(UT, mT) {
            let zT = -1,
              MT = -1,
              gT = 0;
            return mT.forEach(((nT, HT) => {
              if ("border" === TT.node(nT).dummy) {
                let UT = TT.predecessors(nT);
                if (UT && UT.length) {
                  let nT = UT[0];
                  if (void 0 === nT) return;
                  MT = TT.node(nT).order, WT(mT, gT, HT, zT, MT), gT = HT, zT = MT
                }
              }
              WT(mT, gT, mT.length, MT, UT.length)
            })), mT
          })), mT
        }(TT, WT)),
        MT = {};
      ["u", "d"].forEach((gT => {
        mT = "u" === gT ? WT : Object.values(WT).reverse(), ["l", "r"].forEach((WT => {
          "r" === WT && (mT = mT.map((TT => Object.values(TT).reverse())));
          let nT = function(TT, UT, mT, WT, zT) {
              let MT = {},
                gT = {},
                nT = {};
              return UT.forEach((TT => {
                TT.forEach(((TT, UT) => {
                  MT[TT] = TT, gT[TT] = TT, nT[TT] = UT
                }))
              })), UT.forEach((UT => {
                let HT = -1,
                  kT = -1,
                  jT = !1,
                  lT = UT,
                  LT = UT.findIndex((UT => (null == zT ? void 0 : zT.includes(UT)) || jm(UT, TT, zT)));
                LT > 0 && (lT = [UT[LT], ...UT.slice(0, LT), ...UT.slice(LT + 1)], jT = !0), lT.forEach((UT => {
                  var lT;
                  let LT = WT(UT);
                  if (LT && LT.length) {
                    null != zT && zT.includes(UT) && (LT = LT.filter((UT => jm(UT, TT, zT))));
                    let WT = LT.sort(((TT, UT) => {
                        let mT = nT[TT],
                          WT = nT[UT];
                        return (void 0 !== mT ? mT : 0) - (void 0 !== WT ? WT : 0)
                      })),
                      pT = (WT.length - 1) / 2;
                    for (let TT = Math.floor(pT), zT = Math.ceil(pT); TT <= zT; ++TT) {
                      let zT = WT[TT];
                      if (void 0 === zT) continue;
                      let LT = nT[zT];
                      if (void 0 !== LT && gT[UT] === UT && HT < LT && nT[zT] !== kT && !nm(mT, UT, zT)) {
                        let TT = MT[zT];
                        void 0 !== TT && (gT[zT] = UT, gT[UT] = MT[UT] = TT, HT = LT, jT && (HT = -1, kT = null != (lT = nT[zT]) ? lT : -1, jT = !1))
                      }
                    }
                  }
                }))
              })), {
                root: MT,
                align: gT
              }
            }(TT, mT, zT, (UT => ("u" === gT ? TT.predecessors(UT) : TT.successors(UT)) || []), UT),
            HT = Hm(TT, mT, nT.root, nT.align, "r" === WT);
          "r" === WT && (HT = mU(HT, (TT => -TT))), MT[gT + WT] = HT
        }))
      }));
      let gT = function(TT, UT) {
        return Object.values(UT).reduce(((UT, mT) => {
          let WT = Number.NEGATIVE_INFINITY,
            zT = Number.POSITIVE_INFINITY;
          Object.entries(mT).forEach((UT => {
            let [mT, MT] = UT, gT = function(TT, UT) {
              return TT.node(UT).width
            }(TT, mT) / 2;
            WT = Math.max(MT + gT, WT), zT = Math.min(MT - gT, zT)
          }));
          let MT = WT - zT;
          return MT < UT[0] && (UT = [MT, mT]), UT
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(TT, MT);
      return function(TT, UT) {
          let mT = Object.values(UT),
            WT = ET(Math.min, mT),
            zT = ET(Math.max, mT);
          ["u", "d"].forEach((mT => {
            ["l", "r"].forEach((MT => {
              let gT = mT + MT,
                nT = TT[gT];
              if (!nT || nT === UT) return;
              let HT = Object.values(nT),
                kT = WT - ET(Math.min, HT);
              "l" !== MT && (kT = zT - ET(Math.max, HT)), kT && (TT[gT] = mU(nT, (TT => TT + kT)))
            }))
          }))
        }(MT, gT),
        function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            mT = TT.ul;
          return mT ? mU(mT, ((mT, WT) => {
            var zT, MT;
            if (UT) {
              let mT = UT.toLowerCase(),
                zT = TT[mT];
              if (zT && void 0 !== zT[WT]) return zT[WT]
            }
            let gT = Object.values(TT).map((TT => {
              let UT = TT[WT];
              return void 0 !== UT ? UT : 0
            })).sort(((TT, UT) => TT - UT));
            return ((null != (zT = gT[1]) ? zT : 0) + (null != (MT = gT[2]) ? MT : 0)) / 2
          })) : {}
        }(MT, TT.graph().align)
    }

    function jm(TT, UT, mT) {
      var WT;
      if (!mT) return !1;
      let zT = null == (WT = UT.node(TT)) ? void 0 : WT.edgeObj;
      if (!zT || UT.node(TT).edgeLabel.reversed) return !1;
      let MT = mT.indexOf(null == zT ? void 0 : zT.v),
        gT = mT.indexOf(null == zT ? void 0 : zT.w);
      return -1 !== MT && -1 !== gT && MT === (gT + 1) % mT.length || MT === (gT - 1) % mT.length
    }

    function lm(TT, UT) {
      (function(TT) {
        let UT = ST(TT),
          mT = TT.graph(),
          WT = mT.ranksep,
          zT = mT.rankalign,
          MT = 0;
        UT.forEach((UT => {
          let mT = UT.reduce(((UT, mT) => {
            var WT;
            let zT = null != (WT = TT.node(mT).height) ? WT : 0;
            return UT > zT ? UT : zT
          }), 0);
          UT.forEach((UT => {
            let WT = TT.node(UT);
            WT.y = "top" === zT ? MT + WT.height / 2 : "bottom" === zT ? MT + mT - WT.height / 2 : MT + mT / 2
          })), MT += mT + WT
        }))
      })(TT = rT(TT)), Object.entries(km(TT, UT)).forEach((UT => {
        let [mT, WT] = UT;
        return TT.node(mT).x = WT
      }))
    }
    var Lm = new WeakMap;

    function pm(TT) {
      return Zm(TT, oT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), TT
    }

    function Bm(TT, UT, mT) {
      let WT = UT;
      for (; void 0 !== WT;) {
        let UT = TT.parent(WT);
        if (UT === mT) return WT;
        WT = UT
      }
    }

    function Zm(TT, UT, mT) {
      var WT;
      let zT = TT.nodes().filter((UT => TT.children(UT).length)),
        MT = {};
      zT.forEach((WT => {
        let zT = TT.node(WT);
        if (zT && zT.rankdir) {
          let gT = new uT({
            multigraph: !0,
            compound: !0
          });
          gT.setGraph({
            rankdir: zT.rankdir
          });
          let nT = TT.children(WT);
          nT.forEach((UT => {
            let mT = {
              ...TT.node(UT)
            };
            gT.setNode(UT, mT);
            let zT = TT.parent(UT);
            zT && zT !== WT && nT.includes(zT) && gT.setParent(UT, zT)
          }));
          let HT = new Set;
          TT.edges().forEach((UT => {
            let mT = Bm(TT, UT.v, WT),
              zT = Bm(TT, UT.w, WT);
            if (mT && zT && mT !== zT) {
              let WT = `${mT}\0${zT}`;
              HT.has(WT) || (HT.add(WT), gT.setEdge(mT, zT, {
                ...TT.edge(UT)
              }))
            }
          })), Zm(gT, UT, mT);
          let kT = dm(gT);
          cm(kT, UT, mT, null), fm(gT, kT);
          let jT = 1 / 0,
            lT = 1 / 0,
            LT = -1 / 0,
            pT = -1 / 0;
          gT.nodes().forEach((TT => {
            if (TT === WT) return;
            let UT = gT.node(TT);
            UT && "number" == typeof UT.x && "number" == typeof UT.y && "number" == typeof UT.width && "number" == typeof UT.height && (jT = Math.min(jT, UT.x - UT.width / 2), LT = Math.max(LT, UT.x + UT.width / 2), lT = Math.min(lT, UT.y - UT.height / 2), pT = Math.max(pT, UT.y + UT.height / 2))
          })), (!isFinite(jT) || !isFinite(lT) || !isFinite(LT) || !isFinite(pT)) && (jT = lT = 0, LT = pT = 0);
          let BT = LT - jT,
            ZT = pT - lT;
          MT[WT] = {
            minX: jT,
            UW: lT,
            maxX: LT,
            mW: pT,
            width: BT,
            height: ZT,
            offsetX: jT,
            offsetY: lT
          }, zT._dagreClusterSubgraph = gT
        }
      }));
      let gT = [],
        nT = new Map;
      zT.forEach((UT => {
        let mT = TT.node(UT);
        mT && mT.rankdir && MT[UT] && nT.set(UT, (TT.children(UT) || []).filter((TT => TT !== UT)))
      }));
      let HT = new Set([...nT.values()].flat()),
        kT = new Map;
      nT.forEach(((UT, mT) => {
        HT.has(mT) || kT.set(mT, (UT => {
          let mT = [],
            WT = (TT.children(UT) || []).filter((TT => TT !== UT));
          for (; WT.length > 0;) {
            let UT = WT.shift();
            mT.push(UT), (TT.children(UT) || []).filter((TT => TT !== UT)).forEach((TT => WT.push(TT)))
          }
          return mT
        })(mT))
      }));
      let jT = new Set([...kT.values()].flat()),
        lT = TT => {
          for (let [UT, mT] of kT)
            if (mT.includes(TT)) return UT;
          return TT
        },
        LT = [];
      TT.edges().forEach((UT => {
        (jT.has(UT.v) || jT.has(UT.w)) && LT.push({
          edge: UT,
          label: TT.edge(UT)
        })
      }));
      let pT = new Map;
      jT.forEach((UT => {
        let mT = TT.parent(UT);
        pT.set(UT, "string" == typeof mT ? mT : void 0)
      })), kT.forEach(((UT, mT) => {
        let WT = TT.node(mT),
          zT = [];
        UT.forEach((UT => {
          let mT = TT.node(UT);
          mT && (zT.push({
            id: UT,
            node: mT,
            parent: pT.get(UT)
          }), TT.removeNode(UT))
        }));
        let nT = LT.filter((TT => {
            let {
              edge: mT
            } = TT;
            return UT.includes(mT.v) || UT.includes(mT.w)
          })),
          HT = MT[mT];
        WT && (gT.push({
          clusterId: mT,
          subgraph: WT._dagreClusterSubgraph,
          bounds: HT,
          children: UT,
          removedNodes: zT,
          removedEdges: nT
        }), WT.width = HT.width, WT.height = HT.height)
      }));
      let BT = new Set;
      LT.forEach((UT => {
        let {
          edge: mT,
          label: WT
        } = UT, zT = lT(mT.v), MT = lT(mT.w);
        if (zT !== MT && TT.hasNode(zT) && TT.hasNode(MT)) {
          let UT = `${zT}\0${MT}`;
          BT.has(UT) || (BT.add(UT), TT.setEdge(zT, MT, {
            ...WT,
            width: 0,
            height: 0
          }))
        }
      }));
      let ZT = dm(TT),
        cT = cm(ZT, UT, mT, null != (WT = Lm.get(TT)) ? WT : null);
      Lm.set(TT, cT), fm(TT, ZT), BT.forEach((UT => {
        let mT = UT.indexOf("\0"),
          WT = UT.slice(0, mT),
          zT = UT.slice(mT + 1);
        TT.hasEdge(WT, zT) && TT.removeEdge(WT, zT)
      })), gT.forEach((UT => {
        let {
          clusterId: mT,
          subgraph: WT,
          bounds: zT,
          removedNodes: MT,
          removedEdges: gT
        } = UT;
        var nT, HT;
        let kT = TT.node(mT),
          jT = null != (nT = null == kT ? void 0 : kT.x) ? nT : 0,
          lT = null != (HT = null == kT ? void 0 : kT.y) ? HT : 0,
          LT = (zT.minX + zT.maxX) / 2,
          pT = (zT.UW + zT.mW) / 2;
        MT.forEach((UT => {
          let {
            id: mT,
            node: WT,
            parent: zT
          } = UT;
          TT.setNode(mT, WT), void 0 !== zT && TT.setParent(mT, zT)
        })), gT.forEach((UT => {
          let {
            edge: mT,
            label: WT
          } = UT;
          TT.setEdge(mT, WT)
        })), WT.nodes().forEach((UT => {
          if (UT === mT) return;
          let zT = WT.node(UT),
            MT = TT.node(UT);
          MT && zT && "number" == typeof zT.x && "number" == typeof zT.y && (MT.x = jT + (zT.x - LT), MT.y = lT + (zT.y - pT))
        })), delete kT._dagreClusterSubgraph
      })), zT.forEach((UT => {
        var mT, WT;
        let zT = TT.node(UT),
          gT = MT[UT];
        if (zT && zT.rankdir && zT._dagreClusterSubgraph && gT) {
          let MT = zT._dagreClusterSubgraph,
            nT = null != (mT = zT.x) ? mT : 0,
            HT = null != (WT = zT.y) ? WT : 0,
            kT = (gT.minX + gT.maxX) / 2,
            jT = (gT.UW + gT.mW) / 2;
          MT.nodes().forEach((mT => {
            if (mT === UT) return;
            let WT = MT.node(mT),
              zT = TT.node(mT);
            if (zT && WT && "number" == typeof WT.x && "number" == typeof WT.y) {
              let TT = WT.x - kT,
                UT = WT.y - jT;
              zT.x = nT + TT, zT.y = HT + UT
            }
          })), delete zT._dagreClusterSubgraph
        }
      }))
    }

    function cm(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var zT, MT;
      let gT = !1 !== (null == mT ? void 0 : mT.useDynamic),
        nT = gT && null != (zT = null == WT ? void 0 : WT.graph) ? zT : null,
        HT = gT && null != (MT = null == WT ? void 0 : WT.rawNodes) ? MT : null;
      UT("    makeSpaceForEdgeLabels", (() => function(TT) {
        let UT = TT.graph();
        UT.ranksep /= 2, TT.edges().forEach((mT => {
          var WT;
          let zT = TT.edge(mT);
          zT.minlen *= 2, "c" !== (null != (WT = zT.labelpos) ? WT : "r").toLowerCase() && ("TB" === UT.rankdir || "BT" === UT.rankdir ? zT.width += zT.labeloffset : zT.height += zT.labeloffset)
        }))
      }(TT))), UT("    removeSelfEdges", (() => function(TT) {
        TT.edges().forEach((UT => {
          if (UT.v === UT.w) {
            let mT = TT.node(UT.v);
            mT.selfEdges || (mT.selfEdges = []), mT.selfEdges.push({
              e: UT,
              label: TT.edge(UT)
            }), TT.removeEdge(UT)
          }
        }))
      }(TT))), UT("    acyclic", (() => pU(TT, nT))), UT("    nestingGraph.run", (() => PU(TT))), UT("    rank", (() => IU(rT(TT)))), UT("    injectEdgeLabelProxies", (() => function(TT) {
        TT.edges().forEach((UT => {
          let mT = TT.edge(UT);
          if (mT.width && mT.height) {
            let mT = TT.node(UT.v),
              WT = {
                rank: (TT.node(UT.w).rank - mT.rank) / 2 + mT.rank,
                e: UT
              };
            CT(TT, "edge-proxy", WT, "_ep")
          }
        }))
      }(TT))), UT("    removeEmptyRanks", (() => function(TT) {
        let UT = TT.nodes().map((UT => TT.node(UT).rank)).filter((TT => void 0 !== TT)),
          mT = ET(Math.min, UT),
          WT = [];
        TT.nodes().forEach((UT => {
          let zT = TT.node(UT).rank - mT;
          WT[zT] || (WT[zT] = []), WT[zT].push(UT)
        }));
        let zT = 0,
          MT = TT.graph().nodeRankFactor;
        Array.from(WT).forEach(((UT, mT) => {
          void 0 === UT && mT % MT !== 0 ? --zT : void 0 !== UT && zT && UT.forEach((UT => TT.node(UT).rank += zT))
        }))
      }(TT))), UT("    nestingGraph.cleanup", (() => function(TT) {
        let UT = TT.graph();
        TT.removeNode(UT.nestingRoot), delete UT.nestingRoot, TT.edges().forEach((UT => {
          TT.edge(UT).nestingEdge && TT.removeEdge(UT)
        }))
      }(TT))), UT("    normalizeRanks", (() => function(TT) {
        let UT = TT.nodes().map((UT => {
            let mT = TT.node(UT).rank;
            return void 0 === mT ? Number.MAX_VALUE : mT
          })),
          mT = ET(Math.min, UT);
        TT.nodes().forEach((UT => {
          let WT = TT.node(UT);
          Object.hasOwn(WT, "rank") && (WT.rank -= mT)
        }))
      }(TT))), UT("    assignRankMinMax", (() => function(TT) {
        let UT = 0;
        TT.nodes().forEach((mT => {
          let WT = TT.node(mT);
          WT.borderTop && (WT.minRank = TT.node(WT.borderTop).rank, WT.maxRank = TT.node(WT.borderBottom).rank, UT = Math.max(UT, WT.maxRank))
        })), TT.graph().maxRank = UT
      }(TT))), UT("    removeEdgeLabelProxies", (() => function(TT) {
        TT.nodes().forEach((UT => {
          let mT = TT.node(UT);
          if ("edge-proxy" === mT.dummy) {
            let WT = mT;
            TT.edge(WT.e).labelRank = mT.rank, TT.removeNode(UT)
          }
        }))
      }(TT))), UT("    normalize.run", (() => BU(TT))), UT("    parentDummyChains", (() => FU(TT))), UT("    addBorderSegments", (() => uU(TT))), UT("    order", (() => mm(TT, mT, HT))), UT("    insertSelfEdges", (() => function(TT) {
        ST(TT).forEach((UT => {
          let mT = 0;
          UT.forEach(((UT, WT) => {
            let zT = TT.node(UT);
            "number" != typeof zT.rank && (zT.rank = 0), zT.order = WT + mT, (zT.selfEdges || []).forEach((UT => {
              CT(TT, "selfedge", {
                width: UT.label.width,
                height: UT.label.height,
                rank: zT.rank,
                order: WT + ++mT,
                e: UT.e,
                edgeLabel: UT.label
              }, "_se"), (!Array.isArray(UT.label.points) || 7 !== UT.label.points.length) && (UT.label.points = [{
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
            })), delete zT.selfEdges
          }))
        }))
      }(TT))), UT("    adjustCoordinateSystem", (() => function(TT) {
        var UT;
        let mT = null == (UT = TT.graph().rankdir) ? void 0 : UT.toLowerCase();
        ("lr" === mT || "rl" === mT) && KU(TT)
      }(TT))), UT("    position", (() => lm(TT, mT.corePath))), UT("    positionSelfEdges", (() => function(TT) {
        TT.nodes().forEach((UT => {
          let mT = TT.node(UT),
            WT = TT => "number" == typeof TT && isFinite(TT);
          if ("selfedge" === mT.dummy) {
            let zT = mT,
              MT = TT.node(zT.e.v),
              gT = WT(null == MT ? void 0 : MT.x) ? MT.x : 0,
              nT = WT(null == MT ? void 0 : MT.y) ? MT.y : 0,
              HT = WT(null == MT ? void 0 : MT.width) ? MT.width : 0,
              kT = WT(null == MT ? void 0 : MT.height) ? MT.height : 0,
              jT = WT(mT.x) ? mT.x : gT,
              lT = WT(mT.y) ? mT.y : nT,
              LT = HT / 2,
              pT = kT / 2;
            zT.edgeLabel.points = [{
              x: jT + LT,
              y: lT - pT
            }, {
              x: jT + LT,
              y: lT - pT
            }, {
              x: jT,
              y: lT
            }, {
              x: jT - LT,
              y: lT + pT
            }, {
              x: jT - LT,
              y: lT + pT
            }, {
              x: jT,
              y: lT
            }, {
              x: jT,
              y: lT
            }], zT.edgeLabel.x = jT, zT.edgeLabel.y = lT, TT.setEdge(zT.e, zT.edgeLabel), TT.removeNode(UT)
          } else mT && Array.isArray(mT.selfEdges) && mT.selfEdges.forEach((TT => {
            if (!Array.isArray(TT.label.points) || 7 !== TT.label.points.length) {
              let UT = WT(mT.x) ? mT.x : 0,
                zT = WT(mT.y) ? mT.y : 0,
                MT = (WT(mT.width) ? mT.width : 0) / 2,
                gT = (WT(mT.height) ? mT.height : 0) / 2;
              TT.label.points = [{
                x: UT + MT,
                y: zT - gT
              }, {
                x: UT + MT,
                y: zT - gT
              }, {
                x: UT,
                y: zT
              }, {
                x: UT - MT,
                y: zT + gT
              }, {
                x: UT - MT,
                y: zT + gT
              }, {
                x: UT,
                y: zT
              }, {
                x: UT,
                y: zT
              }]
            }
          }))
        }))
      }(TT)));
      let kT = JSON.parse(JSON.stringify(TT._nodes));
      return UT("    removeBorderNodes", (() => function(TT) {
        TT.nodes().forEach((UT => {
          if (TT.children(UT).length) {
            let mT = TT.node(UT),
              WT = TT.node(mT.borderTop),
              zT = TT.node(mT.borderBottom),
              MT = TT.node(mT.borderLeft[mT.borderLeft.length - 1]),
              gT = TT.node(mT.borderRight[mT.borderRight.length - 1]);
            mT.width = Math.abs(gT.x - MT.x), mT.height = Math.abs(zT.y - WT.y), mT.x = MT.x + mT.width / 2, mT.y = WT.y + mT.height / 2
          }
        })), TT.nodes().forEach((UT => {
          "border" === TT.node(UT).dummy && TT.removeNode(UT)
        }))
      }(TT))), UT("    normalize.undo", (() => function(TT) {
        TT.graph().dummyChains.forEach((UT => {
          let mT, WT = TT.node(UT),
            zT = WT.edgeLabel;
          for (TT.setEdge(WT.edgeObj, zT); WT.dummy;) mT = TT.successors(UT)[0], TT.removeNode(UT), zT.points.push({
            x: WT.x,
            y: WT.y
          }), "edge-label" === WT.dummy && (zT.x = WT.x, zT.y = WT.y, zT.width = WT.width, zT.height = WT.height), UT = mT, WT = TT.node(UT)
        }))
      }(TT))), UT("    fixupEdgeLabelCoords", (() => function(TT) {
        TT.edges().forEach((UT => {
          let mT = TT.edge(UT);
          if (Object.hasOwn(mT, "x")) switch (("l" === mT.labelpos || "r" === mT.labelpos) && (mT.width -= mT.labeloffset), mT.labelpos) {
            case "l":
              mT.x -= mT.width / 2 + mT.labeloffset;
              break;
            case "r":
              mT.x += mT.width / 2 + mT.labeloffset
          }
        }))
      }(TT))), UT("    undoCoordinateSystem", (() => rU(TT))), UT("    translateGraph", (() => function(TT) {
        let UT = Number.POSITIVE_INFINITY,
          mT = 0,
          WT = Number.POSITIVE_INFINITY,
          zT = 0,
          MT = TT.graph(),
          gT = MT.marginx || 0,
          nT = MT.marginy || 0;

        function HT(TT) {
          let MT = TT.x,
            gT = TT.y,
            nT = TT.width,
            HT = TT.height;
          UT = Math.min(UT, MT - nT / 2), mT = Math.max(mT, MT + nT / 2), WT = Math.min(WT, gT - HT / 2), zT = Math.max(zT, gT + HT / 2)
        }
        TT.nodes().forEach((UT => HT(TT.node(UT)))), TT.edges().forEach((UT => {
          let mT = TT.edge(UT);
          Object.hasOwn(mT, "x") && HT(mT)
        })), UT -= gT, WT -= nT, TT.nodes().forEach((mT => {
          let zT = TT.node(mT);
          zT.x -= UT, zT.y -= WT
        })), TT.edges().forEach((mT => {
          let zT = TT.edge(mT);
          zT.points.forEach((TT => {
            TT.x -= UT, TT.y -= WT
          })), Object.hasOwn(zT, "x") && (zT.x -= UT), Object.hasOwn(zT, "y") && (zT.y -= WT)
        })), MT.width = mT - UT + gT, MT.height = zT - WT + nT
      }(TT))), UT("    assignNodeIntersects", (() => function(TT) {
        TT.edges().forEach((UT => {
          if (UT.v === UT.w) return;
          let mT, WT, zT = TT.edge(UT),
            MT = TT.node(UT.v),
            gT = TT.node(UT.w);
          zT.points ? (mT = zT.points[0], WT = zT.points[zT.points.length - 1]) : (zT.points = [], mT = gT, WT = MT), zT.points.unshift(KT(MT, mT)), zT.points.push(KT(gT, WT))
        }))
      }(TT))), UT("    reversePoints", (() => function(TT) {
        TT.edges().forEach((UT => {
          let mT = TT.edge(UT);
          mT.reversed && mT.points.reverse()
        }))
      }(TT))), UT("    acyclic.undo", (() => function(TT) {
        TT.edges().forEach((UT => {
          let mT = TT.edge(UT);
          if (mT.reversed) {
            TT.removeEdge(UT);
            let WT = mT.forwardName;
            delete mT.reversed, delete mT.forwardName, TT.setEdge(UT.w, UT.v, mT, WT)
          }
        }))
      }(TT))), {
        graph: TT,
        rawNodes: kT
      }
    }

    function fm(TT, UT) {
      TT.nodes().forEach((mT => {
        let WT = TT.node(mT),
          zT = UT.node(mT);
        WT && (WT.x = zT.x, WT.y = zT.y, WT.order = zT.order, WT.rank = zT.rank, UT.children(mT).length && (WT.width = zT.width, WT.height = zT.height))
      })), TT.edges().forEach((mT => {
        let WT = TT.edge(mT),
          zT = UT.edge(mT);
        WT.points = zT.points, Object.hasOwn(zT, "x") && (WT.x = zT.x, WT.y = zT.y)
      })), TT.graph().width = UT.graph().width, TT.graph().height = UT.graph().height
    }
    var qm = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      im = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      bm = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Om = ["width", "height", "rank"],
      em = {
        width: 0,
        height: 0
      },
      Ym = ["minlen", "weight", "width", "height", "labeloffset"],
      Jm = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      xm = ["labelpos"];

    function dm(TT) {
      let UT = new uT({
          multigraph: !0,
          compound: !0
        }),
        mT = tm(TT.graph());
      return UT.setGraph(Object.assign({}, im, wm(mT, qm), UU(mT, bm))), TT.nodes().forEach((mT => {
        let WT = wm(tm(TT.node(mT)), Om);
        Object.keys(em).forEach((TT => {
          void 0 === WT[TT] && (WT[TT] = em[TT])
        })), UT.setNode(mT, WT);
        let zT = TT.parent(mT);
        void 0 !== zT && UT.setParent(mT, zT)
      })), TT.edges().forEach((mT => {
        let WT = tm(TT.edge(mT));
        UT.setEdge(mT, Object.assign({}, Jm, wm(WT, Ym), UU(WT, xm)))
      })), UT
    }

    function wm(TT, UT) {
      return mU(UU(TT, UT), Number)
    }

    function tm(TT) {
      let UT = {};
      return TT && Object.entries(TT).forEach((TT => {
        let [mT, WT] = TT;
        "string" == typeof mT && (mT = mT.toLowerCase()), UT[mT] = WT
      })), UT
    }

    function am(TT) {
      let UT = ST(TT),
        mT = new uT({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return TT.nodes().forEach((UT => {
        mT.setNode(UT, {
          label: UT
        }), mT.setParent(UT, "layer" + TT.node(UT).rank)
      })), TT.edges().forEach((TT => mT.setEdge(TT.v, TT.w, {}, TT.name))), UT.forEach(((TT, UT) => {
        let WT = "layer" + UT;
        mT.setNode(WT, {
          rank: "same"
        }), TT.reduce(((TT, UT) => (mT.setEdge(TT, UT, {
          style: "invis"
        }), UT)))
      })), mT
    }
    var ym = {
        time: DT,
        notime: oT
      },
      Xm = {
        graphlib: MT,
        version: MU,
        layout: pm,
        debug: am,
        util: {
          time: DT,
          notime: oT
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);