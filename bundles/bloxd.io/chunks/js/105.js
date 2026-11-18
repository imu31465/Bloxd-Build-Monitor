/*! For license information please see l9xvfg.105.1cc93717.chunk.js.LICENSE.txt */
export const id = 105;
export const ids = [105];
export const modules = {
  5798: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Graph: () => ZB,
      debug: () => Kd,
      default: () => Id,
      graphlib: () => pB,
      layout: () => Od,
      util: () => rd,
      version: () => pT
    });
    var VB = Object.defineProperty,
      yB = (BB, TB, dB) => ((BB, TB, dB) => TB in BB ? VB(BB, TB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: dB
      }) : BB[TB] = dB)(BB, "symbol" != typeof TB ? TB + "" : TB, dB),
      pB = {};
    ((BB, TB) => {
      for (var dB in TB) VB(BB, dB, {
        get: TB[dB],
        enumerable: !0
      })
    })(pB, {
      Graph: () => ZB,
      alg: () => EB
    });
    var lB = Object.defineProperty,
      JB = (BB, TB) => {
        for (var dB in TB) lB(BB, dB, {
          get: TB[dB],
          enumerable: !0
        })
      },
      YB = class {
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
        setNodes(BB, TB) {
          return BB.forEach((BB => {
            void 0 !== TB ? this.setNode(BB, TB) : this.setNode(BB)
          })), this
        }
        setNode(BB, TB) {
          return BB in this._nodes ? (arguments.length > 1 && (this._nodes[BB] = TB), this) : (this._nodes[BB] = arguments.length > 1 ? TB : this._defaultNodeLabelFn(BB), this._isCompound && (this._parent[BB] = "\0", this._children[BB] = {}, this._children["\0"][BB] = !0), this._in[BB] = {}, this._preds[BB] = {}, this._out[BB] = {}, this._sucs[BB] = {}, ++this._nodeCount, this)
        }
        node(BB) {
          return this._nodes[BB]
        }
        hasNode(BB) {
          return BB in this._nodes
        }
        removeNode(BB) {
          if (BB in this._nodes) {
            let TB = BB => this.removeEdge(this._edgeObjs[BB]);
            delete this._nodes[BB], this._isCompound && (this._removeFromParentsChildList(BB), delete this._parent[BB], this.children(BB).forEach((BB => {
              this.setParent(BB)
            })), delete this._children[BB]), Object.keys(this._in[BB]).forEach(TB), delete this._in[BB], delete this._preds[BB], Object.keys(this._out[BB]).forEach(TB), delete this._out[BB], delete this._sucs[BB], --this._nodeCount
          }
          return this
        }
        setParent(BB, TB) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === TB) TB = "\0";
          else {
            for (let dB = TB += ""; void 0 !== dB; dB = this.parent(dB))
              if (dB === BB) throw new Error("Setting " + TB + " as parent of " + BB + " would create a cycle");
            this.setNode(TB)
          }
          return this.setNode(BB), this._removeFromParentsChildList(BB), this._parent[BB] = TB, this._children[TB][BB] = !0, this
        }
        parent(BB) {
          if (this._isCompound) {
            let TB = this._parent[BB];
            if ("\0" !== TB) return TB
          }
        }
        children() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let TB = this._children[BB];
            if (TB) return Object.keys(TB)
          } else {
            if ("\0" === BB) return this.nodes();
            if (this.hasNode(BB)) return []
          }
          return []
        }
        predecessors(BB) {
          let TB = this._preds[BB];
          if (TB) return Object.keys(TB)
        }
        successors(BB) {
          let TB = this._sucs[BB];
          if (TB) return Object.keys(TB)
        }
        neighbors(BB) {
          let TB = this.predecessors(BB);
          if (TB) {
            let dB = new Set(TB),
              VB = this.successors(BB);
            if (VB)
              for (let BB of VB) dB.add(BB);
            return Array.from(dB.values())
          }
        }
        isLeaf(BB) {
          var TB;
          let dB;
          return dB = this.isDirected() ? this.successors(BB) : this.neighbors(BB), 0 === (null != (TB = null == dB ? void 0 : dB.length) ? TB : 0)
        }
        filterNodes(BB) {
          let TB = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          TB.setGraph(this.graph()), Object.entries(this._nodes).forEach((dB => {
            let [VB, yB] = dB;
            BB(VB) && TB.setNode(VB, yB)
          })), Object.values(this._edgeObjs).forEach((BB => {
            TB.hasNode(BB.v) && TB.hasNode(BB.w) && TB.setEdge(BB, this.edge(BB))
          }));
          let dB = {},
            VB = BB => {
              let yB = this.parent(BB);
              return !yB || TB.hasNode(yB) ? (dB[BB] = yB, yB) : yB in dB ? dB[yB] : VB(yB)
            };
          return this._isCompound && TB.nodes().forEach((BB => TB.setParent(BB, VB(BB)))), TB
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
        setPath(BB, TB) {
          return BB.reduce(((BB, dB) => (void 0 !== TB ? this.setEdge(BB, dB, TB) : this.setEdge(BB, dB), dB))), this
        }
        setEdge(BB, TB, dB, VB) {
          let yB, pB, lB, JB, YB = !1;
          "object" == typeof BB && null !== BB && "v" in BB ? (yB = BB.v, pB = BB.w, lB = BB.name, 2 === arguments.length && (JB = TB, YB = !0)) : (yB = BB, pB = TB, lB = VB, arguments.length > 2 && (JB = dB, YB = !0)), yB = "" + yB, pB = "" + pB, void 0 !== lB && (lB = "" + lB);
          let oB = kB(this._isDirected, yB, pB, lB);
          if (oB in this._edgeLabels) return YB && (this._edgeLabels[oB] = JB), this;
          if (void 0 !== lB && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(yB), this.setNode(pB), this._edgeLabels[oB] = YB ? JB : this._defaultEdgeLabelFn(yB, pB, lB);
          let LB = function(BB, TB, dB, VB) {
            let yB = "" + TB,
              pB = "" + dB;
            if (!BB && yB > pB) {
              let BB = yB;
              yB = pB, pB = BB
            }
            let lB = {
              v: yB,
              w: pB
            };
            return VB && (lB.name = VB), lB
          }(this._isDirected, yB, pB, lB);
          return yB = LB.v, pB = LB.w, Object.freeze(LB), this._edgeObjs[oB] = LB, gB(this._preds[pB], yB), gB(this._sucs[yB], pB), this._in[pB][oB] = LB, this._out[yB][oB] = LB, this._edgeCount++, this
        }
        edge(BB, TB, dB) {
          let VB = 1 === arguments.length ? LB(this._isDirected, BB) : kB(this._isDirected, BB, TB, dB);
          return this._edgeLabels[VB]
        }
        edgeAsObj(BB, TB, dB) {
          let VB = 1 === arguments.length ? this.edge(BB) : this.edge(BB, TB, dB);
          return "object" != typeof VB || null === VB ? {
            label: VB
          } : VB
        }
        hasEdge(BB, TB, dB) {
          return (1 === arguments.length ? LB(this._isDirected, BB) : kB(this._isDirected, BB, TB, dB)) in this._edgeLabels
        }
        removeEdge(BB, TB, dB) {
          let VB = 1 === arguments.length ? LB(this._isDirected, BB) : kB(this._isDirected, BB, TB, dB),
            yB = this._edgeObjs[VB];
          if (yB) {
            let BB = yB.v,
              TB = yB.w;
            delete this._edgeLabels[VB], delete this._edgeObjs[VB], oB(this._preds[TB], BB), oB(this._sucs[BB], TB), delete this._in[TB][VB], delete this._out[BB][VB], this._edgeCount--
          }
          return this
        }
        inEdges(BB, TB) {
          return this.isDirected() ? this.filterEdges(this._in[BB], BB, TB) : this.nodeEdges(BB, TB)
        }
        outEdges(BB, TB) {
          return this.isDirected() ? this.filterEdges(this._out[BB], BB, TB) : this.nodeEdges(BB, TB)
        }
        nodeEdges(BB, TB) {
          if (BB in this._nodes) return this.filterEdges({
            ...this._in[BB],
            ...this._out[BB]
          }, BB, TB)
        }
        _removeFromParentsChildList(BB) {
          delete this._children[this._parent[BB]][BB]
        }
        filterEdges(BB, TB, dB) {
          if (!BB) return;
          let VB = Object.values(BB);
          return dB ? VB.filter((BB => BB.v === TB && BB.w === dB || BB.v === dB && BB.w === TB)) : VB
        }
      };

    function gB(BB, TB) {
      BB[TB] ? BB[TB]++ : BB[TB] = 1
    }

    function oB(BB, TB) {
      void 0 !== BB[TB] && !--BB[TB] && delete BB[TB]
    }

    function kB(BB, TB, dB, VB) {
      let yB = "" + TB,
        pB = "" + dB;
      if (!BB && yB > pB) {
        let BB = yB;
        yB = pB, pB = BB
      }
      return yB + "\x01" + pB + "\x01" + (void 0 === VB ? "\0" : VB)
    }

    function LB(BB, TB) {
      return kB(BB, TB.v, TB.w, TB.name)
    }

    function OB(BB) {
      let TB = {
          options: {
            directed: BB.isDirected(),
            multigraph: BB.isMultigraph(),
            compound: BB.isCompound()
          },
          nodes: DB(BB),
          edges: uB(BB)
        },
        dB = BB.graph();
      return void 0 !== dB && (TB.value = structuredClone(dB)), TB
    }

    function DB(BB) {
      return BB.nodes().map((TB => {
        let dB = BB.node(TB),
          VB = BB.parent(TB),
          yB = {
            v: TB
          };
        return void 0 !== dB && (yB.value = dB), void 0 !== VB && (yB.parent = VB), yB
      }))
    }

    function uB(BB) {
      return BB.edges().map((TB => {
        let dB = BB.edge(TB),
          VB = {
            v: TB.v,
            w: TB.w
          };
        return void 0 !== TB.name && (VB.name = TB.name), void 0 !== dB && (VB.value = dB), VB
      }))
    }

    function HB(BB) {
      let TB = new YB(BB.options);
      return void 0 !== BB.value && TB.setGraph(BB.value), BB.nodes.forEach((BB => {
        TB.setNode(BB.v, BB.value), BB.parent && TB.setParent(BB.v, BB.parent)
      })), BB.edges.forEach((BB => {
        TB.setEdge({
          v: BB.v,
          w: BB.w,
          name: BB.name
        }, BB.value)
      })), TB
    }
    JB({}, {
      read: () => HB,
      write: () => OB
    });
    var EB = {};
    JB(EB, {
      CycleException: () => FB,
      bellmanFord: () => mB,
      components: () => iB,
      dijkstra: () => fB,
      dijkstraAll: () => sB,
      findCycles: () => zB,
      floydWarshall: () => UB,
      isAcyclic: () => rB,
      postorder: () => PB,
      preorder: () => QB,
      prim: () => RB,
      shortestPaths: () => aB,
      tarjan: () => MB,
      topsort: () => KB
    });
    var vB = () => 1;

    function mB(BB, TB, dB, VB) {
      return function(BB, TB, dB, VB) {
        let yB, pB = {},
          lB = 0,
          JB = BB.nodes(),
          YB = function(BB) {
            let TB = pB[BB.v],
              VB = pB[BB.w];
            if (!TB || !VB) return;
            let lB = dB(BB);
            TB.distance + lB < VB.distance && (pB[BB.w] = {
              distance: TB.distance + lB,
              predecessor: BB.v
            }, yB = !0)
          },
          gB = function() {
            JB.forEach((function(BB) {
              VB(BB).forEach((function(TB) {
                let dB = TB.v === BB ? TB.v : TB.w,
                  VB = dB === TB.v ? TB.w : TB.v;
                YB({
                  v: dB,
                  w: VB
                })
              }))
            }))
          };
        JB.forEach((function(BB) {
          let dB = BB === TB ? 0 : Number.POSITIVE_INFINITY;
          pB[BB] = {
            distance: dB,
            predecessor: ""
          }
        }));
        let oB = JB.length;
        for (let kB = 1; kB < oB && (yB = !1, lB++, gB(), yB); kB++);
        if (lB === oB - 1 && (yB = !1, gB(), yB)) throw new Error("The graph contains a negative weight cycle");
        return pB
      }(BB, String(TB), dB || vB, VB || function(TB) {
        var dB;
        return null != (dB = BB.outEdges(TB)) ? dB : []
      })
    }

    function iB(BB) {
      let TB, dB = {},
        VB = [];

      function yB(VB) {
        var pB, lB;
        VB in dB || (dB[VB] = !0, TB.push(VB), null == (pB = BB.successors(VB)) || pB.forEach(yB), null == (lB = BB.predecessors(VB)) || lB.forEach(yB))
      }
      return BB.nodes().forEach((function(BB) {
        TB = [], yB(BB), TB.length && VB.push(TB)
      })), VB
    }
    var NB = class {
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
          let TB = this._keyIndices[BB];
          if (void 0 !== TB) return this._arr[TB].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(BB, TB) {
          let dB = this._keyIndices,
            VB = String(BB);
          if (!(VB in dB)) {
            let BB = this._arr,
              yB = BB.length;
            return dB[VB] = yB, BB.push({
              key: VB,
              priority: TB
            }), this._decrease(yB), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let BB = this._arr.pop();
          return delete this._keyIndices[BB.key], this._heapify(0), BB.key
        }
        decrease(BB, TB) {
          let dB = this._keyIndices[BB];
          if (void 0 === dB) throw new Error(`Key not found: ${BB}`);
          let VB = this._arr[dB].priority;
          if (TB > VB) throw new Error(`New priority is greater than current priority. Key: ${BB} Old: ${VB} New: ${TB}`);
          this._arr[dB].priority = TB, this._decrease(dB)
        }
        _heapify(BB) {
          let TB = this._arr,
            dB = 2 * BB,
            VB = dB + 1,
            yB = BB;
          dB < TB.length && (yB = TB[dB].priority < TB[yB].priority ? dB : yB, VB < TB.length && (yB = TB[VB].priority < TB[yB].priority ? VB : yB), yB !== BB && (this._swap(BB, yB), this._heapify(yB)))
        }
        _decrease(BB) {
          let TB, dB = this._arr,
            VB = dB[BB].priority;
          for (; 0 !== BB && (TB = BB >> 1, !(dB[TB].priority < VB));) this._swap(BB, TB), BB = TB
        }
        _swap(BB, TB) {
          let dB = this._arr,
            VB = this._keyIndices,
            yB = dB[BB],
            pB = dB[TB];
          dB[BB] = pB, dB[TB] = yB, VB[pB.key] = BB, VB[yB.key] = TB
        }
      },
      tB = () => 1;

    function fB(BB, TB, dB, VB) {
      return function(BB, TB, dB, VB) {
        let yB, pB, lB = {},
          JB = new NB,
          YB = function(BB) {
            let TB = BB.v !== yB ? BB.v : BB.w,
              VB = lB[TB];
            if (!VB) return;
            let YB = dB(BB),
              gB = pB.distance + YB;
            if (YB < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + BB + " Weight: " + YB);
            gB < VB.distance && (VB.distance = gB, VB.predecessor = yB, JB.decrease(TB, gB))
          };
        for (BB.nodes().forEach((function(BB) {
            let dB = BB === TB ? 0 : Number.POSITIVE_INFINITY;
            lB[BB] = {
              distance: dB,
              predecessor: ""
            }, JB.add(BB, dB)
          })); JB.size() > 0;) {
          yB = JB.removeMin();
          let BB = lB[yB];
          if (!BB || BB.distance === Number.POSITIVE_INFINITY) break;
          pB = BB, VB(yB).forEach(YB)
        }
        return lB
      }(BB, String(TB), dB || tB, VB || function(TB) {
        var dB;
        return null != (dB = BB.outEdges(TB)) ? dB : []
      })
    }

    function sB(BB, TB, dB) {
      return BB.nodes().reduce((function(VB, yB) {
        return VB[yB] = fB(BB, yB, TB, dB), VB
      }), {})
    }

    function MB(BB) {
      let TB = 0,
        dB = [],
        VB = {},
        yB = [];

      function pB(lB) {
        var JB;
        let YB = VB[lB] = {
          onStack: !0,
          lowlink: TB,
          index: TB++
        };
        if (dB.push(lB), null == (JB = BB.successors(lB)) || JB.forEach((function(BB) {
            if (BB in VB) {
              let TB = VB[BB];
              null != TB && TB.onStack && (YB.lowlink = Math.min(YB.lowlink, TB.index))
            } else {
              pB(BB);
              let TB = VB[BB];
              TB && (YB.lowlink = Math.min(YB.lowlink, TB.lowlink))
            }
          })), YB.lowlink === YB.index) {
          let BB, TB = [];
          do {
            BB = dB.pop();
            let yB = VB[BB];
            yB && (yB.onStack = !1), TB.push(BB)
          } while (lB !== BB);
          yB.push(TB)
        }
      }
      return BB.nodes().forEach((function(BB) {
        BB in VB || pB(BB)
      })), yB
    }

    function zB(BB) {
      return MB(BB).filter((function(TB) {
        var dB;
        let VB = TB[0];
        return !!VB && (TB.length > 1 || 1 === TB.length && (null != (dB = BB.outEdges(VB, VB)) ? dB : []).length > 0)
      }))
    }
    var wB = () => 1;

    function UB(BB, TB, dB) {
      return function(BB, TB, dB) {
        let VB = {},
          yB = BB.nodes();
        return yB.forEach((function(BB) {
          let pB = {};
          VB[BB] = pB, pB[BB] = {
            distance: 0,
            predecessor: ""
          }, yB.forEach((function(TB) {
            BB !== TB && (pB[TB] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), dB(BB).forEach((function(dB) {
            let VB = dB.v === BB ? dB.w : dB.v,
              yB = TB(dB);
            pB[VB] = {
              distance: yB,
              predecessor: BB
            }
          }))
        })), yB.forEach((function(BB) {
          let TB = VB[BB];
          TB && yB.forEach((function(dB) {
            let pB = VB[dB];
            pB && yB.forEach((function(dB) {
              let VB = pB[BB],
                yB = TB[dB],
                lB = pB[dB];
              if (VB && yB && lB) {
                let BB = VB.distance + yB.distance;
                BB < lB.distance && (lB.distance = BB, lB.predecessor = yB.predecessor)
              }
            }))
          }))
        })), VB
      }(BB, TB || wB, dB || function(TB) {
        var dB;
        return null != (dB = BB.outEdges(TB)) ? dB : []
      })
    }
    var FB = class extends Error {
      constructor(BB) {
        super(BB), this.name = "CycleException"
      }
    };

    function KB(BB) {
      let TB = {},
        dB = {},
        VB = [];
      if (BB.sinks().forEach((function yB(pB) {
          var lB;
          if (pB in dB) throw new FB;
          pB in TB || (dB[pB] = !0, TB[pB] = !0, null == (lB = BB.predecessors(pB)) || lB.forEach(yB), delete dB[pB], VB.push(pB))
        })), Object.keys(TB).length !== BB.nodeCount()) throw new FB;
      return VB
    }

    function rB(BB) {
      try {
        KB(BB)
      } catch (TB) {
        if (TB instanceof FB) return !1;
        throw TB
      }
      return !0
    }

    function IB(BB, TB, dB, VB, yB) {
      Array.isArray(TB) || (TB = [TB]);
      let pB = TB => {
          var dB;
          return null != (dB = BB.isDirected() ? BB.successors(TB) : BB.neighbors(TB)) ? dB : []
        },
        lB = {};
      return TB.forEach((function(TB) {
        if (!BB.hasNode(TB)) throw new Error("Graph does not have node: " + TB);
        yB = cB(BB, TB, "post" === dB, lB, pB, VB, yB)
      })), yB
    }

    function cB(BB, TB, dB, VB, yB, pB, lB) {
      return TB in VB || (VB[TB] = !0, dB || (lB = pB(lB, TB)), yB(TB).forEach((function(TB) {
        lB = cB(BB, TB, dB, VB, yB, pB, lB)
      })), dB && (lB = pB(lB, TB))), lB
    }

    function SB(BB, TB, dB) {
      return IB(BB, TB, dB, (function(BB, TB) {
        return BB.push(TB), BB
      }), [])
    }

    function PB(BB, TB) {
      return SB(BB, TB, "post")
    }

    function QB(BB, TB) {
      return SB(BB, TB, "pre")
    }

    function RB(BB, TB) {
      var dB;
      let VB, yB = new YB,
        pB = {},
        lB = new NB;

      function JB(BB) {
        let dB = BB.v === VB ? BB.w : BB.v,
          yB = lB.priority(dB);
        if (void 0 !== yB) {
          let JB = TB(BB);
          JB < yB && (pB[dB] = VB, lB.decrease(dB, JB))
        }
      }
      if (0 === BB.nodeCount()) return yB;
      BB.nodes().forEach((function(BB) {
        lB.add(BB, Number.POSITIVE_INFINITY), yB.setNode(BB)
      }));
      let gB = BB.nodes()[0];
      void 0 !== gB && lB.decrease(gB, 0);
      let oB = !1;
      for (; lB.size() > 0;) {
        if (VB = lB.removeMin(), VB in pB) yB.setEdge(VB, pB[VB]);
        else {
          if (oB) throw new Error("Input graph is not connected: " + BB);
          oB = !0
        }
        null == (dB = BB.nodeEdges(VB)) || dB.forEach(JB)
      }
      return yB
    }

    function aB(BB, TB, dB, VB) {
      return function(BB, TB, dB, VB) {
        if (void 0 === dB) return fB(BB, TB, dB, VB);
        let yB = !1,
          pB = BB.nodes();
        for (let lB = 0; lB < pB.length; lB++) {
          let JB = pB[lB];
          if (void 0 === JB) continue;
          let YB = VB(JB);
          for (let BB = 0; BB < YB.length; BB++) {
            let TB = YB[BB];
            if (!TB) continue;
            let VB = TB.v === JB ? TB.v : TB.w;
            dB({
              v: VB,
              w: VB === TB.v ? TB.w : TB.v
            }) < 0 && (yB = !0)
          }
          if (yB) return mB(BB, TB, dB, VB)
        }
        return fB(BB, TB, dB, VB)
      }(BB, TB, dB, null != VB ? VB : TB => {
        var dB;
        return null != (dB = BB.outEdges(TB)) ? dB : []
      })
    }
    var ZB = YB;

    function XB(BB, TB, dB, VB) {
      let yB = VB;
      for (; BB.hasNode(yB);) yB = eB(VB);
      return dB.dummy = TB, BB.setNode(yB, dB), yB
    }

    function WB(BB) {
      let TB = new ZB({
        multigraph: BB.isMultigraph()
      }).setGraph(BB.graph());
      return BB.nodes().forEach((dB => {
        BB.children(dB).length || TB.setNode(dB, BB.node(dB))
      })), BB.edges().forEach((dB => {
        TB.setEdge(dB, BB.edge(dB))
      })), TB
    }

    function hB(BB, TB) {
      let dB, VB, yB = BB.x,
        pB = BB.y,
        lB = TB.x - yB,
        JB = TB.y - pB,
        YB = BB.width / 2,
        gB = BB.height / 2;
      if (!lB && !JB) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(JB) * YB > Math.abs(lB) * gB ? (JB < 0 && (gB = -gB), dB = gB * lB / JB, VB = gB) : (lB < 0 && (YB = -YB), dB = YB, VB = YB * JB / lB), {
        x: yB + dB,
        y: pB + VB
      }
    }

    function CB(BB) {
      let TB = BT(jB(BB) + 1).map((() => []));
      return BB.nodes().forEach((dB => {
        let VB = BB.node(dB),
          yB = VB.rank;
        void 0 !== yB && (TB[yB] || (TB[yB] = []), TB[yB][VB.order] = dB)
      })), TB
    }

    function GB(BB, TB, dB, VB) {
      let yB = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (yB.rank = dB, yB.order = VB), XB(BB, "border", yB, TB)
    }
    var qB = 65535;

    function xB(BB, TB) {
      if (TB.length > qB) {
        let dB = function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB,
            dB = [];
          for (let VB = 0; VB < BB.length; VB += TB) {
            let yB = BB.slice(VB, VB + TB);
            dB.push(yB)
          }
          return dB
        }(TB);
        return BB(...dB.map((TB => BB(...TB))))
      }
      return BB(...TB)
    }

    function jB(BB) {
      let TB = BB.nodes().map((TB => {
        let dB = BB.node(TB).rank;
        return void 0 === dB ? Number.MIN_VALUE : dB
      }));
      return xB(Math.max, TB)
    }

    function AB(BB, TB) {
      let dB = Date.now();
      try {
        return TB()
      } finally {
        console.log(BB + " time: " + (Date.now() - dB) + "ms")
      }
    }

    function bB(BB, TB) {
      return TB()
    }
    var nB = 0;

    function eB(BB) {
      return BB + "" + ++nB
    }

    function BT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == TB && (TB = BB, BB = 0);
      let VB = BB => BB < TB;
      dB < 0 && (VB = BB => TB < BB);
      let yB = [];
      for (let pB = BB; VB(pB); pB += dB) yB.push(pB);
      return yB
    }

    function TT(BB, TB) {
      let dB = {};
      for (let VB of TB) void 0 !== BB[VB] && (dB[VB] = BB[VB]);
      return dB
    }

    function dT(BB, TB) {
      let dB;
      return dB = "string" == typeof TB ? BB => BB[TB] : TB, Object.entries(BB).reduce(((BB, TB) => {
        let [VB, yB] = TB;
        return BB[VB] = dB(yB, VB), BB
      }), {})
    }
    var VT = "\0";

    function yT(BB, TB, dB) {
      var VB, yB, pB, lB, JB, YB;
      if (!(BB && TB && dB && "edge" === TB.dummy && "edge" === dB.dummy && TB.edgeObj && dB.edgeObj && BB[TB.edgeObj.v] && BB[dB.edgeObj.v] && BB[TB.edgeObj.w] && BB[dB.edgeObj.w])) return 0;
      let gB = !0;
      TB.edgeObj.w === dB.edgeObj.w && (gB = !1);
      let oB = gB ? null != (yB = null == (VB = BB[TB.edgeObj.v]) ? void 0 : VB.rank) ? yB : NaN : null != (lB = null == (pB = BB[TB.edgeObj.w]) ? void 0 : pB.rank) ? lB : NaN,
        kB = Object.entries(BB).find((BB => {
          var dB, VB;
          return (null == (dB = BB[1].edgeObj) ? void 0 : dB.v) === TB.edgeObj.v && (null == (VB = BB[1].edgeObj) ? void 0 : VB.w) === TB.edgeObj.w && BB[1].rank === oB
        })),
        LB = Object.entries(BB).find((BB => {
          var TB, VB;
          return (null == (TB = BB[1].edgeObj) ? void 0 : TB.v) === dB.edgeObj.v && (null == (VB = BB[1].edgeObj) ? void 0 : VB.w) === dB.edgeObj.w && BB[1].rank === oB
        }));
      if (!kB || !LB) return 0;
      let OB = null != (JB = kB[1].order) ? JB : NaN,
        DB = null != (YB = LB[1].order) ? YB : NaN;
      return isNaN(OB - DB) ? 0 : OB - DB
    }
    var pT = "3.1.1";

    function lT(BB) {
      BB._prev._next = BB._next, BB._next._prev = BB._prev, delete BB._next, delete BB._prev
    }

    function JT(BB, TB) {
      if ("_next" !== BB && "_prev" !== BB) return TB
    }
    var YT = class {
        constructor() {
          yB(this, "_sentinel");
          let BB = {};
          BB._next = BB._prev = BB, this._sentinel = BB
        }
        dequeue() {
          let BB = this._sentinel,
            TB = BB._prev;
          if (TB !== BB) return lT(TB), TB
        }
        enqueue(BB) {
          let TB = this._sentinel;
          BB._prev && BB._next && lT(BB), BB._next = TB._next, TB._next._prev = BB, TB._next = BB, BB._prev = TB
        }
        toString() {
          let BB = [],
            TB = this._sentinel,
            dB = TB._prev;
          for (; dB !== TB;) BB.push(JSON.stringify(dB, JT)), dB = dB._prev;
          return "[" + BB.join(", ") + "]"
        }
      },
      gT = () => 1;

    function oT(BB, TB) {
      if (BB.nodeCount() <= 1) return [];
      let dB = function(BB, TB) {
        let dB = new ZB,
          VB = 0,
          yB = 0;
        BB.nodes().forEach((BB => {
          dB.setNode(BB, {
            v: BB,
            in: 0,
            out: 0
          })
        })), BB.edges().forEach((BB => {
          let pB = dB.edge(BB.v, BB.w) || 0,
            lB = TB(BB),
            JB = pB + lB;
          dB.setEdge(BB.v, BB.w, JB);
          let YB = dB.node(BB.v),
            gB = dB.node(BB.w);
          yB = Math.max(yB, YB.out += lB), VB = Math.max(VB, gB.in += lB)
        }));
        let pB = function(BB) {
            let TB = [];
            for (let dB = 0; dB < BB; dB++) TB.push(dB);
            return TB
          }(yB + VB + 3).map((() => new YT)),
          lB = VB + 1;
        return dB.nodes().forEach((BB => {
          LT(pB, lB, dB.node(BB))
        })), {
          graph: dB,
          buckets: pB,
          zeroIdx: lB
        }
      }(BB, TB || gT);
      return function(BB, TB, dB) {
        var VB;
        let yB, pB = [],
          lB = TB[TB.length - 1],
          JB = TB[0];
        for (; BB.nodeCount();) {
          for (; yB = JB.dequeue();) kT(BB, TB, dB, yB);
          for (; yB = lB.dequeue();) kT(BB, TB, dB, yB);
          if (BB.nodeCount())
            for (let lB = TB.length - 2; lB > 0; --lB)
              if (yB = null == (VB = TB[lB]) ? void 0 : VB.dequeue(), yB) {
                pB = pB.concat(kT(BB, TB, dB, yB, !0) || []);
                break
              }
        }
        return pB
      }(dB.graph, dB.buckets, dB.zeroIdx).flatMap((TB => BB.outEdges(TB.v, TB.w) || []))
    }

    function kT(BB, TB, dB, VB, yB) {
      let pB = [],
        lB = yB ? pB : void 0;
      return (BB.inEdges(VB.v) || []).forEach((VB => {
        let lB = BB.edge(VB),
          JB = BB.node(VB.v);
        yB && pB.push({
          v: VB.v,
          w: VB.w
        }), JB.out -= lB, LT(TB, dB, JB)
      })), (BB.outEdges(VB.v) || []).forEach((VB => {
        let yB = BB.edge(VB),
          pB = VB.w,
          lB = BB.node(pB);
        lB.in -= yB, LT(TB, dB, lB)
      })), BB.removeNode(VB.v), lB
    }

    function LT(BB, TB, dB) {
      var VB, yB, pB;
      dB.out ? dB.in ? null == (pB = BB[dB.out - dB.in + TB]) || pB.enqueue(dB) : null == (yB = BB[BB.length - 1]) || yB.enqueue(dB) : null == (VB = BB[0]) || VB.enqueue(dB)
    }

    function OT(BB, TB) {
      var dB;
      ("greedy" === BB.graph().acyclicer ? oT(BB, (dB = BB, BB => dB.edge(BB).weight)) : function(BB, TB) {
        let dB = [],
          VB = {},
          yB = {};

        function pB(TB) {
          Object.hasOwn(yB, TB) || (yB[TB] = !0, VB[TB] = !0, BB.outEdges(TB).forEach((BB => {
            Object.hasOwn(VB, BB.w) ? dB.push(BB) : pB(BB.w)
          })), delete VB[TB])
        }

        function lB(pB) {
          var JB;
          Object.hasOwn(yB, pB) || (yB[pB] = !0, VB[pB] = !0, null == (JB = BB.outEdges(pB)) || JB.forEach((yB => {
            var JB, YB;
            Object.hasOwn(VB, yB.w) || (null == (JB = TB.node(pB)) ? void 0 : JB.rank) > (null == (YB = TB.node(yB.w)) ? void 0 : YB.rank) && function(BB, TB, dB) {
              let VB = new Set;

              function yB(TB) {
                var pB;
                if (BB.sources().includes(TB)) return !0;
                VB.add(TB);
                for (let lB of null != (pB = BB.inEdges(TB)) ? pB : [])
                  if ((lB.v !== dB.v || lB.w !== dB.w) && !VB.has(lB.v) && yB(lB.v)) return !0;
                return !1
              }
              return yB(TB)
            }(BB, yB.w, yB) ? dB.push(yB) : lB(yB.w)
          })), delete VB[pB])
        }
        let JB = pB;
        return TB && "function" == typeof TB.node && (JB = lB), BB.sources().forEach(JB), BB.nodes().forEach(JB), dB
      }(BB, null != TB ? TB : null)).forEach((TB => {
        let dB = BB.edge(TB);
        BB.removeEdge(TB), dB.forwardName = TB.name, dB.reversed = !0, BB.setEdge(TB.w, TB.v, dB, eB("rev"))
      }))
    }

    function DT(BB) {
      BB.graph().dummyChains = [], BB.edges().forEach((TB => function(BB, TB) {
        let dB, VB, yB, pB = TB.v,
          lB = BB.node(pB).rank,
          JB = TB.w,
          YB = BB.node(JB).rank,
          gB = TB.name,
          oB = BB.edge(TB),
          kB = oB.labelRank;
        if (YB === lB + 1) return;
        for (BB.removeEdge(TB), yB = 0, ++lB; lB < YB; ++yB, ++lB) oB.points = [], VB = {
          width: 0,
          height: 0,
          edgeLabel: oB,
          edgeObj: TB,
          rank: lB
        }, dB = XB(BB, "edge", VB, "_d"), lB === kB && (VB.width = oB.width, VB.height = oB.height, VB.dummy = "edge-label", VB.labelpos = oB.labelpos), BB.setEdge(pB, dB, {
          weight: oB.weight
        }, gB), 0 === yB && BB.graph().dummyChains.push(dB), pB = dB;
        BB.setEdge(pB, JB, {
          weight: oB.weight
        }, gB)
      }(BB, TB)))
    }

    function uT(BB) {
      let TB = {};
      BB.sources().forEach((function dB(VB) {
        let yB = BB.node(VB);
        if (Object.hasOwn(TB, VB)) return yB.rank;
        TB[VB] = !0;
        let pB = BB.outEdges(VB),
          lB = pB ? pB.map((TB => null == TB ? Number.POSITIVE_INFINITY : dB(TB.w) - BB.edge(TB).minlen)) : [],
          JB = xB(Math.min, lB);
        return JB === Number.POSITIVE_INFINITY && (JB = 0), yB.rank = JB
      }))
    }

    function HT(BB, TB) {
      return BB.node(TB.w).rank - BB.node(TB.v).rank - BB.edge(TB).minlen
    }
    var ET = function(BB) {
      let TB = new ZB({
          directed: !1
        }),
        dB = BB.nodes();
      if (0 === dB.length) throw new Error("Graph must have at least one node");
      let VB, yB, pB = dB[0],
        lB = BB.nodeCount();
      for (TB.setNode(pB, {}); vT(TB, BB) < lB && (VB = mT(TB, BB), VB);) yB = TB.hasNode(VB.v) ? HT(BB, VB) : -HT(BB, VB), iT(TB, BB, yB);
      return TB
    };

    function vT(BB, TB) {
      return BB.nodes().forEach((function dB(VB) {
        let yB = TB.nodeEdges(VB);
        yB && yB.forEach((yB => {
          let pB = yB.v,
            lB = VB === pB ? yB.w : pB;
          !BB.hasNode(lB) && !HT(TB, yB) && (BB.setNode(lB, {}), BB.setEdge(VB, lB, {}), dB(lB))
        }))
      })), BB.nodeCount()
    }

    function mT(BB, TB) {
      return TB.edges().reduce(((dB, VB) => {
        let yB = Number.POSITIVE_INFINITY;
        return BB.hasNode(VB.v) !== BB.hasNode(VB.w) && (yB = HT(TB, VB)), yB < dB[0] ? [yB, VB] : dB
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function iT(BB, TB, dB) {
      BB.nodes().forEach((BB => TB.node(BB).rank += dB))
    }
    var {
      preorder: NT,
      postorder: tT
    } = EB, fT = sT;

    function sT(BB) {
      BB = function(BB) {
        let TB = (new ZB).setGraph(BB.graph());
        return BB.nodes().forEach((dB => TB.setNode(dB, BB.node(dB)))), BB.edges().forEach((dB => {
          let VB = TB.edge(dB.v, dB.w) || {
              weight: 0,
              minlen: 1
            },
            yB = BB.edge(dB);
          TB.setEdge(dB.v, dB.w, {
            weight: VB.weight + yB.weight,
            minlen: Math.max(VB.minlen, yB.minlen)
          })
        })), TB
      }(BB), uT(BB);
      let TB, dB, VB = ET(BB);
      for (wT(VB), MT(VB, BB); TB = FT(VB);) dB = KT(VB, BB, TB), rT(VB, BB, TB, dB)
    }

    function MT(BB, TB) {
      let dB = tT(BB, BB.nodes());
      dB = dB.slice(0, dB.length - 1), dB.forEach((dB => function(BB, TB, dB) {
        let VB = BB.node(dB).parent,
          yB = BB.edge(dB, VB);
        yB.cutvalue = zT(BB, TB, dB)
      }(BB, TB, dB)))
    }

    function zT(BB, TB, dB) {
      let VB = BB.node(dB).parent,
        yB = !0,
        pB = TB.edge(dB, VB),
        lB = 0;
      pB || (yB = !1, pB = TB.edge(VB, dB)), lB = pB.weight;
      let JB = TB.nodeEdges(dB);
      return JB && JB.forEach((pB => {
        let JB = pB.v === dB,
          YB = JB ? pB.w : pB.v;
        if (YB !== VB) {
          let VB = JB === yB,
            gB = TB.edge(pB).weight;
          if (lB += VB ? gB : -gB, function(BB, TB, dB) {
              return BB.hasEdge(TB, dB)
            }(BB, dB, YB)) {
            let TB = BB.edge(dB, YB).cutvalue;
            lB += VB ? -TB : TB
          }
        }
      })), lB
    }

    function wT(BB, TB) {
      arguments.length < 2 && (TB = BB.nodes()[0]), UT(BB, {}, 1, TB)
    }

    function UT(BB, TB, dB, VB, yB) {
      let pB = dB,
        lB = BB.node(VB);
      TB[VB] = !0;
      let JB = BB.neighbors(VB);
      return JB && JB.forEach((yB => {
        Object.hasOwn(TB, yB) || (dB = UT(BB, TB, dB, yB, VB))
      })), lB.low = pB, lB.lim = dB++, yB ? lB.parent = yB : delete lB.parent, dB
    }

    function FT(BB) {
      return BB.edges().find((TB => BB.edge(TB).cutvalue < 0))
    }

    function KT(BB, TB, dB) {
      let VB = dB.v,
        yB = dB.w;
      TB.hasEdge(VB, yB) || (VB = dB.w, yB = dB.v);
      let pB = BB.node(VB),
        lB = BB.node(yB),
        JB = pB,
        YB = !1;
      return pB.lim > lB.lim && (JB = lB, YB = !0), TB.edges().filter((TB => YB === IT(BB, BB.node(TB.v), JB) && YB !== IT(BB, BB.node(TB.w), JB))).reduce(((BB, dB) => HT(TB, dB) < HT(TB, BB) ? dB : BB))
    }

    function rT(BB, TB, dB, VB) {
      let yB = dB.v,
        pB = dB.w;
      BB.removeEdge(yB, pB), BB.setEdge(VB.v, VB.w, {}), wT(BB), MT(BB, TB),
        function(BB, TB) {
          let dB = BB.nodes().find((TB => !BB.node(TB).parent));
          if (!dB) return;
          let VB = NT(BB, [dB]);
          VB = VB.slice(1), VB.forEach((dB => {
            let VB = BB.node(dB).parent,
              yB = TB.edge(dB, VB),
              pB = !1;
            yB || (yB = TB.edge(VB, dB), pB = !0), TB.node(dB).rank = TB.node(VB).rank + (pB ? yB.minlen : -yB.minlen)
          }))
        }(BB, TB)
    }

    function IT(BB, TB, dB) {
      return dB.low <= TB.lim && TB.lim <= dB.lim
    }
    sT.initLowLimValues = wT, sT.initCutValues = MT, sT.calcCutValue = zT, sT.leaveEdge = FT, sT.enterEdge = KT, sT.exchangeEdges = rT;
    var cT = function(BB) {
      let TB = BB.graph().ranker;
      if ("function" == typeof TB) return TB(BB);
      switch (TB) {
        case "network-simplex":
        default:
          PT(BB);
          break;
        case "tight-tree":
          ! function(BB) {
            uT(BB), ET(BB)
          }(BB);
          break;
        case "longest-path":
          ST(BB);
        case "none":
      }
    };
    var ST = uT;

    function PT(BB) {
      fT(BB)
    }
    var QT = function(BB) {
      let TB = function(BB) {
          let TB = {},
            dB = 0;

          function VB(yB) {
            let pB = dB;
            BB.children(yB).forEach(VB), TB[yB] = {
              low: pB,
              lim: dB++
            }
          }
          return BB.children(VT).forEach(VB), TB
        }(BB),
        dB = BB.graph();
      if (!Array.isArray(dB.dummyChains)) return;
      dB.dummyChains.forEach((dB => {
        let VB = BB.node(dB),
          yB = VB.edgeObj,
          pB = function(BB, TB, dB, VB) {
            let yB, pB = [],
              lB = [],
              JB = Math.min(TB[dB].low, TB[VB].low),
              YB = Math.max(TB[dB].lim, TB[VB].lim);
            yB = dB;
            do {
              yB = BB.parent(yB), pB.push(yB)
            } while (yB && (TB[yB].low > JB || YB > TB[yB].lim));
            let gB = yB,
              oB = VB;
            for (;
              (oB = BB.parent(oB)) !== gB;) lB.push(oB);
            return {
              path: pB.concat(lB.reverse()),
              lca: gB
            }
          }(BB, TB, yB.v, yB.w),
          lB = pB.path,
          JB = pB.lca,
          YB = 0,
          gB = lB[YB],
          oB = !0;
        for (; dB !== yB.w;) {
          if (VB = BB.node(dB), oB) {
            for (;
              (gB = lB[YB]) !== JB && BB.node(gB).maxRank < VB.rank;) YB++;
            gB === JB && (oB = !1)
          }
          if (!oB) {
            for (; YB < lB.length - 1 && BB.node(lB[YB + 1]).minRank <= VB.rank;) YB++;
            gB = lB[YB]
          }
          void 0 !== gB && BB.setParent(dB, gB), dB = BB.successors(dB)[0]
        }
      }))
    };

    function RT(BB) {
      let TB = XB(BB, "root", {}, "_root"),
        dB = function(BB) {
          let TB = {};

          function dB(VB, yB) {
            let pB = BB.children(VB);
            pB && pB.length && pB.forEach((BB => dB(BB, yB + 1))), TB[VB] = yB
          }
          return BB.children(VT).forEach((BB => dB(BB, 1))), TB
        }(BB),
        VB = Object.values(dB),
        yB = xB(Math.max, VB) - 1,
        pB = 2 * yB + 1;
      BB.graph().nestingRoot = TB, BB.edges().forEach((TB => BB.edge(TB).minlen *= pB));
      let lB = function(BB) {
        return BB.edges().reduce(((TB, dB) => TB + BB.edge(dB).weight), 0)
      }(BB) + 1;
      BB.children(VT).forEach((VB => {
        aT(BB, TB, pB, lB, yB, dB, VB)
      })), BB.graph().nodeRankFactor = pB
    }

    function aT(BB, TB, dB, VB, yB, pB, lB) {
      var JB;
      let YB = BB.children(lB);
      if (!YB.length) return void(lB !== TB && BB.setEdge(TB, lB, {
        weight: 0,
        minlen: dB
      }));
      let gB = GB(BB, "_bt"),
        oB = GB(BB, "_bb"),
        kB = BB.node(lB);
      BB.setParent(gB, lB), kB.borderTop = gB, BB.setParent(oB, lB), kB.borderBottom = oB, YB.forEach((JB => {
        var YB;
        aT(BB, TB, dB, VB, yB, pB, JB);
        let kB = BB.node(JB),
          LB = kB.borderTop ? kB.borderTop : JB,
          OB = kB.borderBottom ? kB.borderBottom : JB,
          DB = kB.borderTop ? VB : 2 * VB,
          uB = LB !== OB ? 1 : yB - (null != (YB = pB[lB]) ? YB : 0) + 1;
        BB.setEdge(gB, LB, {
          weight: DB,
          minlen: uB,
          nestingEdge: !0
        }), BB.setEdge(OB, oB, {
          weight: DB,
          minlen: uB,
          nestingEdge: !0
        })
      })), BB.parent(lB) || BB.setEdge(TB, gB, {
        weight: 0,
        minlen: yB + (null != (JB = pB[lB]) ? JB : 0)
      })
    }
    var ZT = function(BB) {
      BB.children(VT).forEach((function TB(dB) {
        let VB = BB.children(dB),
          yB = BB.node(dB);
        if (VB.length && VB.forEach(TB), yB && Object.hasOwn(yB, "minRank")) {
          yB.borderLeft = [], yB.borderRight = [];
          for (let TB = yB.minRank, VB = yB.maxRank + 1; TB < VB; ++TB) XT(BB, "borderLeft", "_bl", dB, yB, TB), XT(BB, "borderRight", "_br", dB, yB, TB)
        }
      }))
    };

    function XT(BB, TB, dB, VB, yB, pB) {
      let lB = {
          width: 0,
          height: 0,
          rank: pB,
          borderType: TB
        },
        JB = yB[TB][pB - 1],
        YB = XB(BB, "border", lB, dB);
      yB[TB][pB] = YB, BB.setParent(YB, VB), JB && BB.setEdge(JB, YB, {
        weight: 1
      })
    }

    function WT(BB) {
      var TB;
      let dB = null == (TB = BB.graph().rankdir) ? void 0 : TB.toLowerCase();
      ("bt" === dB || "rl" === dB) && function(BB) {
        BB.nodes().forEach((TB => GT(BB.node(TB)))), BB.edges().forEach((TB => {
          var dB;
          let VB = BB.edge(TB);
          null == (dB = VB.points) || dB.forEach(GT), Object.hasOwn(VB, "y") && GT(VB)
        }))
      }(BB), ("lr" === dB || "rl" === dB) && (function(BB) {
        BB.nodes().forEach((TB => qT(BB.node(TB)))), BB.edges().forEach((TB => {
          var dB;
          let VB = BB.edge(TB);
          null == (dB = VB.points) || dB.forEach(qT), Object.hasOwn(VB, "x") && qT(VB)
        }))
      }(BB), hT(BB))
    }

    function hT(BB) {
      BB.nodes().forEach((TB => CT(BB.node(TB)))), BB.edges().forEach((TB => CT(BB.edge(TB))))
    }

    function CT(BB) {
      let TB = BB.width;
      BB.width = BB.height, BB.height = TB
    }

    function GT(BB) {
      BB.y = -BB.y
    }

    function qT(BB) {
      let TB = BB.x;
      BB.x = BB.y, BB.y = TB
    }

    function xT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        dB = {},
        VB = BB.nodes().filter((TB => !BB.children(TB).length)),
        yB = VB.map((TB => BB.node(TB).rank)),
        pB = BT(xB(Math.max, yB) + 1).map((() => []));
      return VB.sort(((TB, dB) => BB.node(TB).rank - BB.node(dB).rank)).forEach((function VB(yB) {
        if (dB[yB]) return;
        dB[yB] = !0;
        let lB = BB.node(yB);
        pB[lB.rank].push(yB);
        let JB = BB.successors(yB);
        JB && [...JB].sort(((dB, VB) => function(dB, VB) {
          let yB = BB.node(dB),
            pB = BB.node(VB);
          return yT(TB, yB, pB)
        }(dB, VB))).forEach(VB)
      })), pB
    }

    function jT(BB, TB) {
      let dB = 0;
      for (let VB = 1; VB < TB.length; ++VB) dB += AT(BB, TB[VB - 1], TB[VB]);
      return dB
    }

    function AT(BB, TB, dB) {
      let VB = function(BB, TB) {
          return BB.reduce(((BB, dB, VB) => (BB[dB] = TB[VB], BB)), {})
        }(dB, dB.map(((BB, TB) => TB))),
        yB = TB.flatMap((TB => {
          let dB = BB.outEdges(TB);
          return dB ? dB.map((TB => ({
            pos: VB[TB.w],
            weight: BB.edge(TB).weight
          }))).sort(((BB, TB) => BB.pos - TB.pos)) : []
        })),
        pB = 1;
      for (; pB < dB.length;) pB <<= 1;
      let lB = 2 * pB - 1;
      pB -= 1;
      let JB = new Array(lB).fill(0),
        YB = 0;
      return yB.forEach((BB => {
        let TB = BB.pos + pB;
        JB[TB] += BB.weight;
        let dB = 0;
        for (; TB > 0;) TB % 2 && (dB += JB[TB + 1]), TB = TB - 1 >> 1, JB[TB] += BB.weight;
        YB += BB.weight * dB
      })), YB
    }

    function bT(BB, TB) {
      let dB = {};
      return BB.forEach(((BB, TB) => {
          let VB = {
            indegree: 0,
            in: [],
            out: [],
            vs: [BB.v],
            i: TB
          };
          void 0 !== BB.barycenter && (VB.barycenter = BB.barycenter, VB.weight = BB.weight), dB[BB.v] = VB
        })), TB.edges().forEach((BB => {
          let TB = dB[BB.v],
            VB = dB[BB.w];
          void 0 !== TB && void 0 !== VB && (VB.indegree++, TB.out.push(VB))
        })),
        function(BB) {
          let TB = [];

          function dB(BB) {
            return TB => {
              TB.merged || (void 0 === TB.barycenter || void 0 === BB.barycenter || TB.barycenter >= BB.barycenter) && function(BB, TB) {
                let dB = 0,
                  VB = 0;
                BB.weight && (dB += BB.barycenter * BB.weight, VB += BB.weight), TB.weight && (dB += TB.barycenter * TB.weight, VB += TB.weight), BB.vs = TB.vs.concat(BB.vs), BB.barycenter = dB / VB, BB.weight = VB, BB.i = Math.min(TB.i, BB.i), TB.merged = !0
              }(BB, TB)
            }
          }

          function VB(TB) {
            return dB => {
              dB.in.push(TB), 0 === --dB.indegree && BB.push(dB)
            }
          }
          for (; BB.length;) {
            let yB = BB.pop();
            TB.push(yB), yB.in.reverse().forEach(dB(yB)), yB.out.forEach(VB(yB))
          }
          return TB.filter((BB => !BB.merged)).map((BB => TT(BB, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(dB).filter((BB => !BB.indegree)))
    }

    function nT(BB, TB, dB, VB, yB) {
      let pB = {},
        lB = null,
        JB = null,
        YB = yB;
      "boolean" == typeof TB ? (YB = TB, pB = {}) : TB && (pB = TB, lB = null != dB ? dB : null, JB = null != VB ? VB : null);
      let gB = function(BB, TB) {
          let dB = {
            lhs: [],
            rhs: []
          };
          return BB.forEach((BB => {
            TB(BB) ? dB.lhs.push(BB) : dB.rhs.push(BB)
          })), dB
        }(BB, (BB => Object.hasOwn(BB, "barycenter"))),
        oB = gB.lhs,
        kB = gB.rhs.sort(((BB, TB) => TB.i - BB.i)),
        LB = [],
        OB = 0,
        DB = 0,
        uB = 0;
      oB.sort(function(BB, TB, dB) {
        return (VB, yB) => {
          if (VB.barycenter < yB.barycenter) return -1;
          if (VB.barycenter > yB.barycenter) return 1;
          if (BB && ("string" == typeof VB.vs[0] || "string" == typeof yB.vs[0])) {
            let dB = BB.node(VB.vs[0]),
              pB = BB.node(yB.vs[0]),
              lB = yT(TB, dB, pB);
            if (0 !== lB) return lB
          }
          return dB ? yB.i - VB.i : VB.i - yB.i
        }
      }(JB, lB, !!YB));
      for (let [EB, vB] of Object.entries(pB)) {
        let BB = oB.findIndex((BB => BB.vs[0] === EB));
        oB.splice(BB + 1, 0, vB)
      }
      uB = eT(LB, kB, uB), oB.forEach((BB => {
        uB += BB.vs.length, LB.push(BB.vs), OB += BB.barycenter * BB.weight, DB += BB.weight, uB = eT(LB, kB, uB)
      }));
      let HB = {
        vs: LB.flat(1)
      };
      return DB && (HB.barycenter = OB / DB, HB.weight = DB), HB
    }

    function eT(BB, TB, dB) {
      let VB;
      for (; TB.length && (VB = TB[TB.length - 1]).i <= dB;) TB.pop(), BB.push(VB.vs), dB++;
      return dB
    }

    function Bd(BB, TB, dB, VB, yB) {
      var pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB;
      let HB = null,
        EB = yB;
      "boolean" == typeof VB ? (EB = VB, HB = null) : void 0 !== VB && (HB = VB);
      let vB = BB.children(TB),
        mB = BB.node(TB),
        iB = mB ? mB.borderLeft : void 0,
        NB = mB ? mB.borderRight : void 0,
        tB = {};
      iB && (vB = vB.filter((BB => BB !== iB && BB !== NB)));
      let fB = function(BB) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((TB => {
          let dB = BB.inEdges(TB);
          if (!dB || !dB.length) return {
            v: TB
          };
          {
            let VB = dB.reduce(((TB, dB) => {
              let VB = BB.edge(dB),
                yB = BB.node(dB.v);
              return {
                sum: TB.sum + VB.weight * yB.order,
                weight: TB.weight + VB.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: TB,
              barycenter: VB.sum / VB.weight,
              weight: VB.weight
            }
          }
        }))
      }(BB, vB);
      fB.forEach((TB => {
        if (BB.children(TB.v).length) {
          let {
            result: VB
          } = Bd(BB, TB.v, dB, HB, EB);
          tB[TB.v] = VB, Object.hasOwn(VB, "barycenter") && function(BB, TB) {
            void 0 !== BB.barycenter ? (BB.barycenter = (BB.barycenter * BB.weight + TB.barycenter * TB.weight) / (BB.weight + TB.weight), BB.weight += TB.weight) : (BB.barycenter = TB.barycenter, BB.weight = TB.weight)
          }(TB, VB)
        }
      }));
      let sB = bT(fB, dB);
      ! function(BB, TB) {
        BB.forEach((BB => {
          BB.vs = BB.vs.flatMap((BB => TB[BB] ? TB[BB].vs : BB))
        }))
      }(sB, tB);
      let MB = {},
        zB = !1;
      for (let UB = 0; UB < sB.length; UB++)
        for (let TB = UB + 1; TB < sB.length; TB++)
          if (sB[UB] && sB[TB] && null != (pB = sB[UB]) && pB.barycenter && null != (lB = sB[TB]) && lB.barycenter && (null == (JB = sB[UB]) ? void 0 : JB.barycenter) === sB[TB].barycenter) {
            let dB = null != (gB = null == (YB = sB[UB]) ? void 0 : YB.vs[0]) ? gB : "",
              VB = null != (kB = null == (oB = sB[TB]) ? void 0 : oB.vs[0]) ? kB : "",
              yB = BB.node(dB),
              pB = BB.node(VB);
            if ("edge" === yB.dummy && "edge" === pB.dummy && (null == (LB = yB.edgeObj) ? void 0 : LB.v) === (null == (OB = pB.edgeObj) ? void 0 : OB.v) && (null == (DB = yB.edgeObj) ? void 0 : DB.w) === (null == (uB = pB.edgeObj) ? void 0 : uB.w)) {
              if (yB.edgeLabel.reversed) {
                MB[VB] = sB[UB], sB.splice(UB, 1), UB--;
                break
              }
              MB[dB] = sB[TB], sB.splice(TB, 1), TB--
            } else zB = !0
          } let wB = nT(sB, MB, HB, BB, EB);
      if (iB && NB) {
        wB.vs = [iB, wB.vs, NB].flat(1);
        let TB = BB.predecessors(iB);
        if (TB && TB.length) {
          let dB = BB.node(TB[0]),
            VB = BB.predecessors(NB),
            yB = BB.node(VB[0]);
          Object.hasOwn(wB, "barycenter") || (wB.barycenter = 0, wB.weight = 0), wB.barycenter = (wB.barycenter * wB.weight + dB.order + yB.order) / (wB.weight + 2), wB.weight += 2
        }
      }
      return Object.defineProperty(wB, "result", {
        value: wB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(wB, "usedBias", {
        value: zB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), wB
    }

    function Td(BB, TB, dB, VB) {
      VB || (VB = BB.nodes());
      let yB = function(BB) {
          let TB;
          for (; BB.hasNode(TB = eB("_root")););
          return TB
        }(BB),
        pB = new ZB({
          compound: !0
        }).setGraph({
          root: yB
        }).setDefaultNodeLabel((TB => BB.node(TB)));
      return VB.forEach((VB => {
        let lB = BB.node(VB),
          JB = BB.parent(VB);
        if (lB.rank === TB || lB.minRank <= TB && TB <= lB.maxRank) {
          pB.setNode(VB), pB.setParent(VB, JB || yB);
          let YB = BB[dB](VB);
          YB && YB.forEach((TB => {
            let dB = TB.v === VB ? TB.w : TB.v,
              yB = pB.edge(dB, VB),
              lB = void 0 !== yB ? yB.weight : 0;
            pB.setEdge(dB, VB, {
              weight: BB.edge(TB).weight + lB
            })
          })), Object.hasOwn(lB, "minRank") && pB.setNode(VB, {
            borderLeft: lB.borderLeft[TB],
            borderRight: lB.borderRight[TB]
          })
        }
      })), pB
    }

    function dd(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof TB.customOrder) return void TB.customOrder(BB, dd);
      let VB = jB(BB),
        yB = Vd(BB, BT(1, VB + 1), "inEdges"),
        pB = Vd(BB, BT(VB - 1, -1, -1), "outEdges"),
        lB = xT(BB, dB);
      if (pd(BB, lB), TB.disableOptimalOrderHeuristic) return;
      let JB, YB = Number.POSITIVE_INFINITY,
        gB = TB.constraints || [];
      for (let oB = 0, kB = 0; kB < 4; ++oB, ++kB) {
        yd(oB % 2 ? yB : pB, oB % 4 >= 2, gB, dB), lB = CB(BB);
        let TB = jT(BB, lB);
        TB < YB ? (kB = 0, JB = Object.assign({}, lB), YB = TB) : TB === YB && (JB = structuredClone(lB))
      }
      pd(BB, JB)
    }

    function Vd(BB, TB, dB) {
      let VB = new Map,
        yB = (BB, TB) => {
          VB.has(BB) || VB.set(BB, []), VB.get(BB).push(TB)
        };
      for (let pB of BB.nodes()) {
        let TB = BB.node(pB);
        if ("number" == typeof TB.rank && yB(TB.rank, pB), "number" == typeof TB.minRank && "number" == typeof TB.maxRank)
          for (let BB = TB.minRank; BB <= TB.maxRank; BB++) BB !== TB.rank && yB(BB, pB)
      }
      return TB.map((function(TB) {
        return Td(BB, TB, dB, VB.get(TB) || [])
      }))
    }

    function yd(BB, TB, dB, VB) {
      let yB = !0,
        pB = new ZB;
      BB.forEach((function(BB) {
        dB.forEach((BB => pB.setEdge(BB.left, BB.right)));
        let lB = BB.graph().root,
          {
            result: JB,
            usedBias: YB
          } = Bd(BB, lB, pB, VB, yB);
        TB && YB && (yB = !yB), JB.vs.forEach(((TB, dB) => BB.node(TB).order = dB)),
          function(BB, TB, dB) {
            let VB, yB = {};
            dB.forEach((dB => {
              let pB, lB, JB = BB.parent(dB);
              for (; JB;) {
                if (pB = BB.parent(JB), pB ? (lB = yB[pB], yB[pB] = JB) : (lB = VB, VB = JB), lB && lB !== JB) return void TB.setEdge(lB, JB);
                JB = pB
              }
            }))
          }(BB, pB, JB.vs)
      }))
    }

    function pd(BB, TB) {
      Object.values(TB).forEach((TB => TB.forEach(((TB, dB) => BB.node(TB).order = dB))))
    }

    function ld(BB, TB, dB) {
      if (TB > dB) {
        let BB = TB;
        TB = dB, dB = BB
      }
      let VB = BB[TB];
      VB || (BB[TB] = VB = {}), VB[dB] = !0
    }

    function Jd(BB, TB, dB) {
      if (TB > dB) {
        let BB = TB;
        TB = dB, dB = BB
      }
      let VB = BB[TB];
      return void 0 !== VB && Object.hasOwn(VB, dB)
    }

    function Yd(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        pB = {},
        lB = function(BB, TB, dB, VB) {
          let yB = new ZB,
            pB = BB.graph(),
            lB = function(BB, TB, dB) {
              return (VB, yB, pB) => {
                let lB, JB = VB.node(yB),
                  YB = VB.node(pB),
                  gB = 0;
                if (gB += JB.width / 2, Object.hasOwn(JB, "labelpos")) switch (JB.labelpos.toLowerCase()) {
                  case "l":
                    lB = -JB.width / 2;
                    break;
                  case "r":
                    lB = JB.width / 2
                }
                if (lB && (gB += dB ? lB : -lB), lB = void 0, gB += (JB.dummy ? TB : BB) / 2, gB += (YB.dummy ? TB : BB) / 2, gB += YB.width / 2, Object.hasOwn(YB, "labelpos")) switch (YB.labelpos.toLowerCase()) {
                  case "l":
                    lB = YB.width / 2;
                    break;
                  case "r":
                    lB = -YB.width / 2
                }
                return lB && (gB += dB ? lB : -lB), gB
              }
            }(pB.nodesep, pB.edgesep, VB);
          return TB.forEach((TB => {
            let VB;
            TB.forEach((TB => {
              let pB = dB[TB];
              if (void 0 !== pB) {
                if (yB.setNode(pB), void 0 !== VB) {
                  let JB = dB[VB];
                  if (void 0 !== JB) {
                    let dB = yB.edge(JB, pB);
                    yB.setEdge(JB, pB, Math.max(lB(BB, TB, VB), dB || 0))
                  }
                }
                VB = TB
              }
            }))
          })), yB
        }(BB, TB, dB, yB),
        JB = yB ? "borderLeft" : "borderRight";

      function YB(BB, TB) {
        let dB = lB.nodes().slice(),
          VB = {},
          yB = dB.pop();
        for (; yB;) {
          if (VB[yB]) BB(yB);
          else {
            VB[yB] = !0, dB.push(yB);
            for (let BB of TB(yB)) dB.push(BB)
          }
          yB = dB.pop()
        }
      }
      return YB((function(BB) {
        let TB = lB.inEdges(BB);
        pB[BB] = TB ? TB.reduce(((BB, TB) => {
          var dB;
          let VB = null != (dB = pB[TB.v]) ? dB : 0,
            yB = lB.edge(TB);
          return Math.max(BB, VB + (void 0 !== yB ? yB : 0))
        }), 0) : 0
      }), (function(BB) {
        return lB.predecessors(BB) || []
      })), YB((function(TB) {
        let dB = lB.outEdges(TB),
          VB = Number.POSITIVE_INFINITY;
        dB && (VB = dB.reduce(((BB, TB) => {
          let dB = pB[TB.w],
            VB = lB.edge(TB);
          return Math.min(BB, (void 0 !== dB ? dB : 0) - (void 0 !== VB ? VB : 0))
        }), Number.POSITIVE_INFINITY));
        let yB = BB.node(TB);
        VB !== Number.POSITIVE_INFINITY && yB.borderType !== JB && (pB[TB] = Math.max(void 0 !== pB[TB] ? pB[TB] : 0, VB))
      }), (function(BB) {
        return lB.successors(BB) || []
      })), Object.keys(VB).forEach((BB => {
        var TB;
        let VB = dB[BB];
        void 0 !== VB && (pB[BB] = null != (TB = pB[VB]) ? TB : 0)
      })), pB
    }

    function gd(BB, TB) {
      let dB, VB = CB(BB),
        yB = Object.assign(function(BB, TB) {
          let dB = {};
          return TB.length && TB.reduce((function(TB, VB) {
            let yB = 0,
              pB = 0,
              lB = TB.length,
              JB = VB[VB.length - 1];
            return VB.forEach(((TB, YB) => {
              let gB = function(BB, TB) {
                  if (BB.node(TB).dummy) {
                    let dB = BB.predecessors(TB);
                    if (dB) return dB.find((TB => BB.node(TB).dummy))
                  }
                }(BB, TB),
                oB = gB ? BB.node(gB).order : lB;
              (gB || TB === JB) && (VB.slice(pB, YB + 1).forEach((TB => {
                let VB = BB.predecessors(TB);
                VB && VB.forEach((VB => {
                  let pB = BB.node(VB),
                    lB = pB.order;
                  (lB < yB || oB < lB) && (!pB.dummy || !BB.node(TB).dummy) && ld(dB, VB, TB)
                }))
              })), pB = YB + 1, yB = oB)
            })), VB
          })), dB
        }(BB, VB), function(BB, TB) {
          let dB = {};

          function VB(TB, VB, yB, pB, lB) {
            BT(VB, yB).forEach((VB => {
              let yB = TB[VB];
              if (void 0 !== yB && BB.node(yB).dummy) {
                let TB = BB.predecessors(yB);
                TB && TB.forEach((TB => {
                  if (void 0 === TB) return;
                  let VB = BB.node(TB);
                  VB.dummy && (VB.order < pB || VB.order > lB) && ld(dB, TB, yB)
                }))
              }
            }))
          }
          return TB.length && TB.reduce((function(TB, dB) {
            let yB = -1,
              pB = -1,
              lB = 0;
            return dB.forEach(((JB, YB) => {
              if ("border" === BB.node(JB).dummy) {
                let TB = BB.predecessors(JB);
                if (TB && TB.length) {
                  let JB = TB[0];
                  if (void 0 === JB) return;
                  pB = BB.node(JB).order, VB(dB, lB, YB, yB, pB), lB = YB, yB = pB
                }
              }
              VB(dB, lB, dB.length, pB, TB.length)
            })), dB
          })), dB
        }(BB, VB)),
        pB = {};
      ["u", "d"].forEach((lB => {
        dB = "u" === lB ? VB : Object.values(VB).reverse(), ["l", "r"].forEach((VB => {
          "r" === VB && (dB = dB.map((BB => Object.values(BB).reverse())));
          let JB = function(BB, TB, dB, VB, yB) {
              let pB = {},
                lB = {},
                JB = {};
              return TB.forEach((BB => {
                BB.forEach(((BB, TB) => {
                  pB[BB] = BB, lB[BB] = BB, JB[BB] = TB
                }))
              })), TB.forEach((TB => {
                let YB = -1,
                  gB = -1,
                  oB = !1,
                  kB = TB,
                  LB = TB.findIndex((TB => (null == yB ? void 0 : yB.includes(TB)) || od(TB, BB, yB)));
                LB > 0 && (kB = [TB[LB], ...TB.slice(0, LB), ...TB.slice(LB + 1)], oB = !0), kB.forEach((TB => {
                  var kB;
                  let LB = VB(TB);
                  if (LB && LB.length) {
                    null != yB && yB.includes(TB) && (LB = LB.filter((TB => od(TB, BB, yB))));
                    let VB = LB.sort(((BB, TB) => {
                        let dB = JB[BB],
                          VB = JB[TB];
                        return (void 0 !== dB ? dB : 0) - (void 0 !== VB ? VB : 0)
                      })),
                      OB = (VB.length - 1) / 2;
                    for (let BB = Math.floor(OB), yB = Math.ceil(OB); BB <= yB; ++BB) {
                      let yB = VB[BB];
                      if (void 0 === yB) continue;
                      let LB = JB[yB];
                      if (void 0 !== LB && lB[TB] === TB && YB < LB && JB[yB] !== gB && !Jd(dB, TB, yB)) {
                        let BB = pB[yB];
                        void 0 !== BB && (lB[yB] = TB, lB[TB] = pB[TB] = BB, YB = LB, oB && (YB = -1, gB = null != (kB = JB[yB]) ? kB : -1, oB = !1))
                      }
                    }
                  }
                }))
              })), {
                root: pB,
                align: lB
              }
            }(BB, dB, yB, (TB => ("u" === lB ? BB.predecessors(TB) : BB.successors(TB)) || []), TB),
            YB = Yd(BB, dB, JB.root, JB.align, "r" === VB);
          "r" === VB && (YB = dT(YB, (BB => -BB))), pB[lB + VB] = YB
        }))
      }));
      let lB = function(BB, TB) {
        return Object.values(TB).reduce(((TB, dB) => {
          let VB = Number.NEGATIVE_INFINITY,
            yB = Number.POSITIVE_INFINITY;
          Object.entries(dB).forEach((TB => {
            let [dB, pB] = TB, lB = function(BB, TB) {
              return BB.node(TB).width
            }(BB, dB) / 2;
            VB = Math.max(pB + lB, VB), yB = Math.min(pB - lB, yB)
          }));
          let pB = VB - yB;
          return pB < TB[0] && (TB = [pB, dB]), TB
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(BB, pB);
      return function(BB, TB) {
          let dB = Object.values(TB),
            VB = xB(Math.min, dB),
            yB = xB(Math.max, dB);
          ["u", "d"].forEach((dB => {
            ["l", "r"].forEach((pB => {
              let lB = dB + pB,
                JB = BB[lB];
              if (!JB || JB === TB) return;
              let YB = Object.values(JB),
                gB = VB - xB(Math.min, YB);
              "l" !== pB && (gB = yB - xB(Math.max, YB)), gB && (BB[lB] = dT(JB, (BB => BB + gB)))
            }))
          }))
        }(pB, lB),
        function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            dB = BB.ul;
          return dB ? dT(dB, ((dB, VB) => {
            var yB, pB;
            if (TB) {
              let dB = TB.toLowerCase(),
                yB = BB[dB];
              if (yB && void 0 !== yB[VB]) return yB[VB]
            }
            let lB = Object.values(BB).map((BB => {
              let TB = BB[VB];
              return void 0 !== TB ? TB : 0
            })).sort(((BB, TB) => BB - TB));
            return ((null != (yB = lB[1]) ? yB : 0) + (null != (pB = lB[2]) ? pB : 0)) / 2
          })) : {}
        }(pB, BB.graph().align)
    }

    function od(BB, TB, dB) {
      var VB;
      if (!dB) return !1;
      let yB = null == (VB = TB.node(BB)) ? void 0 : VB.edgeObj;
      if (!yB || TB.node(BB).edgeLabel.reversed) return !1;
      let pB = dB.indexOf(null == yB ? void 0 : yB.v),
        lB = dB.indexOf(null == yB ? void 0 : yB.w);
      return -1 !== pB && -1 !== lB && pB === (lB + 1) % dB.length || pB === (lB - 1) % dB.length
    }

    function kd(BB, TB) {
      (function(BB) {
        let TB = CB(BB),
          dB = BB.graph(),
          VB = dB.ranksep,
          yB = dB.rankalign,
          pB = 0;
        TB.forEach((TB => {
          let dB = TB.reduce(((TB, dB) => {
            var VB;
            let yB = null != (VB = BB.node(dB).height) ? VB : 0;
            return TB > yB ? TB : yB
          }), 0);
          TB.forEach((TB => {
            let VB = BB.node(TB);
            VB.y = "top" === yB ? pB + VB.height / 2 : "bottom" === yB ? pB + dB - VB.height / 2 : pB + dB / 2
          })), pB += dB + VB
        }))
      })(BB = WB(BB)), Object.entries(gd(BB, TB)).forEach((TB => {
        let [dB, VB] = TB;
        return BB.node(dB).x = VB
      }))
    }
    var Ld = new WeakMap;

    function Od(BB) {
      return ud(BB, bB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), BB
    }

    function Dd(BB, TB, dB) {
      let VB = TB;
      for (; void 0 !== VB;) {
        let TB = BB.parent(VB);
        if (TB === dB) return VB;
        VB = TB
      }
    }

    function ud(BB, TB, dB) {
      var VB;
      let yB = BB.nodes().filter((TB => BB.children(TB).length)),
        pB = {};
      yB.forEach((VB => {
        let yB = BB.node(VB);
        if (yB && yB.rankdir) {
          let lB = new ZB({
            multigraph: !0,
            compound: !0
          });
          lB.setGraph({
            rankdir: yB.rankdir
          });
          let JB = BB.children(VB);
          JB.forEach((TB => {
            let dB = {
              ...BB.node(TB)
            };
            lB.setNode(TB, dB);
            let yB = BB.parent(TB);
            yB && yB !== VB && JB.includes(yB) && lB.setParent(TB, yB)
          }));
          let YB = new Set;
          BB.edges().forEach((TB => {
            let dB = Dd(BB, TB.v, VB),
              yB = Dd(BB, TB.w, VB);
            if (dB && yB && dB !== yB) {
              let VB = `${dB}\0${yB}`;
              YB.has(VB) || (YB.add(VB), lB.setEdge(dB, yB, {
                ...BB.edge(TB)
              }))
            }
          })), ud(lB, TB, dB);
          let gB = wd(lB);
          Hd(gB, TB, dB, null), Ed(lB, gB);
          let oB = 1 / 0,
            kB = 1 / 0,
            LB = -1 / 0,
            OB = -1 / 0;
          lB.nodes().forEach((BB => {
            if (BB === VB) return;
            let TB = lB.node(BB);
            TB && "number" == typeof TB.x && "number" == typeof TB.y && "number" == typeof TB.width && "number" == typeof TB.height && (oB = Math.min(oB, TB.x - TB.width / 2), LB = Math.max(LB, TB.x + TB.width / 2), kB = Math.min(kB, TB.y - TB.height / 2), OB = Math.max(OB, TB.y + TB.height / 2))
          })), (!isFinite(oB) || !isFinite(kB) || !isFinite(LB) || !isFinite(OB)) && (oB = kB = 0, LB = OB = 0);
          let DB = LB - oB,
            uB = OB - kB;
          pB[VB] = {
            minX: oB,
            UB: kB,
            maxX: LB,
            FB: OB,
            width: DB,
            height: uB,
            offsetX: oB,
            offsetY: kB
          }, yB._dagreClusterSubgraph = lB
        }
      }));
      let lB = [],
        JB = new Map;
      yB.forEach((TB => {
        let dB = BB.node(TB);
        dB && dB.rankdir && pB[TB] && JB.set(TB, (BB.children(TB) || []).filter((BB => BB !== TB)))
      }));
      let YB = new Set([...JB.values()].flat()),
        gB = new Map;
      JB.forEach(((TB, dB) => {
        YB.has(dB) || gB.set(dB, (TB => {
          let dB = [],
            VB = (BB.children(TB) || []).filter((BB => BB !== TB));
          for (; VB.length > 0;) {
            let TB = VB.shift();
            dB.push(TB), (BB.children(TB) || []).filter((BB => BB !== TB)).forEach((BB => VB.push(BB)))
          }
          return dB
        })(dB))
      }));
      let oB = new Set([...gB.values()].flat()),
        kB = BB => {
          for (let [TB, dB] of gB)
            if (dB.includes(BB)) return TB;
          return BB
        },
        LB = [];
      BB.edges().forEach((TB => {
        (oB.has(TB.v) || oB.has(TB.w)) && LB.push({
          edge: TB,
          label: BB.edge(TB)
        })
      }));
      let OB = new Map;
      oB.forEach((TB => {
        let dB = BB.parent(TB);
        OB.set(TB, "string" == typeof dB ? dB : void 0)
      })), gB.forEach(((TB, dB) => {
        let VB = BB.node(dB),
          yB = [];
        TB.forEach((TB => {
          let dB = BB.node(TB);
          dB && (yB.push({
            id: TB,
            node: dB,
            parent: OB.get(TB)
          }), BB.removeNode(TB))
        }));
        let JB = LB.filter((BB => {
            let {
              edge: dB
            } = BB;
            return TB.includes(dB.v) || TB.includes(dB.w)
          })),
          YB = pB[dB];
        VB && (lB.push({
          clusterId: dB,
          subgraph: VB._dagreClusterSubgraph,
          bounds: YB,
          children: TB,
          removedNodes: yB,
          removedEdges: JB
        }), VB.width = YB.width, VB.height = YB.height)
      }));
      let DB = new Set;
      LB.forEach((TB => {
        let {
          edge: dB,
          label: VB
        } = TB, yB = kB(dB.v), pB = kB(dB.w);
        if (yB !== pB && BB.hasNode(yB) && BB.hasNode(pB)) {
          let TB = `${yB}\0${pB}`;
          DB.has(TB) || (DB.add(TB), BB.setEdge(yB, pB, {
            ...VB,
            width: 0,
            height: 0
          }))
        }
      }));
      let uB = wd(BB),
        HB = Hd(uB, TB, dB, null != (VB = Ld.get(BB)) ? VB : null);
      Ld.set(BB, HB), Ed(BB, uB), DB.forEach((TB => {
        let dB = TB.indexOf("\0"),
          VB = TB.slice(0, dB),
          yB = TB.slice(dB + 1);
        BB.hasEdge(VB, yB) && BB.removeEdge(VB, yB)
      })), lB.forEach((TB => {
        let {
          clusterId: dB,
          subgraph: VB,
          bounds: yB,
          removedNodes: pB,
          removedEdges: lB
        } = TB;
        var JB, YB;
        let gB = BB.node(dB),
          oB = null != (JB = null == gB ? void 0 : gB.x) ? JB : 0,
          kB = null != (YB = null == gB ? void 0 : gB.y) ? YB : 0,
          LB = (yB.minX + yB.maxX) / 2,
          OB = (yB.UB + yB.FB) / 2;
        pB.forEach((TB => {
          let {
            id: dB,
            node: VB,
            parent: yB
          } = TB;
          BB.setNode(dB, VB), void 0 !== yB && BB.setParent(dB, yB)
        })), lB.forEach((TB => {
          let {
            edge: dB,
            label: VB
          } = TB;
          BB.setEdge(dB, VB)
        })), VB.nodes().forEach((TB => {
          if (TB === dB) return;
          let yB = VB.node(TB),
            pB = BB.node(TB);
          pB && yB && "number" == typeof yB.x && "number" == typeof yB.y && (pB.x = oB + (yB.x - LB), pB.y = kB + (yB.y - OB))
        })), delete gB._dagreClusterSubgraph
      })), yB.forEach((TB => {
        var dB, VB;
        let yB = BB.node(TB),
          lB = pB[TB];
        if (yB && yB.rankdir && yB._dagreClusterSubgraph && lB) {
          let pB = yB._dagreClusterSubgraph,
            JB = null != (dB = yB.x) ? dB : 0,
            YB = null != (VB = yB.y) ? VB : 0,
            gB = (lB.minX + lB.maxX) / 2,
            oB = (lB.UB + lB.FB) / 2;
          pB.nodes().forEach((dB => {
            if (dB === TB) return;
            let VB = pB.node(dB),
              yB = BB.node(dB);
            if (yB && VB && "number" == typeof VB.x && "number" == typeof VB.y) {
              let BB = VB.x - gB,
                TB = VB.y - oB;
              yB.x = JB + BB, yB.y = YB + TB
            }
          })), delete yB._dagreClusterSubgraph
        }
      }))
    }

    function Hd(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var yB, pB;
      let lB = !1 !== (null == dB ? void 0 : dB.useDynamic),
        JB = lB && null != (yB = null == VB ? void 0 : VB.graph) ? yB : null,
        YB = lB && null != (pB = null == VB ? void 0 : VB.rawNodes) ? pB : null;
      TB("    makeSpaceForEdgeLabels", (() => function(BB) {
        let TB = BB.graph();
        TB.ranksep /= 2, BB.edges().forEach((dB => {
          var VB;
          let yB = BB.edge(dB);
          yB.minlen *= 2, "c" !== (null != (VB = yB.labelpos) ? VB : "r").toLowerCase() && ("TB" === TB.rankdir || "BT" === TB.rankdir ? yB.width += yB.labeloffset : yB.height += yB.labeloffset)
        }))
      }(BB))), TB("    removeSelfEdges", (() => function(BB) {
        BB.edges().forEach((TB => {
          if (TB.v === TB.w) {
            let dB = BB.node(TB.v);
            dB.selfEdges || (dB.selfEdges = []), dB.selfEdges.push({
              e: TB,
              label: BB.edge(TB)
            }), BB.removeEdge(TB)
          }
        }))
      }(BB))), TB("    acyclic", (() => OT(BB, JB))), TB("    nestingGraph.run", (() => RT(BB))), TB("    rank", (() => cT(WB(BB)))), TB("    injectEdgeLabelProxies", (() => function(BB) {
        BB.edges().forEach((TB => {
          let dB = BB.edge(TB);
          if (dB.width && dB.height) {
            let dB = BB.node(TB.v),
              VB = {
                rank: (BB.node(TB.w).rank - dB.rank) / 2 + dB.rank,
                e: TB
              };
            XB(BB, "edge-proxy", VB, "_ep")
          }
        }))
      }(BB))), TB("    removeEmptyRanks", (() => function(BB) {
        let TB = BB.nodes().map((TB => BB.node(TB).rank)).filter((BB => void 0 !== BB)),
          dB = xB(Math.min, TB),
          VB = [];
        BB.nodes().forEach((TB => {
          let yB = BB.node(TB).rank - dB;
          VB[yB] || (VB[yB] = []), VB[yB].push(TB)
        }));
        let yB = 0,
          pB = BB.graph().nodeRankFactor;
        Array.from(VB).forEach(((TB, dB) => {
          void 0 === TB && dB % pB !== 0 ? --yB : void 0 !== TB && yB && TB.forEach((TB => BB.node(TB).rank += yB))
        }))
      }(BB))), TB("    nestingGraph.cleanup", (() => function(BB) {
        let TB = BB.graph();
        BB.removeNode(TB.nestingRoot), delete TB.nestingRoot, BB.edges().forEach((TB => {
          BB.edge(TB).nestingEdge && BB.removeEdge(TB)
        }))
      }(BB))), TB("    normalizeRanks", (() => function(BB) {
        let TB = BB.nodes().map((TB => {
            let dB = BB.node(TB).rank;
            return void 0 === dB ? Number.MAX_VALUE : dB
          })),
          dB = xB(Math.min, TB);
        BB.nodes().forEach((TB => {
          let VB = BB.node(TB);
          Object.hasOwn(VB, "rank") && (VB.rank -= dB)
        }))
      }(BB))), TB("    assignRankMinMax", (() => function(BB) {
        let TB = 0;
        BB.nodes().forEach((dB => {
          let VB = BB.node(dB);
          VB.borderTop && (VB.minRank = BB.node(VB.borderTop).rank, VB.maxRank = BB.node(VB.borderBottom).rank, TB = Math.max(TB, VB.maxRank))
        })), BB.graph().maxRank = TB
      }(BB))), TB("    removeEdgeLabelProxies", (() => function(BB) {
        BB.nodes().forEach((TB => {
          let dB = BB.node(TB);
          if ("edge-proxy" === dB.dummy) {
            let VB = dB;
            BB.edge(VB.e).labelRank = dB.rank, BB.removeNode(TB)
          }
        }))
      }(BB))), TB("    normalize.run", (() => DT(BB))), TB("    parentDummyChains", (() => QT(BB))), TB("    addBorderSegments", (() => ZT(BB))), TB("    order", (() => dd(BB, dB, YB))), TB("    insertSelfEdges", (() => function(BB) {
        CB(BB).forEach((TB => {
          let dB = 0;
          TB.forEach(((TB, VB) => {
            let yB = BB.node(TB);
            "number" != typeof yB.rank && (yB.rank = 0), yB.order = VB + dB, (yB.selfEdges || []).forEach((TB => {
              XB(BB, "selfedge", {
                width: TB.label.width,
                height: TB.label.height,
                rank: yB.rank,
                order: VB + ++dB,
                e: TB.e,
                edgeLabel: TB.label
              }, "_se"), (!Array.isArray(TB.label.points) || 7 !== TB.label.points.length) && (TB.label.points = [{
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
            })), delete yB.selfEdges
          }))
        }))
      }(BB))), TB("    adjustCoordinateSystem", (() => function(BB) {
        var TB;
        let dB = null == (TB = BB.graph().rankdir) ? void 0 : TB.toLowerCase();
        ("lr" === dB || "rl" === dB) && hT(BB)
      }(BB))), TB("    position", (() => kd(BB, dB.corePath))), TB("    positionSelfEdges", (() => function(BB) {
        BB.nodes().forEach((TB => {
          let dB = BB.node(TB),
            VB = BB => "number" == typeof BB && isFinite(BB);
          if ("selfedge" === dB.dummy) {
            let yB = dB,
              pB = BB.node(yB.e.v),
              lB = VB(null == pB ? void 0 : pB.x) ? pB.x : 0,
              JB = VB(null == pB ? void 0 : pB.y) ? pB.y : 0,
              YB = VB(null == pB ? void 0 : pB.width) ? pB.width : 0,
              gB = VB(null == pB ? void 0 : pB.height) ? pB.height : 0,
              oB = VB(dB.x) ? dB.x : lB,
              kB = VB(dB.y) ? dB.y : JB,
              LB = YB / 2,
              OB = gB / 2;
            yB.edgeLabel.points = [{
              x: oB + LB,
              y: kB - OB
            }, {
              x: oB + LB,
              y: kB - OB
            }, {
              x: oB,
              y: kB
            }, {
              x: oB - LB,
              y: kB + OB
            }, {
              x: oB - LB,
              y: kB + OB
            }, {
              x: oB,
              y: kB
            }, {
              x: oB,
              y: kB
            }], yB.edgeLabel.x = oB, yB.edgeLabel.y = kB, BB.setEdge(yB.e, yB.edgeLabel), BB.removeNode(TB)
          } else dB && Array.isArray(dB.selfEdges) && dB.selfEdges.forEach((BB => {
            if (!Array.isArray(BB.label.points) || 7 !== BB.label.points.length) {
              let TB = VB(dB.x) ? dB.x : 0,
                yB = VB(dB.y) ? dB.y : 0,
                pB = (VB(dB.width) ? dB.width : 0) / 2,
                lB = (VB(dB.height) ? dB.height : 0) / 2;
              BB.label.points = [{
                x: TB + pB,
                y: yB - lB
              }, {
                x: TB + pB,
                y: yB - lB
              }, {
                x: TB,
                y: yB
              }, {
                x: TB - pB,
                y: yB + lB
              }, {
                x: TB - pB,
                y: yB + lB
              }, {
                x: TB,
                y: yB
              }, {
                x: TB,
                y: yB
              }]
            }
          }))
        }))
      }(BB)));
      let gB = JSON.parse(JSON.stringify(BB._nodes));
      return TB("    removeBorderNodes", (() => function(BB) {
        BB.nodes().forEach((TB => {
          if (BB.children(TB).length) {
            let dB = BB.node(TB),
              VB = BB.node(dB.borderTop),
              yB = BB.node(dB.borderBottom),
              pB = BB.node(dB.borderLeft[dB.borderLeft.length - 1]),
              lB = BB.node(dB.borderRight[dB.borderRight.length - 1]);
            dB.width = Math.abs(lB.x - pB.x), dB.height = Math.abs(yB.y - VB.y), dB.x = pB.x + dB.width / 2, dB.y = VB.y + dB.height / 2
          }
        })), BB.nodes().forEach((TB => {
          "border" === BB.node(TB).dummy && BB.removeNode(TB)
        }))
      }(BB))), TB("    normalize.undo", (() => function(BB) {
        BB.graph().dummyChains.forEach((TB => {
          let dB, VB = BB.node(TB),
            yB = VB.edgeLabel;
          for (BB.setEdge(VB.edgeObj, yB); VB.dummy;) dB = BB.successors(TB)[0], BB.removeNode(TB), yB.points.push({
            x: VB.x,
            y: VB.y
          }), "edge-label" === VB.dummy && (yB.x = VB.x, yB.y = VB.y, yB.width = VB.width, yB.height = VB.height), TB = dB, VB = BB.node(TB)
        }))
      }(BB))), TB("    fixupEdgeLabelCoords", (() => function(BB) {
        BB.edges().forEach((TB => {
          let dB = BB.edge(TB);
          if (Object.hasOwn(dB, "x")) switch (("l" === dB.labelpos || "r" === dB.labelpos) && (dB.width -= dB.labeloffset), dB.labelpos) {
            case "l":
              dB.x -= dB.width / 2 + dB.labeloffset;
              break;
            case "r":
              dB.x += dB.width / 2 + dB.labeloffset
          }
        }))
      }(BB))), TB("    undoCoordinateSystem", (() => WT(BB))), TB("    translateGraph", (() => function(BB) {
        let TB = Number.POSITIVE_INFINITY,
          dB = 0,
          VB = Number.POSITIVE_INFINITY,
          yB = 0,
          pB = BB.graph(),
          lB = pB.marginx || 0,
          JB = pB.marginy || 0;

        function YB(BB) {
          let pB = BB.x,
            lB = BB.y,
            JB = BB.width,
            YB = BB.height;
          TB = Math.min(TB, pB - JB / 2), dB = Math.max(dB, pB + JB / 2), VB = Math.min(VB, lB - YB / 2), yB = Math.max(yB, lB + YB / 2)
        }
        BB.nodes().forEach((TB => YB(BB.node(TB)))), BB.edges().forEach((TB => {
          let dB = BB.edge(TB);
          Object.hasOwn(dB, "x") && YB(dB)
        })), TB -= lB, VB -= JB, BB.nodes().forEach((dB => {
          let yB = BB.node(dB);
          yB.x -= TB, yB.y -= VB
        })), BB.edges().forEach((dB => {
          let yB = BB.edge(dB);
          yB.points.forEach((BB => {
            BB.x -= TB, BB.y -= VB
          })), Object.hasOwn(yB, "x") && (yB.x -= TB), Object.hasOwn(yB, "y") && (yB.y -= VB)
        })), pB.width = dB - TB + lB, pB.height = yB - VB + JB
      }(BB))), TB("    assignNodeIntersects", (() => function(BB) {
        BB.edges().forEach((TB => {
          if (TB.v === TB.w) return;
          let dB, VB, yB = BB.edge(TB),
            pB = BB.node(TB.v),
            lB = BB.node(TB.w);
          yB.points ? (dB = yB.points[0], VB = yB.points[yB.points.length - 1]) : (yB.points = [], dB = lB, VB = pB), yB.points.unshift(hB(pB, dB)), yB.points.push(hB(lB, VB))
        }))
      }(BB))), TB("    reversePoints", (() => function(BB) {
        BB.edges().forEach((TB => {
          let dB = BB.edge(TB);
          dB.reversed && dB.points.reverse()
        }))
      }(BB))), TB("    acyclic.undo", (() => function(BB) {
        BB.edges().forEach((TB => {
          let dB = BB.edge(TB);
          if (dB.reversed) {
            BB.removeEdge(TB);
            let VB = dB.forwardName;
            delete dB.reversed, delete dB.forwardName, BB.setEdge(TB.w, TB.v, dB, VB)
          }
        }))
      }(BB))), {
        graph: BB,
        rawNodes: gB
      }
    }

    function Ed(BB, TB) {
      BB.nodes().forEach((dB => {
        let VB = BB.node(dB),
          yB = TB.node(dB);
        VB && (VB.x = yB.x, VB.y = yB.y, VB.order = yB.order, VB.rank = yB.rank, TB.children(dB).length && (VB.width = yB.width, VB.height = yB.height))
      })), BB.edges().forEach((dB => {
        let VB = BB.edge(dB),
          yB = TB.edge(dB);
        VB.points = yB.points, Object.hasOwn(yB, "x") && (VB.x = yB.x, VB.y = yB.y)
      })), BB.graph().width = TB.graph().width, BB.graph().height = TB.graph().height
    }
    var vd = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      md = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Nd = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      td = ["width", "height", "rank"],
      fd = {
        width: 0,
        height: 0
      },
      sd = ["minlen", "weight", "width", "height", "labeloffset"],
      Md = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      zd = ["labelpos"];

    function wd(BB) {
      let TB = new ZB({
          multigraph: !0,
          compound: !0
        }),
        dB = Fd(BB.graph());
      return TB.setGraph(Object.assign({}, md, Ud(dB, vd), TT(dB, Nd))), BB.nodes().forEach((dB => {
        let VB = Ud(Fd(BB.node(dB)), td);
        Object.keys(fd).forEach((BB => {
          void 0 === VB[BB] && (VB[BB] = fd[BB])
        })), TB.setNode(dB, VB);
        let yB = BB.parent(dB);
        void 0 !== yB && TB.setParent(dB, yB)
      })), BB.edges().forEach((dB => {
        let VB = Fd(BB.edge(dB));
        TB.setEdge(dB, Object.assign({}, Md, Ud(VB, sd), TT(VB, zd)))
      })), TB
    }

    function Ud(BB, TB) {
      return dT(TT(BB, TB), Number)
    }

    function Fd(BB) {
      let TB = {};
      return BB && Object.entries(BB).forEach((BB => {
        let [dB, VB] = BB;
        "string" == typeof dB && (dB = dB.toLowerCase()), TB[dB] = VB
      })), TB
    }

    function Kd(BB) {
      let TB = CB(BB),
        dB = new ZB({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return BB.nodes().forEach((TB => {
        dB.setNode(TB, {
          label: TB
        }), dB.setParent(TB, "layer" + BB.node(TB).rank)
      })), BB.edges().forEach((BB => dB.setEdge(BB.v, BB.w, {}, BB.name))), TB.forEach(((BB, TB) => {
        let VB = "layer" + TB;
        dB.setNode(VB, {
          rank: "same"
        }), BB.reduce(((BB, TB) => (dB.setEdge(BB, TB, {
          style: "invis"
        }), TB)))
      })), dB
    }
    var rd = {
        time: AB,
        notime: bB
      },
      Id = {
        graphlib: pB,
        version: pT,
        layout: Od,
        debug: Kd,
        util: {
          time: AB,
          notime: bB
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);