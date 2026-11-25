/*! For license information please see c6gaap.120.c4cb172f.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6591: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Graph: () => eB,
      debug: () => aZ,
      default: () => MZ,
      graphlib: () => oB,
      layout: () => FZ,
      util: () => HZ,
      version: () => oI
    });
    var TB = Object.defineProperty,
      JB = (BB, IB, ZB) => ((BB, IB, ZB) => IB in BB ? TB(BB, IB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ZB
      }) : BB[IB] = ZB)(BB, "symbol" != typeof IB ? IB + "" : IB, ZB),
      oB = {};
    ((BB, IB) => {
      for (var ZB in IB) TB(BB, ZB, {
        get: IB[ZB],
        enumerable: !0
      })
    })(oB, {
      Graph: () => eB,
      alg: () => yB
    });
    var GB = Object.defineProperty,
      vB = (BB, IB) => {
        for (var ZB in IB) GB(BB, ZB, {
          get: IB[ZB],
          enumerable: !0
        })
      },
      kB = class {
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
        setNodes(BB, IB) {
          return BB.forEach((BB => {
            void 0 !== IB ? this.setNode(BB, IB) : this.setNode(BB)
          })), this
        }
        setNode(BB, IB) {
          return BB in this._nodes ? (arguments.length > 1 && (this._nodes[BB] = IB), this) : (this._nodes[BB] = arguments.length > 1 ? IB : this._defaultNodeLabelFn(BB), this._isCompound && (this._parent[BB] = "\0", this._children[BB] = {}, this._children["\0"][BB] = !0), this._in[BB] = {}, this._preds[BB] = {}, this._out[BB] = {}, this._sucs[BB] = {}, ++this._nodeCount, this)
        }
        node(BB) {
          return this._nodes[BB]
        }
        hasNode(BB) {
          return BB in this._nodes
        }
        removeNode(BB) {
          if (BB in this._nodes) {
            let IB = BB => this.removeEdge(this._edgeObjs[BB]);
            delete this._nodes[BB], this._isCompound && (this._removeFromParentsChildList(BB), delete this._parent[BB], this.children(BB).forEach((BB => {
              this.setParent(BB)
            })), delete this._children[BB]), Object.keys(this._in[BB]).forEach(IB), delete this._in[BB], delete this._preds[BB], Object.keys(this._out[BB]).forEach(IB), delete this._out[BB], delete this._sucs[BB], --this._nodeCount
          }
          return this
        }
        setParent(BB, IB) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === IB) IB = "\0";
          else {
            for (let ZB = IB += ""; void 0 !== ZB; ZB = this.parent(ZB))
              if (ZB === BB) throw new Error("Setting " + IB + " as parent of " + BB + " would create a cycle");
            this.setNode(IB)
          }
          return this.setNode(BB), this._removeFromParentsChildList(BB), this._parent[BB] = IB, this._children[IB][BB] = !0, this
        }
        parent(BB) {
          if (this._isCompound) {
            let IB = this._parent[BB];
            if ("\0" !== IB) return IB
          }
        }
        children() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let IB = this._children[BB];
            if (IB) return Object.keys(IB)
          } else {
            if ("\0" === BB) return this.nodes();
            if (this.hasNode(BB)) return []
          }
          return []
        }
        predecessors(BB) {
          let IB = this._preds[BB];
          if (IB) return Object.keys(IB)
        }
        successors(BB) {
          let IB = this._sucs[BB];
          if (IB) return Object.keys(IB)
        }
        neighbors(BB) {
          let IB = this.predecessors(BB);
          if (IB) {
            let ZB = new Set(IB),
              TB = this.successors(BB);
            if (TB)
              for (let BB of TB) ZB.add(BB);
            return Array.from(ZB.values())
          }
        }
        isLeaf(BB) {
          var IB;
          let ZB;
          return ZB = this.isDirected() ? this.successors(BB) : this.neighbors(BB), 0 === (null != (IB = null == ZB ? void 0 : ZB.length) ? IB : 0)
        }
        filterNodes(BB) {
          let IB = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          IB.setGraph(this.graph()), Object.entries(this._nodes).forEach((ZB => {
            let [TB, JB] = ZB;
            BB(TB) && IB.setNode(TB, JB)
          })), Object.values(this._edgeObjs).forEach((BB => {
            IB.hasNode(BB.v) && IB.hasNode(BB.w) && IB.setEdge(BB, this.edge(BB))
          }));
          let ZB = {},
            TB = BB => {
              let JB = this.parent(BB);
              return !JB || IB.hasNode(JB) ? (ZB[BB] = JB, JB) : JB in ZB ? ZB[JB] : TB(JB)
            };
          return this._isCompound && IB.nodes().forEach((BB => IB.setParent(BB, TB(BB)))), IB
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
        setPath(BB, IB) {
          return BB.reduce(((BB, ZB) => (void 0 !== IB ? this.setEdge(BB, ZB, IB) : this.setEdge(BB, ZB), ZB))), this
        }
        setEdge(BB, IB, ZB, TB) {
          let JB, oB, GB, vB, kB = !1;
          "object" == typeof BB && null !== BB && "v" in BB ? (JB = BB.v, oB = BB.w, GB = BB.name, 2 === arguments.length && (vB = IB, kB = !0)) : (JB = BB, oB = IB, GB = TB, arguments.length > 2 && (vB = ZB, kB = !0)), JB = "" + JB, oB = "" + oB, void 0 !== GB && (GB = "" + GB);
          let nB = hB(this._isDirected, JB, oB, GB);
          if (nB in this._edgeLabels) return kB && (this._edgeLabels[nB] = vB), this;
          if (void 0 !== GB && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(JB), this.setNode(oB), this._edgeLabels[nB] = kB ? vB : this._defaultEdgeLabelFn(JB, oB, GB);
          let zB = function(BB, IB, ZB, TB) {
            let JB = "" + IB,
              oB = "" + ZB;
            if (!BB && JB > oB) {
              let BB = JB;
              JB = oB, oB = BB
            }
            let GB = {
              v: JB,
              w: oB
            };
            return TB && (GB.name = TB), GB
          }(this._isDirected, JB, oB, GB);
          return JB = zB.v, oB = zB.w, Object.freeze(zB), this._edgeObjs[nB] = zB, cB(this._preds[oB], JB), cB(this._sucs[JB], oB), this._in[oB][nB] = zB, this._out[JB][nB] = zB, this._edgeCount++, this
        }
        edge(BB, IB, ZB) {
          let TB = 1 === arguments.length ? zB(this._isDirected, BB) : hB(this._isDirected, BB, IB, ZB);
          return this._edgeLabels[TB]
        }
        edgeAsObj(BB, IB, ZB) {
          let TB = 1 === arguments.length ? this.edge(BB) : this.edge(BB, IB, ZB);
          return "object" != typeof TB || null === TB ? {
            label: TB
          } : TB
        }
        hasEdge(BB, IB, ZB) {
          return (1 === arguments.length ? zB(this._isDirected, BB) : hB(this._isDirected, BB, IB, ZB)) in this._edgeLabels
        }
        removeEdge(BB, IB, ZB) {
          let TB = 1 === arguments.length ? zB(this._isDirected, BB) : hB(this._isDirected, BB, IB, ZB),
            JB = this._edgeObjs[TB];
          if (JB) {
            let BB = JB.v,
              IB = JB.w;
            delete this._edgeLabels[TB], delete this._edgeObjs[TB], nB(this._preds[IB], BB), nB(this._sucs[BB], IB), delete this._in[IB][TB], delete this._out[BB][TB], this._edgeCount--
          }
          return this
        }
        inEdges(BB, IB) {
          return this.isDirected() ? this.filterEdges(this._in[BB], BB, IB) : this.nodeEdges(BB, IB)
        }
        outEdges(BB, IB) {
          return this.isDirected() ? this.filterEdges(this._out[BB], BB, IB) : this.nodeEdges(BB, IB)
        }
        nodeEdges(BB, IB) {
          if (BB in this._nodes) return this.filterEdges({
            ...this._in[BB],
            ...this._out[BB]
          }, BB, IB)
        }
        _removeFromParentsChildList(BB) {
          delete this._children[this._parent[BB]][BB]
        }
        filterEdges(BB, IB, ZB) {
          if (!BB) return;
          let TB = Object.values(BB);
          return ZB ? TB.filter((BB => BB.v === IB && BB.w === ZB || BB.v === ZB && BB.w === IB)) : TB
        }
      };

    function cB(BB, IB) {
      BB[IB] ? BB[IB]++ : BB[IB] = 1
    }

    function nB(BB, IB) {
      void 0 !== BB[IB] && !--BB[IB] && delete BB[IB]
    }

    function hB(BB, IB, ZB, TB) {
      let JB = "" + IB,
        oB = "" + ZB;
      if (!BB && JB > oB) {
        let BB = JB;
        JB = oB, oB = BB
      }
      return JB + "\x01" + oB + "\x01" + (void 0 === TB ? "\0" : TB)
    }

    function zB(BB, IB) {
      return hB(BB, IB.v, IB.w, IB.name)
    }

    function FB(BB) {
      let IB = {
          options: {
            directed: BB.isDirected(),
            multigraph: BB.isMultigraph(),
            compound: BB.isCompound()
          },
          nodes: NB(BB),
          edges: gB(BB)
        },
        ZB = BB.graph();
      return void 0 !== ZB && (IB.value = structuredClone(ZB)), IB
    }

    function NB(BB) {
      return BB.nodes().map((IB => {
        let ZB = BB.node(IB),
          TB = BB.parent(IB),
          JB = {
            v: IB
          };
        return void 0 !== ZB && (JB.value = ZB), void 0 !== TB && (JB.parent = TB), JB
      }))
    }

    function gB(BB) {
      return BB.edges().map((IB => {
        let ZB = BB.edge(IB),
          TB = {
            v: IB.v,
            w: IB.w
          };
        return void 0 !== IB.name && (TB.name = IB.name), void 0 !== ZB && (TB.value = ZB), TB
      }))
    }

    function qB(BB) {
      let IB = new kB(BB.options);
      return void 0 !== BB.value && IB.setGraph(BB.value), BB.nodes.forEach((BB => {
        IB.setNode(BB.v, BB.value), BB.parent && IB.setParent(BB.v, BB.parent)
      })), BB.edges.forEach((BB => {
        IB.setEdge({
          v: BB.v,
          w: BB.w,
          name: BB.name
        }, BB.value)
      })), IB
    }
    vB({}, {
      read: () => qB,
      write: () => FB
    });
    var yB = {};
    vB(yB, {
      CycleException: () => aB,
      bellmanFord: () => WB,
      components: () => dB,
      dijkstra: () => sB,
      dijkstraAll: () => wB,
      findCycles: () => YB,
      floydWarshall: () => pB,
      isAcyclic: () => MB,
      postorder: () => rB,
      preorder: () => mB,
      prim: () => XB,
      shortestPaths: () => LB,
      tarjan: () => OB,
      topsort: () => HB
    });
    var UB = () => 1;

    function WB(BB, IB, ZB, TB) {
      return function(BB, IB, ZB, TB) {
        let JB, oB = {},
          GB = 0,
          vB = BB.nodes(),
          kB = function(BB) {
            let IB = oB[BB.v],
              TB = oB[BB.w];
            if (!IB || !TB) return;
            let GB = ZB(BB);
            IB.distance + GB < TB.distance && (oB[BB.w] = {
              distance: IB.distance + GB,
              predecessor: BB.v
            }, JB = !0)
          },
          cB = function() {
            vB.forEach((function(BB) {
              TB(BB).forEach((function(IB) {
                let ZB = IB.v === BB ? IB.v : IB.w,
                  TB = ZB === IB.v ? IB.w : IB.v;
                kB({
                  v: ZB,
                  w: TB
                })
              }))
            }))
          };
        vB.forEach((function(BB) {
          let ZB = BB === IB ? 0 : Number.POSITIVE_INFINITY;
          oB[BB] = {
            distance: ZB,
            predecessor: ""
          }
        }));
        let nB = vB.length;
        for (let hB = 1; hB < nB && (JB = !1, GB++, cB(), JB); hB++);
        if (GB === nB - 1 && (JB = !1, cB(), JB)) throw new Error("The graph contains a negative weight cycle");
        return oB
      }(BB, String(IB), ZB || UB, TB || function(IB) {
        var ZB;
        return null != (ZB = BB.outEdges(IB)) ? ZB : []
      })
    }

    function dB(BB) {
      let IB, ZB = {},
        TB = [];

      function JB(TB) {
        var oB, GB;
        TB in ZB || (ZB[TB] = !0, IB.push(TB), null == (oB = BB.successors(TB)) || oB.forEach(JB), null == (GB = BB.predecessors(TB)) || GB.forEach(JB))
      }
      return BB.nodes().forEach((function(BB) {
        IB = [], JB(BB), IB.length && TB.push(IB)
      })), TB
    }
    var CB = class {
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
          let IB = this._keyIndices[BB];
          if (void 0 !== IB) return this._arr[IB].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(BB, IB) {
          let ZB = this._keyIndices,
            TB = String(BB);
          if (!(TB in ZB)) {
            let BB = this._arr,
              JB = BB.length;
            return ZB[TB] = JB, BB.push({
              key: TB,
              priority: IB
            }), this._decrease(JB), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let BB = this._arr.pop();
          return delete this._keyIndices[BB.key], this._heapify(0), BB.key
        }
        decrease(BB, IB) {
          let ZB = this._keyIndices[BB];
          if (void 0 === ZB) throw new Error(`Key not found: ${BB}`);
          let TB = this._arr[ZB].priority;
          if (IB > TB) throw new Error(`New priority is greater than current priority. Key: ${BB} Old: ${TB} New: ${IB}`);
          this._arr[ZB].priority = IB, this._decrease(ZB)
        }
        _heapify(BB) {
          let IB = this._arr,
            ZB = 2 * BB,
            TB = ZB + 1,
            JB = BB;
          ZB < IB.length && (JB = IB[ZB].priority < IB[JB].priority ? ZB : JB, TB < IB.length && (JB = IB[TB].priority < IB[JB].priority ? TB : JB), JB !== BB && (this._swap(BB, JB), this._heapify(JB)))
        }
        _decrease(BB) {
          let IB, ZB = this._arr,
            TB = ZB[BB].priority;
          for (; 0 !== BB && (IB = BB >> 1, !(ZB[IB].priority < TB));) this._swap(BB, IB), BB = IB
        }
        _swap(BB, IB) {
          let ZB = this._arr,
            TB = this._keyIndices,
            JB = ZB[BB],
            oB = ZB[IB];
          ZB[BB] = oB, ZB[IB] = JB, TB[oB.key] = BB, TB[JB.key] = IB
        }
      },
      QB = () => 1;

    function sB(BB, IB, ZB, TB) {
      return function(BB, IB, ZB, TB) {
        let JB, oB, GB = {},
          vB = new CB,
          kB = function(BB) {
            let IB = BB.v !== JB ? BB.v : BB.w,
              TB = GB[IB];
            if (!TB) return;
            let kB = ZB(BB),
              cB = oB.distance + kB;
            if (kB < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + BB + " Weight: " + kB);
            cB < TB.distance && (TB.distance = cB, TB.predecessor = JB, vB.decrease(IB, cB))
          };
        for (BB.nodes().forEach((function(BB) {
            let ZB = BB === IB ? 0 : Number.POSITIVE_INFINITY;
            GB[BB] = {
              distance: ZB,
              predecessor: ""
            }, vB.add(BB, ZB)
          })); vB.size() > 0;) {
          JB = vB.removeMin();
          let BB = GB[JB];
          if (!BB || BB.distance === Number.POSITIVE_INFINITY) break;
          oB = BB, TB(JB).forEach(kB)
        }
        return GB
      }(BB, String(IB), ZB || QB, TB || function(IB) {
        var ZB;
        return null != (ZB = BB.outEdges(IB)) ? ZB : []
      })
    }

    function wB(BB, IB, ZB) {
      return BB.nodes().reduce((function(TB, JB) {
        return TB[JB] = sB(BB, JB, IB, ZB), TB
      }), {})
    }

    function OB(BB) {
      let IB = 0,
        ZB = [],
        TB = {},
        JB = [];

      function oB(GB) {
        var vB;
        let kB = TB[GB] = {
          onStack: !0,
          lowlink: IB,
          index: IB++
        };
        if (ZB.push(GB), null == (vB = BB.successors(GB)) || vB.forEach((function(BB) {
            if (BB in TB) {
              let IB = TB[BB];
              null != IB && IB.onStack && (kB.lowlink = Math.min(kB.lowlink, IB.index))
            } else {
              oB(BB);
              let IB = TB[BB];
              IB && (kB.lowlink = Math.min(kB.lowlink, IB.lowlink))
            }
          })), kB.lowlink === kB.index) {
          let BB, IB = [];
          do {
            BB = ZB.pop();
            let JB = TB[BB];
            JB && (JB.onStack = !1), IB.push(BB)
          } while (GB !== BB);
          JB.push(IB)
        }
      }
      return BB.nodes().forEach((function(BB) {
        BB in TB || oB(BB)
      })), JB
    }

    function YB(BB) {
      return OB(BB).filter((function(IB) {
        var ZB;
        let TB = IB[0];
        return !!TB && (IB.length > 1 || 1 === IB.length && (null != (ZB = BB.outEdges(TB, TB)) ? ZB : []).length > 0)
      }))
    }
    var iB = () => 1;

    function pB(BB, IB, ZB) {
      return function(BB, IB, ZB) {
        let TB = {},
          JB = BB.nodes();
        return JB.forEach((function(BB) {
          let oB = {};
          TB[BB] = oB, oB[BB] = {
            distance: 0,
            predecessor: ""
          }, JB.forEach((function(IB) {
            BB !== IB && (oB[IB] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ZB(BB).forEach((function(ZB) {
            let TB = ZB.v === BB ? ZB.w : ZB.v,
              JB = IB(ZB);
            oB[TB] = {
              distance: JB,
              predecessor: BB
            }
          }))
        })), JB.forEach((function(BB) {
          let IB = TB[BB];
          IB && JB.forEach((function(ZB) {
            let oB = TB[ZB];
            oB && JB.forEach((function(ZB) {
              let TB = oB[BB],
                JB = IB[ZB],
                GB = oB[ZB];
              if (TB && JB && GB) {
                let BB = TB.distance + JB.distance;
                BB < GB.distance && (GB.distance = BB, GB.predecessor = JB.predecessor)
              }
            }))
          }))
        })), TB
      }(BB, IB || iB, ZB || function(IB) {
        var ZB;
        return null != (ZB = BB.outEdges(IB)) ? ZB : []
      })
    }
    var aB = class extends Error {
      constructor(BB) {
        super(BB), this.name = "CycleException"
      }
    };

    function HB(BB) {
      let IB = {},
        ZB = {},
        TB = [];
      if (BB.sinks().forEach((function JB(oB) {
          var GB;
          if (oB in ZB) throw new aB;
          oB in IB || (ZB[oB] = !0, IB[oB] = !0, null == (GB = BB.predecessors(oB)) || GB.forEach(JB), delete ZB[oB], TB.push(oB))
        })), Object.keys(IB).length !== BB.nodeCount()) throw new aB;
      return TB
    }

    function MB(BB) {
      try {
        HB(BB)
      } catch (IB) {
        if (IB instanceof aB) return !1;
        throw IB
      }
      return !0
    }

    function jB(BB, IB, ZB, TB, JB) {
      Array.isArray(IB) || (IB = [IB]);
      let oB = IB => {
          var ZB;
          return null != (ZB = BB.isDirected() ? BB.successors(IB) : BB.neighbors(IB)) ? ZB : []
        },
        GB = {};
      return IB.forEach((function(IB) {
        if (!BB.hasNode(IB)) throw new Error("Graph does not have node: " + IB);
        JB = PB(BB, IB, "post" === ZB, GB, oB, TB, JB)
      })), JB
    }

    function PB(BB, IB, ZB, TB, JB, oB, GB) {
      return IB in TB || (TB[IB] = !0, ZB || (GB = oB(GB, IB)), JB(IB).forEach((function(IB) {
        GB = PB(BB, IB, ZB, TB, JB, oB, GB)
      })), ZB && (GB = oB(GB, IB))), GB
    }

    function RB(BB, IB, ZB) {
      return jB(BB, IB, ZB, (function(BB, IB) {
        return BB.push(IB), BB
      }), [])
    }

    function rB(BB, IB) {
      return RB(BB, IB, "post")
    }

    function mB(BB, IB) {
      return RB(BB, IB, "pre")
    }

    function XB(BB, IB) {
      var ZB;
      let TB, JB = new kB,
        oB = {},
        GB = new CB;

      function vB(BB) {
        let ZB = BB.v === TB ? BB.w : BB.v,
          JB = GB.priority(ZB);
        if (void 0 !== JB) {
          let vB = IB(BB);
          vB < JB && (oB[ZB] = TB, GB.decrease(ZB, vB))
        }
      }
      if (0 === BB.nodeCount()) return JB;
      BB.nodes().forEach((function(BB) {
        GB.add(BB, Number.POSITIVE_INFINITY), JB.setNode(BB)
      }));
      let cB = BB.nodes()[0];
      void 0 !== cB && GB.decrease(cB, 0);
      let nB = !1;
      for (; GB.size() > 0;) {
        if (TB = GB.removeMin(), TB in oB) JB.setEdge(TB, oB[TB]);
        else {
          if (nB) throw new Error("Input graph is not connected: " + BB);
          nB = !0
        }
        null == (ZB = BB.nodeEdges(TB)) || ZB.forEach(vB)
      }
      return JB
    }

    function LB(BB, IB, ZB, TB) {
      return function(BB, IB, ZB, TB) {
        if (void 0 === ZB) return sB(BB, IB, ZB, TB);
        let JB = !1,
          oB = BB.nodes();
        for (let GB = 0; GB < oB.length; GB++) {
          let vB = oB[GB];
          if (void 0 === vB) continue;
          let kB = TB(vB);
          for (let BB = 0; BB < kB.length; BB++) {
            let IB = kB[BB];
            if (!IB) continue;
            let TB = IB.v === vB ? IB.v : IB.w;
            ZB({
              v: TB,
              w: TB === IB.v ? IB.w : IB.v
            }) < 0 && (JB = !0)
          }
          if (JB) return WB(BB, IB, ZB, TB)
        }
        return sB(BB, IB, ZB, TB)
      }(BB, IB, ZB, null != TB ? TB : IB => {
        var ZB;
        return null != (ZB = BB.outEdges(IB)) ? ZB : []
      })
    }
    var eB = kB;

    function uB(BB, IB, ZB, TB) {
      let JB = TB;
      for (; BB.hasNode(JB);) JB = SB(TB);
      return ZB.dummy = IB, BB.setNode(JB, ZB), JB
    }

    function fB(BB) {
      let IB = new eB({
        multigraph: BB.isMultigraph()
      }).setGraph(BB.graph());
      return BB.nodes().forEach((ZB => {
        BB.children(ZB).length || IB.setNode(ZB, BB.node(ZB))
      })), BB.edges().forEach((ZB => {
        IB.setEdge(ZB, BB.edge(ZB))
      })), IB
    }

    function lB(BB, IB) {
      let ZB, TB, JB = BB.x,
        oB = BB.y,
        GB = IB.x - JB,
        vB = IB.y - oB,
        kB = BB.width / 2,
        cB = BB.height / 2;
      if (!GB && !vB) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(vB) * kB > Math.abs(GB) * cB ? (vB < 0 && (cB = -cB), ZB = cB * GB / vB, TB = cB) : (GB < 0 && (kB = -kB), ZB = kB, TB = kB * vB / GB), {
        x: JB + ZB,
        y: oB + TB
      }
    }

    function AB(BB) {
      let IB = BI(EB(BB) + 1).map((() => []));
      return BB.nodes().forEach((ZB => {
        let TB = BB.node(ZB),
          JB = TB.rank;
        void 0 !== JB && (IB[JB] || (IB[JB] = []), IB[JB][TB.order] = ZB)
      })), IB
    }

    function tB(BB, IB, ZB, TB) {
      let JB = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (JB.rank = ZB, JB.order = TB), uB(BB, "border", JB, IB)
    }
    var bB = 65535;

    function xB(BB, IB) {
      if (IB.length > bB) {
        let ZB = function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bB,
            ZB = [];
          for (let TB = 0; TB < BB.length; TB += IB) {
            let JB = BB.slice(TB, TB + IB);
            ZB.push(JB)
          }
          return ZB
        }(IB);
        return BB(...ZB.map((IB => BB(...IB))))
      }
      return BB(...IB)
    }

    function EB(BB) {
      let IB = BB.nodes().map((IB => {
        let ZB = BB.node(IB).rank;
        return void 0 === ZB ? Number.MIN_VALUE : ZB
      }));
      return xB(Math.max, IB)
    }

    function DB(BB, IB) {
      let ZB = Date.now();
      try {
        return IB()
      } finally {
        console.log(BB + " time: " + (Date.now() - ZB) + "ms")
      }
    }

    function KB(BB, IB) {
      return IB()
    }
    var VB = 0;

    function SB(BB) {
      return BB + "" + ++VB
    }

    function BI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == IB && (IB = BB, BB = 0);
      let TB = BB => BB < IB;
      ZB < 0 && (TB = BB => IB < BB);
      let JB = [];
      for (let oB = BB; TB(oB); oB += ZB) JB.push(oB);
      return JB
    }

    function II(BB, IB) {
      let ZB = {};
      for (let TB of IB) void 0 !== BB[TB] && (ZB[TB] = BB[TB]);
      return ZB
    }

    function ZI(BB, IB) {
      let ZB;
      return ZB = "string" == typeof IB ? BB => BB[IB] : IB, Object.entries(BB).reduce(((BB, IB) => {
        let [TB, JB] = IB;
        return BB[TB] = ZB(JB, TB), BB
      }), {})
    }
    var TI = "\0";

    function JI(BB, IB, ZB) {
      var TB, JB, oB, GB, vB, kB;
      if (!(BB && IB && ZB && "edge" === IB.dummy && "edge" === ZB.dummy && IB.edgeObj && ZB.edgeObj && BB[IB.edgeObj.v] && BB[ZB.edgeObj.v] && BB[IB.edgeObj.w] && BB[ZB.edgeObj.w])) return 0;
      let cB = !0;
      IB.edgeObj.w === ZB.edgeObj.w && (cB = !1);
      let nB = cB ? null != (JB = null == (TB = BB[IB.edgeObj.v]) ? void 0 : TB.rank) ? JB : NaN : null != (GB = null == (oB = BB[IB.edgeObj.w]) ? void 0 : oB.rank) ? GB : NaN,
        hB = Object.entries(BB).find((BB => {
          var ZB, TB;
          return (null == (ZB = BB[1].edgeObj) ? void 0 : ZB.v) === IB.edgeObj.v && (null == (TB = BB[1].edgeObj) ? void 0 : TB.w) === IB.edgeObj.w && BB[1].rank === nB
        })),
        zB = Object.entries(BB).find((BB => {
          var IB, TB;
          return (null == (IB = BB[1].edgeObj) ? void 0 : IB.v) === ZB.edgeObj.v && (null == (TB = BB[1].edgeObj) ? void 0 : TB.w) === ZB.edgeObj.w && BB[1].rank === nB
        }));
      if (!hB || !zB) return 0;
      let FB = null != (vB = hB[1].order) ? vB : NaN,
        NB = null != (kB = zB[1].order) ? kB : NaN;
      return isNaN(FB - NB) ? 0 : FB - NB
    }
    var oI = "3.1.1";

    function GI(BB) {
      BB._prev._next = BB._next, BB._next._prev = BB._prev, delete BB._next, delete BB._prev
    }

    function vI(BB, IB) {
      if ("_next" !== BB && "_prev" !== BB) return IB
    }
    var kI = class {
        constructor() {
          JB(this, "_sentinel");
          let BB = {};
          BB._next = BB._prev = BB, this._sentinel = BB
        }
        dequeue() {
          let BB = this._sentinel,
            IB = BB._prev;
          if (IB !== BB) return GI(IB), IB
        }
        enqueue(BB) {
          let IB = this._sentinel;
          BB._prev && BB._next && GI(BB), BB._next = IB._next, IB._next._prev = BB, IB._next = BB, BB._prev = IB
        }
        toString() {
          let BB = [],
            IB = this._sentinel,
            ZB = IB._prev;
          for (; ZB !== IB;) BB.push(JSON.stringify(ZB, vI)), ZB = ZB._prev;
          return "[" + BB.join(", ") + "]"
        }
      },
      cI = () => 1;

    function nI(BB, IB) {
      if (BB.nodeCount() <= 1) return [];
      let ZB = function(BB, IB) {
        let ZB = new eB,
          TB = 0,
          JB = 0;
        BB.nodes().forEach((BB => {
          ZB.setNode(BB, {
            v: BB,
            in: 0,
            out: 0
          })
        })), BB.edges().forEach((BB => {
          let oB = ZB.edge(BB.v, BB.w) || 0,
            GB = IB(BB),
            vB = oB + GB;
          ZB.setEdge(BB.v, BB.w, vB);
          let kB = ZB.node(BB.v),
            cB = ZB.node(BB.w);
          JB = Math.max(JB, kB.out += GB), TB = Math.max(TB, cB.in += GB)
        }));
        let oB = function(BB) {
            let IB = [];
            for (let ZB = 0; ZB < BB; ZB++) IB.push(ZB);
            return IB
          }(JB + TB + 3).map((() => new kI)),
          GB = TB + 1;
        return ZB.nodes().forEach((BB => {
          zI(oB, GB, ZB.node(BB))
        })), {
          graph: ZB,
          buckets: oB,
          zeroIdx: GB
        }
      }(BB, IB || cI);
      return function(BB, IB, ZB) {
        var TB;
        let JB, oB = [],
          GB = IB[IB.length - 1],
          vB = IB[0];
        for (; BB.nodeCount();) {
          for (; JB = vB.dequeue();) hI(BB, IB, ZB, JB);
          for (; JB = GB.dequeue();) hI(BB, IB, ZB, JB);
          if (BB.nodeCount())
            for (let GB = IB.length - 2; GB > 0; --GB)
              if (JB = null == (TB = IB[GB]) ? void 0 : TB.dequeue(), JB) {
                oB = oB.concat(hI(BB, IB, ZB, JB, !0) || []);
                break
              }
        }
        return oB
      }(ZB.graph, ZB.buckets, ZB.zeroIdx).flatMap((IB => BB.outEdges(IB.v, IB.w) || []))
    }

    function hI(BB, IB, ZB, TB, JB) {
      let oB = [],
        GB = JB ? oB : void 0;
      return (BB.inEdges(TB.v) || []).forEach((TB => {
        let GB = BB.edge(TB),
          vB = BB.node(TB.v);
        JB && oB.push({
          v: TB.v,
          w: TB.w
        }), vB.out -= GB, zI(IB, ZB, vB)
      })), (BB.outEdges(TB.v) || []).forEach((TB => {
        let JB = BB.edge(TB),
          oB = TB.w,
          GB = BB.node(oB);
        GB.in -= JB, zI(IB, ZB, GB)
      })), BB.removeNode(TB.v), GB
    }

    function zI(BB, IB, ZB) {
      var TB, JB, oB;
      ZB.out ? ZB.in ? null == (oB = BB[ZB.out - ZB.in + IB]) || oB.enqueue(ZB) : null == (JB = BB[BB.length - 1]) || JB.enqueue(ZB) : null == (TB = BB[0]) || TB.enqueue(ZB)
    }

    function FI(BB, IB) {
      var ZB;
      ("greedy" === BB.graph().acyclicer ? nI(BB, (ZB = BB, BB => ZB.edge(BB).weight)) : function(BB, IB) {
        let ZB = [],
          TB = {},
          JB = {};

        function oB(IB) {
          Object.hasOwn(JB, IB) || (JB[IB] = !0, TB[IB] = !0, BB.outEdges(IB).forEach((BB => {
            Object.hasOwn(TB, BB.w) ? ZB.push(BB) : oB(BB.w)
          })), delete TB[IB])
        }

        function GB(oB) {
          var vB;
          Object.hasOwn(JB, oB) || (JB[oB] = !0, TB[oB] = !0, null == (vB = BB.outEdges(oB)) || vB.forEach((JB => {
            var vB, kB;
            Object.hasOwn(TB, JB.w) || (null == (vB = IB.node(oB)) ? void 0 : vB.rank) > (null == (kB = IB.node(JB.w)) ? void 0 : kB.rank) && function(BB, IB, ZB) {
              let TB = new Set;

              function JB(IB) {
                var oB;
                if (BB.sources().includes(IB)) return !0;
                TB.add(IB);
                for (let GB of null != (oB = BB.inEdges(IB)) ? oB : [])
                  if ((GB.v !== ZB.v || GB.w !== ZB.w) && !TB.has(GB.v) && JB(GB.v)) return !0;
                return !1
              }
              return JB(IB)
            }(BB, JB.w, JB) ? ZB.push(JB) : GB(JB.w)
          })), delete TB[oB])
        }
        let vB = oB;
        return IB && "function" == typeof IB.node && (vB = GB), BB.sources().forEach(vB), BB.nodes().forEach(vB), ZB
      }(BB, null != IB ? IB : null)).forEach((IB => {
        let ZB = BB.edge(IB);
        BB.removeEdge(IB), ZB.forwardName = IB.name, ZB.reversed = !0, BB.setEdge(IB.w, IB.v, ZB, SB("rev"))
      }))
    }

    function NI(BB) {
      BB.graph().dummyChains = [], BB.edges().forEach((IB => function(BB, IB) {
        let ZB, TB, JB, oB = IB.v,
          GB = BB.node(oB).rank,
          vB = IB.w,
          kB = BB.node(vB).rank,
          cB = IB.name,
          nB = BB.edge(IB),
          hB = nB.labelRank;
        if (kB === GB + 1) return;
        for (BB.removeEdge(IB), JB = 0, ++GB; GB < kB; ++JB, ++GB) nB.points = [], TB = {
          width: 0,
          height: 0,
          edgeLabel: nB,
          edgeObj: IB,
          rank: GB
        }, ZB = uB(BB, "edge", TB, "_d"), GB === hB && (TB.width = nB.width, TB.height = nB.height, TB.dummy = "edge-label", TB.labelpos = nB.labelpos), BB.setEdge(oB, ZB, {
          weight: nB.weight
        }, cB), 0 === JB && BB.graph().dummyChains.push(ZB), oB = ZB;
        BB.setEdge(oB, vB, {
          weight: nB.weight
        }, cB)
      }(BB, IB)))
    }

    function gI(BB) {
      let IB = {};
      BB.sources().forEach((function ZB(TB) {
        let JB = BB.node(TB);
        if (Object.hasOwn(IB, TB)) return JB.rank;
        IB[TB] = !0;
        let oB = BB.outEdges(TB),
          GB = oB ? oB.map((IB => null == IB ? Number.POSITIVE_INFINITY : ZB(IB.w) - BB.edge(IB).minlen)) : [],
          vB = xB(Math.min, GB);
        return vB === Number.POSITIVE_INFINITY && (vB = 0), JB.rank = vB
      }))
    }

    function qI(BB, IB) {
      return BB.node(IB.w).rank - BB.node(IB.v).rank - BB.edge(IB).minlen
    }
    var yI = function(BB) {
      let IB = new eB({
          directed: !1
        }),
        ZB = BB.nodes();
      if (0 === ZB.length) throw new Error("Graph must have at least one node");
      let TB, JB, oB = ZB[0],
        GB = BB.nodeCount();
      for (IB.setNode(oB, {}); UI(IB, BB) < GB && (TB = WI(IB, BB), TB);) JB = IB.hasNode(TB.v) ? qI(BB, TB) : -qI(BB, TB), dI(IB, BB, JB);
      return IB
    };

    function UI(BB, IB) {
      return BB.nodes().forEach((function ZB(TB) {
        let JB = IB.nodeEdges(TB);
        JB && JB.forEach((JB => {
          let oB = JB.v,
            GB = TB === oB ? JB.w : oB;
          !BB.hasNode(GB) && !qI(IB, JB) && (BB.setNode(GB, {}), BB.setEdge(TB, GB, {}), ZB(GB))
        }))
      })), BB.nodeCount()
    }

    function WI(BB, IB) {
      return IB.edges().reduce(((ZB, TB) => {
        let JB = Number.POSITIVE_INFINITY;
        return BB.hasNode(TB.v) !== BB.hasNode(TB.w) && (JB = qI(IB, TB)), JB < ZB[0] ? [JB, TB] : ZB
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function dI(BB, IB, ZB) {
      BB.nodes().forEach((BB => IB.node(BB).rank += ZB))
    }
    var {
      preorder: CI,
      postorder: QI
    } = yB, sI = wI;

    function wI(BB) {
      BB = function(BB) {
        let IB = (new eB).setGraph(BB.graph());
        return BB.nodes().forEach((ZB => IB.setNode(ZB, BB.node(ZB)))), BB.edges().forEach((ZB => {
          let TB = IB.edge(ZB.v, ZB.w) || {
              weight: 0,
              minlen: 1
            },
            JB = BB.edge(ZB);
          IB.setEdge(ZB.v, ZB.w, {
            weight: TB.weight + JB.weight,
            minlen: Math.max(TB.minlen, JB.minlen)
          })
        })), IB
      }(BB), gI(BB);
      let IB, ZB, TB = yI(BB);
      for (iI(TB), OI(TB, BB); IB = aI(TB);) ZB = HI(TB, BB, IB), MI(TB, BB, IB, ZB)
    }

    function OI(BB, IB) {
      let ZB = QI(BB, BB.nodes());
      ZB = ZB.slice(0, ZB.length - 1), ZB.forEach((ZB => function(BB, IB, ZB) {
        let TB = BB.node(ZB).parent,
          JB = BB.edge(ZB, TB);
        JB.cutvalue = YI(BB, IB, ZB)
      }(BB, IB, ZB)))
    }

    function YI(BB, IB, ZB) {
      let TB = BB.node(ZB).parent,
        JB = !0,
        oB = IB.edge(ZB, TB),
        GB = 0;
      oB || (JB = !1, oB = IB.edge(TB, ZB)), GB = oB.weight;
      let vB = IB.nodeEdges(ZB);
      return vB && vB.forEach((oB => {
        let vB = oB.v === ZB,
          kB = vB ? oB.w : oB.v;
        if (kB !== TB) {
          let TB = vB === JB,
            cB = IB.edge(oB).weight;
          if (GB += TB ? cB : -cB, function(BB, IB, ZB) {
              return BB.hasEdge(IB, ZB)
            }(BB, ZB, kB)) {
            let IB = BB.edge(ZB, kB).cutvalue;
            GB += TB ? -IB : IB
          }
        }
      })), GB
    }

    function iI(BB, IB) {
      arguments.length < 2 && (IB = BB.nodes()[0]), pI(BB, {}, 1, IB)
    }

    function pI(BB, IB, ZB, TB, JB) {
      let oB = ZB,
        GB = BB.node(TB);
      IB[TB] = !0;
      let vB = BB.neighbors(TB);
      return vB && vB.forEach((JB => {
        Object.hasOwn(IB, JB) || (ZB = pI(BB, IB, ZB, JB, TB))
      })), GB.low = oB, GB.lim = ZB++, JB ? GB.parent = JB : delete GB.parent, ZB
    }

    function aI(BB) {
      return BB.edges().find((IB => BB.edge(IB).cutvalue < 0))
    }

    function HI(BB, IB, ZB) {
      let TB = ZB.v,
        JB = ZB.w;
      IB.hasEdge(TB, JB) || (TB = ZB.w, JB = ZB.v);
      let oB = BB.node(TB),
        GB = BB.node(JB),
        vB = oB,
        kB = !1;
      return oB.lim > GB.lim && (vB = GB, kB = !0), IB.edges().filter((IB => kB === jI(BB, BB.node(IB.v), vB) && kB !== jI(BB, BB.node(IB.w), vB))).reduce(((BB, ZB) => qI(IB, ZB) < qI(IB, BB) ? ZB : BB))
    }

    function MI(BB, IB, ZB, TB) {
      let JB = ZB.v,
        oB = ZB.w;
      BB.removeEdge(JB, oB), BB.setEdge(TB.v, TB.w, {}), iI(BB), OI(BB, IB),
        function(BB, IB) {
          let ZB = BB.nodes().find((IB => !BB.node(IB).parent));
          if (!ZB) return;
          let TB = CI(BB, [ZB]);
          TB = TB.slice(1), TB.forEach((ZB => {
            let TB = BB.node(ZB).parent,
              JB = IB.edge(ZB, TB),
              oB = !1;
            JB || (JB = IB.edge(TB, ZB), oB = !0), IB.node(ZB).rank = IB.node(TB).rank + (oB ? JB.minlen : -JB.minlen)
          }))
        }(BB, IB)
    }

    function jI(BB, IB, ZB) {
      return ZB.low <= IB.lim && IB.lim <= ZB.lim
    }
    wI.initLowLimValues = iI, wI.initCutValues = OI, wI.calcCutValue = YI, wI.leaveEdge = aI, wI.enterEdge = HI, wI.exchangeEdges = MI;
    var PI = function(BB) {
      let IB = BB.graph().ranker;
      if ("function" == typeof IB) return IB(BB);
      switch (IB) {
        case "network-simplex":
        default:
          rI(BB);
          break;
        case "tight-tree":
          ! function(BB) {
            gI(BB), yI(BB)
          }(BB);
          break;
        case "longest-path":
          RI(BB);
        case "none":
      }
    };
    var RI = gI;

    function rI(BB) {
      sI(BB)
    }
    var mI = function(BB) {
      let IB = function(BB) {
          let IB = {},
            ZB = 0;

          function TB(JB) {
            let oB = ZB;
            BB.children(JB).forEach(TB), IB[JB] = {
              low: oB,
              lim: ZB++
            }
          }
          return BB.children(TI).forEach(TB), IB
        }(BB),
        ZB = BB.graph();
      if (!Array.isArray(ZB.dummyChains)) return;
      ZB.dummyChains.forEach((ZB => {
        let TB = BB.node(ZB),
          JB = TB.edgeObj,
          oB = function(BB, IB, ZB, TB) {
            let JB, oB = [],
              GB = [],
              vB = Math.min(IB[ZB].low, IB[TB].low),
              kB = Math.max(IB[ZB].lim, IB[TB].lim);
            JB = ZB;
            do {
              JB = BB.parent(JB), oB.push(JB)
            } while (JB && (IB[JB].low > vB || kB > IB[JB].lim));
            let cB = JB,
              nB = TB;
            for (;
              (nB = BB.parent(nB)) !== cB;) GB.push(nB);
            return {
              path: oB.concat(GB.reverse()),
              lca: cB
            }
          }(BB, IB, JB.v, JB.w),
          GB = oB.path,
          vB = oB.lca,
          kB = 0,
          cB = GB[kB],
          nB = !0;
        for (; ZB !== JB.w;) {
          if (TB = BB.node(ZB), nB) {
            for (;
              (cB = GB[kB]) !== vB && BB.node(cB).maxRank < TB.rank;) kB++;
            cB === vB && (nB = !1)
          }
          if (!nB) {
            for (; kB < GB.length - 1 && BB.node(GB[kB + 1]).minRank <= TB.rank;) kB++;
            cB = GB[kB]
          }
          void 0 !== cB && BB.setParent(ZB, cB), ZB = BB.successors(ZB)[0]
        }
      }))
    };

    function XI(BB) {
      let IB = uB(BB, "root", {}, "_root"),
        ZB = function(BB) {
          let IB = {};

          function ZB(TB, JB) {
            let oB = BB.children(TB);
            oB && oB.length && oB.forEach((BB => ZB(BB, JB + 1))), IB[TB] = JB
          }
          return BB.children(TI).forEach((BB => ZB(BB, 1))), IB
        }(BB),
        TB = Object.values(ZB),
        JB = xB(Math.max, TB) - 1,
        oB = 2 * JB + 1;
      BB.graph().nestingRoot = IB, BB.edges().forEach((IB => BB.edge(IB).minlen *= oB));
      let GB = function(BB) {
        return BB.edges().reduce(((IB, ZB) => IB + BB.edge(ZB).weight), 0)
      }(BB) + 1;
      BB.children(TI).forEach((TB => {
        LI(BB, IB, oB, GB, JB, ZB, TB)
      })), BB.graph().nodeRankFactor = oB
    }

    function LI(BB, IB, ZB, TB, JB, oB, GB) {
      var vB;
      let kB = BB.children(GB);
      if (!kB.length) return void(GB !== IB && BB.setEdge(IB, GB, {
        weight: 0,
        minlen: ZB
      }));
      let cB = tB(BB, "_bt"),
        nB = tB(BB, "_bb"),
        hB = BB.node(GB);
      BB.setParent(cB, GB), hB.borderTop = cB, BB.setParent(nB, GB), hB.borderBottom = nB, kB.forEach((vB => {
        var kB;
        LI(BB, IB, ZB, TB, JB, oB, vB);
        let hB = BB.node(vB),
          zB = hB.borderTop ? hB.borderTop : vB,
          FB = hB.borderBottom ? hB.borderBottom : vB,
          NB = hB.borderTop ? TB : 2 * TB,
          gB = zB !== FB ? 1 : JB - (null != (kB = oB[GB]) ? kB : 0) + 1;
        BB.setEdge(cB, zB, {
          weight: NB,
          minlen: gB,
          nestingEdge: !0
        }), BB.setEdge(FB, nB, {
          weight: NB,
          minlen: gB,
          nestingEdge: !0
        })
      })), BB.parent(GB) || BB.setEdge(IB, cB, {
        weight: 0,
        minlen: JB + (null != (vB = oB[GB]) ? vB : 0)
      })
    }
    var eI = function(BB) {
      BB.children(TI).forEach((function IB(ZB) {
        let TB = BB.children(ZB),
          JB = BB.node(ZB);
        if (TB.length && TB.forEach(IB), JB && Object.hasOwn(JB, "minRank")) {
          JB.borderLeft = [], JB.borderRight = [];
          for (let IB = JB.minRank, TB = JB.maxRank + 1; IB < TB; ++IB) uI(BB, "borderLeft", "_bl", ZB, JB, IB), uI(BB, "borderRight", "_br", ZB, JB, IB)
        }
      }))
    };

    function uI(BB, IB, ZB, TB, JB, oB) {
      let GB = {
          width: 0,
          height: 0,
          rank: oB,
          borderType: IB
        },
        vB = JB[IB][oB - 1],
        kB = uB(BB, "border", GB, ZB);
      JB[IB][oB] = kB, BB.setParent(kB, TB), vB && BB.setEdge(vB, kB, {
        weight: 1
      })
    }

    function fI(BB) {
      var IB;
      let ZB = null == (IB = BB.graph().rankdir) ? void 0 : IB.toLowerCase();
      ("bt" === ZB || "rl" === ZB) && function(BB) {
        BB.nodes().forEach((IB => tI(BB.node(IB)))), BB.edges().forEach((IB => {
          var ZB;
          let TB = BB.edge(IB);
          null == (ZB = TB.points) || ZB.forEach(tI), Object.hasOwn(TB, "y") && tI(TB)
        }))
      }(BB), ("lr" === ZB || "rl" === ZB) && (function(BB) {
        BB.nodes().forEach((IB => bI(BB.node(IB)))), BB.edges().forEach((IB => {
          var ZB;
          let TB = BB.edge(IB);
          null == (ZB = TB.points) || ZB.forEach(bI), Object.hasOwn(TB, "x") && bI(TB)
        }))
      }(BB), lI(BB))
    }

    function lI(BB) {
      BB.nodes().forEach((IB => AI(BB.node(IB)))), BB.edges().forEach((IB => AI(BB.edge(IB))))
    }

    function AI(BB) {
      let IB = BB.width;
      BB.width = BB.height, BB.height = IB
    }

    function tI(BB) {
      BB.y = -BB.y
    }

    function bI(BB) {
      let IB = BB.x;
      BB.x = BB.y, BB.y = IB
    }

    function xI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZB = {},
        TB = BB.nodes().filter((IB => !BB.children(IB).length)),
        JB = TB.map((IB => BB.node(IB).rank)),
        oB = BI(xB(Math.max, JB) + 1).map((() => []));
      return TB.sort(((IB, ZB) => BB.node(IB).rank - BB.node(ZB).rank)).forEach((function TB(JB) {
        if (ZB[JB]) return;
        ZB[JB] = !0;
        let GB = BB.node(JB);
        oB[GB.rank].push(JB);
        let vB = BB.successors(JB);
        vB && [...vB].sort(((ZB, TB) => function(ZB, TB) {
          let JB = BB.node(ZB),
            oB = BB.node(TB);
          return JI(IB, JB, oB)
        }(ZB, TB))).forEach(TB)
      })), oB
    }

    function EI(BB, IB) {
      let ZB = 0;
      for (let TB = 1; TB < IB.length; ++TB) ZB += DI(BB, IB[TB - 1], IB[TB]);
      return ZB
    }

    function DI(BB, IB, ZB) {
      let TB = function(BB, IB) {
          return BB.reduce(((BB, ZB, TB) => (BB[ZB] = IB[TB], BB)), {})
        }(ZB, ZB.map(((BB, IB) => IB))),
        JB = IB.flatMap((IB => {
          let ZB = BB.outEdges(IB);
          return ZB ? ZB.map((IB => ({
            pos: TB[IB.w],
            weight: BB.edge(IB).weight
          }))).sort(((BB, IB) => BB.pos - IB.pos)) : []
        })),
        oB = 1;
      for (; oB < ZB.length;) oB <<= 1;
      let GB = 2 * oB - 1;
      oB -= 1;
      let vB = new Array(GB).fill(0),
        kB = 0;
      return JB.forEach((BB => {
        let IB = BB.pos + oB;
        vB[IB] += BB.weight;
        let ZB = 0;
        for (; IB > 0;) IB % 2 && (ZB += vB[IB + 1]), IB = IB - 1 >> 1, vB[IB] += BB.weight;
        kB += BB.weight * ZB
      })), kB
    }

    function KI(BB, IB) {
      let ZB = {};
      return BB.forEach(((BB, IB) => {
          let TB = {
            indegree: 0,
            in: [],
            out: [],
            vs: [BB.v],
            i: IB
          };
          void 0 !== BB.barycenter && (TB.barycenter = BB.barycenter, TB.weight = BB.weight), ZB[BB.v] = TB
        })), IB.edges().forEach((BB => {
          let IB = ZB[BB.v],
            TB = ZB[BB.w];
          void 0 !== IB && void 0 !== TB && (TB.indegree++, IB.out.push(TB))
        })),
        function(BB) {
          let IB = [];

          function ZB(BB) {
            return IB => {
              IB.merged || (void 0 === IB.barycenter || void 0 === BB.barycenter || IB.barycenter >= BB.barycenter) && function(BB, IB) {
                let ZB = 0,
                  TB = 0;
                BB.weight && (ZB += BB.barycenter * BB.weight, TB += BB.weight), IB.weight && (ZB += IB.barycenter * IB.weight, TB += IB.weight), BB.vs = IB.vs.concat(BB.vs), BB.barycenter = ZB / TB, BB.weight = TB, BB.i = Math.min(IB.i, BB.i), IB.merged = !0
              }(BB, IB)
            }
          }

          function TB(IB) {
            return ZB => {
              ZB.in.push(IB), 0 === --ZB.indegree && BB.push(ZB)
            }
          }
          for (; BB.length;) {
            let JB = BB.pop();
            IB.push(JB), JB.in.reverse().forEach(ZB(JB)), JB.out.forEach(TB(JB))
          }
          return IB.filter((BB => !BB.merged)).map((BB => II(BB, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ZB).filter((BB => !BB.indegree)))
    }

    function VI(BB, IB, ZB, TB, JB) {
      let oB = {},
        GB = null,
        vB = null,
        kB = JB;
      "boolean" == typeof IB ? (kB = IB, oB = {}) : IB && (oB = IB, GB = null != ZB ? ZB : null, vB = null != TB ? TB : null);
      let cB = function(BB, IB) {
          let ZB = {
            lhs: [],
            rhs: []
          };
          return BB.forEach((BB => {
            IB(BB) ? ZB.lhs.push(BB) : ZB.rhs.push(BB)
          })), ZB
        }(BB, (BB => Object.hasOwn(BB, "barycenter"))),
        nB = cB.lhs,
        hB = cB.rhs.sort(((BB, IB) => IB.i - BB.i)),
        zB = [],
        FB = 0,
        NB = 0,
        gB = 0;
      nB.sort(function(BB, IB, ZB) {
        return (TB, JB) => {
          if (TB.barycenter < JB.barycenter) return -1;
          if (TB.barycenter > JB.barycenter) return 1;
          if (BB && ("string" == typeof TB.vs[0] || "string" == typeof JB.vs[0])) {
            let ZB = BB.node(TB.vs[0]),
              oB = BB.node(JB.vs[0]),
              GB = JI(IB, ZB, oB);
            if (0 !== GB) return GB
          }
          return ZB ? JB.i - TB.i : TB.i - JB.i
        }
      }(vB, GB, !!kB));
      for (let [yB, UB] of Object.entries(oB)) {
        let BB = nB.findIndex((BB => BB.vs[0] === yB));
        nB.splice(BB + 1, 0, UB)
      }
      gB = SI(zB, hB, gB), nB.forEach((BB => {
        gB += BB.vs.length, zB.push(BB.vs), FB += BB.barycenter * BB.weight, NB += BB.weight, gB = SI(zB, hB, gB)
      }));
      let qB = {
        vs: zB.flat(1)
      };
      return NB && (qB.barycenter = FB / NB, qB.weight = NB), qB
    }

    function SI(BB, IB, ZB) {
      let TB;
      for (; IB.length && (TB = IB[IB.length - 1]).i <= ZB;) IB.pop(), BB.push(TB.vs), ZB++;
      return ZB
    }

    function BZ(BB, IB, ZB, TB, JB) {
      var oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB;
      let qB = null,
        yB = JB;
      "boolean" == typeof TB ? (yB = TB, qB = null) : void 0 !== TB && (qB = TB);
      let UB = BB.children(IB),
        WB = BB.node(IB),
        dB = WB ? WB.borderLeft : void 0,
        CB = WB ? WB.borderRight : void 0,
        QB = {};
      dB && (UB = UB.filter((BB => BB !== dB && BB !== CB)));
      let sB = function(BB) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((IB => {
          let ZB = BB.inEdges(IB);
          if (!ZB || !ZB.length) return {
            v: IB
          };
          {
            let TB = ZB.reduce(((IB, ZB) => {
              let TB = BB.edge(ZB),
                JB = BB.node(ZB.v);
              return {
                sum: IB.sum + TB.weight * JB.order,
                weight: IB.weight + TB.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: IB,
              barycenter: TB.sum / TB.weight,
              weight: TB.weight
            }
          }
        }))
      }(BB, UB);
      sB.forEach((IB => {
        if (BB.children(IB.v).length) {
          let {
            result: TB
          } = BZ(BB, IB.v, ZB, qB, yB);
          QB[IB.v] = TB, Object.hasOwn(TB, "barycenter") && function(BB, IB) {
            void 0 !== BB.barycenter ? (BB.barycenter = (BB.barycenter * BB.weight + IB.barycenter * IB.weight) / (BB.weight + IB.weight), BB.weight += IB.weight) : (BB.barycenter = IB.barycenter, BB.weight = IB.weight)
          }(IB, TB)
        }
      }));
      let wB = KI(sB, ZB);
      ! function(BB, IB) {
        BB.forEach((BB => {
          BB.vs = BB.vs.flatMap((BB => IB[BB] ? IB[BB].vs : BB))
        }))
      }(wB, QB);
      let OB = {},
        YB = !1;
      for (let pB = 0; pB < wB.length; pB++)
        for (let IB = pB + 1; IB < wB.length; IB++)
          if (wB[pB] && wB[IB] && null != (oB = wB[pB]) && oB.barycenter && null != (GB = wB[IB]) && GB.barycenter && (null == (vB = wB[pB]) ? void 0 : vB.barycenter) === wB[IB].barycenter) {
            let ZB = null != (cB = null == (kB = wB[pB]) ? void 0 : kB.vs[0]) ? cB : "",
              TB = null != (hB = null == (nB = wB[IB]) ? void 0 : nB.vs[0]) ? hB : "",
              JB = BB.node(ZB),
              oB = BB.node(TB);
            if ("edge" === JB.dummy && "edge" === oB.dummy && (null == (zB = JB.edgeObj) ? void 0 : zB.v) === (null == (FB = oB.edgeObj) ? void 0 : FB.v) && (null == (NB = JB.edgeObj) ? void 0 : NB.w) === (null == (gB = oB.edgeObj) ? void 0 : gB.w)) {
              if (JB.edgeLabel.reversed) {
                OB[TB] = wB[pB], wB.splice(pB, 1), pB--;
                break
              }
              OB[ZB] = wB[IB], wB.splice(IB, 1), IB--
            } else YB = !0
          } let iB = VI(wB, OB, qB, BB, yB);
      if (dB && CB) {
        iB.vs = [dB, iB.vs, CB].flat(1);
        let IB = BB.predecessors(dB);
        if (IB && IB.length) {
          let ZB = BB.node(IB[0]),
            TB = BB.predecessors(CB),
            JB = BB.node(TB[0]);
          Object.hasOwn(iB, "barycenter") || (iB.barycenter = 0, iB.weight = 0), iB.barycenter = (iB.barycenter * iB.weight + ZB.order + JB.order) / (iB.weight + 2), iB.weight += 2
        }
      }
      return Object.defineProperty(iB, "result", {
        value: iB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(iB, "usedBias", {
        value: YB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), iB
    }

    function IZ(BB, IB, ZB, TB) {
      TB || (TB = BB.nodes());
      let JB = function(BB) {
          let IB;
          for (; BB.hasNode(IB = SB("_root")););
          return IB
        }(BB),
        oB = new eB({
          compound: !0
        }).setGraph({
          root: JB
        }).setDefaultNodeLabel((IB => BB.node(IB)));
      return TB.forEach((TB => {
        let GB = BB.node(TB),
          vB = BB.parent(TB);
        if (GB.rank === IB || GB.minRank <= IB && IB <= GB.maxRank) {
          oB.setNode(TB), oB.setParent(TB, vB || JB);
          let kB = BB[ZB](TB);
          kB && kB.forEach((IB => {
            let ZB = IB.v === TB ? IB.w : IB.v,
              JB = oB.edge(ZB, TB),
              GB = void 0 !== JB ? JB.weight : 0;
            oB.setEdge(ZB, TB, {
              weight: BB.edge(IB).weight + GB
            })
          })), Object.hasOwn(GB, "minRank") && oB.setNode(TB, {
            borderLeft: GB.borderLeft[IB],
            borderRight: GB.borderRight[IB]
          })
        }
      })), oB
    }

    function ZZ(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof IB.customOrder) return void IB.customOrder(BB, ZZ);
      let TB = EB(BB),
        JB = TZ(BB, BI(1, TB + 1), "inEdges"),
        oB = TZ(BB, BI(TB - 1, -1, -1), "outEdges"),
        GB = xI(BB, ZB);
      if (oZ(BB, GB), IB.disableOptimalOrderHeuristic) return;
      let vB, kB = Number.POSITIVE_INFINITY,
        cB = IB.constraints || [];
      for (let nB = 0, hB = 0; hB < 4; ++nB, ++hB) {
        JZ(nB % 2 ? JB : oB, nB % 4 >= 2, cB, ZB), GB = AB(BB);
        let IB = EI(BB, GB);
        IB < kB ? (hB = 0, vB = Object.assign({}, GB), kB = IB) : IB === kB && (vB = structuredClone(GB))
      }
      oZ(BB, vB)
    }

    function TZ(BB, IB, ZB) {
      let TB = new Map,
        JB = (BB, IB) => {
          TB.has(BB) || TB.set(BB, []), TB.get(BB).push(IB)
        };
      for (let oB of BB.nodes()) {
        let IB = BB.node(oB);
        if ("number" == typeof IB.rank && JB(IB.rank, oB), "number" == typeof IB.minRank && "number" == typeof IB.maxRank)
          for (let BB = IB.minRank; BB <= IB.maxRank; BB++) BB !== IB.rank && JB(BB, oB)
      }
      return IB.map((function(IB) {
        return IZ(BB, IB, ZB, TB.get(IB) || [])
      }))
    }

    function JZ(BB, IB, ZB, TB) {
      let JB = !0,
        oB = new eB;
      BB.forEach((function(BB) {
        ZB.forEach((BB => oB.setEdge(BB.left, BB.right)));
        let GB = BB.graph().root,
          {
            result: vB,
            usedBias: kB
          } = BZ(BB, GB, oB, TB, JB);
        IB && kB && (JB = !JB), vB.vs.forEach(((IB, ZB) => BB.node(IB).order = ZB)),
          function(BB, IB, ZB) {
            let TB, JB = {};
            ZB.forEach((ZB => {
              let oB, GB, vB = BB.parent(ZB);
              for (; vB;) {
                if (oB = BB.parent(vB), oB ? (GB = JB[oB], JB[oB] = vB) : (GB = TB, TB = vB), GB && GB !== vB) return void IB.setEdge(GB, vB);
                vB = oB
              }
            }))
          }(BB, oB, vB.vs)
      }))
    }

    function oZ(BB, IB) {
      Object.values(IB).forEach((IB => IB.forEach(((IB, ZB) => BB.node(IB).order = ZB))))
    }

    function GZ(BB, IB, ZB) {
      if (IB > ZB) {
        let BB = IB;
        IB = ZB, ZB = BB
      }
      let TB = BB[IB];
      TB || (BB[IB] = TB = {}), TB[ZB] = !0
    }

    function vZ(BB, IB, ZB) {
      if (IB > ZB) {
        let BB = IB;
        IB = ZB, ZB = BB
      }
      let TB = BB[IB];
      return void 0 !== TB && Object.hasOwn(TB, ZB)
    }

    function kZ(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        oB = {},
        GB = function(BB, IB, ZB, TB) {
          let JB = new eB,
            oB = BB.graph(),
            GB = function(BB, IB, ZB) {
              return (TB, JB, oB) => {
                let GB, vB = TB.node(JB),
                  kB = TB.node(oB),
                  cB = 0;
                if (cB += vB.width / 2, Object.hasOwn(vB, "labelpos")) switch (vB.labelpos.toLowerCase()) {
                  case "l":
                    GB = -vB.width / 2;
                    break;
                  case "r":
                    GB = vB.width / 2
                }
                if (GB && (cB += ZB ? GB : -GB), GB = void 0, cB += (vB.dummy ? IB : BB) / 2, cB += (kB.dummy ? IB : BB) / 2, cB += kB.width / 2, Object.hasOwn(kB, "labelpos")) switch (kB.labelpos.toLowerCase()) {
                  case "l":
                    GB = kB.width / 2;
                    break;
                  case "r":
                    GB = -kB.width / 2
                }
                return GB && (cB += ZB ? GB : -GB), cB
              }
            }(oB.nodesep, oB.edgesep, TB);
          return IB.forEach((IB => {
            let TB;
            IB.forEach((IB => {
              let oB = ZB[IB];
              if (void 0 !== oB) {
                if (JB.setNode(oB), void 0 !== TB) {
                  let vB = ZB[TB];
                  if (void 0 !== vB) {
                    let ZB = JB.edge(vB, oB);
                    JB.setEdge(vB, oB, Math.max(GB(BB, IB, TB), ZB || 0))
                  }
                }
                TB = IB
              }
            }))
          })), JB
        }(BB, IB, ZB, JB),
        vB = JB ? "borderLeft" : "borderRight";

      function kB(BB, IB) {
        let ZB = GB.nodes().slice(),
          TB = {},
          JB = ZB.pop();
        for (; JB;) {
          if (TB[JB]) BB(JB);
          else {
            TB[JB] = !0, ZB.push(JB);
            for (let BB of IB(JB)) ZB.push(BB)
          }
          JB = ZB.pop()
        }
      }
      return kB((function(BB) {
        let IB = GB.inEdges(BB);
        oB[BB] = IB ? IB.reduce(((BB, IB) => {
          var ZB;
          let TB = null != (ZB = oB[IB.v]) ? ZB : 0,
            JB = GB.edge(IB);
          return Math.max(BB, TB + (void 0 !== JB ? JB : 0))
        }), 0) : 0
      }), (function(BB) {
        return GB.predecessors(BB) || []
      })), kB((function(IB) {
        let ZB = GB.outEdges(IB),
          TB = Number.POSITIVE_INFINITY;
        ZB && (TB = ZB.reduce(((BB, IB) => {
          let ZB = oB[IB.w],
            TB = GB.edge(IB);
          return Math.min(BB, (void 0 !== ZB ? ZB : 0) - (void 0 !== TB ? TB : 0))
        }), Number.POSITIVE_INFINITY));
        let JB = BB.node(IB);
        TB !== Number.POSITIVE_INFINITY && JB.borderType !== vB && (oB[IB] = Math.max(void 0 !== oB[IB] ? oB[IB] : 0, TB))
      }), (function(BB) {
        return GB.successors(BB) || []
      })), Object.keys(TB).forEach((BB => {
        var IB;
        let TB = ZB[BB];
        void 0 !== TB && (oB[BB] = null != (IB = oB[TB]) ? IB : 0)
      })), oB
    }

    function cZ(BB, IB) {
      let ZB, TB = AB(BB),
        JB = Object.assign(function(BB, IB) {
          let ZB = {};
          return IB.length && IB.reduce((function(IB, TB) {
            let JB = 0,
              oB = 0,
              GB = IB.length,
              vB = TB[TB.length - 1];
            return TB.forEach(((IB, kB) => {
              let cB = function(BB, IB) {
                  if (BB.node(IB).dummy) {
                    let ZB = BB.predecessors(IB);
                    if (ZB) return ZB.find((IB => BB.node(IB).dummy))
                  }
                }(BB, IB),
                nB = cB ? BB.node(cB).order : GB;
              (cB || IB === vB) && (TB.slice(oB, kB + 1).forEach((IB => {
                let TB = BB.predecessors(IB);
                TB && TB.forEach((TB => {
                  let oB = BB.node(TB),
                    GB = oB.order;
                  (GB < JB || nB < GB) && (!oB.dummy || !BB.node(IB).dummy) && GZ(ZB, TB, IB)
                }))
              })), oB = kB + 1, JB = nB)
            })), TB
          })), ZB
        }(BB, TB), function(BB, IB) {
          let ZB = {};

          function TB(IB, TB, JB, oB, GB) {
            BI(TB, JB).forEach((TB => {
              let JB = IB[TB];
              if (void 0 !== JB && BB.node(JB).dummy) {
                let IB = BB.predecessors(JB);
                IB && IB.forEach((IB => {
                  if (void 0 === IB) return;
                  let TB = BB.node(IB);
                  TB.dummy && (TB.order < oB || TB.order > GB) && GZ(ZB, IB, JB)
                }))
              }
            }))
          }
          return IB.length && IB.reduce((function(IB, ZB) {
            let JB = -1,
              oB = -1,
              GB = 0;
            return ZB.forEach(((vB, kB) => {
              if ("border" === BB.node(vB).dummy) {
                let IB = BB.predecessors(vB);
                if (IB && IB.length) {
                  let vB = IB[0];
                  if (void 0 === vB) return;
                  oB = BB.node(vB).order, TB(ZB, GB, kB, JB, oB), GB = kB, JB = oB
                }
              }
              TB(ZB, GB, ZB.length, oB, IB.length)
            })), ZB
          })), ZB
        }(BB, TB)),
        oB = {};
      ["u", "d"].forEach((GB => {
        ZB = "u" === GB ? TB : Object.values(TB).reverse(), ["l", "r"].forEach((TB => {
          "r" === TB && (ZB = ZB.map((BB => Object.values(BB).reverse())));
          let vB = function(BB, IB, ZB, TB, JB) {
              let oB = {},
                GB = {},
                vB = {};
              return IB.forEach((BB => {
                BB.forEach(((BB, IB) => {
                  oB[BB] = BB, GB[BB] = BB, vB[BB] = IB
                }))
              })), IB.forEach((IB => {
                let kB = -1,
                  cB = -1,
                  nB = !1,
                  hB = IB,
                  zB = IB.findIndex((IB => (null == JB ? void 0 : JB.includes(IB)) || nZ(IB, BB, JB)));
                zB > 0 && (hB = [IB[zB], ...IB.slice(0, zB), ...IB.slice(zB + 1)], nB = !0), hB.forEach((IB => {
                  var hB;
                  let zB = TB(IB);
                  if (zB && zB.length) {
                    null != JB && JB.includes(IB) && (zB = zB.filter((IB => nZ(IB, BB, JB))));
                    let TB = zB.sort(((BB, IB) => {
                        let ZB = vB[BB],
                          TB = vB[IB];
                        return (void 0 !== ZB ? ZB : 0) - (void 0 !== TB ? TB : 0)
                      })),
                      FB = (TB.length - 1) / 2;
                    for (let BB = Math.floor(FB), JB = Math.ceil(FB); BB <= JB; ++BB) {
                      let JB = TB[BB];
                      if (void 0 === JB) continue;
                      let zB = vB[JB];
                      if (void 0 !== zB && GB[IB] === IB && kB < zB && vB[JB] !== cB && !vZ(ZB, IB, JB)) {
                        let BB = oB[JB];
                        void 0 !== BB && (GB[JB] = IB, GB[IB] = oB[IB] = BB, kB = zB, nB && (kB = -1, cB = null != (hB = vB[JB]) ? hB : -1, nB = !1))
                      }
                    }
                  }
                }))
              })), {
                root: oB,
                align: GB
              }
            }(BB, ZB, JB, (IB => ("u" === GB ? BB.predecessors(IB) : BB.successors(IB)) || []), IB),
            kB = kZ(BB, ZB, vB.root, vB.align, "r" === TB);
          "r" === TB && (kB = ZI(kB, (BB => -BB))), oB[GB + TB] = kB
        }))
      }));
      let GB = function(BB, IB) {
        return Object.values(IB).reduce(((IB, ZB) => {
          let TB = Number.NEGATIVE_INFINITY,
            JB = Number.POSITIVE_INFINITY;
          Object.entries(ZB).forEach((IB => {
            let [ZB, oB] = IB, GB = function(BB, IB) {
              return BB.node(IB).width
            }(BB, ZB) / 2;
            TB = Math.max(oB + GB, TB), JB = Math.min(oB - GB, JB)
          }));
          let oB = TB - JB;
          return oB < IB[0] && (IB = [oB, ZB]), IB
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(BB, oB);
      return function(BB, IB) {
          let ZB = Object.values(IB),
            TB = xB(Math.min, ZB),
            JB = xB(Math.max, ZB);
          ["u", "d"].forEach((ZB => {
            ["l", "r"].forEach((oB => {
              let GB = ZB + oB,
                vB = BB[GB];
              if (!vB || vB === IB) return;
              let kB = Object.values(vB),
                cB = TB - xB(Math.min, kB);
              "l" !== oB && (cB = JB - xB(Math.max, kB)), cB && (BB[GB] = ZI(vB, (BB => BB + cB)))
            }))
          }))
        }(oB, GB),
        function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ZB = BB.ul;
          return ZB ? ZI(ZB, ((ZB, TB) => {
            var JB, oB;
            if (IB) {
              let ZB = IB.toLowerCase(),
                JB = BB[ZB];
              if (JB && void 0 !== JB[TB]) return JB[TB]
            }
            let GB = Object.values(BB).map((BB => {
              let IB = BB[TB];
              return void 0 !== IB ? IB : 0
            })).sort(((BB, IB) => BB - IB));
            return ((null != (JB = GB[1]) ? JB : 0) + (null != (oB = GB[2]) ? oB : 0)) / 2
          })) : {}
        }(oB, BB.graph().align)
    }

    function nZ(BB, IB, ZB) {
      var TB;
      if (!ZB) return !1;
      let JB = null == (TB = IB.node(BB)) ? void 0 : TB.edgeObj;
      if (!JB || IB.node(BB).edgeLabel.reversed) return !1;
      let oB = ZB.indexOf(null == JB ? void 0 : JB.v),
        GB = ZB.indexOf(null == JB ? void 0 : JB.w);
      return -1 !== oB && -1 !== GB && oB === (GB + 1) % ZB.length || oB === (GB - 1) % ZB.length
    }

    function hZ(BB, IB) {
      (function(BB) {
        let IB = AB(BB),
          ZB = BB.graph(),
          TB = ZB.ranksep,
          JB = ZB.rankalign,
          oB = 0;
        IB.forEach((IB => {
          let ZB = IB.reduce(((IB, ZB) => {
            var TB;
            let JB = null != (TB = BB.node(ZB).height) ? TB : 0;
            return IB > JB ? IB : JB
          }), 0);
          IB.forEach((IB => {
            let TB = BB.node(IB);
            TB.y = "top" === JB ? oB + TB.height / 2 : "bottom" === JB ? oB + ZB - TB.height / 2 : oB + ZB / 2
          })), oB += ZB + TB
        }))
      })(BB = fB(BB)), Object.entries(cZ(BB, IB)).forEach((IB => {
        let [ZB, TB] = IB;
        return BB.node(ZB).x = TB
      }))
    }
    var zZ = new WeakMap;

    function FZ(BB) {
      return gZ(BB, KB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), BB
    }

    function NZ(BB, IB, ZB) {
      let TB = IB;
      for (; void 0 !== TB;) {
        let IB = BB.parent(TB);
        if (IB === ZB) return TB;
        TB = IB
      }
    }

    function gZ(BB, IB, ZB) {
      var TB;
      let JB = BB.nodes().filter((IB => BB.children(IB).length)),
        oB = {};
      JB.forEach((TB => {
        let JB = BB.node(TB);
        if (JB && JB.rankdir) {
          let GB = new eB({
            multigraph: !0,
            compound: !0
          });
          GB.setGraph({
            rankdir: JB.rankdir
          });
          let vB = BB.children(TB);
          vB.forEach((IB => {
            let ZB = {
              ...BB.node(IB)
            };
            GB.setNode(IB, ZB);
            let JB = BB.parent(IB);
            JB && JB !== TB && vB.includes(JB) && GB.setParent(IB, JB)
          }));
          let kB = new Set;
          BB.edges().forEach((IB => {
            let ZB = NZ(BB, IB.v, TB),
              JB = NZ(BB, IB.w, TB);
            if (ZB && JB && ZB !== JB) {
              let TB = `${ZB}\0${JB}`;
              kB.has(TB) || (kB.add(TB), GB.setEdge(ZB, JB, {
                ...BB.edge(IB)
              }))
            }
          })), gZ(GB, IB, ZB);
          let cB = YZ(GB);
          qZ(cB, IB, ZB, null), yZ(GB, cB);
          let nB = 1 / 0,
            hB = 1 / 0,
            zB = -1 / 0,
            FB = -1 / 0;
          GB.nodes().forEach((BB => {
            if (BB === TB) return;
            let IB = GB.node(BB);
            IB && "number" == typeof IB.x && "number" == typeof IB.y && "number" == typeof IB.width && "number" == typeof IB.height && (nB = Math.min(nB, IB.x - IB.width / 2), zB = Math.max(zB, IB.x + IB.width / 2), hB = Math.min(hB, IB.y - IB.height / 2), FB = Math.max(FB, IB.y + IB.height / 2))
          })), (!isFinite(nB) || !isFinite(hB) || !isFinite(zB) || !isFinite(FB)) && (nB = hB = 0, zB = FB = 0);
          let NB = zB - nB,
            gB = FB - hB;
          oB[TB] = {
            minX: nB,
            BT: hB,
            maxX: zB,
            IT: FB,
            width: NB,
            height: gB,
            offsetX: nB,
            offsetY: hB
          }, JB._dagreClusterSubgraph = GB
        }
      }));
      let GB = [],
        vB = new Map;
      JB.forEach((IB => {
        let ZB = BB.node(IB);
        ZB && ZB.rankdir && oB[IB] && vB.set(IB, (BB.children(IB) || []).filter((BB => BB !== IB)))
      }));
      let kB = new Set([...vB.values()].flat()),
        cB = new Map;
      vB.forEach(((IB, ZB) => {
        kB.has(ZB) || cB.set(ZB, (IB => {
          let ZB = [],
            TB = (BB.children(IB) || []).filter((BB => BB !== IB));
          for (; TB.length > 0;) {
            let IB = TB.shift();
            ZB.push(IB), (BB.children(IB) || []).filter((BB => BB !== IB)).forEach((BB => TB.push(BB)))
          }
          return ZB
        })(ZB))
      }));
      let nB = new Set([...cB.values()].flat()),
        hB = BB => {
          for (let [IB, ZB] of cB)
            if (ZB.includes(BB)) return IB;
          return BB
        },
        zB = [];
      BB.edges().forEach((IB => {
        (nB.has(IB.v) || nB.has(IB.w)) && zB.push({
          edge: IB,
          label: BB.edge(IB)
        })
      }));
      let FB = new Map;
      nB.forEach((IB => {
        let ZB = BB.parent(IB);
        FB.set(IB, "string" == typeof ZB ? ZB : void 0)
      })), cB.forEach(((IB, ZB) => {
        let TB = BB.node(ZB),
          JB = [];
        IB.forEach((IB => {
          let ZB = BB.node(IB);
          ZB && (JB.push({
            id: IB,
            node: ZB,
            parent: FB.get(IB)
          }), BB.removeNode(IB))
        }));
        let vB = zB.filter((BB => {
            let {
              edge: ZB
            } = BB;
            return IB.includes(ZB.v) || IB.includes(ZB.w)
          })),
          kB = oB[ZB];
        TB && (GB.push({
          clusterId: ZB,
          subgraph: TB._dagreClusterSubgraph,
          bounds: kB,
          children: IB,
          removedNodes: JB,
          removedEdges: vB
        }), TB.width = kB.width, TB.height = kB.height)
      }));
      let NB = new Set;
      zB.forEach((IB => {
        let {
          edge: ZB,
          label: TB
        } = IB, JB = hB(ZB.v), oB = hB(ZB.w);
        if (JB !== oB && BB.hasNode(JB) && BB.hasNode(oB)) {
          let IB = `${JB}\0${oB}`;
          NB.has(IB) || (NB.add(IB), BB.setEdge(JB, oB, {
            ...TB,
            width: 0,
            height: 0
          }))
        }
      }));
      let gB = YZ(BB),
        qB = qZ(gB, IB, ZB, null != (TB = zZ.get(BB)) ? TB : null);
      zZ.set(BB, qB), yZ(BB, gB), NB.forEach((IB => {
        let ZB = IB.indexOf("\0"),
          TB = IB.slice(0, ZB),
          JB = IB.slice(ZB + 1);
        BB.hasEdge(TB, JB) && BB.removeEdge(TB, JB)
      })), GB.forEach((IB => {
        let {
          clusterId: ZB,
          subgraph: TB,
          bounds: JB,
          removedNodes: oB,
          removedEdges: GB
        } = IB;
        var vB, kB;
        let cB = BB.node(ZB),
          nB = null != (vB = null == cB ? void 0 : cB.x) ? vB : 0,
          hB = null != (kB = null == cB ? void 0 : cB.y) ? kB : 0,
          zB = (JB.minX + JB.maxX) / 2,
          FB = (JB.BT + JB.IT) / 2;
        oB.forEach((IB => {
          let {
            id: ZB,
            node: TB,
            parent: JB
          } = IB;
          BB.setNode(ZB, TB), void 0 !== JB && BB.setParent(ZB, JB)
        })), GB.forEach((IB => {
          let {
            edge: ZB,
            label: TB
          } = IB;
          BB.setEdge(ZB, TB)
        })), TB.nodes().forEach((IB => {
          if (IB === ZB) return;
          let JB = TB.node(IB),
            oB = BB.node(IB);
          oB && JB && "number" == typeof JB.x && "number" == typeof JB.y && (oB.x = nB + (JB.x - zB), oB.y = hB + (JB.y - FB))
        })), delete cB._dagreClusterSubgraph
      })), JB.forEach((IB => {
        var ZB, TB;
        let JB = BB.node(IB),
          GB = oB[IB];
        if (JB && JB.rankdir && JB._dagreClusterSubgraph && GB) {
          let oB = JB._dagreClusterSubgraph,
            vB = null != (ZB = JB.x) ? ZB : 0,
            kB = null != (TB = JB.y) ? TB : 0,
            cB = (GB.minX + GB.maxX) / 2,
            nB = (GB.BT + GB.IT) / 2;
          oB.nodes().forEach((ZB => {
            if (ZB === IB) return;
            let TB = oB.node(ZB),
              JB = BB.node(ZB);
            if (JB && TB && "number" == typeof TB.x && "number" == typeof TB.y) {
              let BB = TB.x - cB,
                IB = TB.y - nB;
              JB.x = vB + BB, JB.y = kB + IB
            }
          })), delete JB._dagreClusterSubgraph
        }
      }))
    }

    function qZ(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var JB, oB;
      let GB = !1 !== (null == ZB ? void 0 : ZB.useDynamic),
        vB = GB && null != (JB = null == TB ? void 0 : TB.graph) ? JB : null,
        kB = GB && null != (oB = null == TB ? void 0 : TB.rawNodes) ? oB : null;
      IB("    makeSpaceForEdgeLabels", (() => function(BB) {
        let IB = BB.graph();
        IB.ranksep /= 2, BB.edges().forEach((ZB => {
          var TB;
          let JB = BB.edge(ZB);
          JB.minlen *= 2, "c" !== (null != (TB = JB.labelpos) ? TB : "r").toLowerCase() && ("TB" === IB.rankdir || "BT" === IB.rankdir ? JB.width += JB.labeloffset : JB.height += JB.labeloffset)
        }))
      }(BB))), IB("    removeSelfEdges", (() => function(BB) {
        BB.edges().forEach((IB => {
          if (IB.v === IB.w) {
            let ZB = BB.node(IB.v);
            ZB.selfEdges || (ZB.selfEdges = []), ZB.selfEdges.push({
              e: IB,
              label: BB.edge(IB)
            }), BB.removeEdge(IB)
          }
        }))
      }(BB))), IB("    acyclic", (() => FI(BB, vB))), IB("    nestingGraph.run", (() => XI(BB))), IB("    rank", (() => PI(fB(BB)))), IB("    injectEdgeLabelProxies", (() => function(BB) {
        BB.edges().forEach((IB => {
          let ZB = BB.edge(IB);
          if (ZB.width && ZB.height) {
            let ZB = BB.node(IB.v),
              TB = {
                rank: (BB.node(IB.w).rank - ZB.rank) / 2 + ZB.rank,
                e: IB
              };
            uB(BB, "edge-proxy", TB, "_ep")
          }
        }))
      }(BB))), IB("    removeEmptyRanks", (() => function(BB) {
        let IB = BB.nodes().map((IB => BB.node(IB).rank)).filter((BB => void 0 !== BB)),
          ZB = xB(Math.min, IB),
          TB = [];
        BB.nodes().forEach((IB => {
          let JB = BB.node(IB).rank - ZB;
          TB[JB] || (TB[JB] = []), TB[JB].push(IB)
        }));
        let JB = 0,
          oB = BB.graph().nodeRankFactor;
        Array.from(TB).forEach(((IB, ZB) => {
          void 0 === IB && ZB % oB !== 0 ? --JB : void 0 !== IB && JB && IB.forEach((IB => BB.node(IB).rank += JB))
        }))
      }(BB))), IB("    nestingGraph.cleanup", (() => function(BB) {
        let IB = BB.graph();
        BB.removeNode(IB.nestingRoot), delete IB.nestingRoot, BB.edges().forEach((IB => {
          BB.edge(IB).nestingEdge && BB.removeEdge(IB)
        }))
      }(BB))), IB("    normalizeRanks", (() => function(BB) {
        let IB = BB.nodes().map((IB => {
            let ZB = BB.node(IB).rank;
            return void 0 === ZB ? Number.MAX_VALUE : ZB
          })),
          ZB = xB(Math.min, IB);
        BB.nodes().forEach((IB => {
          let TB = BB.node(IB);
          Object.hasOwn(TB, "rank") && (TB.rank -= ZB)
        }))
      }(BB))), IB("    assignRankMinMax", (() => function(BB) {
        let IB = 0;
        BB.nodes().forEach((ZB => {
          let TB = BB.node(ZB);
          TB.borderTop && (TB.minRank = BB.node(TB.borderTop).rank, TB.maxRank = BB.node(TB.borderBottom).rank, IB = Math.max(IB, TB.maxRank))
        })), BB.graph().maxRank = IB
      }(BB))), IB("    removeEdgeLabelProxies", (() => function(BB) {
        BB.nodes().forEach((IB => {
          let ZB = BB.node(IB);
          if ("edge-proxy" === ZB.dummy) {
            let TB = ZB;
            BB.edge(TB.e).labelRank = ZB.rank, BB.removeNode(IB)
          }
        }))
      }(BB))), IB("    normalize.run", (() => NI(BB))), IB("    parentDummyChains", (() => mI(BB))), IB("    addBorderSegments", (() => eI(BB))), IB("    order", (() => ZZ(BB, ZB, kB))), IB("    insertSelfEdges", (() => function(BB) {
        AB(BB).forEach((IB => {
          let ZB = 0;
          IB.forEach(((IB, TB) => {
            let JB = BB.node(IB);
            "number" != typeof JB.rank && (JB.rank = 0), JB.order = TB + ZB, (JB.selfEdges || []).forEach((IB => {
              uB(BB, "selfedge", {
                width: IB.label.width,
                height: IB.label.height,
                rank: JB.rank,
                order: TB + ++ZB,
                e: IB.e,
                edgeLabel: IB.label
              }, "_se"), (!Array.isArray(IB.label.points) || 7 !== IB.label.points.length) && (IB.label.points = [{
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
            })), delete JB.selfEdges
          }))
        }))
      }(BB))), IB("    adjustCoordinateSystem", (() => function(BB) {
        var IB;
        let ZB = null == (IB = BB.graph().rankdir) ? void 0 : IB.toLowerCase();
        ("lr" === ZB || "rl" === ZB) && lI(BB)
      }(BB))), IB("    position", (() => hZ(BB, ZB.corePath))), IB("    positionSelfEdges", (() => function(BB) {
        BB.nodes().forEach((IB => {
          let ZB = BB.node(IB),
            TB = BB => "number" == typeof BB && isFinite(BB);
          if ("selfedge" === ZB.dummy) {
            let JB = ZB,
              oB = BB.node(JB.e.v),
              GB = TB(null == oB ? void 0 : oB.x) ? oB.x : 0,
              vB = TB(null == oB ? void 0 : oB.y) ? oB.y : 0,
              kB = TB(null == oB ? void 0 : oB.width) ? oB.width : 0,
              cB = TB(null == oB ? void 0 : oB.height) ? oB.height : 0,
              nB = TB(ZB.x) ? ZB.x : GB,
              hB = TB(ZB.y) ? ZB.y : vB,
              zB = kB / 2,
              FB = cB / 2;
            JB.edgeLabel.points = [{
              x: nB + zB,
              y: hB - FB
            }, {
              x: nB + zB,
              y: hB - FB
            }, {
              x: nB,
              y: hB
            }, {
              x: nB - zB,
              y: hB + FB
            }, {
              x: nB - zB,
              y: hB + FB
            }, {
              x: nB,
              y: hB
            }, {
              x: nB,
              y: hB
            }], JB.edgeLabel.x = nB, JB.edgeLabel.y = hB, BB.setEdge(JB.e, JB.edgeLabel), BB.removeNode(IB)
          } else ZB && Array.isArray(ZB.selfEdges) && ZB.selfEdges.forEach((BB => {
            if (!Array.isArray(BB.label.points) || 7 !== BB.label.points.length) {
              let IB = TB(ZB.x) ? ZB.x : 0,
                JB = TB(ZB.y) ? ZB.y : 0,
                oB = (TB(ZB.width) ? ZB.width : 0) / 2,
                GB = (TB(ZB.height) ? ZB.height : 0) / 2;
              BB.label.points = [{
                x: IB + oB,
                y: JB - GB
              }, {
                x: IB + oB,
                y: JB - GB
              }, {
                x: IB,
                y: JB
              }, {
                x: IB - oB,
                y: JB + GB
              }, {
                x: IB - oB,
                y: JB + GB
              }, {
                x: IB,
                y: JB
              }, {
                x: IB,
                y: JB
              }]
            }
          }))
        }))
      }(BB)));
      let cB = JSON.parse(JSON.stringify(BB._nodes));
      return IB("    removeBorderNodes", (() => function(BB) {
        BB.nodes().forEach((IB => {
          if (BB.children(IB).length) {
            let ZB = BB.node(IB),
              TB = BB.node(ZB.borderTop),
              JB = BB.node(ZB.borderBottom),
              oB = BB.node(ZB.borderLeft[ZB.borderLeft.length - 1]),
              GB = BB.node(ZB.borderRight[ZB.borderRight.length - 1]);
            ZB.width = Math.abs(GB.x - oB.x), ZB.height = Math.abs(JB.y - TB.y), ZB.x = oB.x + ZB.width / 2, ZB.y = TB.y + ZB.height / 2
          }
        })), BB.nodes().forEach((IB => {
          "border" === BB.node(IB).dummy && BB.removeNode(IB)
        }))
      }(BB))), IB("    normalize.undo", (() => function(BB) {
        BB.graph().dummyChains.forEach((IB => {
          let ZB, TB = BB.node(IB),
            JB = TB.edgeLabel;
          for (BB.setEdge(TB.edgeObj, JB); TB.dummy;) ZB = BB.successors(IB)[0], BB.removeNode(IB), JB.points.push({
            x: TB.x,
            y: TB.y
          }), "edge-label" === TB.dummy && (JB.x = TB.x, JB.y = TB.y, JB.width = TB.width, JB.height = TB.height), IB = ZB, TB = BB.node(IB)
        }))
      }(BB))), IB("    fixupEdgeLabelCoords", (() => function(BB) {
        BB.edges().forEach((IB => {
          let ZB = BB.edge(IB);
          if (Object.hasOwn(ZB, "x")) switch (("l" === ZB.labelpos || "r" === ZB.labelpos) && (ZB.width -= ZB.labeloffset), ZB.labelpos) {
            case "l":
              ZB.x -= ZB.width / 2 + ZB.labeloffset;
              break;
            case "r":
              ZB.x += ZB.width / 2 + ZB.labeloffset
          }
        }))
      }(BB))), IB("    undoCoordinateSystem", (() => fI(BB))), IB("    translateGraph", (() => function(BB) {
        let IB = Number.POSITIVE_INFINITY,
          ZB = 0,
          TB = Number.POSITIVE_INFINITY,
          JB = 0,
          oB = BB.graph(),
          GB = oB.marginx || 0,
          vB = oB.marginy || 0;

        function kB(BB) {
          let oB = BB.x,
            GB = BB.y,
            vB = BB.width,
            kB = BB.height;
          IB = Math.min(IB, oB - vB / 2), ZB = Math.max(ZB, oB + vB / 2), TB = Math.min(TB, GB - kB / 2), JB = Math.max(JB, GB + kB / 2)
        }
        BB.nodes().forEach((IB => kB(BB.node(IB)))), BB.edges().forEach((IB => {
          let ZB = BB.edge(IB);
          Object.hasOwn(ZB, "x") && kB(ZB)
        })), IB -= GB, TB -= vB, BB.nodes().forEach((ZB => {
          let JB = BB.node(ZB);
          JB.x -= IB, JB.y -= TB
        })), BB.edges().forEach((ZB => {
          let JB = BB.edge(ZB);
          JB.points.forEach((BB => {
            BB.x -= IB, BB.y -= TB
          })), Object.hasOwn(JB, "x") && (JB.x -= IB), Object.hasOwn(JB, "y") && (JB.y -= TB)
        })), oB.width = ZB - IB + GB, oB.height = JB - TB + vB
      }(BB))), IB("    assignNodeIntersects", (() => function(BB) {
        BB.edges().forEach((IB => {
          if (IB.v === IB.w) return;
          let ZB, TB, JB = BB.edge(IB),
            oB = BB.node(IB.v),
            GB = BB.node(IB.w);
          JB.points ? (ZB = JB.points[0], TB = JB.points[JB.points.length - 1]) : (JB.points = [], ZB = GB, TB = oB), JB.points.unshift(lB(oB, ZB)), JB.points.push(lB(GB, TB))
        }))
      }(BB))), IB("    reversePoints", (() => function(BB) {
        BB.edges().forEach((IB => {
          let ZB = BB.edge(IB);
          ZB.reversed && ZB.points.reverse()
        }))
      }(BB))), IB("    acyclic.undo", (() => function(BB) {
        BB.edges().forEach((IB => {
          let ZB = BB.edge(IB);
          if (ZB.reversed) {
            BB.removeEdge(IB);
            let TB = ZB.forwardName;
            delete ZB.reversed, delete ZB.forwardName, BB.setEdge(IB.w, IB.v, ZB, TB)
          }
        }))
      }(BB))), {
        graph: BB,
        rawNodes: cB
      }
    }

    function yZ(BB, IB) {
      BB.nodes().forEach((ZB => {
        let TB = BB.node(ZB),
          JB = IB.node(ZB);
        TB && (TB.x = JB.x, TB.y = JB.y, TB.order = JB.order, TB.rank = JB.rank, IB.children(ZB).length && (TB.width = JB.width, TB.height = JB.height))
      })), BB.edges().forEach((ZB => {
        let TB = BB.edge(ZB),
          JB = IB.edge(ZB);
        TB.points = JB.points, Object.hasOwn(JB, "x") && (TB.x = JB.x, TB.y = JB.y)
      })), BB.graph().width = IB.graph().width, BB.graph().height = IB.graph().height
    }
    var UZ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      WZ = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      dZ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      CZ = ["width", "height", "rank"],
      QZ = {
        width: 0,
        height: 0
      },
      sZ = ["minlen", "weight", "width", "height", "labeloffset"],
      wZ = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      OZ = ["labelpos"];

    function YZ(BB) {
      let IB = new eB({
          multigraph: !0,
          compound: !0
        }),
        ZB = pZ(BB.graph());
      return IB.setGraph(Object.assign({}, WZ, iZ(ZB, UZ), II(ZB, dZ))), BB.nodes().forEach((ZB => {
        let TB = iZ(pZ(BB.node(ZB)), CZ);
        Object.keys(QZ).forEach((BB => {
          void 0 === TB[BB] && (TB[BB] = QZ[BB])
        })), IB.setNode(ZB, TB);
        let JB = BB.parent(ZB);
        void 0 !== JB && IB.setParent(ZB, JB)
      })), BB.edges().forEach((ZB => {
        let TB = pZ(BB.edge(ZB));
        IB.setEdge(ZB, Object.assign({}, wZ, iZ(TB, sZ), II(TB, OZ)))
      })), IB
    }

    function iZ(BB, IB) {
      return ZI(II(BB, IB), Number)
    }

    function pZ(BB) {
      let IB = {};
      return BB && Object.entries(BB).forEach((BB => {
        let [ZB, TB] = BB;
        "string" == typeof ZB && (ZB = ZB.toLowerCase()), IB[ZB] = TB
      })), IB
    }

    function aZ(BB) {
      let IB = AB(BB),
        ZB = new eB({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return BB.nodes().forEach((IB => {
        ZB.setNode(IB, {
          label: IB
        }), ZB.setParent(IB, "layer" + BB.node(IB).rank)
      })), BB.edges().forEach((BB => ZB.setEdge(BB.v, BB.w, {}, BB.name))), IB.forEach(((BB, IB) => {
        let TB = "layer" + IB;
        ZB.setNode(TB, {
          rank: "same"
        }), BB.reduce(((BB, IB) => (ZB.setEdge(BB, IB, {
          style: "invis"
        }), IB)))
      })), ZB
    }
    var HZ = {
        time: DB,
        notime: KB
      },
      MZ = {
        graphlib: oB,
        version: oI,
        layout: FZ,
        debug: aZ,
        util: {
          time: DB,
          notime: KB
        }
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);