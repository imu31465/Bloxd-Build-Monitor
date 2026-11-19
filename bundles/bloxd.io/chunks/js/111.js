/*! For license information please see ad2avs.111.e03cf707.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6167: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Graph: () => gz,
      debug: () => Lb,
      default: () => Gb,
      graphlib: () => iz,
      layout: () => Fb,
      util: () => Pb,
      version: () => iu
    });
    var Ez = Object.defineProperty,
      nz = (zz, uz, bz) => ((zz, uz, bz) => uz in zz ? Ez(zz, uz, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: bz
      }) : zz[uz] = bz)(zz, "symbol" != typeof uz ? uz + "" : uz, bz),
      iz = {};
    ((zz, uz) => {
      for (var bz in uz) Ez(zz, bz, {
        get: uz[bz],
        enumerable: !0
      })
    })(iz, {
      Graph: () => gz,
      alg: () => wz
    });
    var lz = Object.defineProperty,
      Mz = (zz, uz) => {
        for (var bz in uz) lz(zz, bz, {
          get: uz[bz],
          enumerable: !0
        })
      },
      tz = class {
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
        setNodes(zz, uz) {
          return zz.forEach((zz => {
            void 0 !== uz ? this.setNode(zz, uz) : this.setNode(zz)
          })), this
        }
        setNode(zz, uz) {
          return zz in this._nodes ? (arguments.length > 1 && (this._nodes[zz] = uz), this) : (this._nodes[zz] = arguments.length > 1 ? uz : this._defaultNodeLabelFn(zz), this._isCompound && (this._parent[zz] = "\0", this._children[zz] = {}, this._children["\0"][zz] = !0), this._in[zz] = {}, this._preds[zz] = {}, this._out[zz] = {}, this._sucs[zz] = {}, ++this._nodeCount, this)
        }
        node(zz) {
          return this._nodes[zz]
        }
        hasNode(zz) {
          return zz in this._nodes
        }
        removeNode(zz) {
          if (zz in this._nodes) {
            let uz = zz => this.removeEdge(this._edgeObjs[zz]);
            delete this._nodes[zz], this._isCompound && (this._removeFromParentsChildList(zz), delete this._parent[zz], this.children(zz).forEach((zz => {
              this.setParent(zz)
            })), delete this._children[zz]), Object.keys(this._in[zz]).forEach(uz), delete this._in[zz], delete this._preds[zz], Object.keys(this._out[zz]).forEach(uz), delete this._out[zz], delete this._sucs[zz], --this._nodeCount
          }
          return this
        }
        setParent(zz, uz) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === uz) uz = "\0";
          else {
            for (let bz = uz += ""; void 0 !== bz; bz = this.parent(bz))
              if (bz === zz) throw new Error("Setting " + uz + " as parent of " + zz + " would create a cycle");
            this.setNode(uz)
          }
          return this.setNode(zz), this._removeFromParentsChildList(zz), this._parent[zz] = uz, this._children[uz][zz] = !0, this
        }
        parent(zz) {
          if (this._isCompound) {
            let uz = this._parent[zz];
            if ("\0" !== uz) return uz
          }
        }
        children() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let uz = this._children[zz];
            if (uz) return Object.keys(uz)
          } else {
            if ("\0" === zz) return this.nodes();
            if (this.hasNode(zz)) return []
          }
          return []
        }
        predecessors(zz) {
          let uz = this._preds[zz];
          if (uz) return Object.keys(uz)
        }
        successors(zz) {
          let uz = this._sucs[zz];
          if (uz) return Object.keys(uz)
        }
        neighbors(zz) {
          let uz = this.predecessors(zz);
          if (uz) {
            let bz = new Set(uz),
              Ez = this.successors(zz);
            if (Ez)
              for (let zz of Ez) bz.add(zz);
            return Array.from(bz.values())
          }
        }
        isLeaf(zz) {
          var uz;
          let bz;
          return bz = this.isDirected() ? this.successors(zz) : this.neighbors(zz), 0 === (null != (uz = null == bz ? void 0 : bz.length) ? uz : 0)
        }
        filterNodes(zz) {
          let uz = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          uz.setGraph(this.graph()), Object.entries(this._nodes).forEach((bz => {
            let [Ez, nz] = bz;
            zz(Ez) && uz.setNode(Ez, nz)
          })), Object.values(this._edgeObjs).forEach((zz => {
            uz.hasNode(zz.v) && uz.hasNode(zz.w) && uz.setEdge(zz, this.edge(zz))
          }));
          let bz = {},
            Ez = zz => {
              let nz = this.parent(zz);
              return !nz || uz.hasNode(nz) ? (bz[zz] = nz, nz) : nz in bz ? bz[nz] : Ez(nz)
            };
          return this._isCompound && uz.nodes().forEach((zz => uz.setParent(zz, Ez(zz)))), uz
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
        setPath(zz, uz) {
          return zz.reduce(((zz, bz) => (void 0 !== uz ? this.setEdge(zz, bz, uz) : this.setEdge(zz, bz), bz))), this
        }
        setEdge(zz, uz, bz, Ez) {
          let nz, iz, lz, Mz, tz = !1;
          "object" == typeof zz && null !== zz && "v" in zz ? (nz = zz.v, iz = zz.w, lz = zz.name, 2 === arguments.length && (Mz = uz, tz = !0)) : (nz = zz, iz = uz, lz = Ez, arguments.length > 2 && (Mz = bz, tz = !0)), nz = "" + nz, iz = "" + iz, void 0 !== lz && (lz = "" + lz);
          let Oz = pz(this._isDirected, nz, iz, lz);
          if (Oz in this._edgeLabels) return tz && (this._edgeLabels[Oz] = Mz), this;
          if (void 0 !== lz && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(nz), this.setNode(iz), this._edgeLabels[Oz] = tz ? Mz : this._defaultEdgeLabelFn(nz, iz, lz);
          let dz = function(zz, uz, bz, Ez) {
            let nz = "" + uz,
              iz = "" + bz;
            if (!zz && nz > iz) {
              let zz = nz;
              nz = iz, iz = zz
            }
            let lz = {
              v: nz,
              w: iz
            };
            return Ez && (lz.name = Ez), lz
          }(this._isDirected, nz, iz, lz);
          return nz = dz.v, iz = dz.w, Object.freeze(dz), this._edgeObjs[Oz] = dz, Hz(this._preds[iz], nz), Hz(this._sucs[nz], iz), this._in[iz][Oz] = dz, this._out[nz][Oz] = dz, this._edgeCount++, this
        }
        edge(zz, uz, bz) {
          let Ez = 1 === arguments.length ? dz(this._isDirected, zz) : pz(this._isDirected, zz, uz, bz);
          return this._edgeLabels[Ez]
        }
        edgeAsObj(zz, uz, bz) {
          let Ez = 1 === arguments.length ? this.edge(zz) : this.edge(zz, uz, bz);
          return "object" != typeof Ez || null === Ez ? {
            label: Ez
          } : Ez
        }
        hasEdge(zz, uz, bz) {
          return (1 === arguments.length ? dz(this._isDirected, zz) : pz(this._isDirected, zz, uz, bz)) in this._edgeLabels
        }
        removeEdge(zz, uz, bz) {
          let Ez = 1 === arguments.length ? dz(this._isDirected, zz) : pz(this._isDirected, zz, uz, bz),
            nz = this._edgeObjs[Ez];
          if (nz) {
            let zz = nz.v,
              uz = nz.w;
            delete this._edgeLabels[Ez], delete this._edgeObjs[Ez], Oz(this._preds[uz], zz), Oz(this._sucs[zz], uz), delete this._in[uz][Ez], delete this._out[zz][Ez], this._edgeCount--
          }
          return this
        }
        inEdges(zz, uz) {
          return this.isDirected() ? this.filterEdges(this._in[zz], zz, uz) : this.nodeEdges(zz, uz)
        }
        outEdges(zz, uz) {
          return this.isDirected() ? this.filterEdges(this._out[zz], zz, uz) : this.nodeEdges(zz, uz)
        }
        nodeEdges(zz, uz) {
          if (zz in this._nodes) return this.filterEdges({
            ...this._in[zz],
            ...this._out[zz]
          }, zz, uz)
        }
        _removeFromParentsChildList(zz) {
          delete this._children[this._parent[zz]][zz]
        }
        filterEdges(zz, uz, bz) {
          if (!zz) return;
          let Ez = Object.values(zz);
          return bz ? Ez.filter((zz => zz.v === uz && zz.w === bz || zz.v === bz && zz.w === uz)) : Ez
        }
      };

    function Hz(zz, uz) {
      zz[uz] ? zz[uz]++ : zz[uz] = 1
    }

    function Oz(zz, uz) {
      void 0 !== zz[uz] && !--zz[uz] && delete zz[uz]
    }

    function pz(zz, uz, bz, Ez) {
      let nz = "" + uz,
        iz = "" + bz;
      if (!zz && nz > iz) {
        let zz = nz;
        nz = iz, iz = zz
      }
      return nz + "\x01" + iz + "\x01" + (void 0 === Ez ? "\0" : Ez)
    }

    function dz(zz, uz) {
      return pz(zz, uz.v, uz.w, uz.name)
    }

    function Fz(zz) {
      let uz = {
          options: {
            directed: zz.isDirected(),
            multigraph: zz.isMultigraph(),
            compound: zz.isCompound()
          },
          nodes: Zz(zz),
          edges: Rz(zz)
        },
        bz = zz.graph();
      return void 0 !== bz && (uz.value = structuredClone(bz)), uz
    }

    function Zz(zz) {
      return zz.nodes().map((uz => {
        let bz = zz.node(uz),
          Ez = zz.parent(uz),
          nz = {
            v: uz
          };
        return void 0 !== bz && (nz.value = bz), void 0 !== Ez && (nz.parent = Ez), nz
      }))
    }

    function Rz(zz) {
      return zz.edges().map((uz => {
        let bz = zz.edge(uz),
          Ez = {
            v: uz.v,
            w: uz.w
          };
        return void 0 !== uz.name && (Ez.name = uz.name), void 0 !== bz && (Ez.value = bz), Ez
      }))
    }

    function Kz(zz) {
      let uz = new tz(zz.options);
      return void 0 !== zz.value && uz.setGraph(zz.value), zz.nodes.forEach((zz => {
        uz.setNode(zz.v, zz.value), zz.parent && uz.setParent(zz.v, zz.parent)
      })), zz.edges.forEach((zz => {
        uz.setEdge({
          v: zz.v,
          w: zz.w,
          name: zz.name
        }, zz.value)
      })), uz
    }
    Mz({}, {
      read: () => Kz,
      write: () => Fz
    });
    var wz = {};
    Mz(wz, {
      CycleException: () => Lz,
      bellmanFord: () => fz,
      components: () => sz,
      dijkstra: () => Nz,
      dijkstraAll: () => vz,
      findCycles: () => Jz,
      floydWarshall: () => Tz,
      isAcyclic: () => Gz,
      postorder: () => qz,
      preorder: () => hz,
      prim: () => Uz,
      shortestPaths: () => cz,
      tarjan: () => xz,
      topsort: () => Pz
    });
    var Xz = () => 1;

    function fz(zz, uz, bz, Ez) {
      return function(zz, uz, bz, Ez) {
        let nz, iz = {},
          lz = 0,
          Mz = zz.nodes(),
          tz = function(zz) {
            let uz = iz[zz.v],
              Ez = iz[zz.w];
            if (!uz || !Ez) return;
            let lz = bz(zz);
            uz.distance + lz < Ez.distance && (iz[zz.w] = {
              distance: uz.distance + lz,
              predecessor: zz.v
            }, nz = !0)
          },
          Hz = function() {
            Mz.forEach((function(zz) {
              Ez(zz).forEach((function(uz) {
                let bz = uz.v === zz ? uz.v : uz.w,
                  Ez = bz === uz.v ? uz.w : uz.v;
                tz({
                  v: bz,
                  w: Ez
                })
              }))
            }))
          };
        Mz.forEach((function(zz) {
          let bz = zz === uz ? 0 : Number.POSITIVE_INFINITY;
          iz[zz] = {
            distance: bz,
            predecessor: ""
          }
        }));
        let Oz = Mz.length;
        for (let pz = 1; pz < Oz && (nz = !1, lz++, Hz(), nz); pz++);
        if (lz === Oz - 1 && (nz = !1, Hz(), nz)) throw new Error("The graph contains a negative weight cycle");
        return iz
      }(zz, String(uz), bz || Xz, Ez || function(uz) {
        var bz;
        return null != (bz = zz.outEdges(uz)) ? bz : []
      })
    }

    function sz(zz) {
      let uz, bz = {},
        Ez = [];

      function nz(Ez) {
        var iz, lz;
        Ez in bz || (bz[Ez] = !0, uz.push(Ez), null == (iz = zz.successors(Ez)) || iz.forEach(nz), null == (lz = zz.predecessors(Ez)) || lz.forEach(nz))
      }
      return zz.nodes().forEach((function(zz) {
        uz = [], nz(zz), uz.length && Ez.push(uz)
      })), Ez
    }
    var rz = class {
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
          let uz = this._keyIndices[zz];
          if (void 0 !== uz) return this._arr[uz].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(zz, uz) {
          let bz = this._keyIndices,
            Ez = String(zz);
          if (!(Ez in bz)) {
            let zz = this._arr,
              nz = zz.length;
            return bz[Ez] = nz, zz.push({
              key: Ez,
              priority: uz
            }), this._decrease(nz), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let zz = this._arr.pop();
          return delete this._keyIndices[zz.key], this._heapify(0), zz.key
        }
        decrease(zz, uz) {
          let bz = this._keyIndices[zz];
          if (void 0 === bz) throw new Error(`Key not found: ${zz}`);
          let Ez = this._arr[bz].priority;
          if (uz > Ez) throw new Error(`New priority is greater than current priority. Key: ${zz} Old: ${Ez} New: ${uz}`);
          this._arr[bz].priority = uz, this._decrease(bz)
        }
        _heapify(zz) {
          let uz = this._arr,
            bz = 2 * zz,
            Ez = bz + 1,
            nz = zz;
          bz < uz.length && (nz = uz[bz].priority < uz[nz].priority ? bz : nz, Ez < uz.length && (nz = uz[Ez].priority < uz[nz].priority ? Ez : nz), nz !== zz && (this._swap(zz, nz), this._heapify(nz)))
        }
        _decrease(zz) {
          let uz, bz = this._arr,
            Ez = bz[zz].priority;
          for (; 0 !== zz && (uz = zz >> 1, !(bz[uz].priority < Ez));) this._swap(zz, uz), zz = uz
        }
        _swap(zz, uz) {
          let bz = this._arr,
            Ez = this._keyIndices,
            nz = bz[zz],
            iz = bz[uz];
          bz[zz] = iz, bz[uz] = nz, Ez[iz.key] = zz, Ez[nz.key] = uz
        }
      },
      oz = () => 1;

    function Nz(zz, uz, bz, Ez) {
      return function(zz, uz, bz, Ez) {
        let nz, iz, lz = {},
          Mz = new rz,
          tz = function(zz) {
            let uz = zz.v !== nz ? zz.v : zz.w,
              Ez = lz[uz];
            if (!Ez) return;
            let tz = bz(zz),
              Hz = iz.distance + tz;
            if (tz < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + zz + " Weight: " + tz);
            Hz < Ez.distance && (Ez.distance = Hz, Ez.predecessor = nz, Mz.decrease(uz, Hz))
          };
        for (zz.nodes().forEach((function(zz) {
            let bz = zz === uz ? 0 : Number.POSITIVE_INFINITY;
            lz[zz] = {
              distance: bz,
              predecessor: ""
            }, Mz.add(zz, bz)
          })); Mz.size() > 0;) {
          nz = Mz.removeMin();
          let zz = lz[nz];
          if (!zz || zz.distance === Number.POSITIVE_INFINITY) break;
          iz = zz, Ez(nz).forEach(tz)
        }
        return lz
      }(zz, String(uz), bz || oz, Ez || function(uz) {
        var bz;
        return null != (bz = zz.outEdges(uz)) ? bz : []
      })
    }

    function vz(zz, uz, bz) {
      return zz.nodes().reduce((function(Ez, nz) {
        return Ez[nz] = Nz(zz, nz, uz, bz), Ez
      }), {})
    }

    function xz(zz) {
      let uz = 0,
        bz = [],
        Ez = {},
        nz = [];

      function iz(lz) {
        var Mz;
        let tz = Ez[lz] = {
          onStack: !0,
          lowlink: uz,
          index: uz++
        };
        if (bz.push(lz), null == (Mz = zz.successors(lz)) || Mz.forEach((function(zz) {
            if (zz in Ez) {
              let uz = Ez[zz];
              null != uz && uz.onStack && (tz.lowlink = Math.min(tz.lowlink, uz.index))
            } else {
              iz(zz);
              let uz = Ez[zz];
              uz && (tz.lowlink = Math.min(tz.lowlink, uz.lowlink))
            }
          })), tz.lowlink === tz.index) {
          let zz, uz = [];
          do {
            zz = bz.pop();
            let nz = Ez[zz];
            nz && (nz.onStack = !1), uz.push(zz)
          } while (lz !== zz);
          nz.push(uz)
        }
      }
      return zz.nodes().forEach((function(zz) {
        zz in Ez || iz(zz)
      })), nz
    }

    function Jz(zz) {
      return xz(zz).filter((function(uz) {
        var bz;
        let Ez = uz[0];
        return !!Ez && (uz.length > 1 || 1 === uz.length && (null != (bz = zz.outEdges(Ez, Ez)) ? bz : []).length > 0)
      }))
    }
    var Az = () => 1;

    function Tz(zz, uz, bz) {
      return function(zz, uz, bz) {
        let Ez = {},
          nz = zz.nodes();
        return nz.forEach((function(zz) {
          let iz = {};
          Ez[zz] = iz, iz[zz] = {
            distance: 0,
            predecessor: ""
          }, nz.forEach((function(uz) {
            zz !== uz && (iz[uz] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), bz(zz).forEach((function(bz) {
            let Ez = bz.v === zz ? bz.w : bz.v,
              nz = uz(bz);
            iz[Ez] = {
              distance: nz,
              predecessor: zz
            }
          }))
        })), nz.forEach((function(zz) {
          let uz = Ez[zz];
          uz && nz.forEach((function(bz) {
            let iz = Ez[bz];
            iz && nz.forEach((function(bz) {
              let Ez = iz[zz],
                nz = uz[bz],
                lz = iz[bz];
              if (Ez && nz && lz) {
                let zz = Ez.distance + nz.distance;
                zz < lz.distance && (lz.distance = zz, lz.predecessor = nz.predecessor)
              }
            }))
          }))
        })), Ez
      }(zz, uz || Az, bz || function(uz) {
        var bz;
        return null != (bz = zz.outEdges(uz)) ? bz : []
      })
    }
    var Lz = class extends Error {
      constructor(zz) {
        super(zz), this.name = "CycleException"
      }
    };

    function Pz(zz) {
      let uz = {},
        bz = {},
        Ez = [];
      if (zz.sinks().forEach((function nz(iz) {
          var lz;
          if (iz in bz) throw new Lz;
          iz in uz || (bz[iz] = !0, uz[iz] = !0, null == (lz = zz.predecessors(iz)) || lz.forEach(nz), delete bz[iz], Ez.push(iz))
        })), Object.keys(uz).length !== zz.nodeCount()) throw new Lz;
      return Ez
    }

    function Gz(zz) {
      try {
        Pz(zz)
      } catch (uz) {
        if (uz instanceof Lz) return !1;
        throw uz
      }
      return !0
    }

    function az(zz, uz, bz, Ez, nz) {
      Array.isArray(uz) || (uz = [uz]);
      let iz = uz => {
          var bz;
          return null != (bz = zz.isDirected() ? zz.successors(uz) : zz.neighbors(uz)) ? bz : []
        },
        lz = {};
      return uz.forEach((function(uz) {
        if (!zz.hasNode(uz)) throw new Error("Graph does not have node: " + uz);
        nz = Vz(zz, uz, "post" === bz, lz, iz, Ez, nz)
      })), nz
    }

    function Vz(zz, uz, bz, Ez, nz, iz, lz) {
      return uz in Ez || (Ez[uz] = !0, bz || (lz = iz(lz, uz)), nz(uz).forEach((function(uz) {
        lz = Vz(zz, uz, bz, Ez, nz, iz, lz)
      })), bz && (lz = iz(lz, uz))), lz
    }

    function mz(zz, uz, bz) {
      return az(zz, uz, bz, (function(zz, uz) {
        return zz.push(uz), zz
      }), [])
    }

    function qz(zz, uz) {
      return mz(zz, uz, "post")
    }

    function hz(zz, uz) {
      return mz(zz, uz, "pre")
    }

    function Uz(zz, uz) {
      var bz;
      let Ez, nz = new tz,
        iz = {},
        lz = new rz;

      function Mz(zz) {
        let bz = zz.v === Ez ? zz.w : zz.v,
          nz = lz.priority(bz);
        if (void 0 !== nz) {
          let Mz = uz(zz);
          Mz < nz && (iz[bz] = Ez, lz.decrease(bz, Mz))
        }
      }
      if (0 === zz.nodeCount()) return nz;
      zz.nodes().forEach((function(zz) {
        lz.add(zz, Number.POSITIVE_INFINITY), nz.setNode(zz)
      }));
      let Hz = zz.nodes()[0];
      void 0 !== Hz && lz.decrease(Hz, 0);
      let Oz = !1;
      for (; lz.size() > 0;) {
        if (Ez = lz.removeMin(), Ez in iz) nz.setEdge(Ez, iz[Ez]);
        else {
          if (Oz) throw new Error("Input graph is not connected: " + zz);
          Oz = !0
        }
        null == (bz = zz.nodeEdges(Ez)) || bz.forEach(Mz)
      }
      return nz
    }

    function cz(zz, uz, bz, Ez) {
      return function(zz, uz, bz, Ez) {
        if (void 0 === bz) return Nz(zz, uz, bz, Ez);
        let nz = !1,
          iz = zz.nodes();
        for (let lz = 0; lz < iz.length; lz++) {
          let Mz = iz[lz];
          if (void 0 === Mz) continue;
          let tz = Ez(Mz);
          for (let zz = 0; zz < tz.length; zz++) {
            let uz = tz[zz];
            if (!uz) continue;
            let Ez = uz.v === Mz ? uz.v : uz.w;
            bz({
              v: Ez,
              w: Ez === uz.v ? uz.w : uz.v
            }) < 0 && (nz = !0)
          }
          if (nz) return fz(zz, uz, bz, Ez)
        }
        return Nz(zz, uz, bz, Ez)
      }(zz, uz, bz, null != Ez ? Ez : uz => {
        var bz;
        return null != (bz = zz.outEdges(uz)) ? bz : []
      })
    }
    var gz = tz;

    function Sz(zz, uz, bz, Ez) {
      let nz = Ez;
      for (; zz.hasNode(nz);) nz = kz(Ez);
      return bz.dummy = uz, zz.setNode(nz, bz), nz
    }

    function yz(zz) {
      let uz = new gz({
        multigraph: zz.isMultigraph()
      }).setGraph(zz.graph());
      return zz.nodes().forEach((bz => {
        zz.children(bz).length || uz.setNode(bz, zz.node(bz))
      })), zz.edges().forEach((bz => {
        uz.setEdge(bz, zz.edge(bz))
      })), uz
    }

    function Dz(zz, uz) {
      let bz, Ez, nz = zz.x,
        iz = zz.y,
        lz = uz.x - nz,
        Mz = uz.y - iz,
        tz = zz.width / 2,
        Hz = zz.height / 2;
      if (!lz && !Mz) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Mz) * tz > Math.abs(lz) * Hz ? (Mz < 0 && (Hz = -Hz), bz = Hz * lz / Mz, Ez = Hz) : (lz < 0 && (tz = -tz), bz = tz, Ez = tz * Mz / lz), {
        x: nz + bz,
        y: iz + Ez
      }
    }

    function Qz(zz) {
      let uz = zu(Iz(zz) + 1).map((() => []));
      return zz.nodes().forEach((bz => {
        let Ez = zz.node(bz),
          nz = Ez.rank;
        void 0 !== nz && (uz[nz] || (uz[nz] = []), uz[nz][Ez.order] = bz)
      })), uz
    }

    function Wz(zz, uz, bz, Ez) {
      let nz = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (nz.rank = bz, nz.order = Ez), Sz(zz, "border", nz, uz)
    }
    var ez = 65535;

    function jz(zz, uz) {
      if (uz.length > ez) {
        let bz = function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez,
            bz = [];
          for (let Ez = 0; Ez < zz.length; Ez += uz) {
            let nz = zz.slice(Ez, Ez + uz);
            bz.push(nz)
          }
          return bz
        }(uz);
        return zz(...bz.map((uz => zz(...uz))))
      }
      return zz(...uz)
    }

    function Iz(zz) {
      let uz = zz.nodes().map((uz => {
        let bz = zz.node(uz).rank;
        return void 0 === bz ? Number.MIN_VALUE : bz
      }));
      return jz(Math.max, uz)
    }

    function Bz(zz, uz) {
      let bz = Date.now();
      try {
        return uz()
      } finally {
        console.log(zz + " time: " + (Date.now() - bz) + "ms")
      }
    }

    function Cz(zz, uz) {
      return uz()
    }
    var Yz = 0;

    function kz(zz) {
      return zz + "" + ++Yz
    }

    function zu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == uz && (uz = zz, zz = 0);
      let Ez = zz => zz < uz;
      bz < 0 && (Ez = zz => uz < zz);
      let nz = [];
      for (let iz = zz; Ez(iz); iz += bz) nz.push(iz);
      return nz
    }

    function uu(zz, uz) {
      let bz = {};
      for (let Ez of uz) void 0 !== zz[Ez] && (bz[Ez] = zz[Ez]);
      return bz
    }

    function bu(zz, uz) {
      let bz;
      return bz = "string" == typeof uz ? zz => zz[uz] : uz, Object.entries(zz).reduce(((zz, uz) => {
        let [Ez, nz] = uz;
        return zz[Ez] = bz(nz, Ez), zz
      }), {})
    }
    var Eu = "\0";

    function nu(zz, uz, bz) {
      var Ez, nz, iz, lz, Mz, tz;
      if (!(zz && uz && bz && "edge" === uz.dummy && "edge" === bz.dummy && uz.edgeObj && bz.edgeObj && zz[uz.edgeObj.v] && zz[bz.edgeObj.v] && zz[uz.edgeObj.w] && zz[bz.edgeObj.w])) return 0;
      let Hz = !0;
      uz.edgeObj.w === bz.edgeObj.w && (Hz = !1);
      let Oz = Hz ? null != (nz = null == (Ez = zz[uz.edgeObj.v]) ? void 0 : Ez.rank) ? nz : NaN : null != (lz = null == (iz = zz[uz.edgeObj.w]) ? void 0 : iz.rank) ? lz : NaN,
        pz = Object.entries(zz).find((zz => {
          var bz, Ez;
          return (null == (bz = zz[1].edgeObj) ? void 0 : bz.v) === uz.edgeObj.v && (null == (Ez = zz[1].edgeObj) ? void 0 : Ez.w) === uz.edgeObj.w && zz[1].rank === Oz
        })),
        dz = Object.entries(zz).find((zz => {
          var uz, Ez;
          return (null == (uz = zz[1].edgeObj) ? void 0 : uz.v) === bz.edgeObj.v && (null == (Ez = zz[1].edgeObj) ? void 0 : Ez.w) === bz.edgeObj.w && zz[1].rank === Oz
        }));
      if (!pz || !dz) return 0;
      let Fz = null != (Mz = pz[1].order) ? Mz : NaN,
        Zz = null != (tz = dz[1].order) ? tz : NaN;
      return isNaN(Fz - Zz) ? 0 : Fz - Zz
    }
    var iu = "3.1.1";

    function lu(zz) {
      zz._prev._next = zz._next, zz._next._prev = zz._prev, delete zz._next, delete zz._prev
    }

    function Mu(zz, uz) {
      if ("_next" !== zz && "_prev" !== zz) return uz
    }
    var tu = class {
        constructor() {
          nz(this, "_sentinel");
          let zz = {};
          zz._next = zz._prev = zz, this._sentinel = zz
        }
        dequeue() {
          let zz = this._sentinel,
            uz = zz._prev;
          if (uz !== zz) return lu(uz), uz
        }
        enqueue(zz) {
          let uz = this._sentinel;
          zz._prev && zz._next && lu(zz), zz._next = uz._next, uz._next._prev = zz, uz._next = zz, zz._prev = uz
        }
        toString() {
          let zz = [],
            uz = this._sentinel,
            bz = uz._prev;
          for (; bz !== uz;) zz.push(JSON.stringify(bz, Mu)), bz = bz._prev;
          return "[" + zz.join(", ") + "]"
        }
      },
      Hu = () => 1;

    function Ou(zz, uz) {
      if (zz.nodeCount() <= 1) return [];
      let bz = function(zz, uz) {
        let bz = new gz,
          Ez = 0,
          nz = 0;
        zz.nodes().forEach((zz => {
          bz.setNode(zz, {
            v: zz,
            in: 0,
            out: 0
          })
        })), zz.edges().forEach((zz => {
          let iz = bz.edge(zz.v, zz.w) || 0,
            lz = uz(zz),
            Mz = iz + lz;
          bz.setEdge(zz.v, zz.w, Mz);
          let tz = bz.node(zz.v),
            Hz = bz.node(zz.w);
          nz = Math.max(nz, tz.out += lz), Ez = Math.max(Ez, Hz.in += lz)
        }));
        let iz = function(zz) {
            let uz = [];
            for (let bz = 0; bz < zz; bz++) uz.push(bz);
            return uz
          }(nz + Ez + 3).map((() => new tu)),
          lz = Ez + 1;
        return bz.nodes().forEach((zz => {
          du(iz, lz, bz.node(zz))
        })), {
          graph: bz,
          buckets: iz,
          zeroIdx: lz
        }
      }(zz, uz || Hu);
      return function(zz, uz, bz) {
        var Ez;
        let nz, iz = [],
          lz = uz[uz.length - 1],
          Mz = uz[0];
        for (; zz.nodeCount();) {
          for (; nz = Mz.dequeue();) pu(zz, uz, bz, nz);
          for (; nz = lz.dequeue();) pu(zz, uz, bz, nz);
          if (zz.nodeCount())
            for (let lz = uz.length - 2; lz > 0; --lz)
              if (nz = null == (Ez = uz[lz]) ? void 0 : Ez.dequeue(), nz) {
                iz = iz.concat(pu(zz, uz, bz, nz, !0) || []);
                break
              }
        }
        return iz
      }(bz.graph, bz.buckets, bz.zeroIdx).flatMap((uz => zz.outEdges(uz.v, uz.w) || []))
    }

    function pu(zz, uz, bz, Ez, nz) {
      let iz = [],
        lz = nz ? iz : void 0;
      return (zz.inEdges(Ez.v) || []).forEach((Ez => {
        let lz = zz.edge(Ez),
          Mz = zz.node(Ez.v);
        nz && iz.push({
          v: Ez.v,
          w: Ez.w
        }), Mz.out -= lz, du(uz, bz, Mz)
      })), (zz.outEdges(Ez.v) || []).forEach((Ez => {
        let nz = zz.edge(Ez),
          iz = Ez.w,
          lz = zz.node(iz);
        lz.in -= nz, du(uz, bz, lz)
      })), zz.removeNode(Ez.v), lz
    }

    function du(zz, uz, bz) {
      var Ez, nz, iz;
      bz.out ? bz.in ? null == (iz = zz[bz.out - bz.in + uz]) || iz.enqueue(bz) : null == (nz = zz[zz.length - 1]) || nz.enqueue(bz) : null == (Ez = zz[0]) || Ez.enqueue(bz)
    }

    function Fu(zz, uz) {
      var bz;
      ("greedy" === zz.graph().acyclicer ? Ou(zz, (bz = zz, zz => bz.edge(zz).weight)) : function(zz, uz) {
        let bz = [],
          Ez = {},
          nz = {};

        function iz(uz) {
          Object.hasOwn(nz, uz) || (nz[uz] = !0, Ez[uz] = !0, zz.outEdges(uz).forEach((zz => {
            Object.hasOwn(Ez, zz.w) ? bz.push(zz) : iz(zz.w)
          })), delete Ez[uz])
        }

        function lz(iz) {
          var Mz;
          Object.hasOwn(nz, iz) || (nz[iz] = !0, Ez[iz] = !0, null == (Mz = zz.outEdges(iz)) || Mz.forEach((nz => {
            var Mz, tz;
            Object.hasOwn(Ez, nz.w) || (null == (Mz = uz.node(iz)) ? void 0 : Mz.rank) > (null == (tz = uz.node(nz.w)) ? void 0 : tz.rank) && function(zz, uz, bz) {
              let Ez = new Set;

              function nz(uz) {
                var iz;
                if (zz.sources().includes(uz)) return !0;
                Ez.add(uz);
                for (let lz of null != (iz = zz.inEdges(uz)) ? iz : [])
                  if ((lz.v !== bz.v || lz.w !== bz.w) && !Ez.has(lz.v) && nz(lz.v)) return !0;
                return !1
              }
              return nz(uz)
            }(zz, nz.w, nz) ? bz.push(nz) : lz(nz.w)
          })), delete Ez[iz])
        }
        let Mz = iz;
        return uz && "function" == typeof uz.node && (Mz = lz), zz.sources().forEach(Mz), zz.nodes().forEach(Mz), bz
      }(zz, null != uz ? uz : null)).forEach((uz => {
        let bz = zz.edge(uz);
        zz.removeEdge(uz), bz.forwardName = uz.name, bz.reversed = !0, zz.setEdge(uz.w, uz.v, bz, kz("rev"))
      }))
    }

    function Zu(zz) {
      zz.graph().dummyChains = [], zz.edges().forEach((uz => function(zz, uz) {
        let bz, Ez, nz, iz = uz.v,
          lz = zz.node(iz).rank,
          Mz = uz.w,
          tz = zz.node(Mz).rank,
          Hz = uz.name,
          Oz = zz.edge(uz),
          pz = Oz.labelRank;
        if (tz === lz + 1) return;
        for (zz.removeEdge(uz), nz = 0, ++lz; lz < tz; ++nz, ++lz) Oz.points = [], Ez = {
          width: 0,
          height: 0,
          edgeLabel: Oz,
          edgeObj: uz,
          rank: lz
        }, bz = Sz(zz, "edge", Ez, "_d"), lz === pz && (Ez.width = Oz.width, Ez.height = Oz.height, Ez.dummy = "edge-label", Ez.labelpos = Oz.labelpos), zz.setEdge(iz, bz, {
          weight: Oz.weight
        }, Hz), 0 === nz && zz.graph().dummyChains.push(bz), iz = bz;
        zz.setEdge(iz, Mz, {
          weight: Oz.weight
        }, Hz)
      }(zz, uz)))
    }

    function Ru(zz) {
      let uz = {};
      zz.sources().forEach((function bz(Ez) {
        let nz = zz.node(Ez);
        if (Object.hasOwn(uz, Ez)) return nz.rank;
        uz[Ez] = !0;
        let iz = zz.outEdges(Ez),
          lz = iz ? iz.map((uz => null == uz ? Number.POSITIVE_INFINITY : bz(uz.w) - zz.edge(uz).minlen)) : [],
          Mz = jz(Math.min, lz);
        return Mz === Number.POSITIVE_INFINITY && (Mz = 0), nz.rank = Mz
      }))
    }

    function Ku(zz, uz) {
      return zz.node(uz.w).rank - zz.node(uz.v).rank - zz.edge(uz).minlen
    }
    var wu = function(zz) {
      let uz = new gz({
          directed: !1
        }),
        bz = zz.nodes();
      if (0 === bz.length) throw new Error("Graph must have at least one node");
      let Ez, nz, iz = bz[0],
        lz = zz.nodeCount();
      for (uz.setNode(iz, {}); Xu(uz, zz) < lz && (Ez = fu(uz, zz), Ez);) nz = uz.hasNode(Ez.v) ? Ku(zz, Ez) : -Ku(zz, Ez), su(uz, zz, nz);
      return uz
    };

    function Xu(zz, uz) {
      return zz.nodes().forEach((function bz(Ez) {
        let nz = uz.nodeEdges(Ez);
        nz && nz.forEach((nz => {
          let iz = nz.v,
            lz = Ez === iz ? nz.w : iz;
          !zz.hasNode(lz) && !Ku(uz, nz) && (zz.setNode(lz, {}), zz.setEdge(Ez, lz, {}), bz(lz))
        }))
      })), zz.nodeCount()
    }

    function fu(zz, uz) {
      return uz.edges().reduce(((bz, Ez) => {
        let nz = Number.POSITIVE_INFINITY;
        return zz.hasNode(Ez.v) !== zz.hasNode(Ez.w) && (nz = Ku(uz, Ez)), nz < bz[0] ? [nz, Ez] : bz
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function su(zz, uz, bz) {
      zz.nodes().forEach((zz => uz.node(zz).rank += bz))
    }
    var {
      preorder: ru,
      postorder: ou
    } = wz, Nu = vu;

    function vu(zz) {
      zz = function(zz) {
        let uz = (new gz).setGraph(zz.graph());
        return zz.nodes().forEach((bz => uz.setNode(bz, zz.node(bz)))), zz.edges().forEach((bz => {
          let Ez = uz.edge(bz.v, bz.w) || {
              weight: 0,
              minlen: 1
            },
            nz = zz.edge(bz);
          uz.setEdge(bz.v, bz.w, {
            weight: Ez.weight + nz.weight,
            minlen: Math.max(Ez.minlen, nz.minlen)
          })
        })), uz
      }(zz), Ru(zz);
      let uz, bz, Ez = wu(zz);
      for (Au(Ez), xu(Ez, zz); uz = Lu(Ez);) bz = Pu(Ez, zz, uz), Gu(Ez, zz, uz, bz)
    }

    function xu(zz, uz) {
      let bz = ou(zz, zz.nodes());
      bz = bz.slice(0, bz.length - 1), bz.forEach((bz => function(zz, uz, bz) {
        let Ez = zz.node(bz).parent,
          nz = zz.edge(bz, Ez);
        nz.cutvalue = Ju(zz, uz, bz)
      }(zz, uz, bz)))
    }

    function Ju(zz, uz, bz) {
      let Ez = zz.node(bz).parent,
        nz = !0,
        iz = uz.edge(bz, Ez),
        lz = 0;
      iz || (nz = !1, iz = uz.edge(Ez, bz)), lz = iz.weight;
      let Mz = uz.nodeEdges(bz);
      return Mz && Mz.forEach((iz => {
        let Mz = iz.v === bz,
          tz = Mz ? iz.w : iz.v;
        if (tz !== Ez) {
          let Ez = Mz === nz,
            Hz = uz.edge(iz).weight;
          if (lz += Ez ? Hz : -Hz, function(zz, uz, bz) {
              return zz.hasEdge(uz, bz)
            }(zz, bz, tz)) {
            let uz = zz.edge(bz, tz).cutvalue;
            lz += Ez ? -uz : uz
          }
        }
      })), lz
    }

    function Au(zz, uz) {
      arguments.length < 2 && (uz = zz.nodes()[0]), Tu(zz, {}, 1, uz)
    }

    function Tu(zz, uz, bz, Ez, nz) {
      let iz = bz,
        lz = zz.node(Ez);
      uz[Ez] = !0;
      let Mz = zz.neighbors(Ez);
      return Mz && Mz.forEach((nz => {
        Object.hasOwn(uz, nz) || (bz = Tu(zz, uz, bz, nz, Ez))
      })), lz.low = iz, lz.lim = bz++, nz ? lz.parent = nz : delete lz.parent, bz
    }

    function Lu(zz) {
      return zz.edges().find((uz => zz.edge(uz).cutvalue < 0))
    }

    function Pu(zz, uz, bz) {
      let Ez = bz.v,
        nz = bz.w;
      uz.hasEdge(Ez, nz) || (Ez = bz.w, nz = bz.v);
      let iz = zz.node(Ez),
        lz = zz.node(nz),
        Mz = iz,
        tz = !1;
      return iz.lim > lz.lim && (Mz = lz, tz = !0), uz.edges().filter((uz => tz === au(zz, zz.node(uz.v), Mz) && tz !== au(zz, zz.node(uz.w), Mz))).reduce(((zz, bz) => Ku(uz, bz) < Ku(uz, zz) ? bz : zz))
    }

    function Gu(zz, uz, bz, Ez) {
      let nz = bz.v,
        iz = bz.w;
      zz.removeEdge(nz, iz), zz.setEdge(Ez.v, Ez.w, {}), Au(zz), xu(zz, uz),
        function(zz, uz) {
          let bz = zz.nodes().find((uz => !zz.node(uz).parent));
          if (!bz) return;
          let Ez = ru(zz, [bz]);
          Ez = Ez.slice(1), Ez.forEach((bz => {
            let Ez = zz.node(bz).parent,
              nz = uz.edge(bz, Ez),
              iz = !1;
            nz || (nz = uz.edge(Ez, bz), iz = !0), uz.node(bz).rank = uz.node(Ez).rank + (iz ? nz.minlen : -nz.minlen)
          }))
        }(zz, uz)
    }

    function au(zz, uz, bz) {
      return bz.low <= uz.lim && uz.lim <= bz.lim
    }
    vu.initLowLimValues = Au, vu.initCutValues = xu, vu.calcCutValue = Ju, vu.leaveEdge = Lu, vu.enterEdge = Pu, vu.exchangeEdges = Gu;
    var Vu = function(zz) {
      let uz = zz.graph().ranker;
      if ("function" == typeof uz) return uz(zz);
      switch (uz) {
        case "network-simplex":
        default:
          qu(zz);
          break;
        case "tight-tree":
          ! function(zz) {
            Ru(zz), wu(zz)
          }(zz);
          break;
        case "longest-path":
          mu(zz);
        case "none":
      }
    };
    var mu = Ru;

    function qu(zz) {
      Nu(zz)
    }
    var hu = function(zz) {
      let uz = function(zz) {
          let uz = {},
            bz = 0;

          function Ez(nz) {
            let iz = bz;
            zz.children(nz).forEach(Ez), uz[nz] = {
              low: iz,
              lim: bz++
            }
          }
          return zz.children(Eu).forEach(Ez), uz
        }(zz),
        bz = zz.graph();
      if (!Array.isArray(bz.dummyChains)) return;
      bz.dummyChains.forEach((bz => {
        let Ez = zz.node(bz),
          nz = Ez.edgeObj,
          iz = function(zz, uz, bz, Ez) {
            let nz, iz = [],
              lz = [],
              Mz = Math.min(uz[bz].low, uz[Ez].low),
              tz = Math.max(uz[bz].lim, uz[Ez].lim);
            nz = bz;
            do {
              nz = zz.parent(nz), iz.push(nz)
            } while (nz && (uz[nz].low > Mz || tz > uz[nz].lim));
            let Hz = nz,
              Oz = Ez;
            for (;
              (Oz = zz.parent(Oz)) !== Hz;) lz.push(Oz);
            return {
              path: iz.concat(lz.reverse()),
              lca: Hz
            }
          }(zz, uz, nz.v, nz.w),
          lz = iz.path,
          Mz = iz.lca,
          tz = 0,
          Hz = lz[tz],
          Oz = !0;
        for (; bz !== nz.w;) {
          if (Ez = zz.node(bz), Oz) {
            for (;
              (Hz = lz[tz]) !== Mz && zz.node(Hz).maxRank < Ez.rank;) tz++;
            Hz === Mz && (Oz = !1)
          }
          if (!Oz) {
            for (; tz < lz.length - 1 && zz.node(lz[tz + 1]).minRank <= Ez.rank;) tz++;
            Hz = lz[tz]
          }
          void 0 !== Hz && zz.setParent(bz, Hz), bz = zz.successors(bz)[0]
        }
      }))
    };

    function Uu(zz) {
      let uz = Sz(zz, "root", {}, "_root"),
        bz = function(zz) {
          let uz = {};

          function bz(Ez, nz) {
            let iz = zz.children(Ez);
            iz && iz.length && iz.forEach((zz => bz(zz, nz + 1))), uz[Ez] = nz
          }
          return zz.children(Eu).forEach((zz => bz(zz, 1))), uz
        }(zz),
        Ez = Object.values(bz),
        nz = jz(Math.max, Ez) - 1,
        iz = 2 * nz + 1;
      zz.graph().nestingRoot = uz, zz.edges().forEach((uz => zz.edge(uz).minlen *= iz));
      let lz = function(zz) {
        return zz.edges().reduce(((uz, bz) => uz + zz.edge(bz).weight), 0)
      }(zz) + 1;
      zz.children(Eu).forEach((Ez => {
        cu(zz, uz, iz, lz, nz, bz, Ez)
      })), zz.graph().nodeRankFactor = iz
    }

    function cu(zz, uz, bz, Ez, nz, iz, lz) {
      var Mz;
      let tz = zz.children(lz);
      if (!tz.length) return void(lz !== uz && zz.setEdge(uz, lz, {
        weight: 0,
        minlen: bz
      }));
      let Hz = Wz(zz, "_bt"),
        Oz = Wz(zz, "_bb"),
        pz = zz.node(lz);
      zz.setParent(Hz, lz), pz.borderTop = Hz, zz.setParent(Oz, lz), pz.borderBottom = Oz, tz.forEach((Mz => {
        var tz;
        cu(zz, uz, bz, Ez, nz, iz, Mz);
        let pz = zz.node(Mz),
          dz = pz.borderTop ? pz.borderTop : Mz,
          Fz = pz.borderBottom ? pz.borderBottom : Mz,
          Zz = pz.borderTop ? Ez : 2 * Ez,
          Rz = dz !== Fz ? 1 : nz - (null != (tz = iz[lz]) ? tz : 0) + 1;
        zz.setEdge(Hz, dz, {
          weight: Zz,
          minlen: Rz,
          nestingEdge: !0
        }), zz.setEdge(Fz, Oz, {
          weight: Zz,
          minlen: Rz,
          nestingEdge: !0
        })
      })), zz.parent(lz) || zz.setEdge(uz, Hz, {
        weight: 0,
        minlen: nz + (null != (Mz = iz[lz]) ? Mz : 0)
      })
    }
    var gu = function(zz) {
      zz.children(Eu).forEach((function uz(bz) {
        let Ez = zz.children(bz),
          nz = zz.node(bz);
        if (Ez.length && Ez.forEach(uz), nz && Object.hasOwn(nz, "minRank")) {
          nz.borderLeft = [], nz.borderRight = [];
          for (let uz = nz.minRank, Ez = nz.maxRank + 1; uz < Ez; ++uz) Su(zz, "borderLeft", "_bl", bz, nz, uz), Su(zz, "borderRight", "_br", bz, nz, uz)
        }
      }))
    };

    function Su(zz, uz, bz, Ez, nz, iz) {
      let lz = {
          width: 0,
          height: 0,
          rank: iz,
          borderType: uz
        },
        Mz = nz[uz][iz - 1],
        tz = Sz(zz, "border", lz, bz);
      nz[uz][iz] = tz, zz.setParent(tz, Ez), Mz && zz.setEdge(Mz, tz, {
        weight: 1
      })
    }

    function yu(zz) {
      var uz;
      let bz = null == (uz = zz.graph().rankdir) ? void 0 : uz.toLowerCase();
      ("bt" === bz || "rl" === bz) && function(zz) {
        zz.nodes().forEach((uz => Wu(zz.node(uz)))), zz.edges().forEach((uz => {
          var bz;
          let Ez = zz.edge(uz);
          null == (bz = Ez.points) || bz.forEach(Wu), Object.hasOwn(Ez, "y") && Wu(Ez)
        }))
      }(zz), ("lr" === bz || "rl" === bz) && (function(zz) {
        zz.nodes().forEach((uz => eu(zz.node(uz)))), zz.edges().forEach((uz => {
          var bz;
          let Ez = zz.edge(uz);
          null == (bz = Ez.points) || bz.forEach(eu), Object.hasOwn(Ez, "x") && eu(Ez)
        }))
      }(zz), Du(zz))
    }

    function Du(zz) {
      zz.nodes().forEach((uz => Qu(zz.node(uz)))), zz.edges().forEach((uz => Qu(zz.edge(uz))))
    }

    function Qu(zz) {
      let uz = zz.width;
      zz.width = zz.height, zz.height = uz
    }

    function Wu(zz) {
      zz.y = -zz.y
    }

    function eu(zz) {
      let uz = zz.x;
      zz.x = zz.y, zz.y = uz
    }

    function ju(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        bz = {},
        Ez = zz.nodes().filter((uz => !zz.children(uz).length)),
        nz = Ez.map((uz => zz.node(uz).rank)),
        iz = zu(jz(Math.max, nz) + 1).map((() => []));
      return Ez.sort(((uz, bz) => zz.node(uz).rank - zz.node(bz).rank)).forEach((function Ez(nz) {
        if (bz[nz]) return;
        bz[nz] = !0;
        let lz = zz.node(nz);
        iz[lz.rank].push(nz);
        let Mz = zz.successors(nz);
        Mz && [...Mz].sort(((bz, Ez) => function(bz, Ez) {
          let nz = zz.node(bz),
            iz = zz.node(Ez);
          return nu(uz, nz, iz)
        }(bz, Ez))).forEach(Ez)
      })), iz
    }

    function Iu(zz, uz) {
      let bz = 0;
      for (let Ez = 1; Ez < uz.length; ++Ez) bz += Bu(zz, uz[Ez - 1], uz[Ez]);
      return bz
    }

    function Bu(zz, uz, bz) {
      let Ez = function(zz, uz) {
          return zz.reduce(((zz, bz, Ez) => (zz[bz] = uz[Ez], zz)), {})
        }(bz, bz.map(((zz, uz) => uz))),
        nz = uz.flatMap((uz => {
          let bz = zz.outEdges(uz);
          return bz ? bz.map((uz => ({
            pos: Ez[uz.w],
            weight: zz.edge(uz).weight
          }))).sort(((zz, uz) => zz.pos - uz.pos)) : []
        })),
        iz = 1;
      for (; iz < bz.length;) iz <<= 1;
      let lz = 2 * iz - 1;
      iz -= 1;
      let Mz = new Array(lz).fill(0),
        tz = 0;
      return nz.forEach((zz => {
        let uz = zz.pos + iz;
        Mz[uz] += zz.weight;
        let bz = 0;
        for (; uz > 0;) uz % 2 && (bz += Mz[uz + 1]), uz = uz - 1 >> 1, Mz[uz] += zz.weight;
        tz += zz.weight * bz
      })), tz
    }

    function Cu(zz, uz) {
      let bz = {};
      return zz.forEach(((zz, uz) => {
          let Ez = {
            indegree: 0,
            in: [],
            out: [],
            vs: [zz.v],
            i: uz
          };
          void 0 !== zz.barycenter && (Ez.barycenter = zz.barycenter, Ez.weight = zz.weight), bz[zz.v] = Ez
        })), uz.edges().forEach((zz => {
          let uz = bz[zz.v],
            Ez = bz[zz.w];
          void 0 !== uz && void 0 !== Ez && (Ez.indegree++, uz.out.push(Ez))
        })),
        function(zz) {
          let uz = [];

          function bz(zz) {
            return uz => {
              uz.merged || (void 0 === uz.barycenter || void 0 === zz.barycenter || uz.barycenter >= zz.barycenter) && function(zz, uz) {
                let bz = 0,
                  Ez = 0;
                zz.weight && (bz += zz.barycenter * zz.weight, Ez += zz.weight), uz.weight && (bz += uz.barycenter * uz.weight, Ez += uz.weight), zz.vs = uz.vs.concat(zz.vs), zz.barycenter = bz / Ez, zz.weight = Ez, zz.i = Math.min(uz.i, zz.i), uz.merged = !0
              }(zz, uz)
            }
          }

          function Ez(uz) {
            return bz => {
              bz.in.push(uz), 0 === --bz.indegree && zz.push(bz)
            }
          }
          for (; zz.length;) {
            let nz = zz.pop();
            uz.push(nz), nz.in.reverse().forEach(bz(nz)), nz.out.forEach(Ez(nz))
          }
          return uz.filter((zz => !zz.merged)).map((zz => uu(zz, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(bz).filter((zz => !zz.indegree)))
    }

    function Yu(zz, uz, bz, Ez, nz) {
      let iz = {},
        lz = null,
        Mz = null,
        tz = nz;
      "boolean" == typeof uz ? (tz = uz, iz = {}) : uz && (iz = uz, lz = null != bz ? bz : null, Mz = null != Ez ? Ez : null);
      let Hz = function(zz, uz) {
          let bz = {
            lhs: [],
            rhs: []
          };
          return zz.forEach((zz => {
            uz(zz) ? bz.lhs.push(zz) : bz.rhs.push(zz)
          })), bz
        }(zz, (zz => Object.hasOwn(zz, "barycenter"))),
        Oz = Hz.lhs,
        pz = Hz.rhs.sort(((zz, uz) => uz.i - zz.i)),
        dz = [],
        Fz = 0,
        Zz = 0,
        Rz = 0;
      Oz.sort(function(zz, uz, bz) {
        return (Ez, nz) => {
          if (Ez.barycenter < nz.barycenter) return -1;
          if (Ez.barycenter > nz.barycenter) return 1;
          if (zz && ("string" == typeof Ez.vs[0] || "string" == typeof nz.vs[0])) {
            let bz = zz.node(Ez.vs[0]),
              iz = zz.node(nz.vs[0]),
              lz = nu(uz, bz, iz);
            if (0 !== lz) return lz
          }
          return bz ? nz.i - Ez.i : Ez.i - nz.i
        }
      }(Mz, lz, !!tz));
      for (let [wz, Xz] of Object.entries(iz)) {
        let zz = Oz.findIndex((zz => zz.vs[0] === wz));
        Oz.splice(zz + 1, 0, Xz)
      }
      Rz = ku(dz, pz, Rz), Oz.forEach((zz => {
        Rz += zz.vs.length, dz.push(zz.vs), Fz += zz.barycenter * zz.weight, Zz += zz.weight, Rz = ku(dz, pz, Rz)
      }));
      let Kz = {
        vs: dz.flat(1)
      };
      return Zz && (Kz.barycenter = Fz / Zz, Kz.weight = Zz), Kz
    }

    function ku(zz, uz, bz) {
      let Ez;
      for (; uz.length && (Ez = uz[uz.length - 1]).i <= bz;) uz.pop(), zz.push(Ez.vs), bz++;
      return bz
    }

    function zb(zz, uz, bz, Ez, nz) {
      var iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz;
      let Kz = null,
        wz = nz;
      "boolean" == typeof Ez ? (wz = Ez, Kz = null) : void 0 !== Ez && (Kz = Ez);
      let Xz = zz.children(uz),
        fz = zz.node(uz),
        sz = fz ? fz.borderLeft : void 0,
        rz = fz ? fz.borderRight : void 0,
        oz = {};
      sz && (Xz = Xz.filter((zz => zz !== sz && zz !== rz)));
      let Nz = function(zz) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((uz => {
          let bz = zz.inEdges(uz);
          if (!bz || !bz.length) return {
            v: uz
          };
          {
            let Ez = bz.reduce(((uz, bz) => {
              let Ez = zz.edge(bz),
                nz = zz.node(bz.v);
              return {
                sum: uz.sum + Ez.weight * nz.order,
                weight: uz.weight + Ez.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: uz,
              barycenter: Ez.sum / Ez.weight,
              weight: Ez.weight
            }
          }
        }))
      }(zz, Xz);
      Nz.forEach((uz => {
        if (zz.children(uz.v).length) {
          let {
            result: Ez
          } = zb(zz, uz.v, bz, Kz, wz);
          oz[uz.v] = Ez, Object.hasOwn(Ez, "barycenter") && function(zz, uz) {
            void 0 !== zz.barycenter ? (zz.barycenter = (zz.barycenter * zz.weight + uz.barycenter * uz.weight) / (zz.weight + uz.weight), zz.weight += uz.weight) : (zz.barycenter = uz.barycenter, zz.weight = uz.weight)
          }(uz, Ez)
        }
      }));
      let vz = Cu(Nz, bz);
      ! function(zz, uz) {
        zz.forEach((zz => {
          zz.vs = zz.vs.flatMap((zz => uz[zz] ? uz[zz].vs : zz))
        }))
      }(vz, oz);
      let xz = {},
        Jz = !1;
      for (let Tz = 0; Tz < vz.length; Tz++)
        for (let uz = Tz + 1; uz < vz.length; uz++)
          if (vz[Tz] && vz[uz] && null != (iz = vz[Tz]) && iz.barycenter && null != (lz = vz[uz]) && lz.barycenter && (null == (Mz = vz[Tz]) ? void 0 : Mz.barycenter) === vz[uz].barycenter) {
            let bz = null != (Hz = null == (tz = vz[Tz]) ? void 0 : tz.vs[0]) ? Hz : "",
              Ez = null != (pz = null == (Oz = vz[uz]) ? void 0 : Oz.vs[0]) ? pz : "",
              nz = zz.node(bz),
              iz = zz.node(Ez);
            if ("edge" === nz.dummy && "edge" === iz.dummy && (null == (dz = nz.edgeObj) ? void 0 : dz.v) === (null == (Fz = iz.edgeObj) ? void 0 : Fz.v) && (null == (Zz = nz.edgeObj) ? void 0 : Zz.w) === (null == (Rz = iz.edgeObj) ? void 0 : Rz.w)) {
              if (nz.edgeLabel.reversed) {
                xz[Ez] = vz[Tz], vz.splice(Tz, 1), Tz--;
                break
              }
              xz[bz] = vz[uz], vz.splice(uz, 1), uz--
            } else Jz = !0
          } let Az = Yu(vz, xz, Kz, zz, wz);
      if (sz && rz) {
        Az.vs = [sz, Az.vs, rz].flat(1);
        let uz = zz.predecessors(sz);
        if (uz && uz.length) {
          let bz = zz.node(uz[0]),
            Ez = zz.predecessors(rz),
            nz = zz.node(Ez[0]);
          Object.hasOwn(Az, "barycenter") || (Az.barycenter = 0, Az.weight = 0), Az.barycenter = (Az.barycenter * Az.weight + bz.order + nz.order) / (Az.weight + 2), Az.weight += 2
        }
      }
      return Object.defineProperty(Az, "result", {
        value: Az,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Az, "usedBias", {
        value: Jz,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Az
    }

    function ub(zz, uz, bz, Ez) {
      Ez || (Ez = zz.nodes());
      let nz = function(zz) {
          let uz;
          for (; zz.hasNode(uz = kz("_root")););
          return uz
        }(zz),
        iz = new gz({
          compound: !0
        }).setGraph({
          root: nz
        }).setDefaultNodeLabel((uz => zz.node(uz)));
      return Ez.forEach((Ez => {
        let lz = zz.node(Ez),
          Mz = zz.parent(Ez);
        if (lz.rank === uz || lz.minRank <= uz && uz <= lz.maxRank) {
          iz.setNode(Ez), iz.setParent(Ez, Mz || nz);
          let tz = zz[bz](Ez);
          tz && tz.forEach((uz => {
            let bz = uz.v === Ez ? uz.w : uz.v,
              nz = iz.edge(bz, Ez),
              lz = void 0 !== nz ? nz.weight : 0;
            iz.setEdge(bz, Ez, {
              weight: zz.edge(uz).weight + lz
            })
          })), Object.hasOwn(lz, "minRank") && iz.setNode(Ez, {
            borderLeft: lz.borderLeft[uz],
            borderRight: lz.borderRight[uz]
          })
        }
      })), iz
    }

    function bb(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof uz.customOrder) return void uz.customOrder(zz, bb);
      let Ez = Iz(zz),
        nz = Eb(zz, zu(1, Ez + 1), "inEdges"),
        iz = Eb(zz, zu(Ez - 1, -1, -1), "outEdges"),
        lz = ju(zz, bz);
      if (ib(zz, lz), uz.disableOptimalOrderHeuristic) return;
      let Mz, tz = Number.POSITIVE_INFINITY,
        Hz = uz.constraints || [];
      for (let Oz = 0, pz = 0; pz < 4; ++Oz, ++pz) {
        nb(Oz % 2 ? nz : iz, Oz % 4 >= 2, Hz, bz), lz = Qz(zz);
        let uz = Iu(zz, lz);
        uz < tz ? (pz = 0, Mz = Object.assign({}, lz), tz = uz) : uz === tz && (Mz = structuredClone(lz))
      }
      ib(zz, Mz)
    }

    function Eb(zz, uz, bz) {
      let Ez = new Map,
        nz = (zz, uz) => {
          Ez.has(zz) || Ez.set(zz, []), Ez.get(zz).push(uz)
        };
      for (let iz of zz.nodes()) {
        let uz = zz.node(iz);
        if ("number" == typeof uz.rank && nz(uz.rank, iz), "number" == typeof uz.minRank && "number" == typeof uz.maxRank)
          for (let zz = uz.minRank; zz <= uz.maxRank; zz++) zz !== uz.rank && nz(zz, iz)
      }
      return uz.map((function(uz) {
        return ub(zz, uz, bz, Ez.get(uz) || [])
      }))
    }

    function nb(zz, uz, bz, Ez) {
      let nz = !0,
        iz = new gz;
      zz.forEach((function(zz) {
        bz.forEach((zz => iz.setEdge(zz.left, zz.right)));
        let lz = zz.graph().root,
          {
            result: Mz,
            usedBias: tz
          } = zb(zz, lz, iz, Ez, nz);
        uz && tz && (nz = !nz), Mz.vs.forEach(((uz, bz) => zz.node(uz).order = bz)),
          function(zz, uz, bz) {
            let Ez, nz = {};
            bz.forEach((bz => {
              let iz, lz, Mz = zz.parent(bz);
              for (; Mz;) {
                if (iz = zz.parent(Mz), iz ? (lz = nz[iz], nz[iz] = Mz) : (lz = Ez, Ez = Mz), lz && lz !== Mz) return void uz.setEdge(lz, Mz);
                Mz = iz
              }
            }))
          }(zz, iz, Mz.vs)
      }))
    }

    function ib(zz, uz) {
      Object.values(uz).forEach((uz => uz.forEach(((uz, bz) => zz.node(uz).order = bz))))
    }

    function lb(zz, uz, bz) {
      if (uz > bz) {
        let zz = uz;
        uz = bz, bz = zz
      }
      let Ez = zz[uz];
      Ez || (zz[uz] = Ez = {}), Ez[bz] = !0
    }

    function Mb(zz, uz, bz) {
      if (uz > bz) {
        let zz = uz;
        uz = bz, bz = zz
      }
      let Ez = zz[uz];
      return void 0 !== Ez && Object.hasOwn(Ez, bz)
    }

    function tb(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        iz = {},
        lz = function(zz, uz, bz, Ez) {
          let nz = new gz,
            iz = zz.graph(),
            lz = function(zz, uz, bz) {
              return (Ez, nz, iz) => {
                let lz, Mz = Ez.node(nz),
                  tz = Ez.node(iz),
                  Hz = 0;
                if (Hz += Mz.width / 2, Object.hasOwn(Mz, "labelpos")) switch (Mz.labelpos.toLowerCase()) {
                  case "l":
                    lz = -Mz.width / 2;
                    break;
                  case "r":
                    lz = Mz.width / 2
                }
                if (lz && (Hz += bz ? lz : -lz), lz = void 0, Hz += (Mz.dummy ? uz : zz) / 2, Hz += (tz.dummy ? uz : zz) / 2, Hz += tz.width / 2, Object.hasOwn(tz, "labelpos")) switch (tz.labelpos.toLowerCase()) {
                  case "l":
                    lz = tz.width / 2;
                    break;
                  case "r":
                    lz = -tz.width / 2
                }
                return lz && (Hz += bz ? lz : -lz), Hz
              }
            }(iz.nodesep, iz.edgesep, Ez);
          return uz.forEach((uz => {
            let Ez;
            uz.forEach((uz => {
              let iz = bz[uz];
              if (void 0 !== iz) {
                if (nz.setNode(iz), void 0 !== Ez) {
                  let Mz = bz[Ez];
                  if (void 0 !== Mz) {
                    let bz = nz.edge(Mz, iz);
                    nz.setEdge(Mz, iz, Math.max(lz(zz, uz, Ez), bz || 0))
                  }
                }
                Ez = uz
              }
            }))
          })), nz
        }(zz, uz, bz, nz),
        Mz = nz ? "borderLeft" : "borderRight";

      function tz(zz, uz) {
        let bz = lz.nodes().slice(),
          Ez = {},
          nz = bz.pop();
        for (; nz;) {
          if (Ez[nz]) zz(nz);
          else {
            Ez[nz] = !0, bz.push(nz);
            for (let zz of uz(nz)) bz.push(zz)
          }
          nz = bz.pop()
        }
      }
      return tz((function(zz) {
        let uz = lz.inEdges(zz);
        iz[zz] = uz ? uz.reduce(((zz, uz) => {
          var bz;
          let Ez = null != (bz = iz[uz.v]) ? bz : 0,
            nz = lz.edge(uz);
          return Math.max(zz, Ez + (void 0 !== nz ? nz : 0))
        }), 0) : 0
      }), (function(zz) {
        return lz.predecessors(zz) || []
      })), tz((function(uz) {
        let bz = lz.outEdges(uz),
          Ez = Number.POSITIVE_INFINITY;
        bz && (Ez = bz.reduce(((zz, uz) => {
          let bz = iz[uz.w],
            Ez = lz.edge(uz);
          return Math.min(zz, (void 0 !== bz ? bz : 0) - (void 0 !== Ez ? Ez : 0))
        }), Number.POSITIVE_INFINITY));
        let nz = zz.node(uz);
        Ez !== Number.POSITIVE_INFINITY && nz.borderType !== Mz && (iz[uz] = Math.max(void 0 !== iz[uz] ? iz[uz] : 0, Ez))
      }), (function(zz) {
        return lz.successors(zz) || []
      })), Object.keys(Ez).forEach((zz => {
        var uz;
        let Ez = bz[zz];
        void 0 !== Ez && (iz[zz] = null != (uz = iz[Ez]) ? uz : 0)
      })), iz
    }

    function Hb(zz, uz) {
      let bz, Ez = Qz(zz),
        nz = Object.assign(function(zz, uz) {
          let bz = {};
          return uz.length && uz.reduce((function(uz, Ez) {
            let nz = 0,
              iz = 0,
              lz = uz.length,
              Mz = Ez[Ez.length - 1];
            return Ez.forEach(((uz, tz) => {
              let Hz = function(zz, uz) {
                  if (zz.node(uz).dummy) {
                    let bz = zz.predecessors(uz);
                    if (bz) return bz.find((uz => zz.node(uz).dummy))
                  }
                }(zz, uz),
                Oz = Hz ? zz.node(Hz).order : lz;
              (Hz || uz === Mz) && (Ez.slice(iz, tz + 1).forEach((uz => {
                let Ez = zz.predecessors(uz);
                Ez && Ez.forEach((Ez => {
                  let iz = zz.node(Ez),
                    lz = iz.order;
                  (lz < nz || Oz < lz) && (!iz.dummy || !zz.node(uz).dummy) && lb(bz, Ez, uz)
                }))
              })), iz = tz + 1, nz = Oz)
            })), Ez
          })), bz
        }(zz, Ez), function(zz, uz) {
          let bz = {};

          function Ez(uz, Ez, nz, iz, lz) {
            zu(Ez, nz).forEach((Ez => {
              let nz = uz[Ez];
              if (void 0 !== nz && zz.node(nz).dummy) {
                let uz = zz.predecessors(nz);
                uz && uz.forEach((uz => {
                  if (void 0 === uz) return;
                  let Ez = zz.node(uz);
                  Ez.dummy && (Ez.order < iz || Ez.order > lz) && lb(bz, uz, nz)
                }))
              }
            }))
          }
          return uz.length && uz.reduce((function(uz, bz) {
            let nz = -1,
              iz = -1,
              lz = 0;
            return bz.forEach(((Mz, tz) => {
              if ("border" === zz.node(Mz).dummy) {
                let uz = zz.predecessors(Mz);
                if (uz && uz.length) {
                  let Mz = uz[0];
                  if (void 0 === Mz) return;
                  iz = zz.node(Mz).order, Ez(bz, lz, tz, nz, iz), lz = tz, nz = iz
                }
              }
              Ez(bz, lz, bz.length, iz, uz.length)
            })), bz
          })), bz
        }(zz, Ez)),
        iz = {};
      ["u", "d"].forEach((lz => {
        bz = "u" === lz ? Ez : Object.values(Ez).reverse(), ["l", "r"].forEach((Ez => {
          "r" === Ez && (bz = bz.map((zz => Object.values(zz).reverse())));
          let Mz = function(zz, uz, bz, Ez, nz) {
              let iz = {},
                lz = {},
                Mz = {};
              return uz.forEach((zz => {
                zz.forEach(((zz, uz) => {
                  iz[zz] = zz, lz[zz] = zz, Mz[zz] = uz
                }))
              })), uz.forEach((uz => {
                let tz = -1,
                  Hz = -1,
                  Oz = !1,
                  pz = uz,
                  dz = uz.findIndex((uz => (null == nz ? void 0 : nz.includes(uz)) || Ob(uz, zz, nz)));
                dz > 0 && (pz = [uz[dz], ...uz.slice(0, dz), ...uz.slice(dz + 1)], Oz = !0), pz.forEach((uz => {
                  var pz;
                  let dz = Ez(uz);
                  if (dz && dz.length) {
                    null != nz && nz.includes(uz) && (dz = dz.filter((uz => Ob(uz, zz, nz))));
                    let Ez = dz.sort(((zz, uz) => {
                        let bz = Mz[zz],
                          Ez = Mz[uz];
                        return (void 0 !== bz ? bz : 0) - (void 0 !== Ez ? Ez : 0)
                      })),
                      Fz = (Ez.length - 1) / 2;
                    for (let zz = Math.floor(Fz), nz = Math.ceil(Fz); zz <= nz; ++zz) {
                      let nz = Ez[zz];
                      if (void 0 === nz) continue;
                      let dz = Mz[nz];
                      if (void 0 !== dz && lz[uz] === uz && tz < dz && Mz[nz] !== Hz && !Mb(bz, uz, nz)) {
                        let zz = iz[nz];
                        void 0 !== zz && (lz[nz] = uz, lz[uz] = iz[uz] = zz, tz = dz, Oz && (tz = -1, Hz = null != (pz = Mz[nz]) ? pz : -1, Oz = !1))
                      }
                    }
                  }
                }))
              })), {
                root: iz,
                align: lz
              }
            }(zz, bz, nz, (uz => ("u" === lz ? zz.predecessors(uz) : zz.successors(uz)) || []), uz),
            tz = tb(zz, bz, Mz.root, Mz.align, "r" === Ez);
          "r" === Ez && (tz = bu(tz, (zz => -zz))), iz[lz + Ez] = tz
        }))
      }));
      let lz = function(zz, uz) {
        return Object.values(uz).reduce(((uz, bz) => {
          let Ez = Number.NEGATIVE_INFINITY,
            nz = Number.POSITIVE_INFINITY;
          Object.entries(bz).forEach((uz => {
            let [bz, iz] = uz, lz = function(zz, uz) {
              return zz.node(uz).width
            }(zz, bz) / 2;
            Ez = Math.max(iz + lz, Ez), nz = Math.min(iz - lz, nz)
          }));
          let iz = Ez - nz;
          return iz < uz[0] && (uz = [iz, bz]), uz
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(zz, iz);
      return function(zz, uz) {
          let bz = Object.values(uz),
            Ez = jz(Math.min, bz),
            nz = jz(Math.max, bz);
          ["u", "d"].forEach((bz => {
            ["l", "r"].forEach((iz => {
              let lz = bz + iz,
                Mz = zz[lz];
              if (!Mz || Mz === uz) return;
              let tz = Object.values(Mz),
                Hz = Ez - jz(Math.min, tz);
              "l" !== iz && (Hz = nz - jz(Math.max, tz)), Hz && (zz[lz] = bu(Mz, (zz => zz + Hz)))
            }))
          }))
        }(iz, lz),
        function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            bz = zz.ul;
          return bz ? bu(bz, ((bz, Ez) => {
            var nz, iz;
            if (uz) {
              let bz = uz.toLowerCase(),
                nz = zz[bz];
              if (nz && void 0 !== nz[Ez]) return nz[Ez]
            }
            let lz = Object.values(zz).map((zz => {
              let uz = zz[Ez];
              return void 0 !== uz ? uz : 0
            })).sort(((zz, uz) => zz - uz));
            return ((null != (nz = lz[1]) ? nz : 0) + (null != (iz = lz[2]) ? iz : 0)) / 2
          })) : {}
        }(iz, zz.graph().align)
    }

    function Ob(zz, uz, bz) {
      var Ez;
      if (!bz) return !1;
      let nz = null == (Ez = uz.node(zz)) ? void 0 : Ez.edgeObj;
      if (!nz || uz.node(zz).edgeLabel.reversed) return !1;
      let iz = bz.indexOf(null == nz ? void 0 : nz.v),
        lz = bz.indexOf(null == nz ? void 0 : nz.w);
      return -1 !== iz && -1 !== lz && iz === (lz + 1) % bz.length || iz === (lz - 1) % bz.length
    }

    function pb(zz, uz) {
      (function(zz) {
        let uz = Qz(zz),
          bz = zz.graph(),
          Ez = bz.ranksep,
          nz = bz.rankalign,
          iz = 0;
        uz.forEach((uz => {
          let bz = uz.reduce(((uz, bz) => {
            var Ez;
            let nz = null != (Ez = zz.node(bz).height) ? Ez : 0;
            return uz > nz ? uz : nz
          }), 0);
          uz.forEach((uz => {
            let Ez = zz.node(uz);
            Ez.y = "top" === nz ? iz + Ez.height / 2 : "bottom" === nz ? iz + bz - Ez.height / 2 : iz + bz / 2
          })), iz += bz + Ez
        }))
      })(zz = yz(zz)), Object.entries(Hb(zz, uz)).forEach((uz => {
        let [bz, Ez] = uz;
        return zz.node(bz).x = Ez
      }))
    }
    var db = new WeakMap;

    function Fb(zz) {
      return Rb(zz, Cz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), zz
    }

    function Zb(zz, uz, bz) {
      let Ez = uz;
      for (; void 0 !== Ez;) {
        let uz = zz.parent(Ez);
        if (uz === bz) return Ez;
        Ez = uz
      }
    }

    function Rb(zz, uz, bz) {
      var Ez;
      let nz = zz.nodes().filter((uz => zz.children(uz).length)),
        iz = {};
      nz.forEach((Ez => {
        let nz = zz.node(Ez);
        if (nz && nz.rankdir) {
          let lz = new gz({
            multigraph: !0,
            compound: !0
          });
          lz.setGraph({
            rankdir: nz.rankdir
          });
          let Mz = zz.children(Ez);
          Mz.forEach((uz => {
            let bz = {
              ...zz.node(uz)
            };
            lz.setNode(uz, bz);
            let nz = zz.parent(uz);
            nz && nz !== Ez && Mz.includes(nz) && lz.setParent(uz, nz)
          }));
          let tz = new Set;
          zz.edges().forEach((uz => {
            let bz = Zb(zz, uz.v, Ez),
              nz = Zb(zz, uz.w, Ez);
            if (bz && nz && bz !== nz) {
              let Ez = `${bz}\0${nz}`;
              tz.has(Ez) || (tz.add(Ez), lz.setEdge(bz, nz, {
                ...zz.edge(uz)
              }))
            }
          })), Rb(lz, uz, bz);
          let Hz = Jb(lz);
          Kb(Hz, uz, bz, null), wb(lz, Hz);
          let Oz = 1 / 0,
            pz = 1 / 0,
            dz = -1 / 0,
            Fz = -1 / 0;
          lz.nodes().forEach((zz => {
            if (zz === Ez) return;
            let uz = lz.node(zz);
            uz && "number" == typeof uz.x && "number" == typeof uz.y && "number" == typeof uz.width && "number" == typeof uz.height && (Oz = Math.min(Oz, uz.x - uz.width / 2), dz = Math.max(dz, uz.x + uz.width / 2), pz = Math.min(pz, uz.y - uz.height / 2), Fz = Math.max(Fz, uz.y + uz.height / 2))
          })), (!isFinite(Oz) || !isFinite(pz) || !isFinite(dz) || !isFinite(Fz)) && (Oz = pz = 0, dz = Fz = 0);
          let Zz = dz - Oz,
            Rz = Fz - pz;
          iz[Ez] = {
            minX: Oz,
            GE: pz,
            maxX: dz,
            aE: Fz,
            width: Zz,
            height: Rz,
            offsetX: Oz,
            offsetY: pz
          }, nz._dagreClusterSubgraph = lz
        }
      }));
      let lz = [],
        Mz = new Map;
      nz.forEach((uz => {
        let bz = zz.node(uz);
        bz && bz.rankdir && iz[uz] && Mz.set(uz, (zz.children(uz) || []).filter((zz => zz !== uz)))
      }));
      let tz = new Set([...Mz.values()].flat()),
        Hz = new Map;
      Mz.forEach(((uz, bz) => {
        tz.has(bz) || Hz.set(bz, (uz => {
          let bz = [],
            Ez = (zz.children(uz) || []).filter((zz => zz !== uz));
          for (; Ez.length > 0;) {
            let uz = Ez.shift();
            bz.push(uz), (zz.children(uz) || []).filter((zz => zz !== uz)).forEach((zz => Ez.push(zz)))
          }
          return bz
        })(bz))
      }));
      let Oz = new Set([...Hz.values()].flat()),
        pz = zz => {
          for (let [uz, bz] of Hz)
            if (bz.includes(zz)) return uz;
          return zz
        },
        dz = [];
      zz.edges().forEach((uz => {
        (Oz.has(uz.v) || Oz.has(uz.w)) && dz.push({
          edge: uz,
          label: zz.edge(uz)
        })
      }));
      let Fz = new Map;
      Oz.forEach((uz => {
        let bz = zz.parent(uz);
        Fz.set(uz, "string" == typeof bz ? bz : void 0)
      })), Hz.forEach(((uz, bz) => {
        let Ez = zz.node(bz),
          nz = [];
        uz.forEach((uz => {
          let bz = zz.node(uz);
          bz && (nz.push({
            id: uz,
            node: bz,
            parent: Fz.get(uz)
          }), zz.removeNode(uz))
        }));
        let Mz = dz.filter((zz => {
            let {
              edge: bz
            } = zz;
            return uz.includes(bz.v) || uz.includes(bz.w)
          })),
          tz = iz[bz];
        Ez && (lz.push({
          clusterId: bz,
          subgraph: Ez._dagreClusterSubgraph,
          bounds: tz,
          children: uz,
          removedNodes: nz,
          removedEdges: Mz
        }), Ez.width = tz.width, Ez.height = tz.height)
      }));
      let Zz = new Set;
      dz.forEach((uz => {
        let {
          edge: bz,
          label: Ez
        } = uz, nz = pz(bz.v), iz = pz(bz.w);
        if (nz !== iz && zz.hasNode(nz) && zz.hasNode(iz)) {
          let uz = `${nz}\0${iz}`;
          Zz.has(uz) || (Zz.add(uz), zz.setEdge(nz, iz, {
            ...Ez,
            width: 0,
            height: 0
          }))
        }
      }));
      let Rz = Jb(zz),
        Kz = Kb(Rz, uz, bz, null != (Ez = db.get(zz)) ? Ez : null);
      db.set(zz, Kz), wb(zz, Rz), Zz.forEach((uz => {
        let bz = uz.indexOf("\0"),
          Ez = uz.slice(0, bz),
          nz = uz.slice(bz + 1);
        zz.hasEdge(Ez, nz) && zz.removeEdge(Ez, nz)
      })), lz.forEach((uz => {
        let {
          clusterId: bz,
          subgraph: Ez,
          bounds: nz,
          removedNodes: iz,
          removedEdges: lz
        } = uz;
        var Mz, tz;
        let Hz = zz.node(bz),
          Oz = null != (Mz = null == Hz ? void 0 : Hz.x) ? Mz : 0,
          pz = null != (tz = null == Hz ? void 0 : Hz.y) ? tz : 0,
          dz = (nz.minX + nz.maxX) / 2,
          Fz = (nz.GE + nz.aE) / 2;
        iz.forEach((uz => {
          let {
            id: bz,
            node: Ez,
            parent: nz
          } = uz;
          zz.setNode(bz, Ez), void 0 !== nz && zz.setParent(bz, nz)
        })), lz.forEach((uz => {
          let {
            edge: bz,
            label: Ez
          } = uz;
          zz.setEdge(bz, Ez)
        })), Ez.nodes().forEach((uz => {
          if (uz === bz) return;
          let nz = Ez.node(uz),
            iz = zz.node(uz);
          iz && nz && "number" == typeof nz.x && "number" == typeof nz.y && (iz.x = Oz + (nz.x - dz), iz.y = pz + (nz.y - Fz))
        })), delete Hz._dagreClusterSubgraph
      })), nz.forEach((uz => {
        var bz, Ez;
        let nz = zz.node(uz),
          lz = iz[uz];
        if (nz && nz.rankdir && nz._dagreClusterSubgraph && lz) {
          let iz = nz._dagreClusterSubgraph,
            Mz = null != (bz = nz.x) ? bz : 0,
            tz = null != (Ez = nz.y) ? Ez : 0,
            Hz = (lz.minX + lz.maxX) / 2,
            Oz = (lz.GE + lz.aE) / 2;
          iz.nodes().forEach((bz => {
            if (bz === uz) return;
            let Ez = iz.node(bz),
              nz = zz.node(bz);
            if (nz && Ez && "number" == typeof Ez.x && "number" == typeof Ez.y) {
              let zz = Ez.x - Hz,
                uz = Ez.y - Oz;
              nz.x = Mz + zz, nz.y = tz + uz
            }
          })), delete nz._dagreClusterSubgraph
        }
      }))
    }

    function Kb(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var nz, iz;
      let lz = !1 !== (null == bz ? void 0 : bz.useDynamic),
        Mz = lz && null != (nz = null == Ez ? void 0 : Ez.graph) ? nz : null,
        tz = lz && null != (iz = null == Ez ? void 0 : Ez.rawNodes) ? iz : null;
      uz("    makeSpaceForEdgeLabels", (() => function(zz) {
        let uz = zz.graph();
        uz.ranksep /= 2, zz.edges().forEach((bz => {
          var Ez;
          let nz = zz.edge(bz);
          nz.minlen *= 2, "c" !== (null != (Ez = nz.labelpos) ? Ez : "r").toLowerCase() && ("TB" === uz.rankdir || "BT" === uz.rankdir ? nz.width += nz.labeloffset : nz.height += nz.labeloffset)
        }))
      }(zz))), uz("    removeSelfEdges", (() => function(zz) {
        zz.edges().forEach((uz => {
          if (uz.v === uz.w) {
            let bz = zz.node(uz.v);
            bz.selfEdges || (bz.selfEdges = []), bz.selfEdges.push({
              e: uz,
              label: zz.edge(uz)
            }), zz.removeEdge(uz)
          }
        }))
      }(zz))), uz("    acyclic", (() => Fu(zz, Mz))), uz("    nestingGraph.run", (() => Uu(zz))), uz("    rank", (() => Vu(yz(zz)))), uz("    injectEdgeLabelProxies", (() => function(zz) {
        zz.edges().forEach((uz => {
          let bz = zz.edge(uz);
          if (bz.width && bz.height) {
            let bz = zz.node(uz.v),
              Ez = {
                rank: (zz.node(uz.w).rank - bz.rank) / 2 + bz.rank,
                e: uz
              };
            Sz(zz, "edge-proxy", Ez, "_ep")
          }
        }))
      }(zz))), uz("    removeEmptyRanks", (() => function(zz) {
        let uz = zz.nodes().map((uz => zz.node(uz).rank)).filter((zz => void 0 !== zz)),
          bz = jz(Math.min, uz),
          Ez = [];
        zz.nodes().forEach((uz => {
          let nz = zz.node(uz).rank - bz;
          Ez[nz] || (Ez[nz] = []), Ez[nz].push(uz)
        }));
        let nz = 0,
          iz = zz.graph().nodeRankFactor;
        Array.from(Ez).forEach(((uz, bz) => {
          void 0 === uz && bz % iz !== 0 ? --nz : void 0 !== uz && nz && uz.forEach((uz => zz.node(uz).rank += nz))
        }))
      }(zz))), uz("    nestingGraph.cleanup", (() => function(zz) {
        let uz = zz.graph();
        zz.removeNode(uz.nestingRoot), delete uz.nestingRoot, zz.edges().forEach((uz => {
          zz.edge(uz).nestingEdge && zz.removeEdge(uz)
        }))
      }(zz))), uz("    normalizeRanks", (() => function(zz) {
        let uz = zz.nodes().map((uz => {
            let bz = zz.node(uz).rank;
            return void 0 === bz ? Number.MAX_VALUE : bz
          })),
          bz = jz(Math.min, uz);
        zz.nodes().forEach((uz => {
          let Ez = zz.node(uz);
          Object.hasOwn(Ez, "rank") && (Ez.rank -= bz)
        }))
      }(zz))), uz("    assignRankMinMax", (() => function(zz) {
        let uz = 0;
        zz.nodes().forEach((bz => {
          let Ez = zz.node(bz);
          Ez.borderTop && (Ez.minRank = zz.node(Ez.borderTop).rank, Ez.maxRank = zz.node(Ez.borderBottom).rank, uz = Math.max(uz, Ez.maxRank))
        })), zz.graph().maxRank = uz
      }(zz))), uz("    removeEdgeLabelProxies", (() => function(zz) {
        zz.nodes().forEach((uz => {
          let bz = zz.node(uz);
          if ("edge-proxy" === bz.dummy) {
            let Ez = bz;
            zz.edge(Ez.e).labelRank = bz.rank, zz.removeNode(uz)
          }
        }))
      }(zz))), uz("    normalize.run", (() => Zu(zz))), uz("    parentDummyChains", (() => hu(zz))), uz("    addBorderSegments", (() => gu(zz))), uz("    order", (() => bb(zz, bz, tz))), uz("    insertSelfEdges", (() => function(zz) {
        Qz(zz).forEach((uz => {
          let bz = 0;
          uz.forEach(((uz, Ez) => {
            let nz = zz.node(uz);
            "number" != typeof nz.rank && (nz.rank = 0), nz.order = Ez + bz, (nz.selfEdges || []).forEach((uz => {
              Sz(zz, "selfedge", {
                width: uz.label.width,
                height: uz.label.height,
                rank: nz.rank,
                order: Ez + ++bz,
                e: uz.e,
                edgeLabel: uz.label
              }, "_se"), (!Array.isArray(uz.label.points) || 7 !== uz.label.points.length) && (uz.label.points = [{
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
            })), delete nz.selfEdges
          }))
        }))
      }(zz))), uz("    adjustCoordinateSystem", (() => function(zz) {
        var uz;
        let bz = null == (uz = zz.graph().rankdir) ? void 0 : uz.toLowerCase();
        ("lr" === bz || "rl" === bz) && Du(zz)
      }(zz))), uz("    position", (() => pb(zz, bz.corePath))), uz("    positionSelfEdges", (() => function(zz) {
        zz.nodes().forEach((uz => {
          let bz = zz.node(uz),
            Ez = zz => "number" == typeof zz && isFinite(zz);
          if ("selfedge" === bz.dummy) {
            let nz = bz,
              iz = zz.node(nz.e.v),
              lz = Ez(null == iz ? void 0 : iz.x) ? iz.x : 0,
              Mz = Ez(null == iz ? void 0 : iz.y) ? iz.y : 0,
              tz = Ez(null == iz ? void 0 : iz.width) ? iz.width : 0,
              Hz = Ez(null == iz ? void 0 : iz.height) ? iz.height : 0,
              Oz = Ez(bz.x) ? bz.x : lz,
              pz = Ez(bz.y) ? bz.y : Mz,
              dz = tz / 2,
              Fz = Hz / 2;
            nz.edgeLabel.points = [{
              x: Oz + dz,
              y: pz - Fz
            }, {
              x: Oz + dz,
              y: pz - Fz
            }, {
              x: Oz,
              y: pz
            }, {
              x: Oz - dz,
              y: pz + Fz
            }, {
              x: Oz - dz,
              y: pz + Fz
            }, {
              x: Oz,
              y: pz
            }, {
              x: Oz,
              y: pz
            }], nz.edgeLabel.x = Oz, nz.edgeLabel.y = pz, zz.setEdge(nz.e, nz.edgeLabel), zz.removeNode(uz)
          } else bz && Array.isArray(bz.selfEdges) && bz.selfEdges.forEach((zz => {
            if (!Array.isArray(zz.label.points) || 7 !== zz.label.points.length) {
              let uz = Ez(bz.x) ? bz.x : 0,
                nz = Ez(bz.y) ? bz.y : 0,
                iz = (Ez(bz.width) ? bz.width : 0) / 2,
                lz = (Ez(bz.height) ? bz.height : 0) / 2;
              zz.label.points = [{
                x: uz + iz,
                y: nz - lz
              }, {
                x: uz + iz,
                y: nz - lz
              }, {
                x: uz,
                y: nz
              }, {
                x: uz - iz,
                y: nz + lz
              }, {
                x: uz - iz,
                y: nz + lz
              }, {
                x: uz,
                y: nz
              }, {
                x: uz,
                y: nz
              }]
            }
          }))
        }))
      }(zz)));
      let Hz = JSON.parse(JSON.stringify(zz._nodes));
      return uz("    removeBorderNodes", (() => function(zz) {
        zz.nodes().forEach((uz => {
          if (zz.children(uz).length) {
            let bz = zz.node(uz),
              Ez = zz.node(bz.borderTop),
              nz = zz.node(bz.borderBottom),
              iz = zz.node(bz.borderLeft[bz.borderLeft.length - 1]),
              lz = zz.node(bz.borderRight[bz.borderRight.length - 1]);
            bz.width = Math.abs(lz.x - iz.x), bz.height = Math.abs(nz.y - Ez.y), bz.x = iz.x + bz.width / 2, bz.y = Ez.y + bz.height / 2
          }
        })), zz.nodes().forEach((uz => {
          "border" === zz.node(uz).dummy && zz.removeNode(uz)
        }))
      }(zz))), uz("    normalize.undo", (() => function(zz) {
        zz.graph().dummyChains.forEach((uz => {
          let bz, Ez = zz.node(uz),
            nz = Ez.edgeLabel;
          for (zz.setEdge(Ez.edgeObj, nz); Ez.dummy;) bz = zz.successors(uz)[0], zz.removeNode(uz), nz.points.push({
            x: Ez.x,
            y: Ez.y
          }), "edge-label" === Ez.dummy && (nz.x = Ez.x, nz.y = Ez.y, nz.width = Ez.width, nz.height = Ez.height), uz = bz, Ez = zz.node(uz)
        }))
      }(zz))), uz("    fixupEdgeLabelCoords", (() => function(zz) {
        zz.edges().forEach((uz => {
          let bz = zz.edge(uz);
          if (Object.hasOwn(bz, "x")) switch (("l" === bz.labelpos || "r" === bz.labelpos) && (bz.width -= bz.labeloffset), bz.labelpos) {
            case "l":
              bz.x -= bz.width / 2 + bz.labeloffset;
              break;
            case "r":
              bz.x += bz.width / 2 + bz.labeloffset
          }
        }))
      }(zz))), uz("    undoCoordinateSystem", (() => yu(zz))), uz("    translateGraph", (() => function(zz) {
        let uz = Number.POSITIVE_INFINITY,
          bz = 0,
          Ez = Number.POSITIVE_INFINITY,
          nz = 0,
          iz = zz.graph(),
          lz = iz.marginx || 0,
          Mz = iz.marginy || 0;

        function tz(zz) {
          let iz = zz.x,
            lz = zz.y,
            Mz = zz.width,
            tz = zz.height;
          uz = Math.min(uz, iz - Mz / 2), bz = Math.max(bz, iz + Mz / 2), Ez = Math.min(Ez, lz - tz / 2), nz = Math.max(nz, lz + tz / 2)
        }
        zz.nodes().forEach((uz => tz(zz.node(uz)))), zz.edges().forEach((uz => {
          let bz = zz.edge(uz);
          Object.hasOwn(bz, "x") && tz(bz)
        })), uz -= lz, Ez -= Mz, zz.nodes().forEach((bz => {
          let nz = zz.node(bz);
          nz.x -= uz, nz.y -= Ez
        })), zz.edges().forEach((bz => {
          let nz = zz.edge(bz);
          nz.points.forEach((zz => {
            zz.x -= uz, zz.y -= Ez
          })), Object.hasOwn(nz, "x") && (nz.x -= uz), Object.hasOwn(nz, "y") && (nz.y -= Ez)
        })), iz.width = bz - uz + lz, iz.height = nz - Ez + Mz
      }(zz))), uz("    assignNodeIntersects", (() => function(zz) {
        zz.edges().forEach((uz => {
          if (uz.v === uz.w) return;
          let bz, Ez, nz = zz.edge(uz),
            iz = zz.node(uz.v),
            lz = zz.node(uz.w);
          nz.points ? (bz = nz.points[0], Ez = nz.points[nz.points.length - 1]) : (nz.points = [], bz = lz, Ez = iz), nz.points.unshift(Dz(iz, bz)), nz.points.push(Dz(lz, Ez))
        }))
      }(zz))), uz("    reversePoints", (() => function(zz) {
        zz.edges().forEach((uz => {
          let bz = zz.edge(uz);
          bz.reversed && bz.points.reverse()
        }))
      }(zz))), uz("    acyclic.undo", (() => function(zz) {
        zz.edges().forEach((uz => {
          let bz = zz.edge(uz);
          if (bz.reversed) {
            zz.removeEdge(uz);
            let Ez = bz.forwardName;
            delete bz.reversed, delete bz.forwardName, zz.setEdge(uz.w, uz.v, bz, Ez)
          }
        }))
      }(zz))), {
        graph: zz,
        rawNodes: Hz
      }
    }

    function wb(zz, uz) {
      zz.nodes().forEach((bz => {
        let Ez = zz.node(bz),
          nz = uz.node(bz);
        Ez && (Ez.x = nz.x, Ez.y = nz.y, Ez.order = nz.order, Ez.rank = nz.rank, uz.children(bz).length && (Ez.width = nz.width, Ez.height = nz.height))
      })), zz.edges().forEach((bz => {
        let Ez = zz.edge(bz),
          nz = uz.edge(bz);
        Ez.points = nz.points, Object.hasOwn(nz, "x") && (Ez.x = nz.x, Ez.y = nz.y)
      })), zz.graph().width = uz.graph().width, zz.graph().height = uz.graph().height
    }
    var Xb = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      fb = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      sb = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      rb = ["width", "height", "rank"],
      ob = {
        width: 0,
        height: 0
      },
      Nb = ["minlen", "weight", "width", "height", "labeloffset"],
      vb = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      xb = ["labelpos"];

    function Jb(zz) {
      let uz = new gz({
          multigraph: !0,
          compound: !0
        }),
        bz = Tb(zz.graph());
      return uz.setGraph(Object.assign({}, fb, Ab(bz, Xb), uu(bz, sb))), zz.nodes().forEach((bz => {
        let Ez = Ab(Tb(zz.node(bz)), rb);
        Object.keys(ob).forEach((zz => {
          void 0 === Ez[zz] && (Ez[zz] = ob[zz])
        })), uz.setNode(bz, Ez);
        let nz = zz.parent(bz);
        void 0 !== nz && uz.setParent(bz, nz)
      })), zz.edges().forEach((bz => {
        let Ez = Tb(zz.edge(bz));
        uz.setEdge(bz, Object.assign({}, vb, Ab(Ez, Nb), uu(Ez, xb)))
      })), uz
    }

    function Ab(zz, uz) {
      return bu(uu(zz, uz), Number)
    }

    function Tb(zz) {
      let uz = {};
      return zz && Object.entries(zz).forEach((zz => {
        let [bz, Ez] = zz;
        "string" == typeof bz && (bz = bz.toLowerCase()), uz[bz] = Ez
      })), uz
    }

    function Lb(zz) {
      let uz = Qz(zz),
        bz = new gz({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return zz.nodes().forEach((uz => {
        bz.setNode(uz, {
          label: uz
        }), bz.setParent(uz, "layer" + zz.node(uz).rank)
      })), zz.edges().forEach((zz => bz.setEdge(zz.v, zz.w, {}, zz.name))), uz.forEach(((zz, uz) => {
        let Ez = "layer" + uz;
        bz.setNode(Ez, {
          rank: "same"
        }), zz.reduce(((zz, uz) => (bz.setEdge(zz, uz, {
          style: "invis"
        }), uz)))
      })), bz
    }
    var Pb = {
        time: Bz,
        notime: Cz
      },
      Gb = {
        graphlib: iz,
        version: iu,
        layout: Fb,
        debug: Lb,
        util: {
          time: Bz,
          notime: Cz
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);