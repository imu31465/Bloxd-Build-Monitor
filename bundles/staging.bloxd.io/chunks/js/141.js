/*! For license information please see 4udp6d.141.6a7a95ee.chunk.js.LICENSE.txt */
export const id = 141;
export const ids = [141];
export const modules = {
  7550: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Graph: () => mR,
      debug: () => vG,
      default: () => xG,
      graphlib: () => uR,
      layout: () => rG,
      util: () => OG,
      version: () => uJ
    });
    var yR = Object.defineProperty,
      tR = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? yR(RR, JR, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GR
      }) : RR[JR] = GR)(RR, "symbol" != typeof JR ? JR + "" : JR, GR),
      uR = {};
    ((RR, JR) => {
      for (var GR in JR) yR(RR, GR, {
        get: JR[GR],
        enumerable: !0
      })
    })(uR, {
      Graph: () => mR,
      alg: () => nR
    });
    var ZR = Object.defineProperty,
      qR = (RR, JR) => {
        for (var GR in JR) ZR(RR, GR, {
          get: JR[GR],
          enumerable: !0
        })
      },
      iR = class {
        constructor(RR) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, RR && (this._isDirected = !("directed" in RR) || RR.directed, this._isMultigraph = "multigraph" in RR && RR.multigraph, this._isCompound = "compound" in RR && RR.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(RR) {
          return this._label = RR, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(RR) {
          return this._defaultNodeLabelFn = "function" != typeof RR ? () => RR : RR, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((RR => 0 === Object.keys(this._in[RR]).length))
        }
        sinks() {
          return this.nodes().filter((RR => 0 === Object.keys(this._out[RR]).length))
        }
        setNodes(RR, JR) {
          return RR.forEach((RR => {
            void 0 !== JR ? this.setNode(RR, JR) : this.setNode(RR)
          })), this
        }
        setNode(RR, JR) {
          return RR in this._nodes ? (arguments.length > 1 && (this._nodes[RR] = JR), this) : (this._nodes[RR] = arguments.length > 1 ? JR : this._defaultNodeLabelFn(RR), this._isCompound && (this._parent[RR] = "\0", this._children[RR] = {}, this._children["\0"][RR] = !0), this._in[RR] = {}, this._preds[RR] = {}, this._out[RR] = {}, this._sucs[RR] = {}, ++this._nodeCount, this)
        }
        node(RR) {
          return this._nodes[RR]
        }
        hasNode(RR) {
          return RR in this._nodes
        }
        removeNode(RR) {
          if (RR in this._nodes) {
            let JR = RR => this.removeEdge(this._edgeObjs[RR]);
            delete this._nodes[RR], this._isCompound && (this._removeFromParentsChildList(RR), delete this._parent[RR], this.children(RR).forEach((RR => {
              this.setParent(RR)
            })), delete this._children[RR]), Object.keys(this._in[RR]).forEach(JR), delete this._in[RR], delete this._preds[RR], Object.keys(this._out[RR]).forEach(JR), delete this._out[RR], delete this._sucs[RR], --this._nodeCount
          }
          return this
        }
        setParent(RR, JR) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === JR) JR = "\0";
          else {
            for (let GR = JR += ""; void 0 !== GR; GR = this.parent(GR))
              if (GR === RR) throw new Error("Setting " + JR + " as parent of " + RR + " would create a cycle");
            this.setNode(JR)
          }
          return this.setNode(RR), this._removeFromParentsChildList(RR), this._parent[RR] = JR, this._children[JR][RR] = !0, this
        }
        parent(RR) {
          if (this._isCompound) {
            let JR = this._parent[RR];
            if ("\0" !== JR) return JR
          }
        }
        children() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let JR = this._children[RR];
            if (JR) return Object.keys(JR)
          } else {
            if ("\0" === RR) return this.nodes();
            if (this.hasNode(RR)) return []
          }
          return []
        }
        predecessors(RR) {
          let JR = this._preds[RR];
          if (JR) return Object.keys(JR)
        }
        successors(RR) {
          let JR = this._sucs[RR];
          if (JR) return Object.keys(JR)
        }
        neighbors(RR) {
          let JR = this.predecessors(RR);
          if (JR) {
            let GR = new Set(JR),
              yR = this.successors(RR);
            if (yR)
              for (let RR of yR) GR.add(RR);
            return Array.from(GR.values())
          }
        }
        isLeaf(RR) {
          var JR;
          let GR;
          return GR = this.isDirected() ? this.successors(RR) : this.neighbors(RR), 0 === (null != (JR = null == GR ? void 0 : GR.length) ? JR : 0)
        }
        filterNodes(RR) {
          let JR = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          JR.setGraph(this.graph()), Object.entries(this._nodes).forEach((GR => {
            let [yR, tR] = GR;
            RR(yR) && JR.setNode(yR, tR)
          })), Object.values(this._edgeObjs).forEach((RR => {
            JR.hasNode(RR.v) && JR.hasNode(RR.w) && JR.setEdge(RR, this.edge(RR))
          }));
          let GR = {},
            yR = RR => {
              let tR = this.parent(RR);
              return !tR || JR.hasNode(tR) ? (GR[RR] = tR, tR) : tR in GR ? GR[tR] : yR(tR)
            };
          return this._isCompound && JR.nodes().forEach((RR => JR.setParent(RR, yR(RR)))), JR
        }
        setDefaultEdgeLabel(RR) {
          return this._defaultEdgeLabelFn = "function" != typeof RR ? () => RR : RR, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(RR, JR) {
          return RR.reduce(((RR, GR) => (void 0 !== JR ? this.setEdge(RR, GR, JR) : this.setEdge(RR, GR), GR))), this
        }
        setEdge(RR, JR, GR, yR) {
          let tR, uR, ZR, qR, iR = !1;
          "object" == typeof RR && null !== RR && "v" in RR ? (tR = RR.v, uR = RR.w, ZR = RR.name, 2 === arguments.length && (qR = JR, iR = !0)) : (tR = RR, uR = JR, ZR = yR, arguments.length > 2 && (qR = GR, iR = !0)), tR = "" + tR, uR = "" + uR, void 0 !== ZR && (ZR = "" + ZR);
          let VR = KR(this._isDirected, tR, uR, ZR);
          if (VR in this._edgeLabels) return iR && (this._edgeLabels[VR] = qR), this;
          if (void 0 !== ZR && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(tR), this.setNode(uR), this._edgeLabels[VR] = iR ? qR : this._defaultEdgeLabelFn(tR, uR, ZR);
          let wR = function(RR, JR, GR, yR) {
            let tR = "" + JR,
              uR = "" + GR;
            if (!RR && tR > uR) {
              let RR = tR;
              tR = uR, uR = RR
            }
            let ZR = {
              v: tR,
              w: uR
            };
            return yR && (ZR.name = yR), ZR
          }(this._isDirected, tR, uR, ZR);
          return tR = wR.v, uR = wR.w, Object.freeze(wR), this._edgeObjs[VR] = wR, fR(this._preds[uR], tR), fR(this._sucs[tR], uR), this._in[uR][VR] = wR, this._out[tR][VR] = wR, this._edgeCount++, this
        }
        edge(RR, JR, GR) {
          let yR = 1 === arguments.length ? wR(this._isDirected, RR) : KR(this._isDirected, RR, JR, GR);
          return this._edgeLabels[yR]
        }
        edgeAsObj(RR, JR, GR) {
          let yR = 1 === arguments.length ? this.edge(RR) : this.edge(RR, JR, GR);
          return "object" != typeof yR || null === yR ? {
            label: yR
          } : yR
        }
        hasEdge(RR, JR, GR) {
          return (1 === arguments.length ? wR(this._isDirected, RR) : KR(this._isDirected, RR, JR, GR)) in this._edgeLabels
        }
        removeEdge(RR, JR, GR) {
          let yR = 1 === arguments.length ? wR(this._isDirected, RR) : KR(this._isDirected, RR, JR, GR),
            tR = this._edgeObjs[yR];
          if (tR) {
            let RR = tR.v,
              JR = tR.w;
            delete this._edgeLabels[yR], delete this._edgeObjs[yR], VR(this._preds[JR], RR), VR(this._sucs[RR], JR), delete this._in[JR][yR], delete this._out[RR][yR], this._edgeCount--
          }
          return this
        }
        inEdges(RR, JR) {
          return this.isDirected() ? this.filterEdges(this._in[RR], RR, JR) : this.nodeEdges(RR, JR)
        }
        outEdges(RR, JR) {
          return this.isDirected() ? this.filterEdges(this._out[RR], RR, JR) : this.nodeEdges(RR, JR)
        }
        nodeEdges(RR, JR) {
          if (RR in this._nodes) return this.filterEdges({
            ...this._in[RR],
            ...this._out[RR]
          }, RR, JR)
        }
        _removeFromParentsChildList(RR) {
          delete this._children[this._parent[RR]][RR]
        }
        filterEdges(RR, JR, GR) {
          if (!RR) return;
          let yR = Object.values(RR);
          return GR ? yR.filter((RR => RR.v === JR && RR.w === GR || RR.v === GR && RR.w === JR)) : yR
        }
      };

    function fR(RR, JR) {
      RR[JR] ? RR[JR]++ : RR[JR] = 1
    }

    function VR(RR, JR) {
      void 0 !== RR[JR] && !--RR[JR] && delete RR[JR]
    }

    function KR(RR, JR, GR, yR) {
      let tR = "" + JR,
        uR = "" + GR;
      if (!RR && tR > uR) {
        let RR = tR;
        tR = uR, uR = RR
      }
      return tR + "\x01" + uR + "\x01" + (void 0 === yR ? "\0" : yR)
    }

    function wR(RR, JR) {
      return KR(RR, JR.v, JR.w, JR.name)
    }

    function rR(RR) {
      let JR = {
          options: {
            directed: RR.isDirected(),
            multigraph: RR.isMultigraph(),
            compound: RR.isCompound()
          },
          nodes: eR(RR),
          edges: aR(RR)
        },
        GR = RR.graph();
      return void 0 !== GR && (JR.value = structuredClone(GR)), JR
    }

    function eR(RR) {
      return RR.nodes().map((JR => {
        let GR = RR.node(JR),
          yR = RR.parent(JR),
          tR = {
            v: JR
          };
        return void 0 !== GR && (tR.value = GR), void 0 !== yR && (tR.parent = yR), tR
      }))
    }

    function aR(RR) {
      return RR.edges().map((JR => {
        let GR = RR.edge(JR),
          yR = {
            v: JR.v,
            w: JR.w
          };
        return void 0 !== JR.name && (yR.name = JR.name), void 0 !== GR && (yR.value = GR), yR
      }))
    }

    function LR(RR) {
      let JR = new iR(RR.options);
      return void 0 !== RR.value && JR.setGraph(RR.value), RR.nodes.forEach((RR => {
        JR.setNode(RR.v, RR.value), RR.parent && JR.setParent(RR.v, RR.parent)
      })), RR.edges.forEach((RR => {
        JR.setEdge({
          v: RR.v,
          w: RR.w,
          name: RR.name
        }, RR.value)
      })), JR
    }
    qR({}, {
      read: () => LR,
      write: () => rR
    });
    var nR = {};
    qR(nR, {
      CycleException: () => vR,
      bellmanFord: () => WR,
      components: () => AR,
      dijkstra: () => MR,
      dijkstraAll: () => BR,
      findCycles: () => pR,
      floydWarshall: () => bR,
      isAcyclic: () => xR,
      postorder: () => oR,
      preorder: () => cR,
      prim: () => PR,
      shortestPaths: () => IR,
      tarjan: () => lR,
      topsort: () => OR
    });
    var UR = () => 1;

    function WR(RR, JR, GR, yR) {
      return function(RR, JR, GR, yR) {
        let tR, uR = {},
          ZR = 0,
          qR = RR.nodes(),
          iR = function(RR) {
            let JR = uR[RR.v],
              yR = uR[RR.w];
            if (!JR || !yR) return;
            let ZR = GR(RR);
            JR.distance + ZR < yR.distance && (uR[RR.w] = {
              distance: JR.distance + ZR,
              predecessor: RR.v
            }, tR = !0)
          },
          fR = function() {
            qR.forEach((function(RR) {
              yR(RR).forEach((function(JR) {
                let GR = JR.v === RR ? JR.v : JR.w,
                  yR = GR === JR.v ? JR.w : JR.v;
                iR({
                  v: GR,
                  w: yR
                })
              }))
            }))
          };
        qR.forEach((function(RR) {
          let GR = RR === JR ? 0 : Number.POSITIVE_INFINITY;
          uR[RR] = {
            distance: GR,
            predecessor: ""
          }
        }));
        let VR = qR.length;
        for (let KR = 1; KR < VR && (tR = !1, ZR++, fR(), tR); KR++);
        if (ZR === VR - 1 && (tR = !1, fR(), tR)) throw new Error("The graph contains a negative weight cycle");
        return uR
      }(RR, String(JR), GR || UR, yR || function(JR) {
        var GR;
        return null != (GR = RR.outEdges(JR)) ? GR : []
      })
    }

    function AR(RR) {
      let JR, GR = {},
        yR = [];

      function tR(yR) {
        var uR, ZR;
        yR in GR || (GR[yR] = !0, JR.push(yR), null == (uR = RR.successors(yR)) || uR.forEach(tR), null == (ZR = RR.predecessors(yR)) || ZR.forEach(tR))
      }
      return RR.nodes().forEach((function(RR) {
        JR = [], tR(RR), JR.length && yR.push(JR)
      })), yR
    }
    var CR = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((RR => RR.key))
        }
        has(RR) {
          return RR in this._keyIndices
        }
        priority(RR) {
          let JR = this._keyIndices[RR];
          if (void 0 !== JR) return this._arr[JR].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(RR, JR) {
          let GR = this._keyIndices,
            yR = String(RR);
          if (!(yR in GR)) {
            let RR = this._arr,
              tR = RR.length;
            return GR[yR] = tR, RR.push({
              key: yR,
              priority: JR
            }), this._decrease(tR), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let RR = this._arr.pop();
          return delete this._keyIndices[RR.key], this._heapify(0), RR.key
        }
        decrease(RR, JR) {
          let GR = this._keyIndices[RR];
          if (void 0 === GR) throw new Error(`Key not found: ${RR}`);
          let yR = this._arr[GR].priority;
          if (JR > yR) throw new Error(`New priority is greater than current priority. Key: ${RR} Old: ${yR} New: ${JR}`);
          this._arr[GR].priority = JR, this._decrease(GR)
        }
        _heapify(RR) {
          let JR = this._arr,
            GR = 2 * RR,
            yR = GR + 1,
            tR = RR;
          GR < JR.length && (tR = JR[GR].priority < JR[tR].priority ? GR : tR, yR < JR.length && (tR = JR[yR].priority < JR[tR].priority ? yR : tR), tR !== RR && (this._swap(RR, tR), this._heapify(tR)))
        }
        _decrease(RR) {
          let JR, GR = this._arr,
            yR = GR[RR].priority;
          for (; 0 !== RR && (JR = RR >> 1, !(GR[JR].priority < yR));) this._swap(RR, JR), RR = JR
        }
        _swap(RR, JR) {
          let GR = this._arr,
            yR = this._keyIndices,
            tR = GR[RR],
            uR = GR[JR];
          GR[RR] = uR, GR[JR] = tR, yR[uR.key] = RR, yR[tR.key] = JR
        }
      },
      XR = () => 1;

    function MR(RR, JR, GR, yR) {
      return function(RR, JR, GR, yR) {
        let tR, uR, ZR = {},
          qR = new CR,
          iR = function(RR) {
            let JR = RR.v !== tR ? RR.v : RR.w,
              yR = ZR[JR];
            if (!yR) return;
            let iR = GR(RR),
              fR = uR.distance + iR;
            if (iR < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + RR + " Weight: " + iR);
            fR < yR.distance && (yR.distance = fR, yR.predecessor = tR, qR.decrease(JR, fR))
          };
        for (RR.nodes().forEach((function(RR) {
            let GR = RR === JR ? 0 : Number.POSITIVE_INFINITY;
            ZR[RR] = {
              distance: GR,
              predecessor: ""
            }, qR.add(RR, GR)
          })); qR.size() > 0;) {
          tR = qR.removeMin();
          let RR = ZR[tR];
          if (!RR || RR.distance === Number.POSITIVE_INFINITY) break;
          uR = RR, yR(tR).forEach(iR)
        }
        return ZR
      }(RR, String(JR), GR || XR, yR || function(JR) {
        var GR;
        return null != (GR = RR.outEdges(JR)) ? GR : []
      })
    }

    function BR(RR, JR, GR) {
      return RR.nodes().reduce((function(yR, tR) {
        return yR[tR] = MR(RR, tR, JR, GR), yR
      }), {})
    }

    function lR(RR) {
      let JR = 0,
        GR = [],
        yR = {},
        tR = [];

      function uR(ZR) {
        var qR;
        let iR = yR[ZR] = {
          onStack: !0,
          lowlink: JR,
          index: JR++
        };
        if (GR.push(ZR), null == (qR = RR.successors(ZR)) || qR.forEach((function(RR) {
            if (RR in yR) {
              let JR = yR[RR];
              null != JR && JR.onStack && (iR.lowlink = Math.min(iR.lowlink, JR.index))
            } else {
              uR(RR);
              let JR = yR[RR];
              JR && (iR.lowlink = Math.min(iR.lowlink, JR.lowlink))
            }
          })), iR.lowlink === iR.index) {
          let RR, JR = [];
          do {
            RR = GR.pop();
            let tR = yR[RR];
            tR && (tR.onStack = !1), JR.push(RR)
          } while (ZR !== RR);
          tR.push(JR)
        }
      }
      return RR.nodes().forEach((function(RR) {
        RR in yR || uR(RR)
      })), tR
    }

    function pR(RR) {
      return lR(RR).filter((function(JR) {
        var GR;
        let yR = JR[0];
        return !!yR && (JR.length > 1 || 1 === JR.length && (null != (GR = RR.outEdges(yR, yR)) ? GR : []).length > 0)
      }))
    }
    var gR = () => 1;

    function bR(RR, JR, GR) {
      return function(RR, JR, GR) {
        let yR = {},
          tR = RR.nodes();
        return tR.forEach((function(RR) {
          let uR = {};
          yR[RR] = uR, uR[RR] = {
            distance: 0,
            predecessor: ""
          }, tR.forEach((function(JR) {
            RR !== JR && (uR[JR] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), GR(RR).forEach((function(GR) {
            let yR = GR.v === RR ? GR.w : GR.v,
              tR = JR(GR);
            uR[yR] = {
              distance: tR,
              predecessor: RR
            }
          }))
        })), tR.forEach((function(RR) {
          let JR = yR[RR];
          JR && tR.forEach((function(GR) {
            let uR = yR[GR];
            uR && tR.forEach((function(GR) {
              let yR = uR[RR],
                tR = JR[GR],
                ZR = uR[GR];
              if (yR && tR && ZR) {
                let RR = yR.distance + tR.distance;
                RR < ZR.distance && (ZR.distance = RR, ZR.predecessor = tR.predecessor)
              }
            }))
          }))
        })), yR
      }(RR, JR || gR, GR || function(JR) {
        var GR;
        return null != (GR = RR.outEdges(JR)) ? GR : []
      })
    }
    var vR = class extends Error {
      constructor(RR) {
        super(RR), this.name = "CycleException"
      }
    };

    function OR(RR) {
      let JR = {},
        GR = {},
        yR = [];
      if (RR.sinks().forEach((function tR(uR) {
          var ZR;
          if (uR in GR) throw new vR;
          uR in JR || (GR[uR] = !0, JR[uR] = !0, null == (ZR = RR.predecessors(uR)) || ZR.forEach(tR), delete GR[uR], yR.push(uR))
        })), Object.keys(JR).length !== RR.nodeCount()) throw new vR;
      return yR
    }

    function xR(RR) {
      try {
        OR(RR)
      } catch (JR) {
        if (JR instanceof vR) return !1;
        throw JR
      }
      return !0
    }

    function NR(RR, JR, GR, yR, tR) {
      Array.isArray(JR) || (JR = [JR]);
      let uR = JR => {
          var GR;
          return null != (GR = RR.isDirected() ? RR.successors(JR) : RR.neighbors(JR)) ? GR : []
        },
        ZR = {};
      return JR.forEach((function(JR) {
        if (!RR.hasNode(JR)) throw new Error("Graph does not have node: " + JR);
        tR = DR(RR, JR, "post" === GR, ZR, uR, yR, tR)
      })), tR
    }

    function DR(RR, JR, GR, yR, tR, uR, ZR) {
      return JR in yR || (yR[JR] = !0, GR || (ZR = uR(ZR, JR)), tR(JR).forEach((function(JR) {
        ZR = DR(RR, JR, GR, yR, tR, uR, ZR)
      })), GR && (ZR = uR(ZR, JR))), ZR
    }

    function HR(RR, JR, GR) {
      return NR(RR, JR, GR, (function(RR, JR) {
        return RR.push(JR), RR
      }), [])
    }

    function oR(RR, JR) {
      return HR(RR, JR, "post")
    }

    function cR(RR, JR) {
      return HR(RR, JR, "pre")
    }

    function PR(RR, JR) {
      var GR;
      let yR, tR = new iR,
        uR = {},
        ZR = new CR;

      function qR(RR) {
        let GR = RR.v === yR ? RR.w : RR.v,
          tR = ZR.priority(GR);
        if (void 0 !== tR) {
          let qR = JR(RR);
          qR < tR && (uR[GR] = yR, ZR.decrease(GR, qR))
        }
      }
      if (0 === RR.nodeCount()) return tR;
      RR.nodes().forEach((function(RR) {
        ZR.add(RR, Number.POSITIVE_INFINITY), tR.setNode(RR)
      }));
      let fR = RR.nodes()[0];
      void 0 !== fR && ZR.decrease(fR, 0);
      let VR = !1;
      for (; ZR.size() > 0;) {
        if (yR = ZR.removeMin(), yR in uR) tR.setEdge(yR, uR[yR]);
        else {
          if (VR) throw new Error("Input graph is not connected: " + RR);
          VR = !0
        }
        null == (GR = RR.nodeEdges(yR)) || GR.forEach(qR)
      }
      return tR
    }

    function IR(RR, JR, GR, yR) {
      return function(RR, JR, GR, yR) {
        if (void 0 === GR) return MR(RR, JR, GR, yR);
        let tR = !1,
          uR = RR.nodes();
        for (let ZR = 0; ZR < uR.length; ZR++) {
          let qR = uR[ZR];
          if (void 0 === qR) continue;
          let iR = yR(qR);
          for (let RR = 0; RR < iR.length; RR++) {
            let JR = iR[RR];
            if (!JR) continue;
            let yR = JR.v === qR ? JR.v : JR.w;
            GR({
              v: yR,
              w: yR === JR.v ? JR.w : JR.v
            }) < 0 && (tR = !0)
          }
          if (tR) return WR(RR, JR, GR, yR)
        }
        return MR(RR, JR, GR, yR)
      }(RR, JR, GR, null != yR ? yR : JR => {
        var GR;
        return null != (GR = RR.outEdges(JR)) ? GR : []
      })
    }
    var mR = iR;

    function zR(RR, JR, GR, yR) {
      let tR = yR;
      for (; RR.hasNode(tR);) tR = hR(yR);
      return GR.dummy = JR, RR.setNode(tR, GR), tR
    }

    function SR(RR) {
      let JR = new mR({
        multigraph: RR.isMultigraph()
      }).setGraph(RR.graph());
      return RR.nodes().forEach((GR => {
        RR.children(GR).length || JR.setNode(GR, RR.node(GR))
      })), RR.edges().forEach((GR => {
        JR.setEdge(GR, RR.edge(GR))
      })), JR
    }

    function jR(RR, JR) {
      let GR, yR, tR = RR.x,
        uR = RR.y,
        ZR = JR.x - tR,
        qR = JR.y - uR,
        iR = RR.width / 2,
        fR = RR.height / 2;
      if (!ZR && !qR) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(qR) * iR > Math.abs(ZR) * fR ? (qR < 0 && (fR = -fR), GR = fR * ZR / qR, yR = fR) : (ZR < 0 && (iR = -iR), GR = iR, yR = iR * qR / ZR), {
        x: tR + GR,
        y: uR + yR
      }
    }

    function dR(RR) {
      let JR = RJ(QR(RR) + 1).map((() => []));
      return RR.nodes().forEach((GR => {
        let yR = RR.node(GR),
          tR = yR.rank;
        void 0 !== tR && (JR[tR] || (JR[tR] = []), JR[tR][yR.order] = GR)
      })), JR
    }

    function ER(RR, JR, GR, yR) {
      let tR = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (tR.rank = GR, tR.order = yR), zR(RR, "border", tR, JR)
    }
    var YR = 65535;

    function kR(RR, JR) {
      if (JR.length > YR) {
        let GR = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YR,
            GR = [];
          for (let yR = 0; yR < RR.length; yR += JR) {
            let tR = RR.slice(yR, yR + JR);
            GR.push(tR)
          }
          return GR
        }(JR);
        return RR(...GR.map((JR => RR(...JR))))
      }
      return RR(...JR)
    }

    function QR(RR) {
      let JR = RR.nodes().map((JR => {
        let GR = RR.node(JR).rank;
        return void 0 === GR ? Number.MIN_VALUE : GR
      }));
      return kR(Math.max, JR)
    }

    function FR(RR, JR) {
      let GR = Date.now();
      try {
        return JR()
      } finally {
        console.log(RR + " time: " + (Date.now() - GR) + "ms")
      }
    }

    function TR(RR, JR) {
      return JR()
    }
    var sR = 0;

    function hR(RR) {
      return RR + "" + ++sR
    }

    function RJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == JR && (JR = RR, RR = 0);
      let yR = RR => RR < JR;
      GR < 0 && (yR = RR => JR < RR);
      let tR = [];
      for (let uR = RR; yR(uR); uR += GR) tR.push(uR);
      return tR
    }

    function JJ(RR, JR) {
      let GR = {};
      for (let yR of JR) void 0 !== RR[yR] && (GR[yR] = RR[yR]);
      return GR
    }

    function GJ(RR, JR) {
      let GR;
      return GR = "string" == typeof JR ? RR => RR[JR] : JR, Object.entries(RR).reduce(((RR, JR) => {
        let [yR, tR] = JR;
        return RR[yR] = GR(tR, yR), RR
      }), {})
    }
    var yJ = "\0";

    function tJ(RR, JR, GR) {
      var yR, tR, uR, ZR, qR, iR;
      if (!(RR && JR && GR && "edge" === JR.dummy && "edge" === GR.dummy && JR.edgeObj && GR.edgeObj && RR[JR.edgeObj.v] && RR[GR.edgeObj.v] && RR[JR.edgeObj.w] && RR[GR.edgeObj.w])) return 0;
      let fR = !0;
      JR.edgeObj.w === GR.edgeObj.w && (fR = !1);
      let VR = fR ? null != (tR = null == (yR = RR[JR.edgeObj.v]) ? void 0 : yR.rank) ? tR : NaN : null != (ZR = null == (uR = RR[JR.edgeObj.w]) ? void 0 : uR.rank) ? ZR : NaN,
        KR = Object.entries(RR).find((RR => {
          var GR, yR;
          return (null == (GR = RR[1].edgeObj) ? void 0 : GR.v) === JR.edgeObj.v && (null == (yR = RR[1].edgeObj) ? void 0 : yR.w) === JR.edgeObj.w && RR[1].rank === VR
        })),
        wR = Object.entries(RR).find((RR => {
          var JR, yR;
          return (null == (JR = RR[1].edgeObj) ? void 0 : JR.v) === GR.edgeObj.v && (null == (yR = RR[1].edgeObj) ? void 0 : yR.w) === GR.edgeObj.w && RR[1].rank === VR
        }));
      if (!KR || !wR) return 0;
      let rR = null != (qR = KR[1].order) ? qR : NaN,
        eR = null != (iR = wR[1].order) ? iR : NaN;
      return isNaN(rR - eR) ? 0 : rR - eR
    }
    var uJ = "3.1.1";

    function ZJ(RR) {
      RR._prev._next = RR._next, RR._next._prev = RR._prev, delete RR._next, delete RR._prev
    }

    function qJ(RR, JR) {
      if ("_next" !== RR && "_prev" !== RR) return JR
    }
    var iJ = class {
        constructor() {
          tR(this, "_sentinel");
          let RR = {};
          RR._next = RR._prev = RR, this._sentinel = RR
        }
        dequeue() {
          let RR = this._sentinel,
            JR = RR._prev;
          if (JR !== RR) return ZJ(JR), JR
        }
        enqueue(RR) {
          let JR = this._sentinel;
          RR._prev && RR._next && ZJ(RR), RR._next = JR._next, JR._next._prev = RR, JR._next = RR, RR._prev = JR
        }
        toString() {
          let RR = [],
            JR = this._sentinel,
            GR = JR._prev;
          for (; GR !== JR;) RR.push(JSON.stringify(GR, qJ)), GR = GR._prev;
          return "[" + RR.join(", ") + "]"
        }
      },
      fJ = () => 1;

    function VJ(RR, JR) {
      if (RR.nodeCount() <= 1) return [];
      let GR = function(RR, JR) {
        let GR = new mR,
          yR = 0,
          tR = 0;
        RR.nodes().forEach((RR => {
          GR.setNode(RR, {
            v: RR,
            in: 0,
            out: 0
          })
        })), RR.edges().forEach((RR => {
          let uR = GR.edge(RR.v, RR.w) || 0,
            ZR = JR(RR),
            qR = uR + ZR;
          GR.setEdge(RR.v, RR.w, qR);
          let iR = GR.node(RR.v),
            fR = GR.node(RR.w);
          tR = Math.max(tR, iR.out += ZR), yR = Math.max(yR, fR.in += ZR)
        }));
        let uR = function(RR) {
            let JR = [];
            for (let GR = 0; GR < RR; GR++) JR.push(GR);
            return JR
          }(tR + yR + 3).map((() => new iJ)),
          ZR = yR + 1;
        return GR.nodes().forEach((RR => {
          wJ(uR, ZR, GR.node(RR))
        })), {
          graph: GR,
          buckets: uR,
          zeroIdx: ZR
        }
      }(RR, JR || fJ);
      return function(RR, JR, GR) {
        var yR;
        let tR, uR = [],
          ZR = JR[JR.length - 1],
          qR = JR[0];
        for (; RR.nodeCount();) {
          for (; tR = qR.dequeue();) KJ(RR, JR, GR, tR);
          for (; tR = ZR.dequeue();) KJ(RR, JR, GR, tR);
          if (RR.nodeCount())
            for (let ZR = JR.length - 2; ZR > 0; --ZR)
              if (tR = null == (yR = JR[ZR]) ? void 0 : yR.dequeue(), tR) {
                uR = uR.concat(KJ(RR, JR, GR, tR, !0) || []);
                break
              }
        }
        return uR
      }(GR.graph, GR.buckets, GR.zeroIdx).flatMap((JR => RR.outEdges(JR.v, JR.w) || []))
    }

    function KJ(RR, JR, GR, yR, tR) {
      let uR = [],
        ZR = tR ? uR : void 0;
      return (RR.inEdges(yR.v) || []).forEach((yR => {
        let ZR = RR.edge(yR),
          qR = RR.node(yR.v);
        tR && uR.push({
          v: yR.v,
          w: yR.w
        }), qR.out -= ZR, wJ(JR, GR, qR)
      })), (RR.outEdges(yR.v) || []).forEach((yR => {
        let tR = RR.edge(yR),
          uR = yR.w,
          ZR = RR.node(uR);
        ZR.in -= tR, wJ(JR, GR, ZR)
      })), RR.removeNode(yR.v), ZR
    }

    function wJ(RR, JR, GR) {
      var yR, tR, uR;
      GR.out ? GR.in ? null == (uR = RR[GR.out - GR.in + JR]) || uR.enqueue(GR) : null == (tR = RR[RR.length - 1]) || tR.enqueue(GR) : null == (yR = RR[0]) || yR.enqueue(GR)
    }

    function rJ(RR, JR) {
      var GR;
      ("greedy" === RR.graph().acyclicer ? VJ(RR, (GR = RR, RR => GR.edge(RR).weight)) : function(RR, JR) {
        let GR = [],
          yR = {},
          tR = {};

        function uR(JR) {
          Object.hasOwn(tR, JR) || (tR[JR] = !0, yR[JR] = !0, RR.outEdges(JR).forEach((RR => {
            Object.hasOwn(yR, RR.w) ? GR.push(RR) : uR(RR.w)
          })), delete yR[JR])
        }

        function ZR(uR) {
          var qR;
          Object.hasOwn(tR, uR) || (tR[uR] = !0, yR[uR] = !0, null == (qR = RR.outEdges(uR)) || qR.forEach((tR => {
            var qR, iR;
            Object.hasOwn(yR, tR.w) || (null == (qR = JR.node(uR)) ? void 0 : qR.rank) > (null == (iR = JR.node(tR.w)) ? void 0 : iR.rank) && function(RR, JR, GR) {
              let yR = new Set;

              function tR(JR) {
                var uR;
                if (RR.sources().includes(JR)) return !0;
                yR.add(JR);
                for (let ZR of null != (uR = RR.inEdges(JR)) ? uR : [])
                  if ((ZR.v !== GR.v || ZR.w !== GR.w) && !yR.has(ZR.v) && tR(ZR.v)) return !0;
                return !1
              }
              return tR(JR)
            }(RR, tR.w, tR) ? GR.push(tR) : ZR(tR.w)
          })), delete yR[uR])
        }
        let qR = uR;
        return JR && "function" == typeof JR.node && (qR = ZR), RR.sources().forEach(qR), RR.nodes().forEach(qR), GR
      }(RR, null != JR ? JR : null)).forEach((JR => {
        let GR = RR.edge(JR);
        RR.removeEdge(JR), GR.forwardName = JR.name, GR.reversed = !0, RR.setEdge(JR.w, JR.v, GR, hR("rev"))
      }))
    }

    function eJ(RR) {
      RR.graph().dummyChains = [], RR.edges().forEach((JR => function(RR, JR) {
        let GR, yR, tR, uR = JR.v,
          ZR = RR.node(uR).rank,
          qR = JR.w,
          iR = RR.node(qR).rank,
          fR = JR.name,
          VR = RR.edge(JR),
          KR = VR.labelRank;
        if (iR === ZR + 1) return;
        for (RR.removeEdge(JR), tR = 0, ++ZR; ZR < iR; ++tR, ++ZR) VR.points = [], yR = {
          width: 0,
          height: 0,
          edgeLabel: VR,
          edgeObj: JR,
          rank: ZR
        }, GR = zR(RR, "edge", yR, "_d"), ZR === KR && (yR.width = VR.width, yR.height = VR.height, yR.dummy = "edge-label", yR.labelpos = VR.labelpos), RR.setEdge(uR, GR, {
          weight: VR.weight
        }, fR), 0 === tR && RR.graph().dummyChains.push(GR), uR = GR;
        RR.setEdge(uR, qR, {
          weight: VR.weight
        }, fR)
      }(RR, JR)))
    }

    function aJ(RR) {
      let JR = {};
      RR.sources().forEach((function GR(yR) {
        let tR = RR.node(yR);
        if (Object.hasOwn(JR, yR)) return tR.rank;
        JR[yR] = !0;
        let uR = RR.outEdges(yR),
          ZR = uR ? uR.map((JR => null == JR ? Number.POSITIVE_INFINITY : GR(JR.w) - RR.edge(JR).minlen)) : [],
          qR = kR(Math.min, ZR);
        return qR === Number.POSITIVE_INFINITY && (qR = 0), tR.rank = qR
      }))
    }

    function LJ(RR, JR) {
      return RR.node(JR.w).rank - RR.node(JR.v).rank - RR.edge(JR).minlen
    }
    var nJ = function(RR) {
      let JR = new mR({
          directed: !1
        }),
        GR = RR.nodes();
      if (0 === GR.length) throw new Error("Graph must have at least one node");
      let yR, tR, uR = GR[0],
        ZR = RR.nodeCount();
      for (JR.setNode(uR, {}); UJ(JR, RR) < ZR && (yR = WJ(JR, RR), yR);) tR = JR.hasNode(yR.v) ? LJ(RR, yR) : -LJ(RR, yR), AJ(JR, RR, tR);
      return JR
    };

    function UJ(RR, JR) {
      return RR.nodes().forEach((function GR(yR) {
        let tR = JR.nodeEdges(yR);
        tR && tR.forEach((tR => {
          let uR = tR.v,
            ZR = yR === uR ? tR.w : uR;
          !RR.hasNode(ZR) && !LJ(JR, tR) && (RR.setNode(ZR, {}), RR.setEdge(yR, ZR, {}), GR(ZR))
        }))
      })), RR.nodeCount()
    }

    function WJ(RR, JR) {
      return JR.edges().reduce(((GR, yR) => {
        let tR = Number.POSITIVE_INFINITY;
        return RR.hasNode(yR.v) !== RR.hasNode(yR.w) && (tR = LJ(JR, yR)), tR < GR[0] ? [tR, yR] : GR
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function AJ(RR, JR, GR) {
      RR.nodes().forEach((RR => JR.node(RR).rank += GR))
    }
    var {
      preorder: CJ,
      postorder: XJ
    } = nR, MJ = BJ;

    function BJ(RR) {
      RR = function(RR) {
        let JR = (new mR).setGraph(RR.graph());
        return RR.nodes().forEach((GR => JR.setNode(GR, RR.node(GR)))), RR.edges().forEach((GR => {
          let yR = JR.edge(GR.v, GR.w) || {
              weight: 0,
              minlen: 1
            },
            tR = RR.edge(GR);
          JR.setEdge(GR.v, GR.w, {
            weight: yR.weight + tR.weight,
            minlen: Math.max(yR.minlen, tR.minlen)
          })
        })), JR
      }(RR), aJ(RR);
      let JR, GR, yR = nJ(RR);
      for (gJ(yR), lJ(yR, RR); JR = vJ(yR);) GR = OJ(yR, RR, JR), xJ(yR, RR, JR, GR)
    }

    function lJ(RR, JR) {
      let GR = XJ(RR, RR.nodes());
      GR = GR.slice(0, GR.length - 1), GR.forEach((GR => function(RR, JR, GR) {
        let yR = RR.node(GR).parent,
          tR = RR.edge(GR, yR);
        tR.cutvalue = pJ(RR, JR, GR)
      }(RR, JR, GR)))
    }

    function pJ(RR, JR, GR) {
      let yR = RR.node(GR).parent,
        tR = !0,
        uR = JR.edge(GR, yR),
        ZR = 0;
      uR || (tR = !1, uR = JR.edge(yR, GR)), ZR = uR.weight;
      let qR = JR.nodeEdges(GR);
      return qR && qR.forEach((uR => {
        let qR = uR.v === GR,
          iR = qR ? uR.w : uR.v;
        if (iR !== yR) {
          let yR = qR === tR,
            fR = JR.edge(uR).weight;
          if (ZR += yR ? fR : -fR, function(RR, JR, GR) {
              return RR.hasEdge(JR, GR)
            }(RR, GR, iR)) {
            let JR = RR.edge(GR, iR).cutvalue;
            ZR += yR ? -JR : JR
          }
        }
      })), ZR
    }

    function gJ(RR, JR) {
      arguments.length < 2 && (JR = RR.nodes()[0]), bJ(RR, {}, 1, JR)
    }

    function bJ(RR, JR, GR, yR, tR) {
      let uR = GR,
        ZR = RR.node(yR);
      JR[yR] = !0;
      let qR = RR.neighbors(yR);
      return qR && qR.forEach((tR => {
        Object.hasOwn(JR, tR) || (GR = bJ(RR, JR, GR, tR, yR))
      })), ZR.low = uR, ZR.lim = GR++, tR ? ZR.parent = tR : delete ZR.parent, GR
    }

    function vJ(RR) {
      return RR.edges().find((JR => RR.edge(JR).cutvalue < 0))
    }

    function OJ(RR, JR, GR) {
      let yR = GR.v,
        tR = GR.w;
      JR.hasEdge(yR, tR) || (yR = GR.w, tR = GR.v);
      let uR = RR.node(yR),
        ZR = RR.node(tR),
        qR = uR,
        iR = !1;
      return uR.lim > ZR.lim && (qR = ZR, iR = !0), JR.edges().filter((JR => iR === NJ(RR, RR.node(JR.v), qR) && iR !== NJ(RR, RR.node(JR.w), qR))).reduce(((RR, GR) => LJ(JR, GR) < LJ(JR, RR) ? GR : RR))
    }

    function xJ(RR, JR, GR, yR) {
      let tR = GR.v,
        uR = GR.w;
      RR.removeEdge(tR, uR), RR.setEdge(yR.v, yR.w, {}), gJ(RR), lJ(RR, JR),
        function(RR, JR) {
          let GR = RR.nodes().find((JR => !RR.node(JR).parent));
          if (!GR) return;
          let yR = CJ(RR, [GR]);
          yR = yR.slice(1), yR.forEach((GR => {
            let yR = RR.node(GR).parent,
              tR = JR.edge(GR, yR),
              uR = !1;
            tR || (tR = JR.edge(yR, GR), uR = !0), JR.node(GR).rank = JR.node(yR).rank + (uR ? tR.minlen : -tR.minlen)
          }))
        }(RR, JR)
    }

    function NJ(RR, JR, GR) {
      return GR.low <= JR.lim && JR.lim <= GR.lim
    }
    BJ.initLowLimValues = gJ, BJ.initCutValues = lJ, BJ.calcCutValue = pJ, BJ.leaveEdge = vJ, BJ.enterEdge = OJ, BJ.exchangeEdges = xJ;
    var DJ = function(RR) {
      let JR = RR.graph().ranker;
      if ("function" == typeof JR) return JR(RR);
      switch (JR) {
        case "network-simplex":
        default:
          oJ(RR);
          break;
        case "tight-tree":
          ! function(RR) {
            aJ(RR), nJ(RR)
          }(RR);
          break;
        case "longest-path":
          HJ(RR);
        case "none":
      }
    };
    var HJ = aJ;

    function oJ(RR) {
      MJ(RR)
    }
    var cJ = function(RR) {
      let JR = function(RR) {
          let JR = {},
            GR = 0;

          function yR(tR) {
            let uR = GR;
            RR.children(tR).forEach(yR), JR[tR] = {
              low: uR,
              lim: GR++
            }
          }
          return RR.children(yJ).forEach(yR), JR
        }(RR),
        GR = RR.graph();
      if (!Array.isArray(GR.dummyChains)) return;
      GR.dummyChains.forEach((GR => {
        let yR = RR.node(GR),
          tR = yR.edgeObj,
          uR = function(RR, JR, GR, yR) {
            let tR, uR = [],
              ZR = [],
              qR = Math.min(JR[GR].low, JR[yR].low),
              iR = Math.max(JR[GR].lim, JR[yR].lim);
            tR = GR;
            do {
              tR = RR.parent(tR), uR.push(tR)
            } while (tR && (JR[tR].low > qR || iR > JR[tR].lim));
            let fR = tR,
              VR = yR;
            for (;
              (VR = RR.parent(VR)) !== fR;) ZR.push(VR);
            return {
              path: uR.concat(ZR.reverse()),
              lca: fR
            }
          }(RR, JR, tR.v, tR.w),
          ZR = uR.path,
          qR = uR.lca,
          iR = 0,
          fR = ZR[iR],
          VR = !0;
        for (; GR !== tR.w;) {
          if (yR = RR.node(GR), VR) {
            for (;
              (fR = ZR[iR]) !== qR && RR.node(fR).maxRank < yR.rank;) iR++;
            fR === qR && (VR = !1)
          }
          if (!VR) {
            for (; iR < ZR.length - 1 && RR.node(ZR[iR + 1]).minRank <= yR.rank;) iR++;
            fR = ZR[iR]
          }
          void 0 !== fR && RR.setParent(GR, fR), GR = RR.successors(GR)[0]
        }
      }))
    };

    function PJ(RR) {
      let JR = zR(RR, "root", {}, "_root"),
        GR = function(RR) {
          let JR = {};

          function GR(yR, tR) {
            let uR = RR.children(yR);
            uR && uR.length && uR.forEach((RR => GR(RR, tR + 1))), JR[yR] = tR
          }
          return RR.children(yJ).forEach((RR => GR(RR, 1))), JR
        }(RR),
        yR = Object.values(GR),
        tR = kR(Math.max, yR) - 1,
        uR = 2 * tR + 1;
      RR.graph().nestingRoot = JR, RR.edges().forEach((JR => RR.edge(JR).minlen *= uR));
      let ZR = function(RR) {
        return RR.edges().reduce(((JR, GR) => JR + RR.edge(GR).weight), 0)
      }(RR) + 1;
      RR.children(yJ).forEach((yR => {
        IJ(RR, JR, uR, ZR, tR, GR, yR)
      })), RR.graph().nodeRankFactor = uR
    }

    function IJ(RR, JR, GR, yR, tR, uR, ZR) {
      var qR;
      let iR = RR.children(ZR);
      if (!iR.length) return void(ZR !== JR && RR.setEdge(JR, ZR, {
        weight: 0,
        minlen: GR
      }));
      let fR = ER(RR, "_bt"),
        VR = ER(RR, "_bb"),
        KR = RR.node(ZR);
      RR.setParent(fR, ZR), KR.borderTop = fR, RR.setParent(VR, ZR), KR.borderBottom = VR, iR.forEach((qR => {
        var iR;
        IJ(RR, JR, GR, yR, tR, uR, qR);
        let KR = RR.node(qR),
          wR = KR.borderTop ? KR.borderTop : qR,
          rR = KR.borderBottom ? KR.borderBottom : qR,
          eR = KR.borderTop ? yR : 2 * yR,
          aR = wR !== rR ? 1 : tR - (null != (iR = uR[ZR]) ? iR : 0) + 1;
        RR.setEdge(fR, wR, {
          weight: eR,
          minlen: aR,
          nestingEdge: !0
        }), RR.setEdge(rR, VR, {
          weight: eR,
          minlen: aR,
          nestingEdge: !0
        })
      })), RR.parent(ZR) || RR.setEdge(JR, fR, {
        weight: 0,
        minlen: tR + (null != (qR = uR[ZR]) ? qR : 0)
      })
    }
    var mJ = function(RR) {
      RR.children(yJ).forEach((function JR(GR) {
        let yR = RR.children(GR),
          tR = RR.node(GR);
        if (yR.length && yR.forEach(JR), tR && Object.hasOwn(tR, "minRank")) {
          tR.borderLeft = [], tR.borderRight = [];
          for (let JR = tR.minRank, yR = tR.maxRank + 1; JR < yR; ++JR) zJ(RR, "borderLeft", "_bl", GR, tR, JR), zJ(RR, "borderRight", "_br", GR, tR, JR)
        }
      }))
    };

    function zJ(RR, JR, GR, yR, tR, uR) {
      let ZR = {
          width: 0,
          height: 0,
          rank: uR,
          borderType: JR
        },
        qR = tR[JR][uR - 1],
        iR = zR(RR, "border", ZR, GR);
      tR[JR][uR] = iR, RR.setParent(iR, yR), qR && RR.setEdge(qR, iR, {
        weight: 1
      })
    }

    function SJ(RR) {
      var JR;
      let GR = null == (JR = RR.graph().rankdir) ? void 0 : JR.toLowerCase();
      ("bt" === GR || "rl" === GR) && function(RR) {
        RR.nodes().forEach((JR => EJ(RR.node(JR)))), RR.edges().forEach((JR => {
          var GR;
          let yR = RR.edge(JR);
          null == (GR = yR.points) || GR.forEach(EJ), Object.hasOwn(yR, "y") && EJ(yR)
        }))
      }(RR), ("lr" === GR || "rl" === GR) && (function(RR) {
        RR.nodes().forEach((JR => YJ(RR.node(JR)))), RR.edges().forEach((JR => {
          var GR;
          let yR = RR.edge(JR);
          null == (GR = yR.points) || GR.forEach(YJ), Object.hasOwn(yR, "x") && YJ(yR)
        }))
      }(RR), jJ(RR))
    }

    function jJ(RR) {
      RR.nodes().forEach((JR => dJ(RR.node(JR)))), RR.edges().forEach((JR => dJ(RR.edge(JR))))
    }

    function dJ(RR) {
      let JR = RR.width;
      RR.width = RR.height, RR.height = JR
    }

    function EJ(RR) {
      RR.y = -RR.y
    }

    function YJ(RR) {
      let JR = RR.x;
      RR.x = RR.y, RR.y = JR
    }

    function kJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GR = {},
        yR = RR.nodes().filter((JR => !RR.children(JR).length)),
        tR = yR.map((JR => RR.node(JR).rank)),
        uR = RJ(kR(Math.max, tR) + 1).map((() => []));
      return yR.sort(((JR, GR) => RR.node(JR).rank - RR.node(GR).rank)).forEach((function yR(tR) {
        if (GR[tR]) return;
        GR[tR] = !0;
        let ZR = RR.node(tR);
        uR[ZR.rank].push(tR);
        let qR = RR.successors(tR);
        qR && [...qR].sort(((GR, yR) => function(GR, yR) {
          let tR = RR.node(GR),
            uR = RR.node(yR);
          return tJ(JR, tR, uR)
        }(GR, yR))).forEach(yR)
      })), uR
    }

    function QJ(RR, JR) {
      let GR = 0;
      for (let yR = 1; yR < JR.length; ++yR) GR += FJ(RR, JR[yR - 1], JR[yR]);
      return GR
    }

    function FJ(RR, JR, GR) {
      let yR = function(RR, JR) {
          return RR.reduce(((RR, GR, yR) => (RR[GR] = JR[yR], RR)), {})
        }(GR, GR.map(((RR, JR) => JR))),
        tR = JR.flatMap((JR => {
          let GR = RR.outEdges(JR);
          return GR ? GR.map((JR => ({
            pos: yR[JR.w],
            weight: RR.edge(JR).weight
          }))).sort(((RR, JR) => RR.pos - JR.pos)) : []
        })),
        uR = 1;
      for (; uR < GR.length;) uR <<= 1;
      let ZR = 2 * uR - 1;
      uR -= 1;
      let qR = new Array(ZR).fill(0),
        iR = 0;
      return tR.forEach((RR => {
        let JR = RR.pos + uR;
        qR[JR] += RR.weight;
        let GR = 0;
        for (; JR > 0;) JR % 2 && (GR += qR[JR + 1]), JR = JR - 1 >> 1, qR[JR] += RR.weight;
        iR += RR.weight * GR
      })), iR
    }

    function TJ(RR, JR) {
      let GR = {};
      return RR.forEach(((RR, JR) => {
          let yR = {
            indegree: 0,
            in: [],
            out: [],
            vs: [RR.v],
            i: JR
          };
          void 0 !== RR.barycenter && (yR.barycenter = RR.barycenter, yR.weight = RR.weight), GR[RR.v] = yR
        })), JR.edges().forEach((RR => {
          let JR = GR[RR.v],
            yR = GR[RR.w];
          void 0 !== JR && void 0 !== yR && (yR.indegree++, JR.out.push(yR))
        })),
        function(RR) {
          let JR = [];

          function GR(RR) {
            return JR => {
              JR.merged || (void 0 === JR.barycenter || void 0 === RR.barycenter || JR.barycenter >= RR.barycenter) && function(RR, JR) {
                let GR = 0,
                  yR = 0;
                RR.weight && (GR += RR.barycenter * RR.weight, yR += RR.weight), JR.weight && (GR += JR.barycenter * JR.weight, yR += JR.weight), RR.vs = JR.vs.concat(RR.vs), RR.barycenter = GR / yR, RR.weight = yR, RR.i = Math.min(JR.i, RR.i), JR.merged = !0
              }(RR, JR)
            }
          }

          function yR(JR) {
            return GR => {
              GR.in.push(JR), 0 === --GR.indegree && RR.push(GR)
            }
          }
          for (; RR.length;) {
            let tR = RR.pop();
            JR.push(tR), tR.in.reverse().forEach(GR(tR)), tR.out.forEach(yR(tR))
          }
          return JR.filter((RR => !RR.merged)).map((RR => JJ(RR, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(GR).filter((RR => !RR.indegree)))
    }

    function sJ(RR, JR, GR, yR, tR) {
      let uR = {},
        ZR = null,
        qR = null,
        iR = tR;
      "boolean" == typeof JR ? (iR = JR, uR = {}) : JR && (uR = JR, ZR = null != GR ? GR : null, qR = null != yR ? yR : null);
      let fR = function(RR, JR) {
          let GR = {
            lhs: [],
            rhs: []
          };
          return RR.forEach((RR => {
            JR(RR) ? GR.lhs.push(RR) : GR.rhs.push(RR)
          })), GR
        }(RR, (RR => Object.hasOwn(RR, "barycenter"))),
        VR = fR.lhs,
        KR = fR.rhs.sort(((RR, JR) => JR.i - RR.i)),
        wR = [],
        rR = 0,
        eR = 0,
        aR = 0;
      VR.sort(function(RR, JR, GR) {
        return (yR, tR) => {
          if (yR.barycenter < tR.barycenter) return -1;
          if (yR.barycenter > tR.barycenter) return 1;
          if (RR && ("string" == typeof yR.vs[0] || "string" == typeof tR.vs[0])) {
            let GR = RR.node(yR.vs[0]),
              uR = RR.node(tR.vs[0]),
              ZR = tJ(JR, GR, uR);
            if (0 !== ZR) return ZR
          }
          return GR ? tR.i - yR.i : yR.i - tR.i
        }
      }(qR, ZR, !!iR));
      for (let [nR, UR] of Object.entries(uR)) {
        let RR = VR.findIndex((RR => RR.vs[0] === nR));
        VR.splice(RR + 1, 0, UR)
      }
      aR = hJ(wR, KR, aR), VR.forEach((RR => {
        aR += RR.vs.length, wR.push(RR.vs), rR += RR.barycenter * RR.weight, eR += RR.weight, aR = hJ(wR, KR, aR)
      }));
      let LR = {
        vs: wR.flat(1)
      };
      return eR && (LR.barycenter = rR / eR, LR.weight = eR), LR
    }

    function hJ(RR, JR, GR) {
      let yR;
      for (; JR.length && (yR = JR[JR.length - 1]).i <= GR;) JR.pop(), RR.push(yR.vs), GR++;
      return GR
    }

    function RG(RR, JR, GR, yR, tR) {
      var uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR;
      let LR = null,
        nR = tR;
      "boolean" == typeof yR ? (nR = yR, LR = null) : void 0 !== yR && (LR = yR);
      let UR = RR.children(JR),
        WR = RR.node(JR),
        AR = WR ? WR.borderLeft : void 0,
        CR = WR ? WR.borderRight : void 0,
        XR = {};
      AR && (UR = UR.filter((RR => RR !== AR && RR !== CR)));
      let MR = function(RR) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((JR => {
          let GR = RR.inEdges(JR);
          if (!GR || !GR.length) return {
            v: JR
          };
          {
            let yR = GR.reduce(((JR, GR) => {
              let yR = RR.edge(GR),
                tR = RR.node(GR.v);
              return {
                sum: JR.sum + yR.weight * tR.order,
                weight: JR.weight + yR.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: JR,
              barycenter: yR.sum / yR.weight,
              weight: yR.weight
            }
          }
        }))
      }(RR, UR);
      MR.forEach((JR => {
        if (RR.children(JR.v).length) {
          let {
            result: yR
          } = RG(RR, JR.v, GR, LR, nR);
          XR[JR.v] = yR, Object.hasOwn(yR, "barycenter") && function(RR, JR) {
            void 0 !== RR.barycenter ? (RR.barycenter = (RR.barycenter * RR.weight + JR.barycenter * JR.weight) / (RR.weight + JR.weight), RR.weight += JR.weight) : (RR.barycenter = JR.barycenter, RR.weight = JR.weight)
          }(JR, yR)
        }
      }));
      let BR = TJ(MR, GR);
      ! function(RR, JR) {
        RR.forEach((RR => {
          RR.vs = RR.vs.flatMap((RR => JR[RR] ? JR[RR].vs : RR))
        }))
      }(BR, XR);
      let lR = {},
        pR = !1;
      for (let bR = 0; bR < BR.length; bR++)
        for (let JR = bR + 1; JR < BR.length; JR++)
          if (BR[bR] && BR[JR] && null != (uR = BR[bR]) && uR.barycenter && null != (ZR = BR[JR]) && ZR.barycenter && (null == (qR = BR[bR]) ? void 0 : qR.barycenter) === BR[JR].barycenter) {
            let GR = null != (fR = null == (iR = BR[bR]) ? void 0 : iR.vs[0]) ? fR : "",
              yR = null != (KR = null == (VR = BR[JR]) ? void 0 : VR.vs[0]) ? KR : "",
              tR = RR.node(GR),
              uR = RR.node(yR);
            if ("edge" === tR.dummy && "edge" === uR.dummy && (null == (wR = tR.edgeObj) ? void 0 : wR.v) === (null == (rR = uR.edgeObj) ? void 0 : rR.v) && (null == (eR = tR.edgeObj) ? void 0 : eR.w) === (null == (aR = uR.edgeObj) ? void 0 : aR.w)) {
              if (tR.edgeLabel.reversed) {
                lR[yR] = BR[bR], BR.splice(bR, 1), bR--;
                break
              }
              lR[GR] = BR[JR], BR.splice(JR, 1), JR--
            } else pR = !0
          } let gR = sJ(BR, lR, LR, RR, nR);
      if (AR && CR) {
        gR.vs = [AR, gR.vs, CR].flat(1);
        let JR = RR.predecessors(AR);
        if (JR && JR.length) {
          let GR = RR.node(JR[0]),
            yR = RR.predecessors(CR),
            tR = RR.node(yR[0]);
          Object.hasOwn(gR, "barycenter") || (gR.barycenter = 0, gR.weight = 0), gR.barycenter = (gR.barycenter * gR.weight + GR.order + tR.order) / (gR.weight + 2), gR.weight += 2
        }
      }
      return Object.defineProperty(gR, "result", {
        value: gR,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(gR, "usedBias", {
        value: pR,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), gR
    }

    function JG(RR, JR, GR, yR) {
      yR || (yR = RR.nodes());
      let tR = function(RR) {
          let JR;
          for (; RR.hasNode(JR = hR("_root")););
          return JR
        }(RR),
        uR = new mR({
          compound: !0
        }).setGraph({
          root: tR
        }).setDefaultNodeLabel((JR => RR.node(JR)));
      return yR.forEach((yR => {
        let ZR = RR.node(yR),
          qR = RR.parent(yR);
        if (ZR.rank === JR || ZR.minRank <= JR && JR <= ZR.maxRank) {
          uR.setNode(yR), uR.setParent(yR, qR || tR);
          let iR = RR[GR](yR);
          iR && iR.forEach((JR => {
            let GR = JR.v === yR ? JR.w : JR.v,
              tR = uR.edge(GR, yR),
              ZR = void 0 !== tR ? tR.weight : 0;
            uR.setEdge(GR, yR, {
              weight: RR.edge(JR).weight + ZR
            })
          })), Object.hasOwn(ZR, "minRank") && uR.setNode(yR, {
            borderLeft: ZR.borderLeft[JR],
            borderRight: ZR.borderRight[JR]
          })
        }
      })), uR
    }

    function GG(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof JR.customOrder) return void JR.customOrder(RR, GG);
      let yR = QR(RR),
        tR = yG(RR, RJ(1, yR + 1), "inEdges"),
        uR = yG(RR, RJ(yR - 1, -1, -1), "outEdges"),
        ZR = kJ(RR, GR);
      if (uG(RR, ZR), JR.disableOptimalOrderHeuristic) return;
      let qR, iR = Number.POSITIVE_INFINITY,
        fR = JR.constraints || [];
      for (let VR = 0, KR = 0; KR < 4; ++VR, ++KR) {
        tG(VR % 2 ? tR : uR, VR % 4 >= 2, fR, GR), ZR = dR(RR);
        let JR = QJ(RR, ZR);
        JR < iR ? (KR = 0, qR = Object.assign({}, ZR), iR = JR) : JR === iR && (qR = structuredClone(ZR))
      }
      uG(RR, qR)
    }

    function yG(RR, JR, GR) {
      let yR = new Map,
        tR = (RR, JR) => {
          yR.has(RR) || yR.set(RR, []), yR.get(RR).push(JR)
        };
      for (let uR of RR.nodes()) {
        let JR = RR.node(uR);
        if ("number" == typeof JR.rank && tR(JR.rank, uR), "number" == typeof JR.minRank && "number" == typeof JR.maxRank)
          for (let RR = JR.minRank; RR <= JR.maxRank; RR++) RR !== JR.rank && tR(RR, uR)
      }
      return JR.map((function(JR) {
        return JG(RR, JR, GR, yR.get(JR) || [])
      }))
    }

    function tG(RR, JR, GR, yR) {
      let tR = !0,
        uR = new mR;
      RR.forEach((function(RR) {
        GR.forEach((RR => uR.setEdge(RR.left, RR.right)));
        let ZR = RR.graph().root,
          {
            result: qR,
            usedBias: iR
          } = RG(RR, ZR, uR, yR, tR);
        JR && iR && (tR = !tR), qR.vs.forEach(((JR, GR) => RR.node(JR).order = GR)),
          function(RR, JR, GR) {
            let yR, tR = {};
            GR.forEach((GR => {
              let uR, ZR, qR = RR.parent(GR);
              for (; qR;) {
                if (uR = RR.parent(qR), uR ? (ZR = tR[uR], tR[uR] = qR) : (ZR = yR, yR = qR), ZR && ZR !== qR) return void JR.setEdge(ZR, qR);
                qR = uR
              }
            }))
          }(RR, uR, qR.vs)
      }))
    }

    function uG(RR, JR) {
      Object.values(JR).forEach((JR => JR.forEach(((JR, GR) => RR.node(JR).order = GR))))
    }

    function ZG(RR, JR, GR) {
      if (JR > GR) {
        let RR = JR;
        JR = GR, GR = RR
      }
      let yR = RR[JR];
      yR || (RR[JR] = yR = {}), yR[GR] = !0
    }

    function qG(RR, JR, GR) {
      if (JR > GR) {
        let RR = JR;
        JR = GR, GR = RR
      }
      let yR = RR[JR];
      return void 0 !== yR && Object.hasOwn(yR, GR)
    }

    function iG(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        uR = {},
        ZR = function(RR, JR, GR, yR) {
          let tR = new mR,
            uR = RR.graph(),
            ZR = function(RR, JR, GR) {
              return (yR, tR, uR) => {
                let ZR, qR = yR.node(tR),
                  iR = yR.node(uR),
                  fR = 0;
                if (fR += qR.width / 2, Object.hasOwn(qR, "labelpos")) switch (qR.labelpos.toLowerCase()) {
                  case "l":
                    ZR = -qR.width / 2;
                    break;
                  case "r":
                    ZR = qR.width / 2
                }
                if (ZR && (fR += GR ? ZR : -ZR), ZR = void 0, fR += (qR.dummy ? JR : RR) / 2, fR += (iR.dummy ? JR : RR) / 2, fR += iR.width / 2, Object.hasOwn(iR, "labelpos")) switch (iR.labelpos.toLowerCase()) {
                  case "l":
                    ZR = iR.width / 2;
                    break;
                  case "r":
                    ZR = -iR.width / 2
                }
                return ZR && (fR += GR ? ZR : -ZR), fR
              }
            }(uR.nodesep, uR.edgesep, yR);
          return JR.forEach((JR => {
            let yR;
            JR.forEach((JR => {
              let uR = GR[JR];
              if (void 0 !== uR) {
                if (tR.setNode(uR), void 0 !== yR) {
                  let qR = GR[yR];
                  if (void 0 !== qR) {
                    let GR = tR.edge(qR, uR);
                    tR.setEdge(qR, uR, Math.max(ZR(RR, JR, yR), GR || 0))
                  }
                }
                yR = JR
              }
            }))
          })), tR
        }(RR, JR, GR, tR),
        qR = tR ? "borderLeft" : "borderRight";

      function iR(RR, JR) {
        let GR = ZR.nodes().slice(),
          yR = {},
          tR = GR.pop();
        for (; tR;) {
          if (yR[tR]) RR(tR);
          else {
            yR[tR] = !0, GR.push(tR);
            for (let RR of JR(tR)) GR.push(RR)
          }
          tR = GR.pop()
        }
      }
      return iR((function(RR) {
        let JR = ZR.inEdges(RR);
        uR[RR] = JR ? JR.reduce(((RR, JR) => {
          var GR;
          let yR = null != (GR = uR[JR.v]) ? GR : 0,
            tR = ZR.edge(JR);
          return Math.max(RR, yR + (void 0 !== tR ? tR : 0))
        }), 0) : 0
      }), (function(RR) {
        return ZR.predecessors(RR) || []
      })), iR((function(JR) {
        let GR = ZR.outEdges(JR),
          yR = Number.POSITIVE_INFINITY;
        GR && (yR = GR.reduce(((RR, JR) => {
          let GR = uR[JR.w],
            yR = ZR.edge(JR);
          return Math.min(RR, (void 0 !== GR ? GR : 0) - (void 0 !== yR ? yR : 0))
        }), Number.POSITIVE_INFINITY));
        let tR = RR.node(JR);
        yR !== Number.POSITIVE_INFINITY && tR.borderType !== qR && (uR[JR] = Math.max(void 0 !== uR[JR] ? uR[JR] : 0, yR))
      }), (function(RR) {
        return ZR.successors(RR) || []
      })), Object.keys(yR).forEach((RR => {
        var JR;
        let yR = GR[RR];
        void 0 !== yR && (uR[RR] = null != (JR = uR[yR]) ? JR : 0)
      })), uR
    }

    function fG(RR, JR) {
      let GR, yR = dR(RR),
        tR = Object.assign(function(RR, JR) {
          let GR = {};
          return JR.length && JR.reduce((function(JR, yR) {
            let tR = 0,
              uR = 0,
              ZR = JR.length,
              qR = yR[yR.length - 1];
            return yR.forEach(((JR, iR) => {
              let fR = function(RR, JR) {
                  if (RR.node(JR).dummy) {
                    let GR = RR.predecessors(JR);
                    if (GR) return GR.find((JR => RR.node(JR).dummy))
                  }
                }(RR, JR),
                VR = fR ? RR.node(fR).order : ZR;
              (fR || JR === qR) && (yR.slice(uR, iR + 1).forEach((JR => {
                let yR = RR.predecessors(JR);
                yR && yR.forEach((yR => {
                  let uR = RR.node(yR),
                    ZR = uR.order;
                  (ZR < tR || VR < ZR) && (!uR.dummy || !RR.node(JR).dummy) && ZG(GR, yR, JR)
                }))
              })), uR = iR + 1, tR = VR)
            })), yR
          })), GR
        }(RR, yR), function(RR, JR) {
          let GR = {};

          function yR(JR, yR, tR, uR, ZR) {
            RJ(yR, tR).forEach((yR => {
              let tR = JR[yR];
              if (void 0 !== tR && RR.node(tR).dummy) {
                let JR = RR.predecessors(tR);
                JR && JR.forEach((JR => {
                  if (void 0 === JR) return;
                  let yR = RR.node(JR);
                  yR.dummy && (yR.order < uR || yR.order > ZR) && ZG(GR, JR, tR)
                }))
              }
            }))
          }
          return JR.length && JR.reduce((function(JR, GR) {
            let tR = -1,
              uR = -1,
              ZR = 0;
            return GR.forEach(((qR, iR) => {
              if ("border" === RR.node(qR).dummy) {
                let JR = RR.predecessors(qR);
                if (JR && JR.length) {
                  let qR = JR[0];
                  if (void 0 === qR) return;
                  uR = RR.node(qR).order, yR(GR, ZR, iR, tR, uR), ZR = iR, tR = uR
                }
              }
              yR(GR, ZR, GR.length, uR, JR.length)
            })), GR
          })), GR
        }(RR, yR)),
        uR = {};
      ["u", "d"].forEach((ZR => {
        GR = "u" === ZR ? yR : Object.values(yR).reverse(), ["l", "r"].forEach((yR => {
          "r" === yR && (GR = GR.map((RR => Object.values(RR).reverse())));
          let qR = function(RR, JR, GR, yR, tR) {
              let uR = {},
                ZR = {},
                qR = {};
              return JR.forEach((RR => {
                RR.forEach(((RR, JR) => {
                  uR[RR] = RR, ZR[RR] = RR, qR[RR] = JR
                }))
              })), JR.forEach((JR => {
                let iR = -1,
                  fR = -1,
                  VR = !1,
                  KR = JR,
                  wR = JR.findIndex((JR => (null == tR ? void 0 : tR.includes(JR)) || VG(JR, RR, tR)));
                wR > 0 && (KR = [JR[wR], ...JR.slice(0, wR), ...JR.slice(wR + 1)], VR = !0), KR.forEach((JR => {
                  var KR;
                  let wR = yR(JR);
                  if (wR && wR.length) {
                    null != tR && tR.includes(JR) && (wR = wR.filter((JR => VG(JR, RR, tR))));
                    let yR = wR.sort(((RR, JR) => {
                        let GR = qR[RR],
                          yR = qR[JR];
                        return (void 0 !== GR ? GR : 0) - (void 0 !== yR ? yR : 0)
                      })),
                      rR = (yR.length - 1) / 2;
                    for (let RR = Math.floor(rR), tR = Math.ceil(rR); RR <= tR; ++RR) {
                      let tR = yR[RR];
                      if (void 0 === tR) continue;
                      let wR = qR[tR];
                      if (void 0 !== wR && ZR[JR] === JR && iR < wR && qR[tR] !== fR && !qG(GR, JR, tR)) {
                        let RR = uR[tR];
                        void 0 !== RR && (ZR[tR] = JR, ZR[JR] = uR[JR] = RR, iR = wR, VR && (iR = -1, fR = null != (KR = qR[tR]) ? KR : -1, VR = !1))
                      }
                    }
                  }
                }))
              })), {
                root: uR,
                align: ZR
              }
            }(RR, GR, tR, (JR => ("u" === ZR ? RR.predecessors(JR) : RR.successors(JR)) || []), JR),
            iR = iG(RR, GR, qR.root, qR.align, "r" === yR);
          "r" === yR && (iR = GJ(iR, (RR => -RR))), uR[ZR + yR] = iR
        }))
      }));
      let ZR = function(RR, JR) {
        return Object.values(JR).reduce(((JR, GR) => {
          let yR = Number.NEGATIVE_INFINITY,
            tR = Number.POSITIVE_INFINITY;
          Object.entries(GR).forEach((JR => {
            let [GR, uR] = JR, ZR = function(RR, JR) {
              return RR.node(JR).width
            }(RR, GR) / 2;
            yR = Math.max(uR + ZR, yR), tR = Math.min(uR - ZR, tR)
          }));
          let uR = yR - tR;
          return uR < JR[0] && (JR = [uR, GR]), JR
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(RR, uR);
      return function(RR, JR) {
          let GR = Object.values(JR),
            yR = kR(Math.min, GR),
            tR = kR(Math.max, GR);
          ["u", "d"].forEach((GR => {
            ["l", "r"].forEach((uR => {
              let ZR = GR + uR,
                qR = RR[ZR];
              if (!qR || qR === JR) return;
              let iR = Object.values(qR),
                fR = yR - kR(Math.min, iR);
              "l" !== uR && (fR = tR - kR(Math.max, iR)), fR && (RR[ZR] = GJ(qR, (RR => RR + fR)))
            }))
          }))
        }(uR, ZR),
        function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            GR = RR.ul;
          return GR ? GJ(GR, ((GR, yR) => {
            var tR, uR;
            if (JR) {
              let GR = JR.toLowerCase(),
                tR = RR[GR];
              if (tR && void 0 !== tR[yR]) return tR[yR]
            }
            let ZR = Object.values(RR).map((RR => {
              let JR = RR[yR];
              return void 0 !== JR ? JR : 0
            })).sort(((RR, JR) => RR - JR));
            return ((null != (tR = ZR[1]) ? tR : 0) + (null != (uR = ZR[2]) ? uR : 0)) / 2
          })) : {}
        }(uR, RR.graph().align)
    }

    function VG(RR, JR, GR) {
      var yR;
      if (!GR) return !1;
      let tR = null == (yR = JR.node(RR)) ? void 0 : yR.edgeObj;
      if (!tR || JR.node(RR).edgeLabel.reversed) return !1;
      let uR = GR.indexOf(null == tR ? void 0 : tR.v),
        ZR = GR.indexOf(null == tR ? void 0 : tR.w);
      return -1 !== uR && -1 !== ZR && uR === (ZR + 1) % GR.length || uR === (ZR - 1) % GR.length
    }

    function KG(RR, JR) {
      (function(RR) {
        let JR = dR(RR),
          GR = RR.graph(),
          yR = GR.ranksep,
          tR = GR.rankalign,
          uR = 0;
        JR.forEach((JR => {
          let GR = JR.reduce(((JR, GR) => {
            var yR;
            let tR = null != (yR = RR.node(GR).height) ? yR : 0;
            return JR > tR ? JR : tR
          }), 0);
          JR.forEach((JR => {
            let yR = RR.node(JR);
            yR.y = "top" === tR ? uR + yR.height / 2 : "bottom" === tR ? uR + GR - yR.height / 2 : uR + GR / 2
          })), uR += GR + yR
        }))
      })(RR = SR(RR)), Object.entries(fG(RR, JR)).forEach((JR => {
        let [GR, yR] = JR;
        return RR.node(GR).x = yR
      }))
    }
    var wG = new WeakMap;

    function rG(RR) {
      return aG(RR, TR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), RR
    }

    function eG(RR, JR, GR) {
      let yR = JR;
      for (; void 0 !== yR;) {
        let JR = RR.parent(yR);
        if (JR === GR) return yR;
        yR = JR
      }
    }

    function aG(RR, JR, GR) {
      var yR;
      let tR = RR.nodes().filter((JR => RR.children(JR).length)),
        uR = {};
      tR.forEach((yR => {
        let tR = RR.node(yR);
        if (tR && tR.rankdir) {
          let ZR = new mR({
            multigraph: !0,
            compound: !0
          });
          ZR.setGraph({
            rankdir: tR.rankdir
          });
          let qR = RR.children(yR);
          qR.forEach((JR => {
            let GR = {
              ...RR.node(JR)
            };
            ZR.setNode(JR, GR);
            let tR = RR.parent(JR);
            tR && tR !== yR && qR.includes(tR) && ZR.setParent(JR, tR)
          }));
          let iR = new Set;
          RR.edges().forEach((JR => {
            let GR = eG(RR, JR.v, yR),
              tR = eG(RR, JR.w, yR);
            if (GR && tR && GR !== tR) {
              let yR = `${GR}\0${tR}`;
              iR.has(yR) || (iR.add(yR), ZR.setEdge(GR, tR, {
                ...RR.edge(JR)
              }))
            }
          })), aG(ZR, JR, GR);
          let fR = pG(ZR);
          LG(fR, JR, GR, null), nG(ZR, fR);
          let VR = 1 / 0,
            KR = 1 / 0,
            wR = -1 / 0,
            rR = -1 / 0;
          ZR.nodes().forEach((RR => {
            if (RR === yR) return;
            let JR = ZR.node(RR);
            JR && "number" == typeof JR.x && "number" == typeof JR.y && "number" == typeof JR.width && "number" == typeof JR.height && (VR = Math.min(VR, JR.x - JR.width / 2), wR = Math.max(wR, JR.x + JR.width / 2), KR = Math.min(KR, JR.y - JR.height / 2), rR = Math.max(rR, JR.y + JR.height / 2))
          })), (!isFinite(VR) || !isFinite(KR) || !isFinite(wR) || !isFinite(rR)) && (VR = KR = 0, wR = rR = 0);
          let eR = wR - VR,
            aR = rR - KR;
          uR[yR] = {
            minX: VR,
            wy: KR,
            maxX: wR,
            ey: rR,
            width: eR,
            height: aR,
            offsetX: VR,
            offsetY: KR
          }, tR._dagreClusterSubgraph = ZR
        }
      }));
      let ZR = [],
        qR = new Map;
      tR.forEach((JR => {
        let GR = RR.node(JR);
        GR && GR.rankdir && uR[JR] && qR.set(JR, (RR.children(JR) || []).filter((RR => RR !== JR)))
      }));
      let iR = new Set([...qR.values()].flat()),
        fR = new Map;
      qR.forEach(((JR, GR) => {
        iR.has(GR) || fR.set(GR, (JR => {
          let GR = [],
            yR = (RR.children(JR) || []).filter((RR => RR !== JR));
          for (; yR.length > 0;) {
            let JR = yR.shift();
            GR.push(JR), (RR.children(JR) || []).filter((RR => RR !== JR)).forEach((RR => yR.push(RR)))
          }
          return GR
        })(GR))
      }));
      let VR = new Set([...fR.values()].flat()),
        KR = RR => {
          for (let [JR, GR] of fR)
            if (GR.includes(RR)) return JR;
          return RR
        },
        wR = [];
      RR.edges().forEach((JR => {
        (VR.has(JR.v) || VR.has(JR.w)) && wR.push({
          edge: JR,
          label: RR.edge(JR)
        })
      }));
      let rR = new Map;
      VR.forEach((JR => {
        let GR = RR.parent(JR);
        rR.set(JR, "string" == typeof GR ? GR : void 0)
      })), fR.forEach(((JR, GR) => {
        let yR = RR.node(GR),
          tR = [];
        JR.forEach((JR => {
          let GR = RR.node(JR);
          GR && (tR.push({
            id: JR,
            node: GR,
            parent: rR.get(JR)
          }), RR.removeNode(JR))
        }));
        let qR = wR.filter((RR => {
            let {
              edge: GR
            } = RR;
            return JR.includes(GR.v) || JR.includes(GR.w)
          })),
          iR = uR[GR];
        yR && (ZR.push({
          clusterId: GR,
          subgraph: yR._dagreClusterSubgraph,
          bounds: iR,
          children: JR,
          removedNodes: tR,
          removedEdges: qR
        }), yR.width = iR.width, yR.height = iR.height)
      }));
      let eR = new Set;
      wR.forEach((JR => {
        let {
          edge: GR,
          label: yR
        } = JR, tR = KR(GR.v), uR = KR(GR.w);
        if (tR !== uR && RR.hasNode(tR) && RR.hasNode(uR)) {
          let JR = `${tR}\0${uR}`;
          eR.has(JR) || (eR.add(JR), RR.setEdge(tR, uR, {
            ...yR,
            width: 0,
            height: 0
          }))
        }
      }));
      let aR = pG(RR),
        LR = LG(aR, JR, GR, null != (yR = wG.get(RR)) ? yR : null);
      wG.set(RR, LR), nG(RR, aR), eR.forEach((JR => {
        let GR = JR.indexOf("\0"),
          yR = JR.slice(0, GR),
          tR = JR.slice(GR + 1);
        RR.hasEdge(yR, tR) && RR.removeEdge(yR, tR)
      })), ZR.forEach((JR => {
        let {
          clusterId: GR,
          subgraph: yR,
          bounds: tR,
          removedNodes: uR,
          removedEdges: ZR
        } = JR;
        var qR, iR;
        let fR = RR.node(GR),
          VR = null != (qR = null == fR ? void 0 : fR.x) ? qR : 0,
          KR = null != (iR = null == fR ? void 0 : fR.y) ? iR : 0,
          wR = (tR.minX + tR.maxX) / 2,
          rR = (tR.wy + tR.ey) / 2;
        uR.forEach((JR => {
          let {
            id: GR,
            node: yR,
            parent: tR
          } = JR;
          RR.setNode(GR, yR), void 0 !== tR && RR.setParent(GR, tR)
        })), ZR.forEach((JR => {
          let {
            edge: GR,
            label: yR
          } = JR;
          RR.setEdge(GR, yR)
        })), yR.nodes().forEach((JR => {
          if (JR === GR) return;
          let tR = yR.node(JR),
            uR = RR.node(JR);
          uR && tR && "number" == typeof tR.x && "number" == typeof tR.y && (uR.x = VR + (tR.x - wR), uR.y = KR + (tR.y - rR))
        })), delete fR._dagreClusterSubgraph
      })), tR.forEach((JR => {
        var GR, yR;
        let tR = RR.node(JR),
          ZR = uR[JR];
        if (tR && tR.rankdir && tR._dagreClusterSubgraph && ZR) {
          let uR = tR._dagreClusterSubgraph,
            qR = null != (GR = tR.x) ? GR : 0,
            iR = null != (yR = tR.y) ? yR : 0,
            fR = (ZR.minX + ZR.maxX) / 2,
            VR = (ZR.wy + ZR.ey) / 2;
          uR.nodes().forEach((GR => {
            if (GR === JR) return;
            let yR = uR.node(GR),
              tR = RR.node(GR);
            if (tR && yR && "number" == typeof yR.x && "number" == typeof yR.y) {
              let RR = yR.x - fR,
                JR = yR.y - VR;
              tR.x = qR + RR, tR.y = iR + JR
            }
          })), delete tR._dagreClusterSubgraph
        }
      }))
    }

    function LG(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var tR, uR;
      let ZR = !1 !== (null == GR ? void 0 : GR.useDynamic),
        qR = ZR && null != (tR = null == yR ? void 0 : yR.graph) ? tR : null,
        iR = ZR && null != (uR = null == yR ? void 0 : yR.rawNodes) ? uR : null;
      JR("    makeSpaceForEdgeLabels", (() => function(RR) {
        let JR = RR.graph();
        JR.ranksep /= 2, RR.edges().forEach((GR => {
          var yR;
          let tR = RR.edge(GR);
          tR.minlen *= 2, "c" !== (null != (yR = tR.labelpos) ? yR : "r").toLowerCase() && ("TB" === JR.rankdir || "BT" === JR.rankdir ? tR.width += tR.labeloffset : tR.height += tR.labeloffset)
        }))
      }(RR))), JR("    removeSelfEdges", (() => function(RR) {
        RR.edges().forEach((JR => {
          if (JR.v === JR.w) {
            let GR = RR.node(JR.v);
            GR.selfEdges || (GR.selfEdges = []), GR.selfEdges.push({
              e: JR,
              label: RR.edge(JR)
            }), RR.removeEdge(JR)
          }
        }))
      }(RR))), JR("    acyclic", (() => rJ(RR, qR))), JR("    nestingGraph.run", (() => PJ(RR))), JR("    rank", (() => DJ(SR(RR)))), JR("    injectEdgeLabelProxies", (() => function(RR) {
        RR.edges().forEach((JR => {
          let GR = RR.edge(JR);
          if (GR.width && GR.height) {
            let GR = RR.node(JR.v),
              yR = {
                rank: (RR.node(JR.w).rank - GR.rank) / 2 + GR.rank,
                e: JR
              };
            zR(RR, "edge-proxy", yR, "_ep")
          }
        }))
      }(RR))), JR("    removeEmptyRanks", (() => function(RR) {
        let JR = RR.nodes().map((JR => RR.node(JR).rank)).filter((RR => void 0 !== RR)),
          GR = kR(Math.min, JR),
          yR = [];
        RR.nodes().forEach((JR => {
          let tR = RR.node(JR).rank - GR;
          yR[tR] || (yR[tR] = []), yR[tR].push(JR)
        }));
        let tR = 0,
          uR = RR.graph().nodeRankFactor;
        Array.from(yR).forEach(((JR, GR) => {
          void 0 === JR && GR % uR !== 0 ? --tR : void 0 !== JR && tR && JR.forEach((JR => RR.node(JR).rank += tR))
        }))
      }(RR))), JR("    nestingGraph.cleanup", (() => function(RR) {
        let JR = RR.graph();
        RR.removeNode(JR.nestingRoot), delete JR.nestingRoot, RR.edges().forEach((JR => {
          RR.edge(JR).nestingEdge && RR.removeEdge(JR)
        }))
      }(RR))), JR("    normalizeRanks", (() => function(RR) {
        let JR = RR.nodes().map((JR => {
            let GR = RR.node(JR).rank;
            return void 0 === GR ? Number.MAX_VALUE : GR
          })),
          GR = kR(Math.min, JR);
        RR.nodes().forEach((JR => {
          let yR = RR.node(JR);
          Object.hasOwn(yR, "rank") && (yR.rank -= GR)
        }))
      }(RR))), JR("    assignRankMinMax", (() => function(RR) {
        let JR = 0;
        RR.nodes().forEach((GR => {
          let yR = RR.node(GR);
          yR.borderTop && (yR.minRank = RR.node(yR.borderTop).rank, yR.maxRank = RR.node(yR.borderBottom).rank, JR = Math.max(JR, yR.maxRank))
        })), RR.graph().maxRank = JR
      }(RR))), JR("    removeEdgeLabelProxies", (() => function(RR) {
        RR.nodes().forEach((JR => {
          let GR = RR.node(JR);
          if ("edge-proxy" === GR.dummy) {
            let yR = GR;
            RR.edge(yR.e).labelRank = GR.rank, RR.removeNode(JR)
          }
        }))
      }(RR))), JR("    normalize.run", (() => eJ(RR))), JR("    parentDummyChains", (() => cJ(RR))), JR("    addBorderSegments", (() => mJ(RR))), JR("    order", (() => GG(RR, GR, iR))), JR("    insertSelfEdges", (() => function(RR) {
        dR(RR).forEach((JR => {
          let GR = 0;
          JR.forEach(((JR, yR) => {
            let tR = RR.node(JR);
            "number" != typeof tR.rank && (tR.rank = 0), tR.order = yR + GR, (tR.selfEdges || []).forEach((JR => {
              zR(RR, "selfedge", {
                width: JR.label.width,
                height: JR.label.height,
                rank: tR.rank,
                order: yR + ++GR,
                e: JR.e,
                edgeLabel: JR.label
              }, "_se"), (!Array.isArray(JR.label.points) || 7 !== JR.label.points.length) && (JR.label.points = [{
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
            })), delete tR.selfEdges
          }))
        }))
      }(RR))), JR("    adjustCoordinateSystem", (() => function(RR) {
        var JR;
        let GR = null == (JR = RR.graph().rankdir) ? void 0 : JR.toLowerCase();
        ("lr" === GR || "rl" === GR) && jJ(RR)
      }(RR))), JR("    position", (() => KG(RR, GR.corePath))), JR("    positionSelfEdges", (() => function(RR) {
        RR.nodes().forEach((JR => {
          let GR = RR.node(JR),
            yR = RR => "number" == typeof RR && isFinite(RR);
          if ("selfedge" === GR.dummy) {
            let tR = GR,
              uR = RR.node(tR.e.v),
              ZR = yR(null == uR ? void 0 : uR.x) ? uR.x : 0,
              qR = yR(null == uR ? void 0 : uR.y) ? uR.y : 0,
              iR = yR(null == uR ? void 0 : uR.width) ? uR.width : 0,
              fR = yR(null == uR ? void 0 : uR.height) ? uR.height : 0,
              VR = yR(GR.x) ? GR.x : ZR,
              KR = yR(GR.y) ? GR.y : qR,
              wR = iR / 2,
              rR = fR / 2;
            tR.edgeLabel.points = [{
              x: VR + wR,
              y: KR - rR
            }, {
              x: VR + wR,
              y: KR - rR
            }, {
              x: VR,
              y: KR
            }, {
              x: VR - wR,
              y: KR + rR
            }, {
              x: VR - wR,
              y: KR + rR
            }, {
              x: VR,
              y: KR
            }, {
              x: VR,
              y: KR
            }], tR.edgeLabel.x = VR, tR.edgeLabel.y = KR, RR.setEdge(tR.e, tR.edgeLabel), RR.removeNode(JR)
          } else GR && Array.isArray(GR.selfEdges) && GR.selfEdges.forEach((RR => {
            if (!Array.isArray(RR.label.points) || 7 !== RR.label.points.length) {
              let JR = yR(GR.x) ? GR.x : 0,
                tR = yR(GR.y) ? GR.y : 0,
                uR = (yR(GR.width) ? GR.width : 0) / 2,
                ZR = (yR(GR.height) ? GR.height : 0) / 2;
              RR.label.points = [{
                x: JR + uR,
                y: tR - ZR
              }, {
                x: JR + uR,
                y: tR - ZR
              }, {
                x: JR,
                y: tR
              }, {
                x: JR - uR,
                y: tR + ZR
              }, {
                x: JR - uR,
                y: tR + ZR
              }, {
                x: JR,
                y: tR
              }, {
                x: JR,
                y: tR
              }]
            }
          }))
        }))
      }(RR)));
      let fR = JSON.parse(JSON.stringify(RR._nodes));
      return JR("    removeBorderNodes", (() => function(RR) {
        RR.nodes().forEach((JR => {
          if (RR.children(JR).length) {
            let GR = RR.node(JR),
              yR = RR.node(GR.borderTop),
              tR = RR.node(GR.borderBottom),
              uR = RR.node(GR.borderLeft[GR.borderLeft.length - 1]),
              ZR = RR.node(GR.borderRight[GR.borderRight.length - 1]);
            GR.width = Math.abs(ZR.x - uR.x), GR.height = Math.abs(tR.y - yR.y), GR.x = uR.x + GR.width / 2, GR.y = yR.y + GR.height / 2
          }
        })), RR.nodes().forEach((JR => {
          "border" === RR.node(JR).dummy && RR.removeNode(JR)
        }))
      }(RR))), JR("    normalize.undo", (() => function(RR) {
        RR.graph().dummyChains.forEach((JR => {
          let GR, yR = RR.node(JR),
            tR = yR.edgeLabel;
          for (RR.setEdge(yR.edgeObj, tR); yR.dummy;) GR = RR.successors(JR)[0], RR.removeNode(JR), tR.points.push({
            x: yR.x,
            y: yR.y
          }), "edge-label" === yR.dummy && (tR.x = yR.x, tR.y = yR.y, tR.width = yR.width, tR.height = yR.height), JR = GR, yR = RR.node(JR)
        }))
      }(RR))), JR("    fixupEdgeLabelCoords", (() => function(RR) {
        RR.edges().forEach((JR => {
          let GR = RR.edge(JR);
          if (Object.hasOwn(GR, "x")) switch (("l" === GR.labelpos || "r" === GR.labelpos) && (GR.width -= GR.labeloffset), GR.labelpos) {
            case "l":
              GR.x -= GR.width / 2 + GR.labeloffset;
              break;
            case "r":
              GR.x += GR.width / 2 + GR.labeloffset
          }
        }))
      }(RR))), JR("    undoCoordinateSystem", (() => SJ(RR))), JR("    translateGraph", (() => function(RR) {
        let JR = Number.POSITIVE_INFINITY,
          GR = 0,
          yR = Number.POSITIVE_INFINITY,
          tR = 0,
          uR = RR.graph(),
          ZR = uR.marginx || 0,
          qR = uR.marginy || 0;

        function iR(RR) {
          let uR = RR.x,
            ZR = RR.y,
            qR = RR.width,
            iR = RR.height;
          JR = Math.min(JR, uR - qR / 2), GR = Math.max(GR, uR + qR / 2), yR = Math.min(yR, ZR - iR / 2), tR = Math.max(tR, ZR + iR / 2)
        }
        RR.nodes().forEach((JR => iR(RR.node(JR)))), RR.edges().forEach((JR => {
          let GR = RR.edge(JR);
          Object.hasOwn(GR, "x") && iR(GR)
        })), JR -= ZR, yR -= qR, RR.nodes().forEach((GR => {
          let tR = RR.node(GR);
          tR.x -= JR, tR.y -= yR
        })), RR.edges().forEach((GR => {
          let tR = RR.edge(GR);
          tR.points.forEach((RR => {
            RR.x -= JR, RR.y -= yR
          })), Object.hasOwn(tR, "x") && (tR.x -= JR), Object.hasOwn(tR, "y") && (tR.y -= yR)
        })), uR.width = GR - JR + ZR, uR.height = tR - yR + qR
      }(RR))), JR("    assignNodeIntersects", (() => function(RR) {
        RR.edges().forEach((JR => {
          if (JR.v === JR.w) return;
          let GR, yR, tR = RR.edge(JR),
            uR = RR.node(JR.v),
            ZR = RR.node(JR.w);
          tR.points ? (GR = tR.points[0], yR = tR.points[tR.points.length - 1]) : (tR.points = [], GR = ZR, yR = uR), tR.points.unshift(jR(uR, GR)), tR.points.push(jR(ZR, yR))
        }))
      }(RR))), JR("    reversePoints", (() => function(RR) {
        RR.edges().forEach((JR => {
          let GR = RR.edge(JR);
          GR.reversed && GR.points.reverse()
        }))
      }(RR))), JR("    acyclic.undo", (() => function(RR) {
        RR.edges().forEach((JR => {
          let GR = RR.edge(JR);
          if (GR.reversed) {
            RR.removeEdge(JR);
            let yR = GR.forwardName;
            delete GR.reversed, delete GR.forwardName, RR.setEdge(JR.w, JR.v, GR, yR)
          }
        }))
      }(RR))), {
        graph: RR,
        rawNodes: fR
      }
    }

    function nG(RR, JR) {
      RR.nodes().forEach((GR => {
        let yR = RR.node(GR),
          tR = JR.node(GR);
        yR && (yR.x = tR.x, yR.y = tR.y, yR.order = tR.order, yR.rank = tR.rank, JR.children(GR).length && (yR.width = tR.width, yR.height = tR.height))
      })), RR.edges().forEach((GR => {
        let yR = RR.edge(GR),
          tR = JR.edge(GR);
        yR.points = tR.points, Object.hasOwn(tR, "x") && (yR.x = tR.x, yR.y = tR.y)
      })), RR.graph().width = JR.graph().width, RR.graph().height = JR.graph().height
    }
    var UG = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      WG = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      AG = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      CG = ["width", "height", "rank"],
      XG = {
        width: 0,
        height: 0
      },
      MG = ["minlen", "weight", "width", "height", "labeloffset"],
      BG = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      lG = ["labelpos"];

    function pG(RR) {
      let JR = new mR({
          multigraph: !0,
          compound: !0
        }),
        GR = bG(RR.graph());
      return JR.setGraph(Object.assign({}, WG, gG(GR, UG), JJ(GR, AG))), RR.nodes().forEach((GR => {
        let yR = gG(bG(RR.node(GR)), CG);
        Object.keys(XG).forEach((RR => {
          void 0 === yR[RR] && (yR[RR] = XG[RR])
        })), JR.setNode(GR, yR);
        let tR = RR.parent(GR);
        void 0 !== tR && JR.setParent(GR, tR)
      })), RR.edges().forEach((GR => {
        let yR = bG(RR.edge(GR));
        JR.setEdge(GR, Object.assign({}, BG, gG(yR, MG), JJ(yR, lG)))
      })), JR
    }

    function gG(RR, JR) {
      return GJ(JJ(RR, JR), Number)
    }

    function bG(RR) {
      let JR = {};
      return RR && Object.entries(RR).forEach((RR => {
        let [GR, yR] = RR;
        "string" == typeof GR && (GR = GR.toLowerCase()), JR[GR] = yR
      })), JR
    }

    function vG(RR) {
      let JR = dR(RR),
        GR = new mR({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return RR.nodes().forEach((JR => {
        GR.setNode(JR, {
          label: JR
        }), GR.setParent(JR, "layer" + RR.node(JR).rank)
      })), RR.edges().forEach((RR => GR.setEdge(RR.v, RR.w, {}, RR.name))), JR.forEach(((RR, JR) => {
        let yR = "layer" + JR;
        GR.setNode(yR, {
          rank: "same"
        }), RR.reduce(((RR, JR) => (GR.setEdge(RR, JR, {
          style: "invis"
        }), JR)))
      })), GR
    }
    var OG = {
        time: FR,
        notime: TR
      },
      xG = {
        graphlib: uR,
        version: uJ,
        layout: rG,
        debug: vG,
        util: {
          time: FR,
          notime: TR
        }
      }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);