/*! For license information please see 7rj44.111.05b5ceb8.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6028: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Graph: () => kz,
      debug: () => cs,
      default: () => ys,
      graphlib: () => Xz,
      layout: () => ws,
      util: () => As,
      version: () => Xt
    });
    var Fz = Object.defineProperty,
      Wz = (zz, tz, sz) => ((zz, tz, sz) => tz in zz ? Fz(zz, tz, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: sz
      }) : zz[tz] = sz)(zz, "symbol" != typeof tz ? tz + "" : tz, sz),
      Xz = {};
    ((zz, tz) => {
      for (var sz in tz) Fz(zz, sz, {
        get: tz[sz],
        enumerable: !0
      })
    })(Xz, {
      Graph: () => kz,
      alg: () => Hz
    });
    var Oz = Object.defineProperty,
      oz = (zz, tz) => {
        for (var sz in tz) Oz(zz, sz, {
          get: tz[sz],
          enumerable: !0
        })
      },
      vz = class {
        constructor(zz) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, zz && (this._isDirected = !("directed" in zz) || zz.directed, this._isMultigraph = "multigraph" in zz && zz.multigraph, this._isCompound = "compound" in zz && zz.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(zz) {
          return this._label = zz, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(zz) {
          return this._defaultNodeLabelFn = "function" != typeof zz ? () => zz : zz, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((zz => 0 === Object.keys(this._in[zz]).length))
        }
        sinks() {
          return this.nodes().filter((zz => 0 === Object.keys(this._out[zz]).length))
        }
        setNodes(zz, tz) {
          return zz.forEach((zz => {
            void 0 !== tz ? this.setNode(zz, tz) : this.setNode(zz)
          })), this
        }
        setNode(zz, tz) {
          return zz in this._nodes ? (arguments.length > 1 && (this._nodes[zz] = tz), this) : (this._nodes[zz] = arguments.length > 1 ? tz : this._defaultNodeLabelFn(zz), this._isCompound && (this._parent[zz] = "\0", this._children[zz] = {}, this._children["\0"][zz] = !0), this._in[zz] = {}, this._preds[zz] = {}, this._out[zz] = {}, this._sucs[zz] = {}, ++this._nodeCount, this)
        }
        node(zz) {
          return this._nodes[zz]
        }
        hasNode(zz) {
          return zz in this._nodes
        }
        removeNode(zz) {
          if (zz in this._nodes) {
            let tz = zz => this.removeEdge(this._edgeObjs[zz]);
            delete this._nodes[zz], this._isCompound && (this._removeFromParentsChildList(zz), delete this._parent[zz], this.children(zz).forEach((zz => {
              this.setParent(zz)
            })), delete this._children[zz]), Object.keys(this._in[zz]).forEach(tz), delete this._in[zz], delete this._preds[zz], Object.keys(this._out[zz]).forEach(tz), delete this._out[zz], delete this._sucs[zz], --this._nodeCount
          }
          return this
        }
        setParent(zz, tz) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === tz) tz = "\0";
          else {
            for (let sz = tz += ""; void 0 !== sz; sz = this.parent(sz))
              if (sz === zz) throw new Error("Setting " + tz + " as parent of " + zz + " would create a cycle");
            this.setNode(tz)
          }
          return this.setNode(zz), this._removeFromParentsChildList(zz), this._parent[zz] = tz, this._children[tz][zz] = !0, this
        }
        parent(zz) {
          if (this._isCompound) {
            let tz = this._parent[zz];
            if ("\0" !== tz) return tz
          }
        }
        children() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let tz = this._children[zz];
            if (tz) return Object.keys(tz)
          } else {
            if ("\0" === zz) return this.nodes();
            if (this.hasNode(zz)) return []
          }
          return []
        }
        predecessors(zz) {
          let tz = this._preds[zz];
          if (tz) return Object.keys(tz)
        }
        successors(zz) {
          let tz = this._sucs[zz];
          if (tz) return Object.keys(tz)
        }
        neighbors(zz) {
          let tz = this.predecessors(zz);
          if (tz) {
            let sz = new Set(tz),
              Fz = this.successors(zz);
            if (Fz)
              for (let zz of Fz) sz.add(zz);
            return Array.from(sz.values())
          }
        }
        isLeaf(zz) {
          var tz;
          let sz;
          return sz = this.isDirected() ? this.successors(zz) : this.neighbors(zz), 0 === (null != (tz = null == sz ? void 0 : sz.length) ? tz : 0)
        }
        filterNodes(zz) {
          let tz = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          tz.setGraph(this.graph()), Object.entries(this._nodes).forEach((sz => {
            let [Fz, Wz] = sz;
            zz(Fz) && tz.setNode(Fz, Wz)
          })), Object.values(this._edgeObjs).forEach((zz => {
            tz.hasNode(zz.v) && tz.hasNode(zz.w) && tz.setEdge(zz, this.edge(zz))
          }));
          let sz = {},
            Fz = zz => {
              let Wz = this.parent(zz);
              return !Wz || tz.hasNode(Wz) ? (sz[zz] = Wz, Wz) : Wz in sz ? sz[Wz] : Fz(Wz)
            };
          return this._isCompound && tz.nodes().forEach((zz => tz.setParent(zz, Fz(zz)))), tz
        }
        setDefaultEdgeLabel(zz) {
          return this._defaultEdgeLabelFn = "function" != typeof zz ? () => zz : zz, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(zz, tz) {
          return zz.reduce(((zz, sz) => (void 0 !== tz ? this.setEdge(zz, sz, tz) : this.setEdge(zz, sz), sz))), this
        }
        setEdge(zz, tz, sz, Fz) {
          let Wz, Xz, Oz, oz, vz = !1;
          "object" == typeof zz && null !== zz && "v" in zz ? (Wz = zz.v, Xz = zz.w, Oz = zz.name, 2 === arguments.length && (oz = tz, vz = !0)) : (Wz = zz, Xz = tz, Oz = Fz, arguments.length > 2 && (oz = sz, vz = !0)), Wz = "" + Wz, Xz = "" + Xz, void 0 !== Oz && (Oz = "" + Oz);
          let Kz = uz(this._isDirected, Wz, Xz, Oz);
          if (Kz in this._edgeLabels) return vz && (this._edgeLabels[Kz] = oz), this;
          if (void 0 !== Oz && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Wz), this.setNode(Xz), this._edgeLabels[Kz] = vz ? oz : this._defaultEdgeLabelFn(Wz, Xz, Oz);
          let Nz = function(zz, tz, sz, Fz) {
            let Wz = "" + tz,
              Xz = "" + sz;
            if (!zz && Wz > Xz) {
              let zz = Wz;
              Wz = Xz, Xz = zz
            }
            let Oz = {
              v: Wz,
              w: Xz
            };
            return Fz && (Oz.name = Fz), Oz
          }(this._isDirected, Wz, Xz, Oz);
          return Wz = Nz.v, Xz = Nz.w, Object.freeze(Nz), this._edgeObjs[Kz] = Nz, Uz(this._preds[Xz], Wz), Uz(this._sucs[Wz], Xz), this._in[Xz][Kz] = Nz, this._out[Wz][Kz] = Nz, this._edgeCount++, this
        }
        edge(zz, tz, sz) {
          let Fz = 1 === arguments.length ? Nz(this._isDirected, zz) : uz(this._isDirected, zz, tz, sz);
          return this._edgeLabels[Fz]
        }
        edgeAsObj(zz, tz, sz) {
          let Fz = 1 === arguments.length ? this.edge(zz) : this.edge(zz, tz, sz);
          return "object" != typeof Fz || null === Fz ? {
            label: Fz
          } : Fz
        }
        hasEdge(zz, tz, sz) {
          return (1 === arguments.length ? Nz(this._isDirected, zz) : uz(this._isDirected, zz, tz, sz)) in this._edgeLabels
        }
        removeEdge(zz, tz, sz) {
          let Fz = 1 === arguments.length ? Nz(this._isDirected, zz) : uz(this._isDirected, zz, tz, sz),
            Wz = this._edgeObjs[Fz];
          if (Wz) {
            let zz = Wz.v,
              tz = Wz.w;
            delete this._edgeLabels[Fz], delete this._edgeObjs[Fz], Kz(this._preds[tz], zz), Kz(this._sucs[zz], tz), delete this._in[tz][Fz], delete this._out[zz][Fz], this._edgeCount--
          }
          return this
        }
        inEdges(zz, tz) {
          return this.isDirected() ? this.filterEdges(this._in[zz], zz, tz) : this.nodeEdges(zz, tz)
        }
        outEdges(zz, tz) {
          return this.isDirected() ? this.filterEdges(this._out[zz], zz, tz) : this.nodeEdges(zz, tz)
        }
        nodeEdges(zz, tz) {
          if (zz in this._nodes) return this.filterEdges({
            ...this._in[zz],
            ...this._out[zz]
          }, zz, tz)
        }
        _removeFromParentsChildList(zz) {
          delete this._children[this._parent[zz]][zz]
        }
        filterEdges(zz, tz, sz) {
          if (!zz) return;
          let Fz = Object.values(zz);
          return sz ? Fz.filter((zz => zz.v === tz && zz.w === sz || zz.v === sz && zz.w === tz)) : Fz
        }
      };

    function Uz(zz, tz) {
      zz[tz] ? zz[tz]++ : zz[tz] = 1
    }

    function Kz(zz, tz) {
      void 0 !== zz[tz] && !--zz[tz] && delete zz[tz]
    }

    function uz(zz, tz, sz, Fz) {
      let Wz = "" + tz,
        Xz = "" + sz;
      if (!zz && Wz > Xz) {
        let zz = Wz;
        Wz = Xz, Xz = zz
      }
      return Wz + "\x01" + Xz + "\x01" + (void 0 === Fz ? "\0" : Fz)
    }

    function Nz(zz, tz) {
      return uz(zz, tz.v, tz.w, tz.name)
    }

    function bz(zz) {
      let tz = {
          options: {
            directed: zz.isDirected(),
            multigraph: zz.isMultigraph(),
            compound: zz.isCompound()
          },
          nodes: wz(zz),
          edges: Dz(zz)
        },
        sz = zz.graph();
      return void 0 !== sz && (tz.value = structuredClone(sz)), tz
    }

    function wz(zz) {
      return zz.nodes().map((tz => {
        let sz = zz.node(tz),
          Fz = zz.parent(tz),
          Wz = {
            v: tz
          };
        return void 0 !== sz && (Wz.value = sz), void 0 !== Fz && (Wz.parent = Fz), Wz
      }))
    }

    function Dz(zz) {
      return zz.edges().map((tz => {
        let sz = zz.edge(tz),
          Fz = {
            v: tz.v,
            w: tz.w
          };
        return void 0 !== tz.name && (Fz.name = tz.name), void 0 !== sz && (Fz.value = sz), Fz
      }))
    }

    function gz(zz) {
      let tz = new vz(zz.options);
      return void 0 !== zz.value && tz.setGraph(zz.value), zz.nodes.forEach((zz => {
        tz.setNode(zz.v, zz.value), zz.parent && tz.setParent(zz.v, zz.parent)
      })), zz.edges.forEach((zz => {
        tz.setEdge({
          v: zz.v,
          w: zz.w,
          name: zz.name
        }, zz.value)
      })), tz
    }
    oz({}, {
      read: () => gz,
      write: () => bz
    });
    var Hz = {};
    oz(Hz, {
      CycleException: () => Gz,
      bellmanFord: () => Pz,
      components: () => rz,
      dijkstra: () => mz,
      dijkstraAll: () => Jz,
      findCycles: () => Cz,
      floydWarshall: () => Zz,
      isAcyclic: () => cz,
      postorder: () => Mz,
      preorder: () => dz,
      prim: () => hz,
      shortestPaths: () => Qz,
      tarjan: () => Iz,
      topsort: () => Tz
    });
    var Bz = () => 1;

    function Pz(zz, tz, sz, Fz) {
      return function(zz, tz, sz, Fz) {
        let Wz, Xz = {},
          Oz = 0,
          oz = zz.nodes(),
          vz = function(zz) {
            let tz = Xz[zz.v],
              Fz = Xz[zz.w];
            if (!tz || !Fz) return;
            let Oz = sz(zz);
            tz.distance + Oz < Fz.distance && (Xz[zz.w] = {
              distance: tz.distance + Oz,
              predecessor: zz.v
            }, Wz = !0)
          },
          Uz = function() {
            oz.forEach((function(zz) {
              Fz(zz).forEach((function(tz) {
                let sz = tz.v === zz ? tz.v : tz.w,
                  Fz = sz === tz.v ? tz.w : tz.v;
                vz({
                  v: sz,
                  w: Fz
                })
              }))
            }))
          };
        oz.forEach((function(zz) {
          let sz = zz === tz ? 0 : Number.POSITIVE_INFINITY;
          Xz[zz] = {
            distance: sz,
            predecessor: ""
          }
        }));
        let Kz = oz.length;
        for (let uz = 1; uz < Kz && (Wz = !1, Oz++, Uz(), Wz); uz++);
        if (Oz === Kz - 1 && (Wz = !1, Uz(), Wz)) throw new Error("The graph contains a negative weight cycle");
        return Xz
      }(zz, String(tz), sz || Bz, Fz || function(tz) {
        var sz;
        return null != (sz = zz.outEdges(tz)) ? sz : []
      })
    }

    function rz(zz) {
      let tz, sz = {},
        Fz = [];

      function Wz(Fz) {
        var Xz, Oz;
        Fz in sz || (sz[Fz] = !0, tz.push(Fz), null == (Xz = zz.successors(Fz)) || Xz.forEach(Wz), null == (Oz = zz.predecessors(Fz)) || Oz.forEach(Wz))
      }
      return zz.nodes().forEach((function(zz) {
        tz = [], Wz(zz), tz.length && Fz.push(tz)
      })), Fz
    }
    var Yz = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((zz => zz.key))
        }
        has(zz) {
          return zz in this._keyIndices
        }
        priority(zz) {
          let tz = this._keyIndices[zz];
          if (void 0 !== tz) return this._arr[tz].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(zz, tz) {
          let sz = this._keyIndices,
            Fz = String(zz);
          if (!(Fz in sz)) {
            let zz = this._arr,
              Wz = zz.length;
            return sz[Fz] = Wz, zz.push({
              key: Fz,
              priority: tz
            }), this._decrease(Wz), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let zz = this._arr.pop();
          return delete this._keyIndices[zz.key], this._heapify(0), zz.key
        }
        decrease(zz, tz) {
          let sz = this._keyIndices[zz];
          if (void 0 === sz) throw new Error(`Key not found: ${zz}`);
          let Fz = this._arr[sz].priority;
          if (tz > Fz) throw new Error(`New priority is greater than current priority. Key: ${zz} Old: ${Fz} New: ${tz}`);
          this._arr[sz].priority = tz, this._decrease(sz)
        }
        _heapify(zz) {
          let tz = this._arr,
            sz = 2 * zz,
            Fz = sz + 1,
            Wz = zz;
          sz < tz.length && (Wz = tz[sz].priority < tz[Wz].priority ? sz : Wz, Fz < tz.length && (Wz = tz[Fz].priority < tz[Wz].priority ? Fz : Wz), Wz !== zz && (this._swap(zz, Wz), this._heapify(Wz)))
        }
        _decrease(zz) {
          let tz, sz = this._arr,
            Fz = sz[zz].priority;
          for (; 0 !== zz && (tz = zz >> 1, !(sz[tz].priority < Fz));) this._swap(zz, tz), zz = tz
        }
        _swap(zz, tz) {
          let sz = this._arr,
            Fz = this._keyIndices,
            Wz = sz[zz],
            Xz = sz[tz];
          sz[zz] = Xz, sz[tz] = Wz, Fz[Xz.key] = zz, Fz[Wz.key] = tz
        }
      },
      xz = () => 1;

    function mz(zz, tz, sz, Fz) {
      return function(zz, tz, sz, Fz) {
        let Wz, Xz, Oz = {},
          oz = new Yz,
          vz = function(zz) {
            let tz = zz.v !== Wz ? zz.v : zz.w,
              Fz = Oz[tz];
            if (!Fz) return;
            let vz = sz(zz),
              Uz = Xz.distance + vz;
            if (vz < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + zz + " Weight: " + vz);
            Uz < Fz.distance && (Fz.distance = Uz, Fz.predecessor = Wz, oz.decrease(tz, Uz))
          };
        for (zz.nodes().forEach((function(zz) {
            let sz = zz === tz ? 0 : Number.POSITIVE_INFINITY;
            Oz[zz] = {
              distance: sz,
              predecessor: ""
            }, oz.add(zz, sz)
          })); oz.size() > 0;) {
          Wz = oz.removeMin();
          let zz = Oz[Wz];
          if (!zz || zz.distance === Number.POSITIVE_INFINITY) break;
          Xz = zz, Fz(Wz).forEach(vz)
        }
        return Oz
      }(zz, String(tz), sz || xz, Fz || function(tz) {
        var sz;
        return null != (sz = zz.outEdges(tz)) ? sz : []
      })
    }

    function Jz(zz, tz, sz) {
      return zz.nodes().reduce((function(Fz, Wz) {
        return Fz[Wz] = mz(zz, Wz, tz, sz), Fz
      }), {})
    }

    function Iz(zz) {
      let tz = 0,
        sz = [],
        Fz = {},
        Wz = [];

      function Xz(Oz) {
        var oz;
        let vz = Fz[Oz] = {
          onStack: !0,
          lowlink: tz,
          index: tz++
        };
        if (sz.push(Oz), null == (oz = zz.successors(Oz)) || oz.forEach((function(zz) {
            if (zz in Fz) {
              let tz = Fz[zz];
              null != tz && tz.onStack && (vz.lowlink = Math.min(vz.lowlink, tz.index))
            } else {
              Xz(zz);
              let tz = Fz[zz];
              tz && (vz.lowlink = Math.min(vz.lowlink, tz.lowlink))
            }
          })), vz.lowlink === vz.index) {
          let zz, tz = [];
          do {
            zz = sz.pop();
            let Wz = Fz[zz];
            Wz && (Wz.onStack = !1), tz.push(zz)
          } while (Oz !== zz);
          Wz.push(tz)
        }
      }
      return zz.nodes().forEach((function(zz) {
        zz in Fz || Xz(zz)
      })), Wz
    }

    function Cz(zz) {
      return Iz(zz).filter((function(tz) {
        var sz;
        let Fz = tz[0];
        return !!Fz && (tz.length > 1 || 1 === tz.length && (null != (sz = zz.outEdges(Fz, Fz)) ? sz : []).length > 0)
      }))
    }
    var ez = () => 1;

    function Zz(zz, tz, sz) {
      return function(zz, tz, sz) {
        let Fz = {},
          Wz = zz.nodes();
        return Wz.forEach((function(zz) {
          let Xz = {};
          Fz[zz] = Xz, Xz[zz] = {
            distance: 0,
            predecessor: ""
          }, Wz.forEach((function(tz) {
            zz !== tz && (Xz[tz] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), sz(zz).forEach((function(sz) {
            let Fz = sz.v === zz ? sz.w : sz.v,
              Wz = tz(sz);
            Xz[Fz] = {
              distance: Wz,
              predecessor: zz
            }
          }))
        })), Wz.forEach((function(zz) {
          let tz = Fz[zz];
          tz && Wz.forEach((function(sz) {
            let Xz = Fz[sz];
            Xz && Wz.forEach((function(sz) {
              let Fz = Xz[zz],
                Wz = tz[sz],
                Oz = Xz[sz];
              if (Fz && Wz && Oz) {
                let zz = Fz.distance + Wz.distance;
                zz < Oz.distance && (Oz.distance = zz, Oz.predecessor = Wz.predecessor)
              }
            }))
          }))
        })), Fz
      }(zz, tz || ez, sz || function(tz) {
        var sz;
        return null != (sz = zz.outEdges(tz)) ? sz : []
      })
    }
    var Gz = class extends Error {
      constructor(zz) {
        super(zz), this.name = "CycleException"
      }
    };

    function Tz(zz) {
      let tz = {},
        sz = {},
        Fz = [];
      if (zz.sinks().forEach((function Wz(Xz) {
          var Oz;
          if (Xz in sz) throw new Gz;
          Xz in tz || (sz[Xz] = !0, tz[Xz] = !0, null == (Oz = zz.predecessors(Xz)) || Oz.forEach(Wz), delete sz[Xz], Fz.push(Xz))
        })), Object.keys(tz).length !== zz.nodeCount()) throw new Gz;
      return Fz
    }

    function cz(zz) {
      try {
        Tz(zz)
      } catch (tz) {
        if (tz instanceof Gz) return !1;
        throw tz
      }
      return !0
    }

    function jz(zz, tz, sz, Fz, Wz) {
      Array.isArray(tz) || (tz = [tz]);
      let Xz = tz => {
          var sz;
          return null != (sz = zz.isDirected() ? zz.successors(tz) : zz.neighbors(tz)) ? sz : []
        },
        Oz = {};
      return tz.forEach((function(tz) {
        if (!zz.hasNode(tz)) throw new Error("Graph does not have node: " + tz);
        Wz = Az(zz, tz, "post" === sz, Oz, Xz, Fz, Wz)
      })), Wz
    }

    function Az(zz, tz, sz, Fz, Wz, Xz, Oz) {
      return tz in Fz || (Fz[tz] = !0, sz || (Oz = Xz(Oz, tz)), Wz(tz).forEach((function(tz) {
        Oz = Az(zz, tz, sz, Fz, Wz, Xz, Oz)
      })), sz && (Oz = Xz(Oz, tz))), Oz
    }

    function yz(zz, tz, sz) {
      return jz(zz, tz, sz, (function(zz, tz) {
        return zz.push(tz), zz
      }), [])
    }

    function Mz(zz, tz) {
      return yz(zz, tz, "post")
    }

    function dz(zz, tz) {
      return yz(zz, tz, "pre")
    }

    function hz(zz, tz) {
      var sz;
      let Fz, Wz = new vz,
        Xz = {},
        Oz = new Yz;

      function oz(zz) {
        let sz = zz.v === Fz ? zz.w : zz.v,
          Wz = Oz.priority(sz);
        if (void 0 !== Wz) {
          let oz = tz(zz);
          oz < Wz && (Xz[sz] = Fz, Oz.decrease(sz, oz))
        }
      }
      if (0 === zz.nodeCount()) return Wz;
      zz.nodes().forEach((function(zz) {
        Oz.add(zz, Number.POSITIVE_INFINITY), Wz.setNode(zz)
      }));
      let Uz = zz.nodes()[0];
      void 0 !== Uz && Oz.decrease(Uz, 0);
      let Kz = !1;
      for (; Oz.size() > 0;) {
        if (Fz = Oz.removeMin(), Fz in Xz) Wz.setEdge(Fz, Xz[Fz]);
        else {
          if (Kz) throw new Error("Input graph is not connected: " + zz);
          Kz = !0
        }
        null == (sz = zz.nodeEdges(Fz)) || sz.forEach(oz)
      }
      return Wz
    }

    function Qz(zz, tz, sz, Fz) {
      return function(zz, tz, sz, Fz) {
        if (void 0 === sz) return mz(zz, tz, sz, Fz);
        let Wz = !1,
          Xz = zz.nodes();
        for (let Oz = 0; Oz < Xz.length; Oz++) {
          let oz = Xz[Oz];
          if (void 0 === oz) continue;
          let vz = Fz(oz);
          for (let zz = 0; zz < vz.length; zz++) {
            let tz = vz[zz];
            if (!tz) continue;
            let Fz = tz.v === oz ? tz.v : tz.w;
            sz({
              v: Fz,
              w: Fz === tz.v ? tz.w : tz.v
            }) < 0 && (Wz = !0)
          }
          if (Wz) return Pz(zz, tz, sz, Fz)
        }
        return mz(zz, tz, sz, Fz)
      }(zz, tz, sz, null != Fz ? Fz : tz => {
        var sz;
        return null != (sz = zz.outEdges(tz)) ? sz : []
      })
    }
    var kz = vz;

    function iz(zz, tz, sz, Fz) {
      let Wz = Fz;
      for (; zz.hasNode(Wz);) Wz = Ez(Fz);
      return sz.dummy = tz, zz.setNode(Wz, sz), Wz
    }

    function Lz(zz) {
      let tz = new kz({
        multigraph: zz.isMultigraph()
      }).setGraph(zz.graph());
      return zz.nodes().forEach((sz => {
        zz.children(sz).length || tz.setNode(sz, zz.node(sz))
      })), zz.edges().forEach((sz => {
        tz.setEdge(sz, zz.edge(sz))
      })), tz
    }

    function lz(zz, tz) {
      let sz, Fz, Wz = zz.x,
        Xz = zz.y,
        Oz = tz.x - Wz,
        oz = tz.y - Xz,
        vz = zz.width / 2,
        Uz = zz.height / 2;
      if (!Oz && !oz) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(oz) * vz > Math.abs(Oz) * Uz ? (oz < 0 && (Uz = -Uz), sz = Uz * Oz / oz, Fz = Uz) : (Oz < 0 && (vz = -vz), sz = vz, Fz = vz * oz / Oz), {
        x: Wz + sz,
        y: Xz + Fz
      }
    }

    function nz(zz) {
      let tz = zt(Vz(zz) + 1).map((() => []));
      return zz.nodes().forEach((sz => {
        let Fz = zz.node(sz),
          Wz = Fz.rank;
        void 0 !== Wz && (tz[Wz] || (tz[Wz] = []), tz[Wz][Fz.order] = sz)
      })), tz
    }

    function az(zz, tz, sz, Fz) {
      let Wz = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Wz.rank = sz, Wz.order = Fz), iz(zz, "border", Wz, tz)
    }
    var qz = 65535;

    function Sz(zz, tz) {
      if (tz.length > qz) {
        let sz = function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz,
            sz = [];
          for (let Fz = 0; Fz < zz.length; Fz += tz) {
            let Wz = zz.slice(Fz, Fz + tz);
            sz.push(Wz)
          }
          return sz
        }(tz);
        return zz(...sz.map((tz => zz(...tz))))
      }
      return zz(...tz)
    }

    function Vz(zz) {
      let tz = zz.nodes().map((tz => {
        let sz = zz.node(tz).rank;
        return void 0 === sz ? Number.MIN_VALUE : sz
      }));
      return Sz(Math.max, tz)
    }

    function Rz(zz, tz) {
      let sz = Date.now();
      try {
        return tz()
      } finally {
        console.log(zz + " time: " + (Date.now() - sz) + "ms")
      }
    }

    function pz(zz, tz) {
      return tz()
    }
    var fz = 0;

    function Ez(zz) {
      return zz + "" + ++fz
    }

    function zt(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == tz && (tz = zz, zz = 0);
      let Fz = zz => zz < tz;
      sz < 0 && (Fz = zz => tz < zz);
      let Wz = [];
      for (let Xz = zz; Fz(Xz); Xz += sz) Wz.push(Xz);
      return Wz
    }

    function tt(zz, tz) {
      let sz = {};
      for (let Fz of tz) void 0 !== zz[Fz] && (sz[Fz] = zz[Fz]);
      return sz
    }

    function st(zz, tz) {
      let sz;
      return sz = "string" == typeof tz ? zz => zz[tz] : tz, Object.entries(zz).reduce(((zz, tz) => {
        let [Fz, Wz] = tz;
        return zz[Fz] = sz(Wz, Fz), zz
      }), {})
    }
    var Ft = "\0";

    function Wt(zz, tz, sz) {
      var Fz, Wz, Xz, Oz, oz, vz;
      if (!(zz && tz && sz && "edge" === tz.dummy && "edge" === sz.dummy && tz.edgeObj && sz.edgeObj && zz[tz.edgeObj.v] && zz[sz.edgeObj.v] && zz[tz.edgeObj.w] && zz[sz.edgeObj.w])) return 0;
      let Uz = !0;
      tz.edgeObj.w === sz.edgeObj.w && (Uz = !1);
      let Kz = Uz ? null != (Wz = null == (Fz = zz[tz.edgeObj.v]) ? void 0 : Fz.rank) ? Wz : NaN : null != (Oz = null == (Xz = zz[tz.edgeObj.w]) ? void 0 : Xz.rank) ? Oz : NaN,
        uz = Object.entries(zz).find((zz => {
          var sz, Fz;
          return (null == (sz = zz[1].edgeObj) ? void 0 : sz.v) === tz.edgeObj.v && (null == (Fz = zz[1].edgeObj) ? void 0 : Fz.w) === tz.edgeObj.w && zz[1].rank === Kz
        })),
        Nz = Object.entries(zz).find((zz => {
          var tz, Fz;
          return (null == (tz = zz[1].edgeObj) ? void 0 : tz.v) === sz.edgeObj.v && (null == (Fz = zz[1].edgeObj) ? void 0 : Fz.w) === sz.edgeObj.w && zz[1].rank === Kz
        }));
      if (!uz || !Nz) return 0;
      let bz = null != (oz = uz[1].order) ? oz : NaN,
        wz = null != (vz = Nz[1].order) ? vz : NaN;
      return isNaN(bz - wz) ? 0 : bz - wz
    }
    var Xt = "3.1.1";

    function Ot(zz) {
      zz._prev._next = zz._next, zz._next._prev = zz._prev, delete zz._next, delete zz._prev
    }

    function ot(zz, tz) {
      if ("_next" !== zz && "_prev" !== zz) return tz
    }
    var vt = class {
        constructor() {
          Wz(this, "_sentinel");
          let zz = {};
          zz._next = zz._prev = zz, this._sentinel = zz
        }
        dequeue() {
          let zz = this._sentinel,
            tz = zz._prev;
          if (tz !== zz) return Ot(tz), tz
        }
        enqueue(zz) {
          let tz = this._sentinel;
          zz._prev && zz._next && Ot(zz), zz._next = tz._next, tz._next._prev = zz, tz._next = zz, zz._prev = tz
        }
        toString() {
          let zz = [],
            tz = this._sentinel,
            sz = tz._prev;
          for (; sz !== tz;) zz.push(JSON.stringify(sz, ot)), sz = sz._prev;
          return "[" + zz.join(", ") + "]"
        }
      },
      Ut = () => 1;

    function Kt(zz, tz) {
      if (zz.nodeCount() <= 1) return [];
      let sz = function(zz, tz) {
        let sz = new kz,
          Fz = 0,
          Wz = 0;
        zz.nodes().forEach((zz => {
          sz.setNode(zz, {
            v: zz,
            in: 0,
            out: 0
          })
        })), zz.edges().forEach((zz => {
          let Xz = sz.edge(zz.v, zz.w) || 0,
            Oz = tz(zz),
            oz = Xz + Oz;
          sz.setEdge(zz.v, zz.w, oz);
          let vz = sz.node(zz.v),
            Uz = sz.node(zz.w);
          Wz = Math.max(Wz, vz.out += Oz), Fz = Math.max(Fz, Uz.in += Oz)
        }));
        let Xz = function(zz) {
            let tz = [];
            for (let sz = 0; sz < zz; sz++) tz.push(sz);
            return tz
          }(Wz + Fz + 3).map((() => new vt)),
          Oz = Fz + 1;
        return sz.nodes().forEach((zz => {
          Nt(Xz, Oz, sz.node(zz))
        })), {
          graph: sz,
          buckets: Xz,
          zeroIdx: Oz
        }
      }(zz, tz || Ut);
      return function(zz, tz, sz) {
        var Fz;
        let Wz, Xz = [],
          Oz = tz[tz.length - 1],
          oz = tz[0];
        for (; zz.nodeCount();) {
          for (; Wz = oz.dequeue();) ut(zz, tz, sz, Wz);
          for (; Wz = Oz.dequeue();) ut(zz, tz, sz, Wz);
          if (zz.nodeCount())
            for (let Oz = tz.length - 2; Oz > 0; --Oz)
              if (Wz = null == (Fz = tz[Oz]) ? void 0 : Fz.dequeue(), Wz) {
                Xz = Xz.concat(ut(zz, tz, sz, Wz, !0) || []);
                break
              }
        }
        return Xz
      }(sz.graph, sz.buckets, sz.zeroIdx).flatMap((tz => zz.outEdges(tz.v, tz.w) || []))
    }

    function ut(zz, tz, sz, Fz, Wz) {
      let Xz = [],
        Oz = Wz ? Xz : void 0;
      return (zz.inEdges(Fz.v) || []).forEach((Fz => {
        let Oz = zz.edge(Fz),
          oz = zz.node(Fz.v);
        Wz && Xz.push({
          v: Fz.v,
          w: Fz.w
        }), oz.out -= Oz, Nt(tz, sz, oz)
      })), (zz.outEdges(Fz.v) || []).forEach((Fz => {
        let Wz = zz.edge(Fz),
          Xz = Fz.w,
          Oz = zz.node(Xz);
        Oz.in -= Wz, Nt(tz, sz, Oz)
      })), zz.removeNode(Fz.v), Oz
    }

    function Nt(zz, tz, sz) {
      var Fz, Wz, Xz;
      sz.out ? sz.in ? null == (Xz = zz[sz.out - sz.in + tz]) || Xz.enqueue(sz) : null == (Wz = zz[zz.length - 1]) || Wz.enqueue(sz) : null == (Fz = zz[0]) || Fz.enqueue(sz)
    }

    function bt(zz, tz) {
      var sz;
      ("greedy" === zz.graph().acyclicer ? Kt(zz, (sz = zz, zz => sz.edge(zz).weight)) : function(zz, tz) {
        let sz = [],
          Fz = {},
          Wz = {};

        function Xz(tz) {
          Object.hasOwn(Wz, tz) || (Wz[tz] = !0, Fz[tz] = !0, zz.outEdges(tz).forEach((zz => {
            Object.hasOwn(Fz, zz.w) ? sz.push(zz) : Xz(zz.w)
          })), delete Fz[tz])
        }

        function Oz(Xz) {
          var oz;
          Object.hasOwn(Wz, Xz) || (Wz[Xz] = !0, Fz[Xz] = !0, null == (oz = zz.outEdges(Xz)) || oz.forEach((Wz => {
            var oz, vz;
            Object.hasOwn(Fz, Wz.w) || (null == (oz = tz.node(Xz)) ? void 0 : oz.rank) > (null == (vz = tz.node(Wz.w)) ? void 0 : vz.rank) && function(zz, tz, sz) {
              let Fz = new Set;

              function Wz(tz) {
                var Xz;
                if (zz.sources().includes(tz)) return !0;
                Fz.add(tz);
                for (let Oz of null != (Xz = zz.inEdges(tz)) ? Xz : [])
                  if ((Oz.v !== sz.v || Oz.w !== sz.w) && !Fz.has(Oz.v) && Wz(Oz.v)) return !0;
                return !1
              }
              return Wz(tz)
            }(zz, Wz.w, Wz) ? sz.push(Wz) : Oz(Wz.w)
          })), delete Fz[Xz])
        }
        let oz = Xz;
        return tz && "function" == typeof tz.node && (oz = Oz), zz.sources().forEach(oz), zz.nodes().forEach(oz), sz
      }(zz, null != tz ? tz : null)).forEach((tz => {
        let sz = zz.edge(tz);
        zz.removeEdge(tz), sz.forwardName = tz.name, sz.reversed = !0, zz.setEdge(tz.w, tz.v, sz, Ez("rev"))
      }))
    }

    function wt(zz) {
      zz.graph().dummyChains = [], zz.edges().forEach((tz => function(zz, tz) {
        let sz, Fz, Wz, Xz = tz.v,
          Oz = zz.node(Xz).rank,
          oz = tz.w,
          vz = zz.node(oz).rank,
          Uz = tz.name,
          Kz = zz.edge(tz),
          uz = Kz.labelRank;
        if (vz === Oz + 1) return;
        for (zz.removeEdge(tz), Wz = 0, ++Oz; Oz < vz; ++Wz, ++Oz) Kz.points = [], Fz = {
          width: 0,
          height: 0,
          edgeLabel: Kz,
          edgeObj: tz,
          rank: Oz
        }, sz = iz(zz, "edge", Fz, "_d"), Oz === uz && (Fz.width = Kz.width, Fz.height = Kz.height, Fz.dummy = "edge-label", Fz.labelpos = Kz.labelpos), zz.setEdge(Xz, sz, {
          weight: Kz.weight
        }, Uz), 0 === Wz && zz.graph().dummyChains.push(sz), Xz = sz;
        zz.setEdge(Xz, oz, {
          weight: Kz.weight
        }, Uz)
      }(zz, tz)))
    }

    function Dt(zz) {
      let tz = {};
      zz.sources().forEach((function sz(Fz) {
        let Wz = zz.node(Fz);
        if (Object.hasOwn(tz, Fz)) return Wz.rank;
        tz[Fz] = !0;
        let Xz = zz.outEdges(Fz),
          Oz = Xz ? Xz.map((tz => null == tz ? Number.POSITIVE_INFINITY : sz(tz.w) - zz.edge(tz).minlen)) : [],
          oz = Sz(Math.min, Oz);
        return oz === Number.POSITIVE_INFINITY && (oz = 0), Wz.rank = oz
      }))
    }

    function gt(zz, tz) {
      return zz.node(tz.w).rank - zz.node(tz.v).rank - zz.edge(tz).minlen
    }
    var Ht = function(zz) {
      let tz = new kz({
          directed: !1
        }),
        sz = zz.nodes();
      if (0 === sz.length) throw new Error("Graph must have at least one node");
      let Fz, Wz, Xz = sz[0],
        Oz = zz.nodeCount();
      for (tz.setNode(Xz, {}); Bt(tz, zz) < Oz && (Fz = Pt(tz, zz), Fz);) Wz = tz.hasNode(Fz.v) ? gt(zz, Fz) : -gt(zz, Fz), rt(tz, zz, Wz);
      return tz
    };

    function Bt(zz, tz) {
      return zz.nodes().forEach((function sz(Fz) {
        let Wz = tz.nodeEdges(Fz);
        Wz && Wz.forEach((Wz => {
          let Xz = Wz.v,
            Oz = Fz === Xz ? Wz.w : Xz;
          !zz.hasNode(Oz) && !gt(tz, Wz) && (zz.setNode(Oz, {}), zz.setEdge(Fz, Oz, {}), sz(Oz))
        }))
      })), zz.nodeCount()
    }

    function Pt(zz, tz) {
      return tz.edges().reduce(((sz, Fz) => {
        let Wz = Number.POSITIVE_INFINITY;
        return zz.hasNode(Fz.v) !== zz.hasNode(Fz.w) && (Wz = gt(tz, Fz)), Wz < sz[0] ? [Wz, Fz] : sz
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function rt(zz, tz, sz) {
      zz.nodes().forEach((zz => tz.node(zz).rank += sz))
    }
    var {
      preorder: Yt,
      postorder: xt
    } = Hz, mt = Jt;

    function Jt(zz) {
      zz = function(zz) {
        let tz = (new kz).setGraph(zz.graph());
        return zz.nodes().forEach((sz => tz.setNode(sz, zz.node(sz)))), zz.edges().forEach((sz => {
          let Fz = tz.edge(sz.v, sz.w) || {
              weight: 0,
              minlen: 1
            },
            Wz = zz.edge(sz);
          tz.setEdge(sz.v, sz.w, {
            weight: Fz.weight + Wz.weight,
            minlen: Math.max(Fz.minlen, Wz.minlen)
          })
        })), tz
      }(zz), Dt(zz);
      let tz, sz, Fz = Ht(zz);
      for (et(Fz), It(Fz, zz); tz = Gt(Fz);) sz = Tt(Fz, zz, tz), ct(Fz, zz, tz, sz)
    }

    function It(zz, tz) {
      let sz = xt(zz, zz.nodes());
      sz = sz.slice(0, sz.length - 1), sz.forEach((sz => function(zz, tz, sz) {
        let Fz = zz.node(sz).parent,
          Wz = zz.edge(sz, Fz);
        Wz.cutvalue = Ct(zz, tz, sz)
      }(zz, tz, sz)))
    }

    function Ct(zz, tz, sz) {
      let Fz = zz.node(sz).parent,
        Wz = !0,
        Xz = tz.edge(sz, Fz),
        Oz = 0;
      Xz || (Wz = !1, Xz = tz.edge(Fz, sz)), Oz = Xz.weight;
      let oz = tz.nodeEdges(sz);
      return oz && oz.forEach((Xz => {
        let oz = Xz.v === sz,
          vz = oz ? Xz.w : Xz.v;
        if (vz !== Fz) {
          let Fz = oz === Wz,
            Uz = tz.edge(Xz).weight;
          if (Oz += Fz ? Uz : -Uz, function(zz, tz, sz) {
              return zz.hasEdge(tz, sz)
            }(zz, sz, vz)) {
            let tz = zz.edge(sz, vz).cutvalue;
            Oz += Fz ? -tz : tz
          }
        }
      })), Oz
    }

    function et(zz, tz) {
      arguments.length < 2 && (tz = zz.nodes()[0]), Zt(zz, {}, 1, tz)
    }

    function Zt(zz, tz, sz, Fz, Wz) {
      let Xz = sz,
        Oz = zz.node(Fz);
      tz[Fz] = !0;
      let oz = zz.neighbors(Fz);
      return oz && oz.forEach((Wz => {
        Object.hasOwn(tz, Wz) || (sz = Zt(zz, tz, sz, Wz, Fz))
      })), Oz.low = Xz, Oz.lim = sz++, Wz ? Oz.parent = Wz : delete Oz.parent, sz
    }

    function Gt(zz) {
      return zz.edges().find((tz => zz.edge(tz).cutvalue < 0))
    }

    function Tt(zz, tz, sz) {
      let Fz = sz.v,
        Wz = sz.w;
      tz.hasEdge(Fz, Wz) || (Fz = sz.w, Wz = sz.v);
      let Xz = zz.node(Fz),
        Oz = zz.node(Wz),
        oz = Xz,
        vz = !1;
      return Xz.lim > Oz.lim && (oz = Oz, vz = !0), tz.edges().filter((tz => vz === jt(zz, zz.node(tz.v), oz) && vz !== jt(zz, zz.node(tz.w), oz))).reduce(((zz, sz) => gt(tz, sz) < gt(tz, zz) ? sz : zz))
    }

    function ct(zz, tz, sz, Fz) {
      let Wz = sz.v,
        Xz = sz.w;
      zz.removeEdge(Wz, Xz), zz.setEdge(Fz.v, Fz.w, {}), et(zz), It(zz, tz),
        function(zz, tz) {
          let sz = zz.nodes().find((tz => !zz.node(tz).parent));
          if (!sz) return;
          let Fz = Yt(zz, [sz]);
          Fz = Fz.slice(1), Fz.forEach((sz => {
            let Fz = zz.node(sz).parent,
              Wz = tz.edge(sz, Fz),
              Xz = !1;
            Wz || (Wz = tz.edge(Fz, sz), Xz = !0), tz.node(sz).rank = tz.node(Fz).rank + (Xz ? Wz.minlen : -Wz.minlen)
          }))
        }(zz, tz)
    }

    function jt(zz, tz, sz) {
      return sz.low <= tz.lim && tz.lim <= sz.lim
    }
    Jt.initLowLimValues = et, Jt.initCutValues = It, Jt.calcCutValue = Ct, Jt.leaveEdge = Gt, Jt.enterEdge = Tt, Jt.exchangeEdges = ct;
    var At = function(zz) {
      let tz = zz.graph().ranker;
      if ("function" == typeof tz) return tz(zz);
      switch (tz) {
        case "network-simplex":
        default:
          Mt(zz);
          break;
        case "tight-tree":
          ! function(zz) {
            Dt(zz), Ht(zz)
          }(zz);
          break;
        case "longest-path":
          yt(zz);
        case "none":
      }
    };
    var yt = Dt;

    function Mt(zz) {
      mt(zz)
    }
    var dt = function(zz) {
      let tz = function(zz) {
          let tz = {},
            sz = 0;

          function Fz(Wz) {
            let Xz = sz;
            zz.children(Wz).forEach(Fz), tz[Wz] = {
              low: Xz,
              lim: sz++
            }
          }
          return zz.children(Ft).forEach(Fz), tz
        }(zz),
        sz = zz.graph();
      if (!Array.isArray(sz.dummyChains)) return;
      sz.dummyChains.forEach((sz => {
        let Fz = zz.node(sz),
          Wz = Fz.edgeObj,
          Xz = function(zz, tz, sz, Fz) {
            let Wz, Xz = [],
              Oz = [],
              oz = Math.min(tz[sz].low, tz[Fz].low),
              vz = Math.max(tz[sz].lim, tz[Fz].lim);
            Wz = sz;
            do {
              Wz = zz.parent(Wz), Xz.push(Wz)
            } while (Wz && (tz[Wz].low > oz || vz > tz[Wz].lim));
            let Uz = Wz,
              Kz = Fz;
            for (;
              (Kz = zz.parent(Kz)) !== Uz;) Oz.push(Kz);
            return {
              path: Xz.concat(Oz.reverse()),
              lca: Uz
            }
          }(zz, tz, Wz.v, Wz.w),
          Oz = Xz.path,
          oz = Xz.lca,
          vz = 0,
          Uz = Oz[vz],
          Kz = !0;
        for (; sz !== Wz.w;) {
          if (Fz = zz.node(sz), Kz) {
            for (;
              (Uz = Oz[vz]) !== oz && zz.node(Uz).maxRank < Fz.rank;) vz++;
            Uz === oz && (Kz = !1)
          }
          if (!Kz) {
            for (; vz < Oz.length - 1 && zz.node(Oz[vz + 1]).minRank <= Fz.rank;) vz++;
            Uz = Oz[vz]
          }
          void 0 !== Uz && zz.setParent(sz, Uz), sz = zz.successors(sz)[0]
        }
      }))
    };

    function ht(zz) {
      let tz = iz(zz, "root", {}, "_root"),
        sz = function(zz) {
          let tz = {};

          function sz(Fz, Wz) {
            let Xz = zz.children(Fz);
            Xz && Xz.length && Xz.forEach((zz => sz(zz, Wz + 1))), tz[Fz] = Wz
          }
          return zz.children(Ft).forEach((zz => sz(zz, 1))), tz
        }(zz),
        Fz = Object.values(sz),
        Wz = Sz(Math.max, Fz) - 1,
        Xz = 2 * Wz + 1;
      zz.graph().nestingRoot = tz, zz.edges().forEach((tz => zz.edge(tz).minlen *= Xz));
      let Oz = function(zz) {
        return zz.edges().reduce(((tz, sz) => tz + zz.edge(sz).weight), 0)
      }(zz) + 1;
      zz.children(Ft).forEach((Fz => {
        Qt(zz, tz, Xz, Oz, Wz, sz, Fz)
      })), zz.graph().nodeRankFactor = Xz
    }

    function Qt(zz, tz, sz, Fz, Wz, Xz, Oz) {
      var oz;
      let vz = zz.children(Oz);
      if (!vz.length) return void(Oz !== tz && zz.setEdge(tz, Oz, {
        weight: 0,
        minlen: sz
      }));
      let Uz = az(zz, "_bt"),
        Kz = az(zz, "_bb"),
        uz = zz.node(Oz);
      zz.setParent(Uz, Oz), uz.borderTop = Uz, zz.setParent(Kz, Oz), uz.borderBottom = Kz, vz.forEach((oz => {
        var vz;
        Qt(zz, tz, sz, Fz, Wz, Xz, oz);
        let uz = zz.node(oz),
          Nz = uz.borderTop ? uz.borderTop : oz,
          bz = uz.borderBottom ? uz.borderBottom : oz,
          wz = uz.borderTop ? Fz : 2 * Fz,
          Dz = Nz !== bz ? 1 : Wz - (null != (vz = Xz[Oz]) ? vz : 0) + 1;
        zz.setEdge(Uz, Nz, {
          weight: wz,
          minlen: Dz,
          nestingEdge: !0
        }), zz.setEdge(bz, Kz, {
          weight: wz,
          minlen: Dz,
          nestingEdge: !0
        })
      })), zz.parent(Oz) || zz.setEdge(tz, Uz, {
        weight: 0,
        minlen: Wz + (null != (oz = Xz[Oz]) ? oz : 0)
      })
    }
    var kt = function(zz) {
      zz.children(Ft).forEach((function tz(sz) {
        let Fz = zz.children(sz),
          Wz = zz.node(sz);
        if (Fz.length && Fz.forEach(tz), Wz && Object.hasOwn(Wz, "minRank")) {
          Wz.borderLeft = [], Wz.borderRight = [];
          for (let tz = Wz.minRank, Fz = Wz.maxRank + 1; tz < Fz; ++tz) it(zz, "borderLeft", "_bl", sz, Wz, tz), it(zz, "borderRight", "_br", sz, Wz, tz)
        }
      }))
    };

    function it(zz, tz, sz, Fz, Wz, Xz) {
      let Oz = {
          width: 0,
          height: 0,
          rank: Xz,
          borderType: tz
        },
        oz = Wz[tz][Xz - 1],
        vz = iz(zz, "border", Oz, sz);
      Wz[tz][Xz] = vz, zz.setParent(vz, Fz), oz && zz.setEdge(oz, vz, {
        weight: 1
      })
    }

    function Lt(zz) {
      var tz;
      let sz = null == (tz = zz.graph().rankdir) ? void 0 : tz.toLowerCase();
      ("bt" === sz || "rl" === sz) && function(zz) {
        zz.nodes().forEach((tz => qt(zz.node(tz)))), zz.edges().forEach((tz => {
          var sz;
          let Fz = zz.edge(tz);
          null == (sz = Fz.points) || sz.forEach(qt), Object.hasOwn(Fz, "y") && qt(Fz)
        }))
      }(zz), ("lr" === sz || "rl" === sz) && (function(zz) {
        zz.nodes().forEach((tz => St(zz.node(tz)))), zz.edges().forEach((tz => {
          var sz;
          let Fz = zz.edge(tz);
          null == (sz = Fz.points) || sz.forEach(St), Object.hasOwn(Fz, "x") && St(Fz)
        }))
      }(zz), lt(zz))
    }

    function lt(zz) {
      zz.nodes().forEach((tz => nt(zz.node(tz)))), zz.edges().forEach((tz => nt(zz.edge(tz))))
    }

    function nt(zz) {
      let tz = zz.width;
      zz.width = zz.height, zz.height = tz
    }

    function qt(zz) {
      zz.y = -zz.y
    }

    function St(zz) {
      let tz = zz.x;
      zz.x = zz.y, zz.y = tz
    }

    function Vt(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        sz = {},
        Fz = zz.nodes().filter((tz => !zz.children(tz).length)),
        Wz = Fz.map((tz => zz.node(tz).rank)),
        Xz = zt(Sz(Math.max, Wz) + 1).map((() => []));
      return Fz.sort(((tz, sz) => zz.node(tz).rank - zz.node(sz).rank)).forEach((function Fz(Wz) {
        if (sz[Wz]) return;
        sz[Wz] = !0;
        let Oz = zz.node(Wz);
        Xz[Oz.rank].push(Wz);
        let oz = zz.successors(Wz);
        oz && [...oz].sort(((sz, Fz) => function(sz, Fz) {
          let Wz = zz.node(sz),
            Xz = zz.node(Fz);
          return Wt(tz, Wz, Xz)
        }(sz, Fz))).forEach(Fz)
      })), Xz
    }

    function Rt(zz, tz) {
      let sz = 0;
      for (let Fz = 1; Fz < tz.length; ++Fz) sz += pt(zz, tz[Fz - 1], tz[Fz]);
      return sz
    }

    function pt(zz, tz, sz) {
      let Fz = function(zz, tz) {
          return zz.reduce(((zz, sz, Fz) => (zz[sz] = tz[Fz], zz)), {})
        }(sz, sz.map(((zz, tz) => tz))),
        Wz = tz.flatMap((tz => {
          let sz = zz.outEdges(tz);
          return sz ? sz.map((tz => ({
            pos: Fz[tz.w],
            weight: zz.edge(tz).weight
          }))).sort(((zz, tz) => zz.pos - tz.pos)) : []
        })),
        Xz = 1;
      for (; Xz < sz.length;) Xz <<= 1;
      let Oz = 2 * Xz - 1;
      Xz -= 1;
      let oz = new Array(Oz).fill(0),
        vz = 0;
      return Wz.forEach((zz => {
        let tz = zz.pos + Xz;
        oz[tz] += zz.weight;
        let sz = 0;
        for (; tz > 0;) tz % 2 && (sz += oz[tz + 1]), tz = tz - 1 >> 1, oz[tz] += zz.weight;
        vz += zz.weight * sz
      })), vz
    }

    function ft(zz, tz) {
      let sz = {};
      return zz.forEach(((zz, tz) => {
          let Fz = {
            indegree: 0,
            in: [],
            out: [],
            vs: [zz.v],
            i: tz
          };
          void 0 !== zz.barycenter && (Fz.barycenter = zz.barycenter, Fz.weight = zz.weight), sz[zz.v] = Fz
        })), tz.edges().forEach((zz => {
          let tz = sz[zz.v],
            Fz = sz[zz.w];
          void 0 !== tz && void 0 !== Fz && (Fz.indegree++, tz.out.push(Fz))
        })),
        function(zz) {
          let tz = [];

          function sz(zz) {
            return tz => {
              tz.merged || (void 0 === tz.barycenter || void 0 === zz.barycenter || tz.barycenter >= zz.barycenter) && function(zz, tz) {
                let sz = 0,
                  Fz = 0;
                zz.weight && (sz += zz.barycenter * zz.weight, Fz += zz.weight), tz.weight && (sz += tz.barycenter * tz.weight, Fz += tz.weight), zz.vs = tz.vs.concat(zz.vs), zz.barycenter = sz / Fz, zz.weight = Fz, zz.i = Math.min(tz.i, zz.i), tz.merged = !0
              }(zz, tz)
            }
          }

          function Fz(tz) {
            return sz => {
              sz.in.push(tz), 0 === --sz.indegree && zz.push(sz)
            }
          }
          for (; zz.length;) {
            let Wz = zz.pop();
            tz.push(Wz), Wz.in.reverse().forEach(sz(Wz)), Wz.out.forEach(Fz(Wz))
          }
          return tz.filter((zz => !zz.merged)).map((zz => tt(zz, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(sz).filter((zz => !zz.indegree)))
    }

    function Et(zz, tz, sz, Fz, Wz) {
      let Xz = {},
        Oz = null,
        oz = null,
        vz = Wz;
      "boolean" == typeof tz ? (vz = tz, Xz = {}) : tz && (Xz = tz, Oz = null != sz ? sz : null, oz = null != Fz ? Fz : null);
      let Uz = function(zz, tz) {
          let sz = {
            lhs: [],
            rhs: []
          };
          return zz.forEach((zz => {
            tz(zz) ? sz.lhs.push(zz) : sz.rhs.push(zz)
          })), sz
        }(zz, (zz => Object.hasOwn(zz, "barycenter"))),
        Kz = Uz.lhs,
        uz = Uz.rhs.sort(((zz, tz) => tz.i - zz.i)),
        Nz = [],
        bz = 0,
        wz = 0,
        Dz = 0;
      Kz.sort(function(zz, tz, sz) {
        return (Fz, Wz) => {
          if (Fz.barycenter < Wz.barycenter) return -1;
          if (Fz.barycenter > Wz.barycenter) return 1;
          if (zz && ("string" == typeof Fz.vs[0] || "string" == typeof Wz.vs[0])) {
            let sz = zz.node(Fz.vs[0]),
              Xz = zz.node(Wz.vs[0]),
              Oz = Wt(tz, sz, Xz);
            if (0 !== Oz) return Oz
          }
          return sz ? Wz.i - Fz.i : Fz.i - Wz.i
        }
      }(oz, Oz, !!vz));
      for (let [Hz, Bz] of Object.entries(Xz)) {
        let zz = Kz.findIndex((zz => zz.vs[0] === Hz));
        Kz.splice(zz + 1, 0, Bz)
      }
      Dz = zs(Nz, uz, Dz), Kz.forEach((zz => {
        Dz += zz.vs.length, Nz.push(zz.vs), bz += zz.barycenter * zz.weight, wz += zz.weight, Dz = zs(Nz, uz, Dz)
      }));
      let gz = {
        vs: Nz.flat(1)
      };
      return wz && (gz.barycenter = bz / wz, gz.weight = wz), gz
    }

    function zs(zz, tz, sz) {
      let Fz;
      for (; tz.length && (Fz = tz[tz.length - 1]).i <= sz;) tz.pop(), zz.push(Fz.vs), sz++;
      return sz
    }

    function ts(zz, tz, sz, Fz, Wz) {
      var Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz;
      let gz = null,
        Hz = Wz;
      "boolean" == typeof Fz ? (Hz = Fz, gz = null) : void 0 !== Fz && (gz = Fz);
      let Bz = zz.children(tz),
        Pz = zz.node(tz),
        rz = Pz ? Pz.borderLeft : void 0,
        Yz = Pz ? Pz.borderRight : void 0,
        xz = {};
      rz && (Bz = Bz.filter((zz => zz !== rz && zz !== Yz)));
      let mz = function(zz) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((tz => {
          let sz = zz.inEdges(tz);
          if (!sz || !sz.length) return {
            v: tz
          };
          {
            let Fz = sz.reduce(((tz, sz) => {
              let Fz = zz.edge(sz),
                Wz = zz.node(sz.v);
              return {
                sum: tz.sum + Fz.weight * Wz.order,
                weight: tz.weight + Fz.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: tz,
              barycenter: Fz.sum / Fz.weight,
              weight: Fz.weight
            }
          }
        }))
      }(zz, Bz);
      mz.forEach((tz => {
        if (zz.children(tz.v).length) {
          let {
            result: Fz
          } = ts(zz, tz.v, sz, gz, Hz);
          xz[tz.v] = Fz, Object.hasOwn(Fz, "barycenter") && function(zz, tz) {
            void 0 !== zz.barycenter ? (zz.barycenter = (zz.barycenter * zz.weight + tz.barycenter * tz.weight) / (zz.weight + tz.weight), zz.weight += tz.weight) : (zz.barycenter = tz.barycenter, zz.weight = tz.weight)
          }(tz, Fz)
        }
      }));
      let Jz = ft(mz, sz);
      ! function(zz, tz) {
        zz.forEach((zz => {
          zz.vs = zz.vs.flatMap((zz => tz[zz] ? tz[zz].vs : zz))
        }))
      }(Jz, xz);
      let Iz = {},
        Cz = !1;
      for (let Zz = 0; Zz < Jz.length; Zz++)
        for (let tz = Zz + 1; tz < Jz.length; tz++)
          if (Jz[Zz] && Jz[tz] && null != (Xz = Jz[Zz]) && Xz.barycenter && null != (Oz = Jz[tz]) && Oz.barycenter && (null == (oz = Jz[Zz]) ? void 0 : oz.barycenter) === Jz[tz].barycenter) {
            let sz = null != (Uz = null == (vz = Jz[Zz]) ? void 0 : vz.vs[0]) ? Uz : "",
              Fz = null != (uz = null == (Kz = Jz[tz]) ? void 0 : Kz.vs[0]) ? uz : "",
              Wz = zz.node(sz),
              Xz = zz.node(Fz);
            if ("edge" === Wz.dummy && "edge" === Xz.dummy && (null == (Nz = Wz.edgeObj) ? void 0 : Nz.v) === (null == (bz = Xz.edgeObj) ? void 0 : bz.v) && (null == (wz = Wz.edgeObj) ? void 0 : wz.w) === (null == (Dz = Xz.edgeObj) ? void 0 : Dz.w)) {
              if (Wz.edgeLabel.reversed) {
                Iz[Fz] = Jz[Zz], Jz.splice(Zz, 1), Zz--;
                break
              }
              Iz[sz] = Jz[tz], Jz.splice(tz, 1), tz--
            } else Cz = !0
          } let ez = Et(Jz, Iz, gz, zz, Hz);
      if (rz && Yz) {
        ez.vs = [rz, ez.vs, Yz].flat(1);
        let tz = zz.predecessors(rz);
        if (tz && tz.length) {
          let sz = zz.node(tz[0]),
            Fz = zz.predecessors(Yz),
            Wz = zz.node(Fz[0]);
          Object.hasOwn(ez, "barycenter") || (ez.barycenter = 0, ez.weight = 0), ez.barycenter = (ez.barycenter * ez.weight + sz.order + Wz.order) / (ez.weight + 2), ez.weight += 2
        }
      }
      return Object.defineProperty(ez, "result", {
        value: ez,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(ez, "usedBias", {
        value: Cz,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), ez
    }

    function ss(zz, tz, sz, Fz) {
      Fz || (Fz = zz.nodes());
      let Wz = function(zz) {
          let tz;
          for (; zz.hasNode(tz = Ez("_root")););
          return tz
        }(zz),
        Xz = new kz({
          compound: !0
        }).setGraph({
          root: Wz
        }).setDefaultNodeLabel((tz => zz.node(tz)));
      return Fz.forEach((Fz => {
        let Oz = zz.node(Fz),
          oz = zz.parent(Fz);
        if (Oz.rank === tz || Oz.minRank <= tz && tz <= Oz.maxRank) {
          Xz.setNode(Fz), Xz.setParent(Fz, oz || Wz);
          let vz = zz[sz](Fz);
          vz && vz.forEach((tz => {
            let sz = tz.v === Fz ? tz.w : tz.v,
              Wz = Xz.edge(sz, Fz),
              Oz = void 0 !== Wz ? Wz.weight : 0;
            Xz.setEdge(sz, Fz, {
              weight: zz.edge(tz).weight + Oz
            })
          })), Object.hasOwn(Oz, "minRank") && Xz.setNode(Fz, {
            borderLeft: Oz.borderLeft[tz],
            borderRight: Oz.borderRight[tz]
          })
        }
      })), Xz
    }

    function Fs(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof tz.customOrder) return void tz.customOrder(zz, Fs);
      let Fz = Vz(zz),
        Wz = Ws(zz, zt(1, Fz + 1), "inEdges"),
        Xz = Ws(zz, zt(Fz - 1, -1, -1), "outEdges"),
        Oz = Vt(zz, sz);
      if (Os(zz, Oz), tz.disableOptimalOrderHeuristic) return;
      let oz, vz = Number.POSITIVE_INFINITY,
        Uz = tz.constraints || [];
      for (let Kz = 0, uz = 0; uz < 4; ++Kz, ++uz) {
        Xs(Kz % 2 ? Wz : Xz, Kz % 4 >= 2, Uz, sz), Oz = nz(zz);
        let tz = Rt(zz, Oz);
        tz < vz ? (uz = 0, oz = Object.assign({}, Oz), vz = tz) : tz === vz && (oz = structuredClone(Oz))
      }
      Os(zz, oz)
    }

    function Ws(zz, tz, sz) {
      let Fz = new Map,
        Wz = (zz, tz) => {
          Fz.has(zz) || Fz.set(zz, []), Fz.get(zz).push(tz)
        };
      for (let Xz of zz.nodes()) {
        let tz = zz.node(Xz);
        if ("number" == typeof tz.rank && Wz(tz.rank, Xz), "number" == typeof tz.minRank && "number" == typeof tz.maxRank)
          for (let zz = tz.minRank; zz <= tz.maxRank; zz++) zz !== tz.rank && Wz(zz, Xz)
      }
      return tz.map((function(tz) {
        return ss(zz, tz, sz, Fz.get(tz) || [])
      }))
    }

    function Xs(zz, tz, sz, Fz) {
      let Wz = !0,
        Xz = new kz;
      zz.forEach((function(zz) {
        sz.forEach((zz => Xz.setEdge(zz.left, zz.right)));
        let Oz = zz.graph().root,
          {
            result: oz,
            usedBias: vz
          } = ts(zz, Oz, Xz, Fz, Wz);
        tz && vz && (Wz = !Wz), oz.vs.forEach(((tz, sz) => zz.node(tz).order = sz)),
          function(zz, tz, sz) {
            let Fz, Wz = {};
            sz.forEach((sz => {
              let Xz, Oz, oz = zz.parent(sz);
              for (; oz;) {
                if (Xz = zz.parent(oz), Xz ? (Oz = Wz[Xz], Wz[Xz] = oz) : (Oz = Fz, Fz = oz), Oz && Oz !== oz) return void tz.setEdge(Oz, oz);
                oz = Xz
              }
            }))
          }(zz, Xz, oz.vs)
      }))
    }

    function Os(zz, tz) {
      Object.values(tz).forEach((tz => tz.forEach(((tz, sz) => zz.node(tz).order = sz))))
    }

    function os(zz, tz, sz) {
      if (tz > sz) {
        let zz = tz;
        tz = sz, sz = zz
      }
      let Fz = zz[tz];
      Fz || (zz[tz] = Fz = {}), Fz[sz] = !0
    }

    function vs(zz, tz, sz) {
      if (tz > sz) {
        let zz = tz;
        tz = sz, sz = zz
      }
      let Fz = zz[tz];
      return void 0 !== Fz && Object.hasOwn(Fz, sz)
    }

    function Us(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Xz = {},
        Oz = function(zz, tz, sz, Fz) {
          let Wz = new kz,
            Xz = zz.graph(),
            Oz = function(zz, tz, sz) {
              return (Fz, Wz, Xz) => {
                let Oz, oz = Fz.node(Wz),
                  vz = Fz.node(Xz),
                  Uz = 0;
                if (Uz += oz.width / 2, Object.hasOwn(oz, "labelpos")) switch (oz.labelpos.toLowerCase()) {
                  case "l":
                    Oz = -oz.width / 2;
                    break;
                  case "r":
                    Oz = oz.width / 2
                }
                if (Oz && (Uz += sz ? Oz : -Oz), Oz = void 0, Uz += (oz.dummy ? tz : zz) / 2, Uz += (vz.dummy ? tz : zz) / 2, Uz += vz.width / 2, Object.hasOwn(vz, "labelpos")) switch (vz.labelpos.toLowerCase()) {
                  case "l":
                    Oz = vz.width / 2;
                    break;
                  case "r":
                    Oz = -vz.width / 2
                }
                return Oz && (Uz += sz ? Oz : -Oz), Uz
              }
            }(Xz.nodesep, Xz.edgesep, Fz);
          return tz.forEach((tz => {
            let Fz;
            tz.forEach((tz => {
              let Xz = sz[tz];
              if (void 0 !== Xz) {
                if (Wz.setNode(Xz), void 0 !== Fz) {
                  let oz = sz[Fz];
                  if (void 0 !== oz) {
                    let sz = Wz.edge(oz, Xz);
                    Wz.setEdge(oz, Xz, Math.max(Oz(zz, tz, Fz), sz || 0))
                  }
                }
                Fz = tz
              }
            }))
          })), Wz
        }(zz, tz, sz, Wz),
        oz = Wz ? "borderLeft" : "borderRight";

      function vz(zz, tz) {
        let sz = Oz.nodes().slice(),
          Fz = {},
          Wz = sz.pop();
        for (; Wz;) {
          if (Fz[Wz]) zz(Wz);
          else {
            Fz[Wz] = !0, sz.push(Wz);
            for (let zz of tz(Wz)) sz.push(zz)
          }
          Wz = sz.pop()
        }
      }
      return vz((function(zz) {
        let tz = Oz.inEdges(zz);
        Xz[zz] = tz ? tz.reduce(((zz, tz) => {
          var sz;
          let Fz = null != (sz = Xz[tz.v]) ? sz : 0,
            Wz = Oz.edge(tz);
          return Math.max(zz, Fz + (void 0 !== Wz ? Wz : 0))
        }), 0) : 0
      }), (function(zz) {
        return Oz.predecessors(zz) || []
      })), vz((function(tz) {
        let sz = Oz.outEdges(tz),
          Fz = Number.POSITIVE_INFINITY;
        sz && (Fz = sz.reduce(((zz, tz) => {
          let sz = Xz[tz.w],
            Fz = Oz.edge(tz);
          return Math.min(zz, (void 0 !== sz ? sz : 0) - (void 0 !== Fz ? Fz : 0))
        }), Number.POSITIVE_INFINITY));
        let Wz = zz.node(tz);
        Fz !== Number.POSITIVE_INFINITY && Wz.borderType !== oz && (Xz[tz] = Math.max(void 0 !== Xz[tz] ? Xz[tz] : 0, Fz))
      }), (function(zz) {
        return Oz.successors(zz) || []
      })), Object.keys(Fz).forEach((zz => {
        var tz;
        let Fz = sz[zz];
        void 0 !== Fz && (Xz[zz] = null != (tz = Xz[Fz]) ? tz : 0)
      })), Xz
    }

    function Ks(zz, tz) {
      let sz, Fz = nz(zz),
        Wz = Object.assign(function(zz, tz) {
          let sz = {};
          return tz.length && tz.reduce((function(tz, Fz) {
            let Wz = 0,
              Xz = 0,
              Oz = tz.length,
              oz = Fz[Fz.length - 1];
            return Fz.forEach(((tz, vz) => {
              let Uz = function(zz, tz) {
                  if (zz.node(tz).dummy) {
                    let sz = zz.predecessors(tz);
                    if (sz) return sz.find((tz => zz.node(tz).dummy))
                  }
                }(zz, tz),
                Kz = Uz ? zz.node(Uz).order : Oz;
              (Uz || tz === oz) && (Fz.slice(Xz, vz + 1).forEach((tz => {
                let Fz = zz.predecessors(tz);
                Fz && Fz.forEach((Fz => {
                  let Xz = zz.node(Fz),
                    Oz = Xz.order;
                  (Oz < Wz || Kz < Oz) && (!Xz.dummy || !zz.node(tz).dummy) && os(sz, Fz, tz)
                }))
              })), Xz = vz + 1, Wz = Kz)
            })), Fz
          })), sz
        }(zz, Fz), function(zz, tz) {
          let sz = {};

          function Fz(tz, Fz, Wz, Xz, Oz) {
            zt(Fz, Wz).forEach((Fz => {
              let Wz = tz[Fz];
              if (void 0 !== Wz && zz.node(Wz).dummy) {
                let tz = zz.predecessors(Wz);
                tz && tz.forEach((tz => {
                  if (void 0 === tz) return;
                  let Fz = zz.node(tz);
                  Fz.dummy && (Fz.order < Xz || Fz.order > Oz) && os(sz, tz, Wz)
                }))
              }
            }))
          }
          return tz.length && tz.reduce((function(tz, sz) {
            let Wz = -1,
              Xz = -1,
              Oz = 0;
            return sz.forEach(((oz, vz) => {
              if ("border" === zz.node(oz).dummy) {
                let tz = zz.predecessors(oz);
                if (tz && tz.length) {
                  let oz = tz[0];
                  if (void 0 === oz) return;
                  Xz = zz.node(oz).order, Fz(sz, Oz, vz, Wz, Xz), Oz = vz, Wz = Xz
                }
              }
              Fz(sz, Oz, sz.length, Xz, tz.length)
            })), sz
          })), sz
        }(zz, Fz)),
        Xz = {};
      ["u", "d"].forEach((Oz => {
        sz = "u" === Oz ? Fz : Object.values(Fz).reverse(), ["l", "r"].forEach((Fz => {
          "r" === Fz && (sz = sz.map((zz => Object.values(zz).reverse())));
          let oz = function(zz, tz, sz, Fz, Wz) {
              let Xz = {},
                Oz = {},
                oz = {};
              return tz.forEach((zz => {
                zz.forEach(((zz, tz) => {
                  Xz[zz] = zz, Oz[zz] = zz, oz[zz] = tz
                }))
              })), tz.forEach((tz => {
                let vz = -1,
                  Uz = -1,
                  Kz = !1,
                  uz = tz,
                  Nz = tz.findIndex((tz => (null == Wz ? void 0 : Wz.includes(tz)) || us(tz, zz, Wz)));
                Nz > 0 && (uz = [tz[Nz], ...tz.slice(0, Nz), ...tz.slice(Nz + 1)], Kz = !0), uz.forEach((tz => {
                  var uz;
                  let Nz = Fz(tz);
                  if (Nz && Nz.length) {
                    null != Wz && Wz.includes(tz) && (Nz = Nz.filter((tz => us(tz, zz, Wz))));
                    let Fz = Nz.sort(((zz, tz) => {
                        let sz = oz[zz],
                          Fz = oz[tz];
                        return (void 0 !== sz ? sz : 0) - (void 0 !== Fz ? Fz : 0)
                      })),
                      bz = (Fz.length - 1) / 2;
                    for (let zz = Math.floor(bz), Wz = Math.ceil(bz); zz <= Wz; ++zz) {
                      let Wz = Fz[zz];
                      if (void 0 === Wz) continue;
                      let Nz = oz[Wz];
                      if (void 0 !== Nz && Oz[tz] === tz && vz < Nz && oz[Wz] !== Uz && !vs(sz, tz, Wz)) {
                        let zz = Xz[Wz];
                        void 0 !== zz && (Oz[Wz] = tz, Oz[tz] = Xz[tz] = zz, vz = Nz, Kz && (vz = -1, Uz = null != (uz = oz[Wz]) ? uz : -1, Kz = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Xz,
                align: Oz
              }
            }(zz, sz, Wz, (tz => ("u" === Oz ? zz.predecessors(tz) : zz.successors(tz)) || []), tz),
            vz = Us(zz, sz, oz.root, oz.align, "r" === Fz);
          "r" === Fz && (vz = st(vz, (zz => -zz))), Xz[Oz + Fz] = vz
        }))
      }));
      let Oz = function(zz, tz) {
        return Object.values(tz).reduce(((tz, sz) => {
          let Fz = Number.NEGATIVE_INFINITY,
            Wz = Number.POSITIVE_INFINITY;
          Object.entries(sz).forEach((tz => {
            let [sz, Xz] = tz, Oz = function(zz, tz) {
              return zz.node(tz).width
            }(zz, sz) / 2;
            Fz = Math.max(Xz + Oz, Fz), Wz = Math.min(Xz - Oz, Wz)
          }));
          let Xz = Fz - Wz;
          return Xz < tz[0] && (tz = [Xz, sz]), tz
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(zz, Xz);
      return function(zz, tz) {
          let sz = Object.values(tz),
            Fz = Sz(Math.min, sz),
            Wz = Sz(Math.max, sz);
          ["u", "d"].forEach((sz => {
            ["l", "r"].forEach((Xz => {
              let Oz = sz + Xz,
                oz = zz[Oz];
              if (!oz || oz === tz) return;
              let vz = Object.values(oz),
                Uz = Fz - Sz(Math.min, vz);
              "l" !== Xz && (Uz = Wz - Sz(Math.max, vz)), Uz && (zz[Oz] = st(oz, (zz => zz + Uz)))
            }))
          }))
        }(Xz, Oz),
        function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            sz = zz.ul;
          return sz ? st(sz, ((sz, Fz) => {
            var Wz, Xz;
            if (tz) {
              let sz = tz.toLowerCase(),
                Wz = zz[sz];
              if (Wz && void 0 !== Wz[Fz]) return Wz[Fz]
            }
            let Oz = Object.values(zz).map((zz => {
              let tz = zz[Fz];
              return void 0 !== tz ? tz : 0
            })).sort(((zz, tz) => zz - tz));
            return ((null != (Wz = Oz[1]) ? Wz : 0) + (null != (Xz = Oz[2]) ? Xz : 0)) / 2
          })) : {}
        }(Xz, zz.graph().align)
    }

    function us(zz, tz, sz) {
      var Fz;
      if (!sz) return !1;
      let Wz = null == (Fz = tz.node(zz)) ? void 0 : Fz.edgeObj;
      if (!Wz || tz.node(zz).edgeLabel.reversed) return !1;
      let Xz = sz.indexOf(null == Wz ? void 0 : Wz.v),
        Oz = sz.indexOf(null == Wz ? void 0 : Wz.w);
      return -1 !== Xz && -1 !== Oz && Xz === (Oz + 1) % sz.length || Xz === (Oz - 1) % sz.length
    }

    function Ns(zz, tz) {
      (function(zz) {
        let tz = nz(zz),
          sz = zz.graph(),
          Fz = sz.ranksep,
          Wz = sz.rankalign,
          Xz = 0;
        tz.forEach((tz => {
          let sz = tz.reduce(((tz, sz) => {
            var Fz;
            let Wz = null != (Fz = zz.node(sz).height) ? Fz : 0;
            return tz > Wz ? tz : Wz
          }), 0);
          tz.forEach((tz => {
            let Fz = zz.node(tz);
            Fz.y = "top" === Wz ? Xz + Fz.height / 2 : "bottom" === Wz ? Xz + sz - Fz.height / 2 : Xz + sz / 2
          })), Xz += sz + Fz
        }))
      })(zz = Lz(zz)), Object.entries(Ks(zz, tz)).forEach((tz => {
        let [sz, Fz] = tz;
        return zz.node(sz).x = Fz
      }))
    }
    var bs = new WeakMap;

    function ws(zz) {
      return gs(zz, pz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), zz
    }

    function Ds(zz, tz, sz) {
      let Fz = tz;
      for (; void 0 !== Fz;) {
        let tz = zz.parent(Fz);
        if (tz === sz) return Fz;
        Fz = tz
      }
    }

    function gs(zz, tz, sz) {
      var Fz;
      let Wz = zz.nodes().filter((tz => zz.children(tz).length)),
        Xz = {};
      Wz.forEach((Fz => {
        let Wz = zz.node(Fz);
        if (Wz && Wz.rankdir) {
          let Oz = new kz({
            multigraph: !0,
            compound: !0
          });
          Oz.setGraph({
            rankdir: Wz.rankdir
          });
          let oz = zz.children(Fz);
          oz.forEach((tz => {
            let sz = {
              ...zz.node(tz)
            };
            Oz.setNode(tz, sz);
            let Wz = zz.parent(tz);
            Wz && Wz !== Fz && oz.includes(Wz) && Oz.setParent(tz, Wz)
          }));
          let vz = new Set;
          zz.edges().forEach((tz => {
            let sz = Ds(zz, tz.v, Fz),
              Wz = Ds(zz, tz.w, Fz);
            if (sz && Wz && sz !== Wz) {
              let Fz = `${sz}\0${Wz}`;
              vz.has(Fz) || (vz.add(Fz), Oz.setEdge(sz, Wz, {
                ...zz.edge(tz)
              }))
            }
          })), gs(Oz, tz, sz);
          let Uz = Zs(Oz);
          Hs(Uz, tz, sz, null), Bs(Oz, Uz);
          let Kz = 1 / 0,
            uz = 1 / 0,
            Nz = -1 / 0,
            bz = -1 / 0;
          Oz.nodes().forEach((zz => {
            if (zz === Fz) return;
            let tz = Oz.node(zz);
            tz && "number" == typeof tz.x && "number" == typeof tz.y && "number" == typeof tz.width && "number" == typeof tz.height && (Kz = Math.min(Kz, tz.x - tz.width / 2), Nz = Math.max(Nz, tz.x + tz.width / 2), uz = Math.min(uz, tz.y - tz.height / 2), bz = Math.max(bz, tz.y + tz.height / 2))
          })), (!isFinite(Kz) || !isFinite(uz) || !isFinite(Nz) || !isFinite(bz)) && (Kz = uz = 0, Nz = bz = 0);
          let wz = Nz - Kz,
            Dz = bz - uz;
          Xz[Fz] = {
            minX: Kz,
            VF: uz,
            maxX: Nz,
            RF: bz,
            width: wz,
            height: Dz,
            offsetX: Kz,
            offsetY: uz
          }, Wz._dagreClusterSubgraph = Oz
        }
      }));
      let Oz = [],
        oz = new Map;
      Wz.forEach((tz => {
        let sz = zz.node(tz);
        sz && sz.rankdir && Xz[tz] && oz.set(tz, (zz.children(tz) || []).filter((zz => zz !== tz)))
      }));
      let vz = new Set([...oz.values()].flat()),
        Uz = new Map;
      oz.forEach(((tz, sz) => {
        vz.has(sz) || Uz.set(sz, (tz => {
          let sz = [],
            Fz = (zz.children(tz) || []).filter((zz => zz !== tz));
          for (; Fz.length > 0;) {
            let tz = Fz.shift();
            sz.push(tz), (zz.children(tz) || []).filter((zz => zz !== tz)).forEach((zz => Fz.push(zz)))
          }
          return sz
        })(sz))
      }));
      let Kz = new Set([...Uz.values()].flat()),
        uz = zz => {
          for (let [tz, sz] of Uz)
            if (sz.includes(zz)) return tz;
          return zz
        },
        Nz = [];
      zz.edges().forEach((tz => {
        (Kz.has(tz.v) || Kz.has(tz.w)) && Nz.push({
          edge: tz,
          label: zz.edge(tz)
        })
      }));
      let bz = new Map;
      Kz.forEach((tz => {
        let sz = zz.parent(tz);
        bz.set(tz, "string" == typeof sz ? sz : void 0)
      })), Uz.forEach(((tz, sz) => {
        let Fz = zz.node(sz),
          Wz = [];
        tz.forEach((tz => {
          let sz = zz.node(tz);
          sz && (Wz.push({
            id: tz,
            node: sz,
            parent: bz.get(tz)
          }), zz.removeNode(tz))
        }));
        let oz = Nz.filter((zz => {
            let {
              edge: sz
            } = zz;
            return tz.includes(sz.v) || tz.includes(sz.w)
          })),
          vz = Xz[sz];
        Fz && (Oz.push({
          clusterId: sz,
          subgraph: Fz._dagreClusterSubgraph,
          bounds: vz,
          children: tz,
          removedNodes: Wz,
          removedEdges: oz
        }), Fz.width = vz.width, Fz.height = vz.height)
      }));
      let wz = new Set;
      Nz.forEach((tz => {
        let {
          edge: sz,
          label: Fz
        } = tz, Wz = uz(sz.v), Xz = uz(sz.w);
        if (Wz !== Xz && zz.hasNode(Wz) && zz.hasNode(Xz)) {
          let tz = `${Wz}\0${Xz}`;
          wz.has(tz) || (wz.add(tz), zz.setEdge(Wz, Xz, {
            ...Fz,
            width: 0,
            height: 0
          }))
        }
      }));
      let Dz = Zs(zz),
        gz = Hs(Dz, tz, sz, null != (Fz = bs.get(zz)) ? Fz : null);
      bs.set(zz, gz), Bs(zz, Dz), wz.forEach((tz => {
        let sz = tz.indexOf("\0"),
          Fz = tz.slice(0, sz),
          Wz = tz.slice(sz + 1);
        zz.hasEdge(Fz, Wz) && zz.removeEdge(Fz, Wz)
      })), Oz.forEach((tz => {
        let {
          clusterId: sz,
          subgraph: Fz,
          bounds: Wz,
          removedNodes: Xz,
          removedEdges: Oz
        } = tz;
        var oz, vz;
        let Uz = zz.node(sz),
          Kz = null != (oz = null == Uz ? void 0 : Uz.x) ? oz : 0,
          uz = null != (vz = null == Uz ? void 0 : Uz.y) ? vz : 0,
          Nz = (Wz.minX + Wz.maxX) / 2,
          bz = (Wz.VF + Wz.RF) / 2;
        Xz.forEach((tz => {
          let {
            id: sz,
            node: Fz,
            parent: Wz
          } = tz;
          zz.setNode(sz, Fz), void 0 !== Wz && zz.setParent(sz, Wz)
        })), Oz.forEach((tz => {
          let {
            edge: sz,
            label: Fz
          } = tz;
          zz.setEdge(sz, Fz)
        })), Fz.nodes().forEach((tz => {
          if (tz === sz) return;
          let Wz = Fz.node(tz),
            Xz = zz.node(tz);
          Xz && Wz && "number" == typeof Wz.x && "number" == typeof Wz.y && (Xz.x = Kz + (Wz.x - Nz), Xz.y = uz + (Wz.y - bz))
        })), delete Uz._dagreClusterSubgraph
      })), Wz.forEach((tz => {
        var sz, Fz;
        let Wz = zz.node(tz),
          Oz = Xz[tz];
        if (Wz && Wz.rankdir && Wz._dagreClusterSubgraph && Oz) {
          let Xz = Wz._dagreClusterSubgraph,
            oz = null != (sz = Wz.x) ? sz : 0,
            vz = null != (Fz = Wz.y) ? Fz : 0,
            Uz = (Oz.minX + Oz.maxX) / 2,
            Kz = (Oz.VF + Oz.RF) / 2;
          Xz.nodes().forEach((sz => {
            if (sz === tz) return;
            let Fz = Xz.node(sz),
              Wz = zz.node(sz);
            if (Wz && Fz && "number" == typeof Fz.x && "number" == typeof Fz.y) {
              let zz = Fz.x - Uz,
                tz = Fz.y - Kz;
              Wz.x = oz + zz, Wz.y = vz + tz
            }
          })), delete Wz._dagreClusterSubgraph
        }
      }))
    }

    function Hs(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Wz, Xz;
      let Oz = !1 !== (null == sz ? void 0 : sz.useDynamic),
        oz = Oz && null != (Wz = null == Fz ? void 0 : Fz.graph) ? Wz : null,
        vz = Oz && null != (Xz = null == Fz ? void 0 : Fz.rawNodes) ? Xz : null;
      tz("    makeSpaceForEdgeLabels", (() => function(zz) {
        let tz = zz.graph();
        tz.ranksep /= 2, zz.edges().forEach((sz => {
          var Fz;
          let Wz = zz.edge(sz);
          Wz.minlen *= 2, "c" !== (null != (Fz = Wz.labelpos) ? Fz : "r").toLowerCase() && ("TB" === tz.rankdir || "BT" === tz.rankdir ? Wz.width += Wz.labeloffset : Wz.height += Wz.labeloffset)
        }))
      }(zz))), tz("    removeSelfEdges", (() => function(zz) {
        zz.edges().forEach((tz => {
          if (tz.v === tz.w) {
            let sz = zz.node(tz.v);
            sz.selfEdges || (sz.selfEdges = []), sz.selfEdges.push({
              e: tz,
              label: zz.edge(tz)
            }), zz.removeEdge(tz)
          }
        }))
      }(zz))), tz("    acyclic", (() => bt(zz, oz))), tz("    nestingGraph.run", (() => ht(zz))), tz("    rank", (() => At(Lz(zz)))), tz("    injectEdgeLabelProxies", (() => function(zz) {
        zz.edges().forEach((tz => {
          let sz = zz.edge(tz);
          if (sz.width && sz.height) {
            let sz = zz.node(tz.v),
              Fz = {
                rank: (zz.node(tz.w).rank - sz.rank) / 2 + sz.rank,
                e: tz
              };
            iz(zz, "edge-proxy", Fz, "_ep")
          }
        }))
      }(zz))), tz("    removeEmptyRanks", (() => function(zz) {
        let tz = zz.nodes().map((tz => zz.node(tz).rank)).filter((zz => void 0 !== zz)),
          sz = Sz(Math.min, tz),
          Fz = [];
        zz.nodes().forEach((tz => {
          let Wz = zz.node(tz).rank - sz;
          Fz[Wz] || (Fz[Wz] = []), Fz[Wz].push(tz)
        }));
        let Wz = 0,
          Xz = zz.graph().nodeRankFactor;
        Array.from(Fz).forEach(((tz, sz) => {
          void 0 === tz && sz % Xz !== 0 ? --Wz : void 0 !== tz && Wz && tz.forEach((tz => zz.node(tz).rank += Wz))
        }))
      }(zz))), tz("    nestingGraph.cleanup", (() => function(zz) {
        let tz = zz.graph();
        zz.removeNode(tz.nestingRoot), delete tz.nestingRoot, zz.edges().forEach((tz => {
          zz.edge(tz).nestingEdge && zz.removeEdge(tz)
        }))
      }(zz))), tz("    normalizeRanks", (() => function(zz) {
        let tz = zz.nodes().map((tz => {
            let sz = zz.node(tz).rank;
            return void 0 === sz ? Number.MAX_VALUE : sz
          })),
          sz = Sz(Math.min, tz);
        zz.nodes().forEach((tz => {
          let Fz = zz.node(tz);
          Object.hasOwn(Fz, "rank") && (Fz.rank -= sz)
        }))
      }(zz))), tz("    assignRankMinMax", (() => function(zz) {
        let tz = 0;
        zz.nodes().forEach((sz => {
          let Fz = zz.node(sz);
          Fz.borderTop && (Fz.minRank = zz.node(Fz.borderTop).rank, Fz.maxRank = zz.node(Fz.borderBottom).rank, tz = Math.max(tz, Fz.maxRank))
        })), zz.graph().maxRank = tz
      }(zz))), tz("    removeEdgeLabelProxies", (() => function(zz) {
        zz.nodes().forEach((tz => {
          let sz = zz.node(tz);
          if ("edge-proxy" === sz.dummy) {
            let Fz = sz;
            zz.edge(Fz.e).labelRank = sz.rank, zz.removeNode(tz)
          }
        }))
      }(zz))), tz("    normalize.run", (() => wt(zz))), tz("    parentDummyChains", (() => dt(zz))), tz("    addBorderSegments", (() => kt(zz))), tz("    order", (() => Fs(zz, sz, vz))), tz("    insertSelfEdges", (() => function(zz) {
        nz(zz).forEach((tz => {
          let sz = 0;
          tz.forEach(((tz, Fz) => {
            let Wz = zz.node(tz);
            "number" != typeof Wz.rank && (Wz.rank = 0), Wz.order = Fz + sz, (Wz.selfEdges || []).forEach((tz => {
              iz(zz, "selfedge", {
                width: tz.label.width,
                height: tz.label.height,
                rank: Wz.rank,
                order: Fz + ++sz,
                e: tz.e,
                edgeLabel: tz.label
              }, "_se"), (!Array.isArray(tz.label.points) || 7 !== tz.label.points.length) && (tz.label.points = [{
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
            })), delete Wz.selfEdges
          }))
        }))
      }(zz))), tz("    adjustCoordinateSystem", (() => function(zz) {
        var tz;
        let sz = null == (tz = zz.graph().rankdir) ? void 0 : tz.toLowerCase();
        ("lr" === sz || "rl" === sz) && lt(zz)
      }(zz))), tz("    position", (() => Ns(zz, sz.corePath))), tz("    positionSelfEdges", (() => function(zz) {
        zz.nodes().forEach((tz => {
          let sz = zz.node(tz),
            Fz = zz => "number" == typeof zz && isFinite(zz);
          if ("selfedge" === sz.dummy) {
            let Wz = sz,
              Xz = zz.node(Wz.e.v),
              Oz = Fz(null == Xz ? void 0 : Xz.x) ? Xz.x : 0,
              oz = Fz(null == Xz ? void 0 : Xz.y) ? Xz.y : 0,
              vz = Fz(null == Xz ? void 0 : Xz.width) ? Xz.width : 0,
              Uz = Fz(null == Xz ? void 0 : Xz.height) ? Xz.height : 0,
              Kz = Fz(sz.x) ? sz.x : Oz,
              uz = Fz(sz.y) ? sz.y : oz,
              Nz = vz / 2,
              bz = Uz / 2;
            Wz.edgeLabel.points = [{
              x: Kz + Nz,
              y: uz - bz
            }, {
              x: Kz + Nz,
              y: uz - bz
            }, {
              x: Kz,
              y: uz
            }, {
              x: Kz - Nz,
              y: uz + bz
            }, {
              x: Kz - Nz,
              y: uz + bz
            }, {
              x: Kz,
              y: uz
            }, {
              x: Kz,
              y: uz
            }], Wz.edgeLabel.x = Kz, Wz.edgeLabel.y = uz, zz.setEdge(Wz.e, Wz.edgeLabel), zz.removeNode(tz)
          } else sz && Array.isArray(sz.selfEdges) && sz.selfEdges.forEach((zz => {
            if (!Array.isArray(zz.label.points) || 7 !== zz.label.points.length) {
              let tz = Fz(sz.x) ? sz.x : 0,
                Wz = Fz(sz.y) ? sz.y : 0,
                Xz = (Fz(sz.width) ? sz.width : 0) / 2,
                Oz = (Fz(sz.height) ? sz.height : 0) / 2;
              zz.label.points = [{
                x: tz + Xz,
                y: Wz - Oz
              }, {
                x: tz + Xz,
                y: Wz - Oz
              }, {
                x: tz,
                y: Wz
              }, {
                x: tz - Xz,
                y: Wz + Oz
              }, {
                x: tz - Xz,
                y: Wz + Oz
              }, {
                x: tz,
                y: Wz
              }, {
                x: tz,
                y: Wz
              }]
            }
          }))
        }))
      }(zz)));
      let Uz = JSON.parse(JSON.stringify(zz._nodes));
      return tz("    removeBorderNodes", (() => function(zz) {
        zz.nodes().forEach((tz => {
          if (zz.children(tz).length) {
            let sz = zz.node(tz),
              Fz = zz.node(sz.borderTop),
              Wz = zz.node(sz.borderBottom),
              Xz = zz.node(sz.borderLeft[sz.borderLeft.length - 1]),
              Oz = zz.node(sz.borderRight[sz.borderRight.length - 1]);
            sz.width = Math.abs(Oz.x - Xz.x), sz.height = Math.abs(Wz.y - Fz.y), sz.x = Xz.x + sz.width / 2, sz.y = Fz.y + sz.height / 2
          }
        })), zz.nodes().forEach((tz => {
          "border" === zz.node(tz).dummy && zz.removeNode(tz)
        }))
      }(zz))), tz("    normalize.undo", (() => function(zz) {
        zz.graph().dummyChains.forEach((tz => {
          let sz, Fz = zz.node(tz),
            Wz = Fz.edgeLabel;
          for (zz.setEdge(Fz.edgeObj, Wz); Fz.dummy;) sz = zz.successors(tz)[0], zz.removeNode(tz), Wz.points.push({
            x: Fz.x,
            y: Fz.y
          }), "edge-label" === Fz.dummy && (Wz.x = Fz.x, Wz.y = Fz.y, Wz.width = Fz.width, Wz.height = Fz.height), tz = sz, Fz = zz.node(tz)
        }))
      }(zz))), tz("    fixupEdgeLabelCoords", (() => function(zz) {
        zz.edges().forEach((tz => {
          let sz = zz.edge(tz);
          if (Object.hasOwn(sz, "x")) switch (("l" === sz.labelpos || "r" === sz.labelpos) && (sz.width -= sz.labeloffset), sz.labelpos) {
            case "l":
              sz.x -= sz.width / 2 + sz.labeloffset;
              break;
            case "r":
              sz.x += sz.width / 2 + sz.labeloffset
          }
        }))
      }(zz))), tz("    undoCoordinateSystem", (() => Lt(zz))), tz("    translateGraph", (() => function(zz) {
        let tz = Number.POSITIVE_INFINITY,
          sz = 0,
          Fz = Number.POSITIVE_INFINITY,
          Wz = 0,
          Xz = zz.graph(),
          Oz = Xz.marginx || 0,
          oz = Xz.marginy || 0;

        function vz(zz) {
          let Xz = zz.x,
            Oz = zz.y,
            oz = zz.width,
            vz = zz.height;
          tz = Math.min(tz, Xz - oz / 2), sz = Math.max(sz, Xz + oz / 2), Fz = Math.min(Fz, Oz - vz / 2), Wz = Math.max(Wz, Oz + vz / 2)
        }
        zz.nodes().forEach((tz => vz(zz.node(tz)))), zz.edges().forEach((tz => {
          let sz = zz.edge(tz);
          Object.hasOwn(sz, "x") && vz(sz)
        })), tz -= Oz, Fz -= oz, zz.nodes().forEach((sz => {
          let Wz = zz.node(sz);
          Wz.x -= tz, Wz.y -= Fz
        })), zz.edges().forEach((sz => {
          let Wz = zz.edge(sz);
          Wz.points.forEach((zz => {
            zz.x -= tz, zz.y -= Fz
          })), Object.hasOwn(Wz, "x") && (Wz.x -= tz), Object.hasOwn(Wz, "y") && (Wz.y -= Fz)
        })), Xz.width = sz - tz + Oz, Xz.height = Wz - Fz + oz
      }(zz))), tz("    assignNodeIntersects", (() => function(zz) {
        zz.edges().forEach((tz => {
          if (tz.v === tz.w) return;
          let sz, Fz, Wz = zz.edge(tz),
            Xz = zz.node(tz.v),
            Oz = zz.node(tz.w);
          Wz.points ? (sz = Wz.points[0], Fz = Wz.points[Wz.points.length - 1]) : (Wz.points = [], sz = Oz, Fz = Xz), Wz.points.unshift(lz(Xz, sz)), Wz.points.push(lz(Oz, Fz))
        }))
      }(zz))), tz("    reversePoints", (() => function(zz) {
        zz.edges().forEach((tz => {
          let sz = zz.edge(tz);
          sz.reversed && sz.points.reverse()
        }))
      }(zz))), tz("    acyclic.undo", (() => function(zz) {
        zz.edges().forEach((tz => {
          let sz = zz.edge(tz);
          if (sz.reversed) {
            zz.removeEdge(tz);
            let Fz = sz.forwardName;
            delete sz.reversed, delete sz.forwardName, zz.setEdge(tz.w, tz.v, sz, Fz)
          }
        }))
      }(zz))), {
        graph: zz,
        rawNodes: Uz
      }
    }

    function Bs(zz, tz) {
      zz.nodes().forEach((sz => {
        let Fz = zz.node(sz),
          Wz = tz.node(sz);
        Fz && (Fz.x = Wz.x, Fz.y = Wz.y, Fz.order = Wz.order, Fz.rank = Wz.rank, tz.children(sz).length && (Fz.width = Wz.width, Fz.height = Wz.height))
      })), zz.edges().forEach((sz => {
        let Fz = zz.edge(sz),
          Wz = tz.edge(sz);
        Fz.points = Wz.points, Object.hasOwn(Wz, "x") && (Fz.x = Wz.x, Fz.y = Wz.y)
      })), zz.graph().width = tz.graph().width, zz.graph().height = tz.graph().height
    }
    var Ps = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      rs = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Ys = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      xs = ["width", "height", "rank"],
      ms = {
        width: 0,
        height: 0
      },
      Is = ["minlen", "weight", "width", "height", "labeloffset"],
      Cs = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      es = ["labelpos"];

    function Zs(zz) {
      let tz = new kz({
          multigraph: !0,
          compound: !0
        }),
        sz = Ts(zz.graph());
      return tz.setGraph(Object.assign({}, rs, Gs(sz, Ps), tt(sz, Ys))), zz.nodes().forEach((sz => {
        let Fz = Gs(Ts(zz.node(sz)), xs);
        Object.keys(ms).forEach((zz => {
          void 0 === Fz[zz] && (Fz[zz] = ms[zz])
        })), tz.setNode(sz, Fz);
        let Wz = zz.parent(sz);
        void 0 !== Wz && tz.setParent(sz, Wz)
      })), zz.edges().forEach((sz => {
        let Fz = Ts(zz.edge(sz));
        tz.setEdge(sz, Object.assign({}, Cs, Gs(Fz, Is), tt(Fz, es)))
      })), tz
    }

    function Gs(zz, tz) {
      return st(tt(zz, tz), Number)
    }

    function Ts(zz) {
      let tz = {};
      return zz && Object.entries(zz).forEach((zz => {
        let [sz, Fz] = zz;
        "string" == typeof sz && (sz = sz.toLowerCase()), tz[sz] = Fz
      })), tz
    }

    function cs(zz) {
      let tz = nz(zz),
        sz = new kz({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return zz.nodes().forEach((tz => {
        sz.setNode(tz, {
          label: tz
        }), sz.setParent(tz, "layer" + zz.node(tz).rank)
      })), zz.edges().forEach((zz => sz.setEdge(zz.v, zz.w, {}, zz.name))), tz.forEach(((zz, tz) => {
        let Fz = "layer" + tz;
        sz.setNode(Fz, {
          rank: "same"
        }), zz.reduce(((zz, tz) => (sz.setEdge(zz, tz, {
          style: "invis"
        }), tz)))
      })), sz
    }
    var As = {
        time: Rz,
        notime: pz
      },
      ys = {
        graphlib: Xz,
        version: Xt,
        layout: ws,
        debug: cs,
        util: {
          time: Rz,
          notime: pz
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);