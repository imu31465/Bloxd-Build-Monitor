/*! For license information please see fqwnlq.118.c8c7e54c.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6637: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Graph: () => US,
      debug: () => vg,
      default: () => Lg,
      graphlib: () => XS,
      layout: () => ag,
      util: () => Eg,
      version: () => XH
    });
    var tS = Object.defineProperty,
      bS = (SS, HS, gS) => ((SS, HS, gS) => HS in SS ? tS(SS, HS, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: gS
      }) : SS[HS] = gS)(SS, "symbol" != typeof HS ? HS + "" : HS, gS),
      XS = {};
    ((SS, HS) => {
      for (var gS in HS) tS(SS, gS, {
        get: HS[gS],
        enumerable: !0
      })
    })(XS, {
      Graph: () => US,
      alg: () => CS
    });
    var xS = Object.defineProperty,
      NS = (SS, HS) => {
        for (var gS in HS) xS(SS, gS, {
          get: HS[gS],
          enumerable: !0
        })
      },
      qS = class {
        constructor(SS) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, SS && (this._isDirected = !("directed" in SS) || SS.directed, this._isMultigraph = "multigraph" in SS && SS.multigraph, this._isCompound = "compound" in SS && SS.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(SS) {
          return this._label = SS, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(SS) {
          return this._defaultNodeLabelFn = "function" != typeof SS ? () => SS : SS, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((SS => 0 === Object.keys(this._in[SS]).length))
        }
        sinks() {
          return this.nodes().filter((SS => 0 === Object.keys(this._out[SS]).length))
        }
        setNodes(SS, HS) {
          return SS.forEach((SS => {
            void 0 !== HS ? this.setNode(SS, HS) : this.setNode(SS)
          })), this
        }
        setNode(SS, HS) {
          return SS in this._nodes ? (arguments.length > 1 && (this._nodes[SS] = HS), this) : (this._nodes[SS] = arguments.length > 1 ? HS : this._defaultNodeLabelFn(SS), this._isCompound && (this._parent[SS] = "\0", this._children[SS] = {}, this._children["\0"][SS] = !0), this._in[SS] = {}, this._preds[SS] = {}, this._out[SS] = {}, this._sucs[SS] = {}, ++this._nodeCount, this)
        }
        node(SS) {
          return this._nodes[SS]
        }
        hasNode(SS) {
          return SS in this._nodes
        }
        removeNode(SS) {
          if (SS in this._nodes) {
            let HS = SS => this.removeEdge(this._edgeObjs[SS]);
            delete this._nodes[SS], this._isCompound && (this._removeFromParentsChildList(SS), delete this._parent[SS], this.children(SS).forEach((SS => {
              this.setParent(SS)
            })), delete this._children[SS]), Object.keys(this._in[SS]).forEach(HS), delete this._in[SS], delete this._preds[SS], Object.keys(this._out[SS]).forEach(HS), delete this._out[SS], delete this._sucs[SS], --this._nodeCount
          }
          return this
        }
        setParent(SS, HS) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === HS) HS = "\0";
          else {
            for (let gS = HS += ""; void 0 !== gS; gS = this.parent(gS))
              if (gS === SS) throw new Error("Setting " + HS + " as parent of " + SS + " would create a cycle");
            this.setNode(HS)
          }
          return this.setNode(SS), this._removeFromParentsChildList(SS), this._parent[SS] = HS, this._children[HS][SS] = !0, this
        }
        parent(SS) {
          if (this._isCompound) {
            let HS = this._parent[SS];
            if ("\0" !== HS) return HS
          }
        }
        children() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let HS = this._children[SS];
            if (HS) return Object.keys(HS)
          } else {
            if ("\0" === SS) return this.nodes();
            if (this.hasNode(SS)) return []
          }
          return []
        }
        predecessors(SS) {
          let HS = this._preds[SS];
          if (HS) return Object.keys(HS)
        }
        successors(SS) {
          let HS = this._sucs[SS];
          if (HS) return Object.keys(HS)
        }
        neighbors(SS) {
          let HS = this.predecessors(SS);
          if (HS) {
            let gS = new Set(HS),
              tS = this.successors(SS);
            if (tS)
              for (let SS of tS) gS.add(SS);
            return Array.from(gS.values())
          }
        }
        isLeaf(SS) {
          var HS;
          let gS;
          return gS = this.isDirected() ? this.successors(SS) : this.neighbors(SS), 0 === (null != (HS = null == gS ? void 0 : gS.length) ? HS : 0)
        }
        filterNodes(SS) {
          let HS = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          HS.setGraph(this.graph()), Object.entries(this._nodes).forEach((gS => {
            let [tS, bS] = gS;
            SS(tS) && HS.setNode(tS, bS)
          })), Object.values(this._edgeObjs).forEach((SS => {
            HS.hasNode(SS.v) && HS.hasNode(SS.w) && HS.setEdge(SS, this.edge(SS))
          }));
          let gS = {},
            tS = SS => {
              let bS = this.parent(SS);
              return !bS || HS.hasNode(bS) ? (gS[SS] = bS, bS) : bS in gS ? gS[bS] : tS(bS)
            };
          return this._isCompound && HS.nodes().forEach((SS => HS.setParent(SS, tS(SS)))), HS
        }
        setDefaultEdgeLabel(SS) {
          return this._defaultEdgeLabelFn = "function" != typeof SS ? () => SS : SS, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(SS, HS) {
          return SS.reduce(((SS, gS) => (void 0 !== HS ? this.setEdge(SS, gS, HS) : this.setEdge(SS, gS), gS))), this
        }
        setEdge(SS, HS, gS, tS) {
          let bS, XS, xS, NS, qS = !1;
          "object" == typeof SS && null !== SS && "v" in SS ? (bS = SS.v, XS = SS.w, xS = SS.name, 2 === arguments.length && (NS = HS, qS = !0)) : (bS = SS, XS = HS, xS = tS, arguments.length > 2 && (NS = gS, qS = !0)), bS = "" + bS, XS = "" + XS, void 0 !== xS && (xS = "" + xS);
          let IS = fS(this._isDirected, bS, XS, xS);
          if (IS in this._edgeLabels) return qS && (this._edgeLabels[IS] = NS), this;
          if (void 0 !== xS && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(bS), this.setNode(XS), this._edgeLabels[IS] = qS ? NS : this._defaultEdgeLabelFn(bS, XS, xS);
          let kS = function(SS, HS, gS, tS) {
            let bS = "" + HS,
              XS = "" + gS;
            if (!SS && bS > XS) {
              let SS = bS;
              bS = XS, XS = SS
            }
            let xS = {
              v: bS,
              w: XS
            };
            return tS && (xS.name = tS), xS
          }(this._isDirected, bS, XS, xS);
          return bS = kS.v, XS = kS.w, Object.freeze(kS), this._edgeObjs[IS] = kS, uS(this._preds[XS], bS), uS(this._sucs[bS], XS), this._in[XS][IS] = kS, this._out[bS][IS] = kS, this._edgeCount++, this
        }
        edge(SS, HS, gS) {
          let tS = 1 === arguments.length ? kS(this._isDirected, SS) : fS(this._isDirected, SS, HS, gS);
          return this._edgeLabels[tS]
        }
        edgeAsObj(SS, HS, gS) {
          let tS = 1 === arguments.length ? this.edge(SS) : this.edge(SS, HS, gS);
          return "object" != typeof tS || null === tS ? {
            label: tS
          } : tS
        }
        hasEdge(SS, HS, gS) {
          return (1 === arguments.length ? kS(this._isDirected, SS) : fS(this._isDirected, SS, HS, gS)) in this._edgeLabels
        }
        removeEdge(SS, HS, gS) {
          let tS = 1 === arguments.length ? kS(this._isDirected, SS) : fS(this._isDirected, SS, HS, gS),
            bS = this._edgeObjs[tS];
          if (bS) {
            let SS = bS.v,
              HS = bS.w;
            delete this._edgeLabels[tS], delete this._edgeObjs[tS], IS(this._preds[HS], SS), IS(this._sucs[SS], HS), delete this._in[HS][tS], delete this._out[SS][tS], this._edgeCount--
          }
          return this
        }
        inEdges(SS, HS) {
          return this.isDirected() ? this.filterEdges(this._in[SS], SS, HS) : this.nodeEdges(SS, HS)
        }
        outEdges(SS, HS) {
          return this.isDirected() ? this.filterEdges(this._out[SS], SS, HS) : this.nodeEdges(SS, HS)
        }
        nodeEdges(SS, HS) {
          if (SS in this._nodes) return this.filterEdges({
            ...this._in[SS],
            ...this._out[SS]
          }, SS, HS)
        }
        _removeFromParentsChildList(SS) {
          delete this._children[this._parent[SS]][SS]
        }
        filterEdges(SS, HS, gS) {
          if (!SS) return;
          let tS = Object.values(SS);
          return gS ? tS.filter((SS => SS.v === HS && SS.w === gS || SS.v === gS && SS.w === HS)) : tS
        }
      };

    function uS(SS, HS) {
      SS[HS] ? SS[HS]++ : SS[HS] = 1
    }

    function IS(SS, HS) {
      void 0 !== SS[HS] && !--SS[HS] && delete SS[HS]
    }

    function fS(SS, HS, gS, tS) {
      let bS = "" + HS,
        XS = "" + gS;
      if (!SS && bS > XS) {
        let SS = bS;
        bS = XS, XS = SS
      }
      return bS + "\x01" + XS + "\x01" + (void 0 === tS ? "\0" : tS)
    }

    function kS(SS, HS) {
      return fS(SS, HS.v, HS.w, HS.name)
    }

    function aS(SS) {
      let HS = {
          options: {
            directed: SS.isDirected(),
            multigraph: SS.isMultigraph(),
            compound: SS.isCompound()
          },
          nodes: KS(SS),
          edges: jS(SS)
        },
        gS = SS.graph();
      return void 0 !== gS && (HS.value = structuredClone(gS)), HS
    }

    function KS(SS) {
      return SS.nodes().map((HS => {
        let gS = SS.node(HS),
          tS = SS.parent(HS),
          bS = {
            v: HS
          };
        return void 0 !== gS && (bS.value = gS), void 0 !== tS && (bS.parent = tS), bS
      }))
    }

    function jS(SS) {
      return SS.edges().map((HS => {
        let gS = SS.edge(HS),
          tS = {
            v: HS.v,
            w: HS.w
          };
        return void 0 !== HS.name && (tS.name = HS.name), void 0 !== gS && (tS.value = gS), tS
      }))
    }

    function GS(SS) {
      let HS = new qS(SS.options);
      return void 0 !== SS.value && HS.setGraph(SS.value), SS.nodes.forEach((SS => {
        HS.setNode(SS.v, SS.value), SS.parent && HS.setParent(SS.v, SS.parent)
      })), SS.edges.forEach((SS => {
        HS.setEdge({
          v: SS.v,
          w: SS.w,
          name: SS.name
        }, SS.value)
      })), HS
    }
    NS({}, {
      read: () => GS,
      write: () => aS
    });
    var CS = {};
    NS(CS, {
      CycleException: () => vS,
      bellmanFord: () => PS,
      components: () => QS,
      dijkstra: () => hS,
      dijkstraAll: () => ZS,
      findCycles: () => OS,
      floydWarshall: () => cS,
      isAcyclic: () => LS,
      postorder: () => VS,
      preorder: () => iS,
      prim: () => WS,
      shortestPaths: () => zS,
      tarjan: () => JS,
      topsort: () => ES
    });
    var nS = () => 1;

    function PS(SS, HS, gS, tS) {
      return function(SS, HS, gS, tS) {
        let bS, XS = {},
          xS = 0,
          NS = SS.nodes(),
          qS = function(SS) {
            let HS = XS[SS.v],
              tS = XS[SS.w];
            if (!HS || !tS) return;
            let xS = gS(SS);
            HS.distance + xS < tS.distance && (XS[SS.w] = {
              distance: HS.distance + xS,
              predecessor: SS.v
            }, bS = !0)
          },
          uS = function() {
            NS.forEach((function(SS) {
              tS(SS).forEach((function(HS) {
                let gS = HS.v === SS ? HS.v : HS.w,
                  tS = gS === HS.v ? HS.w : HS.v;
                qS({
                  v: gS,
                  w: tS
                })
              }))
            }))
          };
        NS.forEach((function(SS) {
          let gS = SS === HS ? 0 : Number.POSITIVE_INFINITY;
          XS[SS] = {
            distance: gS,
            predecessor: ""
          }
        }));
        let IS = NS.length;
        for (let fS = 1; fS < IS && (bS = !1, xS++, uS(), bS); fS++);
        if (xS === IS - 1 && (bS = !1, uS(), bS)) throw new Error("The graph contains a negative weight cycle");
        return XS
      }(SS, String(HS), gS || nS, tS || function(HS) {
        var gS;
        return null != (gS = SS.outEdges(HS)) ? gS : []
      })
    }

    function QS(SS) {
      let HS, gS = {},
        tS = [];

      function bS(tS) {
        var XS, xS;
        tS in gS || (gS[tS] = !0, HS.push(tS), null == (XS = SS.successors(tS)) || XS.forEach(bS), null == (xS = SS.predecessors(tS)) || xS.forEach(bS))
      }
      return SS.nodes().forEach((function(SS) {
        HS = [], bS(SS), HS.length && tS.push(HS)
      })), tS
    }
    var DS = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((SS => SS.key))
        }
        has(SS) {
          return SS in this._keyIndices
        }
        priority(SS) {
          let HS = this._keyIndices[SS];
          if (void 0 !== HS) return this._arr[HS].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(SS, HS) {
          let gS = this._keyIndices,
            tS = String(SS);
          if (!(tS in gS)) {
            let SS = this._arr,
              bS = SS.length;
            return gS[tS] = bS, SS.push({
              key: tS,
              priority: HS
            }), this._decrease(bS), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let SS = this._arr.pop();
          return delete this._keyIndices[SS.key], this._heapify(0), SS.key
        }
        decrease(SS, HS) {
          let gS = this._keyIndices[SS];
          if (void 0 === gS) throw new Error(`Key not found: ${SS}`);
          let tS = this._arr[gS].priority;
          if (HS > tS) throw new Error(`New priority is greater than current priority. Key: ${SS} Old: ${tS} New: ${HS}`);
          this._arr[gS].priority = HS, this._decrease(gS)
        }
        _heapify(SS) {
          let HS = this._arr,
            gS = 2 * SS,
            tS = gS + 1,
            bS = SS;
          gS < HS.length && (bS = HS[gS].priority < HS[bS].priority ? gS : bS, tS < HS.length && (bS = HS[tS].priority < HS[bS].priority ? tS : bS), bS !== SS && (this._swap(SS, bS), this._heapify(bS)))
        }
        _decrease(SS) {
          let HS, gS = this._arr,
            tS = gS[SS].priority;
          for (; 0 !== SS && (HS = SS >> 1, !(gS[HS].priority < tS));) this._swap(SS, HS), SS = HS
        }
        _swap(SS, HS) {
          let gS = this._arr,
            tS = this._keyIndices,
            bS = gS[SS],
            XS = gS[HS];
          gS[SS] = XS, gS[HS] = bS, tS[XS.key] = SS, tS[bS.key] = HS
        }
      },
      wS = () => 1;

    function hS(SS, HS, gS, tS) {
      return function(SS, HS, gS, tS) {
        let bS, XS, xS = {},
          NS = new DS,
          qS = function(SS) {
            let HS = SS.v !== bS ? SS.v : SS.w,
              tS = xS[HS];
            if (!tS) return;
            let qS = gS(SS),
              uS = XS.distance + qS;
            if (qS < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + SS + " Weight: " + qS);
            uS < tS.distance && (tS.distance = uS, tS.predecessor = bS, NS.decrease(HS, uS))
          };
        for (SS.nodes().forEach((function(SS) {
            let gS = SS === HS ? 0 : Number.POSITIVE_INFINITY;
            xS[SS] = {
              distance: gS,
              predecessor: ""
            }, NS.add(SS, gS)
          })); NS.size() > 0;) {
          bS = NS.removeMin();
          let SS = xS[bS];
          if (!SS || SS.distance === Number.POSITIVE_INFINITY) break;
          XS = SS, tS(bS).forEach(qS)
        }
        return xS
      }(SS, String(HS), gS || wS, tS || function(HS) {
        var gS;
        return null != (gS = SS.outEdges(HS)) ? gS : []
      })
    }

    function ZS(SS, HS, gS) {
      return SS.nodes().reduce((function(tS, bS) {
        return tS[bS] = hS(SS, bS, HS, gS), tS
      }), {})
    }

    function JS(SS) {
      let HS = 0,
        gS = [],
        tS = {},
        bS = [];

      function XS(xS) {
        var NS;
        let qS = tS[xS] = {
          onStack: !0,
          lowlink: HS,
          index: HS++
        };
        if (gS.push(xS), null == (NS = SS.successors(xS)) || NS.forEach((function(SS) {
            if (SS in tS) {
              let HS = tS[SS];
              null != HS && HS.onStack && (qS.lowlink = Math.min(qS.lowlink, HS.index))
            } else {
              XS(SS);
              let HS = tS[SS];
              HS && (qS.lowlink = Math.min(qS.lowlink, HS.lowlink))
            }
          })), qS.lowlink === qS.index) {
          let SS, HS = [];
          do {
            SS = gS.pop();
            let bS = tS[SS];
            bS && (bS.onStack = !1), HS.push(SS)
          } while (xS !== SS);
          bS.push(HS)
        }
      }
      return SS.nodes().forEach((function(SS) {
        SS in tS || XS(SS)
      })), bS
    }

    function OS(SS) {
      return JS(SS).filter((function(HS) {
        var gS;
        let tS = HS[0];
        return !!tS && (HS.length > 1 || 1 === HS.length && (null != (gS = SS.outEdges(tS, tS)) ? gS : []).length > 0)
      }))
    }
    var dS = () => 1;

    function cS(SS, HS, gS) {
      return function(SS, HS, gS) {
        let tS = {},
          bS = SS.nodes();
        return bS.forEach((function(SS) {
          let XS = {};
          tS[SS] = XS, XS[SS] = {
            distance: 0,
            predecessor: ""
          }, bS.forEach((function(HS) {
            SS !== HS && (XS[HS] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), gS(SS).forEach((function(gS) {
            let tS = gS.v === SS ? gS.w : gS.v,
              bS = HS(gS);
            XS[tS] = {
              distance: bS,
              predecessor: SS
            }
          }))
        })), bS.forEach((function(SS) {
          let HS = tS[SS];
          HS && bS.forEach((function(gS) {
            let XS = tS[gS];
            XS && bS.forEach((function(gS) {
              let tS = XS[SS],
                bS = HS[gS],
                xS = XS[gS];
              if (tS && bS && xS) {
                let SS = tS.distance + bS.distance;
                SS < xS.distance && (xS.distance = SS, xS.predecessor = bS.predecessor)
              }
            }))
          }))
        })), tS
      }(SS, HS || dS, gS || function(HS) {
        var gS;
        return null != (gS = SS.outEdges(HS)) ? gS : []
      })
    }
    var vS = class extends Error {
      constructor(SS) {
        super(SS), this.name = "CycleException"
      }
    };

    function ES(SS) {
      let HS = {},
        gS = {},
        tS = [];
      if (SS.sinks().forEach((function bS(XS) {
          var xS;
          if (XS in gS) throw new vS;
          XS in HS || (gS[XS] = !0, HS[XS] = !0, null == (xS = SS.predecessors(XS)) || xS.forEach(bS), delete gS[XS], tS.push(XS))
        })), Object.keys(HS).length !== SS.nodeCount()) throw new vS;
      return tS
    }

    function LS(SS) {
      try {
        ES(SS)
      } catch (HS) {
        if (HS instanceof vS) return !1;
        throw HS
      }
      return !0
    }

    function YS(SS, HS, gS, tS, bS) {
      Array.isArray(HS) || (HS = [HS]);
      let XS = HS => {
          var gS;
          return null != (gS = SS.isDirected() ? SS.successors(HS) : SS.neighbors(HS)) ? gS : []
        },
        xS = {};
      return HS.forEach((function(HS) {
        if (!SS.hasNode(HS)) throw new Error("Graph does not have node: " + HS);
        bS = AS(SS, HS, "post" === gS, xS, XS, tS, bS)
      })), bS
    }

    function AS(SS, HS, gS, tS, bS, XS, xS) {
      return HS in tS || (tS[HS] = !0, gS || (xS = XS(xS, HS)), bS(HS).forEach((function(HS) {
        xS = AS(SS, HS, gS, tS, bS, XS, xS)
      })), gS && (xS = XS(xS, HS))), xS
    }

    function yS(SS, HS, gS) {
      return YS(SS, HS, gS, (function(SS, HS) {
        return SS.push(HS), SS
      }), [])
    }

    function VS(SS, HS) {
      return yS(SS, HS, "post")
    }

    function iS(SS, HS) {
      return yS(SS, HS, "pre")
    }

    function WS(SS, HS) {
      var gS;
      let tS, bS = new qS,
        XS = {},
        xS = new DS;

      function NS(SS) {
        let gS = SS.v === tS ? SS.w : SS.v,
          bS = xS.priority(gS);
        if (void 0 !== bS) {
          let NS = HS(SS);
          NS < bS && (XS[gS] = tS, xS.decrease(gS, NS))
        }
      }
      if (0 === SS.nodeCount()) return bS;
      SS.nodes().forEach((function(SS) {
        xS.add(SS, Number.POSITIVE_INFINITY), bS.setNode(SS)
      }));
      let uS = SS.nodes()[0];
      void 0 !== uS && xS.decrease(uS, 0);
      let IS = !1;
      for (; xS.size() > 0;) {
        if (tS = xS.removeMin(), tS in XS) bS.setEdge(tS, XS[tS]);
        else {
          if (IS) throw new Error("Input graph is not connected: " + SS);
          IS = !0
        }
        null == (gS = SS.nodeEdges(tS)) || gS.forEach(NS)
      }
      return bS
    }

    function zS(SS, HS, gS, tS) {
      return function(SS, HS, gS, tS) {
        if (void 0 === gS) return hS(SS, HS, gS, tS);
        let bS = !1,
          XS = SS.nodes();
        for (let xS = 0; xS < XS.length; xS++) {
          let NS = XS[xS];
          if (void 0 === NS) continue;
          let qS = tS(NS);
          for (let SS = 0; SS < qS.length; SS++) {
            let HS = qS[SS];
            if (!HS) continue;
            let tS = HS.v === NS ? HS.v : HS.w;
            gS({
              v: tS,
              w: tS === HS.v ? HS.w : HS.v
            }) < 0 && (bS = !0)
          }
          if (bS) return PS(SS, HS, gS, tS)
        }
        return hS(SS, HS, gS, tS)
      }(SS, HS, gS, null != tS ? tS : HS => {
        var gS;
        return null != (gS = SS.outEdges(HS)) ? gS : []
      })
    }
    var US = qS;

    function pS(SS, HS, gS, tS) {
      let bS = tS;
      for (; SS.hasNode(bS);) bS = rS(tS);
      return gS.dummy = HS, SS.setNode(bS, gS), bS
    }

    function sS(SS) {
      let HS = new US({
        multigraph: SS.isMultigraph()
      }).setGraph(SS.graph());
      return SS.nodes().forEach((gS => {
        SS.children(gS).length || HS.setNode(gS, SS.node(gS))
      })), SS.edges().forEach((gS => {
        HS.setEdge(gS, SS.edge(gS))
      })), HS
    }

    function BS(SS, HS) {
      let gS, tS, bS = SS.x,
        XS = SS.y,
        xS = HS.x - bS,
        NS = HS.y - XS,
        qS = SS.width / 2,
        uS = SS.height / 2;
      if (!xS && !NS) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(NS) * qS > Math.abs(xS) * uS ? (NS < 0 && (uS = -uS), gS = uS * xS / NS, tS = uS) : (xS < 0 && (qS = -qS), gS = qS, tS = qS * NS / xS), {
        x: bS + gS,
        y: XS + tS
      }
    }

    function MS(SS) {
      let HS = SH(oS(SS) + 1).map((() => []));
      return SS.nodes().forEach((gS => {
        let tS = SS.node(gS),
          bS = tS.rank;
        void 0 !== bS && (HS[bS] || (HS[bS] = []), HS[bS][tS.order] = gS)
      })), HS
    }

    function FS(SS, HS, gS, tS) {
      let bS = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (bS.rank = gS, bS.order = tS), pS(SS, "border", bS, HS)
    }
    var RS = 65535;

    function TS(SS, HS) {
      if (HS.length > RS) {
        let gS = function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RS,
            gS = [];
          for (let tS = 0; tS < SS.length; tS += HS) {
            let bS = SS.slice(tS, tS + HS);
            gS.push(bS)
          }
          return gS
        }(HS);
        return SS(...gS.map((HS => SS(...HS))))
      }
      return SS(...HS)
    }

    function oS(SS) {
      let HS = SS.nodes().map((HS => {
        let gS = SS.node(HS).rank;
        return void 0 === gS ? Number.MIN_VALUE : gS
      }));
      return TS(Math.max, HS)
    }

    function lS(SS, HS) {
      let gS = Date.now();
      try {
        return HS()
      } finally {
        console.log(SS + " time: " + (Date.now() - gS) + "ms")
      }
    }

    function mS(SS, HS) {
      return HS()
    }
    var eS = 0;

    function rS(SS) {
      return SS + "" + ++eS
    }

    function SH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == HS && (HS = SS, SS = 0);
      let tS = SS => SS < HS;
      gS < 0 && (tS = SS => HS < SS);
      let bS = [];
      for (let XS = SS; tS(XS); XS += gS) bS.push(XS);
      return bS
    }

    function HH(SS, HS) {
      let gS = {};
      for (let tS of HS) void 0 !== SS[tS] && (gS[tS] = SS[tS]);
      return gS
    }

    function gH(SS, HS) {
      let gS;
      return gS = "string" == typeof HS ? SS => SS[HS] : HS, Object.entries(SS).reduce(((SS, HS) => {
        let [tS, bS] = HS;
        return SS[tS] = gS(bS, tS), SS
      }), {})
    }
    var tH = "\0";

    function bH(SS, HS, gS) {
      var tS, bS, XS, xS, NS, qS;
      if (!(SS && HS && gS && "edge" === HS.dummy && "edge" === gS.dummy && HS.edgeObj && gS.edgeObj && SS[HS.edgeObj.v] && SS[gS.edgeObj.v] && SS[HS.edgeObj.w] && SS[gS.edgeObj.w])) return 0;
      let uS = !0;
      HS.edgeObj.w === gS.edgeObj.w && (uS = !1);
      let IS = uS ? null != (bS = null == (tS = SS[HS.edgeObj.v]) ? void 0 : tS.rank) ? bS : NaN : null != (xS = null == (XS = SS[HS.edgeObj.w]) ? void 0 : XS.rank) ? xS : NaN,
        fS = Object.entries(SS).find((SS => {
          var gS, tS;
          return (null == (gS = SS[1].edgeObj) ? void 0 : gS.v) === HS.edgeObj.v && (null == (tS = SS[1].edgeObj) ? void 0 : tS.w) === HS.edgeObj.w && SS[1].rank === IS
        })),
        kS = Object.entries(SS).find((SS => {
          var HS, tS;
          return (null == (HS = SS[1].edgeObj) ? void 0 : HS.v) === gS.edgeObj.v && (null == (tS = SS[1].edgeObj) ? void 0 : tS.w) === gS.edgeObj.w && SS[1].rank === IS
        }));
      if (!fS || !kS) return 0;
      let aS = null != (NS = fS[1].order) ? NS : NaN,
        KS = null != (qS = kS[1].order) ? qS : NaN;
      return isNaN(aS - KS) ? 0 : aS - KS
    }
    var XH = "3.1.1";

    function xH(SS) {
      SS._prev._next = SS._next, SS._next._prev = SS._prev, delete SS._next, delete SS._prev
    }

    function NH(SS, HS) {
      if ("_next" !== SS && "_prev" !== SS) return HS
    }
    var qH = class {
        constructor() {
          bS(this, "_sentinel");
          let SS = {};
          SS._next = SS._prev = SS, this._sentinel = SS
        }
        dequeue() {
          let SS = this._sentinel,
            HS = SS._prev;
          if (HS !== SS) return xH(HS), HS
        }
        enqueue(SS) {
          let HS = this._sentinel;
          SS._prev && SS._next && xH(SS), SS._next = HS._next, HS._next._prev = SS, HS._next = SS, SS._prev = HS
        }
        toString() {
          let SS = [],
            HS = this._sentinel,
            gS = HS._prev;
          for (; gS !== HS;) SS.push(JSON.stringify(gS, NH)), gS = gS._prev;
          return "[" + SS.join(", ") + "]"
        }
      },
      uH = () => 1;

    function IH(SS, HS) {
      if (SS.nodeCount() <= 1) return [];
      let gS = function(SS, HS) {
        let gS = new US,
          tS = 0,
          bS = 0;
        SS.nodes().forEach((SS => {
          gS.setNode(SS, {
            v: SS,
            in: 0,
            out: 0
          })
        })), SS.edges().forEach((SS => {
          let XS = gS.edge(SS.v, SS.w) || 0,
            xS = HS(SS),
            NS = XS + xS;
          gS.setEdge(SS.v, SS.w, NS);
          let qS = gS.node(SS.v),
            uS = gS.node(SS.w);
          bS = Math.max(bS, qS.out += xS), tS = Math.max(tS, uS.in += xS)
        }));
        let XS = function(SS) {
            let HS = [];
            for (let gS = 0; gS < SS; gS++) HS.push(gS);
            return HS
          }(bS + tS + 3).map((() => new qH)),
          xS = tS + 1;
        return gS.nodes().forEach((SS => {
          kH(XS, xS, gS.node(SS))
        })), {
          graph: gS,
          buckets: XS,
          zeroIdx: xS
        }
      }(SS, HS || uH);
      return function(SS, HS, gS) {
        var tS;
        let bS, XS = [],
          xS = HS[HS.length - 1],
          NS = HS[0];
        for (; SS.nodeCount();) {
          for (; bS = NS.dequeue();) fH(SS, HS, gS, bS);
          for (; bS = xS.dequeue();) fH(SS, HS, gS, bS);
          if (SS.nodeCount())
            for (let xS = HS.length - 2; xS > 0; --xS)
              if (bS = null == (tS = HS[xS]) ? void 0 : tS.dequeue(), bS) {
                XS = XS.concat(fH(SS, HS, gS, bS, !0) || []);
                break
              }
        }
        return XS
      }(gS.graph, gS.buckets, gS.zeroIdx).flatMap((HS => SS.outEdges(HS.v, HS.w) || []))
    }

    function fH(SS, HS, gS, tS, bS) {
      let XS = [],
        xS = bS ? XS : void 0;
      return (SS.inEdges(tS.v) || []).forEach((tS => {
        let xS = SS.edge(tS),
          NS = SS.node(tS.v);
        bS && XS.push({
          v: tS.v,
          w: tS.w
        }), NS.out -= xS, kH(HS, gS, NS)
      })), (SS.outEdges(tS.v) || []).forEach((tS => {
        let bS = SS.edge(tS),
          XS = tS.w,
          xS = SS.node(XS);
        xS.in -= bS, kH(HS, gS, xS)
      })), SS.removeNode(tS.v), xS
    }

    function kH(SS, HS, gS) {
      var tS, bS, XS;
      gS.out ? gS.in ? null == (XS = SS[gS.out - gS.in + HS]) || XS.enqueue(gS) : null == (bS = SS[SS.length - 1]) || bS.enqueue(gS) : null == (tS = SS[0]) || tS.enqueue(gS)
    }

    function aH(SS, HS) {
      var gS;
      ("greedy" === SS.graph().acyclicer ? IH(SS, (gS = SS, SS => gS.edge(SS).weight)) : function(SS, HS) {
        let gS = [],
          tS = {},
          bS = {};

        function XS(HS) {
          Object.hasOwn(bS, HS) || (bS[HS] = !0, tS[HS] = !0, SS.outEdges(HS).forEach((SS => {
            Object.hasOwn(tS, SS.w) ? gS.push(SS) : XS(SS.w)
          })), delete tS[HS])
        }

        function xS(XS) {
          var NS;
          Object.hasOwn(bS, XS) || (bS[XS] = !0, tS[XS] = !0, null == (NS = SS.outEdges(XS)) || NS.forEach((bS => {
            var NS, qS;
            Object.hasOwn(tS, bS.w) || (null == (NS = HS.node(XS)) ? void 0 : NS.rank) > (null == (qS = HS.node(bS.w)) ? void 0 : qS.rank) && function(SS, HS, gS) {
              let tS = new Set;

              function bS(HS) {
                var XS;
                if (SS.sources().includes(HS)) return !0;
                tS.add(HS);
                for (let xS of null != (XS = SS.inEdges(HS)) ? XS : [])
                  if ((xS.v !== gS.v || xS.w !== gS.w) && !tS.has(xS.v) && bS(xS.v)) return !0;
                return !1
              }
              return bS(HS)
            }(SS, bS.w, bS) ? gS.push(bS) : xS(bS.w)
          })), delete tS[XS])
        }
        let NS = XS;
        return HS && "function" == typeof HS.node && (NS = xS), SS.sources().forEach(NS), SS.nodes().forEach(NS), gS
      }(SS, null != HS ? HS : null)).forEach((HS => {
        let gS = SS.edge(HS);
        SS.removeEdge(HS), gS.forwardName = HS.name, gS.reversed = !0, SS.setEdge(HS.w, HS.v, gS, rS("rev"))
      }))
    }

    function KH(SS) {
      SS.graph().dummyChains = [], SS.edges().forEach((HS => function(SS, HS) {
        let gS, tS, bS, XS = HS.v,
          xS = SS.node(XS).rank,
          NS = HS.w,
          qS = SS.node(NS).rank,
          uS = HS.name,
          IS = SS.edge(HS),
          fS = IS.labelRank;
        if (qS === xS + 1) return;
        for (SS.removeEdge(HS), bS = 0, ++xS; xS < qS; ++bS, ++xS) IS.points = [], tS = {
          width: 0,
          height: 0,
          edgeLabel: IS,
          edgeObj: HS,
          rank: xS
        }, gS = pS(SS, "edge", tS, "_d"), xS === fS && (tS.width = IS.width, tS.height = IS.height, tS.dummy = "edge-label", tS.labelpos = IS.labelpos), SS.setEdge(XS, gS, {
          weight: IS.weight
        }, uS), 0 === bS && SS.graph().dummyChains.push(gS), XS = gS;
        SS.setEdge(XS, NS, {
          weight: IS.weight
        }, uS)
      }(SS, HS)))
    }

    function jH(SS) {
      let HS = {};
      SS.sources().forEach((function gS(tS) {
        let bS = SS.node(tS);
        if (Object.hasOwn(HS, tS)) return bS.rank;
        HS[tS] = !0;
        let XS = SS.outEdges(tS),
          xS = XS ? XS.map((HS => null == HS ? Number.POSITIVE_INFINITY : gS(HS.w) - SS.edge(HS).minlen)) : [],
          NS = TS(Math.min, xS);
        return NS === Number.POSITIVE_INFINITY && (NS = 0), bS.rank = NS
      }))
    }

    function GH(SS, HS) {
      return SS.node(HS.w).rank - SS.node(HS.v).rank - SS.edge(HS).minlen
    }
    var CH = function(SS) {
      let HS = new US({
          directed: !1
        }),
        gS = SS.nodes();
      if (0 === gS.length) throw new Error("Graph must have at least one node");
      let tS, bS, XS = gS[0],
        xS = SS.nodeCount();
      for (HS.setNode(XS, {}); nH(HS, SS) < xS && (tS = PH(HS, SS), tS);) bS = HS.hasNode(tS.v) ? GH(SS, tS) : -GH(SS, tS), QH(HS, SS, bS);
      return HS
    };

    function nH(SS, HS) {
      return SS.nodes().forEach((function gS(tS) {
        let bS = HS.nodeEdges(tS);
        bS && bS.forEach((bS => {
          let XS = bS.v,
            xS = tS === XS ? bS.w : XS;
          !SS.hasNode(xS) && !GH(HS, bS) && (SS.setNode(xS, {}), SS.setEdge(tS, xS, {}), gS(xS))
        }))
      })), SS.nodeCount()
    }

    function PH(SS, HS) {
      return HS.edges().reduce(((gS, tS) => {
        let bS = Number.POSITIVE_INFINITY;
        return SS.hasNode(tS.v) !== SS.hasNode(tS.w) && (bS = GH(HS, tS)), bS < gS[0] ? [bS, tS] : gS
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function QH(SS, HS, gS) {
      SS.nodes().forEach((SS => HS.node(SS).rank += gS))
    }
    var {
      preorder: DH,
      postorder: wH
    } = CS, hH = ZH;

    function ZH(SS) {
      SS = function(SS) {
        let HS = (new US).setGraph(SS.graph());
        return SS.nodes().forEach((gS => HS.setNode(gS, SS.node(gS)))), SS.edges().forEach((gS => {
          let tS = HS.edge(gS.v, gS.w) || {
              weight: 0,
              minlen: 1
            },
            bS = SS.edge(gS);
          HS.setEdge(gS.v, gS.w, {
            weight: tS.weight + bS.weight,
            minlen: Math.max(tS.minlen, bS.minlen)
          })
        })), HS
      }(SS), jH(SS);
      let HS, gS, tS = CH(SS);
      for (dH(tS), JH(tS, SS); HS = vH(tS);) gS = EH(tS, SS, HS), LH(tS, SS, HS, gS)
    }

    function JH(SS, HS) {
      let gS = wH(SS, SS.nodes());
      gS = gS.slice(0, gS.length - 1), gS.forEach((gS => function(SS, HS, gS) {
        let tS = SS.node(gS).parent,
          bS = SS.edge(gS, tS);
        bS.cutvalue = OH(SS, HS, gS)
      }(SS, HS, gS)))
    }

    function OH(SS, HS, gS) {
      let tS = SS.node(gS).parent,
        bS = !0,
        XS = HS.edge(gS, tS),
        xS = 0;
      XS || (bS = !1, XS = HS.edge(tS, gS)), xS = XS.weight;
      let NS = HS.nodeEdges(gS);
      return NS && NS.forEach((XS => {
        let NS = XS.v === gS,
          qS = NS ? XS.w : XS.v;
        if (qS !== tS) {
          let tS = NS === bS,
            uS = HS.edge(XS).weight;
          if (xS += tS ? uS : -uS, function(SS, HS, gS) {
              return SS.hasEdge(HS, gS)
            }(SS, gS, qS)) {
            let HS = SS.edge(gS, qS).cutvalue;
            xS += tS ? -HS : HS
          }
        }
      })), xS
    }

    function dH(SS, HS) {
      arguments.length < 2 && (HS = SS.nodes()[0]), cH(SS, {}, 1, HS)
    }

    function cH(SS, HS, gS, tS, bS) {
      let XS = gS,
        xS = SS.node(tS);
      HS[tS] = !0;
      let NS = SS.neighbors(tS);
      return NS && NS.forEach((bS => {
        Object.hasOwn(HS, bS) || (gS = cH(SS, HS, gS, bS, tS))
      })), xS.low = XS, xS.lim = gS++, bS ? xS.parent = bS : delete xS.parent, gS
    }

    function vH(SS) {
      return SS.edges().find((HS => SS.edge(HS).cutvalue < 0))
    }

    function EH(SS, HS, gS) {
      let tS = gS.v,
        bS = gS.w;
      HS.hasEdge(tS, bS) || (tS = gS.w, bS = gS.v);
      let XS = SS.node(tS),
        xS = SS.node(bS),
        NS = XS,
        qS = !1;
      return XS.lim > xS.lim && (NS = xS, qS = !0), HS.edges().filter((HS => qS === YH(SS, SS.node(HS.v), NS) && qS !== YH(SS, SS.node(HS.w), NS))).reduce(((SS, gS) => GH(HS, gS) < GH(HS, SS) ? gS : SS))
    }

    function LH(SS, HS, gS, tS) {
      let bS = gS.v,
        XS = gS.w;
      SS.removeEdge(bS, XS), SS.setEdge(tS.v, tS.w, {}), dH(SS), JH(SS, HS),
        function(SS, HS) {
          let gS = SS.nodes().find((HS => !SS.node(HS).parent));
          if (!gS) return;
          let tS = DH(SS, [gS]);
          tS = tS.slice(1), tS.forEach((gS => {
            let tS = SS.node(gS).parent,
              bS = HS.edge(gS, tS),
              XS = !1;
            bS || (bS = HS.edge(tS, gS), XS = !0), HS.node(gS).rank = HS.node(tS).rank + (XS ? bS.minlen : -bS.minlen)
          }))
        }(SS, HS)
    }

    function YH(SS, HS, gS) {
      return gS.low <= HS.lim && HS.lim <= gS.lim
    }
    ZH.initLowLimValues = dH, ZH.initCutValues = JH, ZH.calcCutValue = OH, ZH.leaveEdge = vH, ZH.enterEdge = EH, ZH.exchangeEdges = LH;
    var AH = function(SS) {
      let HS = SS.graph().ranker;
      if ("function" == typeof HS) return HS(SS);
      switch (HS) {
        case "network-simplex":
        default:
          VH(SS);
          break;
        case "tight-tree":
          ! function(SS) {
            jH(SS), CH(SS)
          }(SS);
          break;
        case "longest-path":
          yH(SS);
        case "none":
      }
    };
    var yH = jH;

    function VH(SS) {
      hH(SS)
    }
    var iH = function(SS) {
      let HS = function(SS) {
          let HS = {},
            gS = 0;

          function tS(bS) {
            let XS = gS;
            SS.children(bS).forEach(tS), HS[bS] = {
              low: XS,
              lim: gS++
            }
          }
          return SS.children(tH).forEach(tS), HS
        }(SS),
        gS = SS.graph();
      if (!Array.isArray(gS.dummyChains)) return;
      gS.dummyChains.forEach((gS => {
        let tS = SS.node(gS),
          bS = tS.edgeObj,
          XS = function(SS, HS, gS, tS) {
            let bS, XS = [],
              xS = [],
              NS = Math.min(HS[gS].low, HS[tS].low),
              qS = Math.max(HS[gS].lim, HS[tS].lim);
            bS = gS;
            do {
              bS = SS.parent(bS), XS.push(bS)
            } while (bS && (HS[bS].low > NS || qS > HS[bS].lim));
            let uS = bS,
              IS = tS;
            for (;
              (IS = SS.parent(IS)) !== uS;) xS.push(IS);
            return {
              path: XS.concat(xS.reverse()),
              lca: uS
            }
          }(SS, HS, bS.v, bS.w),
          xS = XS.path,
          NS = XS.lca,
          qS = 0,
          uS = xS[qS],
          IS = !0;
        for (; gS !== bS.w;) {
          if (tS = SS.node(gS), IS) {
            for (;
              (uS = xS[qS]) !== NS && SS.node(uS).maxRank < tS.rank;) qS++;
            uS === NS && (IS = !1)
          }
          if (!IS) {
            for (; qS < xS.length - 1 && SS.node(xS[qS + 1]).minRank <= tS.rank;) qS++;
            uS = xS[qS]
          }
          void 0 !== uS && SS.setParent(gS, uS), gS = SS.successors(gS)[0]
        }
      }))
    };

    function WH(SS) {
      let HS = pS(SS, "root", {}, "_root"),
        gS = function(SS) {
          let HS = {};

          function gS(tS, bS) {
            let XS = SS.children(tS);
            XS && XS.length && XS.forEach((SS => gS(SS, bS + 1))), HS[tS] = bS
          }
          return SS.children(tH).forEach((SS => gS(SS, 1))), HS
        }(SS),
        tS = Object.values(gS),
        bS = TS(Math.max, tS) - 1,
        XS = 2 * bS + 1;
      SS.graph().nestingRoot = HS, SS.edges().forEach((HS => SS.edge(HS).minlen *= XS));
      let xS = function(SS) {
        return SS.edges().reduce(((HS, gS) => HS + SS.edge(gS).weight), 0)
      }(SS) + 1;
      SS.children(tH).forEach((tS => {
        zH(SS, HS, XS, xS, bS, gS, tS)
      })), SS.graph().nodeRankFactor = XS
    }

    function zH(SS, HS, gS, tS, bS, XS, xS) {
      var NS;
      let qS = SS.children(xS);
      if (!qS.length) return void(xS !== HS && SS.setEdge(HS, xS, {
        weight: 0,
        minlen: gS
      }));
      let uS = FS(SS, "_bt"),
        IS = FS(SS, "_bb"),
        fS = SS.node(xS);
      SS.setParent(uS, xS), fS.borderTop = uS, SS.setParent(IS, xS), fS.borderBottom = IS, qS.forEach((NS => {
        var qS;
        zH(SS, HS, gS, tS, bS, XS, NS);
        let fS = SS.node(NS),
          kS = fS.borderTop ? fS.borderTop : NS,
          aS = fS.borderBottom ? fS.borderBottom : NS,
          KS = fS.borderTop ? tS : 2 * tS,
          jS = kS !== aS ? 1 : bS - (null != (qS = XS[xS]) ? qS : 0) + 1;
        SS.setEdge(uS, kS, {
          weight: KS,
          minlen: jS,
          nestingEdge: !0
        }), SS.setEdge(aS, IS, {
          weight: KS,
          minlen: jS,
          nestingEdge: !0
        })
      })), SS.parent(xS) || SS.setEdge(HS, uS, {
        weight: 0,
        minlen: bS + (null != (NS = XS[xS]) ? NS : 0)
      })
    }
    var UH = function(SS) {
      SS.children(tH).forEach((function HS(gS) {
        let tS = SS.children(gS),
          bS = SS.node(gS);
        if (tS.length && tS.forEach(HS), bS && Object.hasOwn(bS, "minRank")) {
          bS.borderLeft = [], bS.borderRight = [];
          for (let HS = bS.minRank, tS = bS.maxRank + 1; HS < tS; ++HS) pH(SS, "borderLeft", "_bl", gS, bS, HS), pH(SS, "borderRight", "_br", gS, bS, HS)
        }
      }))
    };

    function pH(SS, HS, gS, tS, bS, XS) {
      let xS = {
          width: 0,
          height: 0,
          rank: XS,
          borderType: HS
        },
        NS = bS[HS][XS - 1],
        qS = pS(SS, "border", xS, gS);
      bS[HS][XS] = qS, SS.setParent(qS, tS), NS && SS.setEdge(NS, qS, {
        weight: 1
      })
    }

    function sH(SS) {
      var HS;
      let gS = null == (HS = SS.graph().rankdir) ? void 0 : HS.toLowerCase();
      ("bt" === gS || "rl" === gS) && function(SS) {
        SS.nodes().forEach((HS => FH(SS.node(HS)))), SS.edges().forEach((HS => {
          var gS;
          let tS = SS.edge(HS);
          null == (gS = tS.points) || gS.forEach(FH), Object.hasOwn(tS, "y") && FH(tS)
        }))
      }(SS), ("lr" === gS || "rl" === gS) && (function(SS) {
        SS.nodes().forEach((HS => RH(SS.node(HS)))), SS.edges().forEach((HS => {
          var gS;
          let tS = SS.edge(HS);
          null == (gS = tS.points) || gS.forEach(RH), Object.hasOwn(tS, "x") && RH(tS)
        }))
      }(SS), BH(SS))
    }

    function BH(SS) {
      SS.nodes().forEach((HS => MH(SS.node(HS)))), SS.edges().forEach((HS => MH(SS.edge(HS))))
    }

    function MH(SS) {
      let HS = SS.width;
      SS.width = SS.height, SS.height = HS
    }

    function FH(SS) {
      SS.y = -SS.y
    }

    function RH(SS) {
      let HS = SS.x;
      SS.x = SS.y, SS.y = HS
    }

    function TH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gS = {},
        tS = SS.nodes().filter((HS => !SS.children(HS).length)),
        bS = tS.map((HS => SS.node(HS).rank)),
        XS = SH(TS(Math.max, bS) + 1).map((() => []));
      return tS.sort(((HS, gS) => SS.node(HS).rank - SS.node(gS).rank)).forEach((function tS(bS) {
        if (gS[bS]) return;
        gS[bS] = !0;
        let xS = SS.node(bS);
        XS[xS.rank].push(bS);
        let NS = SS.successors(bS);
        NS && [...NS].sort(((gS, tS) => function(gS, tS) {
          let bS = SS.node(gS),
            XS = SS.node(tS);
          return bH(HS, bS, XS)
        }(gS, tS))).forEach(tS)
      })), XS
    }

    function oH(SS, HS) {
      let gS = 0;
      for (let tS = 1; tS < HS.length; ++tS) gS += lH(SS, HS[tS - 1], HS[tS]);
      return gS
    }

    function lH(SS, HS, gS) {
      let tS = function(SS, HS) {
          return SS.reduce(((SS, gS, tS) => (SS[gS] = HS[tS], SS)), {})
        }(gS, gS.map(((SS, HS) => HS))),
        bS = HS.flatMap((HS => {
          let gS = SS.outEdges(HS);
          return gS ? gS.map((HS => ({
            pos: tS[HS.w],
            weight: SS.edge(HS).weight
          }))).sort(((SS, HS) => SS.pos - HS.pos)) : []
        })),
        XS = 1;
      for (; XS < gS.length;) XS <<= 1;
      let xS = 2 * XS - 1;
      XS -= 1;
      let NS = new Array(xS).fill(0),
        qS = 0;
      return bS.forEach((SS => {
        let HS = SS.pos + XS;
        NS[HS] += SS.weight;
        let gS = 0;
        for (; HS > 0;) HS % 2 && (gS += NS[HS + 1]), HS = HS - 1 >> 1, NS[HS] += SS.weight;
        qS += SS.weight * gS
      })), qS
    }

    function mH(SS, HS) {
      let gS = {};
      return SS.forEach(((SS, HS) => {
          let tS = {
            indegree: 0,
            in: [],
            out: [],
            vs: [SS.v],
            i: HS
          };
          void 0 !== SS.barycenter && (tS.barycenter = SS.barycenter, tS.weight = SS.weight), gS[SS.v] = tS
        })), HS.edges().forEach((SS => {
          let HS = gS[SS.v],
            tS = gS[SS.w];
          void 0 !== HS && void 0 !== tS && (tS.indegree++, HS.out.push(tS))
        })),
        function(SS) {
          let HS = [];

          function gS(SS) {
            return HS => {
              HS.merged || (void 0 === HS.barycenter || void 0 === SS.barycenter || HS.barycenter >= SS.barycenter) && function(SS, HS) {
                let gS = 0,
                  tS = 0;
                SS.weight && (gS += SS.barycenter * SS.weight, tS += SS.weight), HS.weight && (gS += HS.barycenter * HS.weight, tS += HS.weight), SS.vs = HS.vs.concat(SS.vs), SS.barycenter = gS / tS, SS.weight = tS, SS.i = Math.min(HS.i, SS.i), HS.merged = !0
              }(SS, HS)
            }
          }

          function tS(HS) {
            return gS => {
              gS.in.push(HS), 0 === --gS.indegree && SS.push(gS)
            }
          }
          for (; SS.length;) {
            let bS = SS.pop();
            HS.push(bS), bS.in.reverse().forEach(gS(bS)), bS.out.forEach(tS(bS))
          }
          return HS.filter((SS => !SS.merged)).map((SS => HH(SS, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(gS).filter((SS => !SS.indegree)))
    }

    function eH(SS, HS, gS, tS, bS) {
      let XS = {},
        xS = null,
        NS = null,
        qS = bS;
      "boolean" == typeof HS ? (qS = HS, XS = {}) : HS && (XS = HS, xS = null != gS ? gS : null, NS = null != tS ? tS : null);
      let uS = function(SS, HS) {
          let gS = {
            lhs: [],
            rhs: []
          };
          return SS.forEach((SS => {
            HS(SS) ? gS.lhs.push(SS) : gS.rhs.push(SS)
          })), gS
        }(SS, (SS => Object.hasOwn(SS, "barycenter"))),
        IS = uS.lhs,
        fS = uS.rhs.sort(((SS, HS) => HS.i - SS.i)),
        kS = [],
        aS = 0,
        KS = 0,
        jS = 0;
      IS.sort(function(SS, HS, gS) {
        return (tS, bS) => {
          if (tS.barycenter < bS.barycenter) return -1;
          if (tS.barycenter > bS.barycenter) return 1;
          if (SS && ("string" == typeof tS.vs[0] || "string" == typeof bS.vs[0])) {
            let gS = SS.node(tS.vs[0]),
              XS = SS.node(bS.vs[0]),
              xS = bH(HS, gS, XS);
            if (0 !== xS) return xS
          }
          return gS ? bS.i - tS.i : tS.i - bS.i
        }
      }(NS, xS, !!qS));
      for (let [CS, nS] of Object.entries(XS)) {
        let SS = IS.findIndex((SS => SS.vs[0] === CS));
        IS.splice(SS + 1, 0, nS)
      }
      jS = rH(kS, fS, jS), IS.forEach((SS => {
        jS += SS.vs.length, kS.push(SS.vs), aS += SS.barycenter * SS.weight, KS += SS.weight, jS = rH(kS, fS, jS)
      }));
      let GS = {
        vs: kS.flat(1)
      };
      return KS && (GS.barycenter = aS / KS, GS.weight = KS), GS
    }

    function rH(SS, HS, gS) {
      let tS;
      for (; HS.length && (tS = HS[HS.length - 1]).i <= gS;) HS.pop(), SS.push(tS.vs), gS++;
      return gS
    }

    function Sg(SS, HS, gS, tS, bS) {
      var XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS;
      let GS = null,
        CS = bS;
      "boolean" == typeof tS ? (CS = tS, GS = null) : void 0 !== tS && (GS = tS);
      let nS = SS.children(HS),
        PS = SS.node(HS),
        QS = PS ? PS.borderLeft : void 0,
        DS = PS ? PS.borderRight : void 0,
        wS = {};
      QS && (nS = nS.filter((SS => SS !== QS && SS !== DS)));
      let hS = function(SS) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((HS => {
          let gS = SS.inEdges(HS);
          if (!gS || !gS.length) return {
            v: HS
          };
          {
            let tS = gS.reduce(((HS, gS) => {
              let tS = SS.edge(gS),
                bS = SS.node(gS.v);
              return {
                sum: HS.sum + tS.weight * bS.order,
                weight: HS.weight + tS.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: HS,
              barycenter: tS.sum / tS.weight,
              weight: tS.weight
            }
          }
        }))
      }(SS, nS);
      hS.forEach((HS => {
        if (SS.children(HS.v).length) {
          let {
            result: tS
          } = Sg(SS, HS.v, gS, GS, CS);
          wS[HS.v] = tS, Object.hasOwn(tS, "barycenter") && function(SS, HS) {
            void 0 !== SS.barycenter ? (SS.barycenter = (SS.barycenter * SS.weight + HS.barycenter * HS.weight) / (SS.weight + HS.weight), SS.weight += HS.weight) : (SS.barycenter = HS.barycenter, SS.weight = HS.weight)
          }(HS, tS)
        }
      }));
      let ZS = mH(hS, gS);
      ! function(SS, HS) {
        SS.forEach((SS => {
          SS.vs = SS.vs.flatMap((SS => HS[SS] ? HS[SS].vs : SS))
        }))
      }(ZS, wS);
      let JS = {},
        OS = !1;
      for (let cS = 0; cS < ZS.length; cS++)
        for (let HS = cS + 1; HS < ZS.length; HS++)
          if (ZS[cS] && ZS[HS] && null != (XS = ZS[cS]) && XS.barycenter && null != (xS = ZS[HS]) && xS.barycenter && (null == (NS = ZS[cS]) ? void 0 : NS.barycenter) === ZS[HS].barycenter) {
            let gS = null != (uS = null == (qS = ZS[cS]) ? void 0 : qS.vs[0]) ? uS : "",
              tS = null != (fS = null == (IS = ZS[HS]) ? void 0 : IS.vs[0]) ? fS : "",
              bS = SS.node(gS),
              XS = SS.node(tS);
            if ("edge" === bS.dummy && "edge" === XS.dummy && (null == (kS = bS.edgeObj) ? void 0 : kS.v) === (null == (aS = XS.edgeObj) ? void 0 : aS.v) && (null == (KS = bS.edgeObj) ? void 0 : KS.w) === (null == (jS = XS.edgeObj) ? void 0 : jS.w)) {
              if (bS.edgeLabel.reversed) {
                JS[tS] = ZS[cS], ZS.splice(cS, 1), cS--;
                break
              }
              JS[gS] = ZS[HS], ZS.splice(HS, 1), HS--
            } else OS = !0
          } let dS = eH(ZS, JS, GS, SS, CS);
      if (QS && DS) {
        dS.vs = [QS, dS.vs, DS].flat(1);
        let HS = SS.predecessors(QS);
        if (HS && HS.length) {
          let gS = SS.node(HS[0]),
            tS = SS.predecessors(DS),
            bS = SS.node(tS[0]);
          Object.hasOwn(dS, "barycenter") || (dS.barycenter = 0, dS.weight = 0), dS.barycenter = (dS.barycenter * dS.weight + gS.order + bS.order) / (dS.weight + 2), dS.weight += 2
        }
      }
      return Object.defineProperty(dS, "result", {
        value: dS,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(dS, "usedBias", {
        value: OS,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), dS
    }

    function Hg(SS, HS, gS, tS) {
      tS || (tS = SS.nodes());
      let bS = function(SS) {
          let HS;
          for (; SS.hasNode(HS = rS("_root")););
          return HS
        }(SS),
        XS = new US({
          compound: !0
        }).setGraph({
          root: bS
        }).setDefaultNodeLabel((HS => SS.node(HS)));
      return tS.forEach((tS => {
        let xS = SS.node(tS),
          NS = SS.parent(tS);
        if (xS.rank === HS || xS.minRank <= HS && HS <= xS.maxRank) {
          XS.setNode(tS), XS.setParent(tS, NS || bS);
          let qS = SS[gS](tS);
          qS && qS.forEach((HS => {
            let gS = HS.v === tS ? HS.w : HS.v,
              bS = XS.edge(gS, tS),
              xS = void 0 !== bS ? bS.weight : 0;
            XS.setEdge(gS, tS, {
              weight: SS.edge(HS).weight + xS
            })
          })), Object.hasOwn(xS, "minRank") && XS.setNode(tS, {
            borderLeft: xS.borderLeft[HS],
            borderRight: xS.borderRight[HS]
          })
        }
      })), XS
    }

    function gg(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof HS.customOrder) return void HS.customOrder(SS, gg);
      let tS = oS(SS),
        bS = tg(SS, SH(1, tS + 1), "inEdges"),
        XS = tg(SS, SH(tS - 1, -1, -1), "outEdges"),
        xS = TH(SS, gS);
      if (Xg(SS, xS), HS.disableOptimalOrderHeuristic) return;
      let NS, qS = Number.POSITIVE_INFINITY,
        uS = HS.constraints || [];
      for (let IS = 0, fS = 0; fS < 4; ++IS, ++fS) {
        bg(IS % 2 ? bS : XS, IS % 4 >= 2, uS, gS), xS = MS(SS);
        let HS = oH(SS, xS);
        HS < qS ? (fS = 0, NS = Object.assign({}, xS), qS = HS) : HS === qS && (NS = structuredClone(xS))
      }
      Xg(SS, NS)
    }

    function tg(SS, HS, gS) {
      let tS = new Map,
        bS = (SS, HS) => {
          tS.has(SS) || tS.set(SS, []), tS.get(SS).push(HS)
        };
      for (let XS of SS.nodes()) {
        let HS = SS.node(XS);
        if ("number" == typeof HS.rank && bS(HS.rank, XS), "number" == typeof HS.minRank && "number" == typeof HS.maxRank)
          for (let SS = HS.minRank; SS <= HS.maxRank; SS++) SS !== HS.rank && bS(SS, XS)
      }
      return HS.map((function(HS) {
        return Hg(SS, HS, gS, tS.get(HS) || [])
      }))
    }

    function bg(SS, HS, gS, tS) {
      let bS = !0,
        XS = new US;
      SS.forEach((function(SS) {
        gS.forEach((SS => XS.setEdge(SS.left, SS.right)));
        let xS = SS.graph().root,
          {
            result: NS,
            usedBias: qS
          } = Sg(SS, xS, XS, tS, bS);
        HS && qS && (bS = !bS), NS.vs.forEach(((HS, gS) => SS.node(HS).order = gS)),
          function(SS, HS, gS) {
            let tS, bS = {};
            gS.forEach((gS => {
              let XS, xS, NS = SS.parent(gS);
              for (; NS;) {
                if (XS = SS.parent(NS), XS ? (xS = bS[XS], bS[XS] = NS) : (xS = tS, tS = NS), xS && xS !== NS) return void HS.setEdge(xS, NS);
                NS = XS
              }
            }))
          }(SS, XS, NS.vs)
      }))
    }

    function Xg(SS, HS) {
      Object.values(HS).forEach((HS => HS.forEach(((HS, gS) => SS.node(HS).order = gS))))
    }

    function xg(SS, HS, gS) {
      if (HS > gS) {
        let SS = HS;
        HS = gS, gS = SS
      }
      let tS = SS[HS];
      tS || (SS[HS] = tS = {}), tS[gS] = !0
    }

    function Ng(SS, HS, gS) {
      if (HS > gS) {
        let SS = HS;
        HS = gS, gS = SS
      }
      let tS = SS[HS];
      return void 0 !== tS && Object.hasOwn(tS, gS)
    }

    function qg(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        XS = {},
        xS = function(SS, HS, gS, tS) {
          let bS = new US,
            XS = SS.graph(),
            xS = function(SS, HS, gS) {
              return (tS, bS, XS) => {
                let xS, NS = tS.node(bS),
                  qS = tS.node(XS),
                  uS = 0;
                if (uS += NS.width / 2, Object.hasOwn(NS, "labelpos")) switch (NS.labelpos.toLowerCase()) {
                  case "l":
                    xS = -NS.width / 2;
                    break;
                  case "r":
                    xS = NS.width / 2
                }
                if (xS && (uS += gS ? xS : -xS), xS = void 0, uS += (NS.dummy ? HS : SS) / 2, uS += (qS.dummy ? HS : SS) / 2, uS += qS.width / 2, Object.hasOwn(qS, "labelpos")) switch (qS.labelpos.toLowerCase()) {
                  case "l":
                    xS = qS.width / 2;
                    break;
                  case "r":
                    xS = -qS.width / 2
                }
                return xS && (uS += gS ? xS : -xS), uS
              }
            }(XS.nodesep, XS.edgesep, tS);
          return HS.forEach((HS => {
            let tS;
            HS.forEach((HS => {
              let XS = gS[HS];
              if (void 0 !== XS) {
                if (bS.setNode(XS), void 0 !== tS) {
                  let NS = gS[tS];
                  if (void 0 !== NS) {
                    let gS = bS.edge(NS, XS);
                    bS.setEdge(NS, XS, Math.max(xS(SS, HS, tS), gS || 0))
                  }
                }
                tS = HS
              }
            }))
          })), bS
        }(SS, HS, gS, bS),
        NS = bS ? "borderLeft" : "borderRight";

      function qS(SS, HS) {
        let gS = xS.nodes().slice(),
          tS = {},
          bS = gS.pop();
        for (; bS;) {
          if (tS[bS]) SS(bS);
          else {
            tS[bS] = !0, gS.push(bS);
            for (let SS of HS(bS)) gS.push(SS)
          }
          bS = gS.pop()
        }
      }
      return qS((function(SS) {
        let HS = xS.inEdges(SS);
        XS[SS] = HS ? HS.reduce(((SS, HS) => {
          var gS;
          let tS = null != (gS = XS[HS.v]) ? gS : 0,
            bS = xS.edge(HS);
          return Math.max(SS, tS + (void 0 !== bS ? bS : 0))
        }), 0) : 0
      }), (function(SS) {
        return xS.predecessors(SS) || []
      })), qS((function(HS) {
        let gS = xS.outEdges(HS),
          tS = Number.POSITIVE_INFINITY;
        gS && (tS = gS.reduce(((SS, HS) => {
          let gS = XS[HS.w],
            tS = xS.edge(HS);
          return Math.min(SS, (void 0 !== gS ? gS : 0) - (void 0 !== tS ? tS : 0))
        }), Number.POSITIVE_INFINITY));
        let bS = SS.node(HS);
        tS !== Number.POSITIVE_INFINITY && bS.borderType !== NS && (XS[HS] = Math.max(void 0 !== XS[HS] ? XS[HS] : 0, tS))
      }), (function(SS) {
        return xS.successors(SS) || []
      })), Object.keys(tS).forEach((SS => {
        var HS;
        let tS = gS[SS];
        void 0 !== tS && (XS[SS] = null != (HS = XS[tS]) ? HS : 0)
      })), XS
    }

    function ug(SS, HS) {
      let gS, tS = MS(SS),
        bS = Object.assign(function(SS, HS) {
          let gS = {};
          return HS.length && HS.reduce((function(HS, tS) {
            let bS = 0,
              XS = 0,
              xS = HS.length,
              NS = tS[tS.length - 1];
            return tS.forEach(((HS, qS) => {
              let uS = function(SS, HS) {
                  if (SS.node(HS).dummy) {
                    let gS = SS.predecessors(HS);
                    if (gS) return gS.find((HS => SS.node(HS).dummy))
                  }
                }(SS, HS),
                IS = uS ? SS.node(uS).order : xS;
              (uS || HS === NS) && (tS.slice(XS, qS + 1).forEach((HS => {
                let tS = SS.predecessors(HS);
                tS && tS.forEach((tS => {
                  let XS = SS.node(tS),
                    xS = XS.order;
                  (xS < bS || IS < xS) && (!XS.dummy || !SS.node(HS).dummy) && xg(gS, tS, HS)
                }))
              })), XS = qS + 1, bS = IS)
            })), tS
          })), gS
        }(SS, tS), function(SS, HS) {
          let gS = {};

          function tS(HS, tS, bS, XS, xS) {
            SH(tS, bS).forEach((tS => {
              let bS = HS[tS];
              if (void 0 !== bS && SS.node(bS).dummy) {
                let HS = SS.predecessors(bS);
                HS && HS.forEach((HS => {
                  if (void 0 === HS) return;
                  let tS = SS.node(HS);
                  tS.dummy && (tS.order < XS || tS.order > xS) && xg(gS, HS, bS)
                }))
              }
            }))
          }
          return HS.length && HS.reduce((function(HS, gS) {
            let bS = -1,
              XS = -1,
              xS = 0;
            return gS.forEach(((NS, qS) => {
              if ("border" === SS.node(NS).dummy) {
                let HS = SS.predecessors(NS);
                if (HS && HS.length) {
                  let NS = HS[0];
                  if (void 0 === NS) return;
                  XS = SS.node(NS).order, tS(gS, xS, qS, bS, XS), xS = qS, bS = XS
                }
              }
              tS(gS, xS, gS.length, XS, HS.length)
            })), gS
          })), gS
        }(SS, tS)),
        XS = {};
      ["u", "d"].forEach((xS => {
        gS = "u" === xS ? tS : Object.values(tS).reverse(), ["l", "r"].forEach((tS => {
          "r" === tS && (gS = gS.map((SS => Object.values(SS).reverse())));
          let NS = function(SS, HS, gS, tS, bS) {
              let XS = {},
                xS = {},
                NS = {};
              return HS.forEach((SS => {
                SS.forEach(((SS, HS) => {
                  XS[SS] = SS, xS[SS] = SS, NS[SS] = HS
                }))
              })), HS.forEach((HS => {
                let qS = -1,
                  uS = -1,
                  IS = !1,
                  fS = HS,
                  kS = HS.findIndex((HS => (null == bS ? void 0 : bS.includes(HS)) || Ig(HS, SS, bS)));
                kS > 0 && (fS = [HS[kS], ...HS.slice(0, kS), ...HS.slice(kS + 1)], IS = !0), fS.forEach((HS => {
                  var fS;
                  let kS = tS(HS);
                  if (kS && kS.length) {
                    null != bS && bS.includes(HS) && (kS = kS.filter((HS => Ig(HS, SS, bS))));
                    let tS = kS.sort(((SS, HS) => {
                        let gS = NS[SS],
                          tS = NS[HS];
                        return (void 0 !== gS ? gS : 0) - (void 0 !== tS ? tS : 0)
                      })),
                      aS = (tS.length - 1) / 2;
                    for (let SS = Math.floor(aS), bS = Math.ceil(aS); SS <= bS; ++SS) {
                      let bS = tS[SS];
                      if (void 0 === bS) continue;
                      let kS = NS[bS];
                      if (void 0 !== kS && xS[HS] === HS && qS < kS && NS[bS] !== uS && !Ng(gS, HS, bS)) {
                        let SS = XS[bS];
                        void 0 !== SS && (xS[bS] = HS, xS[HS] = XS[HS] = SS, qS = kS, IS && (qS = -1, uS = null != (fS = NS[bS]) ? fS : -1, IS = !1))
                      }
                    }
                  }
                }))
              })), {
                root: XS,
                align: xS
              }
            }(SS, gS, bS, (HS => ("u" === xS ? SS.predecessors(HS) : SS.successors(HS)) || []), HS),
            qS = qg(SS, gS, NS.root, NS.align, "r" === tS);
          "r" === tS && (qS = gH(qS, (SS => -SS))), XS[xS + tS] = qS
        }))
      }));
      let xS = function(SS, HS) {
        return Object.values(HS).reduce(((HS, gS) => {
          let tS = Number.NEGATIVE_INFINITY,
            bS = Number.POSITIVE_INFINITY;
          Object.entries(gS).forEach((HS => {
            let [gS, XS] = HS, xS = function(SS, HS) {
              return SS.node(HS).width
            }(SS, gS) / 2;
            tS = Math.max(XS + xS, tS), bS = Math.min(XS - xS, bS)
          }));
          let XS = tS - bS;
          return XS < HS[0] && (HS = [XS, gS]), HS
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(SS, XS);
      return function(SS, HS) {
          let gS = Object.values(HS),
            tS = TS(Math.min, gS),
            bS = TS(Math.max, gS);
          ["u", "d"].forEach((gS => {
            ["l", "r"].forEach((XS => {
              let xS = gS + XS,
                NS = SS[xS];
              if (!NS || NS === HS) return;
              let qS = Object.values(NS),
                uS = tS - TS(Math.min, qS);
              "l" !== XS && (uS = bS - TS(Math.max, qS)), uS && (SS[xS] = gH(NS, (SS => SS + uS)))
            }))
          }))
        }(XS, xS),
        function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            gS = SS.ul;
          return gS ? gH(gS, ((gS, tS) => {
            var bS, XS;
            if (HS) {
              let gS = HS.toLowerCase(),
                bS = SS[gS];
              if (bS && void 0 !== bS[tS]) return bS[tS]
            }
            let xS = Object.values(SS).map((SS => {
              let HS = SS[tS];
              return void 0 !== HS ? HS : 0
            })).sort(((SS, HS) => SS - HS));
            return ((null != (bS = xS[1]) ? bS : 0) + (null != (XS = xS[2]) ? XS : 0)) / 2
          })) : {}
        }(XS, SS.graph().align)
    }

    function Ig(SS, HS, gS) {
      var tS;
      if (!gS) return !1;
      let bS = null == (tS = HS.node(SS)) ? void 0 : tS.edgeObj;
      if (!bS || HS.node(SS).edgeLabel.reversed) return !1;
      let XS = gS.indexOf(null == bS ? void 0 : bS.v),
        xS = gS.indexOf(null == bS ? void 0 : bS.w);
      return -1 !== XS && -1 !== xS && XS === (xS + 1) % gS.length || XS === (xS - 1) % gS.length
    }

    function fg(SS, HS) {
      (function(SS) {
        let HS = MS(SS),
          gS = SS.graph(),
          tS = gS.ranksep,
          bS = gS.rankalign,
          XS = 0;
        HS.forEach((HS => {
          let gS = HS.reduce(((HS, gS) => {
            var tS;
            let bS = null != (tS = SS.node(gS).height) ? tS : 0;
            return HS > bS ? HS : bS
          }), 0);
          HS.forEach((HS => {
            let tS = SS.node(HS);
            tS.y = "top" === bS ? XS + tS.height / 2 : "bottom" === bS ? XS + gS - tS.height / 2 : XS + gS / 2
          })), XS += gS + tS
        }))
      })(SS = sS(SS)), Object.entries(ug(SS, HS)).forEach((HS => {
        let [gS, tS] = HS;
        return SS.node(gS).x = tS
      }))
    }
    var kg = new WeakMap;

    function ag(SS) {
      return jg(SS, mS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), SS
    }

    function Kg(SS, HS, gS) {
      let tS = HS;
      for (; void 0 !== tS;) {
        let HS = SS.parent(tS);
        if (HS === gS) return tS;
        tS = HS
      }
    }

    function jg(SS, HS, gS) {
      var tS;
      let bS = SS.nodes().filter((HS => SS.children(HS).length)),
        XS = {};
      bS.forEach((tS => {
        let bS = SS.node(tS);
        if (bS && bS.rankdir) {
          let xS = new US({
            multigraph: !0,
            compound: !0
          });
          xS.setGraph({
            rankdir: bS.rankdir
          });
          let NS = SS.children(tS);
          NS.forEach((HS => {
            let gS = {
              ...SS.node(HS)
            };
            xS.setNode(HS, gS);
            let bS = SS.parent(HS);
            bS && bS !== tS && NS.includes(bS) && xS.setParent(HS, bS)
          }));
          let qS = new Set;
          SS.edges().forEach((HS => {
            let gS = Kg(SS, HS.v, tS),
              bS = Kg(SS, HS.w, tS);
            if (gS && bS && gS !== bS) {
              let tS = `${gS}\0${bS}`;
              qS.has(tS) || (qS.add(tS), xS.setEdge(gS, bS, {
                ...SS.edge(HS)
              }))
            }
          })), jg(xS, HS, gS);
          let uS = Og(xS);
          Gg(uS, HS, gS, null), Cg(xS, uS);
          let IS = 1 / 0,
            fS = 1 / 0,
            kS = -1 / 0,
            aS = -1 / 0;
          xS.nodes().forEach((SS => {
            if (SS === tS) return;
            let HS = xS.node(SS);
            HS && "number" == typeof HS.x && "number" == typeof HS.y && "number" == typeof HS.width && "number" == typeof HS.height && (IS = Math.min(IS, HS.x - HS.width / 2), kS = Math.max(kS, HS.x + HS.width / 2), fS = Math.min(fS, HS.y - HS.height / 2), aS = Math.max(aS, HS.y + HS.height / 2))
          })), (!isFinite(IS) || !isFinite(fS) || !isFinite(kS) || !isFinite(aS)) && (IS = fS = 0, kS = aS = 0);
          let KS = kS - IS,
            jS = aS - fS;
          XS[tS] = {
            minX: IS,
            NS: fS,
            maxX: kS,
            qS: aS,
            width: KS,
            height: jS,
            offsetX: IS,
            offsetY: fS
          }, bS._dagreClusterSubgraph = xS
        }
      }));
      let xS = [],
        NS = new Map;
      bS.forEach((HS => {
        let gS = SS.node(HS);
        gS && gS.rankdir && XS[HS] && NS.set(HS, (SS.children(HS) || []).filter((SS => SS !== HS)))
      }));
      let qS = new Set([...NS.values()].flat()),
        uS = new Map;
      NS.forEach(((HS, gS) => {
        qS.has(gS) || uS.set(gS, (HS => {
          let gS = [],
            tS = (SS.children(HS) || []).filter((SS => SS !== HS));
          for (; tS.length > 0;) {
            let HS = tS.shift();
            gS.push(HS), (SS.children(HS) || []).filter((SS => SS !== HS)).forEach((SS => tS.push(SS)))
          }
          return gS
        })(gS))
      }));
      let IS = new Set([...uS.values()].flat()),
        fS = SS => {
          for (let [HS, gS] of uS)
            if (gS.includes(SS)) return HS;
          return SS
        },
        kS = [];
      SS.edges().forEach((HS => {
        (IS.has(HS.v) || IS.has(HS.w)) && kS.push({
          edge: HS,
          label: SS.edge(HS)
        })
      }));
      let aS = new Map;
      IS.forEach((HS => {
        let gS = SS.parent(HS);
        aS.set(HS, "string" == typeof gS ? gS : void 0)
      })), uS.forEach(((HS, gS) => {
        let tS = SS.node(gS),
          bS = [];
        HS.forEach((HS => {
          let gS = SS.node(HS);
          gS && (bS.push({
            id: HS,
            node: gS,
            parent: aS.get(HS)
          }), SS.removeNode(HS))
        }));
        let NS = kS.filter((SS => {
            let {
              edge: gS
            } = SS;
            return HS.includes(gS.v) || HS.includes(gS.w)
          })),
          qS = XS[gS];
        tS && (xS.push({
          clusterId: gS,
          subgraph: tS._dagreClusterSubgraph,
          bounds: qS,
          children: HS,
          removedNodes: bS,
          removedEdges: NS
        }), tS.width = qS.width, tS.height = qS.height)
      }));
      let KS = new Set;
      kS.forEach((HS => {
        let {
          edge: gS,
          label: tS
        } = HS, bS = fS(gS.v), XS = fS(gS.w);
        if (bS !== XS && SS.hasNode(bS) && SS.hasNode(XS)) {
          let HS = `${bS}\0${XS}`;
          KS.has(HS) || (KS.add(HS), SS.setEdge(bS, XS, {
            ...tS,
            width: 0,
            height: 0
          }))
        }
      }));
      let jS = Og(SS),
        GS = Gg(jS, HS, gS, null != (tS = kg.get(SS)) ? tS : null);
      kg.set(SS, GS), Cg(SS, jS), KS.forEach((HS => {
        let gS = HS.indexOf("\0"),
          tS = HS.slice(0, gS),
          bS = HS.slice(gS + 1);
        SS.hasEdge(tS, bS) && SS.removeEdge(tS, bS)
      })), xS.forEach((HS => {
        let {
          clusterId: gS,
          subgraph: tS,
          bounds: bS,
          removedNodes: XS,
          removedEdges: xS
        } = HS;
        var NS, qS;
        let uS = SS.node(gS),
          IS = null != (NS = null == uS ? void 0 : uS.x) ? NS : 0,
          fS = null != (qS = null == uS ? void 0 : uS.y) ? qS : 0,
          kS = (bS.minX + bS.maxX) / 2,
          aS = (bS.NS + bS.qS) / 2;
        XS.forEach((HS => {
          let {
            id: gS,
            node: tS,
            parent: bS
          } = HS;
          SS.setNode(gS, tS), void 0 !== bS && SS.setParent(gS, bS)
        })), xS.forEach((HS => {
          let {
            edge: gS,
            label: tS
          } = HS;
          SS.setEdge(gS, tS)
        })), tS.nodes().forEach((HS => {
          if (HS === gS) return;
          let bS = tS.node(HS),
            XS = SS.node(HS);
          XS && bS && "number" == typeof bS.x && "number" == typeof bS.y && (XS.x = IS + (bS.x - kS), XS.y = fS + (bS.y - aS))
        })), delete uS._dagreClusterSubgraph
      })), bS.forEach((HS => {
        var gS, tS;
        let bS = SS.node(HS),
          xS = XS[HS];
        if (bS && bS.rankdir && bS._dagreClusterSubgraph && xS) {
          let XS = bS._dagreClusterSubgraph,
            NS = null != (gS = bS.x) ? gS : 0,
            qS = null != (tS = bS.y) ? tS : 0,
            uS = (xS.minX + xS.maxX) / 2,
            IS = (xS.NS + xS.qS) / 2;
          XS.nodes().forEach((gS => {
            if (gS === HS) return;
            let tS = XS.node(gS),
              bS = SS.node(gS);
            if (bS && tS && "number" == typeof tS.x && "number" == typeof tS.y) {
              let SS = tS.x - uS,
                HS = tS.y - IS;
              bS.x = NS + SS, bS.y = qS + HS
            }
          })), delete bS._dagreClusterSubgraph
        }
      }))
    }

    function Gg(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var bS, XS;
      let xS = !1 !== (null == gS ? void 0 : gS.useDynamic),
        NS = xS && null != (bS = null == tS ? void 0 : tS.graph) ? bS : null,
        qS = xS && null != (XS = null == tS ? void 0 : tS.rawNodes) ? XS : null;
      HS("    makeSpaceForEdgeLabels", (() => function(SS) {
        let HS = SS.graph();
        HS.ranksep /= 2, SS.edges().forEach((gS => {
          var tS;
          let bS = SS.edge(gS);
          bS.minlen *= 2, "c" !== (null != (tS = bS.labelpos) ? tS : "r").toLowerCase() && ("TB" === HS.rankdir || "BT" === HS.rankdir ? bS.width += bS.labeloffset : bS.height += bS.labeloffset)
        }))
      }(SS))), HS("    removeSelfEdges", (() => function(SS) {
        SS.edges().forEach((HS => {
          if (HS.v === HS.w) {
            let gS = SS.node(HS.v);
            gS.selfEdges || (gS.selfEdges = []), gS.selfEdges.push({
              e: HS,
              label: SS.edge(HS)
            }), SS.removeEdge(HS)
          }
        }))
      }(SS))), HS("    acyclic", (() => aH(SS, NS))), HS("    nestingGraph.run", (() => WH(SS))), HS("    rank", (() => AH(sS(SS)))), HS("    injectEdgeLabelProxies", (() => function(SS) {
        SS.edges().forEach((HS => {
          let gS = SS.edge(HS);
          if (gS.width && gS.height) {
            let gS = SS.node(HS.v),
              tS = {
                rank: (SS.node(HS.w).rank - gS.rank) / 2 + gS.rank,
                e: HS
              };
            pS(SS, "edge-proxy", tS, "_ep")
          }
        }))
      }(SS))), HS("    removeEmptyRanks", (() => function(SS) {
        let HS = SS.nodes().map((HS => SS.node(HS).rank)).filter((SS => void 0 !== SS)),
          gS = TS(Math.min, HS),
          tS = [];
        SS.nodes().forEach((HS => {
          let bS = SS.node(HS).rank - gS;
          tS[bS] || (tS[bS] = []), tS[bS].push(HS)
        }));
        let bS = 0,
          XS = SS.graph().nodeRankFactor;
        Array.from(tS).forEach(((HS, gS) => {
          void 0 === HS && gS % XS !== 0 ? --bS : void 0 !== HS && bS && HS.forEach((HS => SS.node(HS).rank += bS))
        }))
      }(SS))), HS("    nestingGraph.cleanup", (() => function(SS) {
        let HS = SS.graph();
        SS.removeNode(HS.nestingRoot), delete HS.nestingRoot, SS.edges().forEach((HS => {
          SS.edge(HS).nestingEdge && SS.removeEdge(HS)
        }))
      }(SS))), HS("    normalizeRanks", (() => function(SS) {
        let HS = SS.nodes().map((HS => {
            let gS = SS.node(HS).rank;
            return void 0 === gS ? Number.MAX_VALUE : gS
          })),
          gS = TS(Math.min, HS);
        SS.nodes().forEach((HS => {
          let tS = SS.node(HS);
          Object.hasOwn(tS, "rank") && (tS.rank -= gS)
        }))
      }(SS))), HS("    assignRankMinMax", (() => function(SS) {
        let HS = 0;
        SS.nodes().forEach((gS => {
          let tS = SS.node(gS);
          tS.borderTop && (tS.minRank = SS.node(tS.borderTop).rank, tS.maxRank = SS.node(tS.borderBottom).rank, HS = Math.max(HS, tS.maxRank))
        })), SS.graph().maxRank = HS
      }(SS))), HS("    removeEdgeLabelProxies", (() => function(SS) {
        SS.nodes().forEach((HS => {
          let gS = SS.node(HS);
          if ("edge-proxy" === gS.dummy) {
            let tS = gS;
            SS.edge(tS.e).labelRank = gS.rank, SS.removeNode(HS)
          }
        }))
      }(SS))), HS("    normalize.run", (() => KH(SS))), HS("    parentDummyChains", (() => iH(SS))), HS("    addBorderSegments", (() => UH(SS))), HS("    order", (() => gg(SS, gS, qS))), HS("    insertSelfEdges", (() => function(SS) {
        MS(SS).forEach((HS => {
          let gS = 0;
          HS.forEach(((HS, tS) => {
            let bS = SS.node(HS);
            "number" != typeof bS.rank && (bS.rank = 0), bS.order = tS + gS, (bS.selfEdges || []).forEach((HS => {
              pS(SS, "selfedge", {
                width: HS.label.width,
                height: HS.label.height,
                rank: bS.rank,
                order: tS + ++gS,
                e: HS.e,
                edgeLabel: HS.label
              }, "_se"), (!Array.isArray(HS.label.points) || 7 !== HS.label.points.length) && (HS.label.points = [{
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
            })), delete bS.selfEdges
          }))
        }))
      }(SS))), HS("    adjustCoordinateSystem", (() => function(SS) {
        var HS;
        let gS = null == (HS = SS.graph().rankdir) ? void 0 : HS.toLowerCase();
        ("lr" === gS || "rl" === gS) && BH(SS)
      }(SS))), HS("    position", (() => fg(SS, gS.corePath))), HS("    positionSelfEdges", (() => function(SS) {
        SS.nodes().forEach((HS => {
          let gS = SS.node(HS),
            tS = SS => "number" == typeof SS && isFinite(SS);
          if ("selfedge" === gS.dummy) {
            let bS = gS,
              XS = SS.node(bS.e.v),
              xS = tS(null == XS ? void 0 : XS.x) ? XS.x : 0,
              NS = tS(null == XS ? void 0 : XS.y) ? XS.y : 0,
              qS = tS(null == XS ? void 0 : XS.width) ? XS.width : 0,
              uS = tS(null == XS ? void 0 : XS.height) ? XS.height : 0,
              IS = tS(gS.x) ? gS.x : xS,
              fS = tS(gS.y) ? gS.y : NS,
              kS = qS / 2,
              aS = uS / 2;
            bS.edgeLabel.points = [{
              x: IS + kS,
              y: fS - aS
            }, {
              x: IS + kS,
              y: fS - aS
            }, {
              x: IS,
              y: fS
            }, {
              x: IS - kS,
              y: fS + aS
            }, {
              x: IS - kS,
              y: fS + aS
            }, {
              x: IS,
              y: fS
            }, {
              x: IS,
              y: fS
            }], bS.edgeLabel.x = IS, bS.edgeLabel.y = fS, SS.setEdge(bS.e, bS.edgeLabel), SS.removeNode(HS)
          } else gS && Array.isArray(gS.selfEdges) && gS.selfEdges.forEach((SS => {
            if (!Array.isArray(SS.label.points) || 7 !== SS.label.points.length) {
              let HS = tS(gS.x) ? gS.x : 0,
                bS = tS(gS.y) ? gS.y : 0,
                XS = (tS(gS.width) ? gS.width : 0) / 2,
                xS = (tS(gS.height) ? gS.height : 0) / 2;
              SS.label.points = [{
                x: HS + XS,
                y: bS - xS
              }, {
                x: HS + XS,
                y: bS - xS
              }, {
                x: HS,
                y: bS
              }, {
                x: HS - XS,
                y: bS + xS
              }, {
                x: HS - XS,
                y: bS + xS
              }, {
                x: HS,
                y: bS
              }, {
                x: HS,
                y: bS
              }]
            }
          }))
        }))
      }(SS)));
      let uS = JSON.parse(JSON.stringify(SS._nodes));
      return HS("    removeBorderNodes", (() => function(SS) {
        SS.nodes().forEach((HS => {
          if (SS.children(HS).length) {
            let gS = SS.node(HS),
              tS = SS.node(gS.borderTop),
              bS = SS.node(gS.borderBottom),
              XS = SS.node(gS.borderLeft[gS.borderLeft.length - 1]),
              xS = SS.node(gS.borderRight[gS.borderRight.length - 1]);
            gS.width = Math.abs(xS.x - XS.x), gS.height = Math.abs(bS.y - tS.y), gS.x = XS.x + gS.width / 2, gS.y = tS.y + gS.height / 2
          }
        })), SS.nodes().forEach((HS => {
          "border" === SS.node(HS).dummy && SS.removeNode(HS)
        }))
      }(SS))), HS("    normalize.undo", (() => function(SS) {
        SS.graph().dummyChains.forEach((HS => {
          let gS, tS = SS.node(HS),
            bS = tS.edgeLabel;
          for (SS.setEdge(tS.edgeObj, bS); tS.dummy;) gS = SS.successors(HS)[0], SS.removeNode(HS), bS.points.push({
            x: tS.x,
            y: tS.y
          }), "edge-label" === tS.dummy && (bS.x = tS.x, bS.y = tS.y, bS.width = tS.width, bS.height = tS.height), HS = gS, tS = SS.node(HS)
        }))
      }(SS))), HS("    fixupEdgeLabelCoords", (() => function(SS) {
        SS.edges().forEach((HS => {
          let gS = SS.edge(HS);
          if (Object.hasOwn(gS, "x")) switch (("l" === gS.labelpos || "r" === gS.labelpos) && (gS.width -= gS.labeloffset), gS.labelpos) {
            case "l":
              gS.x -= gS.width / 2 + gS.labeloffset;
              break;
            case "r":
              gS.x += gS.width / 2 + gS.labeloffset
          }
        }))
      }(SS))), HS("    undoCoordinateSystem", (() => sH(SS))), HS("    translateGraph", (() => function(SS) {
        let HS = Number.POSITIVE_INFINITY,
          gS = 0,
          tS = Number.POSITIVE_INFINITY,
          bS = 0,
          XS = SS.graph(),
          xS = XS.marginx || 0,
          NS = XS.marginy || 0;

        function qS(SS) {
          let XS = SS.x,
            xS = SS.y,
            NS = SS.width,
            qS = SS.height;
          HS = Math.min(HS, XS - NS / 2), gS = Math.max(gS, XS + NS / 2), tS = Math.min(tS, xS - qS / 2), bS = Math.max(bS, xS + qS / 2)
        }
        SS.nodes().forEach((HS => qS(SS.node(HS)))), SS.edges().forEach((HS => {
          let gS = SS.edge(HS);
          Object.hasOwn(gS, "x") && qS(gS)
        })), HS -= xS, tS -= NS, SS.nodes().forEach((gS => {
          let bS = SS.node(gS);
          bS.x -= HS, bS.y -= tS
        })), SS.edges().forEach((gS => {
          let bS = SS.edge(gS);
          bS.points.forEach((SS => {
            SS.x -= HS, SS.y -= tS
          })), Object.hasOwn(bS, "x") && (bS.x -= HS), Object.hasOwn(bS, "y") && (bS.y -= tS)
        })), XS.width = gS - HS + xS, XS.height = bS - tS + NS
      }(SS))), HS("    assignNodeIntersects", (() => function(SS) {
        SS.edges().forEach((HS => {
          if (HS.v === HS.w) return;
          let gS, tS, bS = SS.edge(HS),
            XS = SS.node(HS.v),
            xS = SS.node(HS.w);
          bS.points ? (gS = bS.points[0], tS = bS.points[bS.points.length - 1]) : (bS.points = [], gS = xS, tS = XS), bS.points.unshift(BS(XS, gS)), bS.points.push(BS(xS, tS))
        }))
      }(SS))), HS("    reversePoints", (() => function(SS) {
        SS.edges().forEach((HS => {
          let gS = SS.edge(HS);
          gS.reversed && gS.points.reverse()
        }))
      }(SS))), HS("    acyclic.undo", (() => function(SS) {
        SS.edges().forEach((HS => {
          let gS = SS.edge(HS);
          if (gS.reversed) {
            SS.removeEdge(HS);
            let tS = gS.forwardName;
            delete gS.reversed, delete gS.forwardName, SS.setEdge(HS.w, HS.v, gS, tS)
          }
        }))
      }(SS))), {
        graph: SS,
        rawNodes: uS
      }
    }

    function Cg(SS, HS) {
      SS.nodes().forEach((gS => {
        let tS = SS.node(gS),
          bS = HS.node(gS);
        tS && (tS.x = bS.x, tS.y = bS.y, tS.order = bS.order, tS.rank = bS.rank, HS.children(gS).length && (tS.width = bS.width, tS.height = bS.height))
      })), SS.edges().forEach((gS => {
        let tS = SS.edge(gS),
          bS = HS.edge(gS);
        tS.points = bS.points, Object.hasOwn(bS, "x") && (tS.x = bS.x, tS.y = bS.y)
      })), SS.graph().width = HS.graph().width, SS.graph().height = HS.graph().height
    }
    var ng = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Pg = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Qg = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Dg = ["width", "height", "rank"],
      wg = {
        width: 0,
        height: 0
      },
      hg = ["minlen", "weight", "width", "height", "labeloffset"],
      Zg = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Jg = ["labelpos"];

    function Og(SS) {
      let HS = new US({
          multigraph: !0,
          compound: !0
        }),
        gS = cg(SS.graph());
      return HS.setGraph(Object.assign({}, Pg, dg(gS, ng), HH(gS, Qg))), SS.nodes().forEach((gS => {
        let tS = dg(cg(SS.node(gS)), Dg);
        Object.keys(wg).forEach((SS => {
          void 0 === tS[SS] && (tS[SS] = wg[SS])
        })), HS.setNode(gS, tS);
        let bS = SS.parent(gS);
        void 0 !== bS && HS.setParent(gS, bS)
      })), SS.edges().forEach((gS => {
        let tS = cg(SS.edge(gS));
        HS.setEdge(gS, Object.assign({}, Zg, dg(tS, hg), HH(tS, Jg)))
      })), HS
    }

    function dg(SS, HS) {
      return gH(HH(SS, HS), Number)
    }

    function cg(SS) {
      let HS = {};
      return SS && Object.entries(SS).forEach((SS => {
        let [gS, tS] = SS;
        "string" == typeof gS && (gS = gS.toLowerCase()), HS[gS] = tS
      })), HS
    }

    function vg(SS) {
      let HS = MS(SS),
        gS = new US({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return SS.nodes().forEach((HS => {
        gS.setNode(HS, {
          label: HS
        }), gS.setParent(HS, "layer" + SS.node(HS).rank)
      })), SS.edges().forEach((SS => gS.setEdge(SS.v, SS.w, {}, SS.name))), HS.forEach(((SS, HS) => {
        let tS = "layer" + HS;
        gS.setNode(tS, {
          rank: "same"
        }), SS.reduce(((SS, HS) => (gS.setEdge(SS, HS, {
          style: "invis"
        }), HS)))
      })), gS
    }
    var Eg = {
        time: lS,
        notime: mS
      },
      Lg = {
        graphlib: XS,
        version: XH,
        layout: ag,
        debug: vg,
        util: {
          time: lS,
          notime: mS
        }
      }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);