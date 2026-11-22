export const id = 208;
export const ids = [208];
export const modules = {
  41059: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadGlbAsset: () => Ye,
      loadGlbTree: () => ye
    });
    var Dk = ik(37497),
      fk = ik(41065),
      Sk = ik(35819),
      bk = ik.n(Sk);

    function rk() {
      return bk()('(()=>{class kk extends Error{}function ek(ek,ik){const Dk=ek._malloc(ik);if(0===Dk)throw new kk(`Draco: the decoder\'s heap refused ${ik} bytes`);return Dk}function ik(kk){return{[kk.DT_FLOAT32]:[Float32Array,5126],[kk.DT_INT8]:[Int8Array,5120],[kk.DT_INT16]:[Int16Array,5122],[kk.DT_INT32]:[Int32Array,5124],[kk.DT_UINT8]:[Uint8Array,5121],[kk.DT_UINT16]:[Uint16Array,5123],[kk.DT_UINT32]:[Uint32Array,5125]}}function Dk(ek,Dk,fk,Sk,bk){let rk=null,Pk=null,mk=null;try{rk=new ek.Decoder,Pk=new ek.DecoderBuffer,Pk.Init(Dk,Dk.byteLength);let Mk=0;const Kk=rk.GetEncodedGeometryType(Pk);if(Kk===ek.TRIANGULAR_MESH){const ik=new ek.Mesh;mk=ik;const Dk=rk.DecodeBufferToMesh(Pk,ik);if(!Dk.ok()||0===ik.ptr)throw new kk(Dk.error_msg());Mk=3*ik.num_faces()}else{if(Kk!==ek.POINT_CLOUD)throw new kk(`Draco: Cannot decode invalid geometry type ${Kk}`);{const ik=new ek.PointCloud;mk=ik;const Dk=rk.DecodeBufferToPointCloud(Pk,ik);if(!Dk.ok()||!ik.ptr)throw new kk(Dk.error_msg())}}const xk=mk.num_points();if(xk!==Sk.vertices||Mk!==Sk.indices)throw new kk(`Draco: decoded ${xk} vertices and ${Mk} indices, the accessors declare ${Sk.vertices} and ${Sk.indices}`);const nk=ik(ek),Uk=[];for(const{kind:ek,id:ik,components:Dk}of fk){const fk=rk.GetAttributeByUniqueId(mk,ik);if(!fk||0===fk.ptr)throw new kk(`Draco: no attribute with id ${ik} (${ek})`);const Sk=fk.data_type();if(!nk[Sk])throw new kk(`Draco: Cannot decode invalid data type ${Sk}`);if(fk.num_components()!==Dk)throw new kk(`Draco: ${ek} decodes to ${fk.num_components()} components, its accessor declares ${Dk}`);Uk.push([ek,fk,Sk])}return bk({dracoDecoder:rk,geometry:mk,triangles:Kk===ek.TRIANGULAR_MESH,numPoints:xk,numIndices:Mk,attributes:Uk})}finally{mk&&ek.destroy(mk),Pk&&ek.destroy(Pk),rk&&ek.destroy(rk)}}const fk=self;let Sk=null;self.onmessage=kk=>{let{data:bk}=kk;if("init"===bk.id){try{importScripts(bk.url),Sk=DracoDecoderModule({wasmBinary:bk.wasmBinary}),fk.postMessage({id:"initDone"})}catch(Kk){fk.postMessage({id:"initError",message:Kk instanceof Error?Kk.message:String(Kk)})}return}const{seq:rk,data:Pk,attributeIds:mk,expected:Mk}=bk;Sk?Sk.then((kk=>{try{const Sk=function(kk,fk,Sk,bk){const rk=Object.keys(Sk).map((kk=>({kind:kk,id:Sk[kk],components:bk.components[kk]})));return Dk(kk,fk,rk,bk,(Dk=>{let{dracoDecoder:fk,geometry:Sk,triangles:bk,numPoints:rk,numIndices:Pk,attributes:mk}=Dk;const Mk=ik(kk);let Kk=null;if(bk){const ik=4*Pk,Dk=ek(kk,ik);try{fk.GetTrianglesUInt32Array(Sk,ik,Dk),Kk=new Uint32Array(Pk),Kk.set(new Uint32Array(kk.HEAPF32.buffer,Dk,Pk))}finally{kk._free(Dk)}}const xk=[];for(const[ik,nk,Uk]of mk){const[Dk]=Mk[Uk],bk=nk.num_components(),Pk=rk*bk,mk=Pk*Dk.BYTES_PER_ELEMENT,Kk=ek(kk,mk);try{fk.GetAttributeDataArrayForAllPoints(Sk,nk,Uk,mk,Kk),xk.push({kind:ik,data:new Dk(kk.HEAPF32.buffer,Kk,Pk).slice(),size:bk,byteOffset:nk.byte_offset(),byteStride:nk.byte_stride(),normalized:nk.normalized()})}finally{kk._free(Kk)}}return{indices:Kk,attributes:xk,totalVertices:rk}}))}(kk,Pk,mk,Mk),bk=Sk.attributes.map((kk=>kk.data.buffer));Sk.indices&&bk.push(Sk.indices.buffer),fk.postMessage({id:"decoded",seq:rk,...Sk},bk)}catch(Kk){fk.postMessage({id:"decodeError",seq:rk,message:Kk instanceof Error?Kk.message:String(Kk)})}}),(kk=>{fk.postMessage({id:"decodeError",seq:rk,message:kk instanceof Error?kk.message:String(kk)})})):fk.postMessage({id:"decodeError",seq:rk,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ik.p + "dracoDecode.worker.a094a848.worker.js")
    }
    var Pk = ik(99);
    const mk = 1e3;
    let Mk = null,
      Kk = null;
    const xk = [],
      nk = [];
    let Uk = 0;
    const Hk = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      wk = function(kk, ek) {
        const ik = kk ? Math.max(1, Math.min(Math.floor(.5 * kk), 4)) : 1;
        return ek ? Math.min(ik, 2) : ik
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Pk.isMobile)());

    function lk() {
      if (!Mk) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: kk,
        wasmBinaryUrl: ek
      } = Mk;
      return Kk ??= fetch(ek).then((kk => {
        if (!kk.ok) throw new Error(`Draco: fetching ${ek} failed: ${kk.status}`);
        return kk.arrayBuffer()
      })), Kk.catch((() => {
        Kk = null
      })), Hk.workersStarted++, Kk.then((ek => new Promise(((ik, Dk) => {
        const fk = new rk;
        fk.onerror = kk => {
          fk.onmessage = null, fk.onerror = null, fk.terminate(), Dk(new Error("Draco: the decode worker failed to start" + (kk.message ? `: ${kk.message}` : " (its script did not load)")))
        }, fk.onmessage = kk => {
          let {
            data: ek
          } = kk;
          fk.onmessage = null, fk.onerror = null, "initDone" === ek.id ? ik(fk) : (fk.terminate(), Dk(new Error(`Draco: ${"initError"===ek.id?ek.message:"the worker did not start"}`)))
        };
        const Sk = ek.slice(0),
          bk = {
            id: "init",
            url: kk,
            wasmBinary: Sk
          };
        fk.postMessage(bk, [Sk])
      }))))
    }

    function pk(kk) {
      const ek = xk.indexOf(kk); - 1 !== ek && xk.splice(ek, 1);
      const ik = nk.shift();
      ik && Yk(ik)
    }

    function yk(kk, ek) {
      kk.busy = !0, kk.releaseTimer && (clearTimeout(kk.releaseTimer), kk.releaseTimer = null);
      kk.worker.then((ik => {
        const Dk = Uk++;
        ik.onmessage = fk => {
          let {
            data: Sk
          } = fk;
          if (("decoded" === Sk.id || "decodeError" === Sk.id) && Sk.seq === Dk) {
            if (ik.onmessage = null, ik.onerror = null, "decoded" === Sk.id) return Hk.decodes++, ek.resolve({
              indices: Sk.indices,
              attributes: Sk.attributes,
              totalVertices: Sk.totalVertices
            }), void(() => {
              const ek = nk.shift();
              ek ? yk(kk, ek) : (kk.busy = !1, kk.releaseTimer = setTimeout((() => {
                const ek = xk.indexOf(kk); - 1 !== ek && xk.splice(ek, 1), kk.worker.then((kk => {
                  kk.terminate()
                }))
              }), mk))
            })();
            ik.terminate(), ek.reject(new Error(Sk.message)), pk(kk)
          }
        }, ik.onerror = Dk => {
          ik.onmessage = null, ik.onerror = null, ik.terminate(), ek.reject(new Error(`Draco: the decode worker failed: ${Dk.message}`)), pk(kk)
        };
        const fk = {
          id: "decode",
          seq: Dk,
          data: ek.data,
          attributeIds: ek.attributeIds,
          expected: ek.expected
        };
        ik.postMessage(fk, [ek.data.buffer])
      }), (ik => {
        ek.reject(ik instanceof Error ? ik : new Error(String(ik))), pk(kk)
      }))
    }

    function Yk(kk) {
      const ek = xk.find((kk => !kk.busy));
      if (ek) yk(ek, kk);
      else {
        if (xk.length < wk) {
          const ek = {
            worker: lk(),
            busy: !0,
            releaseTimer: null
          };
          return xk.push(ek), Hk.mostWorkers = Math.max(Hk.mostWorkers, xk.length), void yk(ek, kk)
        }
        nk.push(kk)
      }
    }

    function Lk(kk, ek, ik) {
      return new Promise(((Dk, fk) => {
        Yk({
          data: new Int8Array(kk.buffer, kk.byteOffset, kk.byteLength).slice(),
          attributeIds: ek,
          expected: ik,
          resolve: Dk,
          reject: fk
        })
      }))
    }
    var Ck = ik(37064),
      Ak = ik(37075),
      jk = ik(33846),
      sk = ik(33838);
    const dk = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Vk(kk) {
      const ek = (0, sk.g)(kk.byteLength);
      if (ek) throw new jk.k(ek);
      const {
        json: ik,
        bin: Dk
      } = (0, jk.z)(kk), fk = (0, sk.f)(ik, Dk);
      if (fk) throw new jk.k(fk);
      try {
        return function(kk, ek) {
          var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk;
          const lk = new Map,
            pk = ik => {
              let Dk = lk.get(ik);
              if (!Dk) {
                var fk;
                const Sk = kk.bufferViews[ik],
                  bk = null !== (fk = Sk.byteOffset) && void 0 !== fk ? fk : 0;
                Dk = {
                  index: ik,
                  bytes: ek.subarray(bk, bk + Sk.byteLength),
                  byteStride: Sk.byteStride
                }, lk.set(ik, Dk)
              }
              return Dk
            },
            yk = new Map,
            Yk = ek => {
              let ik = yk.get(ek);
              if (!ik) {
                var Dk;
                const fk = kk.accessors[ek];
                ik = {
                  index: ek,
                  count: fk.count,
                  type: fk.type,
                  numComponents: jk.m[fk.type],
                  componentType: fk.componentType,
                  normalized: null !== (Dk = fk.normalized) && void 0 !== Dk && Dk,
                  byteOffset: fk.byteOffset,
                  bufferView: void 0 === fk.bufferView ? null : pk(fk.bufferView),
                  min: fk.min,
                  max: fk.max
                }, yk.set(ek, ik)
              }
              return ik
            },
            Lk = null !== (ik = null === (Dk = kk.extensionsUsed) || void 0 === Dk ? void 0 : Dk.includes("KHR_draco_mesh_compression")) && void 0 !== ik && ik,
            Ck = (null !== (fk = kk.meshes) && void 0 !== fk ? fk : []).map(((ek, ik) => {
              const Dk = ek.primitives.map(((ek, ik) => {
                var Dk, fk, Sk;
                const bk = Lk ? null === (Dk = ek.extensions) || void 0 === Dk ? void 0 : Dk.KHR_draco_mesh_compression : void 0;
                let rk = null;
                const Pk = [];
                if (bk) {
                  const ik = {
                    vertices: kk.accessors[ek.attributes.POSITION].count,
                    indices: void 0 === ek.indices ? 0 : kk.accessors[ek.indices].count,
                    components: {}
                  };
                  rk = {
                    bufferView: pk(bk.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ik
                  };
                  for (const [Dk, fk] of jk.h) {
                    const Sk = bk.attributes[Dk];
                    if (void 0 === Sk) continue;
                    rk.attributeIds[fk] = Sk;
                    const Pk = ek.attributes[Dk];
                    var mk;
                    if (void 0 !== Pk) rk.normalized[fk] = null !== (mk = kk.accessors[Pk].normalized) && void 0 !== mk && mk, ik.components[fk] = jk.m[kk.accessors[Pk].type]
                  }
                } else
                  for (const [kk, Mk] of jk.h) {
                    const ik = ek.attributes[kk];
                    void 0 !== ik && Pk.push({
                      semantic: kk,
                      kind: Mk,
                      accessor: Yk(ik)
                    })
                  }
                return {
                  index: ik,
                  mode: null !== (fk = ek.mode) && void 0 !== fk ? fk : 4,
                  attributes: Pk,
                  indices: bk || void 0 === ek.indices ? null : Yk(ek.indices),
                  position: void 0 === ek.attributes.POSITION ? null : Yk(ek.attributes.POSITION),
                  material: null !== (Sk = ek.material) && void 0 !== Sk ? Sk : null,
                  draco: rk
                }
              }));
              return {
                index: ik,
                name: ek.name,
                primitives: Dk,
                extras: ek.extras
              }
            })),
            Ak = (null !== (Sk = kk.nodes) && void 0 !== Sk ? Sk : []).map(((kk, ek) => {
              var ik, Dk;
              return {
                index: ek,
                name: kk.name,
                children: null !== (ik = kk.children) && void 0 !== ik ? ik : [],
                mesh: null !== (Dk = kk.mesh) && void 0 !== Dk ? Dk : null,
                translation: kk.translation,
                rotation: kk.rotation,
                scale: kk.scale,
                hasCamera: void 0 !== kk.camera,
                extras: kk.extras
              }
            })),
            sk = null !== (bk = null === (rk = kk.extensionsUsed) || void 0 === rk ? void 0 : rk.includes("KHR_materials_unlit")) && void 0 !== bk && bk,
            Vk = null !== (Pk = null === (mk = kk.extensionsUsed) || void 0 === mk ? void 0 : mk.includes("KHR_texture_transform")) && void 0 !== Pk && Pk,
            Fk = (null !== (Mk = kk.materials) && void 0 !== Mk ? Mk : []).map(((kk, ek) => {
              var ik, Dk, fk, Sk;
              const bk = kk.pbrMetallicRoughness,
                rk = null === bk || void 0 === bk ? void 0 : bk.baseColorTexture;
              return {
                index: ek,
                name: kk.name,
                extras: kk.extras,
                unlit: sk && void 0 !== (null === (ik = kk.extensions) || void 0 === ik ? void 0 : ik.KHR_materials_unlit),
                pbr: bk ? {
                  baseColorFactor: bk.baseColorFactor,
                  metallicFactor: bk.metallicFactor,
                  roughnessFactor: bk.roughnessFactor
                } : null,
                baseColorTexture: rk ? {
                  texture: rk.index,
                  transform: Vk && (null === (Dk = rk.extensions) || void 0 === Dk ? void 0 : Dk.KHR_texture_transform) || null
                } : null,
                emissiveFactor: kk.emissiveFactor,
                alphaMode: null !== (fk = kk.alphaMode) && void 0 !== fk ? fk : "OPAQUE",
                alphaCutoff: kk.alphaCutoff,
                doubleSided: null !== (Sk = kk.doubleSided) && void 0 !== Sk && Sk
              }
            })),
            uk = (null !== (Kk = kk.textures) && void 0 !== Kk ? Kk : []).map(((ek, ik) => {
              var Dk, fk;
              const Sk = void 0 === ek.sampler ? dk : {
                index: ek.sampler,
                ...null === (Dk = kk.samplers) || void 0 === Dk ? void 0 : Dk[ek.sampler]
              };
              return {
                index: ik,
                sampler: {
                  index: Sk.index,
                  magFilter: Sk.magFilter,
                  minFilter: Sk.minFilter,
                  wrapS: Sk.wrapS,
                  wrapT: Sk.wrapT
                },
                image: null !== (fk = ek.source) && void 0 !== fk ? fk : -1
              }
            })),
            qk = (null !== (xk = kk.images) && void 0 !== xk ? xk : []).map(((kk, ek) => ({
              index: ek,
              name: kk.name,
              mimeType: kk.mimeType,
              bufferView: pk(kk.bufferView)
            }))),
            Ik = null !== (nk = (0, jk.w)(kk)) && void 0 !== nk ? nk : 0;
          return {
            json: kk,
            rootNodes: null !== (Uk = null === (Hk = kk.scenes) || void 0 === Hk || null === (wk = Hk[Ik]) || void 0 === wk ? void 0 : wk.nodes) && void 0 !== Uk ? Uk : [],
            nodes: Ak,
            meshes: Ck,
            materials: Fk,
            textures: uk,
            images: qk
          }
        }(ik, Dk)
      } catch (Sk) {
        throw Sk instanceof jk.i ? Sk : new jk.i(`reading the GLB failed: ${Sk instanceof Error?Sk.message:String(Sk)}`)
      }
    }
    async function Fk(kk, ek) {
      var ik, Dk;
      const fk = kk.draco;
      if (!fk) throw new jk.i("not a Draco primitive");
      let Sk;
      try {
        Sk = await ek(fk.bufferView.bytes, fk.attributeIds, fk.expected)
      } catch (mk) {
        throw new jk.i(`Draco decoding failed: ${mk instanceof Error?mk.message:String(mk)}`)
      }
      const {
        vertices: bk,
        indices: rk,
        components: Pk
      } = fk.expected;
      if (Sk.totalVertices !== bk || (null !== (ik = null === (Dk = Sk.indices) || void 0 === Dk ? void 0 : Dk.length) && void 0 !== ik ? ik : 0) !== rk || Sk.attributes.some((kk => kk.size !== Pk[kk.kind] || kk.data.length !== bk * kk.size))) throw new jk.i("Draco decoding gave other counts than the accessors declare");
      for (const Mk of Sk.attributes) {
        const kk = fk.normalized[Mk.kind];
        void 0 !== kk && (Mk.normalized = kk)
      }
      return Sk
    }
    const uk = new WeakMap;

    function qk(kk, ek) {
      var ik;
      const Dk = null !== (ik = uk.get(kk)) && void 0 !== ik ? ik : ek(kk);
      return uk.set(kk, Dk), Dk
    }

    function Ik(kk) {
      const ek = kk.bufferView,
        ik = 5125 === kk.componentType ? Uint32Array : Uint16Array,
        Dk = ek.bytes.buffer,
        fk = ek.bytes.byteOffset + (kk.byteOffset || 0);
      return fk % ik.BYTES_PER_ELEMENT !== 0 ? new ik(Dk.slice(fk, fk + kk.count * ik.BYTES_PER_ELEMENT), 0) : new ik(Dk, fk, kk.count)
    }

    function zk(kk, ek) {
      if (kk.min && kk.max) return [new Float64Array(kk.min), new Float64Array(kk.max)];
      const ik = ek.find((kk => {
          let {
            kind: ek
          } = kk;
          return "position" === ek
        })),
        Dk = ik ? (0, Ak.e)(ik, kk.count) : new Float32Array(0);
      return (0, Ak.q)(Dk.length / 3, ((kk, ek) => Dk[3 * kk + ek]))
    }

    function Qk(kk) {
      const ek = kk.attributes.map((kk => {
          var ek, ik;
          let {
            kind: Dk,
            accessor: fk
          } = kk;
          const {
            bufferView: Sk,
            numComponents: bk
          } = fk;
          if (!Sk) {
            return {
              kind: Dk,
              data: qk(fk, (() => new Float32Array(bk * fk.count))),
              offset: 0,
              stride: 4 * bk,
              components: bk,
              glType: 5126,
              isNormalized: !1
            }
          }
          const rk = null !== (ek = Sk.byteStride) && void 0 !== ek ? ek : bk * jk.b[fk.componentType];
          return {
            kind: Dk,
            data: Sk.bytes,
            offset: null !== (ik = fk.byteOffset) && void 0 !== ik ? ik : 0,
            stride: rk,
            components: bk,
            glType: fk.componentType,
            isNormalized: fk.normalized
          }
        })),
        ik = kk.indices,
        Dk = ik && qk(ik, Ik),
        fk = kk.position;
      return new Ak.c(ek, Dk, fk.count, ...zk(fk, ek))
    }
    const vk = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Ek(kk, ek) {
      const ik = ek.attributes.map((kk => {
        let {
          kind: ek,
          data: ik,
          size: Dk,
          byteOffset: fk,
          byteStride: Sk,
          normalized: bk
        } = kk;
        return {
          kind: ek,
          data: ik,
          offset: fk,
          stride: Sk,
          components: Dk,
          glType: 5120 + vk.indexOf(ik.constructor),
          isNormalized: bk
        }
      }));
      return new Ak.c(ik, ek.indices, ek.totalVertices, ...zk(kk.position, ik))
    }

    function hk(kk) {
      const ek = kk.lastIndexOf("/");
      return ek < 0 ? kk : kk.substring(ek + 1)
    }

    function ak(kk) {
      const ek = kk.lastIndexOf("/");
      return ek < 0 ? "" : kk.substring(0, ek + 1)
    }

    function Wk(kk) {
      return kk.name || `node${kk.index}`
    }
    const tk = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Xk = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Bk = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function ck(kk) {
      var ek, ik, Dk, fk;
      const Sk = null !== (ek = kk.minFilter) && void 0 !== ek ? ek : 9987;
      return 9729 === (null !== (ik = kk.magFilter) && void 0 !== ik ? ik : 9729) ? null !== (Dk = Xk[Sk]) && void 0 !== Dk ? Dk : 3 : null !== (fk = Bk[Sk]) && void 0 !== fk ? fk : 4
    }
    const Tk = {
      33071: 0,
      33648: 2
    };

    function Zk(kk) {
      var ek;
      return null !== (ek = Tk[null !== kk && void 0 !== kk ? kk : 10497]) && void 0 !== ek ? ek : 1
    }

    function Ok(kk) {
      return 9728 === kk.minFilter || 9729 === kk.minFilter
    }

    function gk(kk) {
      var ek, ik, Dk;
      const fk = Float64Array.from(null !== (ek = kk.scale) && void 0 !== ek ? ek : [1, 1, 1]);
      return kk.hasCamera && (fk[0] = -1), {
        translation: Float64Array.from(null !== (ik = kk.translation) && void 0 !== ik ? ik : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Dk = kk.rotation) && void 0 !== Dk ? Dk : [0, 0, 0, 1]),
        scale: fk
      }
    }

    function Gk(kk, ek) {
      let {
        translation: ik,
        rotation: Dk,
        scale: fk
      } = kk;
      const Sk = new Float32Array(16);
      return (0, Ck.d)(fk, 0, Dk, 0, ik, 0, Sk), ek && (0, Ck.m)(Sk, ek, 0, Sk), Sk
    }
    class Nk {
      constructor(kk, ek, ik, Dk) {
        this.model = kk, this.decode = ek, this.fileInfo = ik, this.uniqueRootUrl = Dk, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const fk = new Set,
          Sk = (ek, ik) => {
            const Dk = kk.nodes[ek];
            if (this.parents.has(Dk)) throw new jk.i(`/nodes/${ek}: Invalid recursive node hierarchy`);
            this.parents.set(Dk, ik);
            const bk = null === Dk.mesh ? [] : kk.meshes[Dk.mesh].primitives,
              rk = bk.map((kk => {
                const ek = bk.length > 1;
                return {
                  name: ek ? `${Wk(Dk)}_primitive${kk.index}` : Wk(Dk),
                  node: Dk,
                  primitive: kk,
                  part: ek,
                  geometry: null
                }
              }));
            this.uses.set(Dk, rk);
            const Pk = null !== Dk.mesh && fk.has(Dk.mesh);
            fk.add(Dk.mesh), this.own.set(Dk, Pk ? [] : rk);
            for (const kk of Dk.children) Sk(kk, Dk)
          };
        for (const bk of kk.rootNodes) Sk(bk, null);
        this.primitives = kk.nodes.flatMap((kk => {
          var ek;
          return null !== (ek = this.own.get(kk)) && void 0 !== ek ? ek : []
        }))
      }
      decodeGeometries() {
        const kk = new Map;
        return Promise.all(this.primitives.map((async ek => {
          const {
            primitive: ik
          } = ek, Dk = ik.draco;
          let fk = Dk ? kk.get(Dk.bufferView.index) : Promise.resolve(Qk(ik));
          fk || (fk = Fk(ik, this.decode).then((kk => Ek(ik, kk))), kk.set(Dk.bufferView.index, fk)), ek.geometry = await fk
        })))
      }
      parentOf(kk) {
        var ek;
        return null !== (ek = this.parents.get(kk)) && void 0 !== ek ? ek : null
      }
      meshesUnder(kk) {
        const ek = this.model.nodes.filter((kk => this.uses.has(kk)));
        for (const Dk of ek) {
          const ek = this.uses.get(Dk),
            ik = ek.find((ek => ek.name === kk));
          if (ik) return 1 === ek.length ? this.subtree(Dk) : this.own.get(Dk).includes(ik) ? [ik] : []
        }
        const ik = ek.find((ek => 1 !== this.uses.get(ek).length && Wk(ek) === kk));
        return ik ? this.subtree(ik) : null
      }
      subtree(kk) {
        return [...this.own.get(kk), ...kk.children.flatMap((kk => this.subtree(this.model.nodes[kk])))]
      }
      worldMatrix(kk, ek, ik) {
        let Dk = Gk(gk(ek ? tk : {}), null);
        const fk = [];
        for (let bk = kk.part ? kk.node : this.parentOf(kk.node); bk; bk = this.parentOf(bk)) fk.unshift(bk);
        for (const bk of fk) Dk = Gk(gk(bk), Dk);
        const Sk = gk(kk.part ? {} : kk.node);
        return void 0 !== ik && Sk.scale.fill(ik), Gk(Sk, Dk)
      }
      floats(kk) {
        const {
          vertexAttributes: ek,
          vertexCount: ik
        } = kk.geometry;
        return new Map(ek.map((kk => [kk.kind, (0, Ak.e)(kk, ik)])))
      }
      imageUrl(kk) {
        return function(kk, ek, ik) {
          let {
            name: Dk
          } = ek;
          return `data:${kk}${Dk}#image${ik}`
        }(this.uniqueRootUrl, this.fileInfo, kk)
      }
      textureDesc(kk, ek) {
        var ik;
        let {
          texture: Dk,
          transform: fk
        } = kk;
        const {
          sampler: Sk,
          image: bk
        } = this.model.textures[Dk], {
          bufferView: rk,
          mimeType: Pk,
          name: mk
        } = this.model.images[bk], Mk = fk && {
          ...fk.offset ? {
            uOffset: fk.offset[0],
            vOffset: fk.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...fk.rotation ? {
            wAng: -fk.rotation
          } : {},
          ...fk.scale ? {
            uScale: fk.scale[0],
            vScale: fk.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(bk),
          noMipmap: Ok(Sk),
          invertY: !1,
          samplingMode: ck(Sk),
          data: {
            bytes: rk.bytes,
            mimeType: Pk,
            label: mk,
            context: `/textures/${Dk}`
          },
          sets: {
            wrapU: Zk(Sk.wrapS),
            wrapV: Zk(Sk.wrapT),
            ...Mk,
            coordinatesIndex: null !== (ik = null === fk || void 0 === fk ? void 0 : fk.texCoord) && void 0 !== ik ? ik : 0,
            hasAlpha: ek
          }
        }
      }
    }
    async function Rk(kk, ek, ik, Dk, fk, Sk) {
      let bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const rk = function(kk, ek, ik) {
          return "string" !== typeof ek ? {
            url: "",
            rootUrl: kk,
            name: ik()
          } : ek ? ek.startsWith("data:") ? {
            url: ek,
            rootUrl: kk,
            name: ""
          } : kk ? {
            url: kk + ek,
            rootUrl: kk,
            name: ek
          } : {
            url: ek,
            rootUrl: ak(ek),
            name: hk(ek)
          } : {
            url: kk,
            rootUrl: ak(kk),
            name: hk(kk)
          }
        }(ik, kk, fk),
        Pk = {};
      ek.addPendingData(Pk);
      try {
        const ik = Vk(await async function(kk, ek) {
            return "string" !== typeof ek ? ek : kk.url.startsWith("data:") ? (0, jk.q)(kk.url) : await (0, jk.t)(kk.url)
          }(rk, kk)),
          Pk = new Nk(ik, Dk, rk, function(kk, ek) {
            let {
              rootUrl: ik,
              name: Dk
            } = kk;
            return !ik.startsWith("file:") && Dk ? ik : `${ik}${ek()}/`
          }(rk, fk));
        return await Sk(Pk), ek.importedMeshesFiles && (ek.loadingPluginName = "YF", bk && ek.importedMeshesFiles.push(rk.url)), Pk
      } finally {
        ek.removePendingData(Pk)
      }
    }
    var Jk = ik(37189),
      ke = ik(37041),
      ee = ik(37479);

    function ie(kk) {
      if (null === kk || void 0 === kk || !kk.min || !kk.max) return null;
      const [ek, ik, Dk] = kk.min, [fk, Sk, bk] = kk.max, {
        BoundingInfo: rk,
        eH: Pk
      } = (0, Jk.b)();
      return new rk(new Pk(ek, ik, Dk), new Pk(fk, Sk, bk))
    }

    function De(kk) {
      (0, ke.d)(kk) || (kk.geometry && kk.geometry.useBoundingInfoFromGeometry ? kk._updateBoundingInfo() : kk.refreshBoundingInfo(!0, !0))
    }
    class fe {
      constructor(kk, ek) {
        this.bw = kk, this.decode = ek, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(kk) {
        let ek = this.viewData.get(kk.index);
        return ek || (ek = this.bufferData.then((() => kk.bytes)), this.viewData.set(kk.index, ek)), ek
      }
      viewBuffer(kk) {
        let ek = this.viewBuffers.get(kk.index);
        return ek || (ek = this.viewBytes(kk).then((kk => new((0, Jk.b)().hU)(this.bw.JU(), kk, !1))), this.viewBuffers.set(kk.index, ek)), ek
      }
      vertexBuffer(kk, ek) {
        const {
          kind: ik,
          data: Dk
        } = ek, fk = `${kk.index}:${ik}`;
        let Sk = this.vertexBuffers.get(fk);
        if (!Sk) {
          const bk = kk.bufferView;
          Sk = bk ? this.viewBuffer(bk).then((kk => this.layoutVertexBuffer(kk, ek))) : Promise.resolve(Dk).then((kk => new((0, Jk.b)().VertexBuffer)(this.bw.JU(), kk, ik, !1))), this.vertexBuffers.set(fk, Sk)
        }
        return Sk
      }
      layoutVertexBuffer(kk, ek) {
        let {
          kind: ik,
          offset: Dk,
          stride: fk,
          components: Sk,
          glType: bk,
          isNormalized: rk
        } = ek;
        const Pk = this.bw.JU();
        return new((0, Jk.b)().VertexBuffer)(Pk, kk, ik, !1, void 0, fk, void 0, Dk, Sk, bk, rk, !0, void 0, !0)
      }
      load(kk, ek, ik) {
        const Dk = (0, ke.d)(ik),
          fk = kk => {
            Dk || (ik._delayInfo = ik._delayInfo || [], -1 === ik._delayInfo.indexOf(kk) && ik._delayInfo.push(kk))
          },
          Sk = ek.draco;
        if (Sk) {
          for (const kk in Sk.attributeIds) fk(kk);
          let bk = this.dracoGeometry.get(Sk.bufferView.index);
          return bk || (bk = this.viewBytes(Sk.bufferView).then((async () => {
            let fk;
            try {
              fk = await Fk(ek, this.decode)
            } catch (Pk) {
              throw new jk.i(`${kk}: ${Pk instanceof Error?Pk.message:String(Pk)}`)
            }
            const Sk = Ek(ek, fk);
            if (Dk) return Sk;
            const bk = ie(ek.position),
              rk = new((0, Jk.b)().MirroredGeometry)(ik.name, this.bw);
            bk && (rk._boundingInfo = bk, rk.useBoundingInfoFromGeometry = !0), Sk.indexData && rk.setIndices(Sk.indexData);
            for (const kk of Sk.vertexAttributes) rk.setVerticesBuffer(this.layoutVertexBuffer(kk.data, kk), Sk.vertexCount);
            return rk.link(Sk), rk
          })), this.dracoGeometry.set(Sk.bufferView.index, bk)), bk
        }
        const bk = [],
          rk = Qk(ek);
        if (Dk) return ik.isUnIndexed = !rk.indexData, ik.hasVertexAlpha = (0, ee.d)(ek), Promise.resolve(rk);
        const Pk = new((0, Jk.b)().MirroredGeometry)(ik.name, this.bw),
          {
            indexData: mk
          } = rk;
        mk ? bk.push(this.viewBytes(ek.indices.bufferView).then((() => {
          Pk.setIndices(mk)
        }))) : ik.isUnIndexed = !0;
        for (const [Mk, {
            kind: Kk,
            accessor: xk
          }] of ek.attributes.entries()) fk(Kk), bk.push(this.vertexBuffer(xk, rk.vertexAttributes[Mk]).then((kk => {
          if ("position" === kk.getKind()) {
            const kk = ie(xk);
            kk && (Pk._boundingInfo = kk, Pk.useBoundingInfoFromGeometry = !0)
          }
          Pk.setVerticesBuffer(kk, rk.vertexCount)
        })));
        return (0, ee.d)(ek) && (ik.hasVertexAlpha = !0), Promise.all(bk).then((() => (Pk.link(rk), Pk)))
      }
    }
    var Se, be = ik(36920),
      re = ik(36690),
      Pe = ik(37489),
      me = ik(36861),
      Me = ik(36903),
      Ke = ik(2704),
      xe = ik(36894);

    function ne(kk, ek) {
      kk.metadata = kk.metadata || {};
      const ik = kk._internalMetadata = kk._internalMetadata || {},
        Dk = ik.YF = ik.YF || {};
      (Dk.pointers = Dk.pointers || []).push(ek)
    }

    function Ue(kk, ek) {
      if (ek && Object.keys(ek).length > 0) {
        const ik = kk.metadata = kk.metadata || {};
        (ik.YF = ik.YF || {}).extras = ek
      }
    }

    function He(kk, ek) {
      ek.position = kk.translation ? re.eH.FromArray(kk.translation) : re.eH.Zero(), ek.rotationQuaternion = kk.rotation ? re.Quaternion.FromArray(kk.rotation) : re.Quaternion.Identity(), ek.wi = kk.scale ? re.eH.FromArray(kk.scale) : re.eH.One()
    }
    class we {
      constructor(kk, ek) {
        if (this.bw = kk, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, ek) {
          const ek = kk.JU(),
            ik = kk.ZF.add((() => {
              this.dispose()
            })),
            Dk = ek.RU.add((() => {
              for (const kk of [...this.geometries, ...this.meshes, ...this.textures]) kk._rebuild()
            }));
          this.release = () => {
            kk.ZF.remove(ik), ek.RU.remove(Dk)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const kk of this.meshes) this.bw.Zik(kk);
          for (const kk of this.materials) this.bw.addMaterial(kk);
          for (const kk of this.geometries) this.bw.addGeometry(kk);
          for (const kk of this.transformNodes) this.bw.addTransformNode(kk);
          for (const kk of this.textures) this.bw.addTexture(kk)
        }
      }
      dispose() {
        var kk;
        for (const ek of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const kk of ek.slice()) kk.dispose();
          ek.length = 0
        }
        null === (kk = this.release) || void 0 === kk || kk.call(this), this.release = null
      }
    }
    class le {
      constructor(kk, ek, ik, Dk, fk, Sk, bk) {
        this.asset = kk, this.bw = ek, this.tree = ik, this.geometryData = fk, this.materials = Sk, this.lite = bk, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Dk ? ik : null
      }
      create(kk) {
        if (this.lite) return kk();
        const ek = this.bw;
        ek._blockEntityCollection = !!this.container;
        try {
          const ek = kk();
          return this.container && (ek._parentContainer = this.container), ek
        } finally {
          ek._blockEntityCollection = !1
        }
      }
      node(kk, ek) {
        return this.create((() => this.lite ? ek ? (0, Pe.e)(this.lite, kk) : (0, Pe.p)(this.lite, kk) : ek ? new((0, Jk.b)().Mesh)(kk, this.bw) : new((0, Jk.b)().TransformNode)(kk, this.bw)))
      }
      async load() {
        var kk;
        this.asset.model.json.nodes && this.createRoot();
        const ek = this.lite ? null : this.bw,
          ik = null !== (kk = null === ek || void 0 === ek ? void 0 : ek.blockMaterialDirtyMechanism) && void 0 !== kk && kk;
        let Dk;
        ek && (ek.blockMaterialDirtyMechanism = !0);
        try {
          Dk = this.loadScene()
        } finally {
          null === ek || void 0 === ek || ek._forceBlockMaterialDirtyMechanism(ik)
        }
        await Dk;
        const {
          root: fk,
          tree: Sk
        } = this;
        fk && (fk.bV(!0), Sk.meshes.push(fk), Sk.rootNodes.push(fk));
        for (const rk of this.asset.model.nodes) {
          const kk = this.nodeObjects.get(rk.index);
          kk && ["TransformNode", "LiteNode"].includes(kk.getClassName()) && Sk.transformNodes.push(kk);
          for (const ek of null !== (bk = this.nodePrimitives.get(rk.index)) && void 0 !== bk ? bk : []) {
            var bk;
            Sk.meshes.push(ek);
            const kk = ek.geometry;
            kk && !Sk.geometries.includes(kk) && Sk.geometries.push(kk)
          }
        }
      }
      createRoot() {
        const kk = this.node("__root__", !0);
        this.root = kk, kk.bV(!1), this.bw.useRightHandedSystem || He(tk, kk)
      }
      loadScene() {
        const kk = [];
        for (const ek of this.asset.model.rootNodes) kk.push(this.loadNode(this.asset.model.nodes[ek], (kk => {
          kk.parent = this.root
        })));
        return kk.push(Promise.resolve()), Promise.all(kk).then((() => {}))
      }
      loadNode(kk, ek) {
        const ik = `/nodes/${kk.index}`,
          Dk = [],
          fk = fk => {
            if (ne(fk, ik), He(kk, fk), kk.hasCamera && !this.bw.useRightHandedSystem) {
              const {
                wi: kk
              } = fk;
              kk.set(-1, kk.y, kk.z)
            }
            for (const ek of kk.children) Dk.push(this.loadNode(this.asset.model.nodes[ek], (kk => {
              kk.parent = fk
            })));
            (ik => {
              Ue(ik, kk.extras), ek(ik)
            })(fk)
          };
        if (null === kk.mesh) {
          const ek = this.node(Wk(kk), !1);
          this.nodeObjects.set(kk.index, ek), fk(ek)
        } else {
          const ek = this.asset.model.meshes[kk.mesh];
          Dk.push(this.loadMesh(`/meshes/${ek.index}`, kk, ek, fk))
        }
        return Promise.all(Dk).then((() => {
          for (const ik of null !== (ek = this.nodePrimitives.get(kk.index)) && void 0 !== ek ? ek : []) {
            var ek;
            De(ik)
          }
          return this.nodeObjects.get(kk.index)
        }))
      }
      loadMesh(kk, ek, ik, Dk) {
        const fk = [],
          Sk = Wk(ek);
        if (1 === ik.primitives.length) {
          const Dk = ik.primitives[0];
          fk.push(this.loadPrimitive(`${kk}/primitives/${Dk.index}`, Sk, Dk, (kk => {
            this.nodeObjects.set(ek.index, kk), this.nodePrimitives.set(ek.index, [kk])
          })))
        } else {
          const Dk = this.node(Sk, !1);
          this.nodeObjects.set(ek.index, Dk);
          const bk = [];
          this.nodePrimitives.set(ek.index, bk);
          for (const ek of ik.primitives) fk.push(this.loadPrimitive(`${kk}/primitives/${ek.index}`, `${Sk}_primitive${ek.index}`, ek, (kk => {
            kk.parent = Dk, bk.push(kk)
          })))
        }
        const bk = this.nodeObjects.get(ek.index);
        return Dk(bk), Promise.all(fk).then((() => bk))
      }
      loadPrimitive(kk, ek, ik, Dk) {
        const fk = [],
          Sk = this.node(ek, !0);
        if (Sk.sideOrientation = this.bw.useRightHandedSystem ? me.c.CounterClockWiseSideOrientation : me.c.ClockWiseSideOrientation, fk.push(this.geometryData.load(kk, ik, Sk).then((kk => {
            if ((0, ke.d)(Sk)) {
              var ek, ik;
              const Dk = kk;
              Sk.replaceModel(Dk, Int32Array.of(0, null !== (ek = null === (ik = Dk.indexData) || void 0 === ik ? void 0 : ik.length) && void 0 !== ek ? ek : Dk.vertexCount, 0, Dk.vertexCount))
            } else this.create((() => (kk.applyToMesh(Sk), kk)))
          }))), this.materials) {
          const kk = 0 === ik.mode ? me.c.PointListDrawMode : me.c.TriangleFillMode,
            ek = null === ik.material ? null : this.asset.model.materials[ik.material];
          fk.push(this.loadMaterial(ek, kk, (kk => {
            Sk.material = kk
          })))
        }
        return ne(Sk, kk), Dk(Sk), Promise.all(fk).then((() => Sk))
      }
      loadMaterial(kk, ek, ik) {
        var Dk;
        const fk = `${null!==(Dk=null===kk||void 0===kk?void 0:kk.index)&&void 0!==Dk?Dk:"default"}:${ek}`;
        let Sk = this.materialData.get(fk);
        return Sk || (Sk = this.createMaterial(kk, ek), this.materialData.set(fk, Sk)), ik(Sk.material), Sk.promise
      }
      createMaterial(kk, ek) {
        const ik = kk ? kk.name || `material${kk.index}` : "__GLTFLoader._default",
          {
            style: Dk,
            unlit: fk
          } = this.materials;
        let Sk;
        const bk = this.create((() => {
          const bk = (0, xe.d)({
            name: ik,
            bw: this.bw,
            sets: {
              ...(0, ee.b)(this.asset, kk, Dk, fk),
              fillMode: ek
            },
            unrendered: !0
          });
          return Sk = bk.model, bk.mirror
        }));
        let rk = Promise.resolve();
        if (kk) {
          const ek = `/materials/${kk.index}`,
            Dk = Sk.diffuseTexture;
          if (Dk && !Dk.mirror) rk = new Promise((kk => setTimeout(kk)));
          else if (Dk) {
            const fk = Dk.mirror;
            fk._parentContainer = this.container, fk.name = `${ik} (Base Color)`, ne(fk, `${ek}${kk.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(fk), rk = (0, Me.p)(Dk)
          }
          Ue(bk, kk.extras), ne(bk, ek)
        }
        return this.tree.materials.push(bk), {
          material: bk,
          promise: rk
        }
      }
    }

    function pe() {
      be.d.dracoDecodes = Hk.decodes, be.d.dracoWorkersStarted = Hk.workersStarted, be.d.dracoMostWorkers = Hk.mostWorkers
    }
    async function ye(kk, ek, ik, fk, Sk) {
      try {
        return await async function(kk, ek, ik, fk, Sk, bk) {
          var rk;
          let Pk;
          const mk = null === (rk = (0, Ke.e)()) || void 0 === rk ? void 0 : rk.yH,
            Mk = null !== mk && void 0 !== mk && mk.YH && ek === mk.XF() ? mk : null,
            Kk = Sk && !Mk;
          return await Rk(kk, ek, ik, fk, Dk.b, (kk => (Pk = new we(ek, Kk), new le(kk, ek, Pk, Kk, new fe(ek, fk), bk, Mk).load())), !Sk), Pk
        }(kk, ek, ik, Lk, fk, Sk)
      } finally {
        pe()
      }
    }
    async function Ye(kk, ek, ik, fk) {
      try {
        return await Rk(kk, ek, ik, Lk, Dk.b, (kk => fk(kk, new fe(ek, Lk))))
      } finally {
        pe()
      }
    }
    Se = fk.b, Mk || (Mk = {
      scriptUrl: new URL(Se.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Se.wasmBinaryUrl, location.href).href
    })
  },
  41065: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(131),
      fk = ik(1181);

    function Sk(kk) {
      return (0, Dk.e)() ? `https://${fk.e.discordDomain}/${kk.href}` : kk.href
    }
    const bk = {
      scriptUrl: Sk(new ik.U(ik(41068))),
      wasmBinaryUrl: Sk(new ik.U(ik(41070)))
    }
  },
  35819: kk => {
    kk.exports = function(kk, ek, ik, Dk) {
      var fk = self || window;
      try {
        try {
          var Sk;
          try {
            Sk = new fk.Blob([kk])
          } catch (mk) {
            (Sk = new(fk.BlobBuilder || fk.WebKitBlobBuilder || fk.MozBlobBuilder || fk.MSBlobBuilder)).append(kk), Sk = Sk.getBlob()
          }
          var bk = fk.URL || fk.webkitURL,
            rk = bk.createObjectURL(Sk),
            Pk = new fk[ek](rk, ik);
          return bk.revokeObjectURL(rk), Pk
        } catch (mk) {
          return new fk[ek]("data:application/javascript,".concat(encodeURIComponent(kk)), ik)
        }
      } catch (mk) {
        if (!Dk) throw Error("Inline worker is not supported");
        return new fk[ek](Dk, ik)
      }
    }
  },
  41070: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  41068: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);