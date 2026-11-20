export const id = 203;
export const ids = [203];
export const modules = {
  40617: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadGlbAsset: () => Da,
      loadGlbTree: () => Za
    });
    var Ab = Ub(37251),
      Mb = Ub(40625),
      Tb = Ub(35722),
      Eb = Ub.n(Tb);

    function Yb() {
      return Eb()('(()=>{class bb extends Error{}function ab(ab,Ub){const Ab=ab._malloc(Ub);if(0===Ab)throw new bb(`Draco: the decoder\'s heap refused ${Ub} bytes`);return Ab}function Ub(bb){return{[bb.DT_FLOAT32]:[Float32Array,5126],[bb.DT_INT8]:[Int8Array,5120],[bb.DT_INT16]:[Int16Array,5122],[bb.DT_INT32]:[Int32Array,5124],[bb.DT_UINT8]:[Uint8Array,5121],[bb.DT_UINT16]:[Uint16Array,5123],[bb.DT_UINT32]:[Uint32Array,5125]}}function Ab(ab,Ab,Mb,Tb,Eb){let Yb=null,Bb=null,eb=null;try{Yb=new ab.Decoder,Bb=new ab.DecoderBuffer,Bb.Init(Ab,Ab.byteLength);let vb=0;const Lb=Yb.GetEncodedGeometryType(Bb);if(Lb===ab.TRIANGULAR_MESH){const Ub=new ab.Mesh;eb=Ub;const Ab=Yb.DecodeBufferToMesh(Bb,Ub);if(!Ab.ok()||0===Ub.ptr)throw new bb(Ab.error_msg());vb=3*Ub.num_faces()}else{if(Lb!==ab.POINT_CLOUD)throw new bb(`Draco: Cannot decode invalid geometry type ${Lb}`);{const Ub=new ab.PointCloud;eb=Ub;const Ab=Yb.DecodeBufferToPointCloud(Bb,Ub);if(!Ab.ok()||!Ub.ptr)throw new bb(Ab.error_msg())}}const Pb=eb.num_points();if(Pb!==Tb.vertices||vb!==Tb.indices)throw new bb(`Draco: decoded ${Pb} vertices and ${vb} indices, the accessors declare ${Tb.vertices} and ${Tb.indices}`);const Xb=Ub(ab),jb=[];for(const{kind:ab,id:Ub,components:Ab}of Mb){const Mb=Yb.GetAttributeByUniqueId(eb,Ub);if(!Mb||0===Mb.ptr)throw new bb(`Draco: no attribute with id ${Ub} (${ab})`);const Tb=Mb.data_type();if(!Xb[Tb])throw new bb(`Draco: Cannot decode invalid data type ${Tb}`);if(Mb.num_components()!==Ab)throw new bb(`Draco: ${ab} decodes to ${Mb.num_components()} components, its accessor declares ${Ab}`);jb.push([ab,Mb,Tb])}return Eb({dracoDecoder:Yb,geometry:eb,triangles:Lb===ab.TRIANGULAR_MESH,numPoints:Pb,numIndices:vb,attributes:jb})}finally{eb&&ab.destroy(eb),Bb&&ab.destroy(Bb),Yb&&ab.destroy(Yb)}}const Mb=self;let Tb=null;self.onmessage=bb=>{let{data:Eb}=bb;if("init"===Eb.id){try{importScripts(Eb.url),Tb=DracoDecoderModule({wasmBinary:Eb.wasmBinary}),Mb.postMessage({id:"initDone"})}catch(Lb){Mb.postMessage({id:"initError",message:Lb instanceof Error?Lb.message:String(Lb)})}return}const{seq:Yb,data:Bb,attributeIds:eb,expected:vb}=Eb;Tb?Tb.then((bb=>{try{const Tb=function(bb,Mb,Tb,Eb){const Yb=Object.keys(Tb).map((bb=>({kind:bb,id:Tb[bb],components:Eb.components[bb]})));return Ab(bb,Mb,Yb,Eb,(Ab=>{let{dracoDecoder:Mb,geometry:Tb,triangles:Eb,numPoints:Yb,numIndices:Bb,attributes:eb}=Ab;const vb=Ub(bb);let Lb=null;if(Eb){const Ub=4*Bb,Ab=ab(bb,Ub);try{Mb.GetTrianglesUInt32Array(Tb,Ub,Ab),Lb=new Uint32Array(Bb),Lb.set(new Uint32Array(bb.HEAPF32.buffer,Ab,Bb))}finally{bb._free(Ab)}}const Pb=[];for(const[Ub,Xb,jb]of eb){const[Ab]=vb[jb],Eb=Xb.num_components(),Bb=Yb*Eb,eb=Bb*Ab.BYTES_PER_ELEMENT,Lb=ab(bb,eb);try{Mb.GetAttributeDataArrayForAllPoints(Tb,Xb,jb,eb,Lb),Pb.push({kind:Ub,data:new Ab(bb.HEAPF32.buffer,Lb,Bb).slice(),size:Eb,byteOffset:Xb.byte_offset(),byteStride:Xb.byte_stride(),normalized:Xb.normalized()})}finally{bb._free(Lb)}}return{indices:Lb,attributes:Pb,totalVertices:Yb}}))}(bb,Bb,eb,vb),Eb=Tb.attributes.map((bb=>bb.data.buffer));Tb.indices&&Eb.push(Tb.indices.buffer),Mb.postMessage({id:"decoded",seq:Yb,...Tb},Eb)}catch(Lb){Mb.postMessage({id:"decodeError",seq:Yb,message:Lb instanceof Error?Lb.message:String(Lb)})}}),(bb=>{Mb.postMessage({id:"decodeError",seq:Yb,message:bb instanceof Error?bb.message:String(bb)})})):Mb.postMessage({id:"decodeError",seq:Yb,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Ub.p + "dracoDecode.worker.50567806.worker.js")
    }
    var Bb = Ub(101);
    const eb = 1e3;
    let vb = null,
      Lb = null;
    const Pb = [],
      Xb = [];
    let jb = 0;
    const Rb = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      kb = function(bb, ab) {
        const Ub = bb ? Math.max(1, Math.min(Math.floor(.5 * bb), 4)) : 1;
        return ab ? Math.min(Ub, 2) : Ub
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Bb.isMobile)());

    function yb() {
      if (!vb) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: bb,
        wasmBinaryUrl: ab
      } = vb;
      return Lb ??= fetch(ab).then((bb => {
        if (!bb.ok) throw new Error(`Draco: fetching ${ab} failed: ${bb.status}`);
        return bb.arrayBuffer()
      })), Lb.catch((() => {
        Lb = null
      })), Rb.workersStarted++, Lb.then((ab => new Promise(((Ub, Ab) => {
        const Mb = new Yb;
        Mb.onerror = bb => {
          Mb.onmessage = null, Mb.onerror = null, Mb.terminate(), Ab(new Error("Draco: the decode worker failed to start" + (bb.message ? `: ${bb.message}` : " (its script did not load)")))
        }, Mb.onmessage = bb => {
          let {
            data: ab
          } = bb;
          Mb.onmessage = null, Mb.onerror = null, "initDone" === ab.id ? Ub(Mb) : (Mb.terminate(), Ab(new Error(`Draco: ${"initError"===ab.id?ab.message:"the worker did not start"}`)))
        };
        const Tb = ab.slice(0),
          Eb = {
            id: "init",
            url: bb,
            wasmBinary: Tb
          };
        Mb.postMessage(Eb, [Tb])
      }))))
    }

    function Zb(bb) {
      const ab = Pb.indexOf(bb); - 1 !== ab && Pb.splice(ab, 1);
      const Ub = Xb.shift();
      Ub && zb(Ub)
    }

    function Db(bb, ab) {
      bb.busy = !0, bb.releaseTimer && (clearTimeout(bb.releaseTimer), bb.releaseTimer = null);
      bb.worker.then((Ub => {
        const Ab = jb++;
        Ub.onmessage = Mb => {
          let {
            data: Tb
          } = Mb;
          if (("decoded" === Tb.id || "decodeError" === Tb.id) && Tb.seq === Ab) {
            if (Ub.onmessage = null, Ub.onerror = null, "decoded" === Tb.id) return Rb.decodes++, ab.resolve({
              indices: Tb.indices,
              attributes: Tb.attributes,
              totalVertices: Tb.totalVertices
            }), void(() => {
              const ab = Xb.shift();
              ab ? Db(bb, ab) : (bb.busy = !1, bb.releaseTimer = setTimeout((() => {
                const ab = Pb.indexOf(bb); - 1 !== ab && Pb.splice(ab, 1), bb.worker.then((bb => {
                  bb.terminate()
                }))
              }), eb))
            })();
            Ub.terminate(), ab.reject(new Error(Tb.message)), Zb(bb)
          }
        }, Ub.onerror = Ab => {
          Ub.onmessage = null, Ub.onerror = null, Ub.terminate(), ab.reject(new Error(`Draco: the decode worker failed: ${Ab.message}`)), Zb(bb)
        };
        const Mb = {
          id: "decode",
          seq: Ab,
          data: ab.data,
          attributeIds: ab.attributeIds,
          expected: ab.expected
        };
        Ub.postMessage(Mb, [ab.data.buffer])
      }), (Ub => {
        ab.reject(Ub instanceof Error ? Ub : new Error(String(Ub))), Zb(bb)
      }))
    }

    function zb(bb) {
      const ab = Pb.find((bb => !bb.busy));
      if (ab) Db(ab, bb);
      else {
        if (Pb.length < kb) {
          const ab = {
            worker: yb(),
            busy: !0,
            releaseTimer: null
          };
          return Pb.push(ab), Rb.mostWorkers = Math.max(Rb.mostWorkers, Pb.length), void Db(ab, bb)
        }
        Xb.push(bb)
      }
    }

    function xb(bb, ab, Ub) {
      return new Promise(((Ab, Mb) => {
        zb({
          data: new Int8Array(bb.buffer, bb.byteOffset, bb.byteLength).slice(),
          attributeIds: ab,
          expected: Ub,
          resolve: Ab,
          reject: Mb
        })
      }))
    }
    var ib = Ub(36813),
      fb = Ub(36821),
      mb = Ub(8985),
      pb = Ub(8982);
    const Nb = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Wb(bb) {
      const ab = (0, pb.i)(bb.byteLength);
      if (ab) throw new mb.j(ab);
      const {
        json: Ub,
        bin: Ab
      } = (0, mb.v)(bb), Mb = (0, pb.e)(Ub, Ab);
      if (Mb) throw new mb.j(Mb);
      try {
        return function(bb, ab) {
          var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb;
          const yb = new Map,
            Zb = Ub => {
              let Ab = yb.get(Ub);
              if (!Ab) {
                var Mb;
                const Tb = bb.bufferViews[Ub],
                  Eb = null !== (Mb = Tb.byteOffset) && void 0 !== Mb ? Mb : 0;
                Ab = {
                  index: Ub,
                  bytes: ab.subarray(Eb, Eb + Tb.byteLength),
                  byteStride: Tb.byteStride
                }, yb.set(Ub, Ab)
              }
              return Ab
            },
            Db = new Map,
            zb = ab => {
              let Ub = Db.get(ab);
              if (!Ub) {
                var Ab;
                const Mb = bb.accessors[ab];
                Ub = {
                  index: ab,
                  count: Mb.count,
                  type: Mb.type,
                  numComponents: mb.k[Mb.type],
                  componentType: Mb.componentType,
                  normalized: null !== (Ab = Mb.normalized) && void 0 !== Ab && Ab,
                  byteOffset: Mb.byteOffset,
                  bufferView: void 0 === Mb.bufferView ? null : Zb(Mb.bufferView),
                  min: Mb.min,
                  max: Mb.max
                }, Db.set(ab, Ub)
              }
              return Ub
            },
            xb = null !== (Ub = null === (Ab = bb.extensionsUsed) || void 0 === Ab ? void 0 : Ab.includes("KHR_draco_mesh_compression")) && void 0 !== Ub && Ub,
            ib = (null !== (Mb = bb.meshes) && void 0 !== Mb ? Mb : []).map(((ab, Ub) => {
              const Ab = ab.primitives.map(((ab, Ub) => {
                var Ab, Mb, Tb;
                const Eb = xb ? null === (Ab = ab.extensions) || void 0 === Ab ? void 0 : Ab.KHR_draco_mesh_compression : void 0;
                let Yb = null;
                const Bb = [];
                if (Eb) {
                  const Ub = {
                    vertices: bb.accessors[ab.attributes.POSITION].count,
                    indices: void 0 === ab.indices ? 0 : bb.accessors[ab.indices].count,
                    components: {}
                  };
                  Yb = {
                    bufferView: Zb(Eb.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Ub
                  };
                  for (const [Ab, Mb] of mb.h) {
                    const Tb = Eb.attributes[Ab];
                    if (void 0 === Tb) continue;
                    Yb.attributeIds[Mb] = Tb;
                    const Bb = ab.attributes[Ab];
                    var eb;
                    if (void 0 !== Bb) Yb.normalized[Mb] = null !== (eb = bb.accessors[Bb].normalized) && void 0 !== eb && eb, Ub.components[Mb] = mb.k[bb.accessors[Bb].type]
                  }
                } else
                  for (const [bb, vb] of mb.h) {
                    const Ub = ab.attributes[bb];
                    void 0 !== Ub && Bb.push({
                      semantic: bb,
                      kind: vb,
                      accessor: zb(Ub)
                    })
                  }
                return {
                  index: Ub,
                  mode: null !== (Mb = ab.mode) && void 0 !== Mb ? Mb : 4,
                  attributes: Bb,
                  indices: Eb || void 0 === ab.indices ? null : zb(ab.indices),
                  position: void 0 === ab.attributes.POSITION ? null : zb(ab.attributes.POSITION),
                  material: null !== (Tb = ab.material) && void 0 !== Tb ? Tb : null,
                  draco: Yb
                }
              }));
              return {
                index: Ub,
                name: ab.name,
                primitives: Ab,
                extras: ab.extras
              }
            })),
            fb = (null !== (Tb = bb.nodes) && void 0 !== Tb ? Tb : []).map(((bb, ab) => {
              var Ub, Ab;
              return {
                index: ab,
                name: bb.name,
                children: null !== (Ub = bb.children) && void 0 !== Ub ? Ub : [],
                mesh: null !== (Ab = bb.mesh) && void 0 !== Ab ? Ab : null,
                translation: bb.translation,
                rotation: bb.rotation,
                scale: bb.scale,
                hasCamera: void 0 !== bb.camera,
                extras: bb.extras
              }
            })),
            pb = null !== (Eb = null === (Yb = bb.extensionsUsed) || void 0 === Yb ? void 0 : Yb.includes("KHR_materials_unlit")) && void 0 !== Eb && Eb,
            Wb = null !== (Bb = null === (eb = bb.extensionsUsed) || void 0 === eb ? void 0 : eb.includes("KHR_texture_transform")) && void 0 !== Bb && Bb,
            Hb = (null !== (vb = bb.materials) && void 0 !== vb ? vb : []).map(((bb, ab) => {
              var Ub, Ab, Mb, Tb;
              const Eb = bb.pbrMetallicRoughness,
                Yb = null === Eb || void 0 === Eb ? void 0 : Eb.baseColorTexture;
              return {
                index: ab,
                name: bb.name,
                extras: bb.extras,
                unlit: pb && void 0 !== (null === (Ub = bb.extensions) || void 0 === Ub ? void 0 : Ub.KHR_materials_unlit),
                pbr: Eb ? {
                  baseColorFactor: Eb.baseColorFactor,
                  metallicFactor: Eb.metallicFactor,
                  roughnessFactor: Eb.roughnessFactor
                } : null,
                baseColorTexture: Yb ? {
                  texture: Yb.index,
                  transform: Wb && (null === (Ab = Yb.extensions) || void 0 === Ab ? void 0 : Ab.KHR_texture_transform) || null
                } : null,
                emissiveFactor: bb.emissiveFactor,
                alphaMode: null !== (Mb = bb.alphaMode) && void 0 !== Mb ? Mb : "OPAQUE",
                alphaCutoff: bb.alphaCutoff,
                doubleSided: null !== (Tb = bb.doubleSided) && void 0 !== Tb && Tb
              }
            })),
            Ib = (null !== (Lb = bb.textures) && void 0 !== Lb ? Lb : []).map(((ab, Ub) => {
              var Ab, Mb;
              const Tb = void 0 === ab.sampler ? Nb : {
                index: ab.sampler,
                ...null === (Ab = bb.samplers) || void 0 === Ab ? void 0 : Ab[ab.sampler]
              };
              return {
                index: Ub,
                sampler: {
                  index: Tb.index,
                  magFilter: Tb.magFilter,
                  minFilter: Tb.minFilter,
                  wrapS: Tb.wrapS,
                  wrapT: Tb.wrapT
                },
                image: null !== (Mb = ab.source) && void 0 !== Mb ? Mb : -1
              }
            })),
            db = (null !== (Pb = bb.images) && void 0 !== Pb ? Pb : []).map(((bb, ab) => ({
              index: ab,
              name: bb.name,
              mimeType: bb.mimeType,
              bufferView: Zb(bb.bufferView)
            }))),
            Fb = null !== (Xb = (0, mb.s)(bb)) && void 0 !== Xb ? Xb : 0;
          return {
            json: bb,
            rootNodes: null !== (jb = null === (Rb = bb.scenes) || void 0 === Rb || null === (kb = Rb[Fb]) || void 0 === kb ? void 0 : kb.nodes) && void 0 !== jb ? jb : [],
            nodes: fb,
            meshes: ib,
            materials: Hb,
            textures: Ib,
            images: db
          }
        }(Ub, Ab)
      } catch (Tb) {
        throw Tb instanceof mb.i ? Tb : new mb.i(`reading the GLB failed: ${Tb instanceof Error?Tb.message:String(Tb)}`)
      }
    }
    async function Hb(bb, ab) {
      var Ub, Ab;
      const Mb = bb.draco;
      if (!Mb) throw new mb.i("not a Draco primitive");
      let Tb;
      try {
        Tb = await ab(Mb.bufferView.bytes, Mb.attributeIds, Mb.expected)
      } catch (eb) {
        throw new mb.i(`Draco decoding failed: ${eb instanceof Error?eb.message:String(eb)}`)
      }
      const {
        vertices: Eb,
        indices: Yb,
        components: Bb
      } = Mb.expected;
      if (Tb.totalVertices !== Eb || (null !== (Ub = null === (Ab = Tb.indices) || void 0 === Ab ? void 0 : Ab.length) && void 0 !== Ub ? Ub : 0) !== Yb || Tb.attributes.some((bb => bb.size !== Bb[bb.kind] || bb.data.length !== Eb * bb.size))) throw new mb.i("Draco decoding gave other counts than the accessors declare");
      for (const vb of Tb.attributes) {
        const bb = Mb.normalized[vb.kind];
        void 0 !== bb && (vb.normalized = bb)
      }
      return Tb
    }
    const Ib = new WeakMap;

    function db(bb, ab) {
      var Ub;
      const Ab = null !== (Ub = Ib.get(bb)) && void 0 !== Ub ? Ub : ab(bb);
      return Ib.set(bb, Ab), Ab
    }

    function Fb(bb) {
      const ab = bb.bufferView,
        Ub = 5125 === bb.componentType ? Uint32Array : Uint16Array,
        Ab = ab.bytes.buffer,
        Mb = ab.bytes.byteOffset + (bb.byteOffset || 0);
      return Mb % Ub.BYTES_PER_ELEMENT !== 0 ? new Ub(Ab.slice(Mb, Mb + bb.count * Ub.BYTES_PER_ELEMENT), 0) : new Ub(Ab, Mb, bb.count)
    }

    function hb(bb, ab) {
      if (bb.min && bb.max) return [new Float64Array(bb.min), new Float64Array(bb.max)];
      const Ub = ab.find((bb => {
          let {
            kind: ab
          } = bb;
          return "position" === ab
        })),
        Ab = Ub ? (0, fb.g)(Ub, bb.count) : new Float32Array(0);
      return (0, fb.w)(Ab.length / 3, ((bb, ab) => Ab[3 * bb + ab]))
    }

    function Gb(bb) {
      const ab = bb.attributes.map((bb => {
          var ab, Ub;
          let {
            kind: Ab,
            accessor: Mb
          } = bb;
          const {
            bufferView: Tb,
            numComponents: Eb
          } = Mb;
          if (!Tb) {
            return {
              kind: Ab,
              data: db(Mb, (() => new Float32Array(Eb * Mb.count))),
              offset: 0,
              stride: 4 * Eb,
              components: Eb,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Yb = null !== (ab = Tb.byteStride) && void 0 !== ab ? ab : Eb * mb.d[Mb.componentType];
          return {
            kind: Ab,
            data: Tb.bytes,
            offset: null !== (Ub = Mb.byteOffset) && void 0 !== Ub ? Ub : 0,
            stride: Yb,
            components: Eb,
            glType: Mb.componentType,
            isNormalized: Mb.normalized
          }
        })),
        Ub = bb.indices,
        Ab = Ub && db(Ub, Fb),
        Mb = bb.position;
      return new fb.d(ab, Ab, Mb.count, ...hb(Mb, ab))
    }
    const Qb = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function qb(bb, ab) {
      const Ub = ab.attributes.map((bb => {
        let {
          kind: ab,
          data: Ub,
          size: Ab,
          byteOffset: Mb,
          byteStride: Tb,
          normalized: Eb
        } = bb;
        return {
          kind: ab,
          data: Ub,
          offset: Mb,
          stride: Tb,
          components: Ab,
          glType: 5120 + Qb.indexOf(Ub.constructor),
          isNormalized: Eb
        }
      }));
      return new fb.d(Ub, ab.indices, ab.totalVertices, ...hb(bb.position, Ub))
    }

    function ub(bb) {
      const ab = bb.lastIndexOf("/");
      return ab < 0 ? bb : bb.substring(ab + 1)
    }

    function rb(bb) {
      const ab = bb.lastIndexOf("/");
      return ab < 0 ? "" : bb.substring(0, ab + 1)
    }

    function Kb(bb) {
      return bb.name || `node${bb.index}`
    }
    const ob = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      lb = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      tb = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function wb(bb) {
      var ab, Ub, Ab, Mb;
      const Tb = null !== (ab = bb.minFilter) && void 0 !== ab ? ab : 9987;
      return 9729 === (null !== (Ub = bb.magFilter) && void 0 !== Ub ? Ub : 9729) ? null !== (Ab = lb[Tb]) && void 0 !== Ab ? Ab : 3 : null !== (Mb = tb[Tb]) && void 0 !== Mb ? Mb : 4
    }
    const sb = {
      33071: 0,
      33648: 2
    };

    function gb(bb) {
      var ab;
      return null !== (ab = sb[null !== bb && void 0 !== bb ? bb : 10497]) && void 0 !== ab ? ab : 1
    }

    function Cb(bb) {
      return 9728 === bb.minFilter || 9729 === bb.minFilter
    }

    function Vb(bb) {
      var ab, Ub, Ab;
      const Mb = Float64Array.from(null !== (ab = bb.scale) && void 0 !== ab ? ab : [1, 1, 1]);
      return bb.hasCamera && (Mb[0] = -1), {
        translation: Float64Array.from(null !== (Ub = bb.translation) && void 0 !== Ub ? Ub : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Ab = bb.rotation) && void 0 !== Ab ? Ab : [0, 0, 0, 1]),
        scale: Mb
      }
    }

    function Ob(bb, ab) {
      let {
        translation: Ub,
        rotation: Ab,
        scale: Mb
      } = bb;
      const Tb = new Float32Array(16);
      return (0, ib.d)(Mb, 0, Ab, 0, Ub, 0, Tb), ab && (0, ib.l)(Tb, ab, 0, Tb), Tb
    }
    class cb {
      constructor(bb, ab, Ub, Ab) {
        this.model = bb, this.decode = ab, this.fileInfo = Ub, this.uniqueRootUrl = Ab, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Mb = new Set,
          Tb = (ab, Ub) => {
            const Ab = bb.nodes[ab];
            if (this.parents.has(Ab)) throw new mb.i(`/nodes/${ab}: Invalid recursive node hierarchy`);
            this.parents.set(Ab, Ub);
            const Eb = null === Ab.mesh ? [] : bb.meshes[Ab.mesh].primitives,
              Yb = Eb.map((bb => {
                const ab = Eb.length > 1;
                return {
                  name: ab ? `${Kb(Ab)}_primitive${bb.index}` : Kb(Ab),
                  node: Ab,
                  primitive: bb,
                  part: ab,
                  geometry: null
                }
              }));
            this.uses.set(Ab, Yb);
            const Bb = null !== Ab.mesh && Mb.has(Ab.mesh);
            Mb.add(Ab.mesh), this.own.set(Ab, Bb ? [] : Yb);
            for (const bb of Ab.children) Tb(bb, Ab)
          };
        for (const Eb of bb.rootNodes) Tb(Eb, null);
        this.primitives = bb.nodes.flatMap((bb => {
          var ab;
          return null !== (ab = this.own.get(bb)) && void 0 !== ab ? ab : []
        }))
      }
      decodeGeometries() {
        const bb = new Map;
        return Promise.all(this.primitives.map((async ab => {
          const {
            primitive: Ub
          } = ab, Ab = Ub.draco;
          let Mb = Ab ? bb.get(Ab.bufferView.index) : Promise.resolve(Gb(Ub));
          Mb || (Mb = Hb(Ub, this.decode).then((bb => qb(Ub, bb))), bb.set(Ab.bufferView.index, Mb)), ab.geometry = await Mb
        })))
      }
      parentOf(bb) {
        var ab;
        return null !== (ab = this.parents.get(bb)) && void 0 !== ab ? ab : null
      }
      meshesUnder(bb) {
        const ab = this.model.nodes.filter((bb => this.uses.has(bb)));
        for (const Ab of ab) {
          const ab = this.uses.get(Ab),
            Ub = ab.find((ab => ab.name === bb));
          if (Ub) return 1 === ab.length ? this.subtree(Ab) : this.own.get(Ab).includes(Ub) ? [Ub] : []
        }
        const Ub = ab.find((ab => 1 !== this.uses.get(ab).length && Kb(ab) === bb));
        return Ub ? this.subtree(Ub) : null
      }
      subtree(bb) {
        return [...this.own.get(bb), ...bb.children.flatMap((bb => this.subtree(this.model.nodes[bb])))]
      }
      worldMatrix(bb, ab, Ub) {
        let Ab = Ob(Vb(ab ? ob : {}), null);
        const Mb = [];
        for (let Eb = bb.part ? bb.node : this.parentOf(bb.node); Eb; Eb = this.parentOf(Eb)) Mb.unshift(Eb);
        for (const Eb of Mb) Ab = Ob(Vb(Eb), Ab);
        const Tb = Vb(bb.part ? {} : bb.node);
        return void 0 !== Ub && Tb.scale.fill(Ub), Ob(Tb, Ab)
      }
      floats(bb) {
        const {
          vertexAttributes: ab,
          vertexCount: Ub
        } = bb.geometry;
        return new Map(ab.map((bb => [bb.kind, (0, fb.g)(bb, Ub)])))
      }
      imageUrl(bb) {
        return function(bb, ab, Ub) {
          let {
            name: Ab
          } = ab;
          return `data:${bb}${Ab}#image${Ub}`
        }(this.uniqueRootUrl, this.fileInfo, bb)
      }
      textureDesc(bb, ab) {
        var Ub;
        let {
          texture: Ab,
          transform: Mb
        } = bb;
        const {
          sampler: Tb,
          image: Eb
        } = this.model.textures[Ab], {
          bufferView: Yb,
          mimeType: Bb,
          name: eb
        } = this.model.images[Eb], vb = Mb && {
          ...Mb.offset ? {
            uOffset: Mb.offset[0],
            vOffset: Mb.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Mb.rotation ? {
            wAng: -Mb.rotation
          } : {},
          ...Mb.scale ? {
            uScale: Mb.scale[0],
            vScale: Mb.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Eb),
          noMipmap: Cb(Tb),
          invertY: !1,
          samplingMode: wb(Tb),
          data: {
            bytes: Yb.bytes,
            mimeType: Bb,
            label: eb,
            context: `/textures/${Ab}`
          },
          sets: {
            wrapU: gb(Tb.wrapS),
            wrapV: gb(Tb.wrapT),
            ...vb,
            coordinatesIndex: null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb.texCoord) && void 0 !== Ub ? Ub : 0,
            hasAlpha: ab
          }
        }
      }
    }
    async function Jb(bb, ab, Ub, Ab, Mb, Tb) {
      let Eb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Yb = function(bb, ab, Ub) {
          return "string" !== typeof ab ? {
            url: "",
            rootUrl: bb,
            name: Ub()
          } : ab ? ab.startsWith("data:") ? {
            url: ab,
            rootUrl: bb,
            name: ""
          } : bb ? {
            url: bb + ab,
            rootUrl: bb,
            name: ab
          } : {
            url: ab,
            rootUrl: rb(ab),
            name: ub(ab)
          } : {
            url: bb,
            rootUrl: rb(bb),
            name: ub(bb)
          }
        }(Ub, bb, Mb),
        Bb = {};
      ab.addPendingData(Bb);
      try {
        const Ub = Wb(await async function(bb, ab) {
            return "string" !== typeof ab ? ab : bb.url.startsWith("data:") ? (0, mb.n)(bb.url) : await (0, mb.r)(bb.url)
          }(Yb, bb)),
          Bb = new cb(Ub, Ab, Yb, function(bb, ab) {
            let {
              rootUrl: Ub,
              name: Ab
            } = bb;
            return !Ub.startsWith("file:") && Ab ? Ub : `${Ub}${ab()}/`
          }(Yb, Mb));
        return await Tb(Bb), ab.importedMeshesFiles && (ab.loadingPluginName = "iN", Eb && ab.importedMeshesFiles.push(Yb.url)), Bb
      } finally {
        ab.removePendingData(Bb)
      }
    }
    var nb = Ub(36926),
      Sb = Ub(36787),
      ba = Ub(37232);

    function aa(bb) {
      if (null === bb || void 0 === bb || !bb.min || !bb.max) return null;
      const [ab, Ub, Ab] = bb.min, [Mb, Tb, Eb] = bb.max, {
        BoundingInfo: Yb,
        Pj: Bb
      } = (0, nb.e)();
      return new Yb(new Bb(ab, Ub, Ab), new Bb(Mb, Tb, Eb))
    }

    function Ua(bb) {
      (0, Sb.g)(bb) || (bb.geometry && bb.geometry.useBoundingInfoFromGeometry ? bb._updateBoundingInfo() : bb.refreshBoundingInfo(!0, !0))
    }
    class Aa {
      constructor(bb, ab) {
        this.ZR = bb, this.decode = ab, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(bb) {
        let ab = this.viewData.get(bb.index);
        return ab || (ab = this.bufferData.then((() => bb.bytes)), this.viewData.set(bb.index, ab)), ab
      }
      viewBuffer(bb) {
        let ab = this.viewBuffers.get(bb.index);
        return ab || (ab = this.viewBytes(bb).then((bb => new((0, nb.e)().OX)(this.ZR.vj(), bb, !1))), this.viewBuffers.set(bb.index, ab)), ab
      }
      vertexBuffer(bb, ab) {
        const {
          kind: Ub,
          data: Ab
        } = ab, Mb = `${bb.index}:${Ub}`;
        let Tb = this.vertexBuffers.get(Mb);
        if (!Tb) {
          const Eb = bb.bufferView;
          Tb = Eb ? this.viewBuffer(Eb).then((bb => this.layoutVertexBuffer(bb, ab))) : Promise.resolve(Ab).then((bb => new((0, nb.e)().VertexBuffer)(this.ZR.vj(), bb, Ub, !1))), this.vertexBuffers.set(Mb, Tb)
        }
        return Tb
      }
      layoutVertexBuffer(bb, ab) {
        let {
          kind: Ub,
          offset: Ab,
          stride: Mb,
          components: Tb,
          glType: Eb,
          isNormalized: Yb
        } = ab;
        const Bb = this.ZR.vj();
        return new((0, nb.e)().VertexBuffer)(Bb, bb, Ub, !1, void 0, Mb, void 0, Ab, Tb, Eb, Yb, !0, void 0, !0)
      }
      load(bb, ab, Ub) {
        const Ab = (0, Sb.g)(Ub),
          Mb = bb => {
            Ab || (Ub._delayInfo = Ub._delayInfo || [], -1 === Ub._delayInfo.indexOf(bb) && Ub._delayInfo.push(bb))
          },
          Tb = ab.draco;
        if (Tb) {
          for (const bb in Tb.attributeIds) Mb(bb);
          let Eb = this.dracoGeometry.get(Tb.bufferView.index);
          return Eb || (Eb = this.viewBytes(Tb.bufferView).then((async () => {
            let Mb;
            try {
              Mb = await Hb(ab, this.decode)
            } catch (Bb) {
              throw new mb.i(`${bb}: ${Bb instanceof Error?Bb.message:String(Bb)}`)
            }
            const Tb = qb(ab, Mb);
            if (Ab) return Tb;
            const Eb = aa(ab.position),
              Yb = new((0, nb.e)().MirroredGeometry)(Ub.name, this.ZR);
            Eb && (Yb._boundingInfo = Eb, Yb.useBoundingInfoFromGeometry = !0), Tb.indexData && Yb.setIndices(Tb.indexData);
            for (const bb of Tb.vertexAttributes) Yb.setVerticesBuffer(this.layoutVertexBuffer(bb.data, bb), Tb.vertexCount);
            return Yb.link(Tb), Yb
          })), this.dracoGeometry.set(Tb.bufferView.index, Eb)), Eb
        }
        const Eb = [],
          Yb = Gb(ab);
        if (Ab) return Ub.isUnIndexed = !Yb.indexData, Ub.hasVertexAlpha = (0, ba.d)(ab), Promise.resolve(Yb);
        const Bb = new((0, nb.e)().MirroredGeometry)(Ub.name, this.ZR),
          {
            indexData: eb
          } = Yb;
        eb ? Eb.push(this.viewBytes(ab.indices.bufferView).then((() => {
          Bb.setIndices(eb)
        }))) : Ub.isUnIndexed = !0;
        for (const [vb, {
            kind: Lb,
            accessor: Pb
          }] of ab.attributes.entries()) Mb(Lb), Eb.push(this.vertexBuffer(Pb, Yb.vertexAttributes[vb]).then((bb => {
          if ("position" === bb.getKind()) {
            const bb = aa(Pb);
            bb && (Bb._boundingInfo = bb, Bb.useBoundingInfoFromGeometry = !0)
          }
          Bb.setVerticesBuffer(bb, Yb.vertexCount)
        })));
        return (0, ba.d)(ab) && (Ub.hasVertexAlpha = !0), Promise.all(Eb).then((() => (Bb.link(Yb), Bb)))
      }
    }
    var Ma, Ta = Ub(36637),
      Ea = Ub(36392),
      Ya = Ub(37245),
      Ba = Ub(36578),
      ea = Ub(36618),
      va = Ub(2549),
      La = Ub(36603);

    function Pa(bb, ab) {
      bb.metadata = bb.metadata || {};
      const Ub = bb._internalMetadata = bb._internalMetadata || {},
        Ab = Ub.iN = Ub.iN || {};
      (Ab.pointers = Ab.pointers || []).push(ab)
    }

    function Xa(bb, ab) {
      if (ab && Object.keys(ab).length > 0) {
        const Ub = bb.metadata = bb.metadata || {};
        (Ub.iN = Ub.iN || {}).extras = ab
      }
    }

    function ja(bb, ab) {
      ab.position = bb.translation ? Ea.Pj.FromArray(bb.translation) : Ea.Pj.Zero(), ab.rotationQuaternion = bb.rotation ? Ea.Quaternion.FromArray(bb.rotation) : Ea.Quaternion.Identity(), ab.nY = bb.scale ? Ea.Pj.FromArray(bb.scale) : Ea.Pj.One()
    }
    class Ra {
      constructor(bb, ab) {
        if (this.ZR = bb, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ab) {
          const ab = bb.vj(),
            Ub = bb.UW.add((() => {
              this.dispose()
            })),
            Ab = ab.onContextRestoredObservable.add((() => {
              for (const bb of [...this.geometries, ...this.meshes, ...this.textures]) bb._rebuild()
            }));
          this.release = () => {
            bb.UW.remove(Ub), ab.onContextRestoredObservable.remove(Ab)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const bb of this.meshes) this.ZR.rUb(bb);
          for (const bb of this.materials) this.ZR.addMaterial(bb);
          for (const bb of this.geometries) this.ZR.addGeometry(bb);
          for (const bb of this.transformNodes) this.ZR.addTransformNode(bb);
          for (const bb of this.textures) this.ZR.addTexture(bb)
        }
      }
      dispose() {
        var bb;
        for (const ab of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const bb of ab.slice()) bb.dispose();
          ab.length = 0
        }
        null === (bb = this.release) || void 0 === bb || bb.call(this), this.release = null
      }
    }
    class ka {
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        this.asset = bb, this.ZR = ab, this.tree = Ub, this.geometryData = Mb, this.materials = Tb, this.lite = Eb, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Ab ? Ub : null
      }
      create(bb) {
        if (this.lite) return bb();
        const ab = this.ZR;
        ab._blockEntityCollection = !!this.container;
        try {
          const ab = bb();
          return this.container && (ab._parentContainer = this.container), ab
        } finally {
          ab._blockEntityCollection = !1
        }
      }
      node(bb, ab) {
        return this.create((() => this.lite ? ab ? (0, Ya.f)(this.lite, bb) : (0, Ya.r)(this.lite, bb) : ab ? new((0, nb.e)().Mesh)(bb, this.ZR) : new((0, nb.e)().TransformNode)(bb, this.ZR)))
      }
      async load() {
        var bb;
        this.asset.model.json.nodes && this.createRoot();
        const ab = this.lite ? null : this.ZR,
          Ub = null !== (bb = null === ab || void 0 === ab ? void 0 : ab.blockMaterialDirtyMechanism) && void 0 !== bb && bb;
        let Ab;
        ab && (ab.blockMaterialDirtyMechanism = !0);
        try {
          Ab = this.loadScene()
        } finally {
          null === ab || void 0 === ab || ab._forceBlockMaterialDirtyMechanism(Ub)
        }
        await Ab;
        const {
          root: Mb,
          tree: Tb
        } = this;
        Mb && (Mb.Yz(!0), Tb.meshes.push(Mb), Tb.rootNodes.push(Mb));
        for (const Yb of this.asset.model.nodes) {
          const bb = this.nodeObjects.get(Yb.index);
          bb && ["TransformNode", "LiteNode"].includes(bb.getClassName()) && Tb.transformNodes.push(bb);
          for (const ab of null !== (Eb = this.nodePrimitives.get(Yb.index)) && void 0 !== Eb ? Eb : []) {
            var Eb;
            Tb.meshes.push(ab);
            const bb = ab.geometry;
            bb && !Tb.geometries.includes(bb) && Tb.geometries.push(bb)
          }
        }
      }
      createRoot() {
        const bb = this.node("__root__", !0);
        this.root = bb, bb.Yz(!1), this.ZR.useRightHandedSystem || ja(ob, bb)
      }
      loadScene() {
        const bb = [];
        for (const ab of this.asset.model.rootNodes) bb.push(this.loadNode(this.asset.model.nodes[ab], (bb => {
          bb.parent = this.root
        })));
        return bb.push(Promise.resolve()), Promise.all(bb).then((() => {}))
      }
      loadNode(bb, ab) {
        const Ub = `/nodes/${bb.index}`,
          Ab = [],
          Mb = Mb => {
            if (Pa(Mb, Ub), ja(bb, Mb), bb.hasCamera && !this.ZR.useRightHandedSystem) {
              const {
                nY: bb
              } = Mb;
              bb.set(-1, bb.y, bb.z)
            }
            for (const ab of bb.children) Ab.push(this.loadNode(this.asset.model.nodes[ab], (bb => {
              bb.parent = Mb
            })));
            (Ub => {
              Xa(Ub, bb.extras), ab(Ub)
            })(Mb)
          };
        if (null === bb.mesh) {
          const ab = this.node(Kb(bb), !1);
          this.nodeObjects.set(bb.index, ab), Mb(ab)
        } else {
          const ab = this.asset.model.meshes[bb.mesh];
          Ab.push(this.loadMesh(`/meshes/${ab.index}`, bb, ab, Mb))
        }
        return Promise.all(Ab).then((() => {
          for (const Ub of null !== (ab = this.nodePrimitives.get(bb.index)) && void 0 !== ab ? ab : []) {
            var ab;
            Ua(Ub)
          }
          return this.nodeObjects.get(bb.index)
        }))
      }
      loadMesh(bb, ab, Ub, Ab) {
        const Mb = [],
          Tb = Kb(ab);
        if (1 === Ub.primitives.length) {
          const Ab = Ub.primitives[0];
          Mb.push(this.loadPrimitive(`${bb}/primitives/${Ab.index}`, Tb, Ab, (bb => {
            this.nodeObjects.set(ab.index, bb), this.nodePrimitives.set(ab.index, [bb])
          })))
        } else {
          const Ab = this.node(Tb, !1);
          this.nodeObjects.set(ab.index, Ab);
          const Eb = [];
          this.nodePrimitives.set(ab.index, Eb);
          for (const ab of Ub.primitives) Mb.push(this.loadPrimitive(`${bb}/primitives/${ab.index}`, `${Tb}_primitive${ab.index}`, ab, (bb => {
            bb.parent = Ab, Eb.push(bb)
          })))
        }
        const Eb = this.nodeObjects.get(ab.index);
        return Ab(Eb), Promise.all(Mb).then((() => Eb))
      }
      loadPrimitive(bb, ab, Ub, Ab) {
        const Mb = [],
          Tb = this.node(ab, !0);
        if (Tb.sideOrientation = this.ZR.useRightHandedSystem ? Ba.c.CounterClockWiseSideOrientation : Ba.c.ClockWiseSideOrientation, Mb.push(this.geometryData.load(bb, Ub, Tb).then((bb => {
            if ((0, Sb.g)(Tb)) {
              var ab, Ub;
              const Ab = bb;
              Tb.replaceModel(Ab, Int32Array.of(0, null !== (ab = null === (Ub = Ab.indexData) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== ab ? ab : Ab.vertexCount, 0, Ab.vertexCount))
            } else this.create((() => (bb.applyToMesh(Tb), bb)))
          }))), this.materials) {
          const bb = 0 === Ub.mode ? Ba.c.PointListDrawMode : Ba.c.TriangleFillMode,
            ab = null === Ub.material ? null : this.asset.model.materials[Ub.material];
          Mb.push(this.loadMaterial(ab, bb, (bb => {
            Tb.material = bb
          })))
        }
        return Pa(Tb, bb), Ab(Tb), Promise.all(Mb).then((() => Tb))
      }
      loadMaterial(bb, ab, Ub) {
        var Ab;
        const Mb = `${null!==(Ab=null===bb||void 0===bb?void 0:bb.index)&&void 0!==Ab?Ab:"default"}:${ab}`;
        let Tb = this.materialData.get(Mb);
        return Tb || (Tb = this.createMaterial(bb, ab), this.materialData.set(Mb, Tb)), Ub(Tb.material), Tb.promise
      }
      createMaterial(bb, ab) {
        const Ub = bb ? bb.name || `material${bb.index}` : "__GLTFLoader._default",
          {
            style: Ab,
            unlit: Mb
          } = this.materials;
        let Tb;
        const Eb = this.create((() => {
          const Eb = (0, La.e)({
            name: Ub,
            ZR: this.ZR,
            sets: {
              ...(0, ba.b)(this.asset, bb, Ab, Mb),
              fillMode: ab
            },
            unrendered: !0
          });
          return Tb = Eb.model, Eb.mirror
        }));
        let Yb = Promise.resolve();
        if (bb) {
          const ab = `/materials/${bb.index}`,
            Ab = Tb.diffuseTexture;
          if (Ab && !Ab.mirror) Yb = new Promise((bb => setTimeout(bb)));
          else if (Ab) {
            const Mb = Ab.mirror;
            Mb._parentContainer = this.container, Mb.name = `${Ub} (Base Color)`, Pa(Mb, `${ab}${bb.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Mb), Yb = (0, ea.v)(Ab)
          }
          Xa(Eb, bb.extras), Pa(Eb, ab)
        }
        return this.tree.materials.push(Eb), {
          material: Eb,
          promise: Yb
        }
      }
    }

    function ya() {
      Ta.d.dracoDecodes = Rb.decodes, Ta.d.dracoWorkersStarted = Rb.workersStarted, Ta.d.dracoMostWorkers = Rb.mostWorkers
    }
    async function Za(bb, ab, Ub, Mb, Tb) {
      try {
        return await async function(bb, ab, Ub, Mb, Tb, Eb) {
          var Yb;
          let Bb;
          const eb = null === (Yb = (0, va.h)()) || void 0 === Yb ? void 0 : Yb.Fj,
            vb = null !== eb && void 0 !== eb && eb.hj && ab === eb.oN() ? eb : null,
            Lb = Tb && !vb;
          return await Jb(bb, ab, Ub, Mb, Ab.b, (bb => (Bb = new Ra(ab, Lb), new ka(bb, ab, Bb, Lb, new Aa(ab, Mb), Eb, vb).load())), !Tb), Bb
        }(bb, ab, Ub, xb, Mb, Tb)
      } finally {
        ya()
      }
    }
    async function Da(bb, ab, Ub, Mb) {
      try {
        return await Jb(bb, ab, Ub, xb, Ab.b, (bb => Mb(bb, new Aa(ab, xb))))
      } finally {
        ya()
      }
    }
    Ma = Mb.e, vb || (vb = {
      scriptUrl: new URL(Ma.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Ma.wasmBinaryUrl, location.href).href
    })
  },
  40625: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(137),
      Mb = Ub(1145);

    function Tb(bb) {
      return (0, Ab.d)() ? `https://${Mb.c.discordDomain}/${bb.href}` : bb.href
    }
    const Eb = {
      scriptUrl: Tb(new Ub.U(Ub(40632))),
      wasmBinaryUrl: Tb(new Ub.U(Ub(40638)))
    }
  },
  35722: bb => {
    bb.exports = function(bb, ab, Ub, Ab) {
      var Mb = self || window;
      try {
        try {
          var Tb;
          try {
            Tb = new Mb.Blob([bb])
          } catch (eb) {
            (Tb = new(Mb.BlobBuilder || Mb.WebKitBlobBuilder || Mb.MozBlobBuilder || Mb.MSBlobBuilder)).append(bb), Tb = Tb.getBlob()
          }
          var Eb = Mb.URL || Mb.webkitURL,
            Yb = Eb.createObjectURL(Tb),
            Bb = new Mb[ab](Yb, Ub);
          return Eb.revokeObjectURL(Yb), Bb
        } catch (eb) {
          return new Mb[ab]("data:application/javascript,".concat(encodeURIComponent(bb)), Ub)
        }
      } catch (eb) {
        if (!Ab) throw Error("Inline worker is not supported");
        return new Mb[ab](Ab, Ub)
      }
    }
  },
  40632: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  40638: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);