/*! For license information please see 7zvlu.120.a6f8800a.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6396: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Graph: () => PB,
      debug: () => Hz,
      default: () => Fz,
      graphlib: () => dB,
      layout: () => sz,
      util: () => Dz,
      version: () => dj
    });
    var QB = Object.defineProperty,
      nB = (BB, jB, zB) => ((BB, jB, zB) => jB in BB ? QB(BB, jB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zB
      }) : BB[jB] = zB)(BB, "symbol" != typeof jB ? jB + "" : jB, zB),
      dB = {};
    ((BB, jB) => {
      for (var zB in jB) QB(BB, zB, {
        get: jB[zB],
        enumerable: !0
      })
    })(dB, {
      Graph: () => PB,
      alg: () => kB
    });
    var IB = Object.defineProperty,
      NB = (BB, jB) => {
        for (var zB in jB) IB(BB, zB, {
          get: jB[zB],
          enumerable: !0
        })
      },
      uB = class {
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
        setNodes(BB, jB) {
          return BB.forEach((BB => {
            void 0 !== jB ? this.setNode(BB, jB) : this.setNode(BB)
          })), this
        }
        setNode(BB, jB) {
          return BB in this._nodes ? (arguments.length > 1 && (this._nodes[BB] = jB), this) : (this._nodes[BB] = arguments.length > 1 ? jB : this._defaultNodeLabelFn(BB), this._isCompound && (this._parent[BB] = "\0", this._children[BB] = {}, this._children["\0"][BB] = !0), this._in[BB] = {}, this._preds[BB] = {}, this._out[BB] = {}, this._sucs[BB] = {}, ++this._nodeCount, this)
        }
        node(BB) {
          return this._nodes[BB]
        }
        hasNode(BB) {
          return BB in this._nodes
        }
        removeNode(BB) {
          if (BB in this._nodes) {
            let jB = BB => this.removeEdge(this._edgeObjs[BB]);
            delete this._nodes[BB], this._isCompound && (this._removeFromParentsChildList(BB), delete this._parent[BB], this.children(BB).forEach((BB => {
              this.setParent(BB)
            })), delete this._children[BB]), Object.keys(this._in[BB]).forEach(jB), delete this._in[BB], delete this._preds[BB], Object.keys(this._out[BB]).forEach(jB), delete this._out[BB], delete this._sucs[BB], --this._nodeCount
          }
          return this
        }
        setParent(BB, jB) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === jB) jB = "\0";
          else {
            for (let zB = jB += ""; void 0 !== zB; zB = this.parent(zB))
              if (zB === BB) throw new Error("Setting " + jB + " as parent of " + BB + " would create a cycle");
            this.setNode(jB)
          }
          return this.setNode(BB), this._removeFromParentsChildList(BB), this._parent[BB] = jB, this._children[jB][BB] = !0, this
        }
        parent(BB) {
          if (this._isCompound) {
            let jB = this._parent[BB];
            if ("\0" !== jB) return jB
          }
        }
        children() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let jB = this._children[BB];
            if (jB) return Object.keys(jB)
          } else {
            if ("\0" === BB) return this.nodes();
            if (this.hasNode(BB)) return []
          }
          return []
        }
        predecessors(BB) {
          let jB = this._preds[BB];
          if (jB) return Object.keys(jB)
        }
        successors(BB) {
          let jB = this._sucs[BB];
          if (jB) return Object.keys(jB)
        }
        neighbors(BB) {
          let jB = this.predecessors(BB);
          if (jB) {
            let zB = new Set(jB),
              QB = this.successors(BB);
            if (QB)
              for (let BB of QB) zB.add(BB);
            return Array.from(zB.values())
          }
        }
        isLeaf(BB) {
          var jB;
          let zB;
          return zB = this.isDirected() ? this.successors(BB) : this.neighbors(BB), 0 === (null != (jB = null == zB ? void 0 : zB.length) ? jB : 0)
        }
        filterNodes(BB) {
          let jB = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          jB.setGraph(this.graph()), Object.entries(this._nodes).forEach((zB => {
            let [QB, nB] = zB;
            BB(QB) && jB.setNode(QB, nB)
          })), Object.values(this._edgeObjs).forEach((BB => {
            jB.hasNode(BB.v) && jB.hasNode(BB.w) && jB.setEdge(BB, this.edge(BB))
          }));
          let zB = {},
            QB = BB => {
              let nB = this.parent(BB);
              return !nB || jB.hasNode(nB) ? (zB[BB] = nB, nB) : nB in zB ? zB[nB] : QB(nB)
            };
          return this._isCompound && jB.nodes().forEach((BB => jB.setParent(BB, QB(BB)))), jB
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
        setPath(BB, jB) {
          return BB.reduce(((BB, zB) => (void 0 !== jB ? this.setEdge(BB, zB, jB) : this.setEdge(BB, zB), zB))), this
        }
        setEdge(BB, jB, zB, QB) {
          let nB, dB, IB, NB, uB = !1;
          "object" == typeof BB && null !== BB && "v" in BB ? (nB = BB.v, dB = BB.w, IB = BB.name, 2 === arguments.length && (NB = jB, uB = !0)) : (nB = BB, dB = jB, IB = QB, arguments.length > 2 && (NB = zB, uB = !0)), nB = "" + nB, dB = "" + dB, void 0 !== IB && (IB = "" + IB);
          let aB = pB(this._isDirected, nB, dB, IB);
          if (aB in this._edgeLabels) return uB && (this._edgeLabels[aB] = NB), this;
          if (void 0 !== IB && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(nB), this.setNode(dB), this._edgeLabels[aB] = uB ? NB : this._defaultEdgeLabelFn(nB, dB, IB);
          let rB = function(BB, jB, zB, QB) {
            let nB = "" + jB,
              dB = "" + zB;
            if (!BB && nB > dB) {
              let BB = nB;
              nB = dB, dB = BB
            }
            let IB = {
              v: nB,
              w: dB
            };
            return QB && (IB.name = QB), IB
          }(this._isDirected, nB, dB, IB);
          return nB = rB.v, dB = rB.w, Object.freeze(rB), this._edgeObjs[aB] = rB, UB(this._preds[dB], nB), UB(this._sucs[nB], dB), this._in[dB][aB] = rB, this._out[nB][aB] = rB, this._edgeCount++, this
        }
        edge(BB, jB, zB) {
          let QB = 1 === arguments.length ? rB(this._isDirected, BB) : pB(this._isDirected, BB, jB, zB);
          return this._edgeLabels[QB]
        }
        edgeAsObj(BB, jB, zB) {
          let QB = 1 === arguments.length ? this.edge(BB) : this.edge(BB, jB, zB);
          return "object" != typeof QB || null === QB ? {
            label: QB
          } : QB
        }
        hasEdge(BB, jB, zB) {
          return (1 === arguments.length ? rB(this._isDirected, BB) : pB(this._isDirected, BB, jB, zB)) in this._edgeLabels
        }
        removeEdge(BB, jB, zB) {
          let QB = 1 === arguments.length ? rB(this._isDirected, BB) : pB(this._isDirected, BB, jB, zB),
            nB = this._edgeObjs[QB];
          if (nB) {
            let BB = nB.v,
              jB = nB.w;
            delete this._edgeLabels[QB], delete this._edgeObjs[QB], aB(this._preds[jB], BB), aB(this._sucs[BB], jB), delete this._in[jB][QB], delete this._out[BB][QB], this._edgeCount--
          }
          return this
        }
        inEdges(BB, jB) {
          return this.isDirected() ? this.filterEdges(this._in[BB], BB, jB) : this.nodeEdges(BB, jB)
        }
        outEdges(BB, jB) {
          return this.isDirected() ? this.filterEdges(this._out[BB], BB, jB) : this.nodeEdges(BB, jB)
        }
        nodeEdges(BB, jB) {
          if (BB in this._nodes) return this.filterEdges({
            ...this._in[BB],
            ...this._out[BB]
          }, BB, jB)
        }
        _removeFromParentsChildList(BB) {
          delete this._children[this._parent[BB]][BB]
        }
        filterEdges(BB, jB, zB) {
          if (!BB) return;
          let QB = Object.values(BB);
          return zB ? QB.filter((BB => BB.v === jB && BB.w === zB || BB.v === zB && BB.w === jB)) : QB
        }
      };

    function UB(BB, jB) {
      BB[jB] ? BB[jB]++ : BB[jB] = 1
    }

    function aB(BB, jB) {
      void 0 !== BB[jB] && !--BB[jB] && delete BB[jB]
    }

    function pB(BB, jB, zB, QB) {
      let nB = "" + jB,
        dB = "" + zB;
      if (!BB && nB > dB) {
        let BB = nB;
        nB = dB, dB = BB
      }
      return nB + "\x01" + dB + "\x01" + (void 0 === QB ? "\0" : QB)
    }

    function rB(BB, jB) {
      return pB(BB, jB.v, jB.w, jB.name)
    }

    function sB(BB) {
      let jB = {
          options: {
            directed: BB.isDirected(),
            multigraph: BB.isMultigraph(),
            compound: BB.isCompound()
          },
          nodes: JB(BB),
          edges: mB(BB)
        },
        zB = BB.graph();
      return void 0 !== zB && (jB.value = structuredClone(zB)), jB
    }

    function JB(BB) {
      return BB.nodes().map((jB => {
        let zB = BB.node(jB),
          QB = BB.parent(jB),
          nB = {
            v: jB
          };
        return void 0 !== zB && (nB.value = zB), void 0 !== QB && (nB.parent = QB), nB
      }))
    }

    function mB(BB) {
      return BB.edges().map((jB => {
        let zB = BB.edge(jB),
          QB = {
            v: jB.v,
            w: jB.w
          };
        return void 0 !== jB.name && (QB.name = jB.name), void 0 !== zB && (QB.value = zB), QB
      }))
    }

    function yB(BB) {
      let jB = new uB(BB.options);
      return void 0 !== BB.value && jB.setGraph(BB.value), BB.nodes.forEach((BB => {
        jB.setNode(BB.v, BB.value), BB.parent && jB.setParent(BB.v, BB.parent)
      })), BB.edges.forEach((BB => {
        jB.setEdge({
          v: BB.v,
          w: BB.w,
          name: BB.name
        }, BB.value)
      })), jB
    }
    NB({}, {
      read: () => yB,
      write: () => sB
    });
    var kB = {};
    NB(kB, {
      CycleException: () => HB,
      bellmanFord: () => LB,
      components: () => gB,
      dijkstra: () => MB,
      dijkstraAll: () => EB,
      findCycles: () => qB,
      floydWarshall: () => oB,
      isAcyclic: () => FB,
      postorder: () => XB,
      preorder: () => ZB,
      prim: () => AB,
      shortestPaths: () => TB,
      tarjan: () => iB,
      topsort: () => DB
    });
    var GB = () => 1;

    function LB(BB, jB, zB, QB) {
      return function(BB, jB, zB, QB) {
        let nB, dB = {},
          IB = 0,
          NB = BB.nodes(),
          uB = function(BB) {
            let jB = dB[BB.v],
              QB = dB[BB.w];
            if (!jB || !QB) return;
            let IB = zB(BB);
            jB.distance + IB < QB.distance && (dB[BB.w] = {
              distance: jB.distance + IB,
              predecessor: BB.v
            }, nB = !0)
          },
          UB = function() {
            NB.forEach((function(BB) {
              QB(BB).forEach((function(jB) {
                let zB = jB.v === BB ? jB.v : jB.w,
                  QB = zB === jB.v ? jB.w : jB.v;
                uB({
                  v: zB,
                  w: QB
                })
              }))
            }))
          };
        NB.forEach((function(BB) {
          let zB = BB === jB ? 0 : Number.POSITIVE_INFINITY;
          dB[BB] = {
            distance: zB,
            predecessor: ""
          }
        }));
        let aB = NB.length;
        for (let pB = 1; pB < aB && (nB = !1, IB++, UB(), nB); pB++);
        if (IB === aB - 1 && (nB = !1, UB(), nB)) throw new Error("The graph contains a negative weight cycle");
        return dB
      }(BB, String(jB), zB || GB, QB || function(jB) {
        var zB;
        return null != (zB = BB.outEdges(jB)) ? zB : []
      })
    }

    function gB(BB) {
      let jB, zB = {},
        QB = [];

      function nB(QB) {
        var dB, IB;
        QB in zB || (zB[QB] = !0, jB.push(QB), null == (dB = BB.successors(QB)) || dB.forEach(nB), null == (IB = BB.predecessors(QB)) || IB.forEach(nB))
      }
      return BB.nodes().forEach((function(BB) {
        jB = [], nB(BB), jB.length && QB.push(jB)
      })), QB
    }
    var tB = class {
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
          let jB = this._keyIndices[BB];
          if (void 0 !== jB) return this._arr[jB].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(BB, jB) {
          let zB = this._keyIndices,
            QB = String(BB);
          if (!(QB in zB)) {
            let BB = this._arr,
              nB = BB.length;
            return zB[QB] = nB, BB.push({
              key: QB,
              priority: jB
            }), this._decrease(nB), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let BB = this._arr.pop();
          return delete this._keyIndices[BB.key], this._heapify(0), BB.key
        }
        decrease(BB, jB) {
          let zB = this._keyIndices[BB];
          if (void 0 === zB) throw new Error(`Key not found: ${BB}`);
          let QB = this._arr[zB].priority;
          if (jB > QB) throw new Error(`New priority is greater than current priority. Key: ${BB} Old: ${QB} New: ${jB}`);
          this._arr[zB].priority = jB, this._decrease(zB)
        }
        _heapify(BB) {
          let jB = this._arr,
            zB = 2 * BB,
            QB = zB + 1,
            nB = BB;
          zB < jB.length && (nB = jB[zB].priority < jB[nB].priority ? zB : nB, QB < jB.length && (nB = jB[QB].priority < jB[nB].priority ? QB : nB), nB !== BB && (this._swap(BB, nB), this._heapify(nB)))
        }
        _decrease(BB) {
          let jB, zB = this._arr,
            QB = zB[BB].priority;
          for (; 0 !== BB && (jB = BB >> 1, !(zB[jB].priority < QB));) this._swap(BB, jB), BB = jB
        }
        _swap(BB, jB) {
          let zB = this._arr,
            QB = this._keyIndices,
            nB = zB[BB],
            dB = zB[jB];
          zB[BB] = dB, zB[jB] = nB, QB[dB.key] = BB, QB[nB.key] = jB
        }
      },
      SB = () => 1;

    function MB(BB, jB, zB, QB) {
      return function(BB, jB, zB, QB) {
        let nB, dB, IB = {},
          NB = new tB,
          uB = function(BB) {
            let jB = BB.v !== nB ? BB.v : BB.w,
              QB = IB[jB];
            if (!QB) return;
            let uB = zB(BB),
              UB = dB.distance + uB;
            if (uB < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + BB + " Weight: " + uB);
            UB < QB.distance && (QB.distance = UB, QB.predecessor = nB, NB.decrease(jB, UB))
          };
        for (BB.nodes().forEach((function(BB) {
            let zB = BB === jB ? 0 : Number.POSITIVE_INFINITY;
            IB[BB] = {
              distance: zB,
              predecessor: ""
            }, NB.add(BB, zB)
          })); NB.size() > 0;) {
          nB = NB.removeMin();
          let BB = IB[nB];
          if (!BB || BB.distance === Number.POSITIVE_INFINITY) break;
          dB = BB, QB(nB).forEach(uB)
        }
        return IB
      }(BB, String(jB), zB || SB, QB || function(jB) {
        var zB;
        return null != (zB = BB.outEdges(jB)) ? zB : []
      })
    }

    function EB(BB, jB, zB) {
      return BB.nodes().reduce((function(QB, nB) {
        return QB[nB] = MB(BB, nB, jB, zB), QB
      }), {})
    }

    function iB(BB) {
      let jB = 0,
        zB = [],
        QB = {},
        nB = [];

      function dB(IB) {
        var NB;
        let uB = QB[IB] = {
          onStack: !0,
          lowlink: jB,
          index: jB++
        };
        if (zB.push(IB), null == (NB = BB.successors(IB)) || NB.forEach((function(BB) {
            if (BB in QB) {
              let jB = QB[BB];
              null != jB && jB.onStack && (uB.lowlink = Math.min(uB.lowlink, jB.index))
            } else {
              dB(BB);
              let jB = QB[BB];
              jB && (uB.lowlink = Math.min(uB.lowlink, jB.lowlink))
            }
          })), uB.lowlink === uB.index) {
          let BB, jB = [];
          do {
            BB = zB.pop();
            let nB = QB[BB];
            nB && (nB.onStack = !1), jB.push(BB)
          } while (IB !== BB);
          nB.push(jB)
        }
      }
      return BB.nodes().forEach((function(BB) {
        BB in QB || dB(BB)
      })), nB
    }

    function qB(BB) {
      return iB(BB).filter((function(jB) {
        var zB;
        let QB = jB[0];
        return !!QB && (jB.length > 1 || 1 === jB.length && (null != (zB = BB.outEdges(QB, QB)) ? zB : []).length > 0)
      }))
    }
    var fB = () => 1;

    function oB(BB, jB, zB) {
      return function(BB, jB, zB) {
        let QB = {},
          nB = BB.nodes();
        return nB.forEach((function(BB) {
          let dB = {};
          QB[BB] = dB, dB[BB] = {
            distance: 0,
            predecessor: ""
          }, nB.forEach((function(jB) {
            BB !== jB && (dB[jB] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), zB(BB).forEach((function(zB) {
            let QB = zB.v === BB ? zB.w : zB.v,
              nB = jB(zB);
            dB[QB] = {
              distance: nB,
              predecessor: BB
            }
          }))
        })), nB.forEach((function(BB) {
          let jB = QB[BB];
          jB && nB.forEach((function(zB) {
            let dB = QB[zB];
            dB && nB.forEach((function(zB) {
              let QB = dB[BB],
                nB = jB[zB],
                IB = dB[zB];
              if (QB && nB && IB) {
                let BB = QB.distance + nB.distance;
                BB < IB.distance && (IB.distance = BB, IB.predecessor = nB.predecessor)
              }
            }))
          }))
        })), QB
      }(BB, jB || fB, zB || function(jB) {
        var zB;
        return null != (zB = BB.outEdges(jB)) ? zB : []
      })
    }
    var HB = class extends Error {
      constructor(BB) {
        super(BB), this.name = "CycleException"
      }
    };

    function DB(BB) {
      let jB = {},
        zB = {},
        QB = [];
      if (BB.sinks().forEach((function nB(dB) {
          var IB;
          if (dB in zB) throw new HB;
          dB in jB || (zB[dB] = !0, jB[dB] = !0, null == (IB = BB.predecessors(dB)) || IB.forEach(nB), delete zB[dB], QB.push(dB))
        })), Object.keys(jB).length !== BB.nodeCount()) throw new HB;
      return QB
    }

    function FB(BB) {
      try {
        DB(BB)
      } catch (jB) {
        if (jB instanceof HB) return !1;
        throw jB
      }
      return !0
    }

    function YB(BB, jB, zB, QB, nB) {
      Array.isArray(jB) || (jB = [jB]);
      let dB = jB => {
          var zB;
          return null != (zB = BB.isDirected() ? BB.successors(jB) : BB.neighbors(jB)) ? zB : []
        },
        IB = {};
      return jB.forEach((function(jB) {
        if (!BB.hasNode(jB)) throw new Error("Graph does not have node: " + jB);
        nB = VB(BB, jB, "post" === zB, IB, dB, QB, nB)
      })), nB
    }

    function VB(BB, jB, zB, QB, nB, dB, IB) {
      return jB in QB || (QB[jB] = !0, zB || (IB = dB(IB, jB)), nB(jB).forEach((function(jB) {
        IB = VB(BB, jB, zB, QB, nB, dB, IB)
      })), zB && (IB = dB(IB, jB))), IB
    }

    function hB(BB, jB, zB) {
      return YB(BB, jB, zB, (function(BB, jB) {
        return BB.push(jB), BB
      }), [])
    }

    function XB(BB, jB) {
      return hB(BB, jB, "post")
    }

    function ZB(BB, jB) {
      return hB(BB, jB, "pre")
    }

    function AB(BB, jB) {
      var zB;
      let QB, nB = new uB,
        dB = {},
        IB = new tB;

      function NB(BB) {
        let zB = BB.v === QB ? BB.w : BB.v,
          nB = IB.priority(zB);
        if (void 0 !== nB) {
          let NB = jB(BB);
          NB < nB && (dB[zB] = QB, IB.decrease(zB, NB))
        }
      }
      if (0 === BB.nodeCount()) return nB;
      BB.nodes().forEach((function(BB) {
        IB.add(BB, Number.POSITIVE_INFINITY), nB.setNode(BB)
      }));
      let UB = BB.nodes()[0];
      void 0 !== UB && IB.decrease(UB, 0);
      let aB = !1;
      for (; IB.size() > 0;) {
        if (QB = IB.removeMin(), QB in dB) nB.setEdge(QB, dB[QB]);
        else {
          if (aB) throw new Error("Input graph is not connected: " + BB);
          aB = !0
        }
        null == (zB = BB.nodeEdges(QB)) || zB.forEach(NB)
      }
      return nB
    }

    function TB(BB, jB, zB, QB) {
      return function(BB, jB, zB, QB) {
        if (void 0 === zB) return MB(BB, jB, zB, QB);
        let nB = !1,
          dB = BB.nodes();
        for (let IB = 0; IB < dB.length; IB++) {
          let NB = dB[IB];
          if (void 0 === NB) continue;
          let uB = QB(NB);
          for (let BB = 0; BB < uB.length; BB++) {
            let jB = uB[BB];
            if (!jB) continue;
            let QB = jB.v === NB ? jB.v : jB.w;
            zB({
              v: QB,
              w: QB === jB.v ? jB.w : jB.v
            }) < 0 && (nB = !0)
          }
          if (nB) return LB(BB, jB, zB, QB)
        }
        return MB(BB, jB, zB, QB)
      }(BB, jB, zB, null != QB ? QB : jB => {
        var zB;
        return null != (zB = BB.outEdges(jB)) ? zB : []
      })
    }
    var PB = uB;

    function WB(BB, jB, zB, QB) {
      let nB = QB;
      for (; BB.hasNode(nB);) nB = OB(QB);
      return zB.dummy = jB, BB.setNode(nB, zB), nB
    }

    function eB(BB) {
      let jB = new PB({
        multigraph: BB.isMultigraph()
      }).setGraph(BB.graph());
      return BB.nodes().forEach((zB => {
        BB.children(zB).length || jB.setNode(zB, BB.node(zB))
      })), BB.edges().forEach((zB => {
        jB.setEdge(zB, BB.edge(zB))
      })), jB
    }

    function lB(BB, jB) {
      let zB, QB, nB = BB.x,
        dB = BB.y,
        IB = jB.x - nB,
        NB = jB.y - dB,
        uB = BB.width / 2,
        UB = BB.height / 2;
      if (!IB && !NB) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(NB) * uB > Math.abs(IB) * UB ? (NB < 0 && (UB = -UB), zB = UB * IB / NB, QB = UB) : (IB < 0 && (uB = -uB), zB = uB, QB = uB * NB / IB), {
        x: nB + zB,
        y: dB + QB
      }
    }

    function wB(BB) {
      let jB = Bj(cB(BB) + 1).map((() => []));
      return BB.nodes().forEach((zB => {
        let QB = BB.node(zB),
          nB = QB.rank;
        void 0 !== nB && (jB[nB] || (jB[nB] = []), jB[nB][QB.order] = zB)
      })), jB
    }

    function xB(BB, jB, zB, QB) {
      let nB = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (nB.rank = zB, nB.order = QB), WB(BB, "border", nB, jB)
    }
    var KB = 65535;

    function CB(BB, jB) {
      if (jB.length > KB) {
        let zB = function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KB,
            zB = [];
          for (let QB = 0; QB < BB.length; QB += jB) {
            let nB = BB.slice(QB, QB + jB);
            zB.push(nB)
          }
          return zB
        }(jB);
        return BB(...zB.map((jB => BB(...jB))))
      }
      return BB(...jB)
    }

    function cB(BB) {
      let jB = BB.nodes().map((jB => {
        let zB = BB.node(jB).rank;
        return void 0 === zB ? Number.MIN_VALUE : zB
      }));
      return CB(Math.max, jB)
    }

    function bB(BB, jB) {
      let zB = Date.now();
      try {
        return jB()
      } finally {
        console.log(BB + " time: " + (Date.now() - zB) + "ms")
      }
    }

    function vB(BB, jB) {
      return jB()
    }
    var RB = 0;

    function OB(BB) {
      return BB + "" + ++RB
    }

    function Bj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == jB && (jB = BB, BB = 0);
      let QB = BB => BB < jB;
      zB < 0 && (QB = BB => jB < BB);
      let nB = [];
      for (let dB = BB; QB(dB); dB += zB) nB.push(dB);
      return nB
    }

    function jj(BB, jB) {
      let zB = {};
      for (let QB of jB) void 0 !== BB[QB] && (zB[QB] = BB[QB]);
      return zB
    }

    function zj(BB, jB) {
      let zB;
      return zB = "string" == typeof jB ? BB => BB[jB] : jB, Object.entries(BB).reduce(((BB, jB) => {
        let [QB, nB] = jB;
        return BB[QB] = zB(nB, QB), BB
      }), {})
    }
    var Qj = "\0";

    function nj(BB, jB, zB) {
      var QB, nB, dB, IB, NB, uB;
      if (!(BB && jB && zB && "edge" === jB.dummy && "edge" === zB.dummy && jB.edgeObj && zB.edgeObj && BB[jB.edgeObj.v] && BB[zB.edgeObj.v] && BB[jB.edgeObj.w] && BB[zB.edgeObj.w])) return 0;
      let UB = !0;
      jB.edgeObj.w === zB.edgeObj.w && (UB = !1);
      let aB = UB ? null != (nB = null == (QB = BB[jB.edgeObj.v]) ? void 0 : QB.rank) ? nB : NaN : null != (IB = null == (dB = BB[jB.edgeObj.w]) ? void 0 : dB.rank) ? IB : NaN,
        pB = Object.entries(BB).find((BB => {
          var zB, QB;
          return (null == (zB = BB[1].edgeObj) ? void 0 : zB.v) === jB.edgeObj.v && (null == (QB = BB[1].edgeObj) ? void 0 : QB.w) === jB.edgeObj.w && BB[1].rank === aB
        })),
        rB = Object.entries(BB).find((BB => {
          var jB, QB;
          return (null == (jB = BB[1].edgeObj) ? void 0 : jB.v) === zB.edgeObj.v && (null == (QB = BB[1].edgeObj) ? void 0 : QB.w) === zB.edgeObj.w && BB[1].rank === aB
        }));
      if (!pB || !rB) return 0;
      let sB = null != (NB = pB[1].order) ? NB : NaN,
        JB = null != (uB = rB[1].order) ? uB : NaN;
      return isNaN(sB - JB) ? 0 : sB - JB
    }
    var dj = "3.1.1";

    function Ij(BB) {
      BB._prev._next = BB._next, BB._next._prev = BB._prev, delete BB._next, delete BB._prev
    }

    function Nj(BB, jB) {
      if ("_next" !== BB && "_prev" !== BB) return jB
    }
    var uj = class {
        constructor() {
          nB(this, "_sentinel");
          let BB = {};
          BB._next = BB._prev = BB, this._sentinel = BB
        }
        dequeue() {
          let BB = this._sentinel,
            jB = BB._prev;
          if (jB !== BB) return Ij(jB), jB
        }
        enqueue(BB) {
          let jB = this._sentinel;
          BB._prev && BB._next && Ij(BB), BB._next = jB._next, jB._next._prev = BB, jB._next = BB, BB._prev = jB
        }
        toString() {
          let BB = [],
            jB = this._sentinel,
            zB = jB._prev;
          for (; zB !== jB;) BB.push(JSON.stringify(zB, Nj)), zB = zB._prev;
          return "[" + BB.join(", ") + "]"
        }
      },
      Uj = () => 1;

    function aj(BB, jB) {
      if (BB.nodeCount() <= 1) return [];
      let zB = function(BB, jB) {
        let zB = new PB,
          QB = 0,
          nB = 0;
        BB.nodes().forEach((BB => {
          zB.setNode(BB, {
            v: BB,
            in: 0,
            out: 0
          })
        })), BB.edges().forEach((BB => {
          let dB = zB.edge(BB.v, BB.w) || 0,
            IB = jB(BB),
            NB = dB + IB;
          zB.setEdge(BB.v, BB.w, NB);
          let uB = zB.node(BB.v),
            UB = zB.node(BB.w);
          nB = Math.max(nB, uB.out += IB), QB = Math.max(QB, UB.in += IB)
        }));
        let dB = function(BB) {
            let jB = [];
            for (let zB = 0; zB < BB; zB++) jB.push(zB);
            return jB
          }(nB + QB + 3).map((() => new uj)),
          IB = QB + 1;
        return zB.nodes().forEach((BB => {
          rj(dB, IB, zB.node(BB))
        })), {
          graph: zB,
          buckets: dB,
          zeroIdx: IB
        }
      }(BB, jB || Uj);
      return function(BB, jB, zB) {
        var QB;
        let nB, dB = [],
          IB = jB[jB.length - 1],
          NB = jB[0];
        for (; BB.nodeCount();) {
          for (; nB = NB.dequeue();) pj(BB, jB, zB, nB);
          for (; nB = IB.dequeue();) pj(BB, jB, zB, nB);
          if (BB.nodeCount())
            for (let IB = jB.length - 2; IB > 0; --IB)
              if (nB = null == (QB = jB[IB]) ? void 0 : QB.dequeue(), nB) {
                dB = dB.concat(pj(BB, jB, zB, nB, !0) || []);
                break
              }
        }
        return dB
      }(zB.graph, zB.buckets, zB.zeroIdx).flatMap((jB => BB.outEdges(jB.v, jB.w) || []))
    }

    function pj(BB, jB, zB, QB, nB) {
      let dB = [],
        IB = nB ? dB : void 0;
      return (BB.inEdges(QB.v) || []).forEach((QB => {
        let IB = BB.edge(QB),
          NB = BB.node(QB.v);
        nB && dB.push({
          v: QB.v,
          w: QB.w
        }), NB.out -= IB, rj(jB, zB, NB)
      })), (BB.outEdges(QB.v) || []).forEach((QB => {
        let nB = BB.edge(QB),
          dB = QB.w,
          IB = BB.node(dB);
        IB.in -= nB, rj(jB, zB, IB)
      })), BB.removeNode(QB.v), IB
    }

    function rj(BB, jB, zB) {
      var QB, nB, dB;
      zB.out ? zB.in ? null == (dB = BB[zB.out - zB.in + jB]) || dB.enqueue(zB) : null == (nB = BB[BB.length - 1]) || nB.enqueue(zB) : null == (QB = BB[0]) || QB.enqueue(zB)
    }

    function sj(BB, jB) {
      var zB;
      ("greedy" === BB.graph().acyclicer ? aj(BB, (zB = BB, BB => zB.edge(BB).weight)) : function(BB, jB) {
        let zB = [],
          QB = {},
          nB = {};

        function dB(jB) {
          Object.hasOwn(nB, jB) || (nB[jB] = !0, QB[jB] = !0, BB.outEdges(jB).forEach((BB => {
            Object.hasOwn(QB, BB.w) ? zB.push(BB) : dB(BB.w)
          })), delete QB[jB])
        }

        function IB(dB) {
          var NB;
          Object.hasOwn(nB, dB) || (nB[dB] = !0, QB[dB] = !0, null == (NB = BB.outEdges(dB)) || NB.forEach((nB => {
            var NB, uB;
            Object.hasOwn(QB, nB.w) || (null == (NB = jB.node(dB)) ? void 0 : NB.rank) > (null == (uB = jB.node(nB.w)) ? void 0 : uB.rank) && function(BB, jB, zB) {
              let QB = new Set;

              function nB(jB) {
                var dB;
                if (BB.sources().includes(jB)) return !0;
                QB.add(jB);
                for (let IB of null != (dB = BB.inEdges(jB)) ? dB : [])
                  if ((IB.v !== zB.v || IB.w !== zB.w) && !QB.has(IB.v) && nB(IB.v)) return !0;
                return !1
              }
              return nB(jB)
            }(BB, nB.w, nB) ? zB.push(nB) : IB(nB.w)
          })), delete QB[dB])
        }
        let NB = dB;
        return jB && "function" == typeof jB.node && (NB = IB), BB.sources().forEach(NB), BB.nodes().forEach(NB), zB
      }(BB, null != jB ? jB : null)).forEach((jB => {
        let zB = BB.edge(jB);
        BB.removeEdge(jB), zB.forwardName = jB.name, zB.reversed = !0, BB.setEdge(jB.w, jB.v, zB, OB("rev"))
      }))
    }

    function Jj(BB) {
      BB.graph().dummyChains = [], BB.edges().forEach((jB => function(BB, jB) {
        let zB, QB, nB, dB = jB.v,
          IB = BB.node(dB).rank,
          NB = jB.w,
          uB = BB.node(NB).rank,
          UB = jB.name,
          aB = BB.edge(jB),
          pB = aB.labelRank;
        if (uB === IB + 1) return;
        for (BB.removeEdge(jB), nB = 0, ++IB; IB < uB; ++nB, ++IB) aB.points = [], QB = {
          width: 0,
          height: 0,
          edgeLabel: aB,
          edgeObj: jB,
          rank: IB
        }, zB = WB(BB, "edge", QB, "_d"), IB === pB && (QB.width = aB.width, QB.height = aB.height, QB.dummy = "edge-label", QB.labelpos = aB.labelpos), BB.setEdge(dB, zB, {
          weight: aB.weight
        }, UB), 0 === nB && BB.graph().dummyChains.push(zB), dB = zB;
        BB.setEdge(dB, NB, {
          weight: aB.weight
        }, UB)
      }(BB, jB)))
    }

    function mj(BB) {
      let jB = {};
      BB.sources().forEach((function zB(QB) {
        let nB = BB.node(QB);
        if (Object.hasOwn(jB, QB)) return nB.rank;
        jB[QB] = !0;
        let dB = BB.outEdges(QB),
          IB = dB ? dB.map((jB => null == jB ? Number.POSITIVE_INFINITY : zB(jB.w) - BB.edge(jB).minlen)) : [],
          NB = CB(Math.min, IB);
        return NB === Number.POSITIVE_INFINITY && (NB = 0), nB.rank = NB
      }))
    }

    function yj(BB, jB) {
      return BB.node(jB.w).rank - BB.node(jB.v).rank - BB.edge(jB).minlen
    }
    var kj = function(BB) {
      let jB = new PB({
          directed: !1
        }),
        zB = BB.nodes();
      if (0 === zB.length) throw new Error("Graph must have at least one node");
      let QB, nB, dB = zB[0],
        IB = BB.nodeCount();
      for (jB.setNode(dB, {}); Gj(jB, BB) < IB && (QB = Lj(jB, BB), QB);) nB = jB.hasNode(QB.v) ? yj(BB, QB) : -yj(BB, QB), gj(jB, BB, nB);
      return jB
    };

    function Gj(BB, jB) {
      return BB.nodes().forEach((function zB(QB) {
        let nB = jB.nodeEdges(QB);
        nB && nB.forEach((nB => {
          let dB = nB.v,
            IB = QB === dB ? nB.w : dB;
          !BB.hasNode(IB) && !yj(jB, nB) && (BB.setNode(IB, {}), BB.setEdge(QB, IB, {}), zB(IB))
        }))
      })), BB.nodeCount()
    }

    function Lj(BB, jB) {
      return jB.edges().reduce(((zB, QB) => {
        let nB = Number.POSITIVE_INFINITY;
        return BB.hasNode(QB.v) !== BB.hasNode(QB.w) && (nB = yj(jB, QB)), nB < zB[0] ? [nB, QB] : zB
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function gj(BB, jB, zB) {
      BB.nodes().forEach((BB => jB.node(BB).rank += zB))
    }
    var {
      preorder: tj,
      postorder: Sj
    } = kB, Mj = Ej;

    function Ej(BB) {
      BB = function(BB) {
        let jB = (new PB).setGraph(BB.graph());
        return BB.nodes().forEach((zB => jB.setNode(zB, BB.node(zB)))), BB.edges().forEach((zB => {
          let QB = jB.edge(zB.v, zB.w) || {
              weight: 0,
              minlen: 1
            },
            nB = BB.edge(zB);
          jB.setEdge(zB.v, zB.w, {
            weight: QB.weight + nB.weight,
            minlen: Math.max(QB.minlen, nB.minlen)
          })
        })), jB
      }(BB), mj(BB);
      let jB, zB, QB = kj(BB);
      for (fj(QB), ij(QB, BB); jB = Hj(QB);) zB = Dj(QB, BB, jB), Fj(QB, BB, jB, zB)
    }

    function ij(BB, jB) {
      let zB = Sj(BB, BB.nodes());
      zB = zB.slice(0, zB.length - 1), zB.forEach((zB => function(BB, jB, zB) {
        let QB = BB.node(zB).parent,
          nB = BB.edge(zB, QB);
        nB.cutvalue = qj(BB, jB, zB)
      }(BB, jB, zB)))
    }

    function qj(BB, jB, zB) {
      let QB = BB.node(zB).parent,
        nB = !0,
        dB = jB.edge(zB, QB),
        IB = 0;
      dB || (nB = !1, dB = jB.edge(QB, zB)), IB = dB.weight;
      let NB = jB.nodeEdges(zB);
      return NB && NB.forEach((dB => {
        let NB = dB.v === zB,
          uB = NB ? dB.w : dB.v;
        if (uB !== QB) {
          let QB = NB === nB,
            UB = jB.edge(dB).weight;
          if (IB += QB ? UB : -UB, function(BB, jB, zB) {
              return BB.hasEdge(jB, zB)
            }(BB, zB, uB)) {
            let jB = BB.edge(zB, uB).cutvalue;
            IB += QB ? -jB : jB
          }
        }
      })), IB
    }

    function fj(BB, jB) {
      arguments.length < 2 && (jB = BB.nodes()[0]), oj(BB, {}, 1, jB)
    }

    function oj(BB, jB, zB, QB, nB) {
      let dB = zB,
        IB = BB.node(QB);
      jB[QB] = !0;
      let NB = BB.neighbors(QB);
      return NB && NB.forEach((nB => {
        Object.hasOwn(jB, nB) || (zB = oj(BB, jB, zB, nB, QB))
      })), IB.low = dB, IB.lim = zB++, nB ? IB.parent = nB : delete IB.parent, zB
    }

    function Hj(BB) {
      return BB.edges().find((jB => BB.edge(jB).cutvalue < 0))
    }

    function Dj(BB, jB, zB) {
      let QB = zB.v,
        nB = zB.w;
      jB.hasEdge(QB, nB) || (QB = zB.w, nB = zB.v);
      let dB = BB.node(QB),
        IB = BB.node(nB),
        NB = dB,
        uB = !1;
      return dB.lim > IB.lim && (NB = IB, uB = !0), jB.edges().filter((jB => uB === Yj(BB, BB.node(jB.v), NB) && uB !== Yj(BB, BB.node(jB.w), NB))).reduce(((BB, zB) => yj(jB, zB) < yj(jB, BB) ? zB : BB))
    }

    function Fj(BB, jB, zB, QB) {
      let nB = zB.v,
        dB = zB.w;
      BB.removeEdge(nB, dB), BB.setEdge(QB.v, QB.w, {}), fj(BB), ij(BB, jB),
        function(BB, jB) {
          let zB = BB.nodes().find((jB => !BB.node(jB).parent));
          if (!zB) return;
          let QB = tj(BB, [zB]);
          QB = QB.slice(1), QB.forEach((zB => {
            let QB = BB.node(zB).parent,
              nB = jB.edge(zB, QB),
              dB = !1;
            nB || (nB = jB.edge(QB, zB), dB = !0), jB.node(zB).rank = jB.node(QB).rank + (dB ? nB.minlen : -nB.minlen)
          }))
        }(BB, jB)
    }

    function Yj(BB, jB, zB) {
      return zB.low <= jB.lim && jB.lim <= zB.lim
    }
    Ej.initLowLimValues = fj, Ej.initCutValues = ij, Ej.calcCutValue = qj, Ej.leaveEdge = Hj, Ej.enterEdge = Dj, Ej.exchangeEdges = Fj;
    var Vj = function(BB) {
      let jB = BB.graph().ranker;
      if ("function" == typeof jB) return jB(BB);
      switch (jB) {
        case "network-simplex":
        default:
          Xj(BB);
          break;
        case "tight-tree":
          ! function(BB) {
            mj(BB), kj(BB)
          }(BB);
          break;
        case "longest-path":
          hj(BB);
        case "none":
      }
    };
    var hj = mj;

    function Xj(BB) {
      Mj(BB)
    }
    var Zj = function(BB) {
      let jB = function(BB) {
          let jB = {},
            zB = 0;

          function QB(nB) {
            let dB = zB;
            BB.children(nB).forEach(QB), jB[nB] = {
              low: dB,
              lim: zB++
            }
          }
          return BB.children(Qj).forEach(QB), jB
        }(BB),
        zB = BB.graph();
      if (!Array.isArray(zB.dummyChains)) return;
      zB.dummyChains.forEach((zB => {
        let QB = BB.node(zB),
          nB = QB.edgeObj,
          dB = function(BB, jB, zB, QB) {
            let nB, dB = [],
              IB = [],
              NB = Math.min(jB[zB].low, jB[QB].low),
              uB = Math.max(jB[zB].lim, jB[QB].lim);
            nB = zB;
            do {
              nB = BB.parent(nB), dB.push(nB)
            } while (nB && (jB[nB].low > NB || uB > jB[nB].lim));
            let UB = nB,
              aB = QB;
            for (;
              (aB = BB.parent(aB)) !== UB;) IB.push(aB);
            return {
              path: dB.concat(IB.reverse()),
              lca: UB
            }
          }(BB, jB, nB.v, nB.w),
          IB = dB.path,
          NB = dB.lca,
          uB = 0,
          UB = IB[uB],
          aB = !0;
        for (; zB !== nB.w;) {
          if (QB = BB.node(zB), aB) {
            for (;
              (UB = IB[uB]) !== NB && BB.node(UB).maxRank < QB.rank;) uB++;
            UB === NB && (aB = !1)
          }
          if (!aB) {
            for (; uB < IB.length - 1 && BB.node(IB[uB + 1]).minRank <= QB.rank;) uB++;
            UB = IB[uB]
          }
          void 0 !== UB && BB.setParent(zB, UB), zB = BB.successors(zB)[0]
        }
      }))
    };

    function Aj(BB) {
      let jB = WB(BB, "root", {}, "_root"),
        zB = function(BB) {
          let jB = {};

          function zB(QB, nB) {
            let dB = BB.children(QB);
            dB && dB.length && dB.forEach((BB => zB(BB, nB + 1))), jB[QB] = nB
          }
          return BB.children(Qj).forEach((BB => zB(BB, 1))), jB
        }(BB),
        QB = Object.values(zB),
        nB = CB(Math.max, QB) - 1,
        dB = 2 * nB + 1;
      BB.graph().nestingRoot = jB, BB.edges().forEach((jB => BB.edge(jB).minlen *= dB));
      let IB = function(BB) {
        return BB.edges().reduce(((jB, zB) => jB + BB.edge(zB).weight), 0)
      }(BB) + 1;
      BB.children(Qj).forEach((QB => {
        Tj(BB, jB, dB, IB, nB, zB, QB)
      })), BB.graph().nodeRankFactor = dB
    }

    function Tj(BB, jB, zB, QB, nB, dB, IB) {
      var NB;
      let uB = BB.children(IB);
      if (!uB.length) return void(IB !== jB && BB.setEdge(jB, IB, {
        weight: 0,
        minlen: zB
      }));
      let UB = xB(BB, "_bt"),
        aB = xB(BB, "_bb"),
        pB = BB.node(IB);
      BB.setParent(UB, IB), pB.borderTop = UB, BB.setParent(aB, IB), pB.borderBottom = aB, uB.forEach((NB => {
        var uB;
        Tj(BB, jB, zB, QB, nB, dB, NB);
        let pB = BB.node(NB),
          rB = pB.borderTop ? pB.borderTop : NB,
          sB = pB.borderBottom ? pB.borderBottom : NB,
          JB = pB.borderTop ? QB : 2 * QB,
          mB = rB !== sB ? 1 : nB - (null != (uB = dB[IB]) ? uB : 0) + 1;
        BB.setEdge(UB, rB, {
          weight: JB,
          minlen: mB,
          nestingEdge: !0
        }), BB.setEdge(sB, aB, {
          weight: JB,
          minlen: mB,
          nestingEdge: !0
        })
      })), BB.parent(IB) || BB.setEdge(jB, UB, {
        weight: 0,
        minlen: nB + (null != (NB = dB[IB]) ? NB : 0)
      })
    }
    var Pj = function(BB) {
      BB.children(Qj).forEach((function jB(zB) {
        let QB = BB.children(zB),
          nB = BB.node(zB);
        if (QB.length && QB.forEach(jB), nB && Object.hasOwn(nB, "minRank")) {
          nB.borderLeft = [], nB.borderRight = [];
          for (let jB = nB.minRank, QB = nB.maxRank + 1; jB < QB; ++jB) Wj(BB, "borderLeft", "_bl", zB, nB, jB), Wj(BB, "borderRight", "_br", zB, nB, jB)
        }
      }))
    };

    function Wj(BB, jB, zB, QB, nB, dB) {
      let IB = {
          width: 0,
          height: 0,
          rank: dB,
          borderType: jB
        },
        NB = nB[jB][dB - 1],
        uB = WB(BB, "border", IB, zB);
      nB[jB][dB] = uB, BB.setParent(uB, QB), NB && BB.setEdge(NB, uB, {
        weight: 1
      })
    }

    function ej(BB) {
      var jB;
      let zB = null == (jB = BB.graph().rankdir) ? void 0 : jB.toLowerCase();
      ("bt" === zB || "rl" === zB) && function(BB) {
        BB.nodes().forEach((jB => xj(BB.node(jB)))), BB.edges().forEach((jB => {
          var zB;
          let QB = BB.edge(jB);
          null == (zB = QB.points) || zB.forEach(xj), Object.hasOwn(QB, "y") && xj(QB)
        }))
      }(BB), ("lr" === zB || "rl" === zB) && (function(BB) {
        BB.nodes().forEach((jB => Kj(BB.node(jB)))), BB.edges().forEach((jB => {
          var zB;
          let QB = BB.edge(jB);
          null == (zB = QB.points) || zB.forEach(Kj), Object.hasOwn(QB, "x") && Kj(QB)
        }))
      }(BB), lj(BB))
    }

    function lj(BB) {
      BB.nodes().forEach((jB => wj(BB.node(jB)))), BB.edges().forEach((jB => wj(BB.edge(jB))))
    }

    function wj(BB) {
      let jB = BB.width;
      BB.width = BB.height, BB.height = jB
    }

    function xj(BB) {
      BB.y = -BB.y
    }

    function Kj(BB) {
      let jB = BB.x;
      BB.x = BB.y, BB.y = jB
    }

    function Cj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        zB = {},
        QB = BB.nodes().filter((jB => !BB.children(jB).length)),
        nB = QB.map((jB => BB.node(jB).rank)),
        dB = Bj(CB(Math.max, nB) + 1).map((() => []));
      return QB.sort(((jB, zB) => BB.node(jB).rank - BB.node(zB).rank)).forEach((function QB(nB) {
        if (zB[nB]) return;
        zB[nB] = !0;
        let IB = BB.node(nB);
        dB[IB.rank].push(nB);
        let NB = BB.successors(nB);
        NB && [...NB].sort(((zB, QB) => function(zB, QB) {
          let nB = BB.node(zB),
            dB = BB.node(QB);
          return nj(jB, nB, dB)
        }(zB, QB))).forEach(QB)
      })), dB
    }

    function cj(BB, jB) {
      let zB = 0;
      for (let QB = 1; QB < jB.length; ++QB) zB += bj(BB, jB[QB - 1], jB[QB]);
      return zB
    }

    function bj(BB, jB, zB) {
      let QB = function(BB, jB) {
          return BB.reduce(((BB, zB, QB) => (BB[zB] = jB[QB], BB)), {})
        }(zB, zB.map(((BB, jB) => jB))),
        nB = jB.flatMap((jB => {
          let zB = BB.outEdges(jB);
          return zB ? zB.map((jB => ({
            pos: QB[jB.w],
            weight: BB.edge(jB).weight
          }))).sort(((BB, jB) => BB.pos - jB.pos)) : []
        })),
        dB = 1;
      for (; dB < zB.length;) dB <<= 1;
      let IB = 2 * dB - 1;
      dB -= 1;
      let NB = new Array(IB).fill(0),
        uB = 0;
      return nB.forEach((BB => {
        let jB = BB.pos + dB;
        NB[jB] += BB.weight;
        let zB = 0;
        for (; jB > 0;) jB % 2 && (zB += NB[jB + 1]), jB = jB - 1 >> 1, NB[jB] += BB.weight;
        uB += BB.weight * zB
      })), uB
    }

    function vj(BB, jB) {
      let zB = {};
      return BB.forEach(((BB, jB) => {
          let QB = {
            indegree: 0,
            in: [],
            out: [],
            vs: [BB.v],
            i: jB
          };
          void 0 !== BB.barycenter && (QB.barycenter = BB.barycenter, QB.weight = BB.weight), zB[BB.v] = QB
        })), jB.edges().forEach((BB => {
          let jB = zB[BB.v],
            QB = zB[BB.w];
          void 0 !== jB && void 0 !== QB && (QB.indegree++, jB.out.push(QB))
        })),
        function(BB) {
          let jB = [];

          function zB(BB) {
            return jB => {
              jB.merged || (void 0 === jB.barycenter || void 0 === BB.barycenter || jB.barycenter >= BB.barycenter) && function(BB, jB) {
                let zB = 0,
                  QB = 0;
                BB.weight && (zB += BB.barycenter * BB.weight, QB += BB.weight), jB.weight && (zB += jB.barycenter * jB.weight, QB += jB.weight), BB.vs = jB.vs.concat(BB.vs), BB.barycenter = zB / QB, BB.weight = QB, BB.i = Math.min(jB.i, BB.i), jB.merged = !0
              }(BB, jB)
            }
          }

          function QB(jB) {
            return zB => {
              zB.in.push(jB), 0 === --zB.indegree && BB.push(zB)
            }
          }
          for (; BB.length;) {
            let nB = BB.pop();
            jB.push(nB), nB.in.reverse().forEach(zB(nB)), nB.out.forEach(QB(nB))
          }
          return jB.filter((BB => !BB.merged)).map((BB => jj(BB, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(zB).filter((BB => !BB.indegree)))
    }

    function Rj(BB, jB, zB, QB, nB) {
      let dB = {},
        IB = null,
        NB = null,
        uB = nB;
      "boolean" == typeof jB ? (uB = jB, dB = {}) : jB && (dB = jB, IB = null != zB ? zB : null, NB = null != QB ? QB : null);
      let UB = function(BB, jB) {
          let zB = {
            lhs: [],
            rhs: []
          };
          return BB.forEach((BB => {
            jB(BB) ? zB.lhs.push(BB) : zB.rhs.push(BB)
          })), zB
        }(BB, (BB => Object.hasOwn(BB, "barycenter"))),
        aB = UB.lhs,
        pB = UB.rhs.sort(((BB, jB) => jB.i - BB.i)),
        rB = [],
        sB = 0,
        JB = 0,
        mB = 0;
      aB.sort(function(BB, jB, zB) {
        return (QB, nB) => {
          if (QB.barycenter < nB.barycenter) return -1;
          if (QB.barycenter > nB.barycenter) return 1;
          if (BB && ("string" == typeof QB.vs[0] || "string" == typeof nB.vs[0])) {
            let zB = BB.node(QB.vs[0]),
              dB = BB.node(nB.vs[0]),
              IB = nj(jB, zB, dB);
            if (0 !== IB) return IB
          }
          return zB ? nB.i - QB.i : QB.i - nB.i
        }
      }(NB, IB, !!uB));
      for (let [kB, GB] of Object.entries(dB)) {
        let BB = aB.findIndex((BB => BB.vs[0] === kB));
        aB.splice(BB + 1, 0, GB)
      }
      mB = Oj(rB, pB, mB), aB.forEach((BB => {
        mB += BB.vs.length, rB.push(BB.vs), sB += BB.barycenter * BB.weight, JB += BB.weight, mB = Oj(rB, pB, mB)
      }));
      let yB = {
        vs: rB.flat(1)
      };
      return JB && (yB.barycenter = sB / JB, yB.weight = JB), yB
    }

    function Oj(BB, jB, zB) {
      let QB;
      for (; jB.length && (QB = jB[jB.length - 1]).i <= zB;) jB.pop(), BB.push(QB.vs), zB++;
      return zB
    }

    function Bz(BB, jB, zB, QB, nB) {
      var dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB;
      let yB = null,
        kB = nB;
      "boolean" == typeof QB ? (kB = QB, yB = null) : void 0 !== QB && (yB = QB);
      let GB = BB.children(jB),
        LB = BB.node(jB),
        gB = LB ? LB.borderLeft : void 0,
        tB = LB ? LB.borderRight : void 0,
        SB = {};
      gB && (GB = GB.filter((BB => BB !== gB && BB !== tB)));
      let MB = function(BB) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((jB => {
          let zB = BB.inEdges(jB);
          if (!zB || !zB.length) return {
            v: jB
          };
          {
            let QB = zB.reduce(((jB, zB) => {
              let QB = BB.edge(zB),
                nB = BB.node(zB.v);
              return {
                sum: jB.sum + QB.weight * nB.order,
                weight: jB.weight + QB.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: jB,
              barycenter: QB.sum / QB.weight,
              weight: QB.weight
            }
          }
        }))
      }(BB, GB);
      MB.forEach((jB => {
        if (BB.children(jB.v).length) {
          let {
            result: QB
          } = Bz(BB, jB.v, zB, yB, kB);
          SB[jB.v] = QB, Object.hasOwn(QB, "barycenter") && function(BB, jB) {
            void 0 !== BB.barycenter ? (BB.barycenter = (BB.barycenter * BB.weight + jB.barycenter * jB.weight) / (BB.weight + jB.weight), BB.weight += jB.weight) : (BB.barycenter = jB.barycenter, BB.weight = jB.weight)
          }(jB, QB)
        }
      }));
      let EB = vj(MB, zB);
      ! function(BB, jB) {
        BB.forEach((BB => {
          BB.vs = BB.vs.flatMap((BB => jB[BB] ? jB[BB].vs : BB))
        }))
      }(EB, SB);
      let iB = {},
        qB = !1;
      for (let oB = 0; oB < EB.length; oB++)
        for (let jB = oB + 1; jB < EB.length; jB++)
          if (EB[oB] && EB[jB] && null != (dB = EB[oB]) && dB.barycenter && null != (IB = EB[jB]) && IB.barycenter && (null == (NB = EB[oB]) ? void 0 : NB.barycenter) === EB[jB].barycenter) {
            let zB = null != (UB = null == (uB = EB[oB]) ? void 0 : uB.vs[0]) ? UB : "",
              QB = null != (pB = null == (aB = EB[jB]) ? void 0 : aB.vs[0]) ? pB : "",
              nB = BB.node(zB),
              dB = BB.node(QB);
            if ("edge" === nB.dummy && "edge" === dB.dummy && (null == (rB = nB.edgeObj) ? void 0 : rB.v) === (null == (sB = dB.edgeObj) ? void 0 : sB.v) && (null == (JB = nB.edgeObj) ? void 0 : JB.w) === (null == (mB = dB.edgeObj) ? void 0 : mB.w)) {
              if (nB.edgeLabel.reversed) {
                iB[QB] = EB[oB], EB.splice(oB, 1), oB--;
                break
              }
              iB[zB] = EB[jB], EB.splice(jB, 1), jB--
            } else qB = !0
          } let fB = Rj(EB, iB, yB, BB, kB);
      if (gB && tB) {
        fB.vs = [gB, fB.vs, tB].flat(1);
        let jB = BB.predecessors(gB);
        if (jB && jB.length) {
          let zB = BB.node(jB[0]),
            QB = BB.predecessors(tB),
            nB = BB.node(QB[0]);
          Object.hasOwn(fB, "barycenter") || (fB.barycenter = 0, fB.weight = 0), fB.barycenter = (fB.barycenter * fB.weight + zB.order + nB.order) / (fB.weight + 2), fB.weight += 2
        }
      }
      return Object.defineProperty(fB, "result", {
        value: fB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(fB, "usedBias", {
        value: qB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), fB
    }

    function jz(BB, jB, zB, QB) {
      QB || (QB = BB.nodes());
      let nB = function(BB) {
          let jB;
          for (; BB.hasNode(jB = OB("_root")););
          return jB
        }(BB),
        dB = new PB({
          compound: !0
        }).setGraph({
          root: nB
        }).setDefaultNodeLabel((jB => BB.node(jB)));
      return QB.forEach((QB => {
        let IB = BB.node(QB),
          NB = BB.parent(QB);
        if (IB.rank === jB || IB.minRank <= jB && jB <= IB.maxRank) {
          dB.setNode(QB), dB.setParent(QB, NB || nB);
          let uB = BB[zB](QB);
          uB && uB.forEach((jB => {
            let zB = jB.v === QB ? jB.w : jB.v,
              nB = dB.edge(zB, QB),
              IB = void 0 !== nB ? nB.weight : 0;
            dB.setEdge(zB, QB, {
              weight: BB.edge(jB).weight + IB
            })
          })), Object.hasOwn(IB, "minRank") && dB.setNode(QB, {
            borderLeft: IB.borderLeft[jB],
            borderRight: IB.borderRight[jB]
          })
        }
      })), dB
    }

    function zz(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof jB.customOrder) return void jB.customOrder(BB, zz);
      let QB = cB(BB),
        nB = Qz(BB, Bj(1, QB + 1), "inEdges"),
        dB = Qz(BB, Bj(QB - 1, -1, -1), "outEdges"),
        IB = Cj(BB, zB);
      if (dz(BB, IB), jB.disableOptimalOrderHeuristic) return;
      let NB, uB = Number.POSITIVE_INFINITY,
        UB = jB.constraints || [];
      for (let aB = 0, pB = 0; pB < 4; ++aB, ++pB) {
        nz(aB % 2 ? nB : dB, aB % 4 >= 2, UB, zB), IB = wB(BB);
        let jB = cj(BB, IB);
        jB < uB ? (pB = 0, NB = Object.assign({}, IB), uB = jB) : jB === uB && (NB = structuredClone(IB))
      }
      dz(BB, NB)
    }

    function Qz(BB, jB, zB) {
      let QB = new Map,
        nB = (BB, jB) => {
          QB.has(BB) || QB.set(BB, []), QB.get(BB).push(jB)
        };
      for (let dB of BB.nodes()) {
        let jB = BB.node(dB);
        if ("number" == typeof jB.rank && nB(jB.rank, dB), "number" == typeof jB.minRank && "number" == typeof jB.maxRank)
          for (let BB = jB.minRank; BB <= jB.maxRank; BB++) BB !== jB.rank && nB(BB, dB)
      }
      return jB.map((function(jB) {
        return jz(BB, jB, zB, QB.get(jB) || [])
      }))
    }

    function nz(BB, jB, zB, QB) {
      let nB = !0,
        dB = new PB;
      BB.forEach((function(BB) {
        zB.forEach((BB => dB.setEdge(BB.left, BB.right)));
        let IB = BB.graph().root,
          {
            result: NB,
            usedBias: uB
          } = Bz(BB, IB, dB, QB, nB);
        jB && uB && (nB = !nB), NB.vs.forEach(((jB, zB) => BB.node(jB).order = zB)),
          function(BB, jB, zB) {
            let QB, nB = {};
            zB.forEach((zB => {
              let dB, IB, NB = BB.parent(zB);
              for (; NB;) {
                if (dB = BB.parent(NB), dB ? (IB = nB[dB], nB[dB] = NB) : (IB = QB, QB = NB), IB && IB !== NB) return void jB.setEdge(IB, NB);
                NB = dB
              }
            }))
          }(BB, dB, NB.vs)
      }))
    }

    function dz(BB, jB) {
      Object.values(jB).forEach((jB => jB.forEach(((jB, zB) => BB.node(jB).order = zB))))
    }

    function Iz(BB, jB, zB) {
      if (jB > zB) {
        let BB = jB;
        jB = zB, zB = BB
      }
      let QB = BB[jB];
      QB || (BB[jB] = QB = {}), QB[zB] = !0
    }

    function Nz(BB, jB, zB) {
      if (jB > zB) {
        let BB = jB;
        jB = zB, zB = BB
      }
      let QB = BB[jB];
      return void 0 !== QB && Object.hasOwn(QB, zB)
    }

    function uz(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        dB = {},
        IB = function(BB, jB, zB, QB) {
          let nB = new PB,
            dB = BB.graph(),
            IB = function(BB, jB, zB) {
              return (QB, nB, dB) => {
                let IB, NB = QB.node(nB),
                  uB = QB.node(dB),
                  UB = 0;
                if (UB += NB.width / 2, Object.hasOwn(NB, "labelpos")) switch (NB.labelpos.toLowerCase()) {
                  case "l":
                    IB = -NB.width / 2;
                    break;
                  case "r":
                    IB = NB.width / 2
                }
                if (IB && (UB += zB ? IB : -IB), IB = void 0, UB += (NB.dummy ? jB : BB) / 2, UB += (uB.dummy ? jB : BB) / 2, UB += uB.width / 2, Object.hasOwn(uB, "labelpos")) switch (uB.labelpos.toLowerCase()) {
                  case "l":
                    IB = uB.width / 2;
                    break;
                  case "r":
                    IB = -uB.width / 2
                }
                return IB && (UB += zB ? IB : -IB), UB
              }
            }(dB.nodesep, dB.edgesep, QB);
          return jB.forEach((jB => {
            let QB;
            jB.forEach((jB => {
              let dB = zB[jB];
              if (void 0 !== dB) {
                if (nB.setNode(dB), void 0 !== QB) {
                  let NB = zB[QB];
                  if (void 0 !== NB) {
                    let zB = nB.edge(NB, dB);
                    nB.setEdge(NB, dB, Math.max(IB(BB, jB, QB), zB || 0))
                  }
                }
                QB = jB
              }
            }))
          })), nB
        }(BB, jB, zB, nB),
        NB = nB ? "borderLeft" : "borderRight";

      function uB(BB, jB) {
        let zB = IB.nodes().slice(),
          QB = {},
          nB = zB.pop();
        for (; nB;) {
          if (QB[nB]) BB(nB);
          else {
            QB[nB] = !0, zB.push(nB);
            for (let BB of jB(nB)) zB.push(BB)
          }
          nB = zB.pop()
        }
      }
      return uB((function(BB) {
        let jB = IB.inEdges(BB);
        dB[BB] = jB ? jB.reduce(((BB, jB) => {
          var zB;
          let QB = null != (zB = dB[jB.v]) ? zB : 0,
            nB = IB.edge(jB);
          return Math.max(BB, QB + (void 0 !== nB ? nB : 0))
        }), 0) : 0
      }), (function(BB) {
        return IB.predecessors(BB) || []
      })), uB((function(jB) {
        let zB = IB.outEdges(jB),
          QB = Number.POSITIVE_INFINITY;
        zB && (QB = zB.reduce(((BB, jB) => {
          let zB = dB[jB.w],
            QB = IB.edge(jB);
          return Math.min(BB, (void 0 !== zB ? zB : 0) - (void 0 !== QB ? QB : 0))
        }), Number.POSITIVE_INFINITY));
        let nB = BB.node(jB);
        QB !== Number.POSITIVE_INFINITY && nB.borderType !== NB && (dB[jB] = Math.max(void 0 !== dB[jB] ? dB[jB] : 0, QB))
      }), (function(BB) {
        return IB.successors(BB) || []
      })), Object.keys(QB).forEach((BB => {
        var jB;
        let QB = zB[BB];
        void 0 !== QB && (dB[BB] = null != (jB = dB[QB]) ? jB : 0)
      })), dB
    }

    function Uz(BB, jB) {
      let zB, QB = wB(BB),
        nB = Object.assign(function(BB, jB) {
          let zB = {};
          return jB.length && jB.reduce((function(jB, QB) {
            let nB = 0,
              dB = 0,
              IB = jB.length,
              NB = QB[QB.length - 1];
            return QB.forEach(((jB, uB) => {
              let UB = function(BB, jB) {
                  if (BB.node(jB).dummy) {
                    let zB = BB.predecessors(jB);
                    if (zB) return zB.find((jB => BB.node(jB).dummy))
                  }
                }(BB, jB),
                aB = UB ? BB.node(UB).order : IB;
              (UB || jB === NB) && (QB.slice(dB, uB + 1).forEach((jB => {
                let QB = BB.predecessors(jB);
                QB && QB.forEach((QB => {
                  let dB = BB.node(QB),
                    IB = dB.order;
                  (IB < nB || aB < IB) && (!dB.dummy || !BB.node(jB).dummy) && Iz(zB, QB, jB)
                }))
              })), dB = uB + 1, nB = aB)
            })), QB
          })), zB
        }(BB, QB), function(BB, jB) {
          let zB = {};

          function QB(jB, QB, nB, dB, IB) {
            Bj(QB, nB).forEach((QB => {
              let nB = jB[QB];
              if (void 0 !== nB && BB.node(nB).dummy) {
                let jB = BB.predecessors(nB);
                jB && jB.forEach((jB => {
                  if (void 0 === jB) return;
                  let QB = BB.node(jB);
                  QB.dummy && (QB.order < dB || QB.order > IB) && Iz(zB, jB, nB)
                }))
              }
            }))
          }
          return jB.length && jB.reduce((function(jB, zB) {
            let nB = -1,
              dB = -1,
              IB = 0;
            return zB.forEach(((NB, uB) => {
              if ("border" === BB.node(NB).dummy) {
                let jB = BB.predecessors(NB);
                if (jB && jB.length) {
                  let NB = jB[0];
                  if (void 0 === NB) return;
                  dB = BB.node(NB).order, QB(zB, IB, uB, nB, dB), IB = uB, nB = dB
                }
              }
              QB(zB, IB, zB.length, dB, jB.length)
            })), zB
          })), zB
        }(BB, QB)),
        dB = {};
      ["u", "d"].forEach((IB => {
        zB = "u" === IB ? QB : Object.values(QB).reverse(), ["l", "r"].forEach((QB => {
          "r" === QB && (zB = zB.map((BB => Object.values(BB).reverse())));
          let NB = function(BB, jB, zB, QB, nB) {
              let dB = {},
                IB = {},
                NB = {};
              return jB.forEach((BB => {
                BB.forEach(((BB, jB) => {
                  dB[BB] = BB, IB[BB] = BB, NB[BB] = jB
                }))
              })), jB.forEach((jB => {
                let uB = -1,
                  UB = -1,
                  aB = !1,
                  pB = jB,
                  rB = jB.findIndex((jB => (null == nB ? void 0 : nB.includes(jB)) || az(jB, BB, nB)));
                rB > 0 && (pB = [jB[rB], ...jB.slice(0, rB), ...jB.slice(rB + 1)], aB = !0), pB.forEach((jB => {
                  var pB;
                  let rB = QB(jB);
                  if (rB && rB.length) {
                    null != nB && nB.includes(jB) && (rB = rB.filter((jB => az(jB, BB, nB))));
                    let QB = rB.sort(((BB, jB) => {
                        let zB = NB[BB],
                          QB = NB[jB];
                        return (void 0 !== zB ? zB : 0) - (void 0 !== QB ? QB : 0)
                      })),
                      sB = (QB.length - 1) / 2;
                    for (let BB = Math.floor(sB), nB = Math.ceil(sB); BB <= nB; ++BB) {
                      let nB = QB[BB];
                      if (void 0 === nB) continue;
                      let rB = NB[nB];
                      if (void 0 !== rB && IB[jB] === jB && uB < rB && NB[nB] !== UB && !Nz(zB, jB, nB)) {
                        let BB = dB[nB];
                        void 0 !== BB && (IB[nB] = jB, IB[jB] = dB[jB] = BB, uB = rB, aB && (uB = -1, UB = null != (pB = NB[nB]) ? pB : -1, aB = !1))
                      }
                    }
                  }
                }))
              })), {
                root: dB,
                align: IB
              }
            }(BB, zB, nB, (jB => ("u" === IB ? BB.predecessors(jB) : BB.successors(jB)) || []), jB),
            uB = uz(BB, zB, NB.root, NB.align, "r" === QB);
          "r" === QB && (uB = zj(uB, (BB => -BB))), dB[IB + QB] = uB
        }))
      }));
      let IB = function(BB, jB) {
        return Object.values(jB).reduce(((jB, zB) => {
          let QB = Number.NEGATIVE_INFINITY,
            nB = Number.POSITIVE_INFINITY;
          Object.entries(zB).forEach((jB => {
            let [zB, dB] = jB, IB = function(BB, jB) {
              return BB.node(jB).width
            }(BB, zB) / 2;
            QB = Math.max(dB + IB, QB), nB = Math.min(dB - IB, nB)
          }));
          let dB = QB - nB;
          return dB < jB[0] && (jB = [dB, zB]), jB
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(BB, dB);
      return function(BB, jB) {
          let zB = Object.values(jB),
            QB = CB(Math.min, zB),
            nB = CB(Math.max, zB);
          ["u", "d"].forEach((zB => {
            ["l", "r"].forEach((dB => {
              let IB = zB + dB,
                NB = BB[IB];
              if (!NB || NB === jB) return;
              let uB = Object.values(NB),
                UB = QB - CB(Math.min, uB);
              "l" !== dB && (UB = nB - CB(Math.max, uB)), UB && (BB[IB] = zj(NB, (BB => BB + UB)))
            }))
          }))
        }(dB, IB),
        function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            zB = BB.ul;
          return zB ? zj(zB, ((zB, QB) => {
            var nB, dB;
            if (jB) {
              let zB = jB.toLowerCase(),
                nB = BB[zB];
              if (nB && void 0 !== nB[QB]) return nB[QB]
            }
            let IB = Object.values(BB).map((BB => {
              let jB = BB[QB];
              return void 0 !== jB ? jB : 0
            })).sort(((BB, jB) => BB - jB));
            return ((null != (nB = IB[1]) ? nB : 0) + (null != (dB = IB[2]) ? dB : 0)) / 2
          })) : {}
        }(dB, BB.graph().align)
    }

    function az(BB, jB, zB) {
      var QB;
      if (!zB) return !1;
      let nB = null == (QB = jB.node(BB)) ? void 0 : QB.edgeObj;
      if (!nB || jB.node(BB).edgeLabel.reversed) return !1;
      let dB = zB.indexOf(null == nB ? void 0 : nB.v),
        IB = zB.indexOf(null == nB ? void 0 : nB.w);
      return -1 !== dB && -1 !== IB && dB === (IB + 1) % zB.length || dB === (IB - 1) % zB.length
    }

    function pz(BB, jB) {
      (function(BB) {
        let jB = wB(BB),
          zB = BB.graph(),
          QB = zB.ranksep,
          nB = zB.rankalign,
          dB = 0;
        jB.forEach((jB => {
          let zB = jB.reduce(((jB, zB) => {
            var QB;
            let nB = null != (QB = BB.node(zB).height) ? QB : 0;
            return jB > nB ? jB : nB
          }), 0);
          jB.forEach((jB => {
            let QB = BB.node(jB);
            QB.y = "top" === nB ? dB + QB.height / 2 : "bottom" === nB ? dB + zB - QB.height / 2 : dB + zB / 2
          })), dB += zB + QB
        }))
      })(BB = eB(BB)), Object.entries(Uz(BB, jB)).forEach((jB => {
        let [zB, QB] = jB;
        return BB.node(zB).x = QB
      }))
    }
    var rz = new WeakMap;

    function sz(BB) {
      return mz(BB, vB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), BB
    }

    function Jz(BB, jB, zB) {
      let QB = jB;
      for (; void 0 !== QB;) {
        let jB = BB.parent(QB);
        if (jB === zB) return QB;
        QB = jB
      }
    }

    function mz(BB, jB, zB) {
      var QB;
      let nB = BB.nodes().filter((jB => BB.children(jB).length)),
        dB = {};
      nB.forEach((QB => {
        let nB = BB.node(QB);
        if (nB && nB.rankdir) {
          let IB = new PB({
            multigraph: !0,
            compound: !0
          });
          IB.setGraph({
            rankdir: nB.rankdir
          });
          let NB = BB.children(QB);
          NB.forEach((jB => {
            let zB = {
              ...BB.node(jB)
            };
            IB.setNode(jB, zB);
            let nB = BB.parent(jB);
            nB && nB !== QB && NB.includes(nB) && IB.setParent(jB, nB)
          }));
          let uB = new Set;
          BB.edges().forEach((jB => {
            let zB = Jz(BB, jB.v, QB),
              nB = Jz(BB, jB.w, QB);
            if (zB && nB && zB !== nB) {
              let QB = `${zB}\0${nB}`;
              uB.has(QB) || (uB.add(QB), IB.setEdge(zB, nB, {
                ...BB.edge(jB)
              }))
            }
          })), mz(IB, jB, zB);
          let UB = qz(IB);
          yz(UB, jB, zB, null), kz(IB, UB);
          let aB = 1 / 0,
            pB = 1 / 0,
            rB = -1 / 0,
            sB = -1 / 0;
          IB.nodes().forEach((BB => {
            if (BB === QB) return;
            let jB = IB.node(BB);
            jB && "number" == typeof jB.x && "number" == typeof jB.y && "number" == typeof jB.width && "number" == typeof jB.height && (aB = Math.min(aB, jB.x - jB.width / 2), rB = Math.max(rB, jB.x + jB.width / 2), pB = Math.min(pB, jB.y - jB.height / 2), sB = Math.max(sB, jB.y + jB.height / 2))
          })), (!isFinite(aB) || !isFinite(pB) || !isFinite(rB) || !isFinite(sB)) && (aB = pB = 0, rB = sB = 0);
          let JB = rB - aB,
            mB = sB - pB;
          dB[QB] = {
            minX: aB,
            nQ: pB,
            maxX: rB,
            dQ: sB,
            width: JB,
            height: mB,
            offsetX: aB,
            offsetY: pB
          }, nB._dagreClusterSubgraph = IB
        }
      }));
      let IB = [],
        NB = new Map;
      nB.forEach((jB => {
        let zB = BB.node(jB);
        zB && zB.rankdir && dB[jB] && NB.set(jB, (BB.children(jB) || []).filter((BB => BB !== jB)))
      }));
      let uB = new Set([...NB.values()].flat()),
        UB = new Map;
      NB.forEach(((jB, zB) => {
        uB.has(zB) || UB.set(zB, (jB => {
          let zB = [],
            QB = (BB.children(jB) || []).filter((BB => BB !== jB));
          for (; QB.length > 0;) {
            let jB = QB.shift();
            zB.push(jB), (BB.children(jB) || []).filter((BB => BB !== jB)).forEach((BB => QB.push(BB)))
          }
          return zB
        })(zB))
      }));
      let aB = new Set([...UB.values()].flat()),
        pB = BB => {
          for (let [jB, zB] of UB)
            if (zB.includes(BB)) return jB;
          return BB
        },
        rB = [];
      BB.edges().forEach((jB => {
        (aB.has(jB.v) || aB.has(jB.w)) && rB.push({
          edge: jB,
          label: BB.edge(jB)
        })
      }));
      let sB = new Map;
      aB.forEach((jB => {
        let zB = BB.parent(jB);
        sB.set(jB, "string" == typeof zB ? zB : void 0)
      })), UB.forEach(((jB, zB) => {
        let QB = BB.node(zB),
          nB = [];
        jB.forEach((jB => {
          let zB = BB.node(jB);
          zB && (nB.push({
            id: jB,
            node: zB,
            parent: sB.get(jB)
          }), BB.removeNode(jB))
        }));
        let NB = rB.filter((BB => {
            let {
              edge: zB
            } = BB;
            return jB.includes(zB.v) || jB.includes(zB.w)
          })),
          uB = dB[zB];
        QB && (IB.push({
          clusterId: zB,
          subgraph: QB._dagreClusterSubgraph,
          bounds: uB,
          children: jB,
          removedNodes: nB,
          removedEdges: NB
        }), QB.width = uB.width, QB.height = uB.height)
      }));
      let JB = new Set;
      rB.forEach((jB => {
        let {
          edge: zB,
          label: QB
        } = jB, nB = pB(zB.v), dB = pB(zB.w);
        if (nB !== dB && BB.hasNode(nB) && BB.hasNode(dB)) {
          let jB = `${nB}\0${dB}`;
          JB.has(jB) || (JB.add(jB), BB.setEdge(nB, dB, {
            ...QB,
            width: 0,
            height: 0
          }))
        }
      }));
      let mB = qz(BB),
        yB = yz(mB, jB, zB, null != (QB = rz.get(BB)) ? QB : null);
      rz.set(BB, yB), kz(BB, mB), JB.forEach((jB => {
        let zB = jB.indexOf("\0"),
          QB = jB.slice(0, zB),
          nB = jB.slice(zB + 1);
        BB.hasEdge(QB, nB) && BB.removeEdge(QB, nB)
      })), IB.forEach((jB => {
        let {
          clusterId: zB,
          subgraph: QB,
          bounds: nB,
          removedNodes: dB,
          removedEdges: IB
        } = jB;
        var NB, uB;
        let UB = BB.node(zB),
          aB = null != (NB = null == UB ? void 0 : UB.x) ? NB : 0,
          pB = null != (uB = null == UB ? void 0 : UB.y) ? uB : 0,
          rB = (nB.minX + nB.maxX) / 2,
          sB = (nB.nQ + nB.dQ) / 2;
        dB.forEach((jB => {
          let {
            id: zB,
            node: QB,
            parent: nB
          } = jB;
          BB.setNode(zB, QB), void 0 !== nB && BB.setParent(zB, nB)
        })), IB.forEach((jB => {
          let {
            edge: zB,
            label: QB
          } = jB;
          BB.setEdge(zB, QB)
        })), QB.nodes().forEach((jB => {
          if (jB === zB) return;
          let nB = QB.node(jB),
            dB = BB.node(jB);
          dB && nB && "number" == typeof nB.x && "number" == typeof nB.y && (dB.x = aB + (nB.x - rB), dB.y = pB + (nB.y - sB))
        })), delete UB._dagreClusterSubgraph
      })), nB.forEach((jB => {
        var zB, QB;
        let nB = BB.node(jB),
          IB = dB[jB];
        if (nB && nB.rankdir && nB._dagreClusterSubgraph && IB) {
          let dB = nB._dagreClusterSubgraph,
            NB = null != (zB = nB.x) ? zB : 0,
            uB = null != (QB = nB.y) ? QB : 0,
            UB = (IB.minX + IB.maxX) / 2,
            aB = (IB.nQ + IB.dQ) / 2;
          dB.nodes().forEach((zB => {
            if (zB === jB) return;
            let QB = dB.node(zB),
              nB = BB.node(zB);
            if (nB && QB && "number" == typeof QB.x && "number" == typeof QB.y) {
              let BB = QB.x - UB,
                jB = QB.y - aB;
              nB.x = NB + BB, nB.y = uB + jB
            }
          })), delete nB._dagreClusterSubgraph
        }
      }))
    }

    function yz(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var nB, dB;
      let IB = !1 !== (null == zB ? void 0 : zB.useDynamic),
        NB = IB && null != (nB = null == QB ? void 0 : QB.graph) ? nB : null,
        uB = IB && null != (dB = null == QB ? void 0 : QB.rawNodes) ? dB : null;
      jB("    makeSpaceForEdgeLabels", (() => function(BB) {
        let jB = BB.graph();
        jB.ranksep /= 2, BB.edges().forEach((zB => {
          var QB;
          let nB = BB.edge(zB);
          nB.minlen *= 2, "c" !== (null != (QB = nB.labelpos) ? QB : "r").toLowerCase() && ("TB" === jB.rankdir || "BT" === jB.rankdir ? nB.width += nB.labeloffset : nB.height += nB.labeloffset)
        }))
      }(BB))), jB("    removeSelfEdges", (() => function(BB) {
        BB.edges().forEach((jB => {
          if (jB.v === jB.w) {
            let zB = BB.node(jB.v);
            zB.selfEdges || (zB.selfEdges = []), zB.selfEdges.push({
              e: jB,
              label: BB.edge(jB)
            }), BB.removeEdge(jB)
          }
        }))
      }(BB))), jB("    acyclic", (() => sj(BB, NB))), jB("    nestingGraph.run", (() => Aj(BB))), jB("    rank", (() => Vj(eB(BB)))), jB("    injectEdgeLabelProxies", (() => function(BB) {
        BB.edges().forEach((jB => {
          let zB = BB.edge(jB);
          if (zB.width && zB.height) {
            let zB = BB.node(jB.v),
              QB = {
                rank: (BB.node(jB.w).rank - zB.rank) / 2 + zB.rank,
                e: jB
              };
            WB(BB, "edge-proxy", QB, "_ep")
          }
        }))
      }(BB))), jB("    removeEmptyRanks", (() => function(BB) {
        let jB = BB.nodes().map((jB => BB.node(jB).rank)).filter((BB => void 0 !== BB)),
          zB = CB(Math.min, jB),
          QB = [];
        BB.nodes().forEach((jB => {
          let nB = BB.node(jB).rank - zB;
          QB[nB] || (QB[nB] = []), QB[nB].push(jB)
        }));
        let nB = 0,
          dB = BB.graph().nodeRankFactor;
        Array.from(QB).forEach(((jB, zB) => {
          void 0 === jB && zB % dB !== 0 ? --nB : void 0 !== jB && nB && jB.forEach((jB => BB.node(jB).rank += nB))
        }))
      }(BB))), jB("    nestingGraph.cleanup", (() => function(BB) {
        let jB = BB.graph();
        BB.removeNode(jB.nestingRoot), delete jB.nestingRoot, BB.edges().forEach((jB => {
          BB.edge(jB).nestingEdge && BB.removeEdge(jB)
        }))
      }(BB))), jB("    normalizeRanks", (() => function(BB) {
        let jB = BB.nodes().map((jB => {
            let zB = BB.node(jB).rank;
            return void 0 === zB ? Number.MAX_VALUE : zB
          })),
          zB = CB(Math.min, jB);
        BB.nodes().forEach((jB => {
          let QB = BB.node(jB);
          Object.hasOwn(QB, "rank") && (QB.rank -= zB)
        }))
      }(BB))), jB("    assignRankMinMax", (() => function(BB) {
        let jB = 0;
        BB.nodes().forEach((zB => {
          let QB = BB.node(zB);
          QB.borderTop && (QB.minRank = BB.node(QB.borderTop).rank, QB.maxRank = BB.node(QB.borderBottom).rank, jB = Math.max(jB, QB.maxRank))
        })), BB.graph().maxRank = jB
      }(BB))), jB("    removeEdgeLabelProxies", (() => function(BB) {
        BB.nodes().forEach((jB => {
          let zB = BB.node(jB);
          if ("edge-proxy" === zB.dummy) {
            let QB = zB;
            BB.edge(QB.e).labelRank = zB.rank, BB.removeNode(jB)
          }
        }))
      }(BB))), jB("    normalize.run", (() => Jj(BB))), jB("    parentDummyChains", (() => Zj(BB))), jB("    addBorderSegments", (() => Pj(BB))), jB("    order", (() => zz(BB, zB, uB))), jB("    insertSelfEdges", (() => function(BB) {
        wB(BB).forEach((jB => {
          let zB = 0;
          jB.forEach(((jB, QB) => {
            let nB = BB.node(jB);
            "number" != typeof nB.rank && (nB.rank = 0), nB.order = QB + zB, (nB.selfEdges || []).forEach((jB => {
              WB(BB, "selfedge", {
                width: jB.label.width,
                height: jB.label.height,
                rank: nB.rank,
                order: QB + ++zB,
                e: jB.e,
                edgeLabel: jB.label
              }, "_se"), (!Array.isArray(jB.label.points) || 7 !== jB.label.points.length) && (jB.label.points = [{
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
            })), delete nB.selfEdges
          }))
        }))
      }(BB))), jB("    adjustCoordinateSystem", (() => function(BB) {
        var jB;
        let zB = null == (jB = BB.graph().rankdir) ? void 0 : jB.toLowerCase();
        ("lr" === zB || "rl" === zB) && lj(BB)
      }(BB))), jB("    position", (() => pz(BB, zB.corePath))), jB("    positionSelfEdges", (() => function(BB) {
        BB.nodes().forEach((jB => {
          let zB = BB.node(jB),
            QB = BB => "number" == typeof BB && isFinite(BB);
          if ("selfedge" === zB.dummy) {
            let nB = zB,
              dB = BB.node(nB.e.v),
              IB = QB(null == dB ? void 0 : dB.x) ? dB.x : 0,
              NB = QB(null == dB ? void 0 : dB.y) ? dB.y : 0,
              uB = QB(null == dB ? void 0 : dB.width) ? dB.width : 0,
              UB = QB(null == dB ? void 0 : dB.height) ? dB.height : 0,
              aB = QB(zB.x) ? zB.x : IB,
              pB = QB(zB.y) ? zB.y : NB,
              rB = uB / 2,
              sB = UB / 2;
            nB.edgeLabel.points = [{
              x: aB + rB,
              y: pB - sB
            }, {
              x: aB + rB,
              y: pB - sB
            }, {
              x: aB,
              y: pB
            }, {
              x: aB - rB,
              y: pB + sB
            }, {
              x: aB - rB,
              y: pB + sB
            }, {
              x: aB,
              y: pB
            }, {
              x: aB,
              y: pB
            }], nB.edgeLabel.x = aB, nB.edgeLabel.y = pB, BB.setEdge(nB.e, nB.edgeLabel), BB.removeNode(jB)
          } else zB && Array.isArray(zB.selfEdges) && zB.selfEdges.forEach((BB => {
            if (!Array.isArray(BB.label.points) || 7 !== BB.label.points.length) {
              let jB = QB(zB.x) ? zB.x : 0,
                nB = QB(zB.y) ? zB.y : 0,
                dB = (QB(zB.width) ? zB.width : 0) / 2,
                IB = (QB(zB.height) ? zB.height : 0) / 2;
              BB.label.points = [{
                x: jB + dB,
                y: nB - IB
              }, {
                x: jB + dB,
                y: nB - IB
              }, {
                x: jB,
                y: nB
              }, {
                x: jB - dB,
                y: nB + IB
              }, {
                x: jB - dB,
                y: nB + IB
              }, {
                x: jB,
                y: nB
              }, {
                x: jB,
                y: nB
              }]
            }
          }))
        }))
      }(BB)));
      let UB = JSON.parse(JSON.stringify(BB._nodes));
      return jB("    removeBorderNodes", (() => function(BB) {
        BB.nodes().forEach((jB => {
          if (BB.children(jB).length) {
            let zB = BB.node(jB),
              QB = BB.node(zB.borderTop),
              nB = BB.node(zB.borderBottom),
              dB = BB.node(zB.borderLeft[zB.borderLeft.length - 1]),
              IB = BB.node(zB.borderRight[zB.borderRight.length - 1]);
            zB.width = Math.abs(IB.x - dB.x), zB.height = Math.abs(nB.y - QB.y), zB.x = dB.x + zB.width / 2, zB.y = QB.y + zB.height / 2
          }
        })), BB.nodes().forEach((jB => {
          "border" === BB.node(jB).dummy && BB.removeNode(jB)
        }))
      }(BB))), jB("    normalize.undo", (() => function(BB) {
        BB.graph().dummyChains.forEach((jB => {
          let zB, QB = BB.node(jB),
            nB = QB.edgeLabel;
          for (BB.setEdge(QB.edgeObj, nB); QB.dummy;) zB = BB.successors(jB)[0], BB.removeNode(jB), nB.points.push({
            x: QB.x,
            y: QB.y
          }), "edge-label" === QB.dummy && (nB.x = QB.x, nB.y = QB.y, nB.width = QB.width, nB.height = QB.height), jB = zB, QB = BB.node(jB)
        }))
      }(BB))), jB("    fixupEdgeLabelCoords", (() => function(BB) {
        BB.edges().forEach((jB => {
          let zB = BB.edge(jB);
          if (Object.hasOwn(zB, "x")) switch (("l" === zB.labelpos || "r" === zB.labelpos) && (zB.width -= zB.labeloffset), zB.labelpos) {
            case "l":
              zB.x -= zB.width / 2 + zB.labeloffset;
              break;
            case "r":
              zB.x += zB.width / 2 + zB.labeloffset
          }
        }))
      }(BB))), jB("    undoCoordinateSystem", (() => ej(BB))), jB("    translateGraph", (() => function(BB) {
        let jB = Number.POSITIVE_INFINITY,
          zB = 0,
          QB = Number.POSITIVE_INFINITY,
          nB = 0,
          dB = BB.graph(),
          IB = dB.marginx || 0,
          NB = dB.marginy || 0;

        function uB(BB) {
          let dB = BB.x,
            IB = BB.y,
            NB = BB.width,
            uB = BB.height;
          jB = Math.min(jB, dB - NB / 2), zB = Math.max(zB, dB + NB / 2), QB = Math.min(QB, IB - uB / 2), nB = Math.max(nB, IB + uB / 2)
        }
        BB.nodes().forEach((jB => uB(BB.node(jB)))), BB.edges().forEach((jB => {
          let zB = BB.edge(jB);
          Object.hasOwn(zB, "x") && uB(zB)
        })), jB -= IB, QB -= NB, BB.nodes().forEach((zB => {
          let nB = BB.node(zB);
          nB.x -= jB, nB.y -= QB
        })), BB.edges().forEach((zB => {
          let nB = BB.edge(zB);
          nB.points.forEach((BB => {
            BB.x -= jB, BB.y -= QB
          })), Object.hasOwn(nB, "x") && (nB.x -= jB), Object.hasOwn(nB, "y") && (nB.y -= QB)
        })), dB.width = zB - jB + IB, dB.height = nB - QB + NB
      }(BB))), jB("    assignNodeIntersects", (() => function(BB) {
        BB.edges().forEach((jB => {
          if (jB.v === jB.w) return;
          let zB, QB, nB = BB.edge(jB),
            dB = BB.node(jB.v),
            IB = BB.node(jB.w);
          nB.points ? (zB = nB.points[0], QB = nB.points[nB.points.length - 1]) : (nB.points = [], zB = IB, QB = dB), nB.points.unshift(lB(dB, zB)), nB.points.push(lB(IB, QB))
        }))
      }(BB))), jB("    reversePoints", (() => function(BB) {
        BB.edges().forEach((jB => {
          let zB = BB.edge(jB);
          zB.reversed && zB.points.reverse()
        }))
      }(BB))), jB("    acyclic.undo", (() => function(BB) {
        BB.edges().forEach((jB => {
          let zB = BB.edge(jB);
          if (zB.reversed) {
            BB.removeEdge(jB);
            let QB = zB.forwardName;
            delete zB.reversed, delete zB.forwardName, BB.setEdge(jB.w, jB.v, zB, QB)
          }
        }))
      }(BB))), {
        graph: BB,
        rawNodes: UB
      }
    }

    function kz(BB, jB) {
      BB.nodes().forEach((zB => {
        let QB = BB.node(zB),
          nB = jB.node(zB);
        QB && (QB.x = nB.x, QB.y = nB.y, QB.order = nB.order, QB.rank = nB.rank, jB.children(zB).length && (QB.width = nB.width, QB.height = nB.height))
      })), BB.edges().forEach((zB => {
        let QB = BB.edge(zB),
          nB = jB.edge(zB);
        QB.points = nB.points, Object.hasOwn(nB, "x") && (QB.x = nB.x, QB.y = nB.y)
      })), BB.graph().width = jB.graph().width, BB.graph().height = jB.graph().height
    }
    var Gz = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Lz = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      gz = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      tz = ["width", "height", "rank"],
      Sz = {
        width: 0,
        height: 0
      },
      Mz = ["minlen", "weight", "width", "height", "labeloffset"],
      Ez = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      iz = ["labelpos"];

    function qz(BB) {
      let jB = new PB({
          multigraph: !0,
          compound: !0
        }),
        zB = oz(BB.graph());
      return jB.setGraph(Object.assign({}, Lz, fz(zB, Gz), jj(zB, gz))), BB.nodes().forEach((zB => {
        let QB = fz(oz(BB.node(zB)), tz);
        Object.keys(Sz).forEach((BB => {
          void 0 === QB[BB] && (QB[BB] = Sz[BB])
        })), jB.setNode(zB, QB);
        let nB = BB.parent(zB);
        void 0 !== nB && jB.setParent(zB, nB)
      })), BB.edges().forEach((zB => {
        let QB = oz(BB.edge(zB));
        jB.setEdge(zB, Object.assign({}, Ez, fz(QB, Mz), jj(QB, iz)))
      })), jB
    }

    function fz(BB, jB) {
      return zj(jj(BB, jB), Number)
    }

    function oz(BB) {
      let jB = {};
      return BB && Object.entries(BB).forEach((BB => {
        let [zB, QB] = BB;
        "string" == typeof zB && (zB = zB.toLowerCase()), jB[zB] = QB
      })), jB
    }

    function Hz(BB) {
      let jB = wB(BB),
        zB = new PB({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return BB.nodes().forEach((jB => {
        zB.setNode(jB, {
          label: jB
        }), zB.setParent(jB, "layer" + BB.node(jB).rank)
      })), BB.edges().forEach((BB => zB.setEdge(BB.v, BB.w, {}, BB.name))), jB.forEach(((BB, jB) => {
        let QB = "layer" + jB;
        zB.setNode(QB, {
          rank: "same"
        }), BB.reduce(((BB, jB) => (zB.setEdge(BB, jB, {
          style: "invis"
        }), jB)))
      })), zB
    }
    var Dz = {
        time: bB,
        notime: vB
      },
      Fz = {
        graphlib: dB,
        version: dj,
        layout: sz,
        debug: Hz,
        util: {
          time: bB,
          notime: vB
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);